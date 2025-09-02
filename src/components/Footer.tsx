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
    <footer className="bg-[#153a59] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* About */}
        <div className="py-6 border-b border-white/10 text-center">
          <h4 className="text-lg font-semibold">About Moltech</h4>
          <p className="mt-2 mx-auto max-w-3xl text-white/85 leading-relaxed text-sm md:text-base">
            We source and supply environmentally responsible products that
            reduce carbon footprint. With a global presence and strong ethics,
            we’re committed to performance, transparency, and community impact.
          </p>
        </div>

        {/* Quick Links + Offices + Email */}
        <div className="py-6 border-b border-white/10 grid grid-cols-1 gap-4 md:grid-cols-[1fr_minmax(0,2fr)_1fr] items-center">
          <nav className="order-2 md:order-1">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 md:inline-grid md:grid-cols-1">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs md:text-sm text-white/85 hover:text-[#F47E2A] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="order-1 md:order-2 text-center">
            <div className="footer-autoscroll mx-auto w-full max-w-3xl">
              <div className="footer-autoscroll-track">
                {[...offices, ...offices].map((office, i) => (
                  <div key={i} className="py-3">
                    <div className="text-base md:text-lg font-bold text-[#F47E2A]">
                      {office.country}
                    </div>
                    <div className="text-xs md:text-sm text-white mt-0.5">
                      {office.address}
                    </div>
                    <div className="text-xs md:text-sm text-white/90 mt-0.5">
                      {office.phone}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-3 text-right">
            <a
              href="mailto:info@moltechglobal.com"
              className="text-xs md:text-sm font-medium text-white/85 hover:text-[#F47E2A] transition-colors"
            >
              info@moltechglobal.com
            </a>
          </div>
        </div>

        {/* Back Top + Copyright */}
        <div className="py-4 flex items-center justify-between text-xs md:text-sm">
          <button
            onClick={scrollTop}
            className="group inline-flex items-center gap-1 text-white/85 hover:text-[#F47E2A] transition-colors"
          >
            <ChevronUp className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:-translate-y-0.5" />
            <span>Back Top</span>
          </button>

          <div className="text-center flex-1">
            <span className="text-white/85">
              © 2025 Moltech. All rights reserved.
            </span>
          </div>

          <div className="w-[70px] md:w-[100px]" aria-hidden />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
