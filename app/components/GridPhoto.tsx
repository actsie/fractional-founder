'use client';

import { useEffect, useRef, useState } from 'react';

export default function GridPhoto() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const container = containerRef.current;
      if (!container) return;

      const dpr = window.devicePixelRatio || 1;
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    setTimeout(updateCanvasSize, 0);
    window.addEventListener('resize', updateCanvasSize);

    // Drawing function
    const draw = () => {
      if (!canvas || !ctx) return;

      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const gridSize = 40;
      const cursorRadius = 200;
      const edgeFade = 80; // Distance from edge where fade starts

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Draw grid lines
      for (let x = 0; x <= width; x += gridSize) {
        for (let y = 0; y <= height; y += gridSize) {
          // Calculate distance from cursor
          const dx = mousePos.x - x;
          const dy = mousePos.y - y;
          const cursorDistance = Math.sqrt(dx * dx + dy * dy);

          // Calculate distance from edges for tapering
          const distFromLeft = x;
          const distFromRight = width - x;
          const distFromTop = y;
          const distFromBottom = height - y;

          // Find minimum distance to any edge
          const minEdgeDist = Math.min(distFromLeft, distFromRight, distFromTop, distFromBottom);

          // Taper effect: fade out near edges
          const taperFactor = Math.min(1, minEdgeDist / edgeFade);

          // Base opacity with taper
          let opacity = 0.25 * taperFactor;
          let color = 'rgb(75, 85, 99)';

          // Hover effect
          if (cursorDistance < cursorRadius) {
            const intensity = 1 - (cursorDistance / cursorRadius);
            opacity = (0.25 + (intensity * 0.6)) * taperFactor;

            // Interpolate to bright purple
            const r = Math.round(75 + (120 - 75) * intensity);
            const g = Math.round(85 + (102 - 85) * intensity);
            const b = Math.round(99 + (204 - 99) * intensity);
            color = `rgb(${r}, ${g}, ${b})`;
          }

          // Only draw if opacity is significant
          if (opacity > 0.01) {
            // Draw horizontal line segment
            if (y % gridSize === 0 && x < width - gridSize) {
              ctx.strokeStyle = `rgba(${color.match(/\d+/g)?.join(',')}, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x + gridSize, y);
              ctx.stroke();
            }

            // Draw vertical line segment
            if (x % gridSize === 0 && y < height - gridSize) {
              ctx.strokeStyle = `rgba(${color.match(/\d+/g)?.join(',')}, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x, y + gridSize);
              ctx.stroke();
            }
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
    <div ref={containerRef} className="relative w-full h-full min-h-[400px]">
      {/* Grid Background - fills entire column */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Photo - centered on top */}
      <div className="relative z-10 flex items-center justify-center pt-8">
        <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/mai.jpeg"
            alt="Mai - Fractional Founder"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
