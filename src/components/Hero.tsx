import { useEffect, useMemo, useRef, useState } from "react";

const SLIDE_MS = 5000; // 5 seconds per video
const FADE_MS = 900;   // smooth crossfade

type Slide = {
  kind: "video" | "image";
  src: string;
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    kind: "video",
    src: "/01.mp4",
    title: "DRIVING SUSTAINABILITY",
    description:
      "To reduce carbon footprint and greenhouse gas emissions with products that create a balanced eco system. Effective use of technology for full traceability are applied as per EU Sustainability directives.",
  },
  {
    kind: "video",
    src: "/02.mp4",
    title: "BIODIESEL FEEDSTOCK",
    description:
      "Origination of sustainable feed stocks using technology, skilled manpower and an in-house global logistics platform makes us the preferred choice of generators and oil refineries. Used cooking oil is processed and reaches bio refineries for conversion into biofuel.",
  },
  {
    kind: "video",
    src: "/03.mp4",
    title: "TRUST",
    description:
      "We treat our trading partners as a team—ideas, communication, and transparency. Strong work ethics and strict quality control make Moltech a trusted partner.",
  },
  {
    kind: "video",
    src: "/04.mp4",
    title: "GLOBAL SOLUTIONS",
    description:
      "A footprint across continents. We integrate sustainability, technology, and logistics to ensure consistent supply and fully traceable bio-based materials worldwide.",
  },
  {
    kind: "video",
    src: "/glycerin.mp4",
    title: "GLYCERIN",
    description:
      "High-quality glycerin streams supporting pharmaceutical, personal care, and industrial applications—traceable and reliable.",
  },
  {
    kind: "image",
    src: "/soap-noodles.jpg",
    title: "SOAP NOODLES",
    description:
      "Consistent, quality-controlled soap noodles for personal and home care—delivered with end-to-end compliance and sustainability.",
  },
];

const Hero = () => {
  const [idx, setIdx] = useState(0);
  const [fadeFlag, setFadeFlag] = useState(false);
  const timerRef = useRef<number | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const next = () => setIdx((i) => (i + 1) % slides.length);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);

  const current = slides[idx];
  const nextIdx = (idx + 1) % slides.length;
  const upcoming = slides[nextIdx];

  // autoplay timer
  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.transition = "none";
      progressRef.current.style.width = "0%";
      requestAnimationFrame(() => {
        if (progressRef.current) {
          progressRef.current.style.transition = `width ${SLIDE_MS}ms linear`;
          progressRef.current.style.width = "100%";
        }
      });
    }

    timerRef.current = window.setTimeout(() => {
      setFadeFlag((f) => !f);
      window.setTimeout(() => next(), FADE_MS);
    }, SLIDE_MS);

    return () => timerRef.current && clearTimeout(timerRef.current);
  }, [idx]);

  const Media = ({ slide }: { slide: Slide }) =>
    slide.kind === "video" ? (
      <video
        key={slide.src}
        src={slide.src}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />
    ) : (
      <img
        src={slide.src}
        alt={slide.title}
        className="absolute inset-0 h-full w-full object-cover"
      />
    );

  const titleDecor = useMemo(
    () => (
      <span className="relative inline-block">
        <span className="relative z-10">{current.title}</span>
        <span className="absolute -inset-x-1 -bottom-1 h-2 rounded-full bg-gradient-to-r from-emerald-300/70 via-cyan-300/70 to-indigo-300/70 blur-[3px]" />
      </span>
    ),
    [current.title]
  );

  return (
    <section
      id="home"
      className="relative isolate min-h-[92vh] w-full overflow-hidden text-white"
    >
      {/* Dual video layers for fade */}
      <div className="absolute inset-0 -z-20">
        <div
          className={`absolute inset-0 transition-opacity duration-[${FADE_MS}ms] ${
            fadeFlag ? "opacity-0" : "opacity-100"
          }`}
        >
          <Media slide={current} />
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-[${FADE_MS}ms] ${
            fadeFlag ? "opacity-100" : "opacity-0"
          }`}
        >
          <Media slide={upcoming} />
        </div>
      </div>

      {/* Overlays for readability */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_70%_at_50%_40%,transparent_0%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.55)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 sm:px-10 lg:px-16">
        <div className="w-full">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              Sustainability • Traceability • Quality
            </span>
          </div>

          <div className="max-w-3xl rounded-2xl border border-white/15 bg-white/10 p-6 sm:p-8 shadow-[0_30px_120px_-40px_rgba(0,0,0,0.8)] backdrop-blur">
            <h1 className="text-center sm:text-left text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-md">
              {titleDecor}
            </h1>
            <p className="mt-4 text-center sm:text-left text-base sm:text-lg leading-relaxed text-white/90">
              {current.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.9)] transition hover:-translate-y-0.5"
              >
                Explore Our Solutions
              </a>
              <a
                href="http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID,P0_ID:55,MOLTECH"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/70 hover:bg-white/10"
              >
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                Live Tracking
              </a>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === idx ? "w-7 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="relative mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div
              ref={progressRef}
              className="h-full w-0 rounded-full bg-white/80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
