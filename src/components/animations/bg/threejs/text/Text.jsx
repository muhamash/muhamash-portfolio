"use client"

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { ShapeGeometry } from 'three/src/geometries/ShapeGeometry.js';

const AnimatedBackground = ({ text , textSize, particleSize = 1 }) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 0, 100);
    
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    
    containerRef.current.appendChild(renderer.domElement);
    
    // Load font and particle texture
    let typo = null;
    let particleImg = null;
    let particles = null;
    let geometryCopy = null;
    
    const loadAssets = async () => {
      const fontLoader = new FontLoader();
      
      try {
        // Font loading
        typo = await new Promise((resolve, reject) => {
          fontLoader.load('https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json', 
            font => resolve(font), 
            undefined, 
            error => reject(error)
          );
        });
        
        // Particle texture loading
        particleImg = await new Promise((resolve, reject) => {
          new THREE.TextureLoader().load(
            'https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png',
            texture => resolve(texture),
            undefined,
            error => reject(error)
          );
        });
        
        createParticles();
        animate();
      } catch (error) {
        console.error("Failed to load assets:", error);
      }
    };
    
    // Mouse interaction variables
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-200, 200);
    const colorChange = new THREE.Color();
    let buttom = false;
    let ease = 0.05;
    const area = 250;
    
    // Create a plane for raycasting
    const planeGeometry = new THREE.PlaneGeometry(
      visibleWidthAtZDepth(100, camera), 
      visibleHeightAtZDepth(100, camera)
    );
    const planeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00ff00, 
      transparent: true,
      opacity: 0
    });
    const planeArea = new THREE.Mesh(planeGeometry, planeMaterial);
    planeArea.visible = false;
    scene.add(planeArea);
    
    // Create particles from text
    const createParticles = () => {
      let thePoints = [];
      let shapes = typo.generateShapes(text, textSize);
      let geometry = new ShapeGeometry(shapes);
      geometry.computeBoundingBox();
      
      const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
      const yMid = (geometry.boundingBox.max.y - geometry.boundingBox.min.y) / 2.85;
      
      geometry.center();
      
      let holeShapes = [];
      
      for (let q = 0; q < shapes.length; q++) {
        let shape = shapes[q];
        
        if (shape.holes && shape.holes.length > 0) {
          for (let j = 0; j < shape.holes.length; j++) {
            let hole = shape.holes[j];
            holeShapes.push(hole);
          }
        }
      }
      
      shapes.push.apply(shapes, holeShapes);
      
      let colors = [];
      let sizes = [];
      
      // Create a violet color
      const violetColor = new THREE.Color(0x8A7BE7);
      
      for (let x = 0; x < shapes.length; x++) {
        let shape = shapes[x];
        const amountPoints = (shape.type == 'Path') ? 1200 / 2 : 1200;
        let points = shape.getSpacedPoints(amountPoints);
        
        points.forEach((element) => {
          const a = new THREE.Vector3(element.x, element.y, 0);
          thePoints.push(a);
          // Set initial color to violet
          colors.push(violetColor.r, violetColor.g, violetColor.b);
          sizes.push(particleSize);
        });
      }
      
      let geoParticles = new THREE.BufferGeometry().setFromPoints(thePoints);
      geoParticles.translate(xMid, yMid, 0);
      
      geoParticles.setAttribute('customColor', new THREE.Float32BufferAttribute(colors, 3));
      geoParticles.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
      
      const vertexShader = `
        attribute float size;
        attribute vec3 customColor;
        varying vec3 vColor;
        void main() {
          vColor = customColor;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `;
      
      const fragmentShader = `
        uniform vec3 color;
        uniform sampler2D pointTexture;
        varying vec3 vColor;
        void main() {
          gl_FragColor = vec4(color * vColor, 1.0);
          gl_FragColor = gl_FragColor * texture2D(pointTexture, gl_PointCoord);
        }
      `;
      
      const material = new THREE.ShaderMaterial({
        uniforms: {
          color: { value: new THREE.Color(0xffffff) },
          pointTexture: { value: particleImg }
        },
        vertexShader,
        fragmentShader,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true,
      });
      
      particles = new THREE.Points(geoParticles, material);
      scene.add(particles);
      
      geometryCopy = new THREE.BufferGeometry();
      geometryCopy.copy(particles.geometry);
    };
    
    // Window resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    // Mouse handlers
    const handleMouseDown = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      
      buttom = true;
      ease = 0.01;
    };
    
    const handleMouseUp = () => {
      buttom = false;
      ease = 0.05;
    };
    
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    // Animation loop
    const animate = () => {
      if (particles) {
        const time = (0.001 * performance.now() % 12) / 12;
        const zigzagTime = (1 + Math.sin(time * 2 * Math.PI)) / 6;
        
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(planeArea);
        
        if (intersects.length > 0 && particles) {
          const pos = particles.geometry.attributes.position;
          const copy = geometryCopy.attributes.position;
          const colors = particles.geometry.attributes.customColor;
          const size = particles.geometry.attributes.size;
          
          const mx = intersects[0].point.x;
          const my = intersects[0].point.y;
          const mz = intersects[0].point.z;
          
          for (let i = 0, l = pos.count; i < l; i++) {
            const initX = copy.getX(i);
            const initY = copy.getY(i);
            const initZ = copy.getZ(i);
            
            let px = pos.getX(i);
            let py = pos.getY(i);
            let pz = pos.getZ(i);
            
            // Initial color is violet (HSL: ~0.8, 1, 0.5)
            colorChange.setHSL(0.8, 1, 0.5);
            colors.setXYZ(i, colorChange.r, colorChange.g, colorChange.b);
            colors.needsUpdate = true;
            
            size.array[i] = particleSize;
            size.needsUpdate = true;
            
            let dx = mx - px;
            let dy = my - py;
            
            const mouseDistance = distance(mx, my, px, py);
            let d = (dx = mx - px) * dx + (dy = my - py) * dy;
            const f = -area / d;
            
            if (buttom) {
              const t = Math.atan2(dy, dx);
              px -= f * Math.cos(t);
              py -= f * Math.sin(t);
              
              colorChange.setHSL(0.8 + zigzagTime, 1.0, 0.5);
              colors.setXYZ(i, colorChange.r, colorChange.g, colorChange.b);
              colors.needsUpdate = true;
              
              if ((px > (initX + 70)) || (px < (initX - 70)) || (py > (initY + 70) || (py < (initY - 70)))) {
                colorChange.setHSL(0.7, 1.0, 0.5);
                colors.setXYZ(i, colorChange.r, colorChange.g, colorChange.b);
                colors.needsUpdate = true;
              }
            } else {
              if (mouseDistance < area) {
                if (i % 5 == 0) {
                  const t = Math.atan2(dy, dx);
                  px -= 0.03 * Math.cos(t);
                  py -= 0.03 * Math.sin(t);
                  
                  colorChange.setHSL(0.7, 1.0, 0.5);
                  colors.setXYZ(i, colorChange.r, colorChange.g, colorChange.b);
                  colors.needsUpdate = true;
                  
                  size.array[i] = particleSize / 1.2;
                  size.needsUpdate = true;
                } else {
                  const t = Math.atan2(dy, dx);
                  px += f * Math.cos(t);
                  py += f * Math.sin(t);
                  
                  pos.setXYZ(i, px, py, pz);
                  pos.needsUpdate = true;
                  
                  size.array[i] = particleSize * 1.3;
                  size.needsUpdate = true;
                }
                
                if ((px > (initX + 10)) || (px < (initX - 10)) || (py > (initY + 10) || (py < (initY - 10)))) {
                  colorChange.setHSL(0.7, 1.0, 0.5);
                  colors.setXYZ(i, colorChange.r, colorChange.g, colorChange.b);
                  colors.needsUpdate = true;
                  
                  size.array[i] = particleSize / 1.8;
                  size.needsUpdate = true;
                }
              }
            }
            
            px += (initX - px) * ease;
            py += (initY - py) * ease;
            pz += (initZ - pz) * ease;
            
            pos.setXYZ(i, px, py, pz);
            pos.needsUpdate = true;
          }
        }
      }
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    // Helper functions
    function visibleHeightAtZDepth(depth, camera) {
      const cameraOffset = camera.position.z;
      if (depth < cameraOffset) depth -= cameraOffset;
      else depth += cameraOffset;
      
      const vFOV = camera.fov * Math.PI / 180;
      return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
    }
    
    function visibleWidthAtZDepth(depth, camera) {
      const height = visibleHeightAtZDepth(depth, camera);
      return height * camera.aspect;
    }
    
    function distance(x1, y1, x2, y2) {
      return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    }
    
    // Add event listeners
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    
    loadAssets();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
      
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      if (particles) {
        particles.geometry.dispose();
        particles.material.dispose();
        scene.remove(particles);
      }
    };
  }, [text, textSize, particleSize]);
  
  return (
    <div className="relative min-w-screen min-h-screen">
      <div
        ref={ containerRef }
        className="w-full h-full z-10"
      />
    </div>
  );
};

export default AnimatedBackground;