// src/pages/Blog.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Leaf, Globe, ShieldCheck, Truck } from "lucide-react";
import moltechSustainability from "@/assets/moltech-blog-sustainability.jpg";

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* keep main clean; use top padding on hero to clear fixed header */}
      <main className="bg-background">
        {/* Hero */}
        

        {/* Image Feature Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Global Presence */}
              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="relative h-48">
                  <img
                    src="/kkk.jpg"
                    alt="Global supply network and logistics map"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
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

              {/* Renewable Feedstocks */}
              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="relative h-48">
                  <img
                    src="/kk.jpg"
                    alt="Used cooking oil and other biofuel feedstocks"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
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

              {/* Quality & Transparency */}
              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="relative h-48">
                  <img
                    src="/kkkk.jpg"
                    alt="Laboratory quality control and traceability testing"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
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
                <em>“Cleaner inputs → cleaner outputs → a tighter loop for the planet and your supply chain.”</em>
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
