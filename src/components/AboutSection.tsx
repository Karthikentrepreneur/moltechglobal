// src/components/AboutSection.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Globe2, ShieldCheck } from "lucide-react";

type Props = { imgSrc?: string };

const AboutSection: React.FC<Props> = ({ imgSrc = "/png.png" }) => {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24">
      {/* Removed old blue shapes */}
      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT :: Image with subtle blue glow */}
          <div className="relative mx-auto w-[720px] max-w-full">
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -z-10 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(37,99,235,0.30), rgba(59,130,246,0.18) 55%, transparent 70%)",
              }}
            />

            <div
              className="mx-auto aspect-square w-full max-w-[700px] rounded-full p-[10px]"
              style={{
                background:
                  "conic-gradient(from 140deg, rgba(96,165,250,0.8), rgba(59,130,246,0.65), rgba(96,165,250,0.8))",
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-full bg-white">
                <img
                  src={imgSrc}
                  alt="Moltech sustainable operations"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* RIGHT :: Text content */}
          <div className="space-y-7">
            {/* Title */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#0F1B3D]">
              Moltech
            </h2>

            {/* Description with thin highlight */}
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Moltech strides in the bio space working on{" "}
              <span className="relative font-bold text-gray-900 inline-block">
                clean initiatives and products
                <span
                  className="absolute left-0 bottom-0 h-[2px] w-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #3B82F6 0%, #60A5FA 50%, #2563EB 100%)",
                  }}
                />
              </span>{" "}
              that drive the circular economy. With its strategic presence in
              Asia, Middle East, United Kingdom and United States of America,
              Moltech is positioned to cater and harness cross-continental
              potential of renewable and sustainable products on a global
              platform.
            </p>

            {/* Features */}
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

            {/* CTA Button */}
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
