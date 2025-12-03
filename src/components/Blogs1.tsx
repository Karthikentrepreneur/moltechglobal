// src/components/Blogs1.tsx
import React from "react";
import { Leaf, Globe, ShieldCheck, Truck } from "lucide-react";
import moltechSustainability from "@/assets/moltech-blog-sustainability.jpg";

const Blogs1: React.FC = () => {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero-style blog highlight */}
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-blue-700">
              <Leaf className="h-4 w-4" />
              Practical sustainability, scaled globally
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Who We Are
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
              From Singapore HQ to hubs across Asia, the Middle East, the UK, and the USA,
              Moltech links collectors, processors, and customers to turn
              <em> “waste” </em> into workable, reliable supply.
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
                  <strong>Feed & industrial:</strong> Veg-oil feed fats (liquid & dry), fatty
                  alcohols, fatty acid esters, glycerol.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-2 w-2 rounded-full bg-blue-600" />
                <span>
                  <strong>How we work:</strong> ethics first, quality-obsessed, transparent by
                  design.
                </span>
              </li>
            </ul>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
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
              decoding="async"
            />
          </div>
        </div>

        {/* Optional: 3 small blog cards under the hero */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
              <Globe className="h-4 w-4" />
              Global Presence
            </div>
            <h3 className="mt-2 text-lg font-bold text-slate-900">
              Local speed, global consistency
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Collection hubs and processing sites across continents keep supply reliable and responsive.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
              <Leaf className="h-4 w-4" />
              Renewable Feedstocks
            </div>
            <h3 className="mt-2 text-lg font-bold text-slate-900">
              Turning waste into value
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              UCO, tyre-derived oils, acid oils, and POME collected and processed into dependable inputs.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <ShieldCheck className="h-4 w-4" />
              Quality & Transparency
            </div>
            <h3 className="mt-2 text-lg font-bold text-slate-900">
              Governance built-in
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Ethics-first operations, rigorous QC, and traceability across the chain.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blogs1;
