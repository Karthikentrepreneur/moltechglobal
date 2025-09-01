// src/components/Footer.tsx
import React from "react";
import { ChevronUp } from "lucide-react";
import "../styles/marquee.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Global Presence", href: "/global" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const offices = [
  "AUSTRALIA • Suite 5, 7-9 Mallet Road, Tullamarine, VIC 3043 • +61 388205157",
  "INDONESIA • 408, Lina Building, JL.HR Rasuna Said kav B7, Jakarta • +62 815 1038 5581",
  "MALAYSIA - PORTLANG • 18 Jalan Sungai Chandong 12, Pulau Indah, 42000 Pelabuhan Klang • +60 16-985 4705",
  "MALAYSIA - JOHOR • No.19A, Jalan Sagai 6, Taman Pasir Putih, 81700 Pasir Gudang • +60 16-959 4075",
  "SAUDI ARABIA - DAMMAM • 2817 King Faizal Road, 9403-32233 • +966 13 3430003",
  "SINGAPORE • Blk 511 Kampong Bahru Rd, #03-01 Keppel Distripark, 099447 • +65 65140868",
  "THAILAND - BANGKOK • 109 CCT Bldg, Surawong Rd, Bangrak, 10500 • +60 16-985 4705",
  "UAE - DUBAI • Al Qusais Industrial Area 2 • +971 509093357",
  "UK - LONDON • 167-169 Great Portland Street, W1W 5PF • +44 7305 856612",
  "USA - NEW YORK • 33 Wood Ave S, Suite 600, Iselin, NJ 08830 • +1 732 456 6780",
];

// helper: duplicate string list for seamless loop
const buildMarqueeText = (items: string[]) =>
  [...items, ...items].join("     •     ");

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer: React.FC = () => {
  const marqueeText = buildMarqueeText(offices);

  return (
    <footer className="bg-[#0E0E0E] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============ Row 1: About (center) ============ */}
        <div className="py-8 border-b border-white/10 text-center">
          <h4 className="text-xl font-semibold">About Moltech</h4>
          <p className="mt-3 mx-auto max-w-3xl text-white/85 leading-relaxed">
            We source and supply environmentally responsible products that
            reduce carbon footprint. With a global presence and strong ethics,
            we’re committed to performance, transparency, and community impact.
          </p>
        </div>

        {/* ============ Row 2: Quick Links (left) • Address Marquee (center) ============ */}
        <div className="py-8 border-b border-white/10 grid grid-cols-1 gap-6 md:grid-cols-[1fr_minmax(0,2fr)_1fr] items-center">
          {/* Left: Quick Links */}
          <nav className="order-2 md:order-1">
            <h5 className="sr-only">Quick Links</h5>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 md:inline-grid md:grid-cols-1">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/85 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Center: one-row, one-column auto-scrolling address */}
          <div className="order-1 md:order-2 text-center">
            <div
              className="footer-marquee mx-auto w-full max-w-3xl"
              style={{ ["--speed" as any]: "28s" }}
            >
              <div className="footer-marquee-track text-lg font-semibold tracking-wide">
                {marqueeText}
              </div>
            </div>
          </div>

          {/* Right: placeholder (follow us or keep empty) */}
          <div className="order-3 hidden md:flex justify-end">
            {/* Replace with your socials if needed */}
            {/* <div className="text-sm text-white/80">Follow Us</div> */}
          </div>
        </div>

        {/* ============ Row 3: Bottom bar ============ */}
        <div className="py-5 flex items-center justify-between text-sm">
          {/* Left: Back to top */}
          <button
            onClick={scrollTop}
            className="group inline-flex items-center gap-2 text-white/85 hover:text-white transition-colors"
            aria-label="Back to Top"
          >
            <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            <span>Back Top</span>
          </button>

          {/* Center: Copyright */}
          <div className="text-center flex-1">
            <span className="text-white/85">
              © 2025 Moltech. All rights reserved.
            </span>
          </div>

          {/* Right: Spacer (keeps copyright centered) */}
          <div className="w-[96px] md:w-[140px]" aria-hidden />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
