import { useEffect } from "react";              // ✅ add this
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Droplets,
  Smartphone,
  Receipt,
  Cpu,
  CalendarDays,
} from "lucide-react";

/** Steps for the timeline */
const steps = [
  { icon: Droplets, title: "Save Your Used Oil", description: "After frying or cooking, let the oil cool and pour it into our provided sealed drum.", step: "01" },
  { icon: Cpu, title: "Automatic Monitoring", description: "Real-time sensors track oil levels - no manual checks needed", step: "02" },
  { icon: Smartphone, title: "Cloud Dashboard", description: "You see live updates and collection history anytime,anywhere", step: "03" },
  { icon: CalendarDays, title: "Smart Scheduling", description: "Pickups are triggered at the right time - no overflows or delays.", step: "04" },
  { icon: Receipt, title: "Transparent Handover", description: "Our team collects, and you receive a digital weight slip instantly.", step: "05" },
];

const HowItWorks = () => {
  /* 🔑 Scroll to top when this page is mounted */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); // or "smooth" if you prefer a smooth scroll
  }, []);

  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24">
        <section
          id="how-it-works"
          className="relative py-8 sm:py-10 overflow-x-hidden"
        >
          {/* Background accents */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
            <div className="absolute -bottom-28 -left-20 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-emerald-50/60 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-10 sm:mb-14 animate-fade-in">
              <Badge variant="secondary" className="px-3 py-1 text-xs sm:text-sm bg-lime-100">
                Simple • Transparent • Impactful
              </Badge>
              <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                How It{" "}
                <span className="bg-gradient-to-r from-green-700 to-emerald-400 bg-clip-text text-transparent">
                  Works
                </span>
              </h2>
              <p className="mt-2 sm:mt-3 text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                A clean, compliant way to handle your used cooking oil—end to end.
              </p>
            </div>

            {/* Desktop timeline */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200" />
                <div className="grid grid-cols-5 gap-6 items-stretch">
                  {steps.map((s, i) => (
                    <div
                      key={s.step}
                      className="relative flex flex-col h-full [animation:fadeIn_.6s_ease_forwards] opacity-0"
                      style={{ animationDelay: `${i * 120}ms` }}
                    >
                      <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-6 shadow-[0_8px_24px_rgba(16,185,129,0.35)] bg-teal-300">
                        {s.step}
                      </div>

                      <Card className="flex flex-col h-full min-h-[240px] p-6 text-center backdrop-blur border border-emerald-100 hover:border-emerald-300/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl bg-teal-200">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-4 shadow-inner">
                          <s.icon className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                        <div className="mt-auto" />
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile vertical timeline */}
            <div className="lg:hidden space-y-4 sm:space-y-6">
              {steps.map((s, i) => (
                <Card
                  key={s.step}
                  className="p-4 sm:p-5 bg-white/90 backdrop-blur border border-emerald-100 rounded-2xl [animation:fadeIn_.5s_ease_forwards] opacity-0"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold shadow-[0_6px_20px_rgba(16,185,129,0.35)]">
                        {s.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1.5 sm:mb-2">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                          <s.icon className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                        </div>
                        <h3 className="text-sm sm:text-lg font-semibold">{s.title}</h3>
                      </div>
                      <p className="text-[13px] sm:text-base text-muted-foreground leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* After pickup section */}
            <div className="mt-16 flex justify-center">
              <div className="w-full max-w-3xl flex flex-col h-full rounded-2xl border border-emerald-200/60 backdrop-blur p-8 animate-fade-in bg-lime-100">
                <h3 className="text-2xl font-bold mb-4">What Happens After Pickup</h3>
                <ul className="space-y-3">
                  {[
                    "Sealed Drums are transported to authorized recyclers.",
                    "Full traceability with chain-of-custody records.",
                    "Recyclers perform testing & processing per regulations.",
                    "You retain receipts/compliance notes for your records.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto" />
              </div>
            </div>
          </div>

          {/* keyframes */}
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(6px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HowItWorks;
