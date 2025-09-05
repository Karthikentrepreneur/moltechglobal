// src/pages/Glycerin.tsx
import React from "react";
import { Zap } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Glycerin: React.FC = () => {
  const bullets = [
    "Crude glycerine (65%–85% purity) for industrial applications and further processing",
    "Refined glycerine (99.5%+ purity) meeting USP and pharmaceutical standards",
    "Technical specifications: Purity percentage, moisture content, ash content, and color grade (APHA)",
    "Applications: pharmaceutical formulations, personal care products, tobacco humectant, antifreeze systems",
    "Quality assurance: USP compliance documentation, comprehensive COA and MSDS available",
    "Packaging options: Industrial drums, pharmaceutical-grade containers, and bulk shipments",
  ];

  return (
    <>
      <Header />

      <main className="bg-white text-gray-900 pt-0">
        {/* ---------- HERO (full-bleed image + subtle overlay; like Soap Noodles/About) ---------- */}
        <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <img
            src="/aa.png" // ensure this file exists in /public
            alt="Glycerin background"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/25" aria-hidden />

          {/* Centered title & summary on hero */}
          <div className="relative z-10 h-full w-full">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-6 text-center lg:px-8">
              <div className="max-w-4xl">
                <div className="mx-auto mb-6 inline-flex items-center justify-center rounded-2xl bg-blue-600/85 p-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                  Glycerin
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/90">
                  USP/pharmaceutical and technical grade glycerin with consistent purity and full documentation for diverse applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- BODY (unchanged content) ---------- */}
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

export default Glycerin;
export { Glycerin };
