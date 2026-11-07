import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
}

export const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Disable on touch devices or if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (prefersReducedMotion || isTouchDevice) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates and smoothing
    const mouse = {
      x: -100,
      y: -100,
      prevX: -100,
      prevY: -100,
      speed: 0,
      targetX: -100,
      targetY: -100,
      isHoveringInteractive: false,
      isVisible: false,
    };

    // Trailing points for ribbon trail
    const trailPoints: Array<{ x: number; y: number; age: number }> = [];
    const maxTrailPoints = 18;

    // Glowing spark particles
    const particles: Particle[] = [];
    const maxParticles = 40;

    const neonColors = [
      'rgba(16, 185, 129,', // Emerald
      'rgba(6, 182, 212,',  // Cyan
      'rgba(52, 211, 153,', // Light Emerald
      'rgba(34, 211, 238,', // Light Cyan
    ];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.isVisible = true;
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;

      // Detect if hovering over clickable element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, input, textarea, [role="button"], select');
        mouse.isHoveringInteractive = !!interactive;
      }

      // Add a couple of subtle neon particles on movement
      const dist = Math.hypot(e.clientX - mouse.prevX, e.clientY - mouse.prevY);
      if (dist > 4 && particles.length < maxParticles) {
        const color = neonColors[Math.floor(Math.random() * neonColors.length)];
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.8 + 0.2;

        particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2.2 + 1,
          color,
          alpha: 0.7,
          decay: Math.random() * 0.03 + 0.02,
        });
      }

      mouse.prevX = e.clientX;
      mouse.prevY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.isVisible = false;
    };

    const handleMouseEnter = () => {
      mouse.isVisible = true;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Initial position
    mouse.x = window.innerWidth / 2;
    mouse.y = window.innerHeight / 2;
    mouse.targetX = mouse.x;
    mouse.targetY = mouse.y;

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth interpolation for fluid follower effect (lerp)
      const ease = 0.32;
      mouse.x += (mouse.targetX - mouse.x) * ease;
      mouse.y += (mouse.targetY - mouse.y) * ease;

      if (mouse.isVisible && mouse.x > 0 && mouse.y > 0) {
        // Record trail history
        trailPoints.unshift({ x: mouse.x, y: mouse.y, age: 0 });
        if (trailPoints.length > maxTrailPoints) {
          trailPoints.pop();
        }

        // Draw fluid neon ribbon trail
        if (trailPoints.length > 2) {
          ctx.beginPath();
          ctx.moveTo(trailPoints[0].x, trailPoints[0].y);

          for (let i = 1; i < trailPoints.length - 1; i++) {
            const xc = (trailPoints[i].x + trailPoints[i + 1].x) / 2;
            const yc = (trailPoints[i].y + trailPoints[i + 1].y) / 2;
            ctx.quadraticCurveTo(trailPoints[i].x, trailPoints[i].y, xc, yc);
          }

          // Dynamic gradient along trail
          const grad = ctx.createLinearGradient(
            trailPoints[0].x,
            trailPoints[0].y,
            trailPoints[trailPoints.length - 1].x,
            trailPoints[trailPoints.length - 1].y
          );
          grad.addColorStop(0, 'rgba(16, 185, 129, 0.45)');
          grad.addColorStop(0.5, 'rgba(6, 182, 212, 0.3)');
          grad.addColorStop(1, 'rgba(6, 182, 212, 0)');

          ctx.strokeStyle = grad;
          ctx.lineWidth = mouse.isHoveringInteractive ? 5 : 2.5;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
        }

        // Draw neon sparks / particles
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.alpha -= p.decay;

          if (p.alpha <= 0) {
            particles.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color} ${p.alpha})`;
          ctx.shadowColor = 'rgba(6, 182, 212, 0.6)';
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.restore();
        }

        // Draw the glowing central target pointer dot
        ctx.save();
        const pointerRadius = mouse.isHoveringInteractive ? 6 : 3.5;
        const glowRadius = mouse.isHoveringInteractive ? 18 : 10;

        // Ambient glow halo
        const haloGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          glowRadius
        );
        haloGrad.addColorStop(0, 'rgba(16, 185, 129, 0.55)');
        haloGrad.addColorStop(0.5, 'rgba(6, 182, 212, 0.25)');
        haloGrad.addColorStop(1, 'rgba(6, 182, 212, 0)');

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = haloGrad;
        ctx.fill();

        // Inner solid core
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, pointerRadius, 0, Math.PI * 2);
        ctx.fillStyle = mouse.isHoveringInteractive ? '#34d399' : '#10b981';
        ctx.shadowColor = '#06b6d4';
        ctx.shadowBlur = 8;
        ctx.fill();

        // Ring when hovering interactive elements
        if (mouse.isHoveringInteractive) {
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, 14, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(52, 211, 153, 0.4)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-300"
      style={{
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
};
