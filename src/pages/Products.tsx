// src/pages/Products.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <Header />

      <main className="pt-24">
        <section className="mx-auto w-full max-w-7xl px-6 py-14">
          <h1 className="text-3xl font-semibold text-white/90">Products</h1>
          <p className="mt-3 text-white/70 max-w-3xl">
            Showcase your product lines with specs, benefits, safety sheets, and downloads.
          </p>

          {/* Example grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="h-36 rounded-xl bg-white/10" />
                <h3 className="mt-4 text-lg font-medium text-white/90">
                  Product {i}
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  Short feature description.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
