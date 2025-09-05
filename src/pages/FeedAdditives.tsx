// src/pages/FeedAdditives.tsx
import React from "react";
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

      {/* Same structure as About: image-only hero, then content */}
      <main className="bg-white text-gray-900 pt-0">
        {/* ---------- HERO (image only, like About) ---------- */}
        <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <img
            src="/feed.jpg" // ensure this file is in /public
            alt="Feed additives background"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          {/* subtle overlay for readability, same tone as About */}
          <div className="absolute inset-0 bg-black/25" aria-hidden />
        </section>

        {/* ---------- INTRO (title + summary moved below hero, like About) ---------- */}
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-black max-w-5xl">
            Feed Additives
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl">
            Custom vitamin, mineral, and enzyme blends for targeted animal performance with rigorous quality assurance.
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

export default FeedAdditives;
export { FeedAdditives };
