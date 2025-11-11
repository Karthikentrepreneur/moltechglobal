// src/components/MissionSection.tsx
import React, { useEffect, useRef, useState } from "react";

const MissionSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Simple intersection animation
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

  // image from /public
  const vmImg = `${import.meta.env.BASE_URL}vision-mission.png`;

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="vision-mission"
      className="relative w-full px-6 lg:px-16 py-20 overflow-hidden bg-gradient-to-br from-[#2563EB] via-[#3B82F6] to-[#60A5FA]"
    >
      <div
        className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* LEFT :: Vision + Mission Text */}
        <div className="space-y-10 text-left text-white">
          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-4">
              Vision
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-white/90 max-w-md">
              To engage in business and services in the bio-space which
              contribute to reduction in carbon footprint and environmental care.
            </p>
          </div>

          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-4">
              Mission
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-white/90 max-w-md">
              Scale up collection and processing of sustainable feedstock for
              clean energy. Operate with high standards of ethics and good
              governance. Care for the community and the environment.
            </p>
          </div>
        </div>

        {/* RIGHT :: Floating Image */}
        <div className="flex justify-center md:justify-end relative">
          <img
            src={vmImg}
            alt="Moltech Vision and Mission"
            loading="lazy"
            decoding="async"
            width={520}
            height={400}
            className={`w-[320px] sm:w-[420px] lg:w-[520px] h-auto  transition-all duration-700 ${
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
