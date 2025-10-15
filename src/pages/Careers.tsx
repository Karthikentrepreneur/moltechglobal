import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase } from "lucide-react";

const Careers: React.FC = () => {
  return (
    <>
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="relative flex items-center justify-center min-h-[70vh] bg-gradient-to-br from-emerald-50 via-white to-blue-50 text-center">
        {/* Background Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <Briefcase className="w-64 h-64 text-emerald-500" />
        </div>

        <div className="relative z-10 px-6">
          <div className="inline-flex items-center justify-center rounded-2xl bg-emerald-500/90 p-4 mb-6 shadow-lg">
            <Briefcase className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Careers at Moltech
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Join our mission to drive sustainability and innovation in the
            renewable energy space.
          </p>

          {/* Coming Soon Message */}
          <div className="mt-10 inline-block rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-500 to-sky-500 px-8 py-4 shadow-md">
            <span className="text-white text-lg md:text-xl font-semibold">
              🚧 This page will be updated soon.
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Careers;
export { Careers };
