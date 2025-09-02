// src/pages/Products.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      {/* Fixed Pill Header */}
      <Header />

      {/* Extra top padding so content clears the fixed header */}
      <main className="pt-32 pb-20">
        {/* Page header */}
        <section className="mx-auto w-full max-w-7xl px-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-white/90">
            Products
          </h1>
          <p className="mt-3 text-white/70 max-w-3xl">
            Showcase your product lines with specs, benefits, safety sheets, and downloads.
          </p>
        </section>

        {/* Products Grid */}
        <section className="mx-auto w-full max-w-7xl px-6 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <article
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/[0.07] transition"
              >
                <div className="h-40 rounded-xl bg-white/10" />
                <h3 className="mt-4 text-lg font-medium text-white/90">
                  Product {i}
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  Short feature description.
                </p>

                <div className="mt-4 flex items-center gap-3 text-[13px] text-white/70">
                  <span className="rounded-full border border-white/15 px-2 py-1">
                    Spec Sheet
                  </span>
                  <span className="rounded-full border border-white/15 px-2 py-1">
                    Safety
                  </span>
                  <span className="rounded-full border border-white/15 px-2 py-1">
                    Download
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
