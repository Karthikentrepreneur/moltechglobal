// src/pages/About.tsx
import React, { useEffect, useRef, useState } from "react";
import { Users, Box, PartyPopper, Handshake } from "lucide-react";

/* -------------------- CountUp utilities -------------------- */
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setPrefers(mql.matches);
    onChange();
    if ("addEventListener" in mql) mql.addEventListener("change", onChange);
    else (mql as any).addListener?.(onChange);
    return () => {
      if ("removeEventListener" in mql) mql.removeEventListener("change", onChange);
      else (mql as any).removeListener?.(onChange);
    };
  }, []);
  return prefers;
}

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      root: options?.root ?? null,
      rootMargin: options?.rootMargin ?? "0px 0px -20% 0px",
      threshold: options?.threshold ?? 0.2,
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [options?.root, options?.rootMargin, options?.threshold]);

  return { ref, inView };
}

type CountUpProps = {
  to: number;
  duration?: number; // ms
  className?: string;
  suffix?: string;
  delay?: number; // ms
};

const CountUp: React.FC<CountUpProps> = ({ to, duration = 1200, className, suffix = "", delay = 0 }) => {
  const prefersReduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    if (prefersReduced) {
      setVal(to);
      return;
    }

    let raf = 0;
    let start: number | null = null;
    const total = Math.max(200, duration);

    const tick = (ts: number) => {
      if (start === null) start = ts;
      const elapsed = ts - start - delay;
      const t = Math.min(Math.max(elapsed / total, 0), 1);
      const eased = easeOutCubic(t);
      const next = Math.round(eased * to);
      setVal(next);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, prefersReduced, to, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
};
/* ----------------------------------------------------------- */

const About: React.FC = () => {
  return (
    <main className="pt-20 bg-white text-gray-900">
      {/* ---------- HERO ---------- */}
      <section className="relative min-h-[55vh]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "/about.jpg", // swap to your local image if desired
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="relative inline-block max-w-3xl p-4 sm:p-6 md:p-8">
            <span className="pointer-events-none absolute -top-4 -left-4 h-10 w-10 border-t-4 border-l-4 border-white" />
            <span className="pointer-events-none absolute -bottom-4 -right-4 h-10 w-10 border-b-4 border-r-4 border-white" />
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
              alt="Moltech banner"
              className="mb-4 h-16 w-auto rounded-md border border-white/50 shadow-lg"
              draggable={false}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-wide text-white">
              ABOUT US –<br />
              CHEMICAL SOLUTIONS FOR<br />
              SUSTAINABLE INDUSTRIES
            </h1>
          </div>
        </div>
      </section>

      {/* ---------- INTRO 2-COLUMN ---------- */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 lg:px-8">
        <div className="max-w-none">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Moltech strides in the bio space working on clean initiatives and products that
            drives the circular economy. With its strategic presence in Asia, Middle East,
            United Kingdom and United States of America, Moltech is positioned to cater and
            harness cross continental potential of renewable and sustainable products on a
            global platform.
          </p>
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            Headquartered in Singapore, Moltech operates its renewable business units from
            Malaysia, Thailand, Indonesia, UAE, UK and USA. Being part of a larger group
            with it's presence in more than 15 countries, Moltech takes further leverage of
            cross functional support from its allied offices which makes its network more
            robust and potential to expand.
          </p>
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            Moltech operates collection and processing of feedstock for renewable diesel at
            its own locations catering to the biodiesel industry. Products like Used cooking
            oil, Tyre derived oils, Acid oils and POME are few of them. The Feed division
            works on vegetable oil based specially formulated feed fats both liquid and dry
            forms. The industrial application sector is catered through products like Fatty
            alcohols, Fatty acid esters and glycerol.
          </p>
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            Equipped with a global team of highly trained employees and with effective use
            of technology, Moltech operates with high standards of ethics, operational
            excellence, quality control and transparency which paved the way for Moltech to
            become one of the most reliable partners on a global scale.
          </p>

          {/* Certification — SMALL size with blue highlight */}
          <p className="mt-6 text-sm md:text-base text-gray-900">
            Moltech is certified by{" "}
            <span className="text-sky-700 font-semibold">
              International Sustainability &amp; Carbon Certification (ISCC)
            </span>
            , European Union.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1600&auto=format&fit=crop"
            alt="Sustainable operations"
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>
      </section>

      {/* ---------- STATS ROW (animated) ---------- */}
      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-4 lg:px-8">
          {/* Years */}
          <div className="flex items-center gap-5">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-sky-50">
              <Users className="h-8 w-8 text-sky-500" />
            </div>
            <div>
              <CountUp to={5} suffix="+" className="text-4xl font-extrabold" />
              <div className="text-gray-600">Years of Experience</div>
            </div>
          </div>

          {/* Products */}
          <div className="flex items-center gap-5 md:border-l md:pl-8 md:border-gray-200">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-sky-50">
              <Box className="h-8 w-8 text-sky-500" />
            </div>
            <div>
              <CountUp to={10} suffix="+" className="text-4xl font-extrabold" />
              <div className="text-gray-600">Products</div>
            </div>
          </div>

          {/* Employees */}
          <div className="flex items-center gap-5 md:border-l md:pl-8 md:border-gray-200">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-indigo-50">
              <PartyPopper className="h-8 w-8 text-indigo-500" />
            </div>
            <div>
              <CountUp to={100} suffix="+" className="text-4xl font-extrabold" />
              <div className="text-gray-600">Happy Employees</div>
            </div>
          </div>

          {/* Clients */}
          <div className="flex items-center gap-5 md:border-l md:pl-8 md:border-gray-200">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-emerald-50">
              <Handshake className="h-8 w-8 text-emerald-600" />
            </div>
            <div>
              <CountUp to={1000} suffix="+" className="text-4xl font-extrabold" />
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- VISION / MISSION ---------- */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Vision */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop"
              alt="Vision"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-sky-600/30 to-emerald-500/30" />
            <div className="relative p-8 sm:p-10 md:p-12 text-white">
              <h3 className="text-2xl tracking-[0.35em] font-semibold">VISION</h3>
              <div className="mt-6 h-px w-10 bg-white/70" />
              <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-white/95">
                To engage in business and services in the bio-space which contribute to
                reduction in carbon footprint and environmental care
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600&auto=format&fit=crop"
              alt="Mission"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/35 via-sky-600/30 to-teal-500/30" />
            <div className="relative p-8 sm:p-10 md:p-12 text-white">
              <h3 className="text-2xl tracking-[0.35em] font-semibold">MISSION</h3>
              <div className="mt-6 h-px w-10 bg-white/70" />
              <ul className="mt-6 max-w-2xl list-disc space-y-3 pl-5 text-base md:text-lg leading-relaxed text-white/95">
                <li>
                  To scale up the collection and processing of sustainable feedstock for
                  production of clean energy across different continents.
                </li>
                <li>To operate businesses with high standards of ethics and good governance .</li>
                <li>To care about the community and the environment .</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
export { About };
