import React, { useState, useEffect } from "react";
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
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [paused, setPaused] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % offices.length);
        setFade(true);
      }, 350);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused]);

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % offices.length);
      setFade(true);
    }, 300);
  };

  const prev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + offices.length) % offices.length);
      setFade(true);
    }, 300);
  };

  return (
    <>
      <style>{`
        :root {
          --royal-blue: #2741ff;
          --electric-blue: #2dd4ff;
        }

        .office-card {
          transition: all 0.5s ease;
          opacity: 0;
          transform: translateY(10px);
        }
        .office-card.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .office-chip {
          padding: 2px;
          border-radius: 14px;
          background: linear-gradient(90deg, var(--royal-blue), var(--electric-blue));
        }

        .office-chip__inner {
          border-radius: 12px;
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(8px);
          padding: 16px 18px;
          box-shadow: 0 8px 22px rgba(0,0,0,0.25);
        }

        .office-chip__title {
          font-weight: 800;
          color: #fff;
          font-size: 13px;
          margin-bottom: 6px;
          text-transform: uppercase;
        }

        .office-chip__line {
          color: rgba(255,255,255,0.9);
          font-size: 13px;
          line-height: 1.5;
        }

        .office-chip__sub {
          color: rgba(255,255,255,0.75);
          font-size: 12px;
          margin-top: 3px;
        }
      `}</style>

      <footer className="bg-black text-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top divider */}
          <div className="relative">
            <div className={`mx-auto mt-8 h-[3px] w-full max-w-5xl ${GRADIENT_BG} rounded-full`} />
            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className={`absolute right-0 -top-4 grid h-9 w-9 place-items-center rounded-full ${GRADIENT_BG} shadow-lg hover:-translate-y-0.5 transition-transform`}
            >
              <ChevronUp className="h-4 w-4 text-white" />
            </button>
          </div>

          {/* === Main Footer Content === */}
          <div className="py-10 grid grid-cols-1 gap-10 md:grid-cols-3 items-start">
            {/* Left Column - Logo + About */}
            <div className="flex flex-col justify-start">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/Moltechlogo.png"
                  alt="Moltech Logo"
                  className="h-10 w-auto object-contain drop-shadow-[0_0_10px_rgba(45,212,255,0.3)]"
                />
              </div>
              <p className="text-white/80 leading-relaxed text-sm md:text-[15px] max-w-md">
                We source and supply environmentally responsible products that reduce carbon footprint.
                With a global presence and strong ethics, we're committed to performance, transparency, and community impact.
              </p>
            </div>

            {/* Middle Column - Quick Links */}
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

            {/* Right Column - Contact + LinkedIn + Office Scroll */}
            <div className="flex flex-col justify-start">
              <h4 className="text-[18px] font-semibold mb-4">Contact</h4>

              {/* Email */}
              <a
                href="mailto:info@moltechglobal.com"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-[15px]"
              >
                <span className={`inline-grid place-items-center ${GRADIENT_BG} rounded-full p-1`}>
                  <Mail className="h-3.5 w-3.5 text-white" />
                </span>
                info@moltechglobal.com
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/moltechglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-[15px]"
              >
                <span className={`inline-grid place-items-center ${GRADIENT_BG} rounded-full p-1`}>
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current text-white">
                    <path d="M20.45 20.45h-3.55v-5.6c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.69H9.37V9h3.41v1.56h.05c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.22 2.34 4.22 5.38v6.36zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                  </svg>
                </span>
                LinkedIn
              </a>

              {/* Auto-scrolling Global Offices */}
              <h5 className="text-sm font-semibold mt-6 mb-3 text-white/80">Global Offices</h5>
              <div
                className="relative flex items-center justify-center"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <button
                  onClick={prev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white transition"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div
                  className={`office-card w-full max-w-sm mx-auto ${
                    fade ? "fade-in opacity-100" : "opacity-0 translate-y-2"
                  }`}
                >
                  <div className="office-chip">
                    <div className="office-chip__inner text-left">
                      <div className="office-chip__title">{offices[index].country}</div>
                      <div className="office-chip__line">{offices[index].address}</div>
                      <div className="office-chip__sub">{offices[index].phone}</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={next}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white transition"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
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
