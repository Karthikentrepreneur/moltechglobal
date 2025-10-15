// src/components/ContactSection.tsx
import React, { useState } from "react";
import { Mail, Phone, Clock, Copy } from "lucide-react";
import GetInTouchCard from "@/components/GetInTouchCard";

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 shadow-sm">
    {children}
  </span>
);

const ContactRow = ({
  icon,
  title,
  value,
  href,
  tint = "sky",
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  tint?: "sky" | "indigo" | "amber";
}) => {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  const tintMap: Record<string, string> = {
    sky: "from-sky-100 to-sky-50 text-sky-700 ring-sky-200",
    indigo: "from-indigo-100 to-indigo-50 text-indigo-700 ring-indigo-200",
    amber: "from-amber-100 to-amber-50 text-amber-700 ring-amber-200",
  };

  return (
    <div className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white/60 p-4 sm:p-5 shadow-[0_6px_28px_rgba(2,6,23,0.06)] hover:shadow-[0_10px_36px_rgba(2,6,23,0.10)] transition-shadow">
      <div
        className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${tintMap[tint]} ring-1`}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <div className="text-base font-semibold text-slate-900">{title}</div>
          <Badge>24h reply</Badge>
        </div>

        {href ? (
          <a
            href={href}
            className="mt-1 block max-w-full truncate text-slate-600 hover:text-slate-900"
          >
            {value}
          </a>
        ) : (
          <div className="mt-1 text-slate-600">{value}</div>
        )}

        {/* Copy action */}
        <button
          onClick={onCopy}
          className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600 hover:text-slate-900 hover:border-slate-300 transition"
          aria-label={`Copy ${title}`}
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
    <section className="relative bg-white">
      {/* Decorative top gradient line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-blue-500/60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* LEFT: Only Email / Call / Hours */}
          <div className="order-1">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F1B3D]">
              Contact
            </h2>
            <p className="mt-2 text-slate-600">
              Reach us through your preferred channel. We usually respond within a business day.
            </p>

            <div className="mt-8 space-y-5">
              <ContactRow
                icon={<Mail className="h-7 w-7" />}
                title="Email"
                value="hello@moltechglobal.com"
                href="mailto:hello@moltechglobal.com"
                tint="sky"
              />
              <ContactRow
                icon={<Phone className="h-7 w-7" />}
                title="Call"
                value="+65 6000 0000"
                href="tel:+6560000000"
                tint="indigo"
              />
              <ContactRow
                icon={<Clock className="h-7 w-7" />}
                title="Hours"
                value="Mon–Fri · 9:00–18:00"
                tint="amber"
              />
            </div>

            {/* Small reassurance row */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <Badge>No spam</Badge>
              <Badge>Regional support</Badge>
              <Badge>ISCC-aware responses</Badge>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="order-2">
            {/* Optional heading shadow wrapper for depth */}
            <div className="rounded-[22px] bg-white p-1 shadow-[0_20px_80px_rgba(2,6,23,0.12)]">
              <GetInTouchCard />
            </div>
          </div>
        </div>
      </div>

      {/* Soft bottom gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
};

export default ContactSection;
