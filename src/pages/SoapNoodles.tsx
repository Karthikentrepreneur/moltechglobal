// src/pages/SoapNoodles.tsx
import React from "react";
import { ShoppingBag } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SoapNoodles: React.FC = () => {
  const bullets = [
    "Toilet and cosmetic grade noodles for premium personal care products",
    "Detergent grade formulations for household and industrial cleaning applications",
    "Key specifications: TFM content, moisture control, color grade (Lovibond), and fatty acid profile",
    "Consistent quality with controlled pearlization and uniform noodle structure",
    "Process support: fragrance loading capacity, filler compatibility, and batching recommendations",
    "Packaging and MOQ tailored to production requirements",
  ];

  return (
    <>
      {/* Header like About page */}
      <Header />

      {/* Main content — same structure as About page */}
      <main className="bg-white text-gray-900 pt-0">
        {/* ---------- HERO (same style as About) ---------- */}
        <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
          {/* Full-bleed background image */}
          <img
            src="/Soapnoodles.jpg" // ensure this exists in /public
            alt="Soap noodles background"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          {/* subtle overlay for readability */}
          <div className="absolute inset-0 bg-black/35" aria-hidden />

          {/* Centered content over the hero */}
          <div className="relative z-10 h-full w-full">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-6 text-center lg:px-8">
              <div className="max-w-4xl">
                <div className="mx-auto mb-6 inline-flex items-center justify-center rounded-2xl bg-blue-600/85 p-4">
                  <ShoppingBag className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                  Soap Noodles
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/90">
                  Cosmetic and detergent grade soap noodles with controlled moisture,
                  TFM, and color for reliable bar manufacturing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- BODY (your original bullet content) ---------- */}
        <section className="container mx-auto px-6 py-12 lg:px-8">
          <ul className="mx-auto max-w-3xl list-disc pl-5 space-y-3 text-gray-700">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </section>
      </main>

      {/* Footer like About page */}
      <Footer />
    </>
  );
};

export default SoapNoodles;
export { SoapNoodles };
