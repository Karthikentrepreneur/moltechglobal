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

function OfficeCard({ o }: { o: Office }) {
  return (
    <div className="min-w-[220px] rounded-r-lg border-l-2 border-[#F47E2A] bg-white/5 p-3">
      <h5 className="mb-1 font-semibold text-white">{o.title}</h5>
      <p className="mb-1 text-xs text-white/85 leading-snug">
        {o.addrLines.map((line, i) => (
          <span key={i}>
            {line}
            {i < o.addrLines.length - 1 && <><br /></>}
          </span>
        ))}
      </p>
      {o.phones && (
        <p className="mb-1 text-xs text-white/85 leading-snug">
          {o.phones.join(" / ")}
        </p>
      )}
      {o.email && <p className="text-xs text-white/85">{o.email}</p>}
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ===== TOP: Newsletter / Schedule Download ===== */}
        <div className="py-6 text-center">
          <h3 className="text-lg md:text-xl font-semibold">
            Download this month&apos;s Sailing Schedule
          </h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-3 flex max-w-md items-stretch overflow-hidden rounded-full bg-white/10 ring-1 ring-white/15 focus-within:ring-white/30"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap bg-[#F47E2A] px-4 py-2 text-sm font-semibold text-white hover:brightness-110"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* ===== MAIN: About + Quick Links ===== */}
        <div className="grid grid-cols-1 gap-6 border-t border-white/10 py-8 md:grid-cols-2">
          <div className="space-y-2">
            <h4 className="text-base font-semibold">About Moltech</h4>
            <p className="text-sm leading-relaxed text-white/80">
              We aim to source and supply products that are environmentally friendly and have a reduced carbon footprint.
              We are dedicated to upholding ethical business practices and creating a
              positive impact on the communities where we operate.
            </p>
          </div>

          <div className="mx-auto w-full max-w-md">
            <h4 className="text-center text-base font-semibold">Quick Links</h4>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-center">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-block text-sm text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ===== GLOBAL OFFICES (Marquee Style) ===== */}
        <div className="border-t border-white/10 py-6 overflow-hidden">
          <div className="mb-4 text-center">
            <h4 className="text-lg md:text-xl font-semibold">Our Global Presence</h4>
          </div>

          {/* Row 1 → scrolls right */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee-right gap-4 w-max">
              {[...row1, ...row1].map((o, i) => (
                <OfficeCard key={`${o.title}-${i}`} o={o} />
              ))}
            </div>
          </div>

          {/* Row 2 → scrolls left */}
          <div className="mt-4 overflow-hidden">
            <div className="flex animate-marquee-left gap-4 w-max">
              {[...row2, ...row2].map((o, i) => (
                <OfficeCard key={`${o.title}-${i}`} o={o} />
              ))}
            </div>
          </div>
        </div>

        {/* ===== Bottom bar ===== */}
        <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Moltech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
