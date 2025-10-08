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
    { name: "Blog", to: "/blog" },
    { name: "Contact", to: "/contact" }, // CTA
  ];

  const pillClasses = [
    "mx-auto flex items-center justify-between rounded-full transition-all duration-300",
    "bg-white/95 border border-slate-200/80",
    isScrolled
      ? "shadow-md h-16 w-[92vw] max-w-5xl px-6"
      : "shadow h-20 w-[95vw] max-w-6xl px-8",
  ].join(" ");

  const linkClasses =
    "text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200";

  const offset = isScrolled ? 72 : 88;
  const isHome = location.pathname === "/" || location.pathname === "/home";

  return (
    <header
      className={[
        "fixed top-3 left-1/2 -translate-x-1/2 z-50 w-full px-4",
        "transition-all duration-300",
        isScrolled ? "scale-[0.99]" : "scale-100",
      ].join(" ")}
    >
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
            <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-slate-500">
              Driving Sustainability
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) =>
              item.name === "Contact" ? (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 text-white h-9 px-5 text-xs font-semibold shadow-lg hover:shadow-xl flex items-center"
                >
                  {item.name}
                </Link>
              ) : (
                <Link key={item.to} to={item.to} className={linkClasses}>
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Nav */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 h-9 w-9 grid place-items-center"
                  aria-label="Open menu"
                >
                  <Menu className="h-4 w-4" />
                </button>
              </SheetTrigger>
              <SheetContent className="bg-white text-slate-800">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) =>
                    item.name === "Contact" ? (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mt-2 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 text-white h-10 px-6 text-sm font-semibold shadow-lg hover:shadow-xl w-full flex items-center justify-center"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-base text-slate-600 hover:text-slate-900 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
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
