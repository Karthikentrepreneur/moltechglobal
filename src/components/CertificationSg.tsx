// src/pages/CertificationIndia.tsx
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { X, ZoomIn } from "lucide-react";

const images = [
  "/cer-sg.jpg",
  "/cer-sg-iscc.jpg",
  "/cer-uk.jpg",
  "/cer-th.jpg",
  "/cer-my.jpg",
  "/cer-dxb-1.jpg",
];

const CertificationIndia: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightboxIndex(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <Header />

      <main className="bg-gradient-to-b from-slate-50 to-white pt-1">
        <section className="py-10 md:py-14">
          <div className="mx-auto px-4 md:px-6 max-w-[1600px]">
            {/* Title */}
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500">
                  Global Certifications
                </span>
              </h2>
              <div className="mx-auto mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400" />
              <p className="mt-4 text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
                Verified compliance across regions — tap any certificate to view it full screen.
              </p>
            </div>

            {/* Certificates Grid — responsive 1 / 2 / 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-1">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className="group relative rounded-3xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 text-left"
                >
                  {/* Decorative gradient edge on hover */}
                  <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-slate-200 group-hover:ring-transparent" />
                  <span className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/10 via-blue-400/10 to-blue-300/10" />

                  {/* Big, consistent viewing window */}
                  <div className="relative rounded-2xl bg-white">
                    {/* Use a tall responsive window for readability */}
                    <div className="w-full h-[28rem] md:h-[32rem] xl:h-[36rem] 2xl:h-[40rem] flex items-center justify-center">
                      <img
                        src={src}
                        alt={`Certificate ${i + 1}`}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Zoom hint */}
                  <div className="pointer-events-none absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs text-slate-700 shadow group-hover:bg-white">
                    <ZoomIn className="h-3.5 w-3.5" />
                    View
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative w-full max-w-6xl 2xl:max-w-7xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-10 right-0 md:top-0 md:-right-10 rounded-full bg-white/90 p-2 shadow hover:bg-white"
              aria-label="Close"
            >
              <X className="h-5 w-5 text-slate-800" />
            </button>

            <div className="w-full rounded-2xl bg-white p-3 md:p-4">
              <img
                src={images[lightboxIndex]}
                alt={`Certificate ${lightboxIndex + 1}`}
                className="w-full h-[75vh] md:h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificationIndia;
export { CertificationIndia };
