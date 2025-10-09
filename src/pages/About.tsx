// src/pages/About.tsx
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Users, Box, PartyPopper, Handshake } from "lucide-react";
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
          content="Learn about Moltech’s global presence and expertise in providing chemical solutions for sustainable industries. Discover our mission and vision for a greener future."
        />
      </Helmet>

      <Header />

      <main className="bg-white text-gray-900 pt-0">
        {/* ---------- HERO ---------- */}
        <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center text-center">
          <img
            src="/chemical.jpg"
            alt="Laboratory glassware and sustainable chemistry"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden />
          <div className="relative z-10 px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              About Us
            </h1>
          </div>
        </section>

        {/* ---------- INTRO with RIGHT IMAGE ---------- */}
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
               Chemical Solutions for Sustainable Industries
              </h2>

              <div className="space-y-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                  Moltech strides in the bio space working on clean initiatives and products that
                  drives the circular economy. With its strategic presence in Asia, Middle East,
                  United Kingdom and United States of America, Moltech is positioned to cater and
                  harness cross continental potential of renewable and sustainable products on a
                  global platform.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                  Headquartered in Singapore, Moltech operates its renewable business units from
                  Malaysia, Thailand, Indonesia, UAE, UK and USA. Being part of a larger group
                  with it's presence in more than 15 countries, Moltech takes further leverage of
                  cross functional support from its allied offices which makes its network more
                  robust and potential to expand.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                  Moltech operates collection and processing of feedstock for renewable diesel at
                  its own locations catering to the biodiesel industry. Products like Used cooking
                  oil, Tyre derived oils, Acid oils and POME are few of them. The Feed division
                  works on vegetable oil based specially formulated feed fats both liquid and dry
                  forms. The industrial application sector is catered through products like Fatty
                  alcohols, Fatty acid esters and glycerol.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                  Equipped with a global team of highly trained employees and with effective use
                  of technology, Moltech operates with high standards of ethics, operational
                  excellence, quality control and transparency which paved the way for Moltech to
                  become one of the most reliable partners on a global scale.
                </p>
                <p className="text-sm md:text-base text-gray-900">
                  Moltech is certified by{" "}
                  <span className="text-sky-700 font-semibold">
                    International Sustainability &amp; Carbon Certification (ISCC)
                  </span>
                  , European Union.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE — restored original Unsplash image */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1600&auto=format&fit=crop"
                alt="Sustainable operations"
                className="w-full h-full object-cover"
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
      </main>

      <Footer />
    </>
  );
};

export default About;
export { About };
