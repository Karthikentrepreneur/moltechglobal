import React from "react";
import { ChevronUp } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Global Presence", href: "/global" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="py-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Moltech</h4>
            <p className="mt-3 max-w-md text-sm leading-relaxed">
              We source and supply environmentally responsible products that help
              reduce carbon footprint. With a global presence and strong ethics,
              we’re committed to performance, transparency, and community impact.
            </p>
          </div>

          {/* Quick Links */}
          <nav>
            <h5 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Quick Links
            </h5>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 gap-x-4 md:grid-cols-1">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

           {/* Contact */}
          <div>
            <h5 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Contact
            </h5>
            <div className="mt-4 space-y-2 text-sm">
              <a
                href="mailto:info@moltechglobal.com"
                className="hover:text-gray-900 transition-colors"
              >
                info@moltechglobal.com
              </a>
              <p>Mon–Fri, 9:00–18:00 (IST)</p>
            </div>
            <button
              onClick={scrollTop}
              className="mt-4 inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
            >
              <ChevronUp className="h-4 w-4" />
              Back to top
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Moltech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
