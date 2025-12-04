// src/pages/About.tsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Globe2,
  ShieldCheck,
  Eye,
  Target,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Blogs1 from "../components/Blogs1";

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Moltech</title>
        <meta
          name="description"
          content="Moltech strides in the bio space with clean initiatives and products that drive the circular economy across Asia, Middle East, UK and USA."
        />
      </Helmet>

      <Header />

      {/* top padding so hero is not hidden behind fixed header */}
      <main className="bg-white text-[#0F1B3D] pt-24 md:pt-28">
        {/* ====== HERO HEADER ====== */}
        <section aria-label="About Us hero" className="relative">
          <Blogs1 />
        </section>

        {/* ===== Intro block ===== */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5">
                <img
                  src="/aboutmoltech.jpg"
                  alt="Moltech laboratory"
                  className="w-full h-[380px] md:h-[440px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="text-[11px] font-semibold tracking-widest uppercase text-gray-500">
                About Company
              </div>

              <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight">
                About Moltech
              </h2>

              <p className="mt-5 text-[17px] leading-8 text-slate-700">
                Moltech strides in the bio space working on{" "}
                <span className="font-semibold text-[#0F1B3D]">
                  clean initiatives and products
                </span>{" "}
                that drive the circular economy. With its strategic presence in
                Asia, Middle East, United Kingdom and United States of America,
                Moltech is positioned to cater and harness cross-continental
                potential of renewable and sustainable products on a global
                platform.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-100 grid place-items-center text-[#0F1B3D]">
                    <Globe2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">
                      Global Presence & Collection
                    </div>
                    <p className="text-sm text-slate-600 mt-1">
                      Headquartered in Singapore with operations across
                      Malaysia, Thailand, Indonesia, UAE, UK and USA — enabling
                      reliable sourcing and delivery.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-100 grid place-items-center text-[#0F1B3D]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Certified & Transparent</div>
                    <p className="text-sm text-slate-600 mt-1">
                      Certified by ISCC (EU); we operate with strong ethics,
                      quality control and transparency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Logo + CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white rounded-full shadow-md transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <hr className="border-gray-100" />
        </div>

        {/* ===== Our Story ===== */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <h3 className="text-3xl md:text-4xl font-extrabold">Our Story</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-5 text-[16.5px] leading-8 text-slate-700">
              <p>
                Moltech began with a clear mission: to support the global
                transition toward cleaner energy by sourcing sustainable
                feedstocks for renewable fuel production. What started as a
                focused trading operation has grown into a multi-country network
                supplying ISCC-certified materials to biodiesel, HVO, SAF,
                biogas, and bunker-fuel producers worldwide.
              </p>
              <p>
                Over the years, our capabilities have expanded significantly,
                with a current trading volume of <strong>15–20 KT per month </strong> and a
                continually diversifying portfolio of waste- and residue-based
                feedstocks. As the industry evolves, we remain committed to
                developing supply chains that reduce carbon intensity,
                strengthen traceability, and promote responsible sourcing.
              </p>
              <p>
                Our affiliation with
                {" "}
                <a
                  href="https://www.1ge.sg/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#0F1B3D] decoration-2 decoration-blue-500"
                >
                  1 Global Enterprises
                </a>
                {" "}
                gives us the infrastructure, digital systems, and global reach
                needed to operate efficiently across multiple markets. Together,
                we are building a future where sustainable feedstock supply
                chains are reliable, transparent, and ready to meet the growing
                demand for low-carbon fuels.
              </p>
            </div>

            {/* Image card */}
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5 relative w-full h-[360px] md:h-[440px]">
              <img
                src="/greenworld.jpg"
                alt="Moltech Global Renewable Map"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ===== Purpose + Vision + Mission ===== */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          {/* Top Label + Heading */}
          <div className="text-center">
            <span className="inline-block px-4 py-1 text-[12px] font-semibold tracking-wider bg-slate-100 rounded-full text-slate-600">
              OUR PURPOSE
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
              Building a{" "}
              <span className="text-emerald-600">cleaner, sustainable</span>{" "}
              tomorrow
            </h2>

            <p className="mt-4 text-[17px] text-slate-600 max-w-3xl mx-auto leading-7">
              Moves the world closer to renewable, low-carbon energy.
              Sustainability begins with small actions that create a global
              impact.
            </p>
          </div>

          {/* Vision & Mission Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="rounded-2xl bg-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100">
              <div className="flex items-center gap-3">
                <Eye className="h-7 w-7 text-emerald-600" />
                <h3 className="text-xl font-bold">Vision</h3>
              </div>

              <p className="mt-4 text-[16px] text-slate-700 leading-7">
                To engage in sustainable bio-space activities that reduce carbon
                footprint and protect the environment.
              </p>
            </div>

            {/* Mission */}
            <div className="rounded-2xl bg-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100">
              <div className="flex items-center gap-3">
                <Target className="h-7 w-7 text-sky-600" />
                <h3 className="text-xl font-bold">Mission</h3>
              </div>

              <p className="mt-4 text-[16px] text-slate-700 leading-7">
                To scale up sustainable feedstock collection, operate ethically,
                promote clean energy, and care for community and nature.
              </p>
            </div>
          </div>

          {/* Bottom tags */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <span className="px-4 py-1 bg-slate-100 rounded-full text-sm text-slate-700">
              • Lower carbon footprint
            </span>
            <span className="px-4 py-1 bg-slate-100 rounded-full text-sm text-slate-700">
              • Sustainable bio-feedstock
            </span>
            <span className="px-4 py-1 bg-slate-100 rounded-full text-sm text-slate-700">
              • Community & environmental care
            </span>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
export { About };
