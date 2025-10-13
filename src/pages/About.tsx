// src/pages/About.tsx
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Users, Box, PartyPopper, Handshake, Globe2, ShieldCheck } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

/* -------------------- CountUp utilities -------------------- */
function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3); }
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
type CountUpProps = { to: number; duration?: number; className?: string; suffix?: string; delay?: number; };
const CountUp: React.FC<CountUpProps> = ({ to, duration = 1200, className, suffix = "", delay = 0 }) => {
  const prefersReduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    if (prefersReduced) { setVal(to); return; }
    let raf = 0, start: number | null = null;
    const total = Math.max(200, duration);
    const tick = (ts: number) => {
      if (start === null) start = ts;
      const elapsed = ts - start - delay;
      const t = Math.min(Math.max(elapsed / total, 0), 1);
      const eased = easeOutCubic(t);
      setVal(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, prefersReduced, to, duration, delay]);
  return <span ref={ref} className={className}>{val.toLocaleString()}{suffix}</span>;
};
/* ----------------------------------------------------------- */

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Chemical Solutions for Sustainable Industries</title>
        <meta
          name="description"
          content="Learn about Moltech’s global presence and expertise in providing chemical solutions for sustainable industries. Discover our story, mission, and vision for a greener future."
        />
      </Helmet>

      <Header />

      <main className="bg-white text-gray-900 pt-0">
        {/* ======== NEW TOP SECTION (blue-gradient, layout like screenshot) ======== */}
        <section className="relative">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: stacked image with gradient accent blocks */}
            <div className="relative">
              {/* back accent block */}
              <div className="absolute -left-8 -top-8 h-44 w-40 rounded-xl bg-gradient-to-br from-royal-blue to-electric-blue opacity-90" />
              {/* photo card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
                <img
                  src="/chemical.jpg"
                  alt="Laboratory glassware and sustainable chemistry"
                  className="h-[420px] w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* round badge */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                <div className="size-28 rounded-full p-[3px] bg-gradient-to-r from-royal-blue to-electric-blue shadow-xl">
                  <div className="size-full rounded-full bg-white grid place-items-center">
                    <div className="text-center">
                      <div className="text-[10px] tracking-widest text-gray-700 font-semibold">AWARD WINNING</div>
                      <div className="text-xs font-bold text-deep-navy">SINCE 2019</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: content using your existing copy */}
            <div className="relative">
              {/* small label */}
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-royal-blue/10 to-electric-blue/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-royal-blue uppercase">
                About Company
              </div>

              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-deep-navy">
                About Moltech
              </h1>

              <p className="mt-4 text-gray-700 leading-relaxed text-base md:text-lg">
                Moltech strides in the bio space working on <span className="font-semibold text-gray-900">clean initiatives and products</span> that drive the circular economy. With its strategic presence in Asia, Middle East, United Kingdom and United States of America, Moltech is positioned to cater and harness cross-continental potential of renewable and sustainable products on a global platform.
              </p>

              {/* two feature rows like the screenshot */}
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-royal-blue/15 to-electric-blue/15 text-royal-blue">
                    <Globe2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-deep-navy">Global Presence & Collection</div>
                    <p className="text-sm text-gray-600 mt-1">
                      Headquartered in Singapore with operations across Malaysia, Thailand, Indonesia, UAE, UK and USA — enabling reliable sourcing and delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-royal-blue/15 to-electric-blue/15 text-royal-blue">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-deep-navy">Certified & Transparent</div>
                    <p className="text-sm text-gray-600 mt-1">
                      Certified by <span className="font-medium text-deep-navy">ISCC (EU)</span>; we operate with strong ethics, quality control and transparency.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA + help snippet */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-royal-blue to-electric-blue shadow-lg shadow-royal-blue/20 hover:shadow-xl hover:shadow-electric-blue/25 transition"
                >
                  Know More About Us
                </a>
                <div className="flex items-center gap-3 text-sm">
                  <img
                    src="/Moltechlogo.png"
                    alt="Moltech"
                    className="h-9 w-9 rounded-full ring-2 ring-white/10 object-contain bg-white"
                  />
                  <div>
                    <div className="text-gray-500">Need Help?</div>
                    <div className="font-semibold text-deep-navy">+65 6514 0868</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* soft background waves */}
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-royal-blue/5 to-transparent" />
          <div className="pointer-events-none absolute right-[-120px] top-20 -z-10 h-60 w-60 rounded-full bg-gradient-to-tr from-royal-blue/20 to-electric-blue/20 blur-3xl" />
        </section>
        {/* ======== /NEW TOP SECTION ======== */}

        {/* ---------- INTRO (kept content) ---------- */}
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-black max-w-5xl">
            Our Story
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
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
          </div>
        </section>

        {/* ---------- STATS ROW (animated) ---------- */}
        <section className="border-y border-gray-200 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-4 lg:px-8">
            <div className="flex items-center gap-5">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-sky-50">
                <Users className="h-8 w-8 text-sky-500" />
              </div>
              <div>
                <CountUp to={5} suffix="+" className="text-4xl font-extrabold" />
                <div className="text-gray-600">Years of Experience</div>
              </div>
            </div>

            <div className="flex items-center gap-5 md:border-l md:pl-8 md:border-gray-200">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-sky-50">
                <Box className="h-8 w-8 text-sky-500" />
              </div>
              <div>
                <CountUp to={10} suffix="+" className="text-4xl font-extrabold" />
                <div className="text-gray-600">Products</div>
              </div>
            </div>

            <div className="flex items-center gap-5 md:border-l md:pl-8 md:border-gray-200">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-indigo-50">
                <PartyPopper className="h-8 w-8 text-indigo-500" />
              </div>
              <div>
                <CountUp to={100} suffix="+" className="text-4xl font-extrabold" />
                <div className="text-gray-600">Happy Employees</div>
              </div>
            </div>

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

        {/* ---------- VISION / MISSION (kept) ---------- */}
        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
                  <li>Scale up the collection and processing of sustainable feedstock for clean energy.</li>
                  <li>Operate with high standards of ethics and good governance.</li>
                  <li>Care for the community and the environment.</li>
                </ul>
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
