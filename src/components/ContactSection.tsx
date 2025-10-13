import { useMemo, useState, FormEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Copy, ExternalLink, Mail, Phone } from "lucide-react";

/* ---------- Office data ---------- */
type Office = {
  country: string;
  city?: string;
  label?: string;  // e.g., "Melbourne Office"
  address: string;
  phones?: string[];
  emails?: string[];
};

const OFFICES: Office[] = [
  // --- Australia ---
  {
    country: "Australia",
    city: "Melbourne",
    label: "Melbourne Office",
    address: "Suite 5, 7-9 Mallet Road, Tullamarine, Victoria, 3043",
    phones: ["+61 432254969", "+61 388205157"],
    emails: ["info@gglaustralia.com"],
  },

  // --- Bangladesh ---
  {
    country: "Bangladesh",
    city: "Dhaka",
    label: "Dhaka Office",
    address:
      "ID #9-N (New), 9-M(Old-N), 9th floor, Tower 1, Police Plaza Concord No.2, Road # 144, Gulshan Model Town, Dhaka 1215, Bangladesh",
    phones: ["+880 1716 620989"],
    emails: ["info@globalconsol.com"],
  },

  // --- China ---
  {
    country: "China",
    city: "Shenzhen",
    label: "Shenzhen Office",
    address:
      "13C02, Block A, Zhaoxin Huijin Plaza, 3085 Shennan East Road, Luohu, Shenzhen",
    phones: ["+86 75582222447"],
    emails: ["helen@haixun.co"],
  },

  // --- India ---
  {
    country: "India",
    city: "Mumbai",
    label: "Mumbai Office",
    address:
      "Town Center - 2, Office No.607, 6th Floor, Marol, Andheri Kurla Road, Andheri East, Mumbai - 400059",
    phones: ["+91 8879756838", "022-35131688 / 35113475 / 35082586"],
  },
  {
    country: "India",
    city: "Delhi",
    label: "Delhi Office",
    address:
      "Plot No. 15, 1st Floor, Block C, Pocket 8, Sector 17, Dwarka, New Delhi 110075",
    phones: ["+91 11 41088871"],
  },
  {
    country: "India",
    city: "Chennai",
    label: "Chennai Warehouse Office",
    address:
      "Survey No.209/6A(Part)209/6B(Part), Mannur & Valarpuram Village, Perambakkam Road, Sriperumbudur Taluk, Kanchipuram District - 602105",
    phones: ["+91 9994355523"],
  },
  {
    country: "India",
    city: "Chennai",
    label: "Chennai Office",
    address:
      "Roma Building, Door No. 10, 3rd Floor, G.S.T. Road, Alandur, Chennai - 600016",
    phones: ["044 4689 4646"],
  },
  {
    country: "India",
    city: "Kochi",
    label: "Kerala Office",
    address:
      "CC 59/801A Elizabeth Memorial Building, Thevara Ferry Jn, Cochin 682013, Kerala",
    phones: ["+91 484 4019192 / 93"],
  },
  {
    country: "India",
    city: "Hyderabad",
    label: "Hyderabad Office",
    address:
      "H.No. 1-8-450/1/A-7 Indian Airlines Colony, Opp Police Lines, Begumpet, Hyderabad - 500016, Telangana",
    phones: ["040-49559704"],
  },
  {
    country: "India",
    city: "Bengaluru",
    label: "Bangalore Office",
    address:
      "3C-964 IIIrd Cross Street, HRBR Layout 1st Block, Kalyan Nagar, Banaswadi, Bengaluru - 560043",
    phones: ["+91 9841676259"],
  },
  {
    country: "India",
    city: "Kolkata",
    label: "Kolkata Office",
    address:
      "Imagine Techpark, Unit No. 10, 19th Floor, Block DN 6, Sector - V, Salt Lake City, Kolkata, West Bengal, 700091",
    phones: ["+91 33 4814 9162 / 63"],
  },

  // --- Indonesia ---
  {
    country: "Indonesia",
    city: "Jakarta",
    label: "Jakarta Office",
    address: "408, Lina Building, JL.HR Rasuna Said Kav B7, Jakarta",
    phones: ["+62 21 529 20292", "522 4887"],
  },

  // --- Malaysia ---
  {
    country: "Malaysia",
    city: "Johor Bahru",
    label: "Pasir Gudang Office",
    address:
      "Unit 20-03A, Level 20 Menara Zurich, 15 Jalan Dato Abdullah Tahir, 80300 Johor Bahru",
    phones: ["+603-3319 2778 / 74 / 75, 79"],
  },
  {
    country: "Malaysia",
    city: "Port Klang",
    label: "Port Klang Office",
    address:
      "MTBBT 2, 3A-5, Jalan Batu Nilam 16, The Landmark (Behind AEON Mall), Bandar Bukit Tinggi 2, 41200 Klang, Selangor D.E",
    phones: ["+603-3319 2778 / 74 / 75"],
  },

  // --- Myanmar ---
  {
    country: "Myanmar",
    city: "Yangon",
    label: "Yangon Office",
    address:
      "No.608, Room 8B, Bo Soon Pat Tower, Merchant Street, Pabedan Township, Yangon, Myanmar",
    phones: ["+951 243158", "+951 377985", "243101"],
    emails: ["info@globalconsol.com"],
  },

  // --- Pakistan ---
  {
    country: "Pakistan",
    city: "Karachi",
    label: "Karachi Office",
    address:
      "Suite No.301, 3rd Floor, Fortune Center, Shahrah-e-Faisal, Block 6, PECHS, Karachi, Pakistan",
    phones: ["+92-300-8282511", "+92-21-34302281-5"],
    emails: ["khalid.pk@globalconsol.com"],
  },
  {
    country: "Pakistan",
    city: "Lahore",
    label: "Lahore Office",
    address:
      "Office # 301, 3rd Floor, Gulberg Arcade Main Market, Gulberg 2, Lahore, Pakistan",
    phones: ["+92 42-35782306/07/08"],
    emails: ["shazia.pklhe@globalconsol.com"],
  },

  // --- Qatar ---
  {
    country: "Qatar",
    city: "Doha",
    label: "Doha Office",
    address:
      "Office No: 48, 2nd Floor, Al Matar Centre, Old Airport Road, Doha",
    phones: ["0974 33622555"],
  },

  // --- Saudi Arabia ---
  {
    country: "Saudi Arabia",
    city: "Dammam",
    label: "Dammam Office",
    address:
      "Building No.2817, Secondary No 9403, King Faisal Road, Al Tubebayshi Dist, Dammam, KSA 32233",
    phones: ["+966 13 343 0003"],
  },
  {
    country: "Saudi Arabia",
    city: "Riyadh",
    label: "Riyadh Office",
    address:
      "Room No. T18, Rail Business Centre, Bldg No. 3823, Omar Al Mukhtar St, Thulaim, Riyadh 11332",
    phones: ["+966 11 295 0020"],
  },
  {
    country: "Saudi Arabia",
    city: "Jeddah",
    label: "Jeddah Office",
    address:
      "Al-Madinah Al-Munawarah Road, Al Sharafeyah, Jeddah 4542-22234, Kingdom of Saudi Arabia",
    phones: ["+966 12 578 0874"],
  },

  // --- Singapore ---
  {
    country: "Singapore",
    city: "Singapore",
    label: "Singapore Office",
    address:
      "Blk 511 Kampong Bahru Road, #03-01 Keppel Distripark, Singapore - 099447",
    phones: ["+65 69080838"],
    emails: ["buddhika@globalconsol.com"],
  },

  // --- Sri Lanka ---
  {
    country: "Sri Lanka",
    city: "Colombo",
    label: "Colombo Office",
    address:
      "Ceylinco House, 9th Floor, No. 69, Janadhipathi Mawatha, Colombo 01, Sri Lanka",
    phones: ["+94 114477499", "+94 114477494 / 98"],
    emails: ["thilanka.cmb@globalconsol.com"],
  },

  // --- Thailand ---
  {
    country: "Thailand",
    city: "Bangkok",
    label: "Bangkok Office",
    address:
      "109 CCT Building, 3rd Floor, Rm.3, Surawong Road, Suriyawongse, Bangrak, Bangkok 10500",
    phones: ["+662-634-3240", "+662-634-3942"],
  },

  // --- UAE ---
  {
    country: "UAE",
    city: "Dubai",
    label: "Dubai Office",
    address: "Office # 509, Al Nazar Plaza, Oud Metha, Dubai, U.A.E",
    phones: ["+971 4 3433388"],
  },
  {
    country: "UAE",
    city: "Jebel Ali (Dubai)",
    label: "Jebel Ali Office",
    address:
      "Warehouse # ZG06, Near Roundabout 13, North Zone, P.O. Box 30821, Jebel Ali, Dubai, U.A.E",
    phones: ["+971 4 8819787"],
  },
  {
    country: "UAE",
    city: "Abu Dhabi",
    label: "Abu Dhabi Office",
    address:
      "P.O. Box 30500, Office 3-1, Unit 101, 1st Floor, Al Jaber Jewellery Building, Al Khalidiya, Abu Dhabi, U.A.E",
    phones: ["+971 50 4337214"],
  },

  // --- UK ---
  {
    country: "UK",
    city: "London",
    label: "London Office",
    address:
      "167-169 Great Portland Street, 5th Floor, London W1W 5PF, United Kingdom",
    phones: ["+44 (0) 203 393 9508"],
  },

  // --- USA ---
  {
    country: "USA",
    city: "Chicago",
    label: "Chicago Office",
    address: "939 W. North Avenue, Suite 750, Chicago, IL 60642",
    phones: ["+1 847 254 7320"],
    emails: ["info@gglusa.us"],
  },
  {
    country: "USA",
    city: "New York (Iselin, NJ)",
    label: "New York Office",
    address:
      "New Jersey Branch, 33 Wood Avenue South, Suite 600, Iselin, NJ 08830",
    phones: ["+1 732 456 6780"],
    emails: ["info@gglusa.us"],
  },
  {
    country: "USA",
    city: "Los Angeles (Compton)",
    label: "Los Angeles Office",
    address: "2250 South Central Avenue, Compton, CA 90220",
    phones: ["+1 310 928 3903"],
    emails: ["info@gglusa.us"],
  },
];

