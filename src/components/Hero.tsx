import { useEffect, useState } from "react";

const SLIDE_MS = 5000; // 5s per item

type Slide = { kind: "video" | "image"; src: string; title: string; description: string };

const slides: Slide[] = [
  { kind: "video", src: "/01.mp4", title: "DRIVING SUSTAINABILITY",
    description:
      "To reduce carbon footprint and greenhouse gas emissions with products that create a balanced eco system. Effective use of technology for full traceability are applied as per EU Sustainability directives." },
  { kind: "video", src: "/02.mp4", title: "BIODIESEL FEEDSTOCK",
    description:
      "Origination of sustainable feed stocks using technology, skilled manpower and an in-house global logistics platform makes us the preferred choice of generators and oil refineries. Used cooking oil is processed and reaches bio refineries for conversion into biofuel." },
  { kind: "video", src: "/03.mp4", title: "TRUST",
    description:
      "We treat our trading partners as a team—ideas, communication, and transparency. Strong work ethics and strict quality control make Moltech a trusted partner." },
  { kind: "video", src: "/04.mp4", title: "GLOBAL SOLUTIONS",
    description:
      "A footprint across continents. We integrate sustainability, technology, and logistics to ensure consistent supply and fully traceable bio-based materials worldwide." },
  { kind: "video", src: "/glycerin.mp4", title: "GLYCERIN",
    description:
      "High-quality glycerin streams supporting pharmaceutical, personal care, and industrial applications—traceable and reliable." },
  { kind: "image", src: "/soap-noodles.jpg", title: "SOAP NOODLES",
    description:
      "Consistent, quality-controlled soap noodles for personal and home care—delivered with end-to-end compliance and sustainability." },
];

const Hero = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  const current = slides[idx];

  return (
    <section id="home" className="relative isolate min-h-[92vh] w-full overflow-hidden text-white">
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
          loading="eager"
        />
      )}

      {/* Gentle vignette for legibility (no white) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(110%_70%_at_50%_40%,transparent_0%,rgba(0,0,0,0.12)_45%,rgba(0,0,0,0.55)_100%)]" />

      {/* Bottom-left content panel — NO outer whitespace, NO white fills */}
      <div className="absolute bottom-0 left-0 z-10 max-w-[760px]">
        <div
          className="
            w-full
            bg-[linear-gradient(135deg,#27C6F5_0%,#31C58E_45%,#4A3FB6_100%)]
            text-white
            p-5 sm:p-7 lg:p-8
            md:rounded-tr-2xl
          "
        >
          {/* Tiny logo row (optional — uses the same colors; remove if not needed) */}
          {/* <img src='/moltech-logo-mark.svg' alt='Moltech' className='h-6 mb-2 opacity-95' /> */}

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            {current.title}
          </h1>
          <p className="mt-2.5 text-sm sm:text-base lg:text-[17px] leading-relaxed text-white/95">
            {current.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {/* Primary CTA uses the SAME gradient; no white */}
            <a
              href="#products"
              className="
                inline-flex items-center justify-center
                rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wide
                bg-[linear-gradient(135deg,#27C6F5_0%,#31C58E_45%,#4A3FB6_100%)]
                ring-1 ring-white/15 hover:ring-white/30 transition
              "
            >
              Explore Our Solutions
            </a>
            {/* Secondary CTA = transparent with cyan/green/purple ring; no white */}
            <a
              href='http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID,P0_ID:55,MOLTECH'
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center justify-center gap-2
                rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wide
                bg-black/0
                ring-1 ring-[#27C6F5]/60 hover:ring-[#31C58E]/70 focus:ring-[#4A3FB6]/70
                transition
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#31C58E]" />
              Live Tracking
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
