import { useEffect, useState } from "react";

const Hero = () => {
  const videos = ["/hero.mp4"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % videos.length);
    }, 5000);
    return () => clearInterval(id);
  }, [videos.length]);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-24 pb-16 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl lg:min-h-[720px] lg:grid-cols-2">
        {/* Content column */}
        <div className="relative flex flex-col justify-center px-6 py-24 sm:px-10 lg:px-16">
          <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500">
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
          </div>

          <div className="relative z-10 space-y-8 text-white">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-100">
              Sustainability
            </span>

            <div className="space-y-6">
              <h1 id="hero-heading" className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                DRIVING SUSTAINABILITY
              </h1>

              <p className="text-base leading-relaxed text-emerald-50/90 sm:text-lg">
                To reduce carbon footprint and greenhouse gas emissions with products that create a balanced eco
                system. Effective use of technology for full Traceability are applied as per EU Sustainability
                directives.
              </p>
            </div>

            <div>
              <a
                href="http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID,P0_ID:55,MOLTECH"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-emerald-600 shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Tracking
              </a>
            </div>
          </div>
        </div>

        {/* Video column */}
        <div className="relative min-h-[320px] lg:min-h-0">
          {videos.map((src, i) => (
            <video
              key={src}
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
