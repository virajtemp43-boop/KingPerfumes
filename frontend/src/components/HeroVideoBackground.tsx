import { useMemo } from "react";

export function HeroVideoBackground({
  videoSrc,
  posterSrc,
  parallax = 0,
}: {
  /** Path to your own looping mp4/webm, e.g. "/videos/hero-loop.mp4". Optional — the
   *  aurora + particle effect alone still looks premium if you don't have footage yet. */
  videoSrc?: string;
  posterSrc?: string;
  parallax?: number;
}) {
  const sparkles = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        top: Math.round(Math.random() * 100),
        left: Math.round(Math.random() * 100),
        size: 2 + Math.random() * 3,
        delay: Math.round(Math.random() * 3000),
        gold: i % 3 !== 0,
      })),
    []
  );

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
      {/* Optional video layer — supply your own file via videoSrc */}
      {videoSrc && (
        <video
          className="h-full w-full object-cover opacity-70"
          style={{ transform: `translateY(${parallax}px) scale(1.1)` }}
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      {!videoSrc && posterSrc && (
        <img
          src={posterSrc}
          alt=""
          className="h-full w-full object-cover opacity-50"
          style={{ transform: `translateY(${parallax}px) scale(1.1)` }}
        />
      )}

      {/* Aurora glow blobs — gold + emerald, drifting slowly */}
      <div className="aurora-blob absolute -top-24 -left-16 h-[420px] w-[420px] rounded-full bg-gold/20" />
      <div
        className="aurora-blob absolute top-1/3 -right-24 h-[380px] w-[380px] rounded-full bg-burgundy/25"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="aurora-blob absolute -bottom-32 left-1/4 h-[360px] w-[360px] rounded-full bg-gold/15"
        style={{ animationDelay: "9s" }}
      />

      {/* Twinkling gold/emerald particles */}
      {sparkles.map((s) => (
        <span
          key={s.id}
          className={`sparkle-dot absolute rounded-full ${s.gold ? "bg-gold" : "bg-burgundy"}`}
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}ms`,
          }}
        />
      ))}

      {/* Vignette + base tint so foreground text stays legible */}
      <div className="hero-vignette absolute inset-0" />
      <div className="absolute inset-0 bg-background/55" />
    </div>
  );
}
