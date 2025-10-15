// src/components/ContactSection.tsx
import React from "react";
import { Mail, Phone, Clock } from "lucide-react";
import GetInTouchCard from "@/components/GetInTouchCard";

/* Small card used for Email / Call / Hours */
const ContactCard = ({
  icon,
  title,
  value,
  href,
  tint,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  tint: string; // e.g. "bg-gradient-to-br from-sky-400 to-sky-600"
}) => {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-white/85 backdrop-blur-sm shadow-md border border-white/40 p-5 hover:shadow-lg transition-all duration-300">
      <div className={`grid h-14 w-14 place-items-center rounded-2xl ${tint} text-white`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-base font-semibold text-gray-900">{title}</div>
        {href ? (
          <a href={href} className="block text-gray-600 hover:text-gray-900 mt-0.5">
            {value}
          </a>
        ) : (
          <div className="text-gray-600 mt-0.5">{value}</div>
        )}
      </div>
    </div>
  );
};

const ContactSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT — Only Email / Call / Hours */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F1B3D]">Contact</h2>
            <p className="text-slate-600 mt-2">
              Reach us through your preferred channel. We usually respond within a business day.
            </p>

            <div className="mt-6 space-y-5">
              <ContactCard
                icon={<Mail className="h-7 w-7" />}
                title="Email"
                value="hello@moltechglobal.com"
                href="mailto:hello@moltechglobal.com"
                tint="bg-gradient-to-br from-sky-400 to-sky-600"
              />
              <ContactCard
                icon={<Phone className="h-7 w-7" />}
                title="Call"
                value="+65 6000 0000"
                href="tel:+6560000000"
                tint="bg-gradient-to-br from-indigo-400 to-indigo-600"
              />
              <ContactCard
                icon={<Clock className="h-7 w-7" />}
                title="Hours"
                value="Mon–Fri · 9:00–18:00"
                tint="bg-gradient-to-br from-amber-400 to-amber-600"
              />
            </div>
          </div>

          {/* RIGHT — Form with blue gradient wrapper */}
          <div className="relative">
            <div className="rounded-[24px] bg-gradient-to-br from-blue-50 via-sky-100 to-blue-50 p-1 shadow-[0_20px_80px_rgba(2,6,23,0.12)]">
              <div className="rounded-[20px] bg-white shadow-xl p-6 md:p-10 contact-form">
                <GetInTouchCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* gentle bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />

      {/* Force a visible, blue-gradient submit button inside the form */}
      <style>{`
        .contact-form {
          overflow: visible;
        }
        .contact-form button[type="submit"],
        .contact-form button[data-submit],
        .contact-form .btn-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: .5rem;
          width: 100%;
          margin-top: 1rem;
          padding: 0.875rem 1rem;
          border-radius: 0.75rem;
          border: none;
          color: #fff !important;
          background-image: linear-gradient(90deg, #2563eb, #06b6d4);
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.25);
          transition: transform .15s ease, box-shadow .2s ease, filter .2s ease;
        }
        .contact-form button[type="submit"]:hover,
        .contact-form button[data-submit]:hover,
        .contact-form .btn-submit:hover {
          filter: brightness(1.05);
          box-shadow: 0 16px 38px rgba(37, 99, 235, 0.34);
          transform: translateY(-1px);
        }
        .contact-form button[type="submit"]:active,
        .contact-form button[data-submit]:active,
        .contact-form .btn-submit:active {
          transform: translateY(0);
          box-shadow: 0 10px 24px rgba(37, 99, 235, 0.25);
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
