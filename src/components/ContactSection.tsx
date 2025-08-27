import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

/** ⚙️ Country data — fill real addresses / map links when ready */
type Office = {
  country: string;
  city?: string;
  address?: string;
  mapUrl?: string; // optional Google Maps link
  note?: string;
};

const OFFICES: Office[] = [
  { country: "Australia", city: "Melbourne", address: "Moltech Pty Ltd, Level 10, Collins St, Melbourne VIC", mapUrl: "#" },
  { country: "Indonesia", city: "Jakarta", address: "Moltech Indonesia, SCBD District, Jl. Jend. Sudirman, Jakarta", mapUrl: "#" },
  { country: "Malaysia", city: "Kuala Lumpur", address: "Moltech Malaysia, Bangsar South, KL", mapUrl: "#" },
  { country: "Saudi Arabia", city: "Riyadh", address: "Moltech KSA, King Fahd Rd, Riyadh", mapUrl: "#" },
  { country: "Singapore", city: "Singapore", address: "Moltech HQ, 1 North Bridge Rd, Singapore", mapUrl: "#" },
  { country: "Thailand", city: "Bangkok", address: "Moltech Thailand, Rama IV Rd, Bangkok", mapUrl: "#" },
  { country: "UAE", city: "Dubai", address: "Moltech MENA, JLT Cluster, Dubai", mapUrl: "#" },
  { country: "UK", city: "London", address: "Moltech UK, Canary Wharf, London", mapUrl: "#" },
  { country: "USA", city: "Houston", address: "Moltech USA, Energy Corridor, Houston, TX", mapUrl: "#" },
];

const ContactSection = () => {
  const [selected, setSelected] = useState<string>("Singapore"); // default highlight

  const activeOffice = useMemo(
    () => OFFICES.find((o) => o.country.toLowerCase() === selected.toLowerCase()),
    [selected]
  );

  return (
    <section className="relative">
      {/* Hero: non-copyright 3D globe image */}
      <div className="relative h-[46vh] min-h-[320px] w-full overflow-hidden">
        <img
          src="/images/3d-globe.jpg" /* place a royalty-free 3D globe image here */
          alt="3D global network backdrop"
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-6 text-center text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Contact by Location
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-white/85">
              Reach the nearest Moltech office. Select a country to view our local location details.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          {/* Countries list — footer palette, compact height */}
          <Card className="bg-deep-navy/90 text-white border border-royal-blue/20 lg:col-span-1 rounded-2xl self-start">
            <CardHeader className="py-3">
              <CardTitle className="text-white text-base">Countries</CardTitle>
            </CardHeader>
            {/* Cap height and scroll the list to reduce overall height */}
            <CardContent className="pt-0 max-h-[420px] overflow-y-auto">
              <ul className="space-y-2">
                {OFFICES.map((o) => {
                  const isActive = o.country === selected;
                  return (
                    <li key={o.country}>
                      <button
                        onClick={() => setSelected(o.country)}
                        className={[
                          "w-full text-left px-4 py-2 text-sm",
                          "uppercase tracking-wide font-semibold",
                          "rounded-full border transition-all",
                          isActive
                            ? "bg-royal-blue text-white border-royal-blue shadow-sm"
                            : "bg-white text-royal-blue border-royal-blue/40 hover:bg-white/90 hover:shadow"
                        ].join(" ")}
                        aria-current={isActive ? "true" : "false"}
                      >
                        {o.country}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>

          {/* Office detail + map/preview — unchanged style */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="glass-card border-none">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-royal-blue">
                  <MapPin className="w-6 h-6" />
                  {activeOffice?.country || "Location"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">City</p>
                    <p className="text-lg font-semibold">
                      {activeOffice?.city ?? "—"}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="text-lg font-medium leading-relaxed">
                      {activeOffice?.address ?? "To be updated"}
                    </p>
                  </div>
                </div>

                {/* Map slot (optional): replace with your real Google Maps embed or link */}
                <div className="mt-4">
                  {activeOffice?.mapUrl && activeOffice.mapUrl !== "#" ? (
                    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border">
                      <iframe
                        src={activeOffice.mapUrl}
                        className="h-full w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        aria-label={`${activeOffice.country} office map`}
                      />
                    </div>
                  ) : (
                    <div className="aspect-video w-full rounded-2xl border border-dashed border-border grid place-items-center bg-white/50">
                      <div className="text-center px-6">
                        <p className="font-semibold text-foreground">
                          Map preview placeholder
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Add your Google Maps embed or link in <code>OFFICES.mapUrl</code>.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions (unchanged style) */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {activeOffice?.mapUrl && activeOffice.mapUrl !== "#" && (
                    <Button className="btn-hero" asChild>
                      <a href={activeOffice.mapUrl} target="_blank" rel="noreferrer">
                        Open in Maps
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    className="btn-ghost"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    Back to Top
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* ⛔ CTA banner removed as requested */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
