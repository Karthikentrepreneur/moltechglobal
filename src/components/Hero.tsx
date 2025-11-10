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
const FADE_MS = 500; // smooth fade transition

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
        src="/herohero.mp4" // your single looping background video
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
          className={`
            max-w-3xl text-center bg-black/60 backdrop-blur-sm rounded-3xl
            px-6 sm:px-10 py-6 sm:py-8 shadow-[0_0_30px_rgba(0,0,0,0.6)]
            transition-opacity duration-[${FADE_MS}ms]
            ${fadingOut ? "opacity-0" : "opacity-100"}
          `}
          style={{ willChange: "opacity", minHeight: 180 }}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            {msg.title}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90">
            {msg.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
