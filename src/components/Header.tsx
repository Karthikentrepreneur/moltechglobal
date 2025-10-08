import { useState, type MouseEvent } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Products", to: "/products" },
    { name: "Global Presence", to: "/global" },
    { name: "Blog", to: "/blog" },
    { name: "Contact", to: "/contact" }, // CTA
  ];

  const linkClasses =
    "text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200";

  const offset = 88;
  const isHome = location.pathname === "/" || location.pathname === "/home";

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (!isHome) return;
    event.preventDefault();
    scrollToSection("home", offset);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <nav className="flex w-full items-center justify-between">
          {/* Logo */}
          <button
            onClick={(event) => {
              if (isHome) {
                event.preventDefault();
                scrollToSection("home", offset);
              } else {
                window.location.href = "/";
              }
            }}
            aria-label="Go to top"
            className="flex flex-col items-start select-none"
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
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => {
              const isHomeItem = item.to === "/";

              if (item.name === "Contact") {
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex h-10 items-center rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 px-5 text-sm font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
                  >
                    {item.name}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={isHomeItem ? handleHomeClick : undefined}
                  className={linkClasses}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Nav */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="grid h-9 w-9 place-items-center rounded-md border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50"
                  aria-label="Open menu"
                >
                  <Menu className="h-4 w-4" />
                </button>
              </SheetTrigger>
              <SheetContent className="bg-white text-slate-800">
                <div className="mt-8 flex flex-col gap-4">
                  {navItems.map((item) => {
                    const isHomeItem = item.to === "/";

                    if (item.name === "Contact") {
                      return (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="mt-2 flex h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 px-6 text-sm font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
                        >
                          {item.name}
                        </Link>
                      );
                    }

                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={(event) => {
                          if (isHomeItem) {
                            handleHomeClick(event);
                          }
                          setIsMobileMenuOpen(false);
                        }}
                        className="text-base text-slate-600 transition-colors hover:text-slate-900"
                      >
                        {item.name}
                      </Link>
                    );
                  })}
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
