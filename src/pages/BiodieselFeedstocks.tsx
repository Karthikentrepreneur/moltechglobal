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
        {/* ---------- HERO (full-bleed image + subtle overlay; like Soap Noodles/About) ---------- */}
        <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <img
            src="/a.jpg"  // ensure this file exists in /public
            alt="Biodiesel feedstocks background"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/25" aria-hidden />

          {/* Centered title & summary on hero (Soap Noodles style) */}
          <div className="relative z-10 h-full w-full">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-6 text-center lg:px-8">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                  Biodiesel Feedstocks (UCO)
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/90">
                  ISCC-compliant UCO feedstocks with global logistics, traceability, and stable quality for renewable diesel and SAF production.
                </p>
              </div>
            </div>
          </div>
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
