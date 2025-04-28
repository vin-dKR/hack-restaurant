'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Preload images
    const images: HTMLImageElement[] = [];
    const imagePromises = Array.from({ length: 3 }, (_, i) => {
      return new Promise<HTMLImageElement>((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = `/particles/${i + 1}.svg`;
        images.push(img);
      });
    });

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      image: HTMLImageElement;
      rotation: number;
      rotationSpeed: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        this.size = Math.random() * 30 + 20;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.image = images[Math.floor(Math.random() * images.length)];
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 0.5 - 0.25;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        if (this.x > (canvas?.width || 0)) this.x = 0;
        if (this.x < 0) this.x = (canvas?.width || 0);
        if (this.y > (canvas?.height || 0)) this.y = 0;
        if (this.y < 0) this.y = (canvas?.height || 0);
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x + this.size / 2, this.y + this.size / 2);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(
          this.image,
          -this.size / 2,
          -this.size / 2,
          this.size,
          this.size
        );
        ctx.restore();
      }
    }

    // Create particles after images are loaded
    Promise.all(imagePromises).then(() => {
      const particles: Particle[] = [];
      for (let i = 0; i < 30; i++) {
        particles.push(new Particle());
      }

      // Animation loop
      const animate = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });
        requestAnimationFrame(animate);
      };
      animate();
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
} 