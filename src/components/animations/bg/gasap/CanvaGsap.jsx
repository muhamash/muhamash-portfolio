"use client"

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const ParticleEngineComponent = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef(null);
  const engineInitializedRef = useRef(false);

  // Utility functions
  const range = (min, max) => {
    return min + (max - min) * Math.random();
  };

  const round = (num, precision) => {
    const decimal = Math.pow(10, precision);
    return Math.round(decimal * num) / decimal;
  };

  const weightedRange = (to, from = 0, decimalPlaces = 0, weightedRange = 0, weightStrength = 0) => {
    let ret;
    if (to === from) {
      return to;
    }

    if (weightedRange && Math.random() <= weightStrength) {
      ret = round(Math.random() * (weightedRange[1] - weightedRange[0]) + weightedRange[0], decimalPlaces);
    } else {
      ret = round(Math.random() * (to - from) + from, decimalPlaces);
    }
    return ret;
  };

  // Initialize particle engine when component mounts
  useEffect(() => {
    let animationFrameId;
    let particles = [];
    let lights = [];
    
    const initParticleEngine = async () => {
      if (engineInitializedRef.current || !canvasRef.current) return;
      
      try {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        // Set canvas dimensions
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        const totalWidth = canvas.width;
        const totalHeight = canvas.height;
        
        // Define particle colors with vibrant gradient options
        const particleColors = {
          blue: ["#00B4DB", "#0083B0", "#6DD5FA", "#2980B9"],
          purple: ["#8E2DE2", "#4A00E0", "#6A3093", "#a044ff"],
          pink: ["#FF0080", "#FF8C00", "#FC466B", "#f857a6"],
          teal: ["#11998e", "#38ef7d", "#0F2027", "#00F5A0"],
          orange: ["#FF512F", "#F09819", "#FF8008", "#FFC837"]
        };
        
        // Randomly pick a color from a palette
        const getRandomColor = (palette) => {
          return palette[Math.floor(Math.random() * palette.length)];
        };
        
        // Define particle settings with colorful options
        const particleSettings = [
          {id: "small", num: 300, fromX: 0, toX: totalWidth, ballwidth: 3, alphamax: 0.4, areaHeight: .5, colorPalette: particleColors.blue, fill: false}, 
          {id: "medium", num: 100, fromX: 0, toX: totalWidth, ballwidth: 8, alphamax: 0.3, areaHeight: 1, colorPalette: particleColors.purple, fill: true}, 
          {id: "large", num: 10, fromX: 0, toX: totalWidth, ballwidth: 30, alphamax: 0.2, areaHeight: 1, colorPalette: particleColors.pink, fill: true}
        ];
        
        // Define lights with colorful gradients
        const lightSettings = [
          {ellipseWidth: 400, ellipseHeight: 100, alpha: 0.6, offsetX: 0, offsetY: 0, color: "#4158D0", gradientColors: ["#4158D0", "#C850C0", "#FFCC70"]}, 
          {ellipseWidth: 350, ellipseHeight: 250, alpha: 0.3, offsetX: -50, offsetY: 0, color: "#0093E9", gradientColors: ["#0093E9", "#80D0C7"]}, 
          {ellipseWidth: 100, ellipseHeight: 80, alpha: 0.2, offsetX: 80, offsetY: -50, color: "#8EC5FC", gradientColors: ["#8EC5FC", "#E0C3FC"]}
        ];
        
        // Apply settings to particles
        const applySettings = (particle, positionX, totalWidth, areaHeight) => {
          particle.speed = range(1, 3);
          particle.initY = weightedRange(
            0, 
            totalHeight, 
            1, 
            [
              totalHeight * (2 - areaHeight / 2) / 4, 
              totalHeight * (2 + areaHeight / 2) / 4
            ], 
            0.8
          );
          
          particle.initX = weightedRange(
            positionX, 
            totalWidth, 
            1, 
            [
              positionX + ((totalWidth - positionX)) / 4, 
              positionX + ((totalWidth - positionX)) * 3 / 4
            ], 
            0.6
          );
        };
        
        // Create particles
        particleSettings.forEach(setting => {
          for (let i = 0; i < setting.num; i++) {
            const particle = {
              x: 0,
              y: 0,
              alpha: range(0, 0.1),
              alphaMax: setting.alphamax,
              distance: setting.ballwidth * 2,
              ballwidth: setting.ballwidth,
              flag: setting.id,
              fill: setting.fill,
              color: getRandomColor(setting.colorPalette),
              areaHeight: setting.areaHeight
            };
            
            applySettings(particle, setting.fromX, setting.toX, setting.areaHeight);
            particle.speed = range(2, 10);
            particle.y = particle.initY;
            particle.x = particle.initX;
            particle.scaleX = particle.scaleY = range(0.3, 1);
            
            // Start animation
            animateParticle(particle);
            
            particles.push(particle);
          }
        });
        
        // Create lights
        lightSettings.forEach((setting, index) => {
          const light = {
            x: 0,
            y: 0,
            initX: totalWidth / 2 + setting.offsetX,
            initY: totalHeight / 2 + setting.offsetY,
            ellipseWidth: setting.ellipseWidth,
            ellipseHeight: setting.ellipseHeight,
            alpha: setting.alpha,
            color: setting.color,
            gradientColors: setting.gradientColors,
            scaleX: 1,  // Initialize with default scale
            scaleY: 1   // Initialize with default scale
          };
          
          light.x = light.initX;
          light.y = light.initY;
          
          lights.push(light);
        });
        
        // Animate lights
        animateLights();
        
        // Start render loop
        const render = () => {
          // Clear canvas
          ctx.clearRect(0, 0, totalWidth, totalHeight);
          
          // Set global composite operation
          ctx.globalCompositeOperation = "lighter";
          
          // Draw lights with gradients
          lights.forEach(light => {
            if (!light || typeof light.x !== 'number' || typeof light.y !== 'number') return;
            
            ctx.globalAlpha = light.alpha;
            
            try {
              // Calculate radius safely
              const scaleX = light.scaleX || 1;  // Use default if undefined
              const radius = Math.max(light.ellipseWidth, light.ellipseHeight) / 2 * scaleX;
              
              if (isFinite(light.x) && isFinite(light.y) && isFinite(radius)) {
                // Create radial gradient
                const gradient = ctx.createRadialGradient(
                  light.x, light.y, 0,
                  light.x, light.y, radius
                );
                
                // Add color stops
                const colorCount = light.gradientColors.length;
                if (colorCount > 0) {
                  light.gradientColors.forEach((color, index) => {
                    gradient.addColorStop(index / (colorCount - 1), color);
                  });
                  
                  ctx.fillStyle = gradient;
                } else {
                  ctx.fillStyle = light.color;  // Fallback to solid color
                }
                
                ctx.beginPath();
                ctx.ellipse(
                  light.x, 
                  light.y, 
                  light.ellipseWidth / 2 * (light.scaleX || 1), 
                  light.ellipseHeight / 2 * (light.scaleY || 1), 
                  0, 
                  0, 
                  Math.PI * 2
                );
                ctx.fill();
              }
            } catch (error) {
              console.error("Error rendering light:", error);
              // Fallback to solid color
              ctx.fillStyle = light.color;
              ctx.beginPath();
              ctx.ellipse(
                light.x, 
                light.y, 
                light.ellipseWidth / 2, 
                light.ellipseHeight / 2, 
                0, 
                0, 
                Math.PI * 2
              );
              ctx.fill();
            }
          });
          
          // Draw particles
          particles.forEach(particle => {
            ctx.globalAlpha = particle.alpha;
            
            if (particle.fill) {
              ctx.fillStyle = particle.color;
              ctx.beginPath();
              ctx.arc(particle.x, particle.y, particle.ballwidth * particle.scaleX, 0, Math.PI * 2);
              ctx.fill();
            } else {
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.arc(particle.x, particle.y, particle.ballwidth * particle.scaleX, 0, Math.PI * 2);
              ctx.stroke();
            }
          });
          
          // Request next frame
          animationFrameId = requestAnimationFrame(render);
        };
        
        // Start rendering
        render();
        
        // Mark as initialized
        engineInitializedRef.current = true;
        particlesRef.current = { particles, lights, applySettings, totalWidth, totalHeight };
      } catch (error) {
        console.error("Failed to initialize particle engine:", error);
      }
    };
    
    // Animation functions
    const animateParticle = (particle) => {
      const scale = range(0.3, 1);
      const xpos = range(particle.initX - particle.distance, particle.initX + particle.distance);
      const ypos = range(particle.initY - particle.distance, particle.initY + particle.distance);
      const speed = particle.speed;
      
      gsap.to(particle, {
        duration: speed,
        scaleX: scale, 
        scaleY: scale, 
        x: xpos, 
        y: ypos, 
        onComplete: animateParticle, 
        onCompleteParams: [particle], 
        ease: "cubic.inOut"
      });
      
      gsap.to(particle, {
        duration: speed / 2,
        alpha: range(0.1, particle.alphaMax), 
        onComplete: (particle, speed) => {
          particle.speed = range(2, 10);
          gsap.to(particle, {
            duration: speed / 2,
            alpha: 0
          });
        }, 
        onCompleteParams: [particle, speed]
      });
    };
    
    // Animate lights
    const animateLights = () => {
      // Light 1
      gsap.to(lights[0], {
        duration: 10,
        yoyo: true, 
        repeat: -1, 
        ease: "power1.inOut", 
        scaleX: 2, 
        scaleY: 0.7
      });
      
      // Light 2
      gsap.to(lights[1], {
        duration: 12,
        delay: 5, 
        yoyo: true, 
        repeat: -1, 
        ease: "power1.inOut", 
        scaleY: 2, 
        scaleX: 2, 
        y: lights[1].initY - 50, 
        x: lights[1].initX + 100
      });
      
      // Light 3
      gsap.to(lights[2], {
        duration: 8,
        delay: 2, 
        yoyo: true, 
        repeat: -1, 
        ease: "power1.inOut", 
        scaleY: 1.5, 
        scaleX: 1.5, 
        y: lights[2].initY, 
        x: lights[2].initX - 200
      });
    };
    
    initParticleEngine();
    
    // Handle window resize
    const handleResize = () => {
      if (particlesRef.current && canvasRef.current) {
        const canvas = canvasRef.current;
        const { particles, lights, applySettings } = particlesRef.current;
        
        // Update canvas dimensions
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        const totalWidth = canvas.width;
        const totalHeight = canvas.height;
        
        // Update particles
        particles.forEach(particle => {
          applySettings(particle, 0, totalWidth, particle.areaHeight);
        });
        
        // Update lights
        lights.forEach(light => {
          light.initY = totalHeight / 2 + (light.initY - particlesRef.current.totalHeight / 2);
          light.initX = totalWidth / 2 + (light.initX - particlesRef.current.totalWidth / 2);
          
          gsap.to(light, {
            duration: 0.5,
            x: light.initX, 
            y: light.initY
          });
        });
        
        // Update stored dimensions
        particlesRef.current.totalWidth = totalWidth;
        particlesRef.current.totalHeight = totalHeight;
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      id="projector" 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }} 
    >
      Your browser does not support the Canvas element.
    </canvas>
  );
};

// CSS styles for the component
const ParticleBackground = () =>
{
  return (
    <div style={ {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      overflow: 'hidden',
      background: 'linear-gradient(0deg, #0F2027 50%, #203A43 100%)',
      backgroundAttachment: 'fixed'
    } }>
      <ParticleEngineComponent />
    </div>

  );
};

export default ParticleBackground;