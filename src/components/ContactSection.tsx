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
const OFFICES: Office[] = [
  { country: "Australia",  city: "Melbourne", address: "Moltech Pty Ltd, Level 10, Collins St, Melbourne VIC", mapUrl: "#" },
  { country: "Indonesia",  city: "Jakarta",   address: "Moltech Indonesia, SCBD District, Jl. Jend. Sudirman, Jakarta", mapUrl: "#" },
  { country: "Malaysia",   city: "Kuala Lumpur", address: "Moltech Malaysia, Bangsar South, KL", mapUrl: "#" },
  { country: "Saudi Arabia", city: "Riyadh",  address: "Moltech KSA, King Fahd Rd, Riyadh", mapUrl: "#" },
  { country: "Singapore",  city: "Singapore", address: "Moltech HQ, 1 North Bridge Rd, Singapore", mapUrl: "#" },
  { country: "Thailand",   city: "Bangkok",   address: "Moltech Thailand, Rama IV Rd, Bangkok", mapUrl: "#" },
  { country: "UAE",        city: "Dubai",     address: "Moltech MENA, JLT Cluster, Dubai", mapUrl: "#" },
  { country: "UK",         city: "London",    address: "Moltech UK, Canary Wharf, London", mapUrl: "#" },
  { country: "USA",        city: "Houston",   address: "Moltech USA, Energy Corridor, Houston, TX", mapUrl: "#" },
];

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
  USA: "🇺🇸",
};

/* ---------- Get in touch form (card) ---------- */
function GetInTouchCard() {
  const LOCATIONS = OFFICES.map((o) => o.country);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("Contact form:", data);
    alert("Thanks! We’ll be in touch.");
    e.currentTarget.reset();
  };

  return (
    <Card className="rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.12)]">
      <CardHeader>
        <CardTitle className="text-3xl sm:text-[34px] text-foreground text-center">Get in touch</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input name="name" placeholder="Type your name" required className="h-11" />
          <Input name="email" type="email" placeholder="Type your email" required className="h-11" />

          <Input name="phone" placeholder="Phone" className="h-11" />
          <select
            name="location"
            defaultValue=""
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-muted-foreground
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue"
          >
            <option value="" disabled>
              Select Location
            </option>
            {LOCATIONS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
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
      </CardContent>
    </Card>
  );
}

/* ---------- Main Contact Section ---------- */
export default function ContactSection() {
  const [selected, setSelected] = useState<string>("Singapore");

  const officesSorted = useMemo(
    () => [...OFFICES].sort((a, b) => a.country.localeCompare(b.country)),
    []
  );
  const activeOffice = useMemo(
    () => officesSorted.find((o) => o.country.toLowerCase() === selected.toLowerCase()),
    [officesSorted, selected]
  );

  const copyAddress = async () => {
    if (!activeOffice?.address) return;
    try {
      await navigator.clipboard.writeText(activeOffice.address);
    } catch {
      /* silent */
    }
  };

  return (
    <section className="relative py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* 2-column layout: left content, right form */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: Offices list & details */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Our Offices</h3>

            {/* Country selector */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {officesSorted.map((o) => (
                <button
                  key={o.country}
                  onClick={() => setSelected(o.country)}
                  className={`rounded-lg border px-3 py-2 text-sm text-left transition ${
                    selected === o.country
                      ? "bg-royal-blue text-white border-royal-blue"
                      : "bg-white hover:bg-gray-50 border-gray-200"
                  }`}
                >
                  <span className="mr-2">{FLAG[o.country] || "🌍"}</span>
                  {o.country}
                </button>
              ))}
            </div>

            {/* Active office card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {FLAG[activeOffice?.country || ""]} {activeOffice?.country}
                  {activeOffice?.city ? ` — ${activeOffice.city}` : ""}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 mt-1 text-royal-blue" />
                  <p className="text-muted-foreground">{activeOffice?.address}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" onClick={copyAddress} className="gap-2">
                    <Copy className="w-4 h-4" />
                    Copy address
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    asChild
                  >
                    <a href={activeOffice?.mapUrl || "#"} target="_blank" rel="noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Open map
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT: Get in touch form (sticky) */}
          <div className="lg:sticky lg:top-24">
            <GetInTouchCard />
          </div>
        </div>
      </div>
    </section>
  );
}