/* Flags */
const FLAG: Record<string, string> = {
  Australia: "🇦🇺",
  Bangladesh: "🇧🇩",
  China: "🇨🇳",
  India: "🇮🇳",
  Indonesia: "🇮🇩",
  Malaysia: "🇲🇾",
  Myanmar: "🇲🇲",
  Pakistan: "🇵🇰",
  Qatar: "🇶🇦",
  "Saudi Arabia": "🇸🇦",
  Singapore: "🇸🇬",
  "Sri Lanka": "🇱🇰",
  Thailand: "🇹🇭",
  UAE: "🇦🇪",
  UK: "🇬🇧",
  USA: "🇺🇸",
};

/* ---------- Get in touch form (card) ---------- */
function GetInTouchCard() {
  const LOCATIONS = useMemo(
    () => Array.from(new Set(OFFICES.map((o) => o.country))),
    []
  );

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
        <CardTitle className="text-3xl sm:text-[34px] text-foreground text-center">
          Get in touch
        </CardTitle>
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

/* ---------- Auto-scrolling list (left) ---------- */
function AutoScrollOffices() {
  // duplicate list for a seamless loop
  const items = useMemo(() => [...OFFICES, ...OFFICES], []);

  const mapLink = (address: string) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_25px_rgba(0,0,0,0.08)]">
      {/* Title */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-royal-blue to-electric-blue px-5 py-3">
        <h3 className="text-white text-lg font-semibold tracking-wide">Our Offices</h3>
        <p className="text-white/80 text-xs">Auto-scroll — hover to pause</p>
      </div>

      {/* Animated track */}
      <div className="group max-h-[640px] overflow-hidden">
        <div className="animate-vertical-scroll group-hover:[animation-play-state:paused] px-4 py-4 space-y-4">
          {items.map((o, idx) => (
            <div
              key={`${o.country}-${o.city}-${idx}`}
              className="rounded-xl p-[2px] bg-gradient-to-r from-royal-blue to-electric-blue transition-shadow hover:shadow-lg"
            >
              {/* Inner card with gradient border */}
              <div className="rounded-[10px] bg-white p-4 shadow-sm hover:shadow-md transition">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-xl">{FLAG[o.country] || "🌍"}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">
                      {o.label || `${o.city ? `${o.city} — ` : ""}${o.country}`}
                    </div>

                    <div className="mt-1 flex items-start gap-2 text-sm text-gray-700">
                      <MapPin className="w-4 h-4 mt-0.5 text-royal-blue" />
                      <span>{o.address}</span>
                    </div>

                    {o.phones?.length ? (
                      <div className="mt-2 flex items-start gap-2 text-sm text-gray-700">
                        <Phone className="w-4 h-4 mt-0.5 text-royal-blue" />
                        <div className="flex flex-col">
                          {o.phones.map((p, i) => (
                            <span key={i}>{p}</span>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {o.emails?.length ? (
                      <div className="mt-2 flex items-start gap-2 text-sm text-gray-700">
                        <Mail className="w-4 h-4 mt-0.5 text-royal-blue" />
                        <div className="flex flex-col">
                          {o.emails.map((e, i) => (
                            <a key={i} href={`mailto:${e}`} className="text-royal-blue hover:underline">
                              {e}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    <div className="mt-3 flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={async () => {
                          try {
                            await navigator.clipboard.writeText(
                              `${o.label || o.country} — ${o.address}`
                            );
                          } catch {}
                        }}
                      >
                        <Copy className="w-4 h-4" />
                        Copy
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2" asChild>
                        <a href={mapLink(o.address)} target="_blank" rel="noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Map
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inline CSS for vertical marquee (slower speed) */}
        <style>{`
          @keyframes vertical-scroll {
            0%   { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .animate-vertical-scroll {
            display: grid;
            grid-auto-rows: minmax(0, auto);
            animation: vertical-scroll 95s linear infinite; /* slowed down */
            will-change: transform;
          }
        `}</style>
      </div>
    </div>
  );
}

/* ---------- Main Contact Section ---------- */
export default function ContactSection() {
  return (
    <section className="relative py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: Individual gradient-bordered cards with slow auto-scroll */}
          <AutoScrollOffices />

          {/* RIGHT: Get in touch form (sticky) */}
          <div className="lg:sticky lg:top-24">
            <GetInTouchCard />
          </div>
        </div>
      </div>
    </section>
  );
}
