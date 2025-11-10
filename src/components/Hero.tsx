import { useEffect, useState } from "react";

const SLIDE_MS = 5000;

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
    src: "/soap-noodles.jpg.MP4",
    title: "SOAP NOODLES",
    description:
      "Consistent, quality-controlled soap noodles for personal and home care—delivered with end-to-end compliance and sustainability.",
  },
];

const Hero = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  const current = slides[idx];

  return (
    <section
      id="home"
      className="relative isolate h-screen w-full overflow-hidden text-white"
    >
      {/* Background media */}
      {current.kind === "video" ? (
        <video
          key={current.src}
          src={current.src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      ) : (
        <img
          key={current.src}
          src={current.src}
          alt={current.title}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      )}

      {/* Overlay for contrast */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Attractive bottom-left gradient box */}
      <div className="absolute bottom-0 left-0 z-10 w-full md:max-w-[760px] md:bottom-8 md:left-8">
        <div
          className="
            relative rounded-tr-[2.5rem]
            bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#38bdf8]
            p-8 sm:p-10
            shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)]
            overflow-hidden
          "
        >
          {/* subtle inner glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />

          {/* Content */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight drop-shadow-md">
            {current.title}
          </h1>
          <p className="mt-3 text-sm sm:text-base lg:text-[17px] leading-relaxed text-white/95">
            {current.description}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#products"
              className="
                inline-flex items-center justify-center
                rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-wide
                bg-white/10 text-white border border-white/30
                backdrop-blur-[2px]
                hover:bg-white/20 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]
                transition
              "
            >
              Explore Our Solutions
            </a>

            <a
              href='http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID,P0_ID:55,MOLTECH'
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center justify-center gap-2
                rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-wide
                border border-cyan-300 text-white
                hover:bg-cyan-300/20 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]
                transition
              "
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
