import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Truck,
  Factory,
  Recycle,
  Boxes,
  MapPin,
  ClipboardList,
} from "lucide-react";

/** Steps for the Collection & Feedstocks process */
const steps = [
  {
    icon: Boxes,
    title: "Store Your Used Cooking Oil",
    description:
      "Collect the used oil in our secure, sealed drums—no leaks, no odor.",
    step: "01",
  },
  {
    icon: MapPin,
    title: "Smart Location Tracking",
    description:
      "Your drums are tagged with GPS-based QR codes for full traceability.",
    step: "02",
  },
  {
    icon: Truck,
    title: "Scheduled Pickup",
    description:
      "Our collection team arrives on-time based on your usage pattern.",
    step: "03",
  },
  {
    icon: ClipboardList,
    title: "Digital Verification",
    description:
      "Weight, quantity, timestamps & signatures are digitally recorded.",
    step: "04",
  },
  {
    icon: Factory,
    title: "Feedstock Processing",
    description:
      "UCO is transferred to certified biodiesel plants for filtration & conversion.",
    step: "05",
  },
  {
    icon: Recycle,
    title: "Clean Energy Output",
    description:
      "Your used oil becomes high-quality biodiesel—reducing pollution & emissions.",
    step: "06",
  },
];

const CollectionFeedstocks = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Header />

      <main className="pt-20 sm:pt-24">
        <section className="relative py-10 overflow-x-hidden">
          {/* Background */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-lime-300/20 blur-3xl" />
            <div className="absolute -bottom-28 -left-20 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-lime-50/60 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <Badge variant="secondary" className="px-3 py-1 text-sm bg-lime-100">
                Collection • Feedstocks • Biodiesel
              </Badge>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                Collection &{" "}
                <span className="bg-gradient-to-r from-green-700 to-emerald-400 bg-clip-text text-transparent">
                  Feedstocks
                </span>
              </h2>

              <p className="mt-3 text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                From kitchen to clean energy—our end-to-end UCO collection and feedstock processing is fully compliant and trackable.
              </p>
            </div>

            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-200" />

                <div className="grid grid-cols-6 gap-6 items-stretch">
                  {steps.map((s, i) => (
                    <div
                      key={s.step}
                      className="relative flex flex-col h-full opacity-0 [animation:fadeIn_.7s_ease_forwards]"
                      style={{ animationDelay: `${i * 130}ms` }}
                    >
                      <div className="relative z-10 w-12 h-12 mx-auto mb-6 rounded-full bg-lime-400 flex items-center justify-center text-white font-bold shadow-[0_8px_24px_rgba(132,204,22,0.35)]">
                        {s.step}
                      </div>

                      <Card className="flex flex-col h-full min-h-[240px] p-6 text-center backdrop-blur border border-lime-200 hover:border-lime-400 transition-all duration-300 hover:shadow-xl rounded-2xl bg-lime-100">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white border border-lime-200 flex items-center justify-center shadow-inner">
                          <s.icon className="h-8 w-8 text-lime-700" />
                        </div>

                        <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {s.description}
                        </p>
                        <div className="mt-auto" />
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-5">
              {steps.map((s, i) => (
                <Card
                  key={s.step}
                  className="p-4 bg-white/90 backdrop-blur border border-lime-200 rounded-2xl opacity-0 [animation:fadeIn_.6s_ease_forwards]"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-lime-600 text-white flex items-center justify-center rounded-full font-semibold shadow-[0_6px_20px_rgba(132,204,22,0.35)]">
                      {s.step}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-lime-50 border border-lime-200 flex items-center justify-center">
                          <s.icon className="h-5 w-5 text-lime-700" />
                        </div>
                        <h3 className="text-lg font-semibold">{s.title}</h3>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Final Section */}
            <div className="mt-16 flex justify-center">
              <div className="w-full max-w-3xl rounded-2xl border border-lime-300 backdrop-blur p-8 bg-lime-100 animate-fade-in">
                <h3 className="text-2xl font-bold mb-4">Why It Matters</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-lime-700" />
                    <span className="text-muted-foreground">
                      Reduces illegal disposal & prevents drainage pollution.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-lime-700" />
                    <span className="text-muted-foreground">
                      Converts waste into profitable renewable fuel.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-lime-700" />
                    <span className="text-muted-foreground">
                      Ensures your business is 100% compliant with UCO regulations.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Keyframes */}
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

export default CollectionFeedstocks;
