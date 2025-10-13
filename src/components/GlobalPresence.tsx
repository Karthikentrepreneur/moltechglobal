import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const GlobalPresence = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Deliveries Completed", value: 1000000 },
    { label: "Happy Clients", value: 10000 },
    { label: "Worldwide Offices", value: 100 },
  ];

  const [animatedStats, setAnimatedStats] = useState<number[]>(
    stats.map(() => 0)
  );

  const statsRef = useRef<HTMLDivElement | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const playedRef = useRef(false);

  const runCountUp = (duration = 1500) => {
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);

      setAnimatedStats(
        stats.map((s) => Math.floor(s.value * easeOutCubic(progress)))
      );

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(step);
      }
    };

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
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
    <section className="section-padding bg-deep-navy text-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="heading-lg mb-6">
          Our goals <span className="text-electric-red">in numbers</span>
        </h2>

        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">
                {stat.value >= 1000000
                  ? `${(animatedStats[i] / 1000000).toFixed(1)}M+`
                  : `${animatedStats[i].toLocaleString()}+`}
              </div>
              <div className="text-sm text-blue-200 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button with gradient blue */}
        <div className="mb-10">
          <button
            onClick={() => navigate("/global-presence")}
            className="bg-gradient-to-r from-royal-blue to-electric-blue text-white px-6 py-3 rounded-lg text-sm font-semibold transition-transform duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            Explore Our Global Network
            <svg
              className="w-4 h-4"
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
