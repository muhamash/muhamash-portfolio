"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

const TextParticles = ({ text = "FUTURE\nIS NOW" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let camera, scene, renderer;
    let particles, geometryCopy;
    let mouse = new THREE.Vector2(-200, 200);
    let colorChange = new THREE.Color();
    let raycaster = new THREE.Raycaster();
    let planeArea;
    let isMouseDown = false;

    const particleSettings = {
      text,
      amount: 1500,
      particleSize: 1,
      particleColor: 0xffffff,
      textSize: 16,
      area: 250,
      ease: 0.05,
    };

    function init() {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        65,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        1,
        10000
      );
      camera.position.set(0, 0, 100);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      containerRef.current.appendChild(renderer.domElement);

      const planeGeometry = new THREE.PlaneGeometry(
        visibleWidthAtZDepth(100, camera),
        visibleHeightAtZDepth(100, camera)
      );
      const planeMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        transparent: true,
        opacity: 0,
      });
      planeArea = new THREE.Mesh(planeGeometry, planeMaterial);
      scene.add(planeArea);

      window.addEventListener("resize", onWindowResize);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);

      loadFontAndTexture();
    }

    function loadFontAndTexture() {
      const fontLoader = new FontLoader();
      fontLoader.load(
        "https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json",
        (font) => {
          const textureLoader = new THREE.TextureLoader();
          textureLoader.load(
            "https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png",
            (texture) => {
              createParticles(font, texture);
              animate();
            }
          );
        }
      );
    }

    function createParticles(font, particleImg) {
      let thePoints = [];
      let colors = [];
      let sizes = [];

      let shapes = font.generateShapes(particleSettings.text, particleSettings.textSize);
      let geometry = new THREE.ShapeGeometry(shapes);
      geometry.computeBoundingBox();

      const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
      const yMid = (geometry.boundingBox.max.y - geometry.boundingBox.min.y) / 2.85;

      geometry.center();

      let holeShapes = [];
      for (let q = 0; q < shapes.length; q++) {
        let shape = shapes[q];
        if (shape.holes && shape.holes.length > 0) {
          for (let j = 0; j < shape.holes.length; j++) {
            holeShapes.push(shape.holes[j]);
          }
        }
      }
      shapes.push(...holeShapes);

      for (let x = 0; x < shapes.length; x++) {
        let shape = shapes[x];
        const amountPoints = shape.type === "Path" ? particleSettings.amount / 2 : particleSettings.amount;
        let points = shape.getSpacedPoints(amountPoints);

        points.forEach((element) => {
          thePoints.push(new THREE.Vector3(element.x, element.y, 0));
          colors.push(colorChange.r, colorChange.g, colorChange.b);
          sizes.push(1);
        });
      }

      let geoParticles = new THREE.BufferGeometry().setFromPoints(thePoints);
      geoParticles.translate(xMid, yMid, 0);

      geoParticles.setAttribute("customColor", new THREE.Float32BufferAttribute(colors, 3));
      geoParticles.setAttribute("size", new THREE.Float32BufferAttribute(sizes, 1));

      const material = new THREE.PointsMaterial({
        map: particleImg,
        size: particleSettings.particleSize,
        color: new THREE.Color(0xffffff),
        transparent: true,
        depthTest: false,
        blending: THREE.AdditiveBlending,
      });

      particles = new THREE.Points(geoParticles, material);
      scene.add(particles);

      geometryCopy = new THREE.BufferGeometry();
      geometryCopy.copy(particles.geometry);
    }

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    function onWindowResize() {
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    }

    function onMouseDown(event) {
      isMouseDown = true;
      updateMousePosition(event);
    }

    function onMouseUp() {
      isMouseDown = false;
    }

    function onMouseMove(event) {
      updateMousePosition(event);
    }

    function updateMousePosition(event) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function visibleHeightAtZDepth(depth, camera) {
      const cameraOffset = camera.position.z;
      if (depth < cameraOffset) depth -= cameraOffset;
      else depth += cameraOffset;

      const vFOV = (camera.fov * Math.PI) / 180;
      return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
    }

    function visibleWidthAtZDepth(depth, camera) {
      const height = visibleHeightAtZDepth(depth, camera);
      return height * camera.aspect;
    }

    init();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);

      if (containerRef.current && renderer) {
        containerRef.current.removeChild(renderer.domElement);
      }

      if (particles) {
        particles.geometry.dispose();
        particles.material.dispose();
        scene.remove(particles);
      }

      if (planeArea) {
        planeArea.geometry.dispose();
        planeArea.material.dispose();
        scene.remove(planeArea);
      }
    };
  }, [text]);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: -9999 }} />;
};

export default TextParticles;