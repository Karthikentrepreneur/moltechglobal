// src/pages/BiodieselFeedstocks.tsx
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRight, Truck } from "lucide-react";
import { NavLink } from "react-router-dom";

const GRAD = "bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500";

const BiodieselFeedstocks: React.FC = () => {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const bullets = [
    "ISCC Certified Used Cooking Oil (UCO) with full traceability documentation",
    "High-acidity vegetable oil wastes processed to refinery-ready specifications",
    "Applications: transportation biodiesel, sustainable aviation fuel (SAF), heating, and power generation",
    "FFA range: 0.5-15% with moisture content <0.1% and minimal impurities",
    "Packaging options: IBC totes, steel drums, and bulk tanker shipments",
    "Global pickup network with export documentation and flexible Incoterms",
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

        {/* ---------- HERO ---------- */}
        <section className="relative h-[35vh] md:h-[45vh] lg:h-[50vh]">
          <img
            src="/a.jpg"
            alt="Biodiesel feedstocks background"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/85 via-gray-800/70 to-gray-700/60" />

          <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                Biodiesel Feedstocks (UCO)
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/95">
                ISCC-compliant UCO feedstocks with global logistics, traceability, and stable
                quality for renewable diesel and SAF production.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- BELOW HERO ---------- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">

          {/* GRID: Product panel (LEFT) + Main content (RIGHT) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* LEFT SIDEBAR — Product List */}
            <aside className="space-y-6 md:order-1 order-2">
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
                                "inline-flex items-center justify-center w-9 h-9 rounded-full border transition",
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

            {/* RIGHT MAIN CONTENT */}
            <article className="md:col-span-2 md:order-2 order-1">
              <div className="rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white">
                <div className="px-6 sm:px-8 pt-8">
                  <img
                    src="/Biodieselariel.jpg"
                    alt="UCO logistics"
                    className="w-full h-[420px] object-cover rounded-2xl border border-gray-200 shadow-md"
                  />
                </div>

                <div className="px-6 sm:px-8 pb-8 mt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-md ${GRAD} text-white`}
                    >
                      <Truck className="w-6 h-6" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                      Biodiesel Feedstocks (UCO)
                    </h2>
                  </div>

                  <ul className="list-disc pl-5 space-y-3 text-gray-700 max-w-3xl">
                    {bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
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

export default BiodieselFeedstocks;
export { BiodieselFeedstocks };
