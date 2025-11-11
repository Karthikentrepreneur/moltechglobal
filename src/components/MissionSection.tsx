// src/components/MissionSection.tsx
import React, { useEffect, useRef, useState } from "react";

const MissionSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Lightweight in-view animation (replaces useScrollAnimation)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // If your image is in /public, this respects Vite base path:
  const vmImg = `${import.meta.env.BASE_URL}vision-mission.png`;
  // If it's under src/assets, instead:
  // import vmImg from "@/assets/vision-mission.png";

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="vision-mission"
      className="relative w-full px-6 lg:px-16 py-16 lg:py-20 bg-[#FFE94D] overflow-hidden"
    >
      <div
        className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        {/* LEFT: Vision & Mission Text */}
        <div className="space-y-10 text-left">
          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
              VISION
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-slate-900/90 max-w-md">
              “To be a guiding light in every child’s odyssey of discovery,
              inspiring lifelong learning and holistic growth.”
            </p>
          </div>

          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
              MISSION
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-slate-900/90 max-w-md">
              “At JOIS, we craft joyful, child-first experiences that ignite
              imagination, nurture character, and prepare young minds to soar —
              ready for both academic success and life’s grand adventures with
              confidence and freedom.”
            </p>
          </div>
        </div>

        {/* RIGHT: Animated Image */}
        <div className="flex justify-center md:justify-end relative">
          <img
            src={vmImg}
            alt="Vision Mission Illustration"
            loading="lazy"
            decoding="async"
            width={500}
            height={400}
            className={`w-[320px] sm:w-[400px] lg:w-[500px] h-auto transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0 translate-x-[-20px] animate-floating"
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
