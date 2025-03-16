"use client"

import { useEffect, useRef } from 'react';

const WebGLTriangles = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Skip execution if the ref isn't attached
    if (!containerRef.current) return;
    
    // Variables for cleanup
    let canvas = null;
    let gl = null;
    let buf = null;
    let ibuf = null;
    let va = null;
    let prg = null;
    let handleMouseMove = null;
    let handleResize = null;
    
    try {
      // Create canvas element
      canvas = document.createElement('canvas');
      containerRef.current.appendChild(canvas);
      
      // Style canvas
      canvas.style.display = 'block';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.position = 'fixed';
      canvas.style.zIndex = '-1';
      canvas.style.top = '0';
      canvas.style.left = '0';
      
      // Set canvas dimensions
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Get WebGL2 context
      gl = canvas.getContext('webgl2');
      if (!gl) {
        console.error('WebGL 2 not supported');
        return;
      }
      
        const vss = `#version 300 es
            in vec2 p;
            void main() {
            gl_Position = vec4(p, 0.0, 1.0);
        }
        `;

        const fss = `#version 300 es
            precision mediump float;
            out vec4 o;
            uniform vec4 c;
            void main() {
                o = c;
            }
            `;
      
      // Create shader program
      const vs = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vs, vss);
      gl.compileShader(vs);
      if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(vs));
        return;
      }
      
      const fs = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fs, fss);
      gl.compileShader(fs);
      if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(fs));
        return;
      }
      
      prg = gl.createProgram();
      gl.attachShader(prg, vs);
      gl.attachShader(prg, fs);
      gl.linkProgram(prg);
      if (!gl.getProgramParameter(prg, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(prg));
        return;
      }
      
      gl.detachShader(prg, vs);
      gl.deleteShader(vs);
      gl.detachShader(prg, fs);
      gl.deleteShader(fs);
      
      // Set up attributes and uniforms
      const $p = gl.getAttribLocation(prg, 'p');
      const $c = gl.getUniformLocation(prg, 'c');
      va = gl.createVertexArray();
      gl.bindVertexArray(va);
      
      // Create triangle geometry
      const N = 300; // n triangles
      let ps = new Float32Array(2 + N * 2 * 2);
      ps[0] = 0; // clip space center
      ps[1] = 0;
      let j = 2;
      for (let i = 0; i < N; ++i) {
        ps[j++] = Math.random() * 2 - 1; //x 
        ps[j++] = Math.random() * 2 - 1; //y
        ps[j++] = Math.random() * 2 - 1; //x 
        ps[j++] = Math.random() * 2 - 1; //y
      }
      
      buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, ps, gl.DYNAMIC_DRAW);
      gl.enableVertexAttribArray($p);
      gl.vertexAttribPointer(
        $p,
        2, gl.FLOAT, // two 32b-float (8bytes)
        false,
        0, // skip n byte to fetch next
        0  // skip n byte to fetch first
      );
      
      let idxs = new Uint16Array(3 * N);
      j = 0;
      for (let i = 0; i < N; ++i) {
        idxs[j++] = 0;
        idxs[j++] = 1 + i * 2;
        idxs[j++] = 2 + i * 2;
      }
      
      ibuf = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idxs, gl.STATIC_DRAW);
      gl.bindVertexArray(null);
      
      // Set up rendering
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      gl.clearColor(0.1, 0.1, 0.1, 1);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.enable(gl.BLEND);
      gl.disable(gl.CULL_FACE);
      gl.useProgram(prg);
      gl.bindVertexArray(va);
      
      function render() {
        if (!gl) return;
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniform4fv($c, [0.2, 0.2, 0.2, 0.02]);
        gl.drawElements(
          gl.TRIANGLES,
          idxs.length, // n indices
          gl.UNSIGNED_SHORT, // ui16
          0 // skip n bytes to fetch first
        );
      }
      
      // Initial render
      render();
      
      // Set up mouse move handler
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      handleMouseMove = (e) => {
        if (!gl || !ps) return;
        ps[0] = e.clientX / window.innerWidth * 2 - 1;
        ps[1] = -1 * (e.clientY / window.innerHeight * 2 - 1);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, ps.slice(0, 2));
        render();
      };
      
      document.addEventListener('mousemove', handleMouseMove);
      
      // Handle window resize
      handleResize = () => {
        if (!gl || !canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
        render();
      };
      
      window.addEventListener('resize', handleResize);
    } catch (error) {
      console.error("WebGL initialization error:", error);
    }
    
    // Cleanup
    return () => {
      try {
        if (handleMouseMove) {
          document.removeEventListener('mousemove', handleMouseMove);
        }
        
        if (handleResize) {
          window.removeEventListener('resize', handleResize);
        }
        
        if (gl) {
          if (buf) gl.deleteBuffer(buf);
          if (ibuf) gl.deleteBuffer(ibuf);
          if (va) gl.deleteVertexArray(va);
          if (prg) gl.deleteProgram(prg);
        }
        
        // Safely remove canvas
        if (canvas && containerRef.current && containerRef.current.contains(canvas)) {
          containerRef.current.removeChild(canvas);
        }
      } catch (error) {
        console.error("Cleanup error:", error);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-screen place-items-center absolute">
    </div>
  );
};

export default WebGLTriangles;