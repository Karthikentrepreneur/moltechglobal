// src/components/Footer.tsx
// v2 — MapPin removed from imports and JSX. Address row removed.

import { Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  // Middle column links (2-column list like the reference)
  const quickLinks = [
    "Home",
    "About Us",
    "Our Services",
    "Our Presence",
    "Global Privilege",
    "Contact Us",
    "Careers",
    "Blog",
    "Privacy Policy",
  ];

  // Right column buttons (grid like the reference)
  const downloads = [
    { label: "Android App", href: "#" },
    { label: "iPhone App", href: "#" },
    { label: "Corporate Presentation", href: "#" },
    { label: "Brochure", href: "#" },
    { label: "ICDs Map", href: "#", span: 2 }, // full width on last row
  ];

  return (
    <footer className="bg-[#153a59] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ===== TOP: Newsletter / Schedule Download ===== */}
        <div className="py-8 text-center">
          <h3 className="text-xl md:text-2xl font-semibold">
            Download this month&apos;s Sailing Schedule
          </h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-4 flex max-w-xl items-stretch overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/15 focus-within:ring-white/30"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full bg-transparent px-4 py-3 text-white placeholder:text-white/70 focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap bg-[#F47E2A] px-5 py-3 font-semibold text-white hover:brightness-110"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* ===== MAIN: 3 Columns ===== */}
        <div className="grid grid-cols-1 gap-8 border-t border-white/10 py-12 md:grid-cols-2 lg:grid-cols-3">

          {/* Left: About */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">About Moltech</h4>
            <p className="text-white/85 leading-relaxed">
              We aim to source and supply products that are environmentally friendly and have a reduced carbon footprint.
              We are dedicated to upholding ethical business practices and creating a 
              positive impact on the communities where we operate.
            </p>
          </div>

          {/* Middle: Quick Links (2 columns) */}
          <div className="mx-auto w-full max-w-md">
            <h4 className="text-lg text-center font-semibold">Quick Links</h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-center">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-block text-white/85 hover:text-white transition-colors underline-offset-4 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Useful Downloads (card buttons) */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-right lg:text-left">Useful Downloads</h4>
            <div className="grid grid-cols-2 gap-3">
              {downloads.map((d, i) => (
                <a
                  key={d.label + i}
                  href={d.href}
                  className={`rounded-lg border border-white/15 bg-white/10 px-4 py-5 text-center font-semibold text-white/95 hover:bg-white/15 transition ${
                    d.span === 2 ? "col-span-2" : ""
                  }`}
                >
                  {d.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ===== FOLLOW + CONTACT (no address block) ===== */}
        <div className="space-y-6 pb-12">
          {/* Follow bar */}
          <div className="mx-auto flex max-w-lg items-center justify-center gap-3 rounded-xl bg-white/10 px-5 py-3 ring-1 ring-white/10">
            <span className="font-semibold">Follow Us:</span>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                {/* Using Twitter icon as placeholder if YouTube icon isn’t available */}
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Phone + Email */}
          <div className="flex flex-col items-center justify-center gap-3 text-white/90 md:flex-row">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Telephone: +65 6123 4567</span>
            </div>
            <div className="hidden h-4 w-px bg-white/20 md:block" />
            <a href="mailto:info@moltech.com" className="flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4" />
              <span>E-mail: Info@moltechglobal.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
