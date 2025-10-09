import { useEffect, useMemo, useState } from "react";

const checkIcon = (
  <svg className="h-5 w-5 flex-shrink-0 text-emerald-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M16.704 5.29a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.415 0l-3.25-3.25a1 1 0 1 1 1.415-1.414l2.543 2.543 6.543-6.543a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </svg>
);

const Hero = () => {
  const videos = ["/hero.mp4"];
  const [index, setIndex] = useState(0);

  const features = useMemo(
    () => [
      "Traceability across the entire supply chain",
      "Certified sustainable sourcing & production",
      "Smart logistics with real-time transparency",
    ],
    []
  );

  const stats = useMemo(
    () => [
      { value: "30+", label: "Global Partnerships" },
      { value: "18", label: "Sustainable Facilities" },
      { value: "50%", label: "Lower Emissions vs. Fossil" },
    ],
    []
  );

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % videos.length);
    }, 5000);
    return () => clearInterval(id);
  }, [videos.length]);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#0b2c32] via-[#084d4a] to-[#021018] pt-24 pb-20 text-white lg:pb-28"
      aria-labelledby="hero-heading"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-[360px] w-[360px] rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute -right-36 top-12 h-[420px] w-[420px] rounded-full bg-teal-300/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#063537]/40 to-[#01070b]/90" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-10 xl:px-16">
        {/* Content column */}
        <div className="relative z-10 flex flex-1 flex-col space-y-10 lg:max-w-xl lg:flex-[0.4]">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Driving Sustainability
          </div>

          <div className="space-y-6">
            <h1 id="hero-heading" className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Cleaner energy for a climate-positive tomorrow
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              Moltech connects innovative bio-based solutions with global demand. We combine rigorous sustainability standards,
              full traceability, and data-driven logistics to accelerate the transition toward a resilient low-carbon future.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                {checkIcon}
                <p className="text-sm text-emerald-100/90">{feature}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 shadow-xl shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Explore Our Solutions
            </a>
            <a
              href="http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID,P0_ID:55,MOLTECH"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-emerald-300 hover:text-emerald-200"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
              Live Tracking
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 sm:max-w-md">
            {stats.map(({ value, label }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center backdrop-blur">
                <div className="text-2xl font-semibold text-emerald-300 sm:text-3xl">{value}</div>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-emerald-100/70">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Video column */}
        <div className="relative z-10 flex flex-1 items-center justify-center lg:flex-[0.6]">
          <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 shadow-[0_0_160px_-40px_rgba(15,118,110,0.9)] backdrop-blur lg:h-[520px]">
            {videos.map((src, i) => (
              <video
                key={src}
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className={`h-full w-full object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
              />
            ))}
            <div className="pointer-events-none absolute inset-x-10 bottom-10 flex items-center justify-between rounded-full bg-black/60 px-6 py-3 text-xs uppercase tracking-[0.35em] text-teal-100/90 backdrop-blur">
              <span>Real-time Operations</span>
              <span className="inline-flex items-center gap-2 text-[10px]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-300 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-100" />
                </span>
                Live
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
