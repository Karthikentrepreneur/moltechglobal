import { useEffect, useState } from "react";

/** Play each video for 5s, loop through list */
const SLIDE_MS = 5000;

type Slide = {
  src: string;         // video or image path
  kind: "video" | "image";
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

  // rotate every 5s
  useEffect(() => {
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  const current = slides[idx];

  return (
    <section
      id="home"
      className="relative isolate min-h-[92vh] w-full overflow-hidden text-white"
      aria-labelledby="hero-heading"
    >
      {/* BACKGROUND MEDIA */}
      {current.kind === "video" ? (
        <video
          key={current.src}            // forces source switch when idx changes
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
          loading="eager"
        />
      )}

      {/* subtle vignette for contrast */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(110%_70%_at_50%_40%,transparent_0%,rgba(0,0,0,0.12)_45%,rgba(0,0,0,0.55)_100%)]" />

      {/* CONTENT BOX — bottom left */}
      <div className="relative z-10 mx-auto max-w-7xl min-h-[92vh]">
        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
          <div
            className="
              max-w-[680px]
              rounded-2xl
              border border-white/10
              bg-[#4A3FB6]/85     /* Moltech purple with opacity */
              p-5 sm:p-7
              shadow-[0_30px_120px_-40px_rgba(0,0,0,0.8)]
              backdrop-blur
            "
          >
            <h1
              id="hero-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight drop-shadow"
            >
              {current.title}
            </h1>

            <p className="mt-3 text-sm sm:text-base lg:text-[17px] leading-relaxed text-white/95">
              {current.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-900 shadow hover:-translate-y-0.5 transition"
              >
                Explore Our Solutions
              </a>
              <a
                href="http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID,P0_ID:55,MOLTECH"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/15 transition"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                Live Tracking
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
