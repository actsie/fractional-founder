'use client';

import { useEffect, useRef, useState } from 'react';

interface SectionGridProps {
  textAreaRef: React.RefObject<HTMLDivElement | null>;
  photoRef: React.RefObject<HTMLDivElement | null>;
}

export default function SectionGrid({ textAreaRef, photoRef }: SectionGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());

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
      const textFade = 100; // Distance from text area where fade starts

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Get text area bounds if available
      let textBounds = null;
      if (textAreaRef.current && canvas.parentElement) {
        const canvasRect = canvas.parentElement.getBoundingClientRect();
        const textRect = textAreaRef.current.getBoundingClientRect();
        textBounds = {
          left: textRect.left - canvasRect.left,
          right: textRect.right - canvasRect.left,
          top: textRect.top - canvasRect.top,
          bottom: textRect.bottom - canvasRect.top,
        };
      }

      // Get photo bounds and center for glow effect
      let photoCenter = null;
      if (photoRef.current && canvas.parentElement) {
        const canvasRect = canvas.parentElement.getBoundingClientRect();
        const photoRect = photoRef.current.getBoundingClientRect();
        photoCenter = {
          x: (photoRect.left + photoRect.right) / 2 - canvasRect.left,
          y: (photoRect.top + photoRect.bottom) / 2 - canvasRect.top,
        };
      }

      // Simple hash function for pseudo-random dot selection
      const shouldTwinkle = (x: number, y: number) => {
        const hash = ((x * 73856093) ^ (y * 19349663)) % 100;
        return hash < 15; // ~15% of dots will twinkle
      };

      // Calculate time-based twinkle intensity
      const elapsedTime = (Date.now() - startTimeRef.current) / 1000;
      const getTwinkle = (x: number, y: number) => {
        const offset = ((x + y) % 100) / 25; // Stagger timing based on position
        const cycle = (elapsedTime + offset) % 3.5; // 3.5 second cycle
        const phase = (cycle / 3.5) * Math.PI * 2;
        return Math.sin(phase) * 0.3 + 0.7; // Pulse between 0.4 and 1.0
      };

      // Draw grid lines
      for (let x = 0; x <= width; x += gridSize) {
        for (let y = 0; y <= height; y += gridSize) {
          // Calculate distance from cursor
          const dx = mousePos.x - x;
          const dy = mousePos.y - y;
          const cursorDistance = Math.sqrt(dx * dx + dy * dy);

          // Calculate distance from section edges for tapering
          const distFromLeft = x;
          const distFromRight = width - x;
          const distFromTop = y;
          const distFromBottom = height - y;
          const minEdgeDist = Math.min(distFromLeft, distFromRight, distFromTop, distFromBottom);
          const edgeTaperFactor = Math.min(1, minEdgeDist / edgeFade);

          // Calculate distance from text area for fade out
          let textTaperFactor = 1;
          if (textBounds) {
            let distToText = Infinity;

            // Check if point is inside text bounds
            if (
              x >= textBounds.left &&
              x <= textBounds.right &&
              y >= textBounds.top &&
              y <= textBounds.bottom
            ) {
              // Point is inside text area - calculate distance to nearest edge
              distToText = Math.min(
                x - textBounds.left,
                textBounds.right - x,
                y - textBounds.top,
                textBounds.bottom - y
              );
            } else {
              // Point is outside - calculate distance to nearest edge of text box
              const closestX = Math.max(textBounds.left, Math.min(x, textBounds.right));
              const closestY = Math.max(textBounds.top, Math.min(y, textBounds.bottom));
              distToText = Math.sqrt(Math.pow(x - closestX, 2) + Math.pow(y - closestY, 2));
            }

            // Fade out as we get closer to text area
            textTaperFactor = Math.min(1, distToText / textFade);
          }

          // Combine both taper factors
          const combinedTaper = edgeTaperFactor * textTaperFactor;

          // Base opacity with combined taper
          let opacity = 0.35 * combinedTaper;
          let color = 'rgb(75, 85, 99)';

          // Apply twinkle effect to random dots everywhere
          if (shouldTwinkle(x, y)) {
            const twinkleMultiplier = getTwinkle(x, y);
            opacity = opacity * twinkleMultiplier;
          }

          // Photo glow effect
          let inGlowArea = false;
          if (photoCenter) {
            const photoDistX = x - photoCenter.x;
            const photoDistY = y - photoCenter.y;
            const photoDistance = Math.sqrt(photoDistX * photoDistX + photoDistY * photoDistY);
            const glowRadius = 180; // Radius of glow effect

            if (photoDistance < glowRadius) {
              inGlowArea = true;
              const glowIntensity = 1 - (photoDistance / glowRadius);

              // Gradient colors from innermost to outermost
              const colors = [
                { r: 244, g: 238, b: 252 }, // #f4eefc
                { r: 249, g: 241, b: 252 }, // #f9f1fc
                { r: 252, g: 243, b: 250 }, // #fcf3fa
                { r: 253, g: 246, b: 239 }, // #fdf6ef
              ];

              // Determine which color to use based on distance
              const colorIndex = Math.floor((1 - glowIntensity) * (colors.length - 1));
              const nextColorIndex = Math.min(colorIndex + 1, colors.length - 1);
              const colorMix = ((1 - glowIntensity) * (colors.length - 1)) % 1;

              const currentColor = colors[colorIndex];
              const nextColor = colors[nextColorIndex];

              // Interpolate between colors
              const r = Math.round(currentColor.r + (nextColor.r - currentColor.r) * colorMix);
              const g = Math.round(currentColor.g + (nextColor.g - currentColor.g) * colorMix);
              const b = Math.round(currentColor.b + (nextColor.b - currentColor.b) * colorMix);

              color = `rgb(${r}, ${g}, ${b})`;
              opacity = Math.min(1, opacity + (glowIntensity * 0.6));
            }
          }

          // Hover effect (only applied outside glow area)
          if (cursorDistance < cursorRadius && !inGlowArea) {
            const intensity = 1 - (cursorDistance / cursorRadius);
            opacity = (0.35 + (intensity * 0.65)) * combinedTaper;

            // Interpolate to bright purple
            const r = Math.round(75 + (120 - 75) * intensity);
            const g = Math.round(85 + (102 - 85) * intensity);
            const b = Math.round(99 + (204 - 99) * intensity);
            color = `rgb(${r}, ${g}, ${b})`;
          }

          // Calculate dot size based on hover (only outside glow area)
          let dotSize = 2;
          if (cursorDistance < cursorRadius && !inGlowArea) {
            const intensity = 1 - (cursorDistance / cursorRadius);
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
  }, [mousePos, textAreaRef, photoRef]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas || !canvas.parentElement) return;

      const rect = canvas.parentElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Only update if mouse is within bounds
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
      className="absolute inset-0 pointer-events-none"
    />
  );
}
