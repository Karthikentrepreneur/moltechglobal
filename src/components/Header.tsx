import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

function scrollToSection(id: string, offset = 80) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Map header tabs to routes
  const navItems = [
    { name: "About", to: "/about" },
    { name: "Products", to: "/products" },
    { name: "Global Presence", to: "/global" },
    { name: "Careers", to: "/careers" },
    { name: "Contact", to: "/contact" }, // still in tabs if you want; you also have a CTA button
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

  const isHome = location.pathname === "/" || location.pathname === "/home";

  return (
    <header className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-full">
      <div className={pillClasses}>
        <nav className="flex items-center justify-between w-full">
          {/* Brand Logo + Tagline (scrolls to top on home, goes to / otherwise) */}
          <button
            onClick={() => {
              if (isHome) {
                scrollToSection("home", offset);
              } else {
                window.location.href = "/";
              }
            }}
            aria-label="Go to top"
            className={[
              "flex flex-col items-start select-none transition-transform duration-300",
              isScrolled ? "scale-[0.96]" : "scale-100",
            ].join(" ")}
          >
            <div className="flex items-center gap-2">
              <img
                src="/Moltechlogo.png"
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
              <Link key={item.to} to={item.to} className={linkClasses}>
                {item.name}
              </Link>
            ))}

            {/* Contact button (white pill like your current Blog) */}
            <Link to="/contact">
              <Button
                size="sm"
                className="rounded-full bg-white text-blue-700 hover:bg-blue-50 h-8 px-3 text-xs shadow-md hover:shadow-lg"
              >
                Contact
              </Button>
            </Link>

            {/* Blog button (NO white bg) */}
            <Link to="/blog">
              <Button
                size="sm"
                variant="outline"
                className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/15 h-8 px-3 text-xs shadow-md hover:shadow-lg"
              >
                Blog
              </Button>
            </Link>
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
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-base text-blue-100 hover:text-white transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Contact (white pill) */}
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="mt-4 rounded-full bg-white text-blue-700 hover:bg-blue-50 h-9 px-4 text-sm shadow-md hover:shadow-lg w-full">
                      Contact
                    </Button>
                  </Link>

                  {/* Blog (no white) */}
                  <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="mt-2 rounded-full border-white/20 bg-white/10 text-white hover:bg-white/15 h-9 px-4 text-sm shadow-md hover:shadow-lg w-full">
                      Blog
                    </Button>
                  </Link>
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
