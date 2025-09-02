import { useState, useEffect } from "react";
import { MapPin, Phone } from "lucide-react";

/** Simple image with graceful fallback to a landmark photo */
const SafeImage = ({
  src,
  alt,
  fallbackKeyword,
  className,
}: {
  src: string;
  alt: string;
  fallbackKeyword: string; // e.g., "bangkok wat arun" or "new york skyline"
  className?: string;
}) => {
  const [url, setUrl] = useState(src);
  const [failed, setFailed] = useState(false);

  // Stable Unsplash photo (non-rotating) as final fallback
  // If you want a specific photo ID later, replace the entire URL with images.unsplash.com/photo-<id>?auto=format&w=1600&q=80
  const unsplashFallback = `https://source.unsplash.com/1600x900/?${encodeURIComponent(
    fallbackKeyword
  )}`;

  return (
    <img
      src={failed ? unsplashFallback : url}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
};

const img = (file: string) => `/offices/${file}?v=1`; // cache-buster

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
      image: img("malaysia.jpg"), // ensure this file exists in /public/offices/
      fallbackKeyword: "kuala lumpur petronas towers",
    },
    {
      city: "Johor",
      country: "Malaysia",
      type: "Branch Office",
      address: "No.19A, Jalan Sagai 6, Taman Pasir Putih, 81700 Pasir Gudang",
      phone: "+60 16-959 4075",
      email: "johor@global.com",
      description: "Supporting industrial clients across Johor region.",
      image: img("johor.jpg"),
      fallbackKeyword: "johor bahru sultan abu bakar mosque",
    },
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
      image: img("indonesia.jpg"),
      fallbackKeyword: "jakarta monas",
    },
    {
      city: "Dammam",
      country: "Saudi Arabia",
      type: "Regional Office",
      address: "2817 King Faizal Road, 9403-32233",
      phone: "+966 13 3430003",
      email: "dammam@global.com",
      description: "Serving Middle East operations and logistics.",
      image: img("dammam.jpg"),
      fallbackKeyword: "dammam king fahd causeway",
    },
    {
      city: "Singapore",
      country: "Singapore",
      type: "Headquarters",
      address: "Blk 511 Kampong Bahru Rd, #03-01 Keppel Distripark, 099447",
      phone: "+65 65140868",
      email: "singapore@global.com",
      description: "Global headquarters and Asia-Pacific hub.",
      image: img("singapore.jpg"),
      fallbackKeyword: "singapore marina bay sands",
    },
    {
      city: "Bangkok",
      country: "Thailand",
      type: "Regional Office",
      address: "109 CCT Bldg, Surawong Rd, Bangrak, 10500",
      phone: "+60 16-985 4705",
      email: "bangkok@global.com",
      description: "Strategic Thailand hub for operations and trading.",
      image: img("bangkok.jpg"),
      fallbackKeyword: "bangkok wat arun",
    },
    {
      city: "Dubai",
      country: "UAE",
      type: "Regional Office",
      address: "Al Qusais Industrial Area 2",
      phone: "+971 509093357",
      email: "dubai@global.com",
      description: "MENA regional operations and logistics hub.",
      image: img("dubai.jpg"),
      fallbackKeyword: "dubai burj khalifa",
    },
    {
      city: "London",
      country: "United Kingdom",
      type: "European Office",
      address: "167-169 Great Portland Street, W1W 5PF",
      phone: "+44 7305 856612",
      email: "london@global.com",
      description: "European business development and client services.",
      image: img("london.jpg"),
      fallbackKeyword: "london big ben",
    },
    {
      city: "New York",
      country: "USA",
      type: "Americas Office",
      address: "33 Wood Ave S, Suite 600, Iselin, NJ 08830",
      phone: "+1 732 456 6780",
      email: "usa@global.com",
      description: "North American operations and client services.",
      image: img("new-york.jpg"),
      fallbackKeyword: "new york statue of liberty",
    },
    {
      city: "Sydney",
      country: "Australia",
      type: "Branch Office",
      address: "Level 10, 20 Martin Place, Sydney NSW 2000",
      phone: "+61 2 9876 5432",
      email: "australia@global.com",
      description: "Supporting clients across Oceania region.",
      image: img("sydney.jpg"),
      fallbackKeyword: "sydney opera house",
    },
  ];

  // Auto-swap Malaysian offices every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMalaysianOffice((prev) => (prev + 1) % malaysianOffices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">Global Corp</div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-slate-600 hover:text-blue-600">Home</a>
            <a href="/about" className="text-slate-600 hover:text-blue-600">About</a>
            <a href="/services" className="text-slate-600 hover:text-blue-600">Services</a>
            <a href="/global" className="text-blue-600 font-medium">Global</a>
            <a href="/contact" className="text-slate-600 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );

  const Footer = () => (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400 mb-4">Global Corp</div>
          <p className="text-slate-400">© 2025 Global Corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  const OfficeCard = ({ office, isAnimated = false }) => (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 ${isAnimated ? "transform" : ""}`}>
      <div className="relative h-48">
        <SafeImage
          src={office.image}
          alt={`${office.city} office location`}
          fallbackKeyword={`${office.city} ${office.country}`}
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
      <Header />

      <main className="pt-24 bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Global Presence</h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Serving customers worldwide through our strategically located offices and facilities across Asia, Middle East, Europe, Americas, and Oceania.
            </p>
          </div>
        </section>

        {/* Offices Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Auto-swapping Malaysian Offices Column */}
              <div className="relative overflow-hidden">
                <div className="transition-all duration-500 ease-in-out" key={currentMalaysianOffice}>
                  <OfficeCard office={malaysianOffices[currentMalaysianOffice]} isAnimated />
                </div>
              </div>

              {/* Other Offices */}
              {otherOffices.map((office, index) => (
                <OfficeCard key={index} office={office} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Global;
