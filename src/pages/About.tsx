// src/pages/About.tsx
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Globe2,
  ShieldCheck,
  Users,
  Box,
  PartyPopper,
  Handshake,
  Telescope,
  Target,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

/* -------------------- CountUp -------------------- */
function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3); }

function useInView<T extends HTMLElement>(opts?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) { setInView(true); return; }
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.2, ...opts });
    io.observe(el);
    return () => io.disconnect();
  }, [opts]);
  return { ref, inView };
}

const CountUp: React.FC<{ to: number; className?: string; duration?: number; suffix?: string }> = ({
  to, className, duration = 1200, suffix = ""
}) => {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [v, setV] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    let raf = 0, start: number | null = null;
    const tick = (ts: number) => {
      if (start === null) start = ts;
      const t = Math.min((ts - start) / duration, 1);
      setV(Math.round(easeOutCubic(t) * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref} className={className}>{v.toLocaleString()}{suffix}</span>;
};
/* ------------------------------------------------ */

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Moltech</title>
        <meta
          name="description"
          content="Moltech strides in the bio space with clean initiatives and products that drive the circular economy across Asia, Middle East, UK and USA."
        />
      </Helmet>

      <Header />

      <main className="bg-white text-[#0F1B3D]">
        {/* ====== HERO HEADER ====== */}
        <section aria-label="About Us hero" className="relative">
          <div className="relative h-[38vh] md:h-[50vh] lg:h-[56vh]">
            <img
              src="/about-hero.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
            <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
              <div>
                <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-sm">
                  About Us
                </h1>
                <nav aria-label="Breadcrumb" className="mt-3">
                  <ol className="flex items-center justify-center gap-2 text-sm text-white/90">
                    <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                    <li aria-hidden>→</li>
                    <li className="font-semibold">About Us</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Intro block ===== */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5">
                <img
                  src="/About.png"
                  alt="Moltech laboratory"
                  className="w-full h-[380px] md:h-[440px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="text-[11px] font-semibold tracking-widest uppercase text-gray-500">
                About Company
              </div>

              <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight">
                About Moltech
              </h2>

              <p className="mt-5 text-[17px] leading-8 text-slate-700">
                Moltech strides in the bio space working on{" "}
                <span className="font-semibold text-[#0F1B3D]">clean initiatives and products</span>{" "}
                that drive the circular economy. With its strategic presence in Asia, Middle
                East, United Kingdom and United States of America, Moltech is positioned to
                cater and harness cross-continental potential of renewable and sustainable
                products on a global platform.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-100 grid place-items-center text-[#0F1B3D]">
                    <Globe2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Global Presence & Collection</div>
                    <p className="text-sm text-slate-600 mt-1">
                      Headquartered in Singapore with operations across Malaysia, Thailand,
                      Indonesia, UAE, UK and USA — enabling reliable sourcing and delivery.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-100 grid place-items-center text-[#0F1B3D]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Certified & Transparent</div>
                    <p className="text-sm text-slate-600 mt-1">
                      Certified by ISCC (EU); we operate with strong ethics, quality control
                      and transparency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Logo + CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <img src="/Moltechlogo.png" className="h-6 w-auto object-contain" alt="Moltech" />
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white rounded-full shadow-md transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <hr className="border-gray-100" />
        </div>

        {/* ===== Our Story ===== */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <h3 className="text-3xl md:text-4xl font-extrabold">Our Story</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-5 text-[16.5px] leading-8 text-slate-700">
              <p>
                Moltech operates renewable business units from Malaysia, Thailand, Indonesia,
                UAE, UK and USA. Being part of a larger group with presence in more than 15
                countries, we leverage cross-functional support that makes our network robust
                and ready to scale.
              </p>
              <p>
                We collect and process feedstock for renewable diesel at our own locations:
                used cooking oil, tyre-derived oils, acid oils and POME. Our feed division
                supplies vegetable-oil-based formulated feed fats (liquid and dry). For
                industrial applications we deliver fatty alcohols, fatty acid esters and
                glycerol.
              </p>
              <p>
                With a global team and effective use of technology, we maintain high standards
                of ethics, operational excellence, quality control and transparency — making
                us a reliable partner worldwide.
              </p>
              <p className="text-slate-800">
                Certified by <span className="font-semibold text-[#0F1B3D]">ISCC (EU)</span>.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1600&auto=format&fit=crop"
                alt="Operations"
                className="w-full h-[360px] md:h-[420px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <hr className="border-gray-100" />
        </div>

        {/* ===== Compact stats row ===== */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-slate-100 grid place-items-center text-[#0F1B3D]">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <CountUp to={5} className="text-3xl font-extrabold" />
                <div className="text-slate-600 text-sm">Years Experience</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-slate-100 grid place-items-center text-[#0F1B3D]">
                <Box className="h-6 w-6" />
              </div>
              <div>
                <CountUp to={10} className="text-3xl font-extrabold" />
                <div className="text-slate-600 text-sm">Products</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-slate-100 grid place-items-center text-[#0F1B3D]">
                <PartyPopper className="h-6 w-6" />
              </div>
              <div>
                <CountUp to={100} className="text-3xl font-extrabold" suffix="+" />
                <div className="text-slate-600 text-sm">Employees</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-slate-100 grid place-items-center text-[#0F1B3D]">
                <Handshake className="h-6 w-6" />
              </div>
              <div>
                <CountUp to={1000} className="text-3xl font-extrabold" suffix="+" />
                <div className="text-slate-600 text-sm">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <hr className="border-gray-100" />
        </div>

        {/* ===== Vision / Mission (same size; mission is green) ===== */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Vision card */}
            <div className="relative">
              {/* floating icon */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-16 w-16 rounded-full bg-white/90 shadow-lg grid place-items-center">
                <div className="absolute inset-0 rounded-full bg-blue-700 -z-10" />
                <Telescope className="h-8 w-8 text-white" />
              </div>

              <div className="h-full rounded-2xl bg-blue-700 text-white p-8 pt-16 shadow-[0_20px_60px_rgba(2,6,23,0.15)] flex flex-col min-h-[280px]">
                <h4 className="text-xl tracking-[0.35em] font-semibold uppercase">Vision</h4>
                <p className="mt-4 text-[16.5px] leading-8 text-white/90">
                  To engage in business and services in the bio-space which contribute to
                  reduction in carbon footprint and environmental care.
                </p>
                <div className="mt-auto" />
              </div>
            </div>

            {/* Mission card (green) */}
            <div className="relative">
              {/* floating icon */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-16 w-16 rounded-full bg-white/90 shadow-lg grid place-items-center">
                <div className="absolute inset-0 rounded-full bg-emerald-600 -z-10" />
                <Target className="h-8 w-8 text-white" />
              </div>

              <div className="h-full rounded-2xl bg-emerald-600 text-white p-8 pt-16 shadow-[0_20px_60px_rgba(2,6,23,0.15)] flex flex-col min-h=[280px] md:min-h-[280px]">
                <h4 className="text-xl tracking-[0.35em] font-semibold uppercase">Mission</h4>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-[16.5px] leading-8">
                  <li>Scale up collection and processing of sustainable feedstock for clean energy.</li>
                  <li>Operate with high standards of ethics and good governance.</li>
                  <li>Care for the community and the environment.</li>
                </ul>
                <div className="mt-auto" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
export { About };
