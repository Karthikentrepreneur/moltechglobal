import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

/* ========= Types ========= */
type Office = {
  city: string;
  officeLabel: string; // e.g., "Melbourne Office"
  address: string;
  phones?: string[];
  email?: string;
};

type Country = {
  id: string;
  name: string;
  flagEmoji: string;
  offices: Office[];
};

/* ========= Demo Data (replace with your own as needed) ========= */
const DATA: Country[] = [
  {
    id: "australia",
    name: "Australia",
    flagEmoji: "🇦🇺",
    offices: [
      {
        city: "Melbourne",
        officeLabel: "Melbourne Office",
        address:
          "Suite 5, 7-9 Mallet Road, Tullamarine, Victoria, 3043",
        phones: ["+61 432254969", "+61 388205157"],
        email: "info@gglaustralia.com",
      },
    ],
  },
  { id: "china", name: "China", flagEmoji: "🇨🇳", offices: [] },
  { id: "india", name: "India", flagEmoji: "🇮🇳", offices: [] },
  { id: "indonesia", name: "Indonesia", flagEmoji: "🇮🇩", offices: [] },
  { id: "malaysia", name: "Malaysia", flagEmoji: "🇲🇾", offices: [] },
  { id: "myanmar", name: "Myanmar", flagEmoji: "🇲🇲", offices: [] },
  { id: "qatar", name: "Qatar", flagEmoji: "🇶🇦", offices: [] },
  { id: "saudi", name: "Saudi Arabia", flagEmoji: "🇸🇦", offices: [] },
  { id: "singapore", name: "Singapore", flagEmoji: "🇸🇬", offices: [] },
];

/* ========= Component ========= */
export default function ContactSidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [openCountryId, setOpenCountryId] = useState<string>("australia");
  const [openCityKey, setOpenCityKey] = useState<string>("australia|Melbourne");

  if (!isOpen) return null;

  return (
    <div className="w-full">
      {/* Card container matching screenshot */}
      <div className="rounded-xl border border-red-200 bg-white shadow-sm overflow-hidden">
        {/* Header bar (red) */}
        <div className="bg-red-600 text-white px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              {/* simple globe dot */}
              <span className="block h-2 w-2 rounded-full bg-white" />
            </span>
            <h2 className="font-semibold">Global Locations</h2>
          </div>
        </div>

        <div className="p-4 space-y-3">
          {DATA.map((country) => {
            const isOpenCountry = openCountryId === country.id;
            return (
              <div
                key={country.id}
                className="rounded-lg border border-red-200"
              >
                {/* Country row */}
                <button
                  onClick={() =>
                    setOpenCountryId((cur) =>
                      cur === country.id ? "" : country.id
                    )
                  }
                  className="flex w-full items-center justify-between px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{country.flagEmoji}</span>
                    <span className="font-semibold text-slate-800">
                      {country.name}
                    </span>
                  </div>
                  {isOpenCountry ? (
                    <ChevronDown className="h-5 w-5 text-slate-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-slate-500" />
                  )}
                </button>

                {/* Country body */}
                {isOpenCountry && (
                  <div className="px-3 pb-3">
                    {/* Cities list */}
                    {country.offices.length > 0 ? (
                      country.offices.map((office) => {
                        const key = `${country.id}|${office.city}`;
                        const cityOpen = openCityKey === key;

                        return (
                          <div key={key} className="mt-2">
                            {/* City pill (light red background, right arrow) */}
                            <button
                              onClick={() =>
                                setOpenCityKey((cur) =>
                                  cur === key ? "" : key
                                )
                              }
                              className="flex w-full items-center justify-between rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-left"
                            >
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-red-500" />
                                <span className="text-sm text-slate-800">
                                  {office.city}
                                </span>
                              </div>
                              <ChevronRight className="h-4 w-4 text-red-400" />
                            </button>

                            {/* Office card (red border, red icons) */}
                            {cityOpen && (
                              <div className="mt-2 rounded-lg border border-red-200 bg-white">
                                <div className="p-4">
                                  {/* Title */}
                                  <h3 className="text-sm font-semibold text-red-600">
                                    {office.officeLabel}
                                  </h3>

                                  <div className="mt-3 space-y-2 text-sm">
                                    <div className="flex items-start gap-2 text-slate-800">
                                      <MapPin className="mt-0.5 h-4 w-4 text-red-500" />
                                      <span>{office.address}</span>
                                    </div>

                                    {office.phones && office.phones.length > 0 && (
                                      <div className="flex items-start gap-2 text-slate-800">
                                        <Phone className="mt-0.5 h-4 w-4 text-red-500" />
                                        <div className="space-y-0.5">
                                          {office.phones.map((ph) => (
                                            <div key={ph}>Tel: {ph}</div>
                                          ))}
                                        </div>
                                      </div>
                                    )}

                                    {office.email && (
                                      <div className="flex items-start gap-2">
                                        <Mail className="mt-0.5 h-4 w-4 text-red-500" />
                                        <a
                                          className="text-red-600 underline underline-offset-2"
                                          href={`mailto:${office.email}`}
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          {office.email}
                                        </a>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })
                    ) : (
                      <div className="mt-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-slate-700">
                        Details coming soon
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer (close button for mobile parity if you want it) */}
        <div className="px-4 py-3">
          <button
            onClick={onClose}
            className="w-full rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
