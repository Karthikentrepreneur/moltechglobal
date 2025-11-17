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
      className="relative w-full px-6 lg:px-20 py-24 overflow-hidden bg-[#0F1B3D]"
    >
      <div
        className={`relative max-w-4xl mx-auto flex flex-col items-center text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Eyebrow Label */}
        <span className="inline-flex rounded-full bg-white/5 border border-white/20 px-5 py-1.5 text-xs font-semibold tracking-[0.22em] uppercase text-slate-100">
          Our Purpose
        </span>

        {/* Heading */}
        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white drop-shadow-sm">
          Building a{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
            cleaner, sustainable
          </span>{" "}
          tomorrow
        </h2>

        {/* Description */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-100/80 leading-relaxed max-w-2xl">
          Moves the world closer to renewable, low-carbon energy. Sustainability
          begins with small actions that create a global impact.
        </p>

        {/* Cards Row */}
        <div className="mt-12 w-full grid sm:grid-cols-2 gap-6">
          {/* Vision */}
          <div
            className={`rounded-2xl bg-white border border-gray-200 p-7 space-y-4 shadow-xl transform transition-all duration-700
            ${
              isVisible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-6"
            }`}
          >
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-600/10 text-green-700 text-lg">
                👁️
              </span>
              Vision
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-left">
              To engage in sustainable bio-space activities that reduce carbon
              footprint and protect the environment.
            </p>
          </div>

          {/* Mission */}
          <div
            className={`rounded-2xl bg-white border border-gray-200 p-7 space-y-4 shadow-xl transform transition-all duration-700 delay-150
            ${
              isVisible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-6"
            }`}
          >
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600/10 text-blue-700 text-lg">
                🎯
              </span>
              Mission
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-left">
              To scale up sustainable feedstock collection, operate ethically,
              promote clean energy, and care for community and nature.
            </p>
          </div>
        </div>

        {/* Chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-slate-100 font-medium max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 border border-white/20">
            • Lower carbon footprint
          </span>
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 border border-white/20">
            • Sustainable bio-feedstock
          </span>
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 border border-white/20">
            • Community & environmental care
          </span>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
