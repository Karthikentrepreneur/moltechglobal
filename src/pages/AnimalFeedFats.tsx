// src/pages/AnimalFeedFats.tsx
import React, { useState } from "react";
import { Wheat, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const GRAD = "bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500";

const AnimalFeedFats: React.FC = () => {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const bullets = [
    "Proprietary liquid fat formulation with enhanced absorption rates for improved FCR",
    "Dry fats and rumen bypass technology using 99% purity calcium salts of fatty acids",
    "Calcium salts designed for dairy applications to support milk yield and fat content",
    "Technical specifications: Purity percentage, calcium content, particle size distribution, and shelf life",
    "Usage guidelines: Optimal inclusion rates and mixing compatibility with feed systems",
    "Value benefits: Energy density optimization, improved feed conversion, and enhanced animal performance",
  ];

  const products = [
    { name: "Biodiesel FeedStocks", slug: "biodiesel-feedstocks" },
    { name: "Fatty Acids", slug: "fatty-acids" },
    { name: "Soap Noodles", slug: "soap-noodles" },
    { name: "Animal Feed Fats", slug: "animal-feed-fats" },
    { name: "Glycerin", slug: "glycerin" },
    { name: "Feed Additivies", slug: "feed-additives" },
  ];

  return (
    <>
      <Header />

      <main className="bg-white text-gray-900 pt-0">
        {/* ---------- HERO (medium size) ---------- */}
        <section className="relative h-[35vh] md:h-[45vh] lg:h-[50vh]">
          <img
            src="/s.jpg"
            alt="Animal feed fats background"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden />

          <div className="relative z-10 h-full w-full">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-6 text-center lg:px-8">
              <div className="max-w-3xl">
                <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-xl bg-blue-600/85 p-3">
                  <Wheat className="h-7 w-7 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                  Animal Feed Fats
                </h1>
                <p className="mt-4 text-base md:text-lg text-white/90">
                  High-energy density formulations and calcium-salt bypass fats for superior animal nutrition and feed conversion efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- BELOW-HERO SECTION ---------- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT: Main card with image and bullets */}
            <article className="lg:col-span-2">
              <div className="rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white">
                <div className="px-6 sm:px-8 pt-8">
                  {/* Rounded bordered image */}
                  <img
                    src="/farmer.jpg"
                    alt="Animal feed fats product"
                    className="w-full h-[360px] md:h-[420px] object-cover rounded-2xl border border-gray-200 shadow-md"
                  />
                </div>

                <div className="px-6 sm:px-8 pb-8 mt-6">
                  {/* Heading row with gradient icon box */}
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

                  {/* Bullets */}
                  <ul className="list-disc pl-5 space-y-3 text-gray-700 max-w-3xl">
                    {bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            {/* RIGHT: Sidebar (Product List only) */}
            <aside className="space-y-6">
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AnimalFeedFats;
export { AnimalFeedFats };
