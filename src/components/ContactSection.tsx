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
      

      {/* Content */}
      

      {/* Get in touch form card */}
      <GetInTouchCard />
    </section>;
}