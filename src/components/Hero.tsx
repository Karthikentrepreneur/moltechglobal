import { useEffect, useRef, useState } from "react";

type Message = { title: string; description: string };

// 5 overlay texts
const MESSAGES: Message[] = [
  {
    title: "DRIVING SUSTAINABILITY",
    description:
      "To reduce carbon footprint and greenhouse gas emissions with products that create a balanced eco system. Effective use of technology for full traceability are applied as per EU Sustainability directives.",
  },
  {
    title: "BIODIESEL FEEDSTOCK",
    description:
      "Origination of sustainable feed stocks using technology, skilled manpower and an in-house global logistics platform makes us the preferred choice of generators and oil refineries.",
  },
  {
    title: "TRUST",
    description:
      "We treat our trading partners as a team—ideas, communication, and transparency. Strong work ethics and strict quality control make Moltech a trusted partner.",
  },
  {
    title: "GLOBAL SOLUTIONS",
    description:
      "A footprint across continents. We integrate sustainability, technology, and logistics to ensure consistent supply and fully traceable bio-based materials worldwide.",
  },
  {
    title: "GLYCERIN",
    description:
      "High-quality glycerin streams supporting pharmaceutical, personal care, and industrial applications—traceable and reliable.",
  },
];

const SLIDE_MS = 5000; // 5 seconds per text
const FADE_MS = 600;   // cross-fade duration for text

const Hero = () => {
  // which message index is the "current"
  const [i, setI] = useState(0);
  // which layer is visible (A or B) for cross-fade
  const [showA, setShowA] = useState(true);

  const timerRef = useRef<number | null>(null);
  const fadeRef = useRef<number | null>(null);

  useEffect(() => {
    const tick = () => {
      // start the fade
      setShowA((v) => !v);

      // after fade completes, advance the index so next cycle is prepared
      fadeRef.current = window.setTimeout(() => {
        setI((prev) => (prev + 1) % MESSAGES.length);
        schedule(); // schedule the next 5s cycle
      }, FADE_MS);
    };

    const schedule = () => {
      timerRef.current = window.setTimeout(tick, SLIDE_MS);
    };

    schedule();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (fadeRef.current) clearTimeout(fadeRef.current);
    };
  }, []);

  const current = MESSAGES[i];
  const next = MESSAGES[(i + 1) % MESSAGES.length];

  return (
    <section
      id="home"
      className="relative isolate h-screen w-full overflow-hidden text-white flex items-end justify-center"
      aria-labelledby="hero-heading"
    >
      {/* Single continuous background video */}
      <video
        src="/herohero.mp4" /* <-- set your single background video here */
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Subtle dark overlay for global readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Bottom-centered content area with two overlaid layers that cross-fade */}
      <div className="relative z-10 mb-10 w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-3xl w-full">
          {/* Layer A (visible when showA = true) */}
          <div
            className={`
              absolute inset-0
              transition-opacity duration-[${FADE_MS}ms]
              ${showA ? "opacity-100" : "opacity-0"}
            `}
          >
            <div className="text-center bg-black/60 backdrop-blur-sm px-6 sm:px-10 py-6 sm:py-8 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.6)]">
              <h1
                id="hero-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3"
              >
                {current.title}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90">
                {current.description}
              </p>

              <div className="mt-5 flex justify-center flex-wrap gap-4">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/20 transition"
                >
                  Explore Our Solutions
                </a>
                <a
                  href="http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID,P0_ID:55,MOLTECH"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300 bg-cyan-300/10 px-6 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white hover:bg-cyan-300/20 transition"
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  Live Tracking
                </a>
              </div>
            </div>
          </div>

          {/* Layer B (visible when showA = false) */}
          <div
            className={`
              transition-opacity duration-[${FADE_MS}ms]
              ${showA ? "opacity-0" : "opacity-100"}
            `}
          >
            <div className="text-center bg-black/60 backdrop-blur-sm px-6 sm:px-10 py-6 sm:py-8 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.6)]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
                {next.title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90">
                {next.description}
              </p>

              <div className="mt-5 flex justify-center flex-wrap gap-4">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/20 transition"
                >
                  Explore Our Solutions
                </a>
                <a
                  href="http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID,P0_ID:55,MOLTECH"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300 bg-cyan-300/10 px-6 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white hover:bg-cyan-300/20 transition"
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  Live Tracking
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
