"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Subtle floating ink-dot particles
    const particles: {
      x: number; y: number; size: number;
      speed: number; opacity: number; color: string;
    }[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1.5 + 0.3,
        speed: Math.random() * 0.25 + 0.08,
        opacity: Math.random() * 0.12 + 0.03,
        color: Math.random() > 0.6 ? "#FFD600" : "#ffffff",
      });
    }
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        p.y -= p.speed;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const products = [
    { label: "Rubber Stamps", icon: "◈" },
    { label: "Nylon Stamps", icon: "◉" },
    { label: "Self-Inking", icon: "◎" },
    { label: "Custom Designs", icon: "◇" },
  ];

  return (
    <main className="flybon-root">
      <canvas ref={canvasRef} className="flybon-canvas" />

      {/* Noise texture overlay */}
      <div className="flybon-noise" />

      {/* Top bar */}
      <header className={`flybon-header ${loaded ? "in" : ""}`}>
        <div className="flybon-delivery">
          <span className="flybon-delivery-num">30</span>
          <span className="flybon-delivery-label">min<br />delivery</span>
        </div>
        <div className="flybon-brand-top">
          FLY<span className="gold">BON</span>
        </div>
        <div className="flybon-badge">
          <span className="flybon-badge-num">4.9</span>
          <span className="flybon-badge-stars">★★★★★</span>
          <span className="flybon-badge-reviews">390 reviews</span>
        </div>
      </header>

      {/* Hero */}
      <section className="flybon-hero">
        <div className={`flybon-logo-wrap ${loaded ? "in" : ""}`}>
          <div className="flybon-logo-ring" />
          <Image
            src="/logo.png"
            alt="FlyBon Stamps"
            width={120}
            height={120}
            priority
            style={{ objectFit: "contain", position: "relative", zIndex: 2 }}
          />
        </div>

        <div className={`flybon-title-wrap ${loaded ? "in" : ""}`}>
          <p className="flybon-eyebrow">Est. Goa &amp; Bengaluru</p>
          <h1 className="flybon-title">
            FLYBON<br />
            <span className="flybon-title-stamps">STAMPS</span>
          </h1>
          <p className="flybon-tagline">
            Precision Crafted &nbsp;·&nbsp; Fast Delivered &nbsp;·&nbsp; Trusted Quality
          </p>
        </div>

        {/* Divider */}
        <div className={`flybon-divider ${loaded ? "in" : ""}`}>
          <span className="flybon-divider-line" />
          <span className="flybon-divider-diamond">◆</span>
          <span className="flybon-divider-line" />
        </div>

        {/* Products */}
        <div className={`flybon-products ${loaded ? "in" : ""}`}>
          {products.map((p) => (
            <div key={p.label} className="flybon-product-chip">
              <span className="flybon-chip-icon">{p.icon}</span>
              <span className="flybon-chip-label">{p.label}</span>
            </div>
          ))}
        </div>

        {/* Branches */}
        <div className={`flybon-branches ${loaded ? "in" : ""}`}>
          <div className="flybon-branch">
            <span className="flybon-branch-city">GOA</span>
            <span className="flybon-branch-tag">Branch</span>
          </div>
          <div className="flybon-branch-sep">◆</div>
          <div className="flybon-branch">
            <span className="flybon-branch-city">BENGALURU</span>
            <span className="flybon-branch-tag">Branch</span>
          </div>
        </div>

        {/* CTA */}
        <div className={`flybon-cta ${loaded ? "in" : ""}`}>
          <p className="flybon-cta-label">Call to order</p>
          <a href="tel:+919764612228" className="flybon-phone">
            +91 <strong>976 461</strong> 2228
          </a>
          <p className="flybon-owner">Somin C. Gseen &nbsp;—&nbsp; Owner</p>
        </div>
      </section>

      {/* Bottom accent bar */}
      <div className="flybon-bottombar" />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');

        .flybon-root {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #0d0d0d;
          font-family: 'DM Sans', sans-serif;
          color: #f0ede6;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .flybon-canvas {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .flybon-noise {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
        }

        /* ── HEADER ── */
        .flybon-header {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 680px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem 2rem 0;
          opacity: 0;
          transform: translateY(-16px);
          transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;
        }
        .flybon-header.in {
          opacity: 1;
          transform: none;
        }

        .flybon-delivery {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }
        .flybon-delivery-num {
          font-family: 'Playfair Display', serif;
          font-size: 2.6rem;
          font-weight: 900;
          color: #CC0000;
          line-height: 1;
        }
        .flybon-delivery-label {
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(240,237,230,0.35);
          line-height: 1.6;
        }

        .flybon-brand-top {
          font-family: 'Playfair Display', serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.45em;
          text-transform: uppercase;
          color: rgba(240,237,230,0.25);
        }
        .flybon-brand-top .gold { color: rgba(255,214,0,0.5); }

        .flybon-badge {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1px;
        }
        .flybon-badge-num {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #FFD600;
          line-height: 1;
        }
        .flybon-badge-stars {
          font-size: 0.55rem;
          letter-spacing: 0.08em;
          color: rgba(255,214,0,0.6);
        }
        .flybon-badge-reviews {
          font-size: 0.55rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(240,237,230,0.3);
        }

        /* ── HERO ── */
        .flybon-hero {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 680px;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem 5rem;
          gap: 2rem;
          text-align: center;
        }

        /* Logo */
        .flybon-logo-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 160px;
          height: 160px;
          opacity: 0;
          transform: scale(0.85);
          transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s,
                      transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s;
        }
        .flybon-logo-wrap.in {
          opacity: 1;
          transform: scale(1);
        }
        .flybon-logo-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(255,214,0,0.18);
          animation: ringPulse 4s ease infinite;
        }
        .flybon-logo-ring::before {
          content: '';
          position: absolute;
          inset: 8px;
          border-radius: 50%;
          border: 1px solid rgba(255,214,0,0.08);
        }
        @keyframes ringPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(255,214,0,0.08); }
          50% { box-shadow: 0 0 0 16px rgba(255,214,0,0); }
        }

        /* Title */
        .flybon-title-wrap {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s;
        }
        .flybon-title-wrap.in {
          opacity: 1;
          transform: none;
        }
        .flybon-eyebrow {
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: rgba(240,237,230,0.3);
          margin: 0 0 0.75rem;
        }
        .flybon-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3.5rem, 10vw, 6.5rem);
          font-weight: 900;
          line-height: 0.92;
          letter-spacing: -0.01em;
          color: #f0ede6;
          margin: 0 0 1rem;
        }
        .flybon-title-stamps {
          -webkit-text-stroke: 1.5px #FFD600;
          color: transparent;
          letter-spacing: 0.12em;
        }
        .flybon-tagline {
          font-size: 0.7rem;
          font-weight: 300;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(240,237,230,0.4);
          margin: 0;
        }

        /* Divider */
        .flybon-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
          max-width: 320px;
          opacity: 0;
          transition: opacity 0.6s ease 0.7s;
        }
        .flybon-divider.in { opacity: 1; }
        .flybon-divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,214,0,0.25));
        }
        .flybon-divider-line:last-child {
          background: linear-gradient(90deg, rgba(255,214,0,0.25), transparent);
        }
        .flybon-divider-diamond {
          font-size: 0.5rem;
          color: #FFD600;
          opacity: 0.6;
        }

        /* Products */
        .flybon-products {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.6rem;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.6s ease 0.8s, transform 0.6s ease 0.8s;
        }
        .flybon-products.in {
          opacity: 1;
          transform: none;
        }
        .flybon-product-chip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 1rem;
          border: 0.5px solid rgba(255,214,0,0.15);
          border-radius: 2px;
          background: rgba(255,214,0,0.03);
          transition: border-color 0.2s, background 0.2s;
          cursor: default;
        }
        .flybon-product-chip:hover {
          border-color: rgba(255,214,0,0.35);
          background: rgba(255,214,0,0.06);
        }
        .flybon-chip-icon {
          font-size: 0.65rem;
          color: rgba(255,214,0,0.5);
        }
        .flybon-chip-label {
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 500;
          color: rgba(240,237,230,0.55);
        }

        /* Branches */
        .flybon-branches {
          display: flex;
          align-items: center;
          gap: 2rem;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.6s ease 0.9s, transform 0.6s ease 0.9s;
        }
        .flybon-branches.in {
          opacity: 1;
          transform: none;
        }
        .flybon-branch {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
        }
        .flybon-branch-city {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #FFD600;
        }
        .flybon-branch-tag {
          font-size: 0.55rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(240,237,230,0.28);
        }
        .flybon-branch-sep {
          font-size: 0.4rem;
          color: rgba(255,214,0,0.2);
        }

        /* CTA */
        .flybon-cta {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.6s ease 1s, transform 0.6s ease 1s;
        }
        .flybon-cta.in {
          opacity: 1;
          transform: none;
        }
        .flybon-cta-label {
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(240,237,230,0.28);
          margin: 0;
        }
        .flybon-phone {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 5vw, 2.6rem);
          font-weight: 700;
          color: #f0ede6;
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.2s;
        }
        .flybon-phone:hover { color: #FFD600; }
        .flybon-phone strong { color: #CC0000; font-weight: 700; }
        .flybon-owner {
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(240,237,230,0.28);
          margin: 0;
        }

        /* Bottom bar */
        .flybon-bottombar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #FFD600 0%, #CC0000 50%, #FFD600 100%);
          z-index: 20;
        }

        .gold { color: #FFD600; }
      `}</style>
    </main>
  );
}