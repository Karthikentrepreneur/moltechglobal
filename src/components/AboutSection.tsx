import React from "react";
import { Users } from "lucide-react";

const About = () => {


  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            About Moltech
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-500 mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with overlay */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
            <div className="relative bg-white p-3 rounded-2xl shadow-2xl">
              <img
                src="/Biodieselariel.jpg"
                alt="Moltech sustainable biodiesel facility"
                className="w-full h-96 rounded-xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl flex items-end p-8">
                <p className="text-white font-semibold text-lg">
                  Leading the Circular Economy
                </p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Moltech strides in the bio space working on <span className="font-semibold text-gray-900">clean initiatives and products</span> that drive the circular economy.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With its strategic presence across Asia, Middle East, United Kingdom, and United States of America, Moltech is positioned to cater and harness cross-continental potential of renewable and sustainable products on a global platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
