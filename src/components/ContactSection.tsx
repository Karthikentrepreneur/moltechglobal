import { useState, useMemo, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Copy, ExternalLink } from "lucide-react";

/** Country data — fill real addresses / map links when ready */
type Office = {
  country: string;
  city?: string;
  address?: string;
  mapUrl?: string; // optional Google Maps link
};
const OFFICES: Office[] = [
  { country: "Australia",  city: "Melbourne",   address: "Moltech Pty Ltd, Level 10, Collins St, Melbourne VIC", mapUrl: "#" },
  { country: "Indonesia",  city: "Jakarta",     address: "Moltech Indonesia, SCBD District, Jl. Jend. Sudirman, Jakarta", mapUrl: "#" },
  { country: "Malaysia",   city: "Kuala Lumpur",address: "Moltech Malaysia, Bangsar South, KL",                 mapUrl: "#" },
  { country: "Saudi Arabia", city:"Riyadh",     address: "Moltech KSA, King Fahd Rd, Riyadh",                   mapUrl: "#" },
  { country: "Singapore",  city: "Singapore",   address: "Moltech HQ, 1 North Bridge Rd, Singapore",            mapUrl: "#" },
  { country: "Thailand",   city: "Bangkok",     address: "Moltech Thailand, Rama IV Rd, Bangkok",               mapUrl: "#" },
  { country: "UAE",        city: "Dubai",       address: "Moltech MENA, JLT Cluster, Dubai",                    mapUrl: "#" },
  { country: "UK",         city: "London",      address: "Moltech UK, Canary Wharf, London",                    mapUrl: "#" },
  { country: "USA",        city: "Houston",     address: "Moltech USA, Energy Corridor, Houston, TX",           mapUrl: "#" },
];

/** Flag emoji (simple, lightweight) */
const FLAG: Record<string, string> = {
  Australia: "🇦🇺",
  Indonesia: "🇮🇩",
  Malaysia: "🇲🇾",
  "Saudi Arabia": "🇸🇦",
  Singapore: "🇸🇬",
  Thailand: "🇹🇭",
  UAE: "🇦🇪",
  UK: "🇬🇧",
  USA: "🇺🇸",
};

const ContactSection = () => {
  const [selected, setSelected] = useState<string>("Singapore");
  const [query, setQuery] = useState("");

  // sort then filter for a clean, modern nav
  const officesSorted = useMemo(
    () => [...OFFICES].sort((a, b) => a.country.localeCompare(b.country)),
    []
  );
  const filtered = useMemo(
    () =>
      officesSorted.filter((o) =>
        o.country.toLowerCase().includes(query.trim().toLowerCase())
      ),
    [officesSorted, query]
  );

  const activeOffice = useMemo(
    () => officesSorted.find((o) => o.country.toLowerCase() === selected.toLowerCase()),
    [officesSorted, selected]
  );

  // auto-scroll selected pill into view
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  useEffect(() => {
    const el = itemRefs.current[selected];
    if (el) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [selected]);

  const copyAddress = async () => {
    if (!activeOffice?.address) return;
    try {
      await navigator.clipboard.writeText(activeOffice.address);
    } catch {
      // no-op (avoid noisy alerts)
    }
  };

  return (
    <section className="relative">
      {/* Hero */}
      <div className="relative h-[42vh] min-h-[300px]">
        <img
          src="/images/3d-globe.jpg"
          alt="3D global network backdrop"
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="absolute inset-0 grid place-items-center text-center text-white px-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Contact by Location</h2>
            <p className="mt-3 max-w-2xl mx-auto text-white/85">
              Select a country to view our nearest office details and map.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[420px,1fr] gap-8">
          {/* ==== Sidebar (centered card, trendy glass/gradient) ==== */}
          <Card
            className="mx-auto w-full max-w-[420px] rounded-3xl
                       border border-royal-blue/25 bg-gradient-to-b from-deep-navy to-deep-navy/90
                       text-white shadow-xl lg:sticky lg:top-24 self-start"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-white/95 text-lg">Countries</CardTitle>
              <div className="mt-3">
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search country…"
                  className="bg-white text-foreground placeholder:text-muted-foreground/70 border-royal-blue/30"
                />
              </div>
            </CardHeader>

            <CardContent className="pt-0 max-h-[62vh] overflow-y-auto pr-1">
              <ul className="space-y-2">
                {filtered.map((o) => {
                  const isActive = o.country === selected;
                  return (
                    <li key={o.country}>
                      <button
                        ref={(node) => (itemRefs.current[o.country] = node)}
                        onClick={() => setSelected(o.country)}
                        className={[
                          "mx-auto block w-full text-left px-5 py-2.5 text-sm",
                          "rounded-full border transition-all will-change-transform",
                          "uppercase tracking-wide font-semibold shadow-sm",
                          "focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue/60",
                          isActive
                            ? "bg-royal-blue text-white border-royal-blue translate-x-0"
                            : "bg-white text-royal-blue border-royal-blue/40 hover:bg-white/90 hover:shadow",
                        ].join(" ")}
                        aria-current={isActive ? "true" : "false"}
                        aria-pressed={isActive}
                      >
                        <span className="mr-2">{FLAG[o.country] ?? "🌍"}</span>
                        {o.country}
                      </button>
                    </li>
                  );
                })}
                {filtered.length === 0 && (
                  <li className="text-center text-blue-200 py-4">No matches</li>
                )}
              </ul>
            </CardContent>
          </Card>

          {/* ==== Details Panel (clean, airy card) ==== */}
          <Card className="glass-card border border-border/60 rounded-3xl">
            <CardHeader className="pb-1">
              <CardTitle className="flex items-center gap-3 text-royal-blue text-2xl sm:text-3xl">
                <MapPin className="w-6 h-6" />
                {activeOffice?.country || "Location"}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Info grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">City</p>
                  <p className="text-xl font-semibold text-foreground">{activeOffice?.city ?? "—"}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Address</p>
                  <p className="text-lg font-medium leading-relaxed text-foreground">
                    {activeOffice?.address ?? "To be updated"}
                  </p>
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      className="border-royal-blue/40 text-royal-blue hover:bg-royal-blue/10"
                      onClick={copyAddress}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                    {activeOffice?.mapUrl && activeOffice.mapUrl !== "#" && (
                      <Button className="btn-hero" asChild>
                        <a href={activeOffice.mapUrl} target="_blank" rel="noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Open in Maps
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Map */}
              <div>
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
                  <div className="aspect-video w-full rounded-2xl border border-dashed border-border grid place-items-center bg-white/60">
                    <div className="text-center px-6">
                      <p className="font-semibold text-foreground">Map preview placeholder</p>
                      <p className="text-sm text-muted-foreground">
                        Add your Google Maps embed URL to <code>mapUrl</code> for this office.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Back to top (kept minimal) */}
              <div className="flex gap-3">
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
