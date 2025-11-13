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

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="vision-mission"
      className="relative w-full px-6 lg:px-16 py-24 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div
        className={`relative max-w-4xl mx-auto text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Eyebrow Heading */}
        <span className="inline-flex rounded-full bg-emerald-500/10 border border-emerald-400/40 px-5 py-1.5 text-xs font-semibold tracking-[0.22em] uppercase text-emerald-200">
          Our Purpose
        </span>

        {/* Main Heading */}
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
          Building a{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-lime-300 to-yellow-300 bg-clip-text text-transparent">
            cleaner, sustainable
          </span>{" "}
          tomorrow
        </h2>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mx-auto">
          Every drop of used cooking oil we collect moves the world a little closer
          to clean, renewable, low-carbon energy. We believe sustainability begins
          with small actions that create global impact.
        </p>

        {/* Vision & Mission Cards */}
        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {/* Vision */}
          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/15 p-7 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
            <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200 text-lg">
                👁️
              </span>
              Vision
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              To engage in business and services in the bio-space that reduce
              carbon footprint and support environmental wellness.
            </p>
          </div>

          {/* Mission */}
          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/15 p-7 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
            <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/25 text-sky-100 text-lg">
                🎯
              </span>
              Mission
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              To scale up sustainable feedstock collection, uphold strong ethical
              values, promote clean energy, and care for communities and nature.
            </p>
          </div>
        </div>

        {/* Highlight Chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-white/80">
          <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-4 py-1 border border-white/10">
            • Lower carbon footprint
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-4 py-1 border border-white/10">
            • Sustainable bio-feedstock
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-4 py-1 border border-white/10">
            • Community & environmental care
          </span>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
