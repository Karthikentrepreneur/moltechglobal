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
      className="relative w-full px-6 lg:px-20 py-24 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      <div
        className={`relative max-w-7xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* RIGHT-ALIGNED CONTAINER */}
        <div className="flex flex-col items-end text-right ml-auto w-full lg:w-1/2">

          {/* Eyebrow tag */}
          <span className="inline-flex rounded-full bg-gray-900/5 border border-gray-900/10 px-5 py-1.5 text-xs font-semibold tracking-[0.22em] uppercase text-gray-700">
            Our Purpose
          </span>

          {/* Heading */}
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 drop-shadow-sm">
            Building a{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              cleaner, sustainable
            </span>{" "}
            tomorrow
          </h2>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed max-w-xl drop-shadow-sm">
            Every drop of used cooking oil we collect moves the world closer to 
            renewable, low-carbon energy. Sustainability begins with small actions 
            that create a global impact.
          </p>

          {/* Cards */}
          <div className="mt-12 w-full grid sm:grid-cols-2 gap-6 justify-end">

            {/* Vision */}
            <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-gray-300 p-7 space-y-4 shadow-lg text-left">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-600/10 text-green-700 text-lg">
                  👁️
                </span>
                Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                To engage in sustainable bio-space activities that reduce carbon 
                footprint and protect the environment.
              </p>
            </div>

            {/* Mission */}
            <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-gray-300 p-7 space-y-4 shadow-lg text-left">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600/10 text-blue-700 text-lg">
                  🎯
                </span>
                Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                To scale up sustainable feedstock collection, operate ethically, 
                promote clean energy, and care for community and nature.
              </p>
            </div>

          </div>

          {/* Chips */}
          <div className="mt-10 flex flex-wrap justify-end gap-3 text-xs sm:text-sm text-gray-700 font-medium max-w-xl">
            <span className="inline-flex items-center rounded-full bg-gray-200 px-4 py-1 border border-gray-300">
              • Lower carbon footprint
            </span>
            <span className="inline-flex items-center rounded-full bg-gray-200 px-4 py-1 border border-gray-300">
              • Sustainable bio-feedstock
            </span>
            <span className="inline-flex items-center rounded-full bg-gray-200 px-4 py-1 border border-gray-300">
              • Community & environmental care
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionSection;
