// src/pages/About.tsx
import React from "react";
import { Award, Globe2, Recycle, CheckCircle, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const About: React.FC = () => {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="mx-auto w-full max-w-7xl px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          About Us — Chemical Solutions for Sustainable Industries
        </h1>
        <p className="mt-3 max-w-4xl text-white/80">
          Moltech strides in the bio space working on clean initiatives and products that
          drives the circular economy. With its strategic presence in Asia, Middle East,
          United Kingdom and United States of America, Moltech is positioned to cater and
          harness cross continental potential of renewable and sustainable products on a
          global platform.
        </p>
      </section>

      {/* Company Overview */}
      <section className="mx-auto w-full max-w-7xl px-6 py-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3 text-white">
              <Globe2 className="h-5 w-5 text-emerald-300" />
              <h2 className="text-xl font-semibold">Global Operations</h2>
            </div>
            <p className="mt-3 text-white/80">
              Headquartered in Singapore, Moltech operates its renewable business units
              from Malaysia, Thailand, Indonesia, UAE, UK and USA. Being part of a larger
              group with its presence in more than 15 countries, Moltech takes further
              leverage of cross functional support from its allied offices which makes
              its network more robust and potential to expand.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3 text-white">
              <Recycle className="h-5 w-5 text-emerald-300" />
              <h2 className="text-xl font-semibold">Renewable Feedstock & Products</h2>
            </div>
            <p className="mt-3 text-white/80">
              Moltech operates collection and processing of feedstock for renewable diesel
              at its own locations catering to the biodiesel industry. Products like Used
              Cooking Oil (UCO), Tyre derived oils (TDO), Acid oils and POME are few of them.
              The Feed division works on vegetable oil based specially formulated feed fats
              both liquid and dry forms. The industrial application sector is catered through
              products like Fatty alcohols, Fatty acid esters and glycerol.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3 text-white">
            <Leaf className="h-5 w-5 text-emerald-300" />
            <h2 className="text-xl font-semibold">Standards & Culture</h2>
          </div>
          <p className="mt-3 text-white/80">
            Equipped with a global team of highly trained employees and with effective use
            of technology, Moltech operates with high standards of ethics, operational
            excellence, quality control and transparency which paved the way for Moltech to
            become one of the most reliable partners on a global scale.
          </p>

          <div className="mt-4 flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
            <Award className="mt-0.5 h-5 w-5 text-emerald-300" />
            <p className="text-white/85">
              <span className="font-semibold">Certification:</span> Moltech is certified by
              International Sustainability &amp; Carbon Certification (ISCC), European Union.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "Years of Experience", value: "5+" },
            { label: "Products", value: "10+" },
            { label: "Happy Employees", value: "100+" },
            { label: "Satisfied Clients", value: "1000+" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="text-3xl font-extrabold text-white">{s.value}</div>
              <div className="mt-1 text-sm text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Vision</h3>
            <p className="mt-3 text-white/80">
              To engage in business and services in the bio-space which contribute to
              reduction in carbon footprint and environmental care
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Mission</h3>
            <ul className="mt-3 space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-300" />
                <span>
                  To scale up the collection and processing of sustainable feedstock for
                  production of clean energy across different continents.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-300" />
                <span>
                  To operate businesses with high standards of ethics and good governance .
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-300" />
                <span>To care about the community and the environment .</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Optional CTA */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button className="bg-emerald-500 hover:bg-emerald-400">Explore Products</Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Contact Us
          </Button>
        </div>
      </section>
    </main>
  );
};

export default About;
export { About };
