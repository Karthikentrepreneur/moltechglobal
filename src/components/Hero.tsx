import { useEffect, useMemo, useState } from "react";

const checkIcon = (
  <svg
    className="h-5 w-5 flex-shrink-0 text-emerald-300"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
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
      className="relative isolate overflow-hidden py-20 text-white sm:py-24 lg:py-28"
      aria-labelledby="hero-heading"
    >
      {/* Animated gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        {/* main animated gradient */}
        <div className="animated-gradient absolute inset-0" />
        {/* soft blobs for depth */}
        <div className="absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-emerald-400/30 blur-[120px]" />
        <div className="absolute left-1/2 top-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-400/25 blur-[160px]" />
        <div className="absolute -right-24 bottom-10 h-[420px] w-[420px] rounded-full bg-blue-500/30 blur-[160px]" />
        {/* radial lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_85%,rgba(0,0,0,0.25),transparent_65%)]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content column */}
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

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-[0_15px_60px_-35px_rgba(0,0,0,0.9)] backdrop-blur"
                >
                  {checkIcon}
                  <p className="text-sm text-cyan-50/90">{feature}</p>
                </div>
              ))}
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

            <div className="grid grid-cols-3 gap-4 sm:max-w-md">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur"
                >
                  <div className="text-2xl font-semibold text-cyan-100 sm:text-3xl">{value}</div>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-cyan-50/70">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Video column */}
          <div className="relative z-10">
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 shadow-[0_50px_150px_-50px_rgba(0,90,255,0.9)] backdrop-blur">
              {/* keep a good aspect on small screens, taller on large */}
              <div className="aspect-[16/9] sm:aspect-[16/9] lg:h-[640px]">
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
              </div>

              {/* subtle badge overlay */}
              <div className="pointer-events-none absolute inset-x-6 bottom-6 flex items-center justify-between rounded-full bg-black/45 px-6 py-2 text-[10px] uppercase tracking-[0.35em] text-cyan-100/90 backdrop-blur md:inset-x-10 md:bottom-8 md:px-8 md:py-3">
                <span>Real-time Operations</span>
                <span className="inline-flex items-center gap-2">
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
      </div>

      {/* Local keyframes for animated gradient */}
      <style>{`
        .animated-gradient {
          background: linear-gradient(135deg, #10b981, #06b6d4 35%, #3b82f6 70%, #0ea5e9);
          background-size: 200% 200%;
          animation: gradientShift 16s ease-in-out infinite;
        }
        @keyframes gradientShift {
          0%   { background-position: 0% 0%; }
          50%  { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
