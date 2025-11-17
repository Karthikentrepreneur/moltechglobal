import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductsServices from "@/components/ProductsServices";
import CertificationSg from "@/components/CertificationSg";
import GlobalPresence from "@/components/GlobalPresence";
import MissionSection from "@/components/MissionSection"; // ✅ newly added component
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";


/** Scroll to hash on first load/refresh */
function useScrollHashOnLoad(offset = 80) {
  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);
}

const Index = () => {
  useScrollHashOnLoad(80);

  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Keep content below the fixed header */}
      <main className="bg-transparent">
        {/* HOME / HERO */}
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-24">
          <AboutSection />
        </section>

        {/* ✅ MISSION PREVIEW (new component section) */}
        <section id="mission" className="scroll-mt-24">
          <MissionSection />
        </section>

        {/* PRODUCTS */}
        <section id="products" className="scroll-mt-24">
          <ProductsServices />
        </section>

        {/* CAREERS */}
        <section id="careers" className="scroll-mt-24">
          <CertificationSg />
        </section>

        {/* GLOBAL */}


        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
