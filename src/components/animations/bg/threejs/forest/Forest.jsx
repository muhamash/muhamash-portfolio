'use client';

import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

const MonsterForestAnimation = () => {
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [images, setImages] = useState({});

  // URLs for images
  const treeImage = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/tree.png';
  const monsterImage = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/monster-01.png';
  const urls = [treeImage, monsterImage];

  // Classes converted to functional approach
  const createNode = (graphics = null) => {
    return {
      graphics,
      x: 0,
      y: 0,
      pivotX: 0,
      pivotY: 0,
      scaleX: 1,
      scaleY: 1,
      rotation: 0,
      children: [],
      add(node) {
        this.children.push(node);
      },
      remove(node) {
        const i = this.children.indexOf(node);
        if (i >= 0) {
          this.children.splice(i, 1);
        }
      },
      render(ctx) {
        ctx.save();
        ctx.translate(this.pivotX + this.x, this.pivotY + this.y);
        ctx.rotate(this.rotation);
        ctx.scale(this.scaleX, this.scaleY);
        ctx.translate(-this.pivotX, -this.pivotY);
        this.graphics && this.graphics.draw(ctx);
        for (let i = 0; i < this.children.length; i++) {
          this.children[i].render(ctx);
        }
        ctx.restore();
      }
    };
  };

  const createImageFragment = (img, sx, sy, sw, sh) => {
    return {
      draw(ctx) {
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);
      }
    };
  };

  const createMist = (w, h, ctx) => {
    const gradient = ctx.createLinearGradient(w * 0.5, h, w * randomRange(0.6, 0.9), 0);
    gradient.addColorStop(0.25, 'rgba(0,0,0,0)');
    gradient.addColorStop(randomRange(0.5, 0.7), 'rgba(255,255,255,0.3)');
    gradient.addColorStop(0.9, 'rgba(0,0,0,0)');
    
    return {
      draw(ctx) {
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }
    };
  };

  const createMonster = (img) => {
    return {
      draw(ctx) {
        ctx.drawImage(img, 0, 0);
      }
    };
  };

  // Utility function
  const randomRange = (min, max) => {
    return min + Math.random() * (max - min);
  };

  // Load images
  useEffect(() => {
    const imageObjects = {};
    let loadedCount = 0;

    urls.forEach(url => {
      const img = new Image();
      imageObjects[url] = img;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === urls.length) {
          setImages(imageObjects);
          setLoaded(true);
        }
      };

      img.crossOrigin = 'Anonymous';
      img.src = url;
    });
  }, []);

  // Initialize canvas and animation
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Fix for canvas sizing to maintain aspect ratio
    const containerWidth = canvas.clientWidth;
    const containerHeight = canvas.clientHeight;
    
    // Set fixed dimensions for consistent animation
    const viewWidth = canvas.width = 600;
    const viewHeight = canvas.height = 600;
    
    // Create root node and tree collection
    const rootDisplayNode = createNode();
    const trees = [];

    // Create tree function
    function createTree(image, x, y) {
      const totalWidth = image.naturalWidth;
      const totalHeight = image.naturalHeight;
      const steps = 6;
      const deltaHeight = totalHeight / steps;

      const treeRoot = createNode();
      let prevSegment = treeRoot;

      treeRoot.x = x;
      treeRoot.y = y;
      treeRoot._segments = [];

      for (let i = 0; i < steps; i++) {
        const sourceX = 0;
        const sourceY = totalHeight - deltaHeight * (i + 1);
        const sourceWidth = totalWidth;
        const sourceHeight = deltaHeight;

        const segment = createNode(createImageFragment(image, sourceX, sourceY, sourceWidth, sourceHeight));

        if (i === 0) {
          segment.x = -totalWidth * 0.5;
        }

        segment.y = -deltaHeight * 0.95;
        segment.pivotX = totalWidth * 0.5;
        segment.pivotY = deltaHeight;

        prevSegment.add(segment);
        prevSegment = segment;

        treeRoot._segments.push(segment);
      }

      return treeRoot;
    }

    // Create trees function
    function createTrees(yOffset) {
      let tree;
      const dx = viewWidth / 12;

      for (let i = 0; i < 12; i++) {
        tree = createTree(
          images[treeImage],
          dx * i + 35 * randomRange(0.8, 1.2),
          (viewHeight - yOffset) * randomRange(1.0, 1.2)
        );

        tree._segments.forEach(segment => {
          const range = randomRange(0.01, 0.02);
          gsap.fromTo(
            segment, 
            { rotation: -range },
            { 
              rotation: range, 
              ease: "power1.inOut",
              duration: randomRange(2, 10),
              repeat: -1,
              yoyo: true
            }
          );
        });

        rootDisplayNode.add(tree);
        trees.push(tree);
      }
    }

    // Create mist function
    function createMistLayer() {
      const mist = createNode(createMist(viewWidth * 1.2, viewHeight * 1.2, ctx));
      const range = randomRange(0, 100);

      mist.x = -viewWidth * 0.1;
      mist.y = -viewHeight * 0.1;

      gsap.fromTo(
        mist,
        { y: mist.y - range },
        {
          y: mist.y - range,
          ease: "power1.inOut",
          duration: randomRange(6, 8),
          repeat: -1,
          yoyo: true
        }
      );

      rootDisplayNode.add(mist);
    }

    // Create monster function with improved looping
    function createMonsterEntity() {
      const monster = createNode(createMonster(images[monsterImage]));
      monster.y = 135;
      monster.x = -150;
      
      // Store the original position for reset
      const originalY = monster.y;

      const stepDeltaX = 30;
      const stepDeltaY = 10;
      const stepDuration = 1.6;
      const startOffset = 0.6;
      
      // Create a timeline that repeats seamlessly
      function step() {
        // Reset monster position if it has gone off-screen
        if (monster.x > viewWidth) {
          monster.x = -150;
          // Reset Y position to prevent scaling issues
          monster.y = originalY;
        }
        
        const tl = gsap.timeline({
          onComplete: step
        });
        
        // Movement up
        tl.to(monster, {
          y: originalY - stepDeltaY, 
          duration: stepDuration * 0.4, 
          ease: "power2.out",
          delay: startOffset
        });
        
        // Movement down (back to original position)
        tl.to(monster, {
          y: originalY, 
          duration: stepDuration * 0.6, 
          ease: "power4.in"
        });
        
        tl.add('shake');
        
        // Horizontal movement without affecting the timeline
        tl.to(monster, {
          x: monster.x + stepDeltaX, 
          duration: stepDuration, 
          ease: "power1.out",
          delay: -tl.duration() + startOffset
        });

        // Tree shake effect
        tl.call(() => {
          trees.forEach(t => {
            // Make sure we're adjusting from the original position
            const originalTreeY = t.y;
            gsap.to(t, {
              y: originalTreeY + randomRange(4, 16),
              duration: randomRange(0.3, 0.4),
              ease: "back.in",
              repeat: 1,
              yoyo: true,
              // Make sure tree returns to its exact original position
              onComplete: () => { t.y = originalTreeY; }
            });
          });
        }, [], "shake-=0.25");
      }

      rootDisplayNode.add(monster);
      step();
    }

    // Initialize scene
    createMistLayer();
    createTrees(300);
    createMistLayer();
    createTrees(250);
    createMistLayer();
    createMonsterEntity();
    createTrees(160);
    createMistLayer();
    createTrees(120);
    createMistLayer();
    createTrees(90);
    createMistLayer();
    createTrees(70);

    // Animation loop
    let animationFrameId;

    const loop = () => {
      ctx.clearRect(0, 0, viewWidth, viewHeight);
      rootDisplayNode.render(ctx);
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    // Resize handler to maintain aspect ratio
    const handleResize = () => {
      // This ensures the canvas maintains its internal dimensions
      // while CSS handles the responsive scaling
      canvas.style.width = '100%';
      canvas.style.height = '100%';
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      gsap.killTweensOf('*');
    };
  }, [loaded, images]);

  return (
    <div className="w-screen h-screen fixed bg-black flex items-center justify-center overflow-hidden">
      <canvas 
          ref={canvasRef} 
          className="w-full h-full bg-black"
        />
    </div>
  );
};

export default MonsterForestAnimation;