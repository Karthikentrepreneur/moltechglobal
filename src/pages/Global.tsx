// src/pages/Global.tsx
import { useEffect, useState } from "react";
import { MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Office = {
  city: string;
  country: string;
  type: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  image: string;
};

const OfficeCard = ({
  office,
  isAnimated = false,
}: {
  office: Office;
  isAnimated?: boolean;
}) => (
  <div
    className={[
      "bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500",
      "hover:shadow-xl h-full flex flex-col",
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
      <div className="absolute top-4 left-4">
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {office.type}
        </span>
      </div>
    </div>

    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-2xl font-bold text-slate-900">{office.city}</h3>
      <p className="text-slate-600 mb-3">{office.country}</p>
      <p className="text-slate-700 leading-relaxed mb-6">{office.description}</p>

      <div className="mt-auto space-y-3">
        <div className="flex items-start text-sm text-slate-700">
          <MapPin className="w-4 h-4 mr-3 text-blue-600 mt-0.5" />
          <span>{office.address}</span>
        </div>
        <div className="flex items-center text-sm text-slate-700">
          <Phone className="w-4 h-4 mr-3 text-blue-600" />
          <span>{office.phone}</span>
        </div>
      </div>
    </div>
  </div>
);

export default function Global() {
  const [currentMalaysianOffice, setCurrentMalaysianOffice] = useState(0);

  // ✅ Malaysia images fixed (use .jpg or .png for reliability)
  const malaysianOffices: Office[] = [
    {
      city: "Port Klang",
      country: "Malaysia",
      type: "Branch Office",
      address: "18 Jalan Sungai Chandong 12, Pulau Indah, 42000 Pelabuhan Klang",
      phone: "+60 16-985 4705",
      email: "portklang@global.com",
      description: "Strategic hub for Malaysian logistics and supply chain.",
      image: "/malasyia.avif", // changed to .jpg
    },
    {
      city: "Johor",
      country: "Malaysia",
      type: "Branch Office",
      address: "No.19A, Jalan Sagai 6, Taman Pasir Putih, 81700 Pasir Gudang",
      phone: "+60 16-959 4075",
      email: "johor@global.com",
      description: "Supporting industrial clients across Johor region.",
      image: "/malasyia.avif", // same image for consistency
    },
  ];

  const otherOffices: Office[] = [
    {
      city: "Jakarta",
      country: "Indonesia",
      type: "Regional Office",
      address: "408, Lina Building, JL.HR Rasuna Said kav B7, Jakarta",
      phone: "+62 815 1038 5581",
      email: "indonesia@global.com",
      description: "Key Southeast Asia operations office.",
      image: "/indonesia.webp",
    },
    {
      city: "Dammam",
      country: "Saudi Arabia",
      type: "Regional Office",
      address: "2817 King Faizal Road, 9403-32233",
      phone: "+966 13 3430003",
      email: "dammam@global.com",
      description: "Serving Middle East operations and logistics.",
      image: "/dammam.avif",
    },
    {
      city: "Singapore",
      country: "Singapore",
      type: "Headquarters",
      address: "Blk 511 Kampong Bahru Rd, #03-01 Keppel Distripark, 099447",
      phone: "+65 65140868",
      email: "singapore@global.com",
      description: "Global headquarters and Asia-Pacific hub.",
      image: "/singapore.jpg",
    },
    {
      city: "Bangkok",
      country: "Thailand",
      type: "Regional Office",
      address: "109 CCT Bldg, Surawong Rd, Bangrak, 10500",
      phone: "+60 16-985 4705",
      email: "bangkok@global.com",
      description: "Strategic Thailand hub for operations and trading.",
      image: "/Bangkok.jpg",
    },
    {
      city: "Dubai",
      country: "UAE",
      type: "Regional Office",
      address: "Al Qusais Industrial Area 2",
      phone: "+971 509093357",
      email: "dubai@global.com",
      description: "MENA regional operations and logistics hub.",
      image: "/Dubai.jpeg",
    },
    {
      city: "London",
      country: "United Kingdom",
      type: "European Office",
      address: "167-169 Great Portland Street, W1W 5PF",
      phone: "+44 7305 856612",
      email: "london@global.com",
      description: "European business development and client services.",
      image: "/London.jpg",
    },
    {
      city: "New York",
      country: "USA",
      type: "Americas Office",
      address: "33 Wood Ave S, Suite 600, Iselin, NJ 08830",
      phone: "+1 732 456 6780",
      email: "usa@global.com",
      description: "North American operations and client services.",
      image: "/newyork.jpg",
    },
    {
      city: "Sydney",
      country: "Australia",
      type: "Branch Office",
      address: "Level 10, 20 Martin Place, Sydney NSW 2000",
      phone: "+61 2 9876 5432",
      email: "australia@global.com",
      description: "Supporting clients across Oceania region.",
      image: "/sydney.jpg",
    },
  ];

  // Auto-swap Malaysian offices every 3 seconds
  useEffect(() => {
    const t = setInterval(() => {
      setCurrentMalaysianOffice((p) => (p + 1) % malaysianOffices.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Global Presence
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Serving customers worldwide through our strategically located
              offices and facilities across Asia, Middle East, Europe,
              Americas, and Oceania.
            </p>
          </div>
        </section>

        {/* Offices Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {/* Malaysia Column with shadow + working image */}
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

              {/* Other offices */}
              {otherOffices.map((office, i) => (
                <OfficeCard key={`${office.city}-${i}`} office={office} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
