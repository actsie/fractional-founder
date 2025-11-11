'use client';

import { useEffect, useRef, useState } from 'react';

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const dpr = window.devicePixelRatio || 1;
      const width = parent.offsetWidth;
      const height = parent.offsetHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    // Delay to ensure parent is rendered
    setTimeout(updateCanvasSize, 0);
    window.addEventListener('resize', updateCanvasSize);

    // Drawing function
    const draw = () => {
      if (!canvas || !ctx) return;

      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const gridSize = 30;
      const cursorRadius = 200;
      const edgeFade = 80;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Draw dots
      for (let x = 0; x <= width; x += gridSize) {
        for (let y = 0; y <= height; y += gridSize) {
          // Calculate distance from cursor
          const dx = mousePos.x - x;
          const dy = mousePos.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Calculate distance from edges for tapering
          const distFromLeft = x;
          const distFromRight = width - x;
          const distFromTop = y;
          const distFromBottom = height - y;
          const minEdgeDist = Math.min(distFromLeft, distFromRight, distFromTop, distFromBottom);
          const edgeTaperFactor = Math.min(1, minEdgeDist / edgeFade);

          // Base opacity with edge taper
          let opacity = 0.35 * edgeTaperFactor;
          let color = 'rgb(75, 85, 99)';

          // Hover effect
          if (distance < cursorRadius) {
            const intensity = 1 - (distance / cursorRadius);
            opacity = (0.35 + (intensity * 0.65)) * edgeTaperFactor;

            // Interpolate to bright purple
            const r = Math.round(75 + (120 - 75) * intensity);
            const g = Math.round(85 + (102 - 85) * intensity);
            const b = Math.round(99 + (204 - 99) * intensity);
            color = `rgb(${r}, ${g}, ${b})`;
          }

          // Calculate dot size based on hover
          let dotSize = 2;
          if (distance < cursorRadius) {
            const intensity = 1 - (distance / cursorRadius);
            dotSize = 2 + (intensity * 2); // Grow dots on hover
          }

          // Only draw if opacity is significant
          if (opacity > 0.01) {
            ctx.fillStyle = `rgba(${color.match(/\d+/g)?.join(',')}, ${opacity})`;
            ctx.beginPath();
            ctx.arc(x, y, dotSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

    };

    // Animation loop
    const animate = () => {
      draw();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePos]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Only update if mouse is within canvas bounds
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        setMousePos({ x, y });
      } else {
        setMousePos({ x: -1000, y: -1000 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
