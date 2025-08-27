import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

function scrollToSection(id: string, offset = 80) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function scrollToFooter(offset = 80) {
  const el =
    (document.getElementById("footer") as HTMLElement | null) ||
    (document.querySelector("footer") as HTMLElement | null);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Products", id: "products" },
    { name: "Global Presence", id: "global" },
    { name: "Careers", id: "careers" },
    { name: "Contact", id: "contact" },
  ];

  const pillClasses = [
    "mx-auto flex items-center justify-between rounded-full transition-all duration-300",
    "border border-white/10 shadow-lg backdrop-blur",
    "bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500",
    isScrolled
      ? "h-16 w-[88vw] max-w-4xl scale-[0.985] px-4"
      : "h-20 w-[92vw] max-w-5xl px-5",
  ].join(" ");

  const linkClasses =
    "text-sm text-blue-100 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] transition-all duration-300";

  const offset = isScrolled ? 72 : 88;

  return (
    <header className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-full">
      <div className={pillClasses}>
        <nav className="flex items-center justify-between w-full">
          {/* ✅ Brand Logo + Text + Tagline */}
          <button
            onClick={() => scrollToSection("home", offset)}
            aria-label="Go to top"
            className={[
              "flex flex-col items-start select-none transition-transform duration-300",
              isScrolled ? "scale-[0.96]" : "scale-100",
            ].join(" ")}
          >
            <div className="flex items-center gap-2">
              <img
                src="/Moltechlogo.png" // your logo in public/Moltechlogo.png
                alt="Moltech Logo"
                className="h-8 w-auto object-contain"
              />
            
            </div>
            <span className="text-[11px] font-medium tracking-widest uppercase text-gray-200 drop-shadow">
              Driving Sustainability
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id, offset)}
                className={linkClasses}
              >
                {item.name}
              </button>
            ))}
            <Button
              size="sm"
              className="rounded-full bg-white text-blue-700 hover:bg-blue-50 h-8 px-3 text-xs shadow-md hover:shadow-lg"
              onClick={() => scrollToFooter(offset)}
            >
              Blog
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20 h-8 w-8"
                  aria-label="Open menu"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 text-white border-white/10">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id, offset);
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-base text-blue-100 hover:text-white transition-all duration-300"
                    >
                      {item.name}
                    </button>
                  ))}
                  <Button
                    className="mt-4 rounded-full bg-white text-blue-700 hover:bg-blue-50 h-9 px-4 text-sm shadow-md hover:shadow-lg"
                    onClick={() => {
                      scrollToFooter(offset);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Blog
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
