// src/pages/FeedAdditives.tsx
import React from "react";
import { Package } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FeedAdditives: React.FC = () => {
  const bullets = [
    "Soya lecithin for improved fat digestion and nutrient absorption",
    "De-oiled rice bran and palm kernel meal as protein and fiber sources",
    "Custom vitamin premixes tailored to species-specific nutritional requirements",
    "Portfolio includes: vitamins, trace minerals, enzymes, and probiotic formulations",
    "Species-specific customization with optimized inclusion rates for different animal categories",
    "Quality control: Homogeneity testing, microbiological analysis, and stability validation",
  ];

  return (
    <>
      <Header />
      <main className="bg-white text-gray-900 pt-0">
        {/* ---------- HERO ---------- */}
        <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <img
            src="/feed.jpg" // ⬅️ put this file in /public and bump v when you change
            alt="Feed additives background"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/35" aria-hidden />

          <div className="relative z-10 h-full w-full">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-6 text-center lg:px-8">
              <div className="max-w-4xl">
                <div className="mx-auto mb-6 inline-flex items-center justify-center rounded-2xl bg-blue-600/85 p-4">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                  Feed Additives
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/90">
                  Custom vitamin, mineral, and enzyme blends for targeted animal performance with rigorous quality assurance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- BODY ---------- */}
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

export default FeedAdditives;
export { FeedAdditives };
