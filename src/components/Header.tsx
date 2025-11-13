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

  const ventureTextColor = isScrolled ? "text-slate-500" : "text-white/70";
  const ventureBorderColor = isScrolled
    ? "border-slate-200"
    : "border-white/30";

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm"
          : "bg-gradient-to-b from-black/50 via-black/10 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        <nav className="flex w-full items-center justify-between gap-4">
          

          {/* LEFT: MOLTECH + TAGLINE + ONE GLOBAL */}
          <div className="flex items-center gap-4 min-w-0">

            {/* Moltech */}
            <Link
              to="/"
              onClick={(event) => handleNavItemClick(event, navItems[0])}
              aria-label="Go to top"
              className="flex select-none flex-col items-start"
            >
              <img
                src="/Moltechlogo.png"
                alt="Moltech Logo"
                className="h-8 w-auto object-contain"
              />
              <span
                className={`mt-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] ${
                  isScrolled ? "text-slate-500" : "text-white/80"
                }`}
              >
                Driving Sustainability
              </span>
            </Link>

            {/* One Global (Transparent → Singapore.png, Scrolled → group.png) */}
            <div
              className={`hidden sm:flex items-center gap-2 pl-3 border-l ${ventureBorderColor}`}
            >
              <span
                className={`text-[10px] uppercase tracking-[0.16em] font-medium ${ventureTextColor}`}
              >
                
              </span>

              <a
                href="https://www.1ge.sg/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img
                  src={isScrolled ? "/group.png" : "/Singapore.png"}
                  alt="1 Global Enterprises"
                  className={`w-auto object-contain ${
                    isScrolled ? "h-10" : "h-10"
                  }`}
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
                    className="flex h-10 items-center rounded-full px-5 text-sm font-semibold bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white shadow-lg hover:shadow-xl"
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
                    className="flex h-10 items-center rounded-full px-5 text-sm font-semibold bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 text-white shadow-lg hover:shadow-xl"
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


          {/* Mobile */}
          <div className="lg:hidden flex-shrink-0">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className={`grid h-9 w-9 place-items-center rounded-md ${
                    isScrolled
                      ? "border border-slate-200 bg-white text-slate-600"
                      : "border border-white/50 bg-transparent text-white"
                  }`}
                >
                  <Menu className="h-4 w-4" />
                </button>
              </SheetTrigger>

              <SheetContent className="bg-white text-slate-800">

                {/* Mobile Logos */}
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src="/Moltechlogo.png"
                    className="h-8 w-auto"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-semibold tracking-[0.18em] text-slate-500">
                      Driving Sustainability
                    </span>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                        A venture of
                      </span>
                      <img
                        src="/group.png"
                        className="h-5"
                        alt="1GE"
                      />
                    </div>
                  </div>
                </div>


                <div className="mt-8 flex flex-col gap-4">
                  {navItems.map((item) => {
                    if (item.external) {
                      return (
                        <a
                          key={item.name}
                          href={item.to}
                          target="_blank"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white shadow-lg"
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
                          className="flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 text-white shadow-lg"
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
                        className="text-base text-slate-700"
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
