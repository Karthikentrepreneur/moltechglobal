// src/pages/Contact.tsx
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <main className="bg-white">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
export { Contact };
