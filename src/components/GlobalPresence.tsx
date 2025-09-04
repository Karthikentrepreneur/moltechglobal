import { useState } from "react";
import worldMapBg from "../assets/world-map-bg.jpg";

type Office = {
  label?: string;         // Optional short label like "PORT KLANG" / "JOHOR"
  city: string;
  address: string;
  mapUrl: string;         // Google Maps EMBED URL
};

type Country = {
  name: string;
  code: string;
  x: string;              // pin position (percent)
  y: string;              // pin position (percent)
  offices: Office[];
};

const GlobalPresence = () => {
  const countries: Country[] = [
    {
      name: "Australia",
      code: "AU",
      x: "78%",
      y: "78%",
      offices: [
        {
          label: "Sydney",
          city: "Sydney",
          address:
            "Suite 5, 7-9 Mallet Road, Tullamarine, VIC 3043 • Ph +61 388205157",
          mapUrl:
            "https://www.google.com/maps?q=Suite+5,+7-9+Mallet+Road,+Tullamarine,+VIC+3043&output=embed",
        },
      ],
    },
    {
      name: "Indonesia",
      code: "ID",
      x: "73%",
      y: "68%",
      offices: [
        {
          city: "Jakarta",
          address:
            "408, Lina Building, JL.HR Rasuna Said kav B7, Jakarta",
          mapUrl:
            "https://www.google.com/maps/d/embed?mid=1pph8JzHyVH3jfVQHvjnJW_Q4r1P7_7Q&ehbc=2E312F",
        },
      ],
    },
    {
      name: "Malaysia",
      code: "MY",
      x: "72%",
      y: "63%",
      offices: [
        {
          label: "Port Klang",
          city: "Kuala Lumpur",
          address:
            "PORT KLANG • 18 Jalan Sungai Chandong 12, Pulau Indah, 42000 Pelabuhan Klang",
          // FIXED: keep only the URL from the iframe src
          mapUrl:
            "https://www.google.com/maps/d/embed?mid=1u9qMUpxCJci_kQGPU6ix8Txx15kqVls&ehbc=2E312F",
        },
        {
          label: "Johor",
          city: "Kuala Lumpur",
          address:
            "JOHOR • No.19A, Jalan Sagai 6, Taman Pasir Putih, 81700 Pasir Gudang",
          mapUrl:
            "https://www.google.com/maps/d/embed?mid=14ZjhbWDRjDLKAqDD68HYR6f5AdgHeTM&ehbc=2E312F",
        },
      ],
    },
    {
      name: "Saudi Arabia",
      code: "SA",
      x: "58%",
      y: "45%",
      offices: [
        {
          city: "Riyadh",
          address: "DAMMAM • 2817 King Faizal Road, 9403-32233",
          mapUrl:
            "https://www.google.com/maps/d/embed?mid=1SLpVQBG_WjaUW_xdPO2Hb46HzEFOkUM&ehbc=2E312F",
        },
      ],
    },
    {
      name: "Singapore",
      code: "SG",
      x: "75%",
      y: "65%",
      offices: [
        {
          city: "Singapore",
          address:
            "Blk 511 Kampong Bahru Rd, #03-01 Keppel Distripark, 099447",
          mapUrl:
            "https://www.google.com/maps/d/embed?mid=1xcqb2plXHAHzdoMd2xTrwwKoM2YRDz0&ehbc=2E312F",
        },
      ],
    },
    {
      name: "Thailand",
      code: "BANGKOK",
      x: "70%",
      y: "58%",
      offices: [
        {
          city: "Bangkok",
          address: "109 CCT Bldg, Surawong Rd, Bangrak, 10500",
          mapUrl:
            "https://www.google.com/maps/d/embed?mid=1mLlesIp5IZnlGTf5rHqUasEyDOVAPF4&ehbc=2E312F",
        },
      ],
    },
    {
      name: "UAE",
      code: "DUBAI",
      x: "60%",
      y: "48%",
      offices: [
        {
          city: "Dubai",
          address: "Al Qusais Industrial Area 2",
          mapUrl:
            "https://www.google.com/maps/d/embed?mid=1sQ4baWLtd5AeCMowGQzuYmM3mWj0eMI&ehbc=2E312F",
        },
      ],
    },
    {
      name: "UK",
      code: "LONDON",
      x: "48%",
      y: "32%",
      offices: [
        {
          city: "London",
          address: "167-169 Great Portland Street, W1W 5PF",
          mapUrl:
            "https://www.google.com/maps/d/embed?mid=1YBaDDjJVmNfdeSKMMUrypyoypossW2c&ehbc=2E312F",
        },
      ],
    },
    {
      name: "USA",
      code: "NEW YORK",
      x: "25%",
      y: "40%",
      offices: [
        {
          city: "New York",
          address: "33 Wood Ave S, Suite 600, Iselin, NJ 08830",
          mapUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.1977813157!2d-74.26!3d40.697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890",
        },
      ],
    },
  ];

  // Default: Singapore (index 4)
  const [selectedCountryIdx, setSelectedCountryIdx] = useState(4);
  const [selectedOfficeIdx, setSelectedOfficeIdx] = useState(0);

  const selectedCountry = countries[selectedCountryIdx];
  const selectedOffice = selectedCountry.offices[selectedOfficeIdx];

  const stats = [
    { label: "Countries", value: "15+" },
    { label: "Partners", value: "200+" },
    { label: "Years", value: "15+" },
    { label: "Locations", value: "25+" },
  ];

  const selectCountry = (idx: number) => {
    setSelectedCountryIdx(idx);
    setSelectedOfficeIdx(0); // reset to first office when country changes
  };

  return (
    <section className="section-padding bg-deep-navy text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <img
          src={worldMapBg}
          alt="Global presence world map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/80 via-deep-navy/60 to-deep-navy/80" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="heading-lg text-white">Global Presence</h2>
          <p className="body-lg text-blue-200 max-w-3xl mx-auto">
            Where We Are — Global operations across the Pacific region and beyond
          </p>
        </div>

        {/* Interactive Map (pins) */}
        <div className="relative mb-16">
          <div className="glass-card p-8 relative overflow-hidden">
            <div className="relative h-96 bg-gradient-to-br from-royal-blue/20 to-electric-blue/20 rounded-2xl overflow-hidden">
              {countries.map((country, idx) => (
                <button
                  key={country.name}
                  type="button"
                  onClick={() => selectCountry(idx)}
                  className="absolute group cursor-pointer"
                  style={{ left: country.x, top: country.y }}
                  aria-label={`Select ${country.name}`}
                >
                  <div className="relative">
                    <div className="w-4 h-4 bg-electric-blue rounded-full animate-glow shadow-lg shadow-electric-blue/50" />
                    <div className="absolute inset-0 w-4 h-4 bg-electric-blue rounded-full animate-ping" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="glass-card px-3 py-2 whitespace-nowrap">
                        <p className="text-sm font-semibold text-white">{country.name}</p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">
                {stat.value}
              </div>
              <div className="text-sm text-blue-200 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Countries & Offices */}
        <div className="mt-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Countries List */}
            <div className="lg:col-span-1">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Countries</h3>
                <div className="space-y-3">
                  {countries.map((country, idx) => (
                    <button
                      key={country.name}
                      onClick={() => selectCountry(idx)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        selectedCountryIdx === idx
                          ? "bg-electric-blue text-white shadow-lg"
                          : "bg-white/10 text-blue-200 hover:bg-white/20 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium opacity-70">
                          {country.code}
                        </span>
                        <span className="font-semibold">
                          {country.name.toUpperCase()}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Selected Country Details & Offices */}
            <div className="lg:col-span-2">
              <div className="glass-card p-8">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">
                        {selectedCountry.name}
                      </h3>
                      {/* Active office meta */}
                      <div className="mt-2">
                        <p className="text-sm text-blue-200 uppercase tracking-wider">
                          CITY
                        </p>
                        <p className="text-lg text-white">
                          {selectedOffice.city}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-blue-200 uppercase tracking-wider mb-2">
                      ADDRESS
                    </p>
                    <p className="text-white text-sm leading-relaxed max-w-xs">
                      {selectedOffice.address}
                    </p>
                    {/* Copy button */}
                    <button
                      className="mt-3 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-blue-200 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                      onClick={() => navigator.clipboard?.writeText(selectedOffice.address)}
                      title="Copy address"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Copy</span>
                    </button>
                  </div>
                </div>

                {/* Office selector (only shows when >1 office) */}
                {selectedCountry.offices.length > 1 && (
                  <div className="mb-6 flex flex-wrap gap-3">
                    {selectedCountry.offices.map((office, idx) => {
                      const label = office.label || office.city || `Office ${idx + 1}`;
                      const active = idx === selectedOfficeIdx;
                      return (
                        <button
                          key={label}
                          onClick={() => setSelectedOfficeIdx(idx)}
                          className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                            active
                              ? "bg-electric-blue text-white"
                              : "bg-white/10 text-blue-200 hover:bg-white/20 hover:text-white"
                          }`}
                          title={office.address}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                )}

                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    src={selectedOffice.mapUrl}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                    title={`${selectedCountry.name} - ${selectedOffice.city} Map`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default GlobalPresence;
