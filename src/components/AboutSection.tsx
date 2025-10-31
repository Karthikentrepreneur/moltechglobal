// src/components/AboutSection.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Globe2, ShieldCheck } from "lucide-react";

type AboutSectionProps = {
  /** public path to your existing image */
  imgSrc?: string;
};

const AboutSection: React.FC<AboutSectionProps> = ({ imgSrc = "/png.png" }) => {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24">
      {/* --- Blue accent arcs (no yellow) --- */}
      <div
        className="pointer-events-none absolute -left-[28%] top-[12%] h-[900px] w-[900px] rounded-full"
        style={{ background: "#2B6CB0" }}
      />
      <div
        className="pointer-events-none absolute -left-[20%] -top-[12%] h-[620px] w-[620px] rounded-full"
        style={{ background: "#4299E1" }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT :: Circular image (uses your existing /png.png) */}
          <div className="relative mx-auto w-[720px] max-w-full">
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-30"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 50%, rgba(30,58,138,0.25), transparent 70%)",
              }}
            />
            <div className="relative mx-auto aspect-square w-full max-w-[700px] overflow-hidden rounded-full">
              <div className="absolute inset-0 rounded-full ring-8 ring-blue-50" />
              <img
                src={imgSrc}
                alt="Moltech sustainable operations"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </div>

          {/* RIGHT :: Content (unchanged) */}
          <div className="space-y-7">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
              About Company
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#0F1B3D]">
              About Moltech
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Moltech strides in the bio space working on{" "}
              <span className="font-semibold text-gray-900">
                clean initiatives and products
              </span>{" "}
              that drive the circular economy. With its strategic presence in
              Asia, Middle East, United Kingdom and United States of America,
              Moltech is positioned to cater and harness cross-continental
              potential of renewable and sustainable products on a global
              platform.
            </p>

            <div className="space-y-6 pt-1">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-blue-600">
                  <Globe2 className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <div className="font-semibold text-[#0F1B3D]">
                    Global Presence &amp; Collection
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    Headquartered in Singapore with operations across Malaysia,
                    Thailand, Indonesia, UAE, UK and USA — enabling reliable
                    sourcing and delivery.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-blue-600">
                  <ShieldCheck className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <div className="font-semibold text-[#0F1B3D]">
                    Certified &amp; Transparent
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    Certified by ISCC (EU); we operate with strong ethics,
                    quality control and transparency.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-md transition-all duration-300 hover:from-blue-700 hover:to-blue-500 hover:shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
