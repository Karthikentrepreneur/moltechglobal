// src/components/Footer.tsx
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

// instead of one long string per office, break into address/phone/email lines
const officeLines = [
  "148, Narayanaguru Road, Saibaba Colony, Coimbatore.",
  "+91 98651 20692 / +91 99441 57745",
  "fieldapobyts@gmail.com",
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

        {/* ===== Row 2: Quick Links + Auto-scroll Info ===== */}
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

          {/* Center: Auto-scroll lines (address, phone, email) */}
          <div className="order-1 md:order-2 text-center">
            <div className="footer-autoscroll mx-auto w-full max-w-xl">
              <div className="footer-autoscroll-track">
                {[...officeLines, ...officeLines].map((line, i) => (
                  <div
                    key={i}
                    className="text-sm md:text-base font-medium py-1 text-[#F47E2A]"
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: empty or socials */}
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
