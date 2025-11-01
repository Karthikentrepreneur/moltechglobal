import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BRAND = {
  violet: "#3E2E88",
  amber: "#F4B942",
};

const MissionSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid items-center gap-10 lg:grid-cols-2">
        {/* Left: image with circular crop */}
        <div className="relative">
          <div className="relative aspect-square w-full max-w-[480px] overflow-hidden rounded-full shadow-xl">
            <img
              src="/about/mission.jpg" // replace with your asset
              alt="Moltech mission"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Amber arcs (decor) */}
          <div
            className="absolute -left-16 -top-10 h-40 w-72 rounded-[80px] hidden sm:block"
            style={{ backgroundColor: BRAND.amber, opacity: 0.85 }}
          />
          <div
            className="absolute -bottom-24 left-10 h-52 w-80 rounded-[100px] hidden sm:block"
            style={{ backgroundColor: BRAND.amber, opacity: 0.6 }}
          />
        </div>

        {/* Right: mission content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Mission
          </h2>
          <div className="mt-6 space-y-5 text-slate-700 leading-relaxed sm:text-lg">
            <p>
              At <strong>Moltech</strong>, our mission is to accelerate the global
              energy transition through renewable, traceable, and sustainable
              bio-based products that power industries and communities responsibly.
            </p>
            <p>
              We bridge the gap between clean innovation and real-world impact —
              providing high-quality, certified inputs for biodiesel, oleochemicals,
              and animal nutrition sectors while supporting circular growth.
            </p>
          </div>

          <button
            onClick={() => navigate("/vision-mission")}
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-slate-900 transition"
            style={{ backgroundColor: BRAND.amber }}
          >
            Our Vision
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
