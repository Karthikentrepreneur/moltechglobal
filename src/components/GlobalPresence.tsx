import worldMapBg from "../assets/world-map-bg.jpg";

const GlobalPresence = () => {
  const locations = [
    { 
      name: "Singapore", 
      x: "75%", 
      y: "65%",
      address: {
        street: "Blk 511 Kampong Bahru Road #03-01 Keppel Distripark",
        city: "Singapore 099447",
        country: "Singapore"
      },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127506.01297429645!2d103.77470995!3d1.3521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2s!4v1234567890"
    },
    { 
      name: "Malaysia", 
      x: "72%", 
      y: "63%",
      address: {
        street: "456 KLCC Street",
        city: "Kuala Lumpur 50088",
        country: "Malaysia"
      },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255289.0060816296!2d101.55!3d3.139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd08e7d3%3A0x232e1ff540d86c99!2sKuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2s!4v1234567890"
    },
    { 
      name: "Thailand", 
      x: "70%", 
      y: "58%",
      address: {
        street: "789 Sukhumvit Road",
        city: "Bangkok 10110",
        country: "Thailand"
      },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248057.47759065894!2d100.46!3d13.756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2s!4v1234567890"
    },
    { 
      name: "Indonesia", 
      x: "73%", 
      y: "68%",
      address: {
        street: "321 Sudirman Street",
        city: "Jakarta 12190",
        country: "Indonesia"
      },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65789016097!2d106.69!3d-6.211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2s!4v1234567890"
    },
    { 
      name: "Australia", 
      x: "78%", 
      y: "78%",
      address: {
        street: "Suite 5, 7-9 Mallet Road, Tullamarine",
        city: "Victoria, 3043",
        country: "Australia"
      },
      mapUrl: "https://www.google.com/maps/d/embed?mid=1RBDH4vbM2A8GB_gcC5jPLo_ftrjLevg&ehbc=2E312F"
    },
    { 
      name: "Saudi Arabia", 
      x: "58%", 
      y: "45%",
      address: {
        street: "555 King Fahd Road",
        city: "Riyadh 11564",
        country: "Saudi Arabia"
      },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02069936294!2d46.59!3d24.774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1234567890"
    },
    { 
      name: "United Kingdom", 
      x: "48%", 
      y: "32%",
      address: {
        street: "100 London Wall",
        city: "London EC2Y 5DU",
        country: "United Kingdom"
      },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.6134825814!2d-0.43!3d51.528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1234567890"
    },
    { 
      name: "United States", 
      x: "25%", 
      y: "40%",
      address: {
        street: "250 Park Avenue",
        city: "New York, NY 10177",
        country: "United States"
      },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.1977813157!2d-74.26!3d40.697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890"
    }
  ];

  const stats = [
    { label: "Countries", value: "15+" },
    { label: "Partners", value: "200+" },
    { label: "Years", value: "15+" },
    { label: "Locations", value: "25+" }
  ];

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

        {/* Interactive Map */}
        <div className="relative mb-16">
          <div className="glass-card p-8 relative overflow-hidden">
            <div className="relative h-96 bg-gradient-to-br from-royal-blue/20 to-electric-blue/20 rounded-2xl overflow-hidden">
              {/* Map Points */}
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="absolute group cursor-pointer"
                  style={{ left: location.x, top: location.y }}
                >
                  {/* Pulsing Dot */}
                  <div className="relative">
                    <div className="w-4 h-4 bg-electric-blue rounded-full animate-glow shadow-lg shadow-electric-blue/50" />
                    <div className="absolute inset-0 w-4 h-4 bg-electric-blue rounded-full animate-ping" />
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="glass-card px-3 py-2 whitespace-nowrap">
                        <p className="text-sm font-semibold text-white">{location.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(44, 94, 255)" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="rgb(44, 94, 255)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="rgb(44, 94, 255)" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                {/* Connection lines between locations */}
                <path d="M 200 150 Q 400 100 600 200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                <path d="M 300 250 Q 500 200 700 180" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                <path d="M 400 280 Q 550 250 620 300" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">
                {stat.value}
              </div>
              <div className="text-sm text-blue-200 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Regional Highlights */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="glass-card p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-3">Asia Pacific</h3>
            <p className="text-blue-200 text-sm">
              Strong operations in Singapore, Malaysia, Thailand, and Indonesia
            </p>
          </div>
          <div className="glass-card p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-3">Australia</h3>
            <p className="text-blue-200 text-sm">
              Expanding operations across Australian markets
            </p>
          </div>
          <div className="glass-card p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-3">Middle East</h3>
            <p className="text-blue-200 text-sm">
              Strategic partnerships across Saudi Arabia and regional markets
            </p>
          </div>
          <div className="glass-card p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-3">West</h3>
            <p className="text-blue-200 text-sm">
              Expanding presence in the United Kingdom and United States
            </p>
          </div>
        </div>

        {/* All Countries Detailed Maps Section */}
        <div className="mt-16 space-y-12">
          <h3 className="text-3xl font-semibold text-white text-center mb-8">
            Our Global Offices
          </h3>
          
          {locations.map((location, index) => (
            <div key={index} className="glass-card p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Address and Info */}
                <div className="space-y-6">
                  <div className="text-center lg:text-left">
                    <h4 className="text-2xl font-semibold text-white mb-4">
                      {location.name} Office
                    </h4>
                    <div className="glass-card p-6 inline-block">
                      <div className="text-blue-200 space-y-2">
                        <p className="text-lg font-medium text-white">Address:</p>
                        <p className="text-sm">{location.address.street}</p>
                        <p className="text-sm">{location.address.city}</p>
                        <p className="text-sm">{location.address.country}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact Info Placeholder */}
                  <div className="glass-card p-6">
                    <h5 className="text-lg font-semibold text-white mb-3">Contact Information</h5>
                    <div className="text-blue-200 space-y-2 text-sm">
                      <p>📞 Phone: +1-XXX-XXX-XXXX</p>
                      <p>✉️ Email: {location.name.toLowerCase().replace(' ', '')}@company.com</p>
                      <p>🕒 Business Hours: 9:00 AM - 6:00 PM (Local Time)</p>
                    </div>
                  </div>
                </div>

                {/* Embedded Google Map */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-w-4 aspect-h-3">
                    <iframe 
                      src={location.mapUrl}
                      width="100%" 
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-2xl"
                      title={`${location.name} Office Location`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
