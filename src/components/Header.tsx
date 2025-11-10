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
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "/", sectionId: "home" },
    { name: "About", to: "/about" },
    { name: "Products", to: "/products" },
    { name: "Global Presence", to: "/global" },
    { name: "Careers", to: "/careers" },
    { name: "Blog", to: "/blog" },
    {
      name: "Tracking",
      to: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID,P0_ID:55,MOLTECH",
      external: true,
    },
    { name: "Contact", to: "/contact", isCta: true },
  ];

  const baseLink = "text-sm font-medium transition-colors duration-200";
  const linkClasses = `${baseLink} ${
    isScrolled
      ? "text-slate-600 hover:text-slate-900"
      : "text-white/90 hover:text-white"
  }`;

  const offset = 88;
  const isHome = location.pathname === "/" || location.pathname === "/home";

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
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm"
          : "bg-gradient-to-b from-black/70 via-black/0 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <nav className="flex w-full items-center justify-between">
          {/* Logo — left corner */}
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
            <span
              className={`text-[10.5px] font-semibold tracking-[0.18em] uppercase mt-1 select-none ${
                isScrolled ? "text-slate-500" : "text-white/80"
              }`}
            >
              Driving Sustainability
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => {
              if (item.external) {
                return (
                  <a
                    key={item.name}
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 items-center rounded-full px-5 text-sm font-semibold shadow-lg transition-shadow hover:shadow-xl bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white"
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
                    className="flex h-10 items-center rounded-full px-5 text-sm font-semibold shadow-lg transition-shadow hover:shadow-xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 text-white"
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
                  className={`grid h-9 w-9 place-items-center rounded-md transition-colors ${
                    isScrolled
                      ? "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      : "border border-white/50 bg-transparent text-white hover:bg-white/10"
                  }`}
                  aria-label="Open menu"
                >
                  <Menu className="h-4 w-4" />
                </button>
              </SheetTrigger>
              <SheetContent className="bg-white text-slate-800">
                <div className="mt-8 flex flex-col gap-4">
                  {navItems.map((item) => {
                    if (item.external) {
                      return (
                        <a
                          key={item.name}
                          href={item.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="mt-2 flex h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-6 text-sm font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
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
                        className="text-base text-slate-700 transition-colors hover:text-slate-900"F
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
F
