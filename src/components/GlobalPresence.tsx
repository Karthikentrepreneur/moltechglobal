// src/components/GlobalPresence.tsx
import { useEffect, useState } from "react";
import { MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

/* ---------- Types ---------- */
type Office = {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  image: string;
};

/* ---------- Card Component ---------- */
const OfficeCard = ({
  office,
  isAnimated = false,
}: {
  office: Office;
  isAnimated?: boolean;
}) => (
  <div
    className={[
      "bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 border border-gray-200",
      "hover:shadow-xl hover:-translate-y-1 h-full flex flex-col",
      isAnimated ? "transform" : "",
    ].join(" ")}
  >
    <div className="relative h-48">
      <img
        src={office.image}
        alt={`${office.city} office location`}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = "/fallback-office.jpg";
        }}
      />
    </div>

    <div className="p-6 flex-1 flex flex-col text-gray-800">
      <h3 className="text-xl font-bold mb-1">{office.city}</h3>
      <p className="text-blue-600 text-sm mb-3 font-medium">{office.country}</p>
      <p className="text-gray-700 leading-relaxed mb-6 flex-1">
        {office.description}
      </p>

      <div className="mt-auto space-y-3 text-sm">
        <div className="flex items-start text-gray-600">
          <MapPin className="w-4 h-4 mr-2 text-blue-500 mt-0.5" />
          <span>{office.address}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Phone className="w-4 h-4 mr-2 text-blue-500" />
          <span>{office.phone}</span>
        </div>
      </div>
    </div>
  </div>
);

/* ---------- Main Component ---------- */
export default function GlobalPresence() {
  const [currentMalaysianOffice, setCurrentMalaysianOffice] = useState(0);

  const commonEmail = "info@moltechglobal.com";

  const malaysianOffices: Office[] = [
    {
      city: "Port Klang",
      country: "Malaysia",
      address:
        "18 Jalan Sungai Chandong 12, Bdr Armada Putra Pulau Indah, 42000 Pelabuhan Klang, Selangor Darul Ehsan, Malaysia",
      phone: "+60 16-985 4705",
      email: commonEmail,
      description: "Strategic hub for Malaysian logistics and supply chain.",
      image: "/malasyia.avif",
    },
  ];

  const otherOffices: Office[] = [
    {
      city: "Johor",
      country: "Malaysia",
      address:
        "HS(D) 576585 PTD 233430, No.19A, Jalan Sagai 6, Taman Pasir Putih, 81700 Pasir Gudang, Johor",
      phone: "+60 16-959 4075",
      email: commonEmail,
      description: "Supporting industrial clients across Johor region.",
      image: "/JOHOR.png",
    },
    {
      city: "Jakarta",
      country: "Indonesia",
      address: "408, Lina Building, JL. HR Rasuna Said kav B7, Jakarta",
      phone: "+62 815 1038 5581",
      email: commonEmail,
      description: "Key Southeast Asia operations office.",
      image: "/indonesia.webp",
    },
    {
      city: "Dammam",
      country: "Saudi Arabia",
      address:
        "2817 King Faizal Road, Dammam 9403-32233, Kingdom of Saudi Arabia",
      phone: "+966 13 3430003",
      email: commonEmail,
      description: "Serving Middle East operations and logistics.",
      image: "/dammam.avif",
    },
    {
      city: "Singapore",
      country: "Singapore",
      address:
        "Blk 511 Kampong Bahru Road, #03-01 Keppel Distripark, Singapore 099447",
      phone: "+65 65140868",
      email: commonEmail,
      description: "Global headquarters and Asia-Pacific hub.",
      image: "/singapore.jpg",
    },
    {
      city: "Bangkok",
      country: "Thailand",
      address:
        "109 CCT Building, 3rd Floor, Rm.3, Surawong Road, Suriyawongse, Bangrak, Bangkok 10500 109",
      phone: "+60 16-985 4705",
      email: commonEmail,
      description: "Strategic Thailand hub for operations and trading.",
      image: "/Bangkok.jpg",
    },
    {
      city: "Dubai",
      country: "UAE",
      address:
        "Plot #2430152, Al Qusais Industrial Area 2, Dubai, United Arab Emirates",
      phone: "+971 509093357",
      email: commonEmail,
      description: "MENA regional operations and logistics hub.",
      image: "/Dubai.jpeg",
    },
    {
      city: "London",
      country: "United Kingdom",
      address:
        "167-169 Great Portland Street, 5th Floor, London, W1W 5PF, United Kingdom",
      phone: "+44 (0) 7305 856612",
      email: commonEmail,
      description: "European business development and client services.",
      image: "/London.jpg",
    },
    {
      city: "New York",
      country: "USA",
      address:
        "New Jersey Branch, 33 Wood Avenue South, Suite 600, Iselin, NJ 08830",
      phone: "+1 732 456 6780",
      email: commonEmail,
      description: "North American operations and client services.",
      image: "/newyork.jpg",
    },
    {
      city: "Victoria",
      country: "Australia",
      address: "Suite 5, 7-9 Mallet Road, Tullamarine, Victoria 3043",
      phone: "+61 388205157",
      email: commonEmail,
      description: "Supporting clients across Oceania region.",
      image: "/sydney.jpg",
    },
  ];

  useEffect(() => {
    const t = setInterval(
      () => setCurrentMalaysianOffice((p) => (p + 1) % malaysianOffices.length),
      3000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="text-gray-900 bg-white">
      <section className="py-16 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Global Presence
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Serving customers worldwide through our strategically located
            offices across Asia, Middle East, Europe, Americas, and Oceania.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {/* Malaysia auto-rotating */}
            <div className="h-full">
              <div
                key={currentMalaysianOffice}
                className="transition-opacity duration-500 ease-in-out opacity-100"
              >
                <OfficeCard
                  office={malaysianOffices[currentMalaysianOffice]}
                  isAnimated
                />
              </div>
            </div>

            {/* Other Offices */}
            {otherOffices.map((office, i) => (
              <OfficeCard key={`${office.city}-${i}`} office={office} />
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              to="/global"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500"
            >
              Explore Our Global Network
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
