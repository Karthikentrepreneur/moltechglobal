import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Products: [
      "Biodiesel Feedstocks",
      "Fatty Acids",
      "Soap Noodles",
      "Animal Feed Fats",
      "Glycerin",
      "Feed Additives"
    ],
    Company: [
      "About Us",
      "Our Team",
      "Careers",
      "News & Insights",
      "Sustainability",
      "Global Presence"
    ],
    Support: [
      "Contact Us",
      "Technical Support",
      "Documentation",
      "FAQ",
      "Quality Assurance",
      "Certifications"
    ]
  };

  return (
    <footer className="bg-deep-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Moltech</h3>
              <p className="text-blue-200 text-sm">
                Driving the circular economy through sustainable bio-based products and clean initiatives.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-electric-blue" />
                <span className="text-sm text-blue-200">info@moltech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-electric-blue" />
                <span className="text-sm text-blue-200">+65 6123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-electric-blue" />
                <span className="text-sm text-blue-200">Singapore, Malaysia, Thailand, Indonesia</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-royal-blue/20 rounded-full flex items-center justify-center hover:bg-royal-blue/40 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-royal-blue/20 rounded-full flex items-center justify-center hover:bg-royal-blue/40 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-royal-blue/20 rounded-full flex items-center justify-center hover:bg-royal-blue/40 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-lg font-semibold text-white">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm text-blue-200 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-royal-blue/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm text-blue-200">
              <span>© 2024 Moltech. All rights reserved.</span>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-blue-200">
              <div className="w-2 h-2 bg-sustainability-green rounded-full animate-pulse" />
              <span>ISCC Certified • EU Compliant</span>
            </div>
          </div>
        </div>

        {/* Sustainability Banner */}
        <div className="pb-8">
          <div className="glass-card p-6 text-center bg-sustainability-gradient/10 border border-sustainability-green/20">
            <p className="text-sm text-white font-medium">
              🌱 Committed to a sustainable future • Carbon neutral operations • Circular economy champion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;