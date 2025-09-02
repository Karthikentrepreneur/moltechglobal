import { useMemo, useState, FormEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Copy, ExternalLink } from "lucide-react";

/* ---------- Office data ---------- */
type Office = {
  country: string;
  city?: string;
  address?: string;
  mapUrl?: string;
};
const OFFICES: Office[] = [{
  country: "Australia",
  city: "Melbourne",
  address: "Moltech Pty Ltd, Level 10, Collins St, Melbourne VIC",
  mapUrl: "#"
}, {
  country: "Indonesia",
  city: "Jakarta",
  address: "Moltech Indonesia, SCBD District, Jl. Jend. Sudirman, Jakarta",
  mapUrl: "#"
}, {
  country: "Malaysia",
  city: "Kuala Lumpur",
  address: "Moltech Malaysia, Bangsar South, KL",
  mapUrl: "#"
}, {
  country: "Saudi Arabia",
  city: "Riyadh",
  address: "Moltech KSA, King Fahd Rd, Riyadh",
  mapUrl: "#"
}, {
  country: "Singapore",
  city: "Singapore",
  address: "Moltech HQ, 1 North Bridge Rd, Singapore",
  mapUrl: "#"
}, {
  country: "Thailand",
  city: "Bangkok",
  address: "Moltech Thailand, Rama IV Rd, Bangkok",
  mapUrl: "#"
}, {
  country: "UAE",
  city: "Dubai",
  address: "Moltech MENA, JLT Cluster, Dubai",
  mapUrl: "#"
}, {
  country: "UK",
  city: "London",
  address: "Moltech UK, Canary Wharf, London",
  mapUrl: "#"
}, {
  country: "USA",
  city: "Houston",
  address: "Moltech USA, Energy Corridor, Houston, TX",
  mapUrl: "#"
}];

/* Small emoji flags (optional) */
const FLAG: Record<string, string> = {
  Australia: "🇦🇺",
  Indonesia: "🇮🇩",
  Malaysia: "🇲🇾",
  "Saudi Arabia": "🇸🇦",
  Singapore: "🇸🇬",
  Thailand: "🇹🇭",
  UAE: "🇦🇪",
  UK: "🇬🇧",
  USA: "🇺🇸"
};

/* ---------- Get in touch form (inline component) ---------- */
function GetInTouchCard() {
  const LOCATIONS = OFFICES.map(o => o.country);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("Contact form:", data);
    alert("Thanks! We’ll be in touch.");
    e.currentTarget.reset();
  };
  return <section className="relative py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.12)] px-6 sm:px-10 py-8 sm:py-10">
        <h3 className="text-center text-3xl sm:text-[34px] font-semibold text-foreground mb-8">
          Get in touch
        </h3>

        <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input name="name" placeholder="Type your name" required className="h-11" />
          <Input name="email" type="email" placeholder="Type your email" required className="h-11" />

          <Input name="phone" placeholder="Phone" className="h-11" />
          <select name="location" defaultValue="" className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-muted-foreground
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue">
            <option value="" disabled>Select Location</option>
            {LOCATIONS.map(c => <option key={c} value={c}>{c}</option>)}
          </select>

          <Input name="purpose" placeholder="Purpose" className="h-11" />
          <Input name="transportation" placeholder="Transportation Method" className="h-11" />

          <div className="sm:col-span-2">
            <Textarea name="comment" placeholder="Comment" rows={6} />
          </div>

          <div className="sm:col-span-2">
            <Button type="submit" className="bg-royal-blue hover:bg-royal-blue/90 text-white px-6">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>;
}

/* ---------- Main Contact Section ---------- */
export default function ContactSection() {
  const [selected, setSelected] = useState<string>("Singapore");
  const officesSorted = useMemo(() => [...OFFICES].sort((a, b) => a.country.localeCompare(b.country)), []);
  const activeOffice = useMemo(() => officesSorted.find(o => o.country.toLowerCase() === selected.toLowerCase()), [officesSorted, selected]);
  const copyAddress = async () => {
    if (!activeOffice?.address) return;
    try {
      await navigator.clipboard.writeText(activeOffice.address);
    } catch {
      /* silent */
    }
  };
  return <section className="relative">
      {/* Hero */}
      <div className="relative h-[42vh] min-h-[300px]">
        <img src="/images/3d-globe.jpg" alt="3D global network backdrop" className="h-full w-full object-cover" loading="eager" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="absolute inset-0 grid place-items-center text-center text-white px-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Contact by Location
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-white/85">Select a country to view our nearest office details a map.</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[420px,1fr] gap-8">
          {/* Countries box (centered, no search, no scroll) */}
          <Card className="mx-auto w-full max-w-[420px] rounded-3xl
                       border border-royal-blue/25 bg-gradient-to-b from-deep-navy to-deep-navy/90
                       text-white shadow-xl self-start text-center">
            <CardHeader className="py-4">
              <CardTitle className="text-white/95 text-lg">Countries</CardTitle>
            </CardHeader>

            <CardContent className="pt-0">
              <ul className="space-y-2">
                {officesSorted.map(o => {
                const isActive = o.country === selected;
                return <li key={o.country}>
                      <button onClick={() => setSelected(o.country)} className={["mx-auto block w-full text-left px-5 py-2.5 text-sm", "rounded-full border transition-all", "uppercase tracking-wide font-semibold shadow-sm", "focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue/60", isActive ? "bg-royal-blue text-white border-royal-blue" : "bg-white text-royal-blue border-royal-blue/40 hover:bg-white/90 hover:shadow"].join(" ")} aria-current={isActive ? "true" : "false"} aria-pressed={isActive}>
                        <span className="mr-2">{FLAG[o.country] ?? "🌍"}</span>
                        {o.country}
                      </button>
                    </li>;
              })}
              </ul>
            </CardContent>
          </Card>

          {/* Details panel */}
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
                  <p className="text-xl font-semibold text-foreground">
                    {activeOffice?.city ?? "—"}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Address</p>
                  <p className="text-lg font-medium leading-relaxed text-foreground">
                    {activeOffice?.address ?? "To be updated"}
                  </p>
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" className="border-royal-blue/40 text-royal-blue hover:bg-royal-blue/10" onClick={copyAddress}>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                    {activeOffice?.mapUrl && activeOffice.mapUrl !== "#" && <Button className="btn-hero" asChild>
                        <a href={activeOffice.mapUrl} target="_blank" rel="noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Open in Maps
                        </a>
                      </Button>}
                  </div>
                </div>
              </div>

              {/* Map */}
              <div>
                {activeOffice?.mapUrl && activeOffice.mapUrl !== "#" ? <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border">
                    <iframe src={activeOffice.mapUrl} className="h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" aria-label={`${activeOffice?.country} office map`} />
                  </div> : <div className="aspect-video w-full rounded-2xl border border-dashed border-border grid place-items-center bg-white/60">
                    <div className="text-center px-6">
                      <p className="font-semibold text-foreground">Map preview placeholder</p>
                      <p className="text-sm text-muted-foreground">
                        Add your Google Maps embed URL to <code>mapUrl</code> for this office.
                      </p>
                    </div>
                  </div>}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Get in touch form card */}
      <GetInTouchCard />
    </section>;
}