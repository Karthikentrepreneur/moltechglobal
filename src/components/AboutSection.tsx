import React from "react";
import { Users, Globe2, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with overlay (UNCHANGED) */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
            <div className="relative bg-white p-3 rounded-2xl shadow-2xl">
              <img
                src="/About.png"
                alt="Moltech sustainable biodiesel facility"
                className="w-full h-[500px] rounded-xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl flex items-end p-8">
                <p className="text-white font-semibold text-lg">
                  Leading the Circular Economy
                </p>
              </div>
            </div>
          </div>

          {/* Right: Content (UPDATED STYLE ONLY) */}
          <div className="space-y-8">
            {/* small top label */}
            <div className="text-[11px] font-semibold tracking-widest uppercase text-gray-500">
              About Company
            </div>

            {/* Big headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0F1B3D] leading-tight">
              About Moltech
            </h2>

            {/* Intro paragraph (long, with bold phrase) */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
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

            {/* Features */}
            <div className="space-y-6 pt-2">
              {/* Row 1 */}
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-blue-600">
                  <Globe2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-[#0F1B3D]">
                    Global Presence & Collection
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Headquartered in Singapore with operations across Malaysia,
                    Thailand, Indonesia, UAE, UK and USA — enabling reliable
                    sourcing and delivery.
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-blue-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-[#0F1B3D]">
                    Certified & Transparent
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Certified by ISCC (EU); we operate with strong ethics,
                    quality control and transparency.
                  </p>
                </div>
              </div>
            </div>

            {/* Help line */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white rounded-full shadow-md transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
