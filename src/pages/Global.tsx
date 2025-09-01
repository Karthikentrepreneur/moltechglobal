// src/pages/Global.tsx
import React from "react";

interface Office {
  country: string;
  address: string;
}

const offices: Office[] = [
  {
    country: "Singapore",
    address: `Global Enterprises Pte Ltd
101 Cecil Street, #17-10 Tong Eng Building,
Singapore - 069533`,
  },
  {
    country: "India - Chennai",
    address: `OECL Shipping & Logistics Pvt Ltd
No.1A, First Floor, Crown Court,
128 Cathedral Road, Chennai - 600086, India`,
  },
  {
    country: "India - Mumbai",
    address: `OECL Shipping & Logistics Pvt Ltd
2nd Floor, Navrang Bhavan,
123 D.N. Road, Fort, Mumbai - 400001, India`,
  },
  {
    country: "UAE - Dubai",
    address: `OECL Logistics (LLC)
Office 1206, The Citadel Tower,
Business Bay, P.O Box: 118624, Dubai, UAE`,
  },
  {
    country: "Malaysia - Port Klang",
    address: `OECL (Malaysia) SDN BHD
B-5-8, 5th Floor, Block Bougainvillea,
10 Boulevard, Lebuhraya Sprint,
47400 Petaling Jaya, Selangor, Malaysia`,
  },
  {
    country: "Malaysia - Johor",
    address: `OECL (Malaysia) SDN BHD
No. 28, Jalan Molek 2/2,
Taman Molek, 81100 Johor Bahru,
Johor, Malaysia`,
  },
  {
    country: "USA",
    address: `OECL Logistics LLC
30 N Gould St Ste R, Sheridan,
Wyoming 82801, USA`,
  },
  {
    country: "UK",
    address: `OECL UK Ltd
Suite 206, Forum House,
15-18 Lime Street, London, EC3M 7AN, UK`,
  },
  {
    country: "Australia - Sydney",
    address: `OECL Australia Pty Ltd
Level 14, 275 Alfred Street,
North Sydney, NSW 2060, Australia`,
  },
  {
    country: "Australia - Melbourne",
    address: `OECL Australia Pty Ltd
Level 10, 55 Collins Street,
Melbourne, VIC 3000, Australia`,
  },
];

const Global: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Global Presence</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90">
            Connecting businesses worldwide through shipping, logistics,
            technology, and sustainable energy solutions.
          </p>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offices.map((office, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-2xl shadow bg-white hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{office.country}</h3>
              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                {office.address}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Global;
