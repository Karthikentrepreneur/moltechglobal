// src/pages/BiodieselFeedstocks.tsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BiodieselFeedstocks: React.FC = () => {
  const bullets = [
    "ISCC Certified Used Cooking Oil (UCO) with full traceability documentation",
    "High-acidity vegetable oil wastes processed to refinery-ready specifications",
    "Applications: transportation biodiesel, sustainable aviation fuel (SAF), heating, and power generation",
    "FFA range: 0.5-15% with moisture content <0.1% and minimal impurities",
    "Packaging options: IBC totes, steel drums, and bulk tanker shipments",
    "Global pickup network with export documentation and flexible Incoterms",
  ];

  return (
    <>
      <Header />

      <main className="bg-white text-gray-900 pt-0">
        {/* ---------- HERO (image-only, like About) ---------- */}
        <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <img
            src="/a.png" // ensure this file is in /public
            alt="Biodiesel feedstocks background"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/25" aria-hidden />
        </section>

        {/* ---------- INTRO (title + summary below hero, like About) ---------- */}
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-black max-w-5xl">
            Biodiesel Feedstocks (UCO)
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl">
            ISCC-compliant UCO feedstocks with global logistics, traceability, and stable quality for renewable diesel and SAF production.
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

export default BiodieselFeedstocks;
export { BiodieselFeedstocks };
