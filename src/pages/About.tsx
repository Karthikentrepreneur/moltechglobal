// src/pages/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <main className="pt-20 min-h-screen bg-gray-50">
      <section className="mx-auto w-full max-w-7xl px-6 py-10">
        {/* White content card so text is always visible */}
        <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Us - Chemical Solutions for Sustainable Industries
          </h1>

          {/* Overview */}
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Moltech strides in the bio space working on clean initiatives and products
              that drives the circular economy. With its strategic presence in Asia, Middle
              East, United Kingdom and United States of America, Moltech is positioned to
              cater and harness cross continental potential of renewable and sustainable
              products on a global platform.
            </p>
            <p>
              Headquartered in Singapore, Moltech operates its renewable business units
              from Malaysia, Thailand, Indonesia, UAE, UK and USA. Being part of a larger
              group with it's presence in more than 15 countries, Moltech takes further
              leverage of cross functional support from its allied offices which makes its
              network more robust and potential to expand.
            </p>
            <p>
              Moltech operates collection and processing of feedstock for renewable diesel
              at its own locations catering to the biodiesel industry. Products like Used
              cooking oil, Tyre derived oils, Acid oils and POME are few of them. The Feed
              division works on vegetable oil based specially formulated feed fats both
              liquid and dry forms. The industrial application sector is catered through
              products like Fatty alcohols, Fatty acid esters and glycerol.
            </p>
            <p>
              Equipped with a global team of highly trained employees and with effective
              use of technology, Moltech operates with high standards of ethics, operational
              excellence, quality control and transparency which paved the way for Moltech
              to become one of the most reliable partners on a global scale.
            </p>
            <p className="font-medium text-gray-900">
              Moltech is certified by International Sustainability &amp; Carbon
              Certification, European Union.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: "5+", label: "Years of Experience" },
              { value: "10+", label: "Products" },
              { value: "100+", label: "Happy Employees" },
              { value: "1000+", label: "Satisfied Clients" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center"
              >
                <div className="text-3xl font-extrabold text-gray-900">{s.value}</div>
                <div className="mt-1 text-sm text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Vision & Mission */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900">Vision</h2>
              <p className="mt-3 text-gray-700">
                To engage in business and services in the bio-space which contribute to
                reduction in carbon footprint and environmental care
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900">Mission</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  To scale up the collection and processing of sustainable feedstock for
                  production of clean energy across different continents.
                </li>
                <li>
                  To operate businesses with high standards of ethics and good governance .
                </li>
                <li>To care about the community and the environment .</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
export { About };
