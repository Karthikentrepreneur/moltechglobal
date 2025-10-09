import { useEffect, useState } from "react";

const Hero = () => {
  const bgVideo = "/blue.mp4";

  const frames = [
    { src: "/Biodieselariel.jpg", title: "Biodiesel Feedstocks" },
    { src: "/1.png", title: "Fatty Acids" },
    { src: "/2.png", title: "Soap Noodles" },
    { src: "/3.png", title: "Animal Feed Fats" },
    { src: "/4.png", title: "Glycerin" },
    { src: "/5.png", title: "Feed Additives" },
  ];

  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setFrameIndex((i) => (i + 1) % frames.length);
    }, 4000);
    return () => clearInterval(id);
  }, [frames.length]);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden text-white flex items-center min-h-screen"
      aria-labelledby="hero-heading"
    >
      {/* ===== Background video ===== */}
      <video
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* ===== Overlay ===== */}
      <div className="absolute inset-0 -z-10 bg-black/50" />

      {/* ===== Hero Content ===== */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="relative z-10 flex flex-col gap-8 justify-center">
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
                Moltech connects innovative bio-based solutions with global
                demand. We combine rigorous sustainability standards, full
                traceability, and data-driven logistics to accelerate the
                transition toward a resilient low-carbon future.
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
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                Live Tracking
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="relative w-[85%] sm:w-[80%] lg:w-[90%] overflow-hidden rounded-[1.5rem] border border-white/20 bg-white/10 shadow-[0_50px_150px_-50px_rgba(0,0,0,0.9)] backdrop-blur">
              <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] overflow-hidden rounded-[1.5rem]">
                {frames.map((f, i) => (
                  <img
                    key={f.src}
                    src={f.src}
                    alt={f.title}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
                      i === frameIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Title below image */}
            <div className="mt-5 text-center">
              <h3 className="text-base font-semibold uppercase tracking-[0.25em] text-cyan-100 drop-shadow">
                {frames[frameIndex]?.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
