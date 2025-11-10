import { useEffect, useRef, useState } from "react";

type Slide = {
  src: string;
  title: string;
  description: string;
};

const SLIDE_MS = 5000;      // each video visible for 5 s
const FADE_MS = 1000;       // cross-fade duration

const slides: Slide[] = [
  {
    src: "/01.mp4",
    title: "DRIVING SUSTAINABILITY",
    description:
      "To reduce carbon footprint and greenhouse gas emissions with products that create a balanced eco system. Effective use of technology for full traceability are applied as per EU Sustainability directives.",
  },
  {
    src: "/02.mp4",
    title: "BIODIESEL FEEDSTOCK",
    description:
      "Origination of sustainable feed stocks using technology, skilled manpower and an in-house global logistics platform makes us the preferred choice of generators and oil refineries.",
  },
  {
    src: "/03.mp4",
    title: "TRUST",
    description:
      "We treat our trading partners as a team—ideas, communication, and transparency. Strong work ethics and strict quality control make Moltech a trusted partner.",
  },
  {
    src: "/04.mp4",
    title: "GLOBAL SOLUTIONS",
    description:
      "A footprint across continents. We integrate sustainability, technology, and logistics to ensure consistent supply and fully traceable bio-based materials worldwide.",
  },
  {
    src: "/glycerin.mp4",
    title: "GLYCERIN",
    description:
      "High-quality glycerin streams supporting pharmaceutical, personal care, and industrial applications—traceable and reliable.",
  },
  {
    src: "/soapnoodles.mp4",
    title: "SOAP NOODLES",
    description:
      "Consistent, quality-controlled soap noodles for personal and home care—delivered with end-to-end compliance and sustainability.",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [fadeFlag, setFadeFlag] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // cross-fade timer
    timeoutRef.current = window.setTimeout(() => {
      setFadeFlag((f) => !f);
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_MS);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [index]);

  const current = slides[index];
  const next = slides[(index + 1) % slides.length];

  return (
    <section
      id="home"
      className="relative isolate h-screen w-full overflow-hidden text-white flex items-end justify-center"
    >
      {/* two video layers cross-fading */}
      <div className="absolute inset-0 -z-20">
        <video
          key={current.src}
          src={current.src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[${FADE_MS}ms] ${
            fadeFlag ? "opacity-0" : "opacity-100"
          }`}
        />
        <video
          key={next.src}
          src={next.src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[${FADE_MS}ms] ${
            fadeFlag ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* subtle dark overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* bottom-center content box */}
      <div className="relative z-10 mb-10 w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center bg-black/60 backdrop-blur-sm px-6 sm:px-10 py-6 sm:py-8 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.6)]">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
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
    </section>
  );
};

export default Hero;
