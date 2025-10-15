// src/pages/Contact.tsx
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-gradient-to-b from-green-50 via-white to-blue-50 overflow-hidden">
        {/* Ensure enough padding to avoid clipping the form or footer */}
        <div className="pt-10 pb-20">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
export { Contact };
