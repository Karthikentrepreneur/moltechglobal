// src/components/ContactSection.tsx
import React from "react";
import { Mail, Phone, Clock } from "lucide-react";
import GetInTouchCard from "@/components/GetInTouchCard";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: Only Email, Call, Hours */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Contact</h2>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-sky-50">
                <Mail className="h-7 w-7 text-sky-500" />
              </div>
              <div>
                <div className="text-lg font-semibold">Email</div>
                <a
                  href="mailto:hello@moltechglobal.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  hello@moltechglobal.com
                </a>
              </div>
            </div>

            {/* Call */}
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-indigo-50">
                <Phone className="h-7 w-7 text-indigo-500" />
              </div>
              <div>
                <div className="text-lg font-semibold">Call</div>
                <a href="tel:+6560000000" className="text-gray-600 hover:text-gray-900">
                  +65 6000 0000
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-50">
                <Clock className="h-7 w-7 text-amber-600" />
              </div>
              <div>
                <div className="text-lg font-semibold">Hours</div>
                <div className="text-gray-600">Mon–Fri · 9:00–18:00</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="space-y-0">
            <GetInTouchCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
