// StarFieldAnimation.jsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const StarFieldAnimation = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    let camera, scene, renderer;
    let uniforms;
    let texture, rtTexture, rtTexture2;
    
    const textureFraction = 1;
    let w = window.innerWidth;
    let h = window.innerHeight;
    
    const newmouse = {
      x: 0,
      y: 0
    };
    
    const divisor = 1 / 8;
    
    // Initialize texture loader
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");
    
    // Create a noise texture (normally loaded from an external source)
    const noiseSize = 256;
    const noiseData = new Uint8Array(noiseSize * noiseSize * 4);
    for (let i = 0; i < noiseSize * noiseSize * 4; i += 4) {
      noiseData[i] = Math.random() * 255;
      noiseData[i+1] = Math.random() * 255;
      noiseData[i+2] = Math.random() * 255;
      noiseData[i+3] = 255;
    }
    
    const noiseTexture = new THREE.DataTexture(
      noiseData,
      noiseSize,
      noiseSize,
      THREE.RGBAFormat
    );
    noiseTexture.wrapS = THREE.RepeatWrapping;
    noiseTexture.wrapT = THREE.RepeatWrapping;
    noiseTexture.needsUpdate = true;
    
    init(noiseTexture);
    animate();
    
    function init(tex) {
      // Set up camera and scene
      camera = new THREE.Camera();
      camera.position.z = 1;
      
      scene = new THREE.Scene();
      
      // Create plane geometry - Fix: PlaneBufferGeometry is now just PlaneGeometry
      const geometry = new THREE.PlaneGeometry(2, 2);
      
      // Set up render targets for feedback effect
      rtTexture = new THREE.WebGLRenderTarget(window.innerWidth * textureFraction, window.innerHeight * textureFraction);
      rtTexture2 = new THREE.WebGLRenderTarget(window.innerWidth * textureFraction, window.innerHeight * textureFraction);
      
      // Define shader uniforms
      uniforms = {
        u_time: { type: "f", value: 1.0 },
        u_resolution: { type: "v2", value: new THREE.Vector2() },
        u_noise: { type: "t", value: tex },
        u_buffer: { type: "t", value: rtTexture.texture },
        u_mouse: { type: "v3", value: new THREE.Vector3() },
        u_frame: { type: "i", value: -1 },
        u_renderpass: { type: 'b', value: false }
      };
      
      // Define shader materials
      const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader(),
        fragmentShader: fragmentShader()
      });
      material.extensions.derivatives = true;
      
      // Create mesh and add to scene
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      
      // Set up renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(w, h);
      
      // Add renderer to DOM
      containerRef.current.appendChild(renderer.domElement);
      
      // Handle window resize
      onWindowResize();
      window.addEventListener('resize', onWindowResize, false);
      
      // Handle mouse/touch events
      document.addEventListener('pointermove', (e) => {
        let ratio = window.innerHeight / window.innerWidth;
        if (window.innerHeight > window.innerWidth) {
          newmouse.x = (e.pageX - window.innerWidth / 2) / window.innerWidth;
          newmouse.y = (e.pageY - window.innerHeight / 2) / window.innerHeight * -1 * ratio;
        } else {
          newmouse.x = (e.pageX - window.innerWidth / 2) / window.innerWidth / ratio;
          newmouse.y = (e.pageY - window.innerHeight / 2) / window.innerHeight * -1;
        }
        e.preventDefault();
      });
      
      document.addEventListener('pointerdown', (e) => {
        if (e.button === 0) {
          uniforms.u_mouse.value.z = 1;
        } else if (e.button === 2) {
          uniforms.u_mouse.value.w = 1;
        }
        e.preventDefault();
      });
      
      document.addEventListener('pointerup', (e) => {
        if (e.button === 0) {
          uniforms.u_mouse.value.z = 0;
        } else if (e.button === 2) {
          uniforms.u_mouse.value.w = 0;
        }
        e.preventDefault();
      });
    }
    
    function onWindowResize() {
      w = window.innerWidth;
      h = window.innerHeight;
      
      renderer.setSize(w, h);
      uniforms.u_resolution.value.x = renderer.domElement.width;
      uniforms.u_resolution.value.y = renderer.domElement.height;
      
      uniforms.u_frame.value = 0;
      
      rtTexture = new THREE.WebGLRenderTarget(w * textureFraction, h * textureFraction);
      rtTexture2 = new THREE.WebGLRenderTarget(w * textureFraction, h * textureFraction);
    }
    
    function renderTexture() {
      let odims = uniforms.u_resolution.value.clone();
      uniforms.u_resolution.value.x = w * textureFraction;
      uniforms.u_resolution.value.y = h * textureFraction;
      
      uniforms.u_buffer.value = rtTexture2.texture;
      uniforms.u_renderpass.value = true;
      
      renderer.setRenderTarget(rtTexture);
      renderer.render(scene, camera);
      
      let buffer = rtTexture;
      rtTexture = rtTexture2;
      rtTexture2 = buffer;
      
      uniforms.u_buffer.value = rtTexture.texture;
      uniforms.u_resolution.value = odims;
      uniforms.u_renderpass.value = false;
    }
    
    let then = 0;
    function animate(now) {
      requestAnimationFrame(animate);
      render(now);
    }
    
    function render(now) {
      uniforms.u_frame.value++;
      
      uniforms.u_mouse.value.x += (newmouse.x - uniforms.u_mouse.value.x) * divisor;
      uniforms.u_mouse.value.y += (newmouse.y - uniforms.u_mouse.value.y) * divisor;
      
      uniforms.u_time.value = now * 0.0005;
      renderer.setRenderTarget(null);
      renderer.render(scene, camera);
      renderTexture();
    }
    
    // Clean up
    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('pointermove', () => {});
      document.removeEventListener('pointerdown', () => {});
      document.removeEventListener('pointerup', () => {});
      
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
    };
  }, []);
  
  return (
    <div ref={containerRef} className="fixed inset-0 touch-none w-full h-full" />
  );
};

