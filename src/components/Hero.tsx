import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Message = { title: string; description: string };

const MESSAGES: Message[] = [
  { title: "DRIVING SUSTAINABILITY",
    description:
      "To reduce carbon footprint and greenhouse gas emissions with products that create a balanced eco system. Effective use of technology for full traceability are applied as per EU Sustainability directives." },
  { title: "BIODIESEL FEEDSTOCK",
    description:
      "Origination of sustainable feed stocks using technology, skilled manpower and an in-house global logistics platform makes us the preferred choice of generators and oil refineries." },
  { title: "GLYCERIN & FATTY ACIDS",
    description:
      "Moltech supplies high-quality fatty acids and refined glycerin for industrial use in rubber, paints, and lubricants. Crude glycerin (65–85%) and refined grades (99.5%+) ensure purity and performance across applications." },
  { title: "Animal Feed Fats",
    description:
      "Fats play a vital role in animal health and feed efficiency. Moltech’s proprietary liquid and dry fat formulations enhance absorption and energy density for optimal performance." },
  { title: "SOAP NOODLES",
    description:
      "Moltech offers a wide variety of Soap Noodles of different qualities as per the customer's requirements." },
  { title: "FEED ADDITIVES",
    description:
      "Moltech partners with feed companies to meet their specific nutritional needs, offering products like soya lecithin, de-oiled rice bran, palm kernel meal, and custom vitamin premixes." },
];

const MOVE_MS = 5100;       // 5.1s per slide
const RESET_PAUSE_MS = 30;  // tiny pause for instant reset
const INITIAL_SLOT_HEIGHT = 220; // ensures first render is visible

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [disableTransition, setDisableTransition] = useState(false);
  const [slotHeight, setSlotHeight] = useState<number>(INITIAL_SLOT_HEIGHT);

  const currentRef = useRef<HTMLDivElement | null>(null);
  const loopTimerRef = useRef<number | null>(null);

  const current = MESSAGES[index];
  const next = MESSAGES[(index + 1) % MESSAGES.length];

  // Measure the current card so the viewport matches content height.
  useLayoutEffect(() => {
    const measure = () => {
      if (!currentRef.current) return;
      const h = Math.ceil(currentRef.current.getBoundingClientRect().height);
      if (h > 0) setSlotHeight(h + 2);
    };
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    const t = window.setTimeout(measure, 80); // font/paint settle
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, [index, current.title, current.description]);

  // Slide loop
  useEffect(() => {
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      setIsSliding(true);

      window.setTimeout(() => {
        if (cancelled) return;
        // reset without animation
        setDisableTransition(true);
        setIsSliding(false);
        setIndex((i) => (i + 1) % MESSAGES.length);

        window.setTimeout(() => {
          if (cancelled) return;
          setDisableTransition(false);
          tick();
        }, RESET_PAUSE_MS);
      }, MOVE_MS);
    };

    // start quickly but let first render paint
    loopTimerRef.current = window.setTimeout(tick, 200) as unknown as number;

    return () => {
      cancelled = true;
      if (loopTimerRef.current) clearTimeout(loopTimerRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      // IMPORTANT: no 'isolate' and no negative z-indexes.
      className="relative h-screen w-full overflow-hidden text-white flex items-end justify-center"
      aria-live="polite"
    >
      {/* Background Video (visible at z-0) */}
      <video
        src="/herohero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* Subtle vignette for readability (very transparent) */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(transparent_40%,rgba(0,0,0,0.45))]" />

      {/* Global transparent glass film (ultra-light) */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-white/5 backdrop-blur-sm sm:backdrop-blur-md" />

      {/* Text block with glass card */}
      <div className="relative z-30 mb-10 w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div
          className="
            max-w-3xl text-center rounded-3xl
            bg-white/8 backdrop-blur-xl ring-1 ring-white/20
            shadow-[0_10px_40px_rgba(0,0,0,0.35)]
            px-6 sm:px-10 py-6 sm:py-8
          "
          style={{ minHeight: 180 }}
        >
          {/* Slide viewport */}
          <div className="overflow-hidden" style={{ height: slotHeight }}>
            <div
              className={[
                "flex flex-col",
                isSliding ? "-translate-y-full" : "translate-y-0",
                disableTransition
                  ? "transition-none"
                  : "transition-transform duration-[5100ms] ease-in-out",
              ].join(" ")}
              style={{ willChange: "transform" }}
            >
              {/* CURRENT */}
              <div ref={currentRef} className="py-1">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
                  {current.title}
                </h1>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
                  {current.description}
                </p>
              </div>

              {/* NEXT */}
              <div className="py-1">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
                  {next.title}
                </h1>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
                  {next.description}
                </p>
              </div>
            </div>
          </div>

          {/* Optional tiny progress bar (pure glassy) */}
          <div className="mt-5 h-1 w-full rounded-full bg-white/15 overflow-hidden">
            <div
              key={index} // restart animation each slide
              className="h-full w-full bg-white/40"
              style={{
                transformOrigin: "left",
                animation: "slidebar linear",
                animationDuration: `${MOVE_MS}ms`,
              }}
            />
          </div>
        </div>
      </div>

      {/* keyframes for progress bar */}
      <style>{`
        @keyframes slidebar {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
