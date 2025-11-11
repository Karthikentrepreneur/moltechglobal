import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Message = { title: string; description: string };

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
    title: "GLYCERIN & FATTY ACIDS",
    description:
      "Moltech supplies high-quality fatty acids and refined glycerin for industrial use in rubber, paints, and lubricants. Crude glycerin (65–85%) and refined grades (99.5%+) ensure purity and performance across applications.",
  },
  {
    title: "Animal Feed Fats",
    description:
      "Fats play a vital role in animal health and feed efficiency. Moltech’s proprietary liquid and dry fat formulations enhance absorption and energy density for optimal performance.",
  },
  {
    title: "SOAP NOODLES",
    description:
      "Moltech offers a wide variety of Soap Noodles of different qualities as per the customer's requirements.",
  },
  {
    title: "FEED ADDITIVES",
    description:
      "Moltech partners with feed companies to meet their specific nutritional needs, offering products like soya lecithin, de-oiled rice bran, palm kernel meal, and custom vitamin premixes.",
  },
];

const MOVE_MS = 5100;          // 5.1s per message
const RESET_PAUSE_MS = 40;     // tiny pause to reset without visible jump

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [disableTransition, setDisableTransition] = useState(false);
  const [slotHeight, setSlotHeight] = useState<number>(0);

  const cycleRef = useRef<number | null>(null);
  const currentRef = useRef<HTMLDivElement | null>(null);

  const current = MESSAGES[index];
  const next = MESSAGES[(index + 1) % MESSAGES.length];

  // Measure the current card to keep the viewport height stable (prevents "content doesn’t show")
  useLayoutEffect(() => {
    const measure = () => {
      if (currentRef.current) {
        const h = currentRef.current.getBoundingClientRect().height;
        // Add a tiny buffer to avoid subpixel clipping
        setSlotHeight(Math.ceil(h) + 2);
      }
    };
    measure();
    // Re-measure on font load / resize
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    // Some fonts apply after paint; measure again shortly
    const t = window.setTimeout(measure, 60);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, [index, current.title, current.description]);

  // Continuous slide loop
  useEffect(() => {
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      setIsSliding(true);

      window.setTimeout(() => {
        if (cancelled) return;

        // Instantly jump back and swap to next index (no transition during the jump)
        setDisableTransition(true);
        setIsSliding(false);
        setIndex((i) => (i + 1) % MESSAGES.length);

        window.setTimeout(() => {
          if (cancelled) return;
          setDisableTransition(false);
          tick(); // immediately start next cycle
        }, RESET_PAUSE_MS);
      }, MOVE_MS);
    };

    // Start shortly after mount so the first message is visible immediately
    cycleRef.current = window.setTimeout(tick, 300) as unknown as number;

    return () => {
      cancelled = true;
      if (cycleRef.current) clearTimeout(cycleRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative isolate h-screen w-full overflow-hidden text-white flex items-end justify-center"
      aria-live="polite"
    >
      {/* Background Video */}
      <video
        src="/herohero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 -z-30 h-full w-full object-cover"
      />

      {/* Dark vignette */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Frosted glass film over the video (gives global ‘glass’ feel) */}
      <div className="absolute inset-0 -z-10 bg-white/10 backdrop-blur-md sm:backdrop-blur-lg pointer-events-none" />

      {/* Text block */}
      <div className="relative z-10 mb-10 w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div
          className="
            max-w-3xl text-center rounded-3xl
            bg-white/10 backdrop-blur-xl ring-1 ring-white/20
            shadow-[0_10px_40px_rgba(0,0,0,0.45)]
            px-6 sm:px-10 py-6 sm:py-8
          "
          style={{ minHeight: 180 }}
        >
          {/* Slide viewport (exact height of the current card) */}
          <div
            className="overflow-hidden"
            style={{ height: slotHeight > 0 ? slotHeight : undefined }}
          >
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
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
                  {current.title}
                </h1>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90">
                  {current.description}
                </p>
              </div>

              {/* NEXT (slides up) */}
              <div className="py-1">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
                  {next.title}
                </h1>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90">
                  {next.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