// Vertex shader
function vertexShader() {
  return `
    void main() {
        gl_Position = vec4(position, 1.0);
    }
  `;
}

// Fragment shader
function fragmentShader() {
  return `
    uniform vec2 u_resolution;
    uniform vec4 u_mouse;
    uniform float u_time;
    uniform sampler2D u_noise;
    uniform sampler2D u_buffer;
    uniform bool u_renderpass;
    uniform int u_frame;
    
    #define PI 3.141592653589793
    #define TAU 6.283185307179586
    
    const float multiplier = 25.5;
    const float zoomSpeed = 3.;
    const int layers = 5;
    
    mat2 rotate2d(float _angle){
        return mat2(cos(_angle),sin(_angle),
                    -sin(_angle),cos(_angle));
    }
  
    vec2 hash2(vec2 p)
    {
      vec2 o = texture2D(u_noise, (p+0.5)/256.0, -100.0).xy;
      return o;
    }
    
    vec3 hsb2rgb(in vec3 c){
      vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),
                               6.0)-3.0)-1.0,
                       0.0,
                       1.0);
      rgb = rgb*rgb*(3.0-2.0*rgb);
      return c.z * mix(vec3(1.0), rgb, c.y);
    }
    
    vec3 domain(vec2 z){
      return vec3(hsb2rgb(vec3(atan(z.y,z.x)/TAU,1.,1.)));
    }
    vec3 colour(vec2 z) {
        return domain(z);
    }
    
    // The render function is where we render the pattern to be added to the layer
    vec3 render(vec2 uv, float scale) {
      vec2 id = floor(uv);
      vec2 subuv = fract(uv);
      vec2 rand = hash2(id);
      float bokeh = abs(scale) * 1.;
      
      float particle = 0.;
      
      if(length(rand) > 1.3) {
        vec2 pos = subuv-.5;
        float field = length(pos);
        particle = smoothstep(.7, 0., field);
        particle += smoothstep(.2, 0.2 * bokeh, field);
      }
      return vec3(particle*2.);
    }
    
    vec3 renderLayer(int layer, int layers, vec2 uv, inout float opacity) {
      vec2 _uv = uv;
      // Scale
      // Generating a scale value between zero and 1 based on a mod of u_time
      // A frequency of 10 dixided by the layer index (10 / layers * layer)
      float scale = mod((u_time + zoomSpeed / float(layers) * float(layer)) / zoomSpeed, -1.);
      uv *= 20.; // The initial scale. Increasing this makes the cells smaller and the "speed" apepar faster
      uv *= scale*scale; // then modifying the overall scale by the generated amount
      uv = rotate2d(u_time / 10.) * uv; // rotarting
      uv += vec2(25. + sin(u_time*.1)*.2) * float(layer); // ofsetting the UV by an arbitrary amount to make the layer appear different
  
      // render
      vec3 pass = render(uv * multiplier, scale) * .2; // render the pass
  
       // this is the opacity of the layer fading in from the "bottom"
      opacity = 1. + scale;
      float _opacity = opacity;
      
      // This is the opacity of the layer fading out at the top (we want this minimal, hence the smoothstep)
      float endOpacity = smoothstep(0., 0.4, scale * -1.);
      opacity += endOpacity;
  
      return pass * _opacity * endOpacity;
    }
  
    void main() {
      vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);
      vec2 sample = gl_FragCoord.xy / u_resolution.xy;
          
      vec4 fragcolour;
      
      if(u_renderpass == true) {
        
        if(u_frame > 5) {
          fragcolour = texture2D(u_buffer, sample) * 6.;
        }
        uv *= rotate2d(u_time*.5);
        
        float opacity = 1.;
        float opacity_sum = 1.;
  
        for(int i = 1; i <= layers; i++) {
          fragcolour += clamp(vec4(renderLayer(i, layers, uv, opacity), 1.) * 5., 0., 5.);
          opacity_sum += opacity;
        }
  
        fragcolour *= 1./opacity_sum;
      } else {
        fragcolour = texture2D(u_buffer, sample) * 5.;
      }
      
      gl_FragColor = fragcolour;
    }
  `;
}

export default StarFieldAnimation;