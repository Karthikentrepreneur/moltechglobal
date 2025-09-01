import { useEffect, useState } from "react";

const Hero = () => {
  const images = ["/Trust.jpg", "/Biodieselfeedbook.jpg", "/Drivingsustainability.jpg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background slider */}
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Hero slide ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          draggable={false}
        />
      ))}

      {/* ✅ Subtle black gradient only for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Content */}
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

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full border border-white ${
              i === index ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
