import { useEffect, useRef, useState } from "react";

type Message = { title: string; description: string };

const MESSAGES: Message[] = [
  {
    title: "DRIVING SUSTAINABILITY",
    description:
      "To reduce carbon footprint and greenhouse gas emissions with products that create a balanced eco system. Effective use of technology for full traceability are applied as per EU Sustainability directives.",
  },
  {
    title: "RENEWABLE FUEL FEEDSTOCK",
    description:
      "Origination of low-carbon feedstocks such as UCO, POME, tallow, and specialty oils with full traceability for biodiesel, HVO, and SAF production.",
  },
  {
    title: "ANIMAL FEED FATS",
    description:
      "High-energy nutritional fats crafted to improve feed efficiency, palatability, and overall animal performance across livestock diets.",
  },
 {
  title: "GLYCERIN",
  description:
    "Moltech supplies high-quality glycerin tailored for diverse industrial applications. Available in crude (65–85%) and refined grades (99.5%+), our glycerin delivers consistent purity for use in pharmaceuticals, cosmetics, food processing, and chemical manufacturing.",
},
  {
    title: "FEEDSTOCK COLLECTION",
    description:
      "ISCC-certified collection network with smart pickups, live tracking, and transparent documentation for used cooking oil generators.",
  },
  {
    title: "FEED ADDITIVES",
    description:
      "Moltech partners with feed companies to meet their specific nutritional needs, offering products like soya lecithin, de-oiled rice bran, palm kernel meal, and custom vitamin premixes.",
  },
];

const SLIDE_MS = 10020;
const FADE_MS = 500;

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const step = () => {
      setFadingOut(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % MESSAGES.length);
        requestAnimationFrame(() => setFadingOut(false));
      }, FADE_MS);
    };
    timerRef.current = window.setInterval(step, SLIDE_MS);
    return () => timerRef.current && clearInterval(timerRef.current);
  }, []);

  const msg = MESSAGES[index];

  return (
    <section
      id="home"
      className="relative isolate h-screen w-full overflow-hidden text-white flex items-end justify-center"
    >
      {/* Background Video */}
      <video
        src="/hre2.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Overlay to improve contrast */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[35%] -z-10 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] -z-10 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      {/* Text Content */}
      <div className="relative z-10 mb-12 w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-3xl text-center transition-opacity duration-[${FADE_MS}ms] ${
            fadingOut ? "opacity-0" : "opacity-100"
          }`}
          style={{ willChange: "opacity", minHeight: 160 }}
        >
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight mb-3 text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
            {msg.title}
          </h1>
          <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-white/95 drop-shadow-[0_3px_4px_rgba(0,0,0,0.85)]">
            {msg.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
