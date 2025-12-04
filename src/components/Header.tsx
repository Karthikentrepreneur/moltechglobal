import { useState, useEffect, type MouseEvent } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", to: "/", sectionId: "home" },
    { name: "About", to: "/about" },
    { name: "Products & Services", to: "/products" },
    { name: "Global Presence", to: "/global" },
    { name: "Contact Us", to: "/contact", isCta: true },
  ];

  const offset = 88;
  const isHome = location.pathname === "/" || location.pathname === "/home";

  // Always white header
  const isTransparent = false;

  const baseLink = "text-sm font-medium transition-colors duration-200";
  const linkClasses = `${baseLink} text-slate-700 hover:text-slate-900`;

  const handleNavItemClick = (
    event: MouseEvent<HTMLAnchorElement>,
    item: (typeof navItems)[number],
    shouldCloseMenu = false
  ) => {
    if (item.sectionId) {
      event.preventDefault();
      if (isHome) scrollToSection(item.sectionId, offset);
      else navigate(`/#${item.sectionId}`);
    }
    if (shouldCloseMenu) setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        <nav className="flex w-full items-center justify-between gap-4">
          {/* Left cluster: Moltech logo + tagline */}
          <div className="flex items-center gap-4 min-w-0">
            <Link
              to="/"
              onClick={(event) => handleNavItemClick(event, navItems[0])}
              aria-label="Go to top"
              className="flex select-none flex-col items-start"
            >
              <div className="flex items-center gap-2">
                <img
                  src="/Moltechlogo.png"
                  alt="Moltech Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <span className="mt-1 select-none text-[10.5px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Driving Sustainability
              </span>
            </Link>

            {/* One Global */}
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-slate-200">
              <a
                href="https://www.1ge.sg/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img
                  src="/group.png"
                  alt="1 Global Enterprises, Singapore"
                  className="h-10 w-auto object-contain"
                />
              </a>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => {
              if (item.external) {
                return (
                  <a
                    key={item.name}
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 items-center rounded-full px-5 text-sm font-semibold shadow-lg transition-shadow hover:shadow-xl bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white whitespace-nowrap"
                  >
                    {item.name}
                  </a>
                );
              }

              if (item.isCta) {
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex h-10 items-center rounded-full px-5 text-sm font-semibold shadow-lg transition-shadow hover:shadow-xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 text-white whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={(event) => handleNavItemClick(event, item)}
                  className={`${linkClasses} whitespace-nowrap`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Nav */}
          <div className="lg:hidden flex-shrink-0">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="grid h-9 w-9 place-items-center rounded-md border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="h-4 w-4" />
                </button>
              </SheetTrigger>

              <SheetContent className="bg-white text-slate-800">
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src="/Moltechlogo.png"
                    alt="Moltech Logo"
                    className="h-8 w-auto object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Driving Sustainability
                    </span>
                    <div className="mt-1 flex items-center gap-2">
                      <img
                        src="/group.png"
                        alt="1 Global Enterprises, Singapore"
                        className="h-5 w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4">
                  {navItems.map((item) => {
                    if (item.isCta) {
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
                        onClick={(event) =>
                          handleNavItemClick(event, item, true)
                        }
                        className="text-base text-slate-700 transition-colors hover:text-slate-900"
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
