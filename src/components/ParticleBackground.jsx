import React, { useRef, useEffect } from 'react';

// Modern hareketli partikül efekti (canvas tabanlı)
const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const PARTICLE_NUM = 60;
  const COLOR = 'rgba(0,234,255,0.7)';
  const LINE_COLOR = 'rgba(0,234,255,0.15)';
  const RADIUS = 2.2;
  const SPEED = 0.3;
  const CONNECT_DIST = 120;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    function setCanvasSize() {
      // Tüm viewportu kapla
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    // Partikülleri başlat
    function initParticles(width, height) {
      particles.current = Array.from({ length: PARTICLE_NUM }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
      }));
    }

    let width = window.innerWidth;
    let height = window.innerHeight;
    setCanvasSize();
    initParticles(width, height);

    function draw() {
      // Her animasyonda canvas boyutunu güncelle
      if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        setCanvasSize();
        width = window.innerWidth;
        height = window.innerHeight;
        // Partikülleri yeniden başlat
        initParticles(width, height);
      }
      ctx.clearRect(0, 0, width, height);
      // Partikülleri çiz
      particles.current.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, RADIUS, 0, 2 * Math.PI);
        ctx.shadowColor = COLOR;
        ctx.shadowBlur = 8;
        ctx.fillStyle = COLOR;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      // Çizgileri çiz
      for (let i = 0; i < PARTICLE_NUM; i++) {
        for (let j = i + 1; j < PARTICLE_NUM; j++) {
          const p1 = particles.current[i];
          const p2 = particles.current[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < CONNECT_DIST) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = LINE_COLOR;
            ctx.lineWidth = 1.1 - dist / CONNECT_DIST;
            ctx.stroke();
          }
        }
      }
    }

    function update() {
      for (let p of particles.current) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }
    }

    function animate() {
      update();
      draw();
      requestAnimationFrame(animate);
    }

    animate();

    // Resize event
    const handleResize = () => {
      setCanvasSize();
      width = window.innerWidth;
      height = window.innerHeight;
      initParticles(width, height);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticleBackground;
