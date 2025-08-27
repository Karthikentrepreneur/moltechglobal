import worldMapBg from "../assets/world-map-bg.jpg";

const GlobalPresence = () => {
  const locations = [
    { name: "Singapore", x: "75%", y: "65%" },
    { name: "Malaysia", x: "72%", y: "63%" },
    { name: "Thailand", x: "70%", y: "58%" },
    { name: "Indonesia", x: "73%", y: "68%" },
    { name: "Saudi Arabia", x: "58%", y: "45%" },
    { name: "United Kingdom", x: "48%", y: "32%" },
    { name: "United States", x: "25%", y: "40%" }
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
                {/* Sample connection lines */}
                <path d="M 200 150 Q 400 100 600 200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                <path d="M 300 250 Q 500 200 700 180" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
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
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="glass-card p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-3">Asia Pacific</h3>
            <p className="text-blue-200 text-sm">
              Strong operations in Singapore, Malaysia, Thailand, and Indonesia
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
      </div>
    </section>
  );
};

export default GlobalPresence;