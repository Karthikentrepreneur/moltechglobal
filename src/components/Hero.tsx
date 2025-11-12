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

const SLIDE_MS = 5000;
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
        src="/herohero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Gradient Overlay (top 30%) */}
      <div className="absolute top-0 left-0 right-0 h-[30%] -z-10 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />

      {/* Text Content */}
      <div className="relative z-10 mb-10 w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-3xl text-center transition-opacity duration-[${FADE_MS}ms] ${
            fadingOut ? "opacity-0" : "opacity-100"
          }`}
          style={{ willChange: "opacity", minHeight: 160 }}
        >
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-3 drop-shadow-lg">
            {msg.title}
          </h1>
          <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-white/90 drop-shadow">
            {msg.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
