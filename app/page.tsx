"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  const products = [
    { label: "Rubber Stamps", desc: "Precision-cut for crisp, lasting impressions.", icon: "✦" },
    { label: "Nylon Stamps", desc: "Durable, flexible, and detail-perfect.", icon: "✧" },
    { label: "Self-Inking", desc: "Built-in ink pad, re-inkable and reliable.", icon: "◈" },
    { label: "Custom Designs", desc: "Artwork, logos, signatures — anything.", icon: "◇" },
  ];

  return (
    <main className="root">

      {/* ── BACKGROUND ── */}
      <div className="bg-texture" />
      <div className="bg-grain" />

      {/* ── HEADER ── */}
      <header className={`header ${loaded ? "in" : ""}`}>
        <div className="header-pill">
          <span className="pill-icon">⚡</span>
          <span className="pill-text">30-minute delivery</span>
        </div>
        <nav className="header-nav">
          <span className="nav-item">Goa</span>
          <span className="nav-dot">·</span>
          <span className="nav-item">Bengaluru</span>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="hero">

        {/* Left editorial column */}
        <div className={`hero-left ${loaded ? "in" : ""}`}>
          <p className="eyebrow">Est. 2010 &nbsp;/&nbsp; Handcraft Studio</p>

          <h1 className="brand-title">
            <span className="brand-fly">Fly</span>
            <span className="brand-bon">Bon</span>
          </h1>

          <div className="stamp-word-wrap">
            <span className="stamp-word">STAMPS</span>
            <div className="stamp-underline" />
          </div>

          <p className="hero-desc">
            We craft rubber, nylon, and self‑inking stamps with obsessive precision.
            Every impression tells your story — delivered to your door in minutes.
          </p>

          <div className="cta-block">
            <p className="cta-eyebrow">Call to order</p>
            <a href="tel:+919764612228" className="phone-link">
              +91 97646 12228
            </a>
            <p className="owner-label"></p>
          </div>

          <div className="rating-bar">
            <span className="stars">★★★★★</span>
            <span className="rating-num">4.9</span>
            <span className="rating-count">/ 376 reviews</span>
          </div>
        </div>

        {/* Right stamp showcase */}
        <div className={`hero-right ${loaded ? "in" : ""}`}>
          <div className="logo-frame">
            <div className="logo-circle">
              <Image
                src="/logo.png"
                alt="FlyBon Stamps"
                width={110}
                height={110}
                priority
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="frame-corner tl" />
            <div className="frame-corner tr" />
            <div className="frame-corner bl" />
            <div className="frame-corner br" />
            <div className="frame-label">Since 2010</div>
          </div>

          <div className="tagline-strip">
            <span>Precision Crafted</span>
            <span className="strip-dot">◆</span>
            <span>Fast Delivered</span>
            <span className="strip-dot">◆</span>
            <span>Trusted Quality</span>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className={`divider-row ${loaded ? "in" : ""}`}>
        <span className="divider-line" />
        <span className="divider-text">our craft</span>
        <span className="divider-line" />
      </div>

      {/* ── PRODUCTS ── */}
      <section className={`products ${loaded ? "in" : ""}`}>
        {products.map((p, i) => (
          <div key={p.label} className="product-card" style={{ animationDelay: `${0.85 + i * 0.1}s` }}>
            <span className="card-icon">{p.icon}</span>
            <h3 className="card-title">{p.label}</h3>
            <p className="card-desc">{p.desc}</p>
          </div>
        ))}
      </section>

      {/* ── BRANCHES ── */}
      <section className={`branches ${loaded ? "in" : ""}`}>
        <div className="branch-card">
          <p className="branch-tag">Branch 01</p>
          <h2 className="branch-city">Goa</h2>
          <p className="branch-state">India</p>
        </div>
        <div className="branch-divider">
          <span className="branch-divider-icon">◆</span>
        </div>
        <div className="branch-card branch-card--right">
          <p className="branch-tag">Branch 02</p>
          <h2 className="branch-city">Bengaluru</h2>
          <p className="branch-state">India</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <span className="footer-brand">FlyBon Stamps</span>
        <span className="footer-sep">·</span>
        <span className="footer-copy">Handcrafted impressions since 2010</span>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;0,700;1,300;1,600&family=DM+Mono:wght@300;400;500&family=Unbounded:wght@400;700;900&display=swap');

        :root {
          --cream: #F5EFE0;
          --cream-dark: #EBE2CC;
          --ink: #1A1209;
          --ink-soft: #2C2010;
          --saffron: #E8720C;
          --saffron-light: #F5A44A;
          --gold: #C8922A;
          --gold-light: #DEB96A;
          --muted: #8C7A5A;
          --muted-light: #B09A78;
          --border: rgba(26,18,9,0.12);
          --border-strong: rgba(26,18,9,0.22);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .root {
          min-height: 100vh;
          background: var(--cream);
          color: var(--ink);
          font-family: 'DM Mono', monospace;
          position: relative;
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
        }

        /* ── BACKGROUNDS ── */
        .bg-texture {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background:
            radial-gradient(ellipse 80% 60% at 15% 10%, rgba(232,114,12,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 85% 80%, rgba(200,146,42,0.09) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 50% 50%, rgba(235,226,204,0.5) 0%, transparent 70%);
        }
        .bg-grain {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          opacity: 0.045;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 256px;
        }

        /* ── ANIMATIONS ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: none; }
        }

        /* ── HEADER ── */
        .header {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 3rem;
          border-bottom: 1px solid var(--border);
          opacity: 0;
        }
        .header.in {
          animation: fadeIn 0.5s ease 0.05s forwards;
        }

        .header-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--saffron);
          color: #fff;
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          font-weight: 500;
        }
        .pill-icon { font-size: 0.7rem; }

        .header-nav {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .nav-dot { color: var(--gold); }

        /* ── HERO ── */
        .hero {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          min-height: 82vh;
          align-items: stretch;
        }

        /* LEFT */
        .hero-left {
          padding: 4rem 3rem 4rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.6rem;
          border-right: 1px solid var(--border);
          opacity: 0;
        }
        .hero-left.in {
          animation: fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.2s forwards;
        }

        .eyebrow {
          font-size: 0.58rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .brand-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(4rem, 9vw, 7.5rem);
          font-weight: 700;
          line-height: 0.88;
          letter-spacing: -0.02em;
        }
        .brand-fly { color: var(--ink); }
        .brand-bon {
          color: var(--saffron);
          font-style: italic;
        }

        .stamp-word-wrap {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .stamp-word {
          font-family: 'Unbounded', sans-serif;
          font-size: clamp(1rem, 2.5vw, 1.6rem);
          font-weight: 900;
          letter-spacing: 0.45em;
          color: var(--ink-soft);
          opacity: 0.12;
        }
        .stamp-underline {
          height: 2px;
          width: 5rem;
          background: var(--saffron);
        }

        .hero-desc {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          font-weight: 300;
          line-height: 1.7;
          color: var(--ink-soft);
          max-width: 38ch;
          font-style: italic;
        }

        .cta-block {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .cta-eyebrow {
          font-size: 0.58rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .phone-link {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          font-weight: 600;
          color: var(--ink);
          text-decoration: none;
          letter-spacing: 0.02em;
          border-bottom: 2px solid var(--saffron);
          padding-bottom: 2px;
          display: inline-block;
          transition: color 0.2s;
        }
        .phone-link:hover { color: var(--saffron); }
        .owner-label {
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted-light);
        }

        .rating-bar {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          padding-top: 0.5rem;
          border-top: 1px solid var(--border);
        }
        .stars {
          font-size: 0.65rem;
          color: var(--gold);
          letter-spacing: 0.1em;
        }
        .rating-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--ink);
        }
        .rating-count {
          font-size: 0.6rem;
          color: var(--muted);
          letter-spacing: 0.1em;
        }

        /* RIGHT */
        .hero-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
          padding: 4rem 2.5rem;
          background: var(--cream-dark);
          opacity: 0;
        }
        .hero-right.in {
          animation: fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.4s forwards;
        }

        .logo-frame {
          position: relative;
          width: 220px;
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-circle {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: var(--cream);
          border: 2px solid var(--border-strong);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 40px rgba(26,18,9,0.1), inset 0 0 0 8px var(--cream-dark);
        }
        .frame-corner {
          position: absolute;
          width: 18px;
          height: 18px;
        }
        .frame-corner.tl { top: 0; left: 0; border-top: 2px solid var(--gold); border-left: 2px solid var(--gold); }
        .frame-corner.tr { top: 0; right: 0; border-top: 2px solid var(--gold); border-right: 2px solid var(--gold); }
        .frame-corner.bl { bottom: 0; left: 0; border-bottom: 2px solid var(--gold); border-left: 2px solid var(--gold); }
        .frame-corner.br { bottom: 0; right: 0; border-bottom: 2px solid var(--gold); border-right: 2px solid var(--gold); }
        .frame-label {
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--saffron);
          color: #fff;
          font-size: 0.5rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          padding: 0.2rem 0.6rem;
          white-space: nowrap;
        }

        .tagline-strip {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
          text-align: center;
        }
        .strip-dot { color: var(--gold); font-size: 0.4rem; }

        /* ── DIVIDER ROW ── */
        .divider-row {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 1.2rem;
          padding: 0 3rem;
          margin: 3.5rem 0 0;
          opacity: 0;
        }
        .divider-row.in {
          animation: fadeIn 0.6s ease 0.7s forwards;
        }
        .divider-line {
          flex: 1;
          height: 1px;
          background: var(--border-strong);
        }
        .divider-text {
          font-size: 0.58rem;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: var(--muted-light);
          white-space: nowrap;
        }

        /* ── PRODUCTS ── */
        .products {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          margin: 2.5rem 3rem 0;
          border: 1px solid var(--border-strong);
          opacity: 0;
        }
        .products.in {
          animation: fadeIn 0.5s ease 0.8s forwards;
        }

        .product-card {
          padding: 2rem 1.5rem;
          border-right: 1px solid var(--border-strong);
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          opacity: 0;
          transition: background 0.2s;
          cursor: default;
        }
        .products.in .product-card {
          animation: cardIn 0.5s ease forwards;
        }
        .product-card:last-child { border-right: none; }
        .product-card:hover { background: rgba(232,114,12,0.04); }

        .card-icon {
          font-size: 1rem;
          color: var(--saffron);
        }
        .card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--ink);
          line-height: 1.2;
        }
        .card-desc {
          font-size: 0.62rem;
          line-height: 1.65;
          color: var(--muted);
          letter-spacing: 0.04em;
        }

        /* ── BRANCHES ── */
        .branches {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: stretch;
          margin: 2.5rem 3rem 0;
          border: 1px solid var(--border-strong);
          opacity: 0;
        }
        .branches.in {
          animation: fadeUp 0.55s ease 1s forwards;
        }

        .branch-card {
          flex: 1;
          padding: 2rem 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .branch-card--right {
          text-align: right;
          align-items: flex-end;
          background: var(--cream-dark);
        }
        .branch-tag {
          font-size: 0.55rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--muted-light);
        }
        .branch-city {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1;
          letter-spacing: -0.01em;
        }
        .branch-state {
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--saffron);
        }
        .branch-divider {
          width: 1px;
          background: var(--border-strong);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .branch-divider-icon {
          font-size: 0.5rem;
          color: var(--gold);
          background: var(--cream);
          padding: 4px 0;
        }

        /* ── FOOTER ── */
        .footer {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: 2rem 3rem;
          margin-top: 3.5rem;
          border-top: 1px solid var(--border);
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted-light);
        }
        .footer-sep { color: var(--gold); }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .header { padding: 1.2rem 1.5rem; }
          .hero { grid-template-columns: 1fr; min-height: auto; }
          .hero-left { padding: 3rem 1.5rem; border-right: none; border-bottom: 1px solid var(--border); }
          .hero-right { padding: 3rem 1.5rem; }
          .products { grid-template-columns: 1fr 1fr; margin: 2rem 1.5rem 0; }
          .product-card:nth-child(2) { border-right: none; }
          .product-card:nth-child(3) { border-top: 1px solid var(--border-strong); }
          .product-card:nth-child(4) { border-top: 1px solid var(--border-strong); border-right: none; }
          .branches { flex-direction: column; margin: 2rem 1.5rem 0; }
          .branch-card { padding: 1.5rem; }
          .branch-card--right { text-align: left; align-items: flex-start; border-top: 1px solid var(--border-strong); }
          .branch-divider { display: none; }
          .divider-row { padding: 0 1.5rem; }
          .footer { padding: 1.5rem; flex-direction: column; gap: 0.3rem; }
          .logo-frame { width: 180px; height: 180px; }
        }
      `}</style>
    </main>
  );
}