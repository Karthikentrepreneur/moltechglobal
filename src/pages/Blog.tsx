// src/pages/Blog.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, Users, Box, PartyPopper, Handshake, CheckCircle2, Globe, Leaf, Shield } from "lucide-react";

export default function Blog() {
  // You can tweak these if you’d like to surface real metadata later
  const meta = {
    title: "Moltech: Building a Circular Bio-Economy",
    date: "September 2, 2025",
    readTime: "7 min read",
    author: "Moltech Editorial",
  };

  const stats = [
    { icon: Users, value: "5+", label: "Years of Experience" },
    { icon: Box, value: "10+", label: "Products" },
    { icon: PartyPopper, value: "100+", label: "Happy Employees" },
    { icon: Handshake, value: "1000+", label: "Satisfied Clients" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 bg-background">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-5">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Moltech: Building a Circular Bio-Economy
              </h1>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                From sustainable feedstock collection to clean-energy products, here’s how
                Moltech operates with global reach, strong ethics, and measurable impact.
              </p>

              {/* Meta */}
              <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {meta.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {meta.readTime}
                </span>
                <span>By {meta.author}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        <section>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920&auto=format&fit=crop"
                alt="Sustainable operations"
                className="w-full h-[360px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16">
          <div className="max-w-3xl mx-auto px-6 lg:px-0 prose prose-slate md:prose-lg">
            {/* Intro */}
            <p className="lead !text-slate-700">
              Moltech strides in the bio space working on clean initiatives and products that
              drive the circular economy. With a strategic presence across Asia, the Middle
              East, the United Kingdom, and the United States, Moltech is positioned to
              harness cross-continental potential for renewable and sustainable products on a
              global platform.
            </p>

            <p>
              Headquartered in Singapore, Moltech operates renewable business units from
              Malaysia, Thailand, Indonesia, the UAE, the UK, and the USA. As part of a
              larger group active in 15+ countries, Moltech benefits from an allied network
              that strengthens cross-functional collaboration and accelerates expansion.
            </p>

            {/* Global Presence */}
            <h2 id="global-presence">Global Presence & Reach</h2>
            <p>
              Our footprint spans collection hubs, processing sites, and commercial offices
              that enable responsive service and reliable supply. This network allows Moltech
              to support customers across multiple geographies while maintaining consistent
              quality and compliance standards.
            </p>

            {/* Operations & Products */}
            <h2 id="operations">Operations & Products</h2>
            <p>
              Moltech operates collection and processing of feedstock for renewable diesel at
              its own locations, catering to the biodiesel industry. Representative feedstocks
              include <strong>Used Cooking Oil (UCO)</strong>, <strong>Tyre-derived oils</strong>,{" "}
              <strong>Acid oils</strong>, and <strong>POME</strong>. Beyond energy, our Feed
              division delivers specially formulated, vegetable-oil-based feed fats (in both
              liquid and dry forms). For industrial applications, we offer{" "}
              <strong>fatty alcohols</strong>, <strong>fatty acid esters</strong>, and{" "}
              <strong>glycerol</strong>.
            </p>

            {/* Ethics & Quality */}
            <h2 id="ethics">Ethics, Quality & Transparency</h2>
            <p>
              Equipped with a global team of highly trained employees and effective use of
              technology, Moltech operates with high standards of ethics, operational
              excellence, quality control, and transparency. This approach has helped us
              become a reliable partner to organizations around the world.
            </p>

            {/* ISCC Certification */}
            <div className="not-prose my-10 rounded-2xl border border-sky-100 bg-sky-50 p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-sky-700 shrink-0 mt-1" />
                <div>
                  <h3 className="text-slate-900 font-semibold">
                    ISCC Certification (European Union)
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Moltech is certified by{" "}
                    <span className="font-medium">
                      International Sustainability &amp; Carbon Certification (ISCC)
                    </span>
                    . This certification underscores our commitment to traceable, sustainable
                    sourcing and production practices across international markets.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex items-center gap-4"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-sky-50">
                      <Icon className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{s.value}</div>
                      <div className="text-slate-600">{s.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Vision & Mission */}
            <h2 id="vision">Vision</h2>
            <p className="text-slate-700">
              To engage in business and services in the bio-space which contribute to
              reduction in carbon footprint and environmental care.
            </p>

            <h2 id="mission">Mission</h2>
            <ul>
              <li>
                <CheckCircle2 className="inline-block w-4 h-4 mr-2 text-emerald-600" />
                Scale up collection and processing of sustainable feedstock for clean energy
                across continents.
              </li>
              <li>
                <CheckCircle2 className="inline-block w-4 h-4 mr-2 text-emerald-600" />
                Operate with high standards of ethics and good governance.
              </li>
              <li>
                <CheckCircle2 className="inline-block w-4 h-4 mr-2 text-emerald-600" />
                Care for the community and the environment.
              </li>
            </ul>

            {/* Closing */}
            <h2 id="closing">Looking Ahead</h2>
            <p>
              With expanding capabilities and a strong compliance framework, Moltech continues
              to invest in technologies and partnerships that advance a more sustainable,
              transparent, and circular economy.
            </p>
          </div>
        </article>

        {/* CTA Panel */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-emerald-50 to-sky-50 border border-emerald-100 p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="flex items-center gap-4">
                  <Globe className="w-6 h-6 text-emerald-700" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    Join Our Sustainability Journey
                  </h3>
                </div>
                <p className="text-slate-700 lg:ml-auto">
                  Explore how Moltech can support your energy transition goals with certified,
                  reliable, and scalable solutions.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 font-medium"
                >
                  Contact Us
                  <Leaf className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
