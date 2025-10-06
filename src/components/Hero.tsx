import { useEffect, useState } from "react";

const Hero = () => {
  const videos = ["/herov.mp4"]; // using video instead of images
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % videos.length);
    }, 5000);
    return () => clearInterval(id);
  }, [videos.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video slider */}
      {videos.map((src, i) => (
        <video
          key={src}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* ✅ Subtle black gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
              Driving the Circular Economy
            </h1>

            <p className="text-lg max-w-2xl">
              Sustainable products and clean initiatives across Asia, Middle East, UK, and USA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
