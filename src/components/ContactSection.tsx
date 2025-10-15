import React, { useState } from "react";
import { Mail, Phone, Clock, Copy } from "lucide-react";
import GetInTouchCard from "@/components/GetInTouchCard";

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
  tint: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <div className="flex items-start gap-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-md border border-white/40 p-5 hover:shadow-lg transition-all duration-300">
      <div
        className={`grid h-14 w-14 place-items-center rounded-2xl ${tint} text-white`}
      >
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-base font-semibold text-gray-900">{title}</div>
        {href ? (
          <a
            href={href}
            className="block text-gray-600 hover:text-gray-900 mt-0.5"
          >
            {value}
          </a>
        ) : (
          <div className="text-gray-600 mt-0.5">{value}</div>
        )}
        <button
          onClick={handleCopy}
          className="mt-2 inline-flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 transition"
        >
          <Copy className="h-3.5 w-3.5" />
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

const ContactSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT SIDE — Contact Details */}
          <div className="space-y-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F1B3D]">
              Contact
            </h2>
            <p className="text-slate-600">
              Reach us through your preferred channel. We usually respond within
              a business day.
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

          {/* RIGHT SIDE — Form */}
          <div className="relative z-10">
            <div className="rounded-[24px] bg-gradient-to-br from-blue-50 via-sky-100 to-blue-50 p-1 shadow-[0_20px_80px_rgba(2,6,23,0.12)]">
              <div className="rounded-[20px] bg-white shadow-xl p-6 md:p-10">
                <GetInTouchCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white pointer-events-none" />
    </section>
  );
};

export default ContactSection;
