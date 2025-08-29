import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
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

  const navItems = [
    { name: "About", to: "/about" },
    { name: "Products", to: "/products" },
    { name: "Global Presence", to: "/global" },
    { name: "Careers", to: "/careers" },
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
          {/* Logo */}
          <button
            onClick={() => {
              if (isHome) scrollToSection("home", offset);
              else window.location.href = "/";
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

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className={linkClasses}>
                {item.name}
              </Link>
            ))}

            {/* ✅ Blog button (white pill style) */}
            <Link
              to="/blog"
              className="rounded-full bg-white text-blue-700 hover:bg-blue-50 h-8 px-3 text-xs shadow-md hover:shadow-lg flex items-center"
            >
              Blog
            </Link>
          </div>

          {/* Mobile Nav */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 h-8 w-8 grid place-items-center"
                  aria-label="Open menu"
                >
                  <Menu className="h-4 w-4" />
                </button>
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

                  {/* ✅ Blog button for mobile */}
                  <Link
                    to="/blog"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-4 rounded-full bg-white text-blue-700 hover:bg-blue-50 h-9 px-4 text-sm shadow-md hover:shadow-lg w-full flex items-center justify-center"
                  >
                    Blog
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
