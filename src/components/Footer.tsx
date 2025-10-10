import React from "react";
import { ChevronUp, Mail, ChevronRight } from "lucide-react";
import "../styles/autoscroll.css";

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


const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Top thin gold divider + round accent button */}
        <div className="relative">
          <div className={`mx-auto mt-8 h-[3px] w-full max-w-5xl ${GOLD_BG} rounded-full`} />
          <div
            className={`absolute right-0 -top-4 grid h-9 w-9 place-items-center rounded-full ${GOLD_BG} shadow-lg`}
            aria-hidden
          >
            <ChevronRight className="h-4 w-4 text-black" />
          </div>
        </div>

        {/* Main three-column section */}
        <div className="py-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* LEFT: Logo + about */}
          <div>
            <img
              src="/Moltechlogo.png"
              alt="Moltech Logo"
              className="h-14 w-auto object-contain mb-3"
            />
            <p className="text-white/80 leading-relaxed text-sm md:text-[15px] max-w-md">
              We source and supply environmentally responsible products that reduce carbon footprint.
              With a global presence and strong ethics, we’re committed to performance,
              transparency, and community impact.
            </p>

            {/* Social icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white hover:bg-white/15 transition"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white hover:bg-white/15 transition"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M20.45 20.45h-3.55v-5.6c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.69H9.37V9h3.41v1.56h.05c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.22 2.34 4.22 5.38v6.36zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>
            </div>
          </div>

          {/* MIDDLE: Quick links */}
          <div>
            <h4 className="text-[18px] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className={`inline-block h-2 w-2 rounded-full ${GOLD_BG}`} />
                  <a
                    href={item.href}
                    className="text-white/90 hover:text-white transition-colors text-[15px]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Contact + Offices */}
          <div>
            <h4 className="text-[18px] font-semibold mb-4">Contact</h4>
            <a
              href="mailto:info@moltechglobal.com"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-[15px]"
            >
              <Mail className={`${GOLD} h-4 w-4`} />
              info@moltechglobal.com
            </a>

            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2 text-white/80">Global Offices</h5>
              <div className="footer-autoscroll max-h-48 overflow-hidden">
                <div className="footer-autoscroll-track">
                  {[...offices, ...offices].map((office, i) => (
                    <div key={i} className="py-2">
                      <div className={`text-[13px] font-bold ${GOLD}`}>
                        {office.country}
                      </div>
                      <div className="text-[12px] text-white/80">
                        {office.address}
                      </div>
                      <div className="text-[12px] text-white/70">
                        {office.phone}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Removed dotted divider section */}

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between text-xs md:text-sm text-white/80 border-t border-white/10">
          <button
            onClick={scrollTop}
            className="group inline-flex items-center gap-1 hover:text-white transition-colors"
          >
            <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            <span>Back to Top</span>
          </button>

          <div className="text-center mt-3 sm:mt-0">
            © 2025 Moltech. All rights reserved.
          </div>

          <div className="w-[70px] md:w-[100px]" aria-hidden />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
