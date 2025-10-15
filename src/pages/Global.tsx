// src/pages/Global.tsx
import { useEffect, useRef, useState } from "react";
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

  // === Measure sidebar and make map match its height (desktop only) ===
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [sidebarH, setSidebarH] = useState<number>(640);

  useEffect(() => {
    const el = sidebarRef.current;
    if (!el || isMobile) return; // equalize only on desktop

    const apply = () => {
      const h = Math.max(520, Math.round(el.getBoundingClientRect().height));
      setSidebarH(h);
    };

    const ro = new ResizeObserver(apply);
    ro.observe(el);
    window.addEventListener("resize", apply);
    apply();

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, [isMobile]);

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
    setShowMap((p) => !p);
    setIsSidebarOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-royal-blue/5 via-white to-white">
      <SEO
        title="OECL Global Presence | International Logistics Solutions"
        description="Explore OECL's extensive global presence, offering comprehensive logistics and supply chain solutions across key markets."
        keywords="OECL global logistics, international supply chain, worldwide presence"
        url="https://www.oecl.sg/global-presence"
      />
      <ScrollToTop />
      <Header />

      <main className="flex-1">
        <div className="relative flex flex-1 flex-col overflow-hidden pb-16">
          <div className="flex flex-col md:flex-row md:gap-0 md:px-0 lg:px-0 min-h-[80vh]">

            {/* Mobile title bar */}
            {isMobile && (
              <div className="fixed top-20 left-0 right-0 z-30 bg-gradient-to-r from-royal-blue to-electric-blue p-3 text-white text-center shadow-md">
                <h2 className="text-lg font-bold tracking-wide">Global Presence</h2>
                <p className="text-xs text-white/80 mt-1">Discover our worldwide logistics network</p>
              </div>
            )}

            {/* MAP (height matches sidebar on desktop) */}
            {(!isMobile || (isMobile && showMap)) && (
              <div
                className={`transition-all duration-300 ease-in-out ${isMobile ? "w-full" : "md:w-1/2"} z-10`}
                style={!isMobile ? { height: `${sidebarH}px` } : undefined}
              >
                <div className="h-full w-full map-equal">
                  <ContactMapContainer />
                </div>
              </div>
            )}

            {/* SIDEBAR */}
            {(!isMobile || (isMobile && !showMap)) && (
              <aside
                className={`transition-all duration-300 ease-in-out relative z-20 ${
                  isMobile ? "w-full pt-24" : "md:w-1/2 pt-0"
                } flex`}
              >
                <div ref={sidebarRef} className="flex-1 h-full">
                  <ContactSidebar
                    isOpen={isSidebarOpen}
                    onClose={() => {
                      setIsSidebarOpen(false);
                      if (isMobile) setShowMap(true);
                    }}
                  />
                </div>
              </aside>
            )}
          </div>

          {/* Mobile toggle button */}
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

      {/* Ensure embedded map fills the forced height */}
      <style>{`
        .map-equal, .map-equal > * { height: 100%; }
        .map-equal iframe { height: 100% !important; width: 100% !important; display: block; }
      `}</style>
    </div>
  );
};

export default Global;
