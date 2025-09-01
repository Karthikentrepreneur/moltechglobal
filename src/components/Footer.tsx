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

// ✅ Office list with country, address, phone
const offices = [
  {
    country: "AUSTRALIA",
    address: "Suite 5, 7-9 Mallet Road, Tullamarine, VIC 3043",
    phone: "+61 388205157",
  },
  {
    country: "INDONESIA",
    address: "408, Lina Building, JL.HR Rasuna Said kav B7, Jakarta",
    phone: "+62 815 1038 5581",
  },
  {
    country: "MALAYSIA - PORTLANG",
    address: "18 Jalan Sungai Chandong 12, Pulau Indah, 42000 Pelabuhan Klang",
    phone: "+60 16-985 4705",
  },
  {
    country: "MALAYSIA - JOHOR",
    address: "No.19A, Jalan Sagai 6, Taman Pasir Putih, 81700 Pasir Gudang",
    phone: "+60 16-959 4075",
  },
  {
    country: "SAUDI ARABIA - DAMMAM",
    address: "2817 King Faizal Road, 9403-32233",
    phone: "+966 13 3430003",
  },
  {
    country: "SINGAPORE",
    address: "Blk 511 Kampong Bahru Rd, #03-01 Keppel Distripark, 099447",
    phone: "+65 65140868",
  },
  {
    country: "THAILAND - BANGKOK",
    address: "109 CCT Bldg, Surawong Rd, Bangrak, 10500",
    phone: "+60 16-985 4705",
  },
  {
    country: "UAE - DUBAI",
    address: "Al Qusais Industrial Area 2",
    phone: "+971 509093357",
  },
  {
    country: "UK - LONDON",
    address: "167-169 Great Portland Street, W1W 5PF",
    phone: "+44 7305 856612",
  },
  {
    country: "USA - NEW YORK",
    address: "33 Wood Ave S, Suite 600, Iselin, NJ 08830",
    phone: "+1 732 456 6780",
  },
];

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#153a59] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===== Row 1: About ===== */}
        <div className="py-8 border-b border-white/10 text-center">
          <h4 className="text-xl font-semibold">About Moltech</h4>
          <p className="mt-3 mx-auto max-w-3xl text-white/85 leading-relaxed">
            We source and supply environmentally responsible products that
            reduce carbon footprint. With a global presence and strong ethics,
            we’re committed to performance, transparency, and community impact.
          </p>
        </div>

        {/* ===== Row 2: Quick Links + Auto-scroll Offices ===== */}
        <div className="py-8 border-b border-white/10 grid grid-cols-1 gap-6 md:grid-cols-[1fr_minmax(0,2fr)_1fr] items-center">
          {/* Left: Quick Links */}
          <nav className="order-2 md:order-1">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 md:inline-grid md:grid-cols-1">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/85 hover:text-[#F47E2A] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Center: Auto-scroll office blocks */}
          <div className="order-1 md:order-2 text-center">
            <div className="footer-autoscroll mx-auto w-full max-w-3xl">
              <div className="footer-autoscroll-track">
                {[...offices, ...offices].map((office, i) => (
                  <div key={i} className="py-6">
                    <div className="text-lg md:text-xl font-bold text-[#F47E2A]">
                      {office.country}
                    </div>
                    <div className="text-sm md:text-base text-white mt-1">
                      {office.address}
                    </div>
                    <div className="text-sm md:text-base text-white/90 mt-1">
                      {office.phone}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: placeholder */}
          <div className="order-3 hidden md:flex justify-end"></div>
        </div>

        {/* ===== Row 3: Back Top + Copyright ===== */}
        <div className="py-5 flex items-center justify-between text-sm">
          <button
            onClick={scrollTop}
            className="group inline-flex items-center gap-2 text-white/85 hover:text-[#F47E2A] transition-colors"
          >
            <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            <span>Back Top</span>
          </button>

          <div className="text-center flex-1">
            <span className="text-white/85">
              © 2025 Moltech. All rights reserved.
            </span>
          </div>

          <div className="w-[96px] md:w-[140px]" aria-hidden />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
