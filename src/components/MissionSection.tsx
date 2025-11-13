// src/components/MissionSection.tsx
import React, { useEffect, useRef, useState } from "react";

const MissionSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // image shown on the right
  const vmImg = `${import.meta.env.BASE_URL}vision-mission.png`;

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="vision-mission"
      className="relative w-full px-6 lg:px-16 py-20 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div
        className={`relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* LEFT :: Vision + Mission Text */}
        <div className="space-y-10 text-white">
          {/* Small eyebrow + heading */}
          <div className="space-y-3">
            <span className="inline-flex rounded-full bg-emerald-500/10 border border-emerald-400/40 px-4 py-1 text-xs font-semibold tracking-[0.18em] uppercase text-emerald-200">
              Our Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Building a{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-lime-300 to-yellow-300 bg-clip-text text-transparent">
                cleaner, sustainable
              </span>{" "}
              tomorrow.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-xl leading-relaxed">
              Every drop of used cooking oil we collect moves the world a little
              closer to low-carbon, renewable energy.
            </p>
          </div>

          {/* Vision + Mission cards */}
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
            {/* Vision */}
            <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/15 p-5 sm:p-6 space-y-3 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
              <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200 text-sm">
                  👁️
                </span>
                <span>Vision</span>
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/85">
                To engage in business and services in the bio-space which
                contribute to reduction in carbon footprint and environmental
                care.
              </p>
            </div>

            {/* Mission */}
            <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/15 p-5 sm:p-6 space-y-3 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
              <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/25 text-sky-100 text-sm">
                  🎯
                </span>
                <span>Mission</span>
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/85">
                Scale up collection and processing of sustainable feedstock for
                clean energy. Operate with high standards of ethics and good
                governance. Care for the community and the environment.
              </p>
            </div>
          </div>

          {/* Quick highlight points (responsive stack) */}
          <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-white/80">
            <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 border border-white/10">
              • Lower carbon footprint
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 border border-white/10">
              • Sustainable bio-feedstock
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 border border-white/10">
              • Community & environmental care
            </span>
          </div>
        </div>

        {/* RIGHT :: Floating Image */}
        <div className="flex justify-center md:justify-end relative">
          <img
            src={vmImg}
            alt="Vision and mission illustration"
            loading="lazy"
            decoding="async"
            width={520}
            height={400}
            className={`w-[260px] sm:w-[360px] lg:w-[480px] xl:w-[520px] h-auto transition-all duration-700 drop-shadow-[0_25px_60px_rgba(0,0,0,0.7)] ${
              isVisible
                ? "opacity-100 translate-y-0 translate-x-[-12px] sm:translate-x-[-20px] animate-floating"
                : "opacity-0 translate-y-4"
            }`}
          />
        </div>
      </div>

      {/* Floating Animation */}
      <style>{`
        @keyframes floating {
          0% { transform: translateY(0) translateX(-20px); }
          50% { transform: translateY(-10px) translateX(-20px); }
          100% { transform: translateY(0) translateX(-20px); }
        }
        .animate-floating {
          animation: floating 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default MissionSection;
