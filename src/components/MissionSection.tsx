import React, { useEffect, useRef, useState } from "react";
import { Eye, Target } from "lucide-react";

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
      className="relative w-full px-6 lg:px-24 py-28 bg-[#0F1B3D]"
    >
      <div
        className={`relative max-w-5xl mx-auto flex flex-col items-center text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Eyebrow label */}
        <span className="inline-flex rounded-full bg-white/10 border border-white/20 px-5 py-1.5 text-xs font-semibold tracking-[0.22em] uppercase text-slate-100">
          Our Purpose
        </span>

        {/* Main heading */}
        <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold text-white leading-snug">
          Building a{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
            cleaner, sustainable
          </span>{" "}
          tomorrow
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-100/80 max-w-2xl leading-relaxed">
          Moves the world closer to renewable, low-carbon energy. Sustainability
          begins with small actions that create a global impact.
        </p>

        {/* Cards */}
        <div className="mt-16 w-full grid sm:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div
            className={`rounded-2xl bg-white p-10 shadow-xl border border-gray-200 transition-all duration-700 ${
              isVisible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-green-600/10 flex items-center justify-center text-green-700">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Vision</h3>
            </div>

            <p className="mt-5 text-gray-700 text-base leading-relaxed">
              To engage in sustainable bio-space activities that reduce carbon
              footprint and protect the environment.
            </p>
          </div>

          {/* Mission Card */}
          <div
            className={`rounded-2xl bg-white p-10 shadow-xl border border-gray-200 transition-all duration-700 delay-150 ${
              isVisible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-700">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Mission</h3>
            </div>

            <p className="mt-5 text-gray-700 text-base leading-relaxed">
              To scale up sustainable feedstock collection, operate ethically,
              promote clean energy, and care for community and nature.
            </p>
          </div>
        </div>

        {/* Chips */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-slate-100/90">
          <span className="inline-flex items-center rounded-full bg-white/10 px-5 py-2 border border-white/20 backdrop-blur-sm">
            • Lower carbon footprint
          </span>
          <span className="inline-flex items-center rounded-full bg-white/10 px-5 py-2 border border-white/20 backdrop-blur-sm">
            • Sustainable bio-feedstock
          </span>
          <span className="inline-flex items-center rounded-full bg-white/10 px-5 py-2 border border-white/20 backdrop-blur-sm">
            • Community & environmental care
          </span>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
