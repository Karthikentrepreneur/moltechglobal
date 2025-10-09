import React from "react";
import aboutHero from "/BG01.jpg";

const About: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        backgroundImage: `url(${aboutHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative py-20 text-black"  // ✅ default text color black
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          About Our Team
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl hover-lift border border-gray-200">
            <img
              src="/Biodieselariel.jpg"
              alt="Creative marketing team brainstorming with laptops and whiteboards"
              className="w-full h-auto rounded-xl shadow-xl object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-black">
              We Grow Your Brand
            </h3>
            <p className="text-lg leading-relaxed text-gray-800">
              Moltech strides in the bio space working on clean initiatives and products that drives the circular economy.
              With its strategic presence in Asia, Middle East, United Kingdom and United States of America, 
              Moltech is positioned to cater and harness cross continental potential of
              renewable and sustainable products on a global platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
