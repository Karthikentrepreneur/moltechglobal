// src/components/AddressCarousel.tsx
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin } from "lucide-react";

type Office = {
  country: string;
  city?: string;
  address: string;
  phones?: string[];
  emails?: string[];
};

const OFFICES: Office[] = [
  {
    country: "AUSTRALIA",
    address: "Suite 5, 7-9 Mallet Road, Tullamarine, Victoria, 3043",
    phones: ["+61 388205157"],
    emails: ["janak@moltechglobal.com"],
  },
  {
    country: "INDONESIA",
    city: "Jakarta",
    address: "408, Lina Building, JL.HR Rasuna Said kav B7, Jakarta",
    phones: ["+62 815 1038 5581"],
    emails: ["sourcing@moltechglobal.com"],
  },
  {
    country: "MALAYSIA",
    city: "PORTLANG",
    address:
      "18 Jalan Sungai Chandong 12, Bdr Armada Putra Pulau Indah, 42000 Pelabuhan Klang, Selangor Darul Ehsan, Malaysia.",
    phones: ["+60 16-985 4705"],
    emails: ["arun@moltechglobal.com"],
  },
  {
    country: "MALAYSIA",
    city: "JOHOR",
    address:
      "HS(D) 576585 PTD 233430 No.19A, Jalan Sagai 6, Taman Pasir Putih, 81700 Pasir Gudang, Johor",
    phones: ["+60 16-959 4075"],
    emails: ["linda@moltechglobal.com"],
  },
  {
    country: "SAUDI ARABIA",
    city: "DAMMAN",
    address:
      "2817 King Faizal Road, Dammam 9403-32233, Kingdom of Saudi Arabia.",
    phones: ["+966 13 3430003"],
    emails: ["james@moltechglobal.com"],
  },
  {
    country: "SINGAPORE",
    address: "Blk 511 Kampong Bahru Road, #03-01 Keppel Distripark, Singapore 099447",
    phones: ["+65 65140868"],
    emails: ["jenny@moltechglobal.com"],
  },
  {
    country: "THAILAND",
    city: "BANGKOK",
    address:
      "109 CCT Building, 3rd Floor, Rm.3, Surawong Road, Suriyawongse, Bangrak, Bangkok 10500 109",
    phones: ["+60 16-985 4705"],
    emails: ["info@moltechglobal.com"],
  },
  {
    country: "UAE",
    city: "DUBAI",
    address:
      "Plot #2430152, Al Qusais Industrial Area 2, Dubai, United Arab Emirates.",
    phones: ["+971 509093357"],
    emails: ["info@moltechglobal.com"],
  },
  {
    country: "UK",
    city: "LONDON",
    address:
      "167-169 Great Portland Street, 5th Floor, London, W1W 5PF, United Kingdom.",
    phones: ["+44(0) 7305 856612", "+44(0) 203 393 9508"],
  },
  {
    country: "USA",
    city: "NEW YORK",
    address:
      "New Jersey Branch, 33 Wood Avenue South, Suite 600, Iselin, NJ 08830",
    phones: ["+1 732 456 6780"],
    emails: ["info@moltechglobal.com"],
  },
];

const AUTO_MS = 5000;

function telHref(v: string) {
  return `tel:${v.replace(/[^+\d]/g, "")}`;
}

const AddressCarousel: React.FC<{
  className?: string;
  auto?: boolean;
  intervalMs?: number;
}> = ({ className = "", auto = true, intervalMs = AUTO_MS }) => {
  const [idx, setIdx] = useState(0);
  const total = OFFICES.length;
  const go = (n: number) => setIdx((p) => (p + n + total) % total);
  const goto = (n: number) => setIdx(((n % total) + total) % total);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => go(1), intervalMs);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auto, intervalMs, total]);

  const office = OFFICES[idx];

  return (
    <section
      className={`relative mx-auto w-full max-w-3xl ${className}`}
      aria-label="Company offices carousel"
    >
      {/* Card */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="p-6 sm:p-8">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-sky-700">
            <MapPin className="h-4 w-4" />
            <span>{office.country}</span>
            {office.city ? <span className="text-gray-400">•</span> : null}
            {office.city ? <span className="text-gray-700">{office.city}</span> : null}
          </div>

          <h3 className="text-xl font-bold text-gray-900">Office #{idx + 1} of {total}</h3>

          <p className="mt-3 text-gray-700 leading-relaxed">{office.address}</p>

          {/* Phones */}
          {office.phones && office.phones.length > 0 && (
            <div className="mt-4 space-y-1">
              {office.phones.map((ph) => (
                <a
                  key={ph}
                  href={telHref(ph)}
                  className="flex items-center gap-2 text-sm text-gray-800 hover:text-sky-700"
                >
                  <Phone className="h-4 w-4 text-sky-600" />
                  {ph}
                </a>
              ))}
            </div>
          )}

          {/* Emails */}
          {office.emails && office.emails.length > 0 && (
            <div className="mt-2 space-y-1">
              {office.emails.map((em) => (
                <a
                  key={em}
                  href={`mailto:${em}`}
                  className="flex items-center gap-2 text-sm text-gray-800 hover:text-sky-700"
                >
                  <Mail className="h-4 w-4 text-sky-600" />
                  {em}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-4 py-3">
          <div className="flex items-center gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to office ${i + 1}`}
                onClick={() => goto(i)}
                className={`h-2 w-2 rounded-full transition ${
                  i === idx ? "bg-sky-600" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              aria-label="Previous office"
              onClick={() => go(-1)}
              className="grid h-9 w-9 place-items-center rounded-full border border-gray-300 bg-white hover:bg-gray-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Next office"
              onClick={() => go(1)}
              className="grid h-9 w-9 place-items-center rounded-full border border-gray-300 bg-white hover:bg-gray-100"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressCarousel;
