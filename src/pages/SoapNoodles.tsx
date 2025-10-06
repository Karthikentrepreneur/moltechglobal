// src/pages/SoapNoodles.tsx
import React, { useState } from "react";
import { ShoppingBag, Search, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const GRAD = "bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500";

const SoapNoodles: React.FC = () => {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const bullets = [
    "Toilet and cosmetic grade noodles for premium personal care products",
    "Detergent grade formulations for household and industrial cleaning applications",
    "Key specifications: TFM content, moisture control, color grade (Lovibond), and fatty acid profile",
    "Consistent quality with controlled pearlization and uniform noodle structure",
    "Process support: fragrance loading capacity, filler compatibility, and batching recommendations",
    "Packaging and MOQ tailored to production requirements",
  ];

  // Product List with routes (same slugs used elsewhere)
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
        {/* ---------- HERO (same style as Biodiesel) ---------- */}
        <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
          {/* Full-bleed background image */}
          <img
            src="/Soapnoodles.jpg" // ensure this exists in /public
            alt="Soap noodles background"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          {/* Subtle overlay for readability */}
          <div className="absolute inset-0 bg-black/35" aria-hidden />

          {/* Centered content */}
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

        {/* ---------- BELOW-HERO SECTION (mirrors Biodiesel layout) ---------- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT: Main card with big image + heading + bullets */}
            <article className="lg:col-span-2">
              <div className="rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white">
                <img
                  src="/Soapnoodles.jpg"
                  alt="Soap noodles product"
                  className="w-full h-[420px] object-cover"
                />
                <div className="px-6 sm:px-8 py-8">
                  {/* Heading row with gradient icon box */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-md ${GRAD} text-white`}>
                      <ShoppingBag className="w-6 h-6" aria-hidden />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                      Soap Noodles
                    </h2>
                  </div>

                  {/* Bullets (content unchanged) */}
                  <ul className="list-disc pl-5 space-y-3 text-gray-700 max-w-3xl">
                    {bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            {/* RIGHT: Sidebar (Search + Product List with cursor-following highlighter) */}
            <aside className="space-y-6">
              {/* Search card */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Search</h3>
                <form className="flex">
                  <input
                    type="text"
                    placeholder="Search Here..."
                    className="w-full px-4 py-3 rounded-l-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="button"
                    className={`px-4 rounded-r-md text-white border border-transparent ${GRAD} hover:brightness-110 transition`}
                    aria-label="Search"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </form>
              </div>

              {/* Product List card */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Product List</h3>
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
                          "flex items-center justify-between rounded-md border transition px-4 py-3",
                          "duration-200",
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

// Shared product list for the sidebar
const products = [
  { name: "Biodiesel FeedStocks", slug: "biodiesel-feedstocks" },
  { name: "Fatty Acids", slug: "fatty-acids" },
  { name: "Soap Noodles", slug: "soap-noodles" },
  { name: "Animal Feed Fats", slug: "animal-feed-fats" },
  { name: "Glycerin", slug: "glycerin" },
  { name: "Feed Additivies", slug: "feed-additives" },
];

export default SoapNoodles;
export { SoapNoodles };
