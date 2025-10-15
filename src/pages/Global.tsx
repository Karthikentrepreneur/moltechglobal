import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactMapContainer from "@/components/ContactMapContainer";
import ContactSidebar from "@/components/ContactSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Globe, MapPin } from "lucide-react";
import SEO from "@/components/SEO";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const Global = () => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showMap, setShowMap] = useState(true);

  useEffect(() => {
    if (isMobile) {
      setShowMap(false);
      setIsSidebarOpen(true);
    } else {
      setShowMap(true);
      setIsSidebarOpen(true);
    }
  }, [isMobile]);

  const toggleMobileView = () => {
    if (!isMobile) return;
    setShowMap((prev) => !prev);
    setIsSidebarOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-royal-blue/5 via-white to-white">
      <SEO
        title="OECL Global Presence | International Logistics Solutions"
        description="Explore OECL's extensive global presence, offering comprehensive logistics and supply chain solutions across key markets. Our strategic network ensures seamless operations for your business worldwide."
        keywords="OECL global logistics, international supply chain solutions, global logistics network, OECL worldwide presence, B2B logistics services, global freight forwarding, international warehousing services, OECL supply chain partners"
        url="https://www.oecl.sg/global-presence"
      />
      <ScrollToTop />
      <Header />

      <main className="flex-1">
        {/* back to overflow-hidden to avoid white bleed; no sticky needed */}
        <div className="relative flex flex-1 flex-col overflow-hidden pb-16">
          <div className="flex flex-1 flex-col md:flex-row md:gap-6 md:px-6 lg:px-8">
            {/* Mobile banner */}
            {isMobile && (
              <div className="fixed top-20 left-0 right-0 z-30 bg-gradient-to-r from-royal-blue to-electric-blue p-3 text-white text-center shadow-md">
                <h2 className="text-lg font-bold tracking-wide">Global Presence</h2>
                <p className="text-xs text-white/80 mt-1">Discover our worldwide logistics network</p>
              </div>
            )}

            {/* Map column (explicit z-index lower than sidebar) */}
            {(!isMobile || (isMobile && showMap)) && (
              <div className={`transition-all duration-300 ease-in-out ${isMobile ? "w-full" : "md:w-[60%]"} z-10`}>
                <ContactMapContainer />
              </div>
            )}

            {/* Sidebar column */}
            {(!isMobile || (isMobile && !showMap)) && (
              <aside
                className={`transition-all duration-300 ease-in-out relative z-20
                  ${isMobile ? "w-full pt-24" : "md:w-[35%] pt-28"}`}
              >
                {/* No sticky; just clear the fixed header/banner with padding */}
                <ContactSidebar
                  isOpen={isSidebarOpen}
                  onClose={() => {
                    setIsSidebarOpen(false);
                    if (isMobile) setShowMap(true);
                  }}
                />
              </aside>
            )}
          </div>

            {/* Mobile toggle */}
            {isMobile && (
              <div className="fixed bottom-6 left-0 right-0 flex justify-center z-40">
                <Button
                  onClick={toggleMobileView}
                  className="flex items-center gap-2 bg-royal-blue hover:bg-deep-navy text-white shadow-lg px-5 py-4 rounded-full"
                >
                  {showMap ? (
                    <>
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm font-semibold">View Locations</span>
                    </>
                  ) : (
                    <>
                      <Globe className="h-4 w-4" />
                      <span className="text-sm font-semibold">View Map</span>
                    </>
                  )}
                </Button>
              </div>
            )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Global;
