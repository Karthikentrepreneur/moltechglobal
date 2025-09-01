import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";

const Global = () => {
  const offices = [
    {
      city: "Singapore",
      country: "Singapore",
      type: "Headquarters",
      address: "Blk 511 Kampong Bahru Rd, #03-01 Keppel Distripark, 099447 ",
      phone: "+65 65140868",
      email: "singapore@moltech.com",
      description: "Regional headquarters and main operations center for Asia-Pacific region.",
      image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600&h=400&fit=crop"
    },
    {
      city: "JAKARTA",
      country: "INDONESIA",
      type: "Operations",
      address: "408, Lina Building, JL.HR Rasuna Said kav B7, Jakarta",
      phone: " +62 815 1038 5581",
      email: "indonesia@moltech.com",
      description: "Manufacturing and processing facility for biodiesel feedstocks and glycerin.",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=400&fit=crop"
    },
    {
      city: "Dubai",
      country: "UAE",
      type: "Regional Office",
      address: "Al Qusais Industrial Area 2",
      phone: "+971 509093357",
      email: "dubai@moltech.com",
      description: "Middle East operations hub serving the MENA region.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop"
    },
    {
      city: "London",
      country: "United Kingdom",
      type: "European Office",
      address: "Canary Wharf",
      phone: "+44 20 1234 5678",
      email: "london@moltech.com",
      description: "European operations and business development center.",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop"
    },
    {
      city: "NEW YORK",
      country: "USA",
      type: "Americas Office",
      address: "Energy Corridor",
      phone: "+1 732 456 6780",
      email: "houston@moltech.com",
      description: "33 Wood Ave S, Suite 600, Iselin, NJ 08830.",
      image: "https://images.unsplash.com/photo-1494888427482-242d32babc0b?w=600&h=400&fit=crop"
    },
    {
      city: "PORTLANG",
      country: "Malaysia",
      type: "Processing Facility",
      address: "18 Jalan Sungai Chandong 12, Pulau Indah, 42000 Pelabuhan Klang",
      phone: "+60 16-985 4705",
      email: "kl@moltech.com",
      description: "Palm oil processing and fatty acid production facility.",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=400&fit=crop"
    }
    {
      city: "JOHOR",
      country: "Malaysia",
      type: "Processing Facility",
      address: "No.19A, Jalan Sagai 6, Taman Pasir Putih, 81700 Pasir Gudang",
      phone: "+60 16-959 4075",
      email: "kl@moltech.com",
      description: "Palm oil processing and fatty acid production facility.",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=400&fit=crop"
    }
 {
      city: "Tullamarine",
      country: "AUSTRALIA",
      type: "Processing Facility",
      address: "Suite 5, 7-9 Mallet Road, Tullamarine, VIC 3043",
      phone: "+61 388205157",
      email: "kl@moltech.com",
      description: "Palm oil processing and fatty acid production facility.",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=400&fit=crop"
    }
{
      city: " DAMMAM",
      country: "SAUDI ARABIA",
      type: "Processing Facility",
      address: "2817 King Faizal Road, 9403-32233",
      phone: "+966 13 3430003",
      email: "kl@moltech.com",
      description: "Palm oil processing and fatty acid production facility.",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=400&fit=crop"
    }
{
      city: " BANGKOK",
      country: "THAILAND",
      type: "Processing Facility",
      address: "109 CCT Bldg, Surawong Rd, Bangrak, 10500",
      phone: "+60 16-985 4705",
      email: "kl@moltech.com",
      description: "Palm oil processing and fatty acid production facility.",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Global Presence
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Serving customers worldwide through our strategically located offices and facilities 
              across Asia, Middle East, Europe, and North America.
            </p>
          </div>
        </section>

        {/* World Map Visual */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-slate-700 rounded-3xl p-12 text-white text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">
                4 Continents, 6 Strategic Locations
              </h2>
              <p className="text-lg max-w-4xl mx-auto leading-relaxed">
                Our global network ensures local expertise, efficient logistics, and responsive 
                customer service across all major markets for sustainable bio-based products.
              </p>
            </div>
          </div>
        </section>

        {/* Offices Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
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
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {office.city}
                    </h3>
                    <p className="text-slate-600 mb-4">{office.country}</p>
                    
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      {office.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-slate-600">
                        <MapPin className="w-4 h-4 mr-3 text-blue-600" />
                        {office.address}
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Phone className="w-4 h-4 mr-3 text-blue-600" />
                        {office.phone}
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Mail className="w-4 h-4 mr-3 text-blue-600" />
                        {office.email}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="bg-white rounded-3xl p-12 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Ready to Connect?
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Get in touch with your nearest Moltech office to discuss how we can 
                support your sustainable product needs.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Contact Us Today
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Global;
