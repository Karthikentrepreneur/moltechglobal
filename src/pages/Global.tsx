import { useState, useEffect } from "react";
import { MapPin, Phone } from "lucide-react";

const Global = () => {
  const [currentMalaysianOffice, setCurrentMalaysianOffice] = useState(0);

  const malaysianOffices = [
    {
      city: "Port Klang",
      country: "Malaysia",
      type: "Branch Office",
      address: "18 Jalan Sungai Chandong 12, Pulau Indah, 42000 Pelabuhan Klang",
      phone: "+60 16-985 4705",
      email: "portklang@global.com",
      description: "Strategic hub for Malaysian logistics and supply chain.",
      // Petronas Towers
      image: "https://images.unsplash.com/photo-1504548840739-580b10ae7715?auto=format&fit=crop&w=1600&q=80"
    },
    {
      city: "Johor",
      country: "Malaysia",
      type: "Branch Office",
      address: "No.19A, Jalan Sagai 6, Taman Pasir Putih, 81700 Pasir Gudang",
      phone: "+60 16-959 4075",
      email: "johor@global.com",
      description: "Supporting industrial clients across Johor region.",
      // Johor Bahru mosque
      image: "https://images.unsplash.com/photo-1626082925312-d38d6d5a9d37?auto=format&fit=crop&w=1600&q=80"
    }
  ];

  const otherOffices = [
    {
      city: "Jakarta",
      country: "Indonesia",
      type: "Regional Office",
      address: "408, Lina Building, JL.HR Rasuna Said kav B7, Jakarta",
      phone: "+62 815 1038 5581",
      email: "indonesia@global.com",
      description: "Key Southeast Asia operations office.",
      // National Monument (Monas)
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80"
    },
    {
      city: "Dammam",
      country: "Saudi Arabia",
      type: "Regional Office",
      address: "2817 King Faizal Road, 9403-32233",
      phone: "+966 13 3430003",
      email: "dammam@global.com",
      description: "Serving Middle East operations and logistics.",
      // King Fahd Mosque
      image: "https://images.unsplash.com/photo-1565557623262-204f7b6f6c72?auto=format&fit=crop&w=1600&q=80"
    },
    {
      city: "Singapore",
      country: "Singapore",
      type: "Headquarters",
      address: "Blk 511 Kampong Bahru Rd, #03-01 Keppel Distripark, 099447",
      phone: "+65 65140868",
      email: "singapore@global.com",
      description: "Global headquarters and Asia-Pacific hub.",
      // Marina Bay Sands
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=80"
    },
    {
      city: "Bangkok",
      country: "Thailand",
      type: "Regional Office",
      address: "109 CCT Bldg, Surawong Rd, Bangrak, 10500",
      phone: "+60 16-985 4705",
      email: "bangkok@global.com",
      description: "Strategic Thailand hub for operations and trading.",
      // Wat Arun
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80"
    },
    {
      city: "Dubai",
      country: "UAE",
      type: "Regional Office",
      address: "Al Qusais Industrial Area 2",
      phone: "+971 509093357",
      email: "dubai@global.com",
      description: "MENA regional operations and logistics hub.",
      // Burj Khalifa
      image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1600&q=80"
    },
    {
      city: "London",
      country: "United Kingdom",
      type: "European Office",
      address: "167-169 Great Portland Street, W1W 5PF",
      phone: "+44 7305 856612",
      email: "london@global.com",
      description: "European business development and client services.",
      // Big Ben
      image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1600&q=80"
    },
    {
      city: "New York",
      country: "USA",
      type: "Americas Office",
      address: "33 Wood Ave S, Suite 600, Iselin, NJ 08830",
      phone: "+1 732 456 6780",
      email: "usa@global.com",
      description: "North American operations and client services.",
      // Statue of Liberty
      image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1600&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMalaysianOffice(prev => (prev + 1) % malaysianOffices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const OfficeCard = ({ office }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500">
      <div className="relative h-48">
        <img
          src={office.image}
          alt={`${office.city} office location`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {office.type}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{office.city}</h3>
        <p className="text-slate-600 mb-4">{office.country}</p>
        <p className="text-slate-700 mb-6 leading-relaxed">{office.description}</p>
        <div className="space-y-3">
          <div className="flex items-center text-sm text-slate-600">
            <MapPin className="w-4 h-4 mr-3 text-blue-600" />
            {office.address}
          </div>
          <div className="flex items-center text-sm text-slate-600">
            <Phone className="w-4 h-4 mr-3 text-blue-600" />
            {office.phone}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <main className="pt-24 bg-background">
        <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Global Presence</h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Serving customers worldwide through our strategically located offices and facilities
              across Asia, Middle East, Europe, Americas, and Oceania.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Malaysian auto-swap */}
              <div key={currentMalaysianOffice}>
                <OfficeCard office={malaysianOffices[currentMalaysianOffice]} />
              </div>
              {/* Other offices */}
              {otherOffices.map((office, i) => (
                <OfficeCard key={i} office={office} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Global;
