// src/pages/Blog.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Leaf, Globe, ShieldCheck, Truck } from "lucide-react";
import moltechSustainability from "@/assets/moltech-blog-sustainability.jpg";

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Removed pt-24 from <main>; add top padding to hero so text clears fixed header */}
      <main className="bg-background">
        {/* Hero */}
        <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="inline-flex items-center gap-2 text-sm font-medium text-blue-700">
                  <Leaf className="h-4 w-4" />
                  Practical sustainability, scaled globally
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Moltech, in a Nutshell
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-slate-700">
                  From Singapore HQ to hubs across Asia, the Middle East, the UK, and the USA,
                  Moltech links collectors, processors, and customers to turn{" "}
                  <em>“waste”</em> into workable, reliable supply.
                </p>
                <ul className="mt-6 space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-2 w-2 rounded-full bg-blue-600" />
                    <span>
                      <strong>Renewable feedstocks:</strong> UCO, tyre-derived oils, acid oils, POME.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-2 w-2 rounded-full bg-blue-600" />
                    <span>
                      <strong>Feed & industrial:</strong> Veg-oil feed fats (liquid & dry), fatty alcohols, fatty acid esters, glycerol.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-2 w-2 rounded-full bg-blue-600" />
                    <span>
                      <strong>How we work:</strong> ethics first, quality-obsessed, transparent by design.
                    </span>
                  </li>
                </ul>

                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
                >
                  Talk to our team <Truck className="h-4 w-4" />
                </a>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <img
                  src={moltechSustainability}
                  alt="Moltech circular-economy and sustainable biorefinery"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Image Feature Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Global Presence → global supply network/map */}
              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="relative h-48">
                  <img
                    src="https://source.unsplash.com/1200x800/?global,network,map,logistics"
                    alt="Global supply network and logistics map"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
                    <Globe className="h-4 w-4" />
                    Global Presence
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">Local speed, global consistency</h3>
                  <p className="mt-2 text-slate-600">
                    A footprint of collection hubs, processing sites, and commercial offices keeps supply reliable and responsive.
                  </p>
                </div>
              </article>

              {/* Renewable Feedstocks → used cooking oil / biofuel feedstock */}
              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="relative h-48">
                  <img
                    src="https://source.unsplash.com/1200x800/?used-cooking-oil,biofuel,feedstock,recycling"
                    alt="Used cooking oil and other biofuel feedstocks"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                    <Leaf className="h-4 w-4" />
                    Renewable Feedstocks
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">Turning waste into value</h3>
                  <p className="mt-2 text-slate-600">
                    UCO, tyre-derived oils, acid oils, and POME—collected and processed into dependable inputs for cleaner energy.
                  </p>
                </div>
              </article>

              {/* Quality & Transparency → lab QC for biofuels */}
              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="relative h-48">
                  <img
                    src="https://source.unsplash.com/1200x800/?laboratory,quality,testing,biofuel,chemistry"
                    alt="Laboratory quality control and traceability testing"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <ShieldCheck className="h-4 w-4" />
                    Quality & Transparency
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">Governance built-in</h3>
                  <p className="mt-2 text-slate-600">
                    Ethics first, rigorous QC, and traceability across the chain—so partners can build with confidence.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Pull-quote */}
        <section className="pb-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <blockquote className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-xl leading-relaxed text-slate-800">
                <em>
                  “Cleaner inputs → cleaner outputs → a tighter loop for the planet and your supply chain.”
                </em>
              </p>
              <div className="mt-4 text-sm text-slate-500">— Moltech Editorial</div>
            </blockquote>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
