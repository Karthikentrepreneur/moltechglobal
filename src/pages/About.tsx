// src/pages/About.tsx
import React, { useEffect, useRef, useState } from "react";
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
import Blogs1 from "../components/Blogs1";

/* -------------------- CountUp -------------------- */
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function useInView<T extends HTMLElement>(opts?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.2,
      ...opts,
    });

    io.observe(el);
    return () => io.disconnect();
  }, [opts]);

  return { ref, inView };
}

const CountUp: React.FC<{
  to: number;
  className?: string;
  duration?: number;
  suffix?: string;
}> = ({ to, className, duration = 1200, suffix = "" }) => {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    let raf = 0;
    let start: number | null = null;

    const tick = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setValue(Math.round(easeOutCubic(progress) * to));

      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
};
/* ------------------------------------------------ */

const About: React.FC = () => {
  return (
    <>
      <Header />

      {/* FIX: prevent content hiding behind fixed header */}
      <main className="bg-white text-[#0F1B3D] pt-28">

        {/* ===== HERO ===== */}
        <section className="relative">
          <div className="relative h-[30vh] md:h-[32vh] lg:h-[28vh]">
            <Blogs1 />
          </div>
        </section>

        {/* ===== INTRO BLOCK ===== */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(2,6,23,0.10)] ring-1 ring-black/5">
                <img
                  src="/aboutmoltech.jpg"
                  alt=""
                  className="w-full h-[380px] md:h-[440px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-500">
                About Company
              </p>

              <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight">
                About Moltech
              </h2>

              <p className="mt-5 text-[17px] leading-8 text-slate-700">
                Moltech strides in the bio space working on{" "}
                <span className="font-semibold text-[#0F1B3D]">clean initiatives and products</span>{" "}
                that drive the circular economy globally.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-100 grid place-items-center text-[#0F1B3D]">
                    <Globe2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Global Presence</div>
                    <p className="text-sm text-slate-600 mt-1">
                      Operations across Malaysia, Thailand, Indonesia, UAE, UK, USA.
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
                      ISCC (EU) certified process with strong governance and transparency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white rounded-full shadow-md bg-blue-600 hover:bg-blue-700"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <hr className="border-gray-200" />
        </div>

        {/* ===== OUR STORY ===== */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
          <h3 className="text-3xl md:text-4xl font-extrabold">Our Story</h3>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-5 text-[16.5px] leading-8 text-slate-700">
              <p>
                Moltech operates renewable business units worldwide, leveraging cross-continental opportunities.
              </p>
              <p>
                We collect, refine, and supply sustainable feedstocks such as UCO, tyre-derived oils, acid oils, and POME.
              </p>
              <p>
                Our industrial division delivers fatty alcohols, esters, glycerol, and bio-feed fats.
              </p>
              <p className="text-slate-800 font-semibold">
                Certified by ISCC (EU).
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 h-[360px] md:h-[440px]">
              <img
                src="/greenworld.jpg"
                alt="Moltech Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <hr className="border-gray-200" />
        </div>

        {/* ===== STATS ===== */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-slate-100 grid place-items-center">
                <Users className="h-6 w-6 text-[#0F1B3D]" />
              </div>
              <div>
                <CountUp to={5} className="text-3xl font-extrabold" />
                <p className="text-sm text-slate-600">Years Experience</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-slate-100 grid place-items-center">
                <Box className="h-6 w-6 text-[#0F1B3D]" />
              </div>
              <div>
                <CountUp to={10} className="text-3xl font-extrabold" />
                <p className="text-sm text-slate-600">Products</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-slate-100 grid place-items-center">
                <PartyPopper className="h-6 w-6 text-[#0F1B3D]" />
              </div>
              <div>
                <CountUp to={100} className="text-3xl font-extrabold" suffix="+" />
                <p className="text-sm text-slate-600">Employees</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-slate-100 grid place-items-center">
                <Handshake className="h-6 w-6 text-[#0F1B3D]" />
              </div>
              <div>
                <CountUp to={1000} className="text-3xl font-extrabold" suffix="+" />
                <p className="text-sm text-slate-600">Satisfied Clients</p>
              </div>
            </div>

          </div>
        </section>

        {/* ===== VISION + MISSION (EXACT STYLE) ===== */}
        <section className="relative overflow-hidden pb-36 md:pb-48">
          {/* Soil background bottom */}
          <div className="absolute bottom-0 inset-x-0 h-40 md:h-56">
            <img
              src="/soil.jpg"  /* replace with your soil image */
              className="h-full w-full object-cover"
              alt=""
            />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-14">
            <span className="inline-flex rounded-full border border-slate-300 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-slate-600 bg-white">
              OUR PURPOSE
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
              Building a{" "}
              <span className="text-emerald-600">cleaner, sustainable</span>{" "}
              tomorrow
            </h2>

            <p className="mt-4 max-w-3xl text-slate-600 text-lg leading-relaxed">
              Moves the world closer to renewable, low-carbon energy. Sustainability begins
              with small actions that create a global impact.
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {/* Vision */}
              <div className="rounded-3xl bg-white shadow-xl border border-slate-200 p-8">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-emerald-50 grid place-items-center">
                    <Telescope className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900">Vision</h4>
                </div>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  To engage in sustainable bio-space activities that reduce carbon footprint
                  and protect the environment.
                </p>
              </div>

              {/* Mission */}
              <div className="rounded-3xl bg-white shadow-xl border border-slate-200 p-8">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-blue-50 grid place-items-center">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900">Mission</h4>
                </div>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  To scale up sustainable feedstock collection, operate ethically, promote
                  clean energy, and care for community and nature.
                </p>
              </div>
            </div>

            {/* Pills */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Lower carbon footprint",
                "Sustainable bio-feedstock",
                "Community & environmental care",
              ].map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-1.5 bg-white shadow-sm border border-slate-200 text-xs font-semibold rounded-full text-slate-700"
                >
                  • {pill}
                </span>
              ))}
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
