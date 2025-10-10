// src/pages/CertificationIndia.tsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const images = [
  "/cer-sg.jpg",
  "/cer-sg-iscc.jpg",
  "/cer-uk.jpg",
  "/cer-th.jpg",
  "/cer-my.jpg",
  "/cer-dxb-1.jpg",
];

const CertificationIndia: React.FC = () => {
  return (
    <>
      <Header />

      <main className="bg-gradient-to-b from-slate-50 to-white pt-24">
        <section className="py-8 md:py-12">
          <div className="mx-auto px-4 md:px-6 max-w-[1600px]">
            {/* Title */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500">
                  Global Certifications
                </span>
              </h2>
              <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400" />
            </div>

            {/* Certificates Grid — 3×3 layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {images.map((src, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex items-center justify-center"
                >
                  <img
                    src={src}
                    alt={`Certificate ${i + 1}`}
                    loading="lazy"
                    className="w-full h-[20rem] md:h-[22rem] object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Mobile: Horizontal scroll (optional) */}
            <div className="lg:hidden mt-8 overflow-x-auto">
              <div className="flex flex-nowrap gap-6">
                {images.map((src, i) => (
                  <div
                    key={`mobile-${i}`}
                    className="shrink-0 w-[280px] sm:w-[320px] rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-5 flex items-center justify-center"
                  >
                    <img
                      src={src}
                      alt={`Certificate ${i + 1}`}
                      loading="lazy"
                      className="w-full h-80 sm:h-96 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CertificationIndia;
export { CertificationIndia };
