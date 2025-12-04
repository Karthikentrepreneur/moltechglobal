// src/pages/RenewableFuelFeedstock.tsx
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRight, Droplets } from "lucide-react";
import { NavLink } from "react-router-dom";

const GRAD = "bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500";

const RenewableFuelFeedstock: React.FC = () => {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const overview =
    "Renewable fuel feedstocks are <strong>sustainably sourced organic materials</strong> used in the production of low-carbon fuels such as biodiesel, HVO, and SAF. These inputs help reduce greenhouse-gas emissions, support circular-economy models, and enable cleaner energy pathways across global supply chains.";

  const feedstocks = [
    {
      title: "Used Cooking Oil (UCO)",
      description:
        "UCO is collected from food-service operations and households after frying processes. Its natural fatty-acid profile makes it a preferred input for biodiesel, HVO, and SAF production, contributing to waste-to-energy circularity.",
    },
    {
      title: "Cardanol (from Cashew Nut Shell Liquid)",
      description:
        "Cardanol is a phenolic oil extracted from cashew nut shells. It serves as a unique, bio-based component with high stability and is increasingly explored in renewable fuel upgrading and chemical applications due to its low carbon intensity.",
    },
    {
      title: "Palm Oil Mill Effluent (POME)",
      description:
        "POME is a by-product of palm oil processing, containing residual oils that can be recovered and refined. When upgraded, POME-based oils offer a compliant, low-CI feedstock option for advanced biofuels.",
    },
    {
      title: "Tallow",
      description:
        "Tallow is rendered animal fat, typically sourced from the meat-processing industry. Its high energy content and favourable conversion characteristics make it suitable for HVO/SAF production, particularly in HEFA pathways.",
    },
    {
      title: "Soapstock Acid Oil",
      description:
        "Soapstock Acid Oil is derived from the refining of vegetable oils. After acidulation, it yields an energy-rich feedstock commonly used in biodiesel manufacturing, offering an economical pathway for valorising refinery by-products.",
    },
    {
      title: "Bio-heating Oil",
      description:
        "Bio-heating Oil delivers a renewable alternative for boilers and industrial burners, providing dependable heat output with a lower carbon footprint than conventional heating fuels.",
    },
    {
      title: "Condensate",
      description:
        "Condensate streams recovered from processing are blended to meet renewable specifications, supplying refiners with a flexible, low-carbon input for downstream conversion.",
    },
  ];

  const products = [
    { name: "Renewable Fuel Feedstock", slug: "renewable-fuel-feedstock" },
    { name: "Animal Feed Fats", slug: "animal-feed-fats" },
    { name: "Feed Additives", slug: "feed-additives" },
    { name: "Glycerin", slug: "glycerin" },
    { name: "Feedstock Collection", slug: "collection-feedstocks" },
  ];

  return (
    <>
      <Header />

      <main className="bg-white text-gray-900 pt-0">
        {/* ---------- HERO ---------- */}
        <section className="relative h-[35vh] md:h-[45vh] lg:h-[50vh]">
          <img
            src="/Biodieselariel.jpg"
            alt="Renewable fuel feedstocks logistics"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/85 via-gray-800/70 to-gray-700/60" />

          <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                Renewable Fuel Feedstock
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/95">
                Sustainably sourced inputs that keep biodiesel, HVO, and SAF pathways supplied with low-carbon material.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- BELOW HERO ---------- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
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
                    src="/Biodieselfeedstocks.jpg"
                    alt="Renewable feedstock storage"
                    className="w-full h-[420px] object-cover rounded-2xl border border-gray-200 shadow-md"
                  />
                </div>

                <div className="px-6 sm:px-8 pb-8 mt-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-md ${GRAD} text-white`}
                    >
                      <Droplets className="w-6 h-6" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                      Renewable Fuel Feedstock
                    </h2>
                  </div>

                  {/* ONLY THIS PART IS BOLD */}
                  <p
                    className="text-gray-700 leading-relaxed text-base md:text-lg"
                    dangerouslySetInnerHTML={{ __html: overview }}
                  />

                  <div className="space-y-5">
                    {feedstocks.map((item) => (
                      <div key={item.title} className="rounded-xl border border-gray-200 p-4 sm:p-5 bg-gray-50">
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                        <p className="mt-2 text-sm sm:text-base text-gray-700 leading-relaxed">{item.description}</p>
                      </div>
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

export default RenewableFuelFeedstock;
export { RenewableFuelFeedstock };
