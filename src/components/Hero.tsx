import { useEffect, useRef, useState } from "react";

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
      "Moltech supplies high-quality fatty acids and refined glycerin for industrial use in rubber, paints, and lubricants.Crude glycerin (65–85%) and refined grades (99.5%+) ensure purity and performance across applications.",
  },
  {
    title: "Animal Feed Fats",
    description:
      "Fats play a vital role in animal health and feed efficiency.Moltech’s proprietary liquid and dry fat formulations enhance absorption and energy density for optimal performance.",
  },
  {
    title: "SOAP NOODLES",
    description:
      "Moltech offers a wide variety of Soap Noodles of different qualities as per the customer's requirements.",
  },
  {
    title: "FEED ADDITIVES",
    description:
      "Moltech partners with feed companies to meet their specific nutritional needs,offering products like soya lecithin, de-oiled rice bran, palm kernel meal, and custom vitamin premixes.",
  },
];

const MOVE_MS = 5100; // 5.1 seconds movement
const RESET_PAUSE_MS = 100; // tiny pause to reset without visible jump

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [disableTransition, setDisableTransition] = useState(false);
  const cycleRef = useRef<number | null>(null);

  const current = MESSAGES[index];
  const next = MESSAGES[(index + 1) % MESSAGES.length];

  // Run a continuous slide loop: move up over 5.1s, swap to next, reset position instantly, repeat.
  useEffect(() => {
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      // Start the slide
      setIsSliding(true);

      // After the movement finishes, swap content and reset position instantly (no transition)
      window.setTimeout(() => {
        if (cancelled) return;

        setDisableTransition(true);   // turn off transition for the reset jump
        setIsSliding(false);          // back to translate-y-0 (no animation)
        setIndex((i) => (i + 1) % MESSAGES.length);

        // Re-enable transition on the next frame and schedule the next slide
        window.setTimeout(() => {
          if (cancelled) return;
          setDisableTransition(false);
          tick(); // start next slide immediately
        }, RESET_PAUSE_MS);
      }, MOVE_MS);
    };

    // Kick off the first slide shortly after mount
    cycleRef.current = window.setTimeout(tick, 200) as unknown as number;

    return () => {
      cancelled = true;
      if (cycleRef.current) clearTimeout(cycleRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative isolate h-screen w-full overflow-hidden text-white flex items-end justify-center"
    >
      {/* Background Video */}
      <video
        src="/herohero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Text Content */}
      <div className="relative z-10 mb-10 w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div
          className="
            max-w-3xl text-center bg-black/60 backdrop-blur-sm rounded-3xl
            px-6 sm:px-10 py-6 sm:py-8 shadow-[0_0_30px_rgba(0,0,0,0.6)]
          "
          style={{ minHeight: 180 }}
        >
          {/* Slide window */}
          <div className="overflow-hidden">
            <div
              className={[
                "flex flex-col",
                // translate container: 0 -> -100% to slide next card up
                isSliding ? "-translate-y-full" : "translate-y-0",
                // movement duration 5.1s, ease-in-out
                disableTransition ? "transition-none" : "transition-transform duration-[5100ms] ease-in-out",
              ].join(" ")}
              style={{ willChange: "transform" }}
            >
              {/* Current card */}
              <div className="py-1">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
                  {current.title}
                </h1>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90">
                  {current.description}
                </p>
              </div>

              {/* Next card (slides up underneath) */}
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
