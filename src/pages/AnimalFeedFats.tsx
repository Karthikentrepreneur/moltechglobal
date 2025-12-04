// src/pages/AnimalFeedFats.tsx
import React, { useState } from "react";
import { Wheat, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const GRAD = "bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500";

const AnimalFeedFats: React.FC = () => {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const paragraphs = [
    "Animal feed fats are high-energy nutritional additives used across livestock, poultry, and aquaculture diets to enhance growth performance, improve feed efficiency, and support overall animal health. These fats—derived from vegetable oils, animal by-products, or blended sources—provide a concentrated form of energy that helps balance feed formulations and meet the dietary needs of modern farming systems.",
    "Rich in essential fatty acids, feed-grade fats play a vital role in improving nutrient absorption, aiding metabolic function, and supporting immune response. Their inclusion in feed not only boosts caloric density but also improves pellet durability, reduces dust, and enhances feed palatability.",
    "With growing demand for more efficient and sustainable animal production, high-quality feed fats offer a practical, cost-effective solution for farmers seeking better feed conversion ratios, healthier livestock, and improved overall productivity.",
  ];

  const products = [
    { name: "Biodiesel FeedStocks", slug: "biodiesel-feedstocks" },
    { name: "Fatty Acids", slug: "fatty-acids" },
    { name: "Animal Feed Fats", slug: "animal-feed-fats" },
    { name: "Glycerin", slug: "glycerin" },
    { name: "Feed Additivies", slug: "feed-additives" },
  ];

  return (
    <>
      <Header />

      <main className="bg-white text-gray-900 pt-0">
        {/* ---------- HERO (medium size with darker grey gradient) ---------- */}
        <section className="relative h-[35vh] md:h-[45vh] lg:h-[50vh]">
          <img
            src="/s.jpg"
            alt="Animal feed fats background"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />

          <div
            className="absolute inset-0 bg-gradient-to-b from-gray-900/85 via-gray-800/70 to-gray-700/60"
            aria-hidden
          />

          <div className="relative z-10 h-full w-full">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-6 text-center lg:px-8">
              <div className="max-w-3xl">
                <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-xl bg-blue-600/90 p-3">
                  <Wheat className="h-7 w-7 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                  Animal Feed Fats
                </h1>
                <p className="mt-4 text-base md:text-lg text-white/95">
                  High-energy fats that boost feed efficiency, palatability, and
                  overall animal health across livestock, poultry, and
                  aquaculture diets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- BELOW-HERO SECTION ---------- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          {/* Product list LEFT, content RIGHT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* LEFT: Sidebar (Product List only) */}
            <aside className="space-y-6 md:order-1 order-2">
              <div className="bg-gray-50 rounded-xl p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Product List
                </h3>
                <div className="space-y-3">
                  {products.map((p) => (
                    <NavLink
                      key={p.slug}
                      to={`/products/${p.slug}`}
                      end
                      onMouseEnter={() => setHoveredSlug(p.slug)}
                      onMouseLeave={() => setHoveredSlug(null)}
                      className={({ isActive }) => {
                        const highlighted = isActive || hoveredSlug === p.slug;
                        return [
                          "flex items-center justify-between rounded-md border transition px-4 py-3 duration-200",
                          highlighted
                            ? `${GRAD} text-white border-transparent`
                            : "bg-white text-gray-900 border-gray-200 hover:border-gray-300",
                        ].join(" ");
                      }}
                    >
                      {({ isActive }) => {
                        const highlighted = isActive || hoveredSlug === p.slug;
                        return (
                          <>
                            <span className="font-medium">{p.name}</span>
                            <span
                              className={[
                                "inline-flex items-center justify-center w-9 h-9 rounded-full border transition duration-200",
                                highlighted
                                  ? "bg-white/15 text-white border-white/20"
                                  : "bg-white text-gray-700 border-gray-200",
                              ].join(" ")}
                            >
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </>
                        );
                      }}
                    </NavLink>
                  ))}
                </div>
              </div>
            </aside>

            {/* RIGHT: Main card with image and bullets */}
            <article className="md:col-span-2 md:order-2 order-1">
              <div className="rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white">
                <div className="px-6 sm:px-8 pt-8">
                  <img
                    src="/farmer.jpg"
                    alt="Animal feed fats product"
                    className="w-full h-[360px] md:h-[420px] object-cover rounded-2xl border border-gray-200 shadow-md"
                  />
                </div>

                <div className="px-6 sm:px-8 pb-8 mt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-md ${GRAD} text-white`}
                    >
                      <Wheat className="w-6 h-6" aria-hidden />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                      Animal Feed Fats
                    </h2>
                  </div>

                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    {paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AnimalFeedFats;
export { AnimalFeedFats };
