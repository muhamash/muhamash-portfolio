"use client"

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Water Shader Component
const WaterShader = () => {
  const containerRef = useRef(null);
  const [renderer, setRenderer] = useState(null);
  const [scene, setScene] = useState(null);
  const [camera, setCamera] = useState(null);

  // Initialize scene on component mount
  useEffect(() => {
    // Only run once on mount
    if (!containerRef.current) return;

    // Create scene
    const newScene = new THREE.Scene();
    setScene(newScene);

    // Create camera
    const fov = 30;
    const newCamera = new THREE.PerspectiveCamera(
      fov,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    newCamera.position.set(20, 10, 20);
    newCamera.lookAt(newScene.position);
    newScene.add(newCamera);
    setCamera(newCamera);

    // Add axis helper
    const axis = new THREE.AxesHelper(10);
    newScene.add(axis);

    // Create renderer
    const newRenderer = new THREE.WebGLRenderer();
    newRenderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(newRenderer.domElement);
    setRenderer(newRenderer);

    // Cleanup on unmount
    return () => {
      if (containerRef.current && containerRef.current.contains(newRenderer.domElement)) {
        containerRef.current.removeChild(newRenderer.domElement);
      }
      newRenderer.dispose();
    };
  }, []);

  // Setup shader and objects after initial scene creation
  useEffect(() => {
    if (!scene || !camera || !renderer) return;

    // Create timeUniform for shader
    const timeUniform = {
      iGlobalTime: {
        type: 'f',
        value: 0.1
      },
      iResolution: {
        type: 'v2',
        value: new THREE.Vector2(window.innerWidth, window.innerHeight)
      }
    };

    // Create shader material
    const material = new THREE.ShaderMaterial({
      uniforms: timeUniform,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader
    });

    // Create water plane
    // Using PlaneGeometry instead of PlaneBufferGeometry which is deprecated
    const water = new THREE.Mesh(
      new THREE.PlaneGeometry(window.innerWidth, window.innerHeight, 40), 
      material
    );
    scene.add(water);

    // Add sphere
    const geometry = new THREE.SphereGeometry(10, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sphere = new THREE.Mesh(geometry, sphereMaterial);
    scene.add(sphere);

    // Handle window resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        timeUniform.iResolution.value.x = window.innerWidth;
        timeUniform.iResolution.value.y = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      timeUniform.iGlobalTime.value += clock.getDelta();
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      scene.remove(water);
      scene.remove(sphere);
      material.dispose();
      geometry.dispose();
      sphereMaterial.dispose();
    };
  }, [scene, camera, renderer]);

  return <div className='min-w-screen min-h-screen h-[100%] w-[100%]' ref={containerRef} />;
};

// Vertex shader
const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

// Fragment shader (fixed)
const fragmentShader = `
  uniform float iGlobalTime;
  uniform vec2 iResolution;

  const int NUM_STEPS = 8;
  const float PI = 3.1415;
  const float EPSILON = 1e-3;
  float EPSILON_NRM;
  float SEA_TIME;

  // sea variables
  const int ITER_GEOMETRY = 3;
  const int ITER_FRAGMENT = 5;
  const float SEA_HEIGHT = 0.6;
  const float SEA_CHOPPY = 1.0;
  const float SEA_SPEED = 1.0;
  const float SEA_FREQ = 0.16;
  const vec3 SEA_BASE = vec3(0.1,0.19,0.22);
  const vec3 SEA_WATER_COLOR = vec3(0.8,0.9,0.6);
  mat2 octave_m;

  mat3 fromEuler(vec3 ang) {
    vec2 a1 = vec2(sin(ang.x),cos(ang.x));
    vec2 a2 = vec2(sin(ang.y),cos(ang.y));
    vec2 a3 = vec2(sin(ang.z),cos(ang.z));
    mat3 m;
    m[0] = vec3(
      a1.y*a3.y+a1.x*a2.x*a3.x,
      a1.y*a2.x*a3.x+a3.y*a1.x,
      -a2.y*a3.x
    );
    m[1] = vec3(-a2.y*a1.x,a1.y*a2.y,a2.x);
    m[2] = vec3(
      a3.y*a1.x*a2.x+a1.y*a3.x,
      a1.x*a3.x-a1.y*a3.y*a2.x,
      a2.y*a3.y
    );
    return m;
  }

  float hash(vec2 p) {
    float h = dot(p,vec2(127.1,311.7));	
    return fract(sin(h)*43758.5453123);
  }

  float noise(in vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);	
    vec2 u = f * f * (3.0 - 2.0 * f);
    return -1.0 + 2.0 * mix(
      mix(
        hash(i + vec2(0.0,0.0)), 
        hash(i + vec2(1.0,0.0)), u.x),
      mix(hash(i + vec2(0.0,1.0)), 
        hash(i + vec2(1.0,1.0)), u.x), 
      u.y
    );
  }

  float diffuse(vec3 n,vec3 l,float p) {
    return pow(dot(n,l) * 0.4 + 0.6,p);
  }

  float specular(vec3 n,vec3 l,vec3 e,float s) {    
    float nrm = (s + 8.0) / (3.1415 * 8.0);
    return pow(max(dot(reflect(e,n),l),0.0),s) * nrm;
  }

  vec3 getSkyColor(vec3 e) {
    e.y = max(e.y, 0.0);
    vec3 ret;
    ret.x = pow(1.0 - e.y, 2.0);
    ret.y = 1.0 - e.y;
    ret.z = 0.6+(1.0 - e.y) * 0.4;
    return ret;
  }

  float sea_octave(vec2 uv, float choppy) {
    uv += noise(uv);         
    vec2 wv = 1.0 - abs(sin(uv));
    vec2 swv = abs(cos(uv));    
    wv = mix(wv, swv, wv);
    return pow(1.0 - pow(wv.x * wv.y, 0.65), choppy);
  }

  float map(vec3 p) {
    float freq = SEA_FREQ;
    float amp = SEA_HEIGHT;
    float choppy = SEA_CHOPPY;
    vec2 uv = p.xz; 
    uv.x *= 0.75;

    float d, h = 0.0;    
    for(int i = 0; i < ITER_GEOMETRY; i++) {        
      d = sea_octave((uv + SEA_TIME) * freq, choppy);
      d += sea_octave((uv - SEA_TIME) * freq, choppy);
      h += d * amp;        
      uv *= octave_m;
      freq *= 1.9; 
      amp *= 0.22;
      choppy = mix(choppy, 1.0, 0.2);
    }
    return p.y - h;
  }

  float map_detailed(vec3 p) {
      float freq = SEA_FREQ;
      float amp = SEA_HEIGHT;
      float choppy = SEA_CHOPPY;
      vec2 uv = p.xz;
      uv.x *= 0.75;

      float d, h = 0.0;    
      for(int i = 0; i < ITER_FRAGMENT; i++) {        
        d = sea_octave((uv+SEA_TIME) * freq, choppy);
        d += sea_octave((uv-SEA_TIME) * freq, choppy);
        h += d * amp;        
        uv *= octave_m;
        freq *= 1.9; 
        amp *= 0.22;
        choppy = mix(choppy,1.0,0.2);
      }
      return p.y - h;
  }

  vec3 getSeaColor(
    vec3 p,
    vec3 n, 
    vec3 l, 
    vec3 eye, 
    vec3 dist
  ) {  
    float fresnel = 1.0 - max(dot(n,-eye),0.0);
    fresnel = pow(fresnel,3.0) * 0.65;

    vec3 reflected = getSkyColor(reflect(eye,n));    
    vec3 refracted = SEA_BASE + diffuse(n,l,80.0) * SEA_WATER_COLOR * 0.12; 

    vec3 color = mix(refracted,reflected,fresnel);

    float atten = max(1.0 - dot(dist,dist) * 0.001, 0.0);
    color += SEA_WATER_COLOR * (p.y - SEA_HEIGHT) * 0.18 * atten;

    color += vec3(specular(n,l,eye,60.0));

    return color;
  }

  // tracing
  vec3 getNormal(vec3 p, float eps) {
    vec3 n;
    n.y = map_detailed(p);    
    n.x = map_detailed(vec3(p.x+eps,p.y,p.z)) - n.y;
    n.z = map_detailed(vec3(p.x,p.y,p.z+eps)) - n.y;
    n.y = eps;
    return normalize(n);
  }

  float heightMapTracing(vec3 ori, vec3 dir, out vec3 p) {  
    float tm = 0.0;
    float tx = 1000.0;    
    float hx = map(ori + dir * tx);

    if(hx > 0.0) {
      return tx;   
    }

    float hm = map(ori + dir * tm);    
    float tmid = 0.0;
    for(int i = 0; i < NUM_STEPS; i++) {
      tmid = mix(tm,tx, hm/(hm-hx));                   
      p = ori + dir * tmid;                   
      float hmid = map(p);
      if(hmid < 0.0) {
        tx = tmid;
        hx = hmid;
      } else {
        tm = tmid;
        hm = hmid;
       }
    }
    return tmid;
  }

  void main() {
    SEA_TIME = iGlobalTime * SEA_SPEED;
    EPSILON_NRM = 0.1 / iResolution.x;
    octave_m = mat2(1.6, 1.2, -1.2, 1.6);
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    uv = uv * 2.0 - 1.0;
    uv.x *= iResolution.x / iResolution.y;    
    float time = iGlobalTime * 0.3;

    // ray
    vec3 ang = vec3(
      sin(time*3.0)*0.1,sin(time)*0.2+0.3,time
    );    
    vec3 ori = vec3(0.0,3.5,time*5.0);
    vec3 dir = normalize(
      vec3(uv.xy,-2.0)
    );
    dir.z += length(uv) * 0.15;
    dir = normalize(dir);

    // tracing
    vec3 p;
    heightMapTracing(ori,dir,p);
    vec3 dist = p - ori;
    vec3 n = getNormal(
      p,
      dot(dist,dist) * EPSILON_NRM
    );
    vec3 light = normalize(vec3(0.0,1.0,0.8)); 

    // color
    vec3 color = mix(
      getSkyColor(dir),
      getSeaColor(p,n,light,dir,dist),
      pow(smoothstep(0.0,-0.05,dir.y),0.3)
    );

    // post
    gl_FragColor = vec4(pow(color,vec3(0.75)), 1.0);
  }
`;

export default WaterShader;