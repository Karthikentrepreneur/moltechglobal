// src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
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

      {/* ✅ No gradient overlays at all */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight drop-shadow-md">
              Driving the Circular Economy
            </h1>

            <p className="text-lg max-w-2xl drop-shadow-sm">
              Sustainable products and clean initiatives across Asia, Middle East, UK, and USA.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-hero group">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="btn-ghost group bg-green-600 hover:bg-green-500">
              <Play className="mr-2 h-5 w-5" />
              Talk to Us
            </Button>
          </div>

          {/* Stats without gradient borders */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white">4+</div>
              <div className="text-sm text-white">Continents</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white">15+</div>
              <div className="text-sm text-white">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-white">Sustainable</div>
            </div>
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
