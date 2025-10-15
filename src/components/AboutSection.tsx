// src/pages/Global.tsx
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Globe, MapPin } from "lucide-react";
import SEO from "@/components/SEO";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [pathname]);
  return null;
};

const Global = () => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showImage, setShowImage] = useState(true);

  // === Measure sidebar height and sync image height ===
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [sidebarH, setSidebarH] = useState<number>(640);

  useEffect(() => {
    const el = sidebarRef.current;
    if (!el || isMobile) return;
    const apply = () => {
      const h = Math.max(520, Math.round(el.getBoundingClientRect().height));
      setSidebarH(h);
    };
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    window.addEventListener("resize", apply);
    apply();
    return () => { ro.disconnect(); window.removeEventListener("resize", apply); };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) { setShowImage(false); setIsSidebarOpen(true); }
    else { setShowImage(true); setIsSidebarOpen(true); }
  }, [isMobile]);

  const toggleMobileView = () => {
    if (!isMobile) return;
    setShowImage((p) => !p);
    setIsSidebarOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-royal-blue/5 via-white to-white">
      <SEO
        title="Moltech Global Presence | Renewable Network"
        description="Explore Moltech’s cross-continental renewable operations and sustainable network spanning over 15 countries."
        keywords="Moltech Global Presence, renewable energy, biodiesel feedstocks"
        url="https://www.moltechglobal.com/global"
      />
      <ScrollToTop />
      <Header />

      <main className="flex-1">
        <div className="relative flex flex-1 flex-col overflow-hidden pb-16">
          <div className="flex flex-1 flex-col md:flex-row md:gap-6 md:px-6 lg:px-8">
            {/* Mobile Title Bar */}
            {isMobile && (
              <div className="fixed top-20 left-0 right-0 z-30 bg-gradient-to-r from-royal-blue to-electric-blue p-3 text-white text-center shadow-md">
                <h2 className="text-lg font-bold tracking-wide">Global Presence</h2>
                <p className="text-xs text-white/80 mt-1">Discover our worldwide renewable network</p>
              </div>
            )}

            {/* RIGHT IMAGE (height matches sidebar on desktop) */}
            {(!isMobile || (isMobile && showImage)) && (
              <div
                className={`transition-all duration-300 ease-in-out ${isMobile ? "w-full" : "md:w-[60%]"} z-10`}
                style={!isMobile ? { height: `${sidebarH}px` } : undefined}
              >
                <div className="h-full w-full overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/greenworld.jpg"
                    alt="Moltech Global Network"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            )}

            {/* LEFT SIDEBAR */}
            {(!isMobile || (isMobile && !showImage)) && (
              <aside className={`transition-all duration-300 ease-in-out relative z-20 ${isMobile ? "w-full pt-24" : "md:w-[35%] pt-28"}`}>
                <div ref={sidebarRef}>
                  <ContactSidebar
                    isOpen={isSidebarOpen}
                    onClose={() => {
                      setIsSidebarOpen(false);
                      if (isMobile) setShowImage(true);
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
                {showImage ? (
                  <>
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm font-semibold">View Locations</span>
                  </>
                ) : (
                  <>
                    <Globe className="h-4 w-4" />
                    <span className="text-sm font-semibold">View Image</span>
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
