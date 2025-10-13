import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const GlobalPresence = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "COUNTRIES", value: 15 },
    { label: "PARTNERS", value: 200 },
    { label: "YEARS", value: 15 },
    { label: "LOCATIONS", value: 25 },
  ];

  const [animatedStats, setAnimatedStats] = useState<number[]>(
    stats.map(() => 0)
  );

  const statsRef = useRef<HTMLDivElement | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const playedRef = useRef(false);

  const runCountUp = (duration = 1500) => {
    const start = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);

      setAnimatedStats(
        stats.map((s) => Math.floor(s.value * easeOutCubic(progress)))
      );

      if (progress < 1) rafIdRef.current = requestAnimationFrame(step);
    };

    rafIdRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    const el = statsRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      if (!playedRef.current) {
        runCountUp();
        playedRef.current = true;
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !playedRef.current) {
            runCountUp();
            playedRef.current = true;
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-deep-navy text-white py-20">
      {/* background gradient glows */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-tr from-royal-blue to-electric-blue blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-gradient-to-br from-royal-blue to-electric-blue blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Global Presence
        </h2>
        <p className="mt-4 text-blue-200">
          Where We Are — Global operations across the Pacific region and beyond
        </p>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 px-8 py-10 text-center shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl md:text-5xl font-extrabold">
                {animatedStats[i]}+
              </div>
              <div className="mt-3 text-xs tracking-[0.2em] text-blue-200">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14">
          <button
            onClick={() => navigate("/global")}
            className="bg-gradient-to-r from-royal-blue to-electric-blue text-white px-8 py-4 rounded-lg text-sm font-semibold tracking-wide transition-transform duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            Explore Our Global Network
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
