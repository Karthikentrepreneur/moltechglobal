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
      className="relative w-full px-6 lg:px-20 py-24 bg-gradient-to-b from-emerald-50 via-white to-sky-50 overflow-hidden"
    >
      {/* Decorative blurred circles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -right-10 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute bottom-0 -left-10 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />
      </div>

      <div
        className={`relative max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full bg-emerald-900/5 border border-emerald-900/10 px-5 py-1.5 text-xs font-semibold tracking-[0.22em] uppercase text-emerald-700">
            Our Purpose
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
            Building a{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-lime-500 to-sky-500 bg-clip-text text-transparent">
              cleaner, sustainable tomorrow
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            We turn everyday waste into meaningful impact by enabling
            renewable, low-carbon energy solutions that protect communities and
            the planet.
          </p>
        </div>

        {/* VISION ROW */}
        <div
          className={`mt-14 grid gap-10 md:grid-cols-2 items-center transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 md:translate-y-10"
          }`}
        >
          {/* Vision Content (left) */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold text-emerald-800">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-lg">
                👁️
              </span>
              Vision
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              A world where every drop of waste becomes clean energy.
            </h3>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              To engage in sustainable bio-space activities that dramatically
              reduce carbon footprint, restore ecosystems, and inspire a global
              shift towards circular, low-waste living.
            </p>

            <ul className="mt-3 space-y-2 text-sm sm:text-base text-slate-700">
              <li>• Championing circular use of bio-feedstock.</li>
              <li>• Making renewable fuels accessible and affordable.</li>
              <li>• Setting a benchmark for responsible industry practices.</li>
            </ul>
          </div>

          {/* Vision Image (right) */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-emerald-300/40 via-emerald-100/10 to-sky-200/50 blur-xl" />
            <div className="relative rounded-3xl bg-white shadow-xl border border-emerald-100 overflow-hidden">
              <div className="h-56 sm:h-64 bg-gradient-to-tr from-emerald-600 via-emerald-400 to-lime-400 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border-4 border-white/60 bg-white/10 flex items-center justify-center">
                  <span className="text-white text-5xl">🌍</span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-600 font-semibold">
                  Vision Snapshot
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  A panoramic, future-ready energy network where cities,
                  industries, and communities are powered by clean, traceable
                  biofuels.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />

        {/* MISSION ROW (zig-zag: image left, content right) */}
        <div
          className={`mt-14 grid gap-10 md:grid-cols-2 items-center transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 md:translate-y-10"
          }`}
        >
          {/* Mission Image (left) */}
          <div className="relative order-1 md:order-1">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-bl from-sky-300/40 via-sky-100/10 to-emerald-200/50 blur-xl" />
            <div className="relative rounded-3xl bg-white shadow-xl border border-sky-100 overflow-hidden">
              <div className="h-56 sm:h-64 bg-gradient-to-tr from-sky-500 via-sky-400 to-emerald-400 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-3 px-6">
                  <div className="rounded-2xl bg-white/20 backdrop-blur-sm px-3 py-2 text-center text-xs text-white">
                    Scale feedstock collection
                  </div>
                  <div className="rounded-2xl bg-white/20 backdrop-blur-sm px-3 py-2 text-center text-xs text-white">
                    Ethical operations
                  </div>
                  <div className="rounded-2xl bg-white/20 backdrop-blur-sm px-3 py-2 text-center text-xs text-white">
                    Community care
                  </div>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-sky-600 font-semibold">
                  Mission Snapshot
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  A disciplined network of collection hubs, partners, and
                  logistics that transforms used cooking oil and other
                  feedstocks into certified biofuels.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Content (right) */}
          <div className="space-y-5 order-2 md:order-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold text-sky-800">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-lg">
                🎯
              </span>
              Mission
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Turning responsible collection into measurable climate action.
            </h3>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              To scale up sustainable feedstock collection, operate with
              integrity, promote clean energy adoption, and protect the
              communities and ecosystems that surround us.
            </p>

            <ul className="mt-3 space-y-2 text-sm sm:text-base text-slate-700">
              <li>• Build robust collection networks with traceability.</li>
              <li>• Partner with businesses and households ethically.</li>
              <li>• Deliver reliable, certified biofuels to global markets.</li>
            </ul>
          </div>
        </div>

        {/* Chips row */}
        <div className="mt-14 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-slate-800 font-medium">
          <span className="inline-flex items-center rounded-full bg-white shadow-sm px-4 py-1.5 border border-emerald-200">
            • Lower carbon footprint
          </span>
          <span className="inline-flex items-center rounded-full bg-white shadow-sm px-4 py-1.5 border border-emerald-200">
            • Sustainable bio-feedstock
          </span>
          <span className="inline-flex items-center rounded-full bg-white shadow-sm px-4 py-1.5 border border-emerald-200">
            • Community & environmental care
          </span>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
``
