// src/components/Footer.tsx
import React from "react";

type Office = {
  title: string;
  addrLines: string[];
  phones?: string[];
  email?: string;
};

const row1: Office[] = [
  {
    title: "AUSTRALIA",
    addrLines: ["Suite 5, 7-9 Mallet Road,", "Tullamarine, Victoria, 3043"],
    phones: ["+61 388205157"],
    email: "janak@moltechglobal.com",
  },
  {
    title: "INDONESIA",
    addrLines: ["408, Lina Building, JL.HR Rasuna Said kav B7, Jakarta"],
    phones: ["+62 815 1038 5581"],
    email: "sourcing@moltechglobal.com",
  },
  {
    title: "MALAYSIA - PORTLANG",
    addrLines: [
      "18 Jalan Sungai Chandong 12, Bdr Armada Putra",
      "Pulau Indah, 42000 Pelabuhan Klang,",
      "Selangor Darul Ehsan, Malaysia",
    ],
    phones: ["+60 16-985 4705"],
    email: "arun@moltechglobal.com",
  },
  {
    title: "MALAYSIA - JOHOR",
    addrLines: [
      "HS(D) 576585 PTD 233430 No.19A, Jalan Sagai 6,",
      "Taman Pasir Putih, 81700 Pasir Gudang, Johor",
    ],
    phones: ["+60 16-959 4075"],
    email: "linda@moltechglobal.com",
  },
  {
    title: "SAUDI ARABIA - DAMMAM",
    addrLines: [
      "2817 King Faizal Road, Dammam 9403-32233,",
      "Kingdom of Saudi Arabia",
    ],
    phones: ["+966 13 3430003"],
    email: "james@moltechglobal.com",
  },
];

const row2: Office[] = [
  {
    title: "SINGAPORE",
    addrLines: [
      "Blk 511 Kampong Bahru Road",
      "#03-01 Keppel Distripark",
      "Singapore 099447",
    ],
    phones: ["+65 65140868"],
    email: "jenny@moltechglobal.com",
  },
  {
    title: "THAILAND - BANGKOK",
    addrLines: [
      "109 CCT Building, 3rd Floor, Rm.3,",
      "Surawong Road, Suriyawongse, Bangrak,",
      "Bangkok 10500",
    ],
    phones: ["+60 16-985 4705"],
    email: "info@moltechglobal.com",
  },
  {
    title: "UAE - DUBAI",
    addrLines: [
      "Plot #2430152, Al Qusais Industrial Area 2,",
      "Dubai, United Arab Emirates",
    ],
    phones: ["+971 509093357"],
    email: "info@moltechglobal.com",
  },
  {
    title: "UK - LONDON",
    addrLines: [
      "167-169 Great Portland Street, 5th Floor,",
      "London, W1W 5PF, United Kingdom",
    ],
    phones: ["+44(0) 7305 856612", "+44(0) 203 393 9508"],
  },
  {
    title: "USA - NEW YORK",
    addrLines: [
      "New Jersey Branch, 33 Wood Avenue South,",
      "Suite 600, Iselin, NJ 08830",
    ],
    phones: ["+1 732 456 6780"],
    email: "info@moltechglobal.com",
  },
];

function OfficeItem({ o }: { o: Office }) {
  return (
    <div className="flex gap-3">
      <span className="mt-1 h-4 w-1 rounded-full bg-[#F47E2A]" aria-hidden />
      <div className="space-y-1">
        <h5 className="text-[13px] font-semibold tracking-wide text-white/95">
          {o.title}
        </h5>
        <p className="text-[12px] leading-snug text-white/80">
          {o.addrLines.join(" ")}
        </p>
        {o.phones?.length ? (
          <p className="text-[12px] leading-snug text-white/75">
            {o.phones.join(" · ")}
          </p>
        ) : null}
        {o.email ? (
          <p className="text-[12px] leading-snug text-white/75">{o.email}</p>
        ) : null}
      </div>
    </div>
  );
}

const Footer = () => {
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

  return (
    <footer className="bg-[#153a59] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ——— Top bar: Slim signup (reduced height) ——— */}
        <div className="flex flex-col items-center justify-between gap-3 border-b border-white/10 py-4 sm:flex-row">
          <p className="text-sm font-medium text-white/90">
            Monthly Sailing Schedule
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full bg-transparent text-[13px] text-white/90 placeholder:text-white/60 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-[#F47E2A] px-3 py-1.5 text-xs font-semibold text-white hover:brightness-110"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* ——— Middle: About + Links (condensed) ——— */}
        <div className="grid grid-cols-1 gap-8 py-6 sm:grid-cols-2">
          <div className="space-y-2">
            <h4 className="text-base font-semibold">About Moltech</h4>
            <p className="text-[13px] leading-relaxed text-white/80">
              We source and supply environmentally friendly products with a reduced
              carbon footprint—operating with ethics and creating positive impact in
              the communities we serve.
            </p>
          </div>

          <div className="sm:ml-auto">
            <h4 className="text-base text-center font-semibold sm:text-left">
              Quick Links
            </h4>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-center sm:text-left">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-block text-[13px] text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ——— Global presence (compact, two rows) ——— */}
        <div className="border-t border-white/10 py-6">
          <h4 className="mb-4 text-center text-base font-semibold">
            Our Global Presence
          </h4>

          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {row1.map((o) => (
              <OfficeItem key={o.title} o={o} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {row2.map((o) => (
              <OfficeItem key={o.title} o={o} />
            ))}
          </div>
        </div>

        {/* ——— Bottom bar ——— */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 py-4 text-[12px] text-white/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Moltech. All rights reserved.</p>
          <p className="text-white/60">
            Designed for performance • Minimal footprint
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
