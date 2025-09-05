// src/pages/FattyAcids.tsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FattyAcids: React.FC = () => {
  const bullets = [
    "Stearic Acid (rubber grade) specifically formulated for tire industry applications",
    "Hydrogenated Palm Stearine & Palm Waxes for high-performance lubricant systems",
    "Specialized fatty acids (C16–C18 cuts) including Methyl palmitate and oleate",
    "Technical specifications: Controlled acid value, iodine value, melting point, and color grade",
    "Quality documentation: COA, MSDS, and REACH compliance where applicable",
    "Applications: tire manufacturing, candle production, cosmetic formulations, industrial lubricants",
  ];

  return (
    <>
      <Header />

      <main className="bg-white text-gray-900 pt-0">
        {/* ---------- HERO (image-only, like About) ---------- */}
        <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <img
            src="/aaaa.png" // ensure this file exists in /public
            alt="Fatty acids background"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/25" aria-hidden />
        </section>

        {/* ---------- INTRO (title + summary below hero, like About) ---------- */}
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-black max-w-5xl">
            Fatty Acids
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl">
            Specialized fatty acids and waxes for rubber, lubricants, candles, and cosmetics with consistent specifications.
          </p>
        </section>

        {/* ---------- BODY (unchanged bullets) ---------- */}
        <section className="container mx-auto px-6 py-12 lg:px-8">
          <ul className="mx-auto max-w-3xl list-disc pl-5 space-y-3 text-gray-700">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default FattyAcids;
export { FattyAcids };
