import React from "react";
import { ChevronUp } from "lucide-react";
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

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- TOP SECTION: Logo & Description ---------- */}
        <div className="py-10 border-b border-white/10 text-center">
          <img
            src="/Moltechlogo.png"
            alt="Moltech Logo"
            className="mx-auto h-12 md:h-14 w-auto object-contain"
          />
          <p className="mt-4 mx-auto max-w-3xl text-white/80 leading-relaxed text-sm md:text-base">
            We source and supply environmentally responsible products that
            reduce carbon footprint. With a global presence and strong ethics,
            we’re committed to performance, transparency, and community impact.
          </p>
        </div>

        {/* ---------- MIDDLE SECTION: Quick Links + Offices + Email ---------- */}
        <div className="py-10 border-b border-white/10 grid grid-cols-1 gap-6 md:grid-cols-[1fr_minmax(0,2fr)_1fr] items-start">
          {/* Quick Links */}
          <nav className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/80 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Auto-Scrolling Global Offices */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-3 text-white">Global Offices</h4>
            <div className="footer-autoscroll mx-auto w-full max-w-3xl">
              <div className="footer-autoscroll-track">
                {[...offices, ...offices].map((office, i) => (
                  <div key={i} className="py-3">
                    <div className="text-base md:text-lg font-bold text-emerald-400">
                      {office.country}
                    </div>
                    <div className="text-xs md:text-sm text-white mt-0.5">
                      {office.address}
                    </div>
                    <div className="text-xs md:text-sm text-white/80 mt-0.5">
                      {office.phone}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Email */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-3 text-white">Contact</h4>
            <a
              href="mailto:info@moltechglobal.com"
              className="text-sm font-medium text-white/80 hover:text-emerald-400 transition-colors duration-200"
            >
              info@moltechglobal.com
            </a>
          </div>
        </div>

        {/* ---------- BOTTOM SECTION: Back to Top + Copyright ---------- */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between text-xs md:text-sm text-white/80">
          <button
            onClick={scrollTop}
            className="group inline-flex items-center gap-1 hover:text-emerald-400 transition-colors"
          >
            <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            <span>Back to Top</span>
          </button>

          <div className="text-center mt-3 sm:mt-0">
            <span>© 2025 Moltech. All rights reserved.</span>
          </div>

          <div className="w-[70px] md:w-[100px]" aria-hidden />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
