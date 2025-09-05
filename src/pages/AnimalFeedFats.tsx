// src/pages/AnimalFeedFats.tsx
import React from "react";
import { Wheat } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AnimalFeedFats: React.FC = () => {
  const bullets = [
    "Proprietary liquid fat formulation with enhanced absorption rates for improved FCR",
    "Dry fats and rumen bypass technology using 99% purity calcium salts of fatty acids",
    "Calcium salts designed for dairy applications to support milk yield and fat content",
    "Technical specifications: Purity percentage, calcium content, particle size distribution, and shelf life",
    "Usage guidelines: Optimal inclusion rates and mixing compatibility with feed systems",
    "Value benefits: Energy density optimization, improved feed conversion, and enhanced animal performance",
  ];

  return (
    <>
      <Header />

      <main className="bg-white text-gray-900 pt-0">
        {/* ---------- HERO (full-bleed image + subtle overlay; like Soap Noodles/About) ---------- */}
        <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <img
            src="/aaa.png" // ensure this file exists in /public
            alt="Animal feed fats background"
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
                  <Wheat className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                  Animal Feed Fats
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/90">
                  High-energy density formulations and calcium-salt bypass fats for superior animal nutrition and feed conversion efficiency.
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

export default AnimalFeedFats;
export { AnimalFeedFats };
