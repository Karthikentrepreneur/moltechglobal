import React from "react";
import { ChevronUp, Mail } from "lucide-react";

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

const DotsTicker = ({ count = 8, durationMs = 5600 }) => {
  const step = durationMs / count;
  const dots = Array.from({ length: count });

  return (
    <div className="mt-4 flex justify-center">
      <style>{`
        .dots-ticker {
          display: inline-flex;
          gap: 12px;
          align-items: center;
          padding: 4px 6px;
        }
        .dots-ticker__dot {
          width: 9px;
          height: 9px;
          border-radius: 9999px;
          background: #52525b;
          position: relative;
          transform: translateZ(0);
          transition: transform .15s ease;
        }
        .dots-ticker__dot:hover {
          transform: scale(1.12);
        }
        .dots-ticker__dot::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(90deg, #2741ff, #2dd4ff);
          opacity: 0;
          animation: dotSweep ${durationMs}ms linear infinite;
        }
        @keyframes dotSweep {
          0%   { opacity: 1; }
          12%  { opacity: 1; }
          24%  { opacity: 0; }
          100% { opacity: 0; }
        }
        .dots-ticker:hover .dots-ticker__dot::after {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .dots-ticker__dot::after { animation: none; opacity: 0; }
        }
      `}</style>
      <div className="dots-ticker">
        {dots.map((_, i) => (
          <span
            key={i}
            className="dots-ticker__dot"
            style={{
              ['--i' as any]: i,
              animationDelay: `${i * step}ms`
            }}
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <style>{`
        :root {
          --royal-blue: #2741ff;
          --electric-blue: #2dd4ff;
        }
        
        .footer-autoscroll {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding-block: 0.5rem;
        }
        
        .footer-autoscroll__fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 56px;
          pointer-events: none;
          z-index: 2;
        }
        
        .footer-autoscroll__fade--left {
          left: 0;
          background: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
        }
        
        .footer-autoscroll__fade--right {
          right: 0;
          background: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0));
        }
        
        .footer-autoscroll-track {
          display: flex;
          flex-wrap: nowrap;
          gap: 1rem;
          width: max-content;
          will-change: transform;
          animation: footer-scroll-left 60s linear infinite;
        }
        
        .footer-autoscroll:hover .footer-autoscroll-track {
          animation-play-state: paused;
        }
        
        .office-card {
          flex: 0 0 auto;
          min-width: 280px;
        }
        
        @media (min-width: 640px) {
          .office-card { 
            min-width: 340px; 
          }
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
          padding: 12px 14px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.25);
          transform: translateZ(0);
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        
        .office-chip__title {
          font-weight: 800;
          color: #fff;
          font-size: 13px;
          letter-spacing: .3px;
          margin-bottom: 4px;
          text-transform: uppercase;
          transition: color .25s ease, background-size .25s ease, -webkit-text-fill-color .25s ease;
        }
        
        .office-chip__line {
          color: rgba(255,255,255,0.85);
          font-size: 12px;
          line-height: 1.35;
        }
        
        .office-chip__sub {
          color: rgba(255,255,255,0.7);
          font-size: 12px;
          margin-top: 2px;
        }
        
        .office-chip:hover {
          background-position: 100% 0;
          animation: border-shimmer 2.25s linear infinite;
        }
        
        .office-chip__inner:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 28px rgba(0,0,0,0.38), 0 0 0 3px rgba(39,65,255,0.14);
          background: rgba(255,255,255,0.08);
          cursor: default;
        }
        
        .office-chip__inner:hover .office-chip__title {
          background: linear-gradient(90deg, var(--royal-blue), var(--electric-blue));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }
        
        .office-chip__inner:hover .office-chip__line {
          text-decoration: underline;
          text-decoration-color: rgba(255,255,255,0.35);
          text-underline-offset: 2px;
        }
        
        @keyframes border-shimmer {
          0%   { background-position:   0% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes footer-scroll-left {
          0%   { 
            transform: translateX(0); 
          }
          100% { 
            transform: translateX(-50%); 
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .footer-autoscroll-track { 
            animation: none !important; 
            transform: none !important; 
          }
          .office-chip, 
          .office-chip__inner { 
            animation: none !important; 
            transition: none !important; 
          }
        }
      `}</style>
      
      <footer className="bg-black text-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top divider + round arrow */}
          <div className="relative">
            <div className={`mx-auto mt-8 h-[3px] w-full max-w-5xl ${GRADIENT_BG} rounded-full`} />
            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className={`absolute right-0 -top-4 grid h-9 w-9 place-items-center rounded-full ${GRADIENT_BG} shadow-lg transition-transform hover:-translate-y-0.5 focus:outline-none`}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5l-7 7m7-7l7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Main grid */}
          <div className="py-10 grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Left: About + LinkedIn */}
            <div>
              <img src="/Moltechlogo.png" alt="Moltech Logo" className="h-14 w-auto object-contain mb-3" />
              <p className="text-white/80 leading-relaxed text-sm md:text-[15px] max-w-md">
                We source and supply environmentally responsible products that reduce carbon footprint.
                With a global presence and strong ethics, we're committed to performance, transparency, and community impact.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/moltechglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white hover:bg-white/15 transition"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M20.45 20.45h-3.55v-5.6c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.69H9.37V9h3.41v1.56h.05c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.22 2.34 4.22 5.38v6.36zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                  </svg>
                </a>
              </div>
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

            {/* Right: Contact + Global Offices scroller */}
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

              <div className="mt-6">
                <h5 className="text-sm font-semibold mb-2 text-white/80">Global Offices</h5>

                {/* Horizontal marquee with fades + pill cards */}
                <div className="footer-autoscroll">
                  <div className="footer-autoscroll__fade footer-autoscroll__fade--left" />
                  <div className="footer-autoscroll__fade footer-autoscroll__fade--right" />
                  <div className="footer-autoscroll-track">
                    {[...offices, ...offices].map((office, i) => (
                      <div key={i} className="office-card">
                        <div className="office-chip">
                          <div className="office-chip__inner">
                            <div className="office-chip__title">{office.country}</div>
                            <div className="office-chip__line">{office.address}</div>
                            <div className="office-chip__sub">{office.phone}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Classic dot ticker under the marquee */}
                <DotsTicker count={8} durationMs={5600} />
              </div>
            </div>
          </div>

          {/* Bottom bar */}
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
