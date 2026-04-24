"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const particles: { x: number; y: number; size: number; speed: number; opacity: number; color: string }[] = [];
    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.4 + 0.1,
        opacity: Math.random() * 0.2 + 0.04,
        color: Math.random() > 0.5 ? "#FFD600" : "#CC0000",
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
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  const ghosts = [
    { left: "8%", delay: "0s", dur: "18s", w: 80, h: 40 },
    { left: "22%", delay: "5s", dur: "22s", w: 60, h: 30 },
    { left: "62%", delay: "2s", dur: "16s", w: 100, h: 50 },
    { left: "80%", delay: "8s", dur: "20s", w: 70, h: 35 },
    { left: "45%", delay: "12s", dur: "25s", w: 90, h: 45 },
  ];

  return (
    <main style={{ position: "relative", height: "100vh", overflow: "hidden", background: "#111111", fontFamily: "sans-serif" }}>
      <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, zIndex: 0 }} />
      <div style={{ position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,214,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,214,0,0.03) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      {ghosts.map((s, i) => (
        <div key={i} style={{ position: "fixed", left: s.left, bottom: "-100px", width: s.w, height: s.h, border: "2px solid rgba(255,214,0,0.08)", borderRadius: 3, zIndex: 2, pointerEvents: "none", animation: `floatUp ${s.dur} linear ${s.delay} infinite` }} />
      ))}

      {/* Speed */}
      <div style={{ position: "fixed", top: "1.8rem", left: "2rem", zIndex: 20, animation: "slideUp 0.8s ease 1.3s both" }}>
        <div style={{ fontFamily: "'Bebas Neue',cursive,sans-serif", fontSize: "2.2rem", color: "#CC0000", lineHeight: 1 }}>30</div>
        <div style={{ fontSize: "0.48rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,245,240,0.4)", lineHeight: 1.5 }}>MIN<br/>DELIVERY</div>
      </div>

      {/* Rating */}
      <div style={{ position: "fixed", top: "1.6rem", right: "2rem", zIndex: 20, width: 68, height: 68, border: "2px solid #FFD600", borderRadius: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", animation: "slideUp 0.8s ease 1.3s both, badgePulse 3s ease 2s infinite" }}>
        <div style={{ fontFamily: "'Bebas Neue',cursive,sans-serif", fontSize: "1.5rem", color: "#FFD600", lineHeight: 1 }}>4.9</div>
        <div style={{ fontSize: "0.4rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,245,240,0.45)", textAlign: "center", lineHeight: 1.4 }}>★ RATED<br/>390 REVIEWS</div>
      </div>

      {/* Center content */}
      <div style={{ position: "relative", zIndex: 10, height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.1rem", padding: "1.5rem" }}>

        <div style={{ animation: "logoReveal 0.9s cubic-bezier(0.22,1,0.36,1) 0.3s both" }}>
          <Image src="/logo.png" alt="FlyBon Stamps" width={145} height={145} priority style={{ objectFit: "contain", filter: "drop-shadow(0 0 30px rgba(255,214,0,0.35))" }} />
        </div>

        <div style={{ animation: "slideUp 0.8s ease 0.6s both", textAlign: "center" }}>
          <div style={{ fontFamily: "'Bebas Neue',cursive,sans-serif", fontSize: "clamp(2.5rem,7vw,5rem)", letterSpacing: "0.15em", color: "#f5f5f0", lineHeight: 1 }}>
            FLY<span style={{ color: "#FFD600" }}>BON</span> STAMPS
          </div>
        </div>

        <div style={{ animation: "slideUp 0.8s ease 0.75s both" }}>
          <div style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(245,245,240,0.38)", textAlign: "center" }}>
            Precision Crafted &nbsp;·&nbsp; Fast Delivered &nbsp;·&nbsp; Trusted Quality
          </div>
        </div>

        <div style={{ width: 70, height: 2, background: "linear-gradient(90deg,transparent,#FFD600,transparent)", animation: "slideUp 0.8s ease 0.9s both" }} />

        <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap", justifyContent: "center", animation: "slideUp 0.8s ease 1s both" }}>
          {["Rubber Stamps", "Nylon Stamps", "Self-Inking", "Custom Designs"].map((s) => (
            <span key={s} style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,245,240,0.55)", border: "1px solid rgba(255,214,0,0.2)", padding: "0.32rem 0.75rem", borderRadius: 2, background: "rgba(255,214,0,0.04)" }}>{s}</span>
          ))}
        </div>

        <div style={{ display: "flex", gap: "1.8rem", alignItems: "center", animation: "slideUp 0.8s ease 1.1s both" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Bebas Neue',cursive,sans-serif", fontSize: "1.4rem", letterSpacing: "0.15em", color: "#FFD600" }}>GOA</div>
            <div style={{ fontSize: "0.52rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(245,245,240,0.3)" }}>Branch</div>
          </div>
          <div style={{ color: "rgba(255,214,0,0.2)", fontSize: "2rem" }}>·</div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Bebas Neue',cursive,sans-serif", fontSize: "1.4rem", letterSpacing: "0.15em", color: "#FFD600" }}>BENGALURU</div>
            <div style={{ fontSize: "0.52rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(245,245,240,0.3)" }}>Branch</div>
          </div>
        </div>

        <div style={{ width: 40, height: 1, background: "rgba(255,214,0,0.15)", animation: "slideUp 0.8s ease 1.15s both" }} />

        <div style={{ textAlign: "center", animation: "slideUp 0.8s ease 1.2s both" }}>
          <div style={{ fontSize: "0.58rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(245,245,240,0.3)", marginBottom: "0.35rem" }}>For more info, contact us</div>
          <a href="tel:+919764612228" style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.5rem,4vw,2.1rem)", color: "#f5f5f0", letterSpacing: "0.08em", textDecoration: "none", display: "block" }}>
            +91 <span style={{ color: "#CC0000" }}>976 461</span> 2228
          </a>
          <div style={{ fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(245,245,240,0.3)", marginTop: "0.3rem" }}>Somin C. Gseen — Owner</div>
        </div>
      </div>

      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg,#FFD600,#CC0000,#FFD600)", zIndex: 20 }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        @keyframes logoReveal { 0%{opacity:0;transform:scale(0.8) translateY(-20px)} 100%{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes slideUp { 0%{opacity:0;transform:translateY(25px)} 100%{opacity:1;transform:translateY(0)} }
        @keyframes floatUp { 0%{transform:translateY(110vh) scale(0.6);opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{transform:translateY(-20vh) scale(0.9);opacity:0} }
        @keyframes badgePulse { 0%,100%{box-shadow:0 0 0 0 rgba(255,214,0,0.35)} 50%{box-shadow:0 0 0 9px rgba(255,214,0,0)} }
      `}</style>
    </main>
  );
}
