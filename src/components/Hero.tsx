import { useEffect, useState } from "react";

const SLIDE_MS = 8000; // duration per video (8s each)

const Hero = () => {
  const slides = [
    {
      video: "/01.mp4",
      title: "DRIVING SUSTAINABILITY",
      description:
        "To reduce carbon footprint and greenhouse gas emissions with products that create a balanced eco system. Effective use of technology for full Traceability are applied as per EU Sustainability directives.",
    },
    {
      video: "/02.mp4",
      title: "BIODIESEL FEEDSTOCK",
      description:
        "Origination of sustainable feed stocks using technology, skilled manpower and in-house global logistics platform makes us the preferred choice of generators and oil refineries. Used cooking oil collected are processed and find its way to the bio refineries for conversion into biofuel.",
    },
    {
      video: "/03.mp4",
      title: "TRUST",
      description:
        "We treat our trading partners as a team. Exchange of ideas, communication and transparency, strong work ethics and strict quality control — makes Moltech one of the trusted partners to trade.",
    },
    {
      video: "/04.mp4",
      title: "GLOBAL SOLUTIONS",
      description:
        "With a footprint across continents, Moltech integrates sustainability, technology, and logistics to ensure consistent supply and traceable bio-based materials worldwide.",
    },
  ];

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((prev) => (prev + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden text-white flex items-center justify-center min-h-screen"
    >
      {/* Background Video */}
      <video
        key={slides[idx].video}
        src={slides[idx].video}
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-1000"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl text-center px-6 sm:px-10 lg:px-16">
        <div className="space-y-6 animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide uppercase drop-shadow-lg">
            {slides[idx].title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-100/90 max-w-3xl mx-auto">
            {slides[idx].description}
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.9)] transition hover:-translate-y-0.5"
            >
              Explore Our Solutions
            </a>

            <a
              href="http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID,P0_ID:55,MOLTECH"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/70 hover:bg-white/10"
            >
              Live Tracking
            </a>
          </div>
        </div>

        {/* Optional indicator dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                i === idx ? "bg-white w-6" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
