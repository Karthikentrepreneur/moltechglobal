import { useEffect, useState } from "react";

const Hero = () => {
  // Background video (section bg)
  const bgVideo = "/blue.mp4";

  // Right box: 5 images with titles
  const frames = [
    { src: "/biodiesel.png", title: "Biodiesel Feedstocks" },
    { src: "/images/frame-2.jpg", title: "Certified Collection Network" },
    { src: "/images/frame-3.jpg", title: "Advanced Processing" },
    { src: "/images/frame-4.jpg", title: "Quality & Compliance" },
    { src: "/images/frame-5.jpg", title: "Global Supply Logistics" },
  ];

  const [frameIndex, setFrameIndex] = useState(0);

  // Autoplay carousel
  useEffect(() => {
    const id = setInterval(() => {
      setFrameIndex((i) => (i + 1) % frames.length);
    }, 4000);
    return () => clearInterval(id);
  }, [frames.length]);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden py-20 text-white sm:py-24 lg:py-28"
      aria-labelledby="hero-heading"
    >
      {/* Background video */}
      <video
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
      />
      {/* Readability overlay */}
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT: Content */}
          <div className="relative z-10 flex flex-col gap-8">
            <div className="inline-flex items-center gap-3 self-start rounded-full border border-white/15 bg-white/10 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-100/90 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Driving Sustainability
            </div>

            <div className="space-y-5">
              <h1
                id="hero-heading"
                className="text-3xl font-bold leading-tight drop-shadow-sm sm:text-5xl lg:text-6xl"
              >
                Cleaner energy for a climate-positive tomorrow
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-cyan-50/90 sm:text-lg">
                Moltech connects innovative bio-based solutions with global demand. We combine rigorous sustainability standards,
                full traceability, and data-driven logistics to accelerate the transition toward a resilient low-carbon future.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
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
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
                Live Tracking
              </a>
            </div>
          </div>

          {/* RIGHT: Image carousel box */}
          <div className="relative z-10">
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 shadow-[0_50px_150px_-50px_rgba(0,0,0,0.9)] backdrop-blur">
              {/* Keep aspect on small; taller on large */}
              <div className="relative aspect-[16/9] sm:aspect-[16/9] lg:h-[640px]">
                {frames.map((f, i) => (
                  <img
                    key={f.src}
                    src={f.src}
                    alt={f.title}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === frameIndex ? "opacity-100" : "opacity-0"}`}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                ))}
              </div>

              {/* Caption bar */}
              <div className="pointer-events-none absolute inset-x-6 bottom-6 rounded-full bg-black/45 px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-100/90 backdrop-blur md:inset-x-10 md:bottom-8 md:px-8 md:py-3">
                {frames[frameIndex]?.title}
              </div>

              {/* Dots */}
              <div className="absolute left-1/2 bottom-3 flex -translate-x-1/2 items-center gap-2 md:bottom-5">
                {frames.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2.5 w-2.5 rounded-full transition ${i === frameIndex ? "bg-white" : "bg-white/40 hover:bg-white/70"}`}
                    onClick={() => setFrameIndex(i)}
                  />
                ))}
              </div>

              {/* Prev / Next */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
                <button
                  className="pointer-events-auto hidden h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur transition hover:bg-black/60 sm:flex"
                  onClick={() => setFrameIndex((i) => (i - 1 + frames.length) % frames.length)}
                  aria-label="Previous"
                >
                  ‹
                </button>
                <button
                  className="pointer-events-auto hidden h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur transition hover:bg-black/60 sm:flex"
                  onClick={() => setFrameIndex((i) => (i + 1) % frames.length)}
                  aria-label="Next"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
          {/* END right box */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
