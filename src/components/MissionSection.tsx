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
            renewable, low-carbon energy solutions that protect communities
            and the planet.
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
          {/* Vision Text */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold text-emerald-800">
              Vision
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              A world where every drop of waste becomes clean energy.
            </h3>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              To engage in sustainable bio-space activities that reduce
              carbon footprint, restore ecosystems, and promote circular,
              low-waste living.
            </p>

            <ul className="mt-3 space-y-2 text-sm sm:text-base text-slate-700">
              <li>• Championing circular use of bio-feedstock.</li>
              <li>• Making renewable fuels accessible and affordable.</li>
              <li>• Responsible & ethical industry benchmarks.</li>
            </ul>
          </div>

          {/* Vision IMAGE ONLY */}
          <div className="relative">
            <img
              src="/vision.jpg"
              alt="Vision"
              className="rounded-3xl shadow-xl w-full object-cover h-64 sm:h-80"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />

        {/* MISSION ROW (image left, text right) */}
        <div
          className={`mt-14 grid gap-10 md:grid-cols-2 items-center transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 md:translate-y-10"
          }`}
        >
          {/* Mission IMAGE ONLY */}
          <div className="relative">
            <img
              src="/mission.jpg"
              alt="Mission"
              className="rounded-3xl shadow-xl w-full object-cover h-64 sm:h-80"
            />
          </div>

          {/* Mission Content */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold text-sky-800">
              Mission
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Turning responsible collection into measurable climate action.
            </h3>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              To scale sustainable feedstock collection, expand global
              biofuel adoption, and protect the communities we serve.
            </p>

            <ul className="mt-3 space-y-2 text-sm sm:text-base text-slate-700">
              <li>• Build traceable collection networks.</li>
              <li>• Partner with businesses ethically.</li>
              <li>• Deliver certified clean biofuels worldwide.</li>
            </ul>
          </div>
        </div>

        {/* Chips */}
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
