import React, { useState } from "react";
import { ChevronUp, Mail, ChevronLeft, ChevronRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Global Presence", href: "/global" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const offices = [
  { country: "AUSTRALIA", address: "Suite 5, 7-9 Mallet Road, Tullamarine, VIC 3043", phone: "+61 388205157" },
  { country: "INDONESIA", address: "408, Lina Building, JL.HR Rasuna Said kav B7, Jakarta", phone: "+62 815 1038 5581" },
  { country: "MALAYSIA - PORTLANG", address: "18 Jalan Sungai Chandong 12, Pulau Indah, 42000 Pelabuhan Klang", phone: "+60 16-985 4705" },
  { country: "MALAYSIA - JOHOR", address: "No.19A, Jalan Sagai 6, Taman Pasir Putih, 81700 Pasir Gudang", phone: "+60 16-959 4075" },
  { country: "SAUDI ARABIA - DAMMAM", address: "2817 King Faizal Road, 9403-32233", phone: "+966 13 3430003" },
  { country: "SINGAPORE", address: "Blk 511 Kampong Bahru Rd, #03-01 Keppel Distripark, 099447", phone: "+65 65140868" },
  { country: "THAILAND - BANGKOK", address: "109 CCT Bldg, Surawong Rd, Bangrak, 10500", phone: "+60 16-985 4705" },
  { country: "UAE - DUBAI", address: "Al Qusais Industrial Area 2", phone: "+971 509093357" },
  { country: "UK - LONDON", address: "167-169 Great Portland Street, W1W 5PF", phone: "+44 7305 856612" },
  { country: "USA - NEW YORK", address: "33 Wood Ave S, Suite 600, Iselin, NJ 08830", phone: "+1 732 456 6780" },
];

const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const GRADIENT_BG = "bg-gradient-to-r from-blue-600 to-blue-400";

const Footer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextOffice = () => {
    setCurrentIndex((prev) => (prev + 1) % offices.length);
  };

  const prevOffice = () => {
    setCurrentIndex((prev) => (prev - 1 + offices.length) % offices.length);
  };

  return (
    <>
      <style>{`
        :root {
          --royal-blue: #2741ff;
          --electric-blue: #2dd4ff;
        }
        .office-chip {
          padding: 2px;
          border-radius: 14px;
          background: linear-gradient(90deg, var(--royal-blue), var(--electric-blue));
          background-size: 200% 100%;
          transition: background-position .6s ease;
        }
        .office-chip__inner {
          border-radius: 12px;
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          padding: 14px 18px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.25);
          transform: translateZ(0);
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .office-chip__title {
          font-weight: 800;
          color: #fff;
          font-size: 13px;
          letter-spacing: .3px;
          margin-bottom: 6px;
          text-transform: uppercase;
        }
        .office-chip__line {
          color: rgba(255,255,255,0.85);
          font-size: 13px;
          line-height: 1.35;
        }
        .office-chip__sub {
          color: rgba(255,255,255,0.7);
          font-size: 12px;
          margin-top: 2px;
        }
      `}</style>

      <footer className="bg-black text-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top divider + arrow */}
          <div className="relative">
            <div className={`mx-auto mt-8 h-[3px] w-full max-w-5xl ${GRADIENT_BG} rounded-full`} />
            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className={`absolute right-0 -top-4 grid h-9 w-9 place-items-center rounded-full ${GRADIENT_BG} shadow-lg transition-transform hover:-translate-y-0.5`}
            >
              <ChevronUp className="h-4 w-4 text-white" />
            </button>
          </div>

          {/* === Main Grid === */}
          <div className="py-10 grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Left: About */}
            <div>
              <img src="/Moltechlogo.png" alt="Moltech Logo" className="h-8 w-auto mb-3" />
              <p className="text-white/80 leading-relaxed text-sm md:text-[15px] max-w-md">
                We source and supply environmentally responsible products that reduce carbon footprint.
                With a global presence and strong ethics, we're committed to performance, transparency, and community impact.
              </p>
            </div>

            {/* Middle: Quick links */}
            <div>
              <h4 className="text-[18px] font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <span className={`inline-block h-2 w-2 rounded-full ${GRADIENT_BG}`} />
                    <a href={item.href} className="text-white/90 hover:text-white transition-colors text-[15px]">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Contact + Offices Slider */}
            <div>
              <h4 className="text-[18px] font-semibold mb-4">Contact</h4>
              <a
                href="mailto:info@moltechglobal.com"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-[15px]"
              >
                <span className={`inline-grid place-items-center ${GRADIENT_BG} rounded-full p-1`}>
                  <Mail className="h-3.5 w-3.5 text-white" />
                </span>
                info@moltechglobal.com
              </a>

              {/* Office Slider */}
              <div className="mt-6 text-center relative">
                <h5 className="text-sm font-semibold mb-3 text-white/80">Global Offices</h5>

                <div className="relative flex items-center justify-center">
                  {/* Left Arrow */}
                  <button
                    onClick={prevOffice}
                    className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  {/* Office card */}
                  <div className="office-card flex justify-center w-full px-8">
                    <div className="office-chip w-full max-w-sm">
                      <div className="office-chip__inner text-left">
                        <div className="office-chip__title">{offices[currentIndex].country}</div>
                        <div className="office-chip__line">{offices[currentIndex].address}</div>
                        <div className="office-chip__sub">{offices[currentIndex].phone}</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Arrow */}
                  <button
                    onClick={nextOffice}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-5 flex flex-col sm:flex-row items-center justify-between text-xs md:text-sm text-white/80 border-t border-white/10">
            <button onClick={scrollTop} className="group inline-flex items-center gap-1 hover:text-white transition-colors">
              <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              <span>Back to Top</span>
            </button>
            <div className="text-center mt-3 sm:mt-0">© 2025 Moltech. All rights reserved.</div>
            <div className="w-[70px] md:w-[100px]" aria-hidden />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
