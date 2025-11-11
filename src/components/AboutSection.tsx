// src/components/AboutSection.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Globe2, ShieldCheck } from "lucide-react";

type Props = { imgSrc?: string };

const AboutSection: React.FC<Props> = ({ imgSrc = "/aboutmoltech.jpg" }) => {
  const [visible, setVisible] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden bg-white py-24"
    >
      {/* background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 15% 10%, rgba(37,99,235,0.1), transparent 70%), radial-gradient(60% 60% at 90% 30%, rgba(16,185,129,0.1), transparent 80%)",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT :: Responsive rectangular hero image */}
          <div
            className={[
              "relative mx-auto w-full max-w-[700px]",
              visible ? "animate-in-left" : "opacity-0 translate-y-6",
            ].join(" ")}
          >
            {/* glow */}
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 40% 40%, rgba(37,99,235,0.2), rgba(59,130,246,0.05) 70%)",
              }}
            />
            {/* frame */}
            <div className="group relative overflow-hidden rounded-xl lg:rounded-2xl shadow-2xl ring-1 ring-black/5 bg-gradient-to-br from-white to-blue-50/60">
              {/* border sheen */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-[1px] rounded-[inherit] bg-[conic-gradient(from_140deg,rgba(59,130,246,.25),rgba(16,185,129,.18),rgba(59,130,246,.25))] opacity-60 [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] p-[1px]"
              />
              {/* intrinsic aspect ratios */}
              <div className="relative aspect-[16/11] sm:aspect-[4/3] lg:aspect-video">
                {!imgLoaded && (
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-200 to-gray-100" />
                )}
                <img
                  src={imgSrc}
                  alt="Moltech sustainable operations"
                  className={[
                    "absolute inset-0 h-full w-full object-cover",
                    "transition-transform duration-700 ease-out",
                    "lg:group-hover:scale-[1.03] lg:group-hover:translate-y-[-2px]",
                    imgLoaded ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 700px, (min-width: 640px) 92vw, 94vw"
                  onLoad={() => setImgLoaded(true)}
                />
                {/* depth overlays */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.28),transparent_38%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,.35),transparent_30%)] mix-blend-screen" />
              </div>
            </div>
          </div>

          {/* RIGHT :: Content */}
          <div
            className={[
              "space-y-7",
              visible ? "animate-in-right" : "opacity-0 translate-y-6",
            ].join(" ")}
          >
            {/* tagline */}
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-200">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Sustainable • Global • Certified
            </div>

            {/* heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F1B3D]">
              Moltech
            </h2>

            {/* description */}
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Moltech strides in the bio space working on{" "}
              <span className="relative font-semibold text-gray-900 inline-block">
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

            {/* features */}
            <div className="grid gap-4 pt-2">
              <div className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-sm p-4 shadow-sm hover:shadow-md transition">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-200">
                  <Globe2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-[#0F1B3D]">
                    Global Presence &amp; Collection
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    Headquartered in Singapore with operations across Malaysia,
                    Thailand, Indonesia, UAE, UK and USA — ensuring reliability
                    and consistency in global sourcing.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-sm p-4 shadow-sm hover:shadow-md transition">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-[#0F1B3D]">
                    Certified &amp; Transparent
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    Certified by ISCC (EU); we operate with ethics, quality, and
                    traceability to ensure complete transparency.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-md transition-all hover:from-blue-700 hover:to-blue-500 hover:shadow-lg"
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-white px-6 py-3 text-sm font-semibold tracking-wide text-blue-700 hover:bg-blue-50 transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* animations */}
      <style>{`
        .animate-in-left {
          animation: fadeSlideInLeft .7s cubic-bezier(.22,.86,.26,.99) both;
        }
        .animate-in-right {
          animation: fadeSlideInRight .7s cubic-bezier(.22,.86,.26,.99) both .1s;
        }
        @keyframes fadeSlideInLeft {
          0% { opacity: 0; transform: translate3d(-18px, 8px, 0); }
          100% { opacity: 1; transform: translate3d(0,0,0); }
        }
        @keyframes fadeSlideInRight {
          0% { opacity: 0; transform: translate3d(18px, 8px, 0); }
          100% { opacity: 1; transform: translate3d(0,0,0); }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
