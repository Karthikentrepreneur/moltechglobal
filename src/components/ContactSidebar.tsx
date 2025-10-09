import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  X,
  MapPin,
  Globe,
  ExternalLink,
  Phone,
  Mail,
  Home,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";

interface ContactSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

type City = {
  name: string;
  lat: number;
  lng: number;
  address: string;
  contacts?: string[];
  email?: string;
};

type Country = {
  code: string;
  name: string;
  lat: number;
  lng: number;
  cities: City[];
};

const countries: Country[] = [
  {
    code: "in",
    name: "India",
    lat: 20.5937,
    lng: 78.9629,
    cities: [
      {
        name: "Mumbai",
        lat: 19.1061,
        lng: 72.883,
        address:
          "Town Center - 2, Office No.607, 6th Floor, Marol, Andheri Kurla Road, Andheri East, Mumbai - 400059.",
        contacts: ["+91 8879756838, 022-35131688 / 35113475 / 35082586"],
      },
      {
        name: "Delhi",
        lat: 28.5894,
        lng: 77.0318,
        address:
          "Plot No. 15, 1st Floor, Block C, Pocket 8, Sector 17, Dwarka, New Delhi 110075",
        contacts: ["+91 11 41088871"],
      },
      {
        name: "Chennai Warehouse",
        lat: 13.0231,
        lng: 79.9632,
        address:
          "Survey No.209/6A(Part)209/6B(Part), Mannur & Valarpuram Village, Perambakkam Road, Sriperumbudur Taluk, Kanchipuram District-602105",
        contacts: ["+91 9994355523"],
      },
      {
        name: "Chennai",
        lat: 13.0068,
        lng: 80.2048,
        address:
          "Roma Building, Door No. 10, 3rd Floor, G.S.T. Road, Alandur, Chennai-600 016",
        contacts: ["044 4689 4646"],
      },
      {
        name: "Kerala",
        lat: 9.9323,
        lng: 76.2996,
        address:
          "CC 59/801A Elizabeth Memorial Building, Thevara Ferry Jn, Cochin 682013, Kerala.",
        contacts: ["+91 484 4019192 / 93"],
      },
      {
        name: "Hyderabad",
        lat: 17.4425,
        lng: 78.4735,
        address:
          "H.No. 1-8-450/1/A-7 Indian Airlines colony, Opp Police Lines, Begumpet Hyderabad-500016, Telangana",
        contacts: ["040-49559704"],
      },
      {
        name: "Bangalore",
        lat: 13.0185,
        lng: 77.6419,
        address:
          "3C-964 IIIrd Cross Street, HRBR Layout 1st Block, Kalayan Nagar Bannaswadi, Bengaluru - 560043.",
        contacts: ["+91 9841676259"],
      },
      {
        name: "Kolkata",
        lat: 22.5745,
        lng: 88.4353,
        address:
          "Imagine Techpark, Unit No. 10, 19th Floor, Block DN 6, Sector - V, Salt Lake City, Kolkata, West Bengal, India - 700091",
        contacts: ["+91 33 4814 9162 / 63"],
      },
    ],
  },
  {
    code: "my",
    name: "Malaysia",
    lat: 1.4842,
    lng: 103.7629,
    cities: [
      {
        name: "Pasir Gudang",
        lat: 1.4842,
        lng: 103.7629,
        address:
          "Unit 20-03A, Level 20 Menara Zurich, 15 Jalan Dato Abdullah Tahir, 80300 Johor Bahru",
        contacts: ["+603-3319 2778 / 74 / 75, 79"],
      },
      {
        name: "Port Klang",
        lat: 2.9982,
        lng: 101.3831,
        address:
          "MTBBT 2, 3A-5, Jalan Batu Nilam 16, The Landmark (Behind AEON Mall), Bandar Bukit Tinggi 2, 41200, Klang, Selangor D.E",
        contacts: ["+603 - 3319 2778 / 74 / 75"],
      },
    ],
  },
  {
    code: "ae",
    name: "United Arab Emirates (UAE)",
    lat: 25.2048,
    lng: 55.2708,
    cities: [
      {
        name: "Dubai",
        lat: 25.2048,
        lng: 55.2708,
        address: "Office # 509, Al Nazar Plaza, Oud Metha, Dubai, U.A.E",
        contacts: ["+971 4 3433388"],
      },
      {
        name: "Jebel Ali",
        lat: 24.9857,
        lng: 55.1436,
        address:
          "Warehouse# Zg06, Near Roundabout 13, North Zone, P.B No: 30821, Jebel Ali, Dubai, U.A.E",
        contacts: ["+971 4 8819787"],
      },
      {
        name: "Abu Dhabi",
        lat: 24.4539,
        lng: 54.3773,
        address:
          "P.B No: 30500, Office 3-1, Unit 101, 1st Floor, Al Jaber Jewellery Building, Al Khalidiya, Abu Dhabi, U.A.E",
        contacts: ["+971 50 4337214"],
      },
    ],
  },
  {
    code: "qa",
    name: "Qatar",
    lat: 25.276987,
    lng: 51.520008,
    cities: [
      {
        name: "Doha",
        lat: 25.276987,
        lng: 51.520008,
        address: "Office no: 48, 2nd Floor, Al matar Centre, Old Airport Road Doha",
        contacts: ["0974 33622555"],
      },
    ],
  },
  {
    code: "cn",
    name: "China",
    lat: 22.54262,
    lng: 114.11696,
    cities: [
      {
        name: "Shenzhen",
        lat: 22.54262,
        lng: 114.11696,
        address:
          "13C02, Block A, Zhaoxin Huijin Plaza 3085 Shennan East Road, Luohu, Shenzhen.",
        contacts: ["+86 75582222447"],
        email: "helen@haixun.co",
      },
    ],
  },
  {
    code: "sa",
    name: "Saudi Arabia",
    lat: 26.4207,
    lng: 50.0888,
    cities: [
      {
        name: "Dammam",
        lat: 26.4207,
        lng: 50.0888,
        address:
          "Building No.2817, Secondary No9403, King Faisal Road, Al Tubebayshi Dist, Dammam, KSA 32233",
        contacts: ["+966 13 343 0003"],
      },
      {
        name: "Riyadh",
        lat: 24.7136,
        lng: 46.6753,
        address:
          "Room No. T18, Rail Business Centre, Bldg No. 3823, Omar Aimukhtar St, Thulaim, Riyadh 11332",
        contacts: ["+966 11295 0020"],
      },
      {
        name: "Jeddah",
        lat: 21.4858,
        lng: 39.1925,
        address:
          "Al-Madinah Al-Munawarah Road, Al Sharafeyah, Jeddah 4542 -22234, Kingdom of Saudi Arabia",
        contacts: ["+966 12 578 0874"],
      },
    ],
  },
  {
    code: "sg",
    name: "Singapore",
    lat: 1.3521,
    lng: 103.8198,
    cities: [
      {
        name: "Singapore",
        lat: 1.3521,
        lng: 103.8198,
        address:
          "Blk 511 Kampong Bahru Road, #03-01 Keppel Distripark, Singapore - 099447",
        contacts: ["+65 69080838"],
        email: "buddhika@globalconsol.com",
      },
    ],
  },
  {
    code: "id",
    name: "Indonesia",
    lat: -6.2088,
    lng: 106.8456,
    cities: [
      {
        name: "Jakarta",
        lat: -6.2088,
        lng: 106.8456,
        address:
          "408, Lina Building, JL.HR Rasuna Said kav B7, Jakarta",
        contacts: ["+62 21 529 20292, 522 4887"],
      },
      {
        name: "Surabaya",
        lat: -7.2575,
        lng: 112.7521,
        address:
          "Japfa Indoland Center, Japfa Tower 1, Lantai 4/401-A JL Jend, Basuki Rahmat 129-137, Surabaya 60271",
        contacts: ["+62 21 529 20292, 522 4887"],
      },
    ],
  },
  {
    code: "lk",
    name: "Sri Lanka",
    lat: 6.9271,
    lng: 79.8612,
    cities: [
      {
        name: "Colombo",
        lat: 6.9271,
        lng: 79.8612,
        address:
          "Ceylinco House, 9th Floor, No. 69, Janadhipathi Mawatha, Colombo 01, Sri Lanka",
        contacts: ["+94 114477499", "+94 114477494 / 98"],
        email: "thilanka.cmb@globalconsol.com",
      },
    ],
  },
  {
    code: "th",
    name: "Thailand",
    lat: 13.72957,
    lng: 100.53095,
    cities: [
      {
        name: "Bangkok",
        lat: 13.72957,
        lng: 100.53095,
        address:
          "109 CCT Building, 3rd Floor, Rm.3, Surawong Road, Suriyawongse, Bangrak, Bangkok 10500 109",
        contacts: ["+662-634-3240", "+662-634-3942"],
      },
    ],
  },
  {
    code: "mm",
    name: "Myanmar",
    lat: 16.8409,
    lng: 96.1735,
    cities: [
      {
        name: "Yangon",
        lat: 16.8409,
        lng: 96.1735,
        address:
          "No.608, Room 8B, Bo Soon Pat Tower, Merchant Street, Pabedan Township, Yangon, Myanmar",
        contacts: ["+951 243158", "+951 377985, 243101"],
        email: "info@globalconsol.com",
      },
    ],
  },
  {
    code: "bd",
    name: "Bangladesh",
    lat: 23.8103,
    lng: 90.4125,
    cities: [
      {
        name: "Dhaka",
        lat: 23.8103,
        lng: 90.4125,
        address:
          "ID #9-N (New), 9-M(Old-N), 9th floor, Tower 1, Police Plaza Concord No.2, Road # 144, Gulshan Model Town, Dhaka 1215, Bangladesh",
        contacts: ["+880 1716 620989"],
        email: "info@globalconsol.com",
      },
    ],
  },
  {
    code: "pk",
    name: "Pakistan",
    lat: 24.8608,
    lng: 67.0097,
    cities: [
      {
        name: "Karachi",
        lat: 24.8608,
        lng: 67.0097,
        address:
          "Suite No.301, 3rd Floor, Fortune Center, Shahrah-e-Faisal, Block 6, PECHS, Karachi, Pakistan",
        contacts: ["+92-300-8282511", "+92-21-34302281-5"],
        email: "khalid.pk@globalconsol.com",
      },
      {
        name: "Lahore",
        lat: 31.5204,
        lng: 74.3487,
        address:
          "Office # 301, 3rd Floor, Gulberg Arcade Main Market, Gulberg 2, Lahore, Pakistan",
        contacts: ["+92 42-35782306/07/08"],
        email: "shazia.pklhe@globalconsol.com",
      },
    ],
  },
  {
    code: "us",
    name: "United States (USA)",
    lat: 41.8622,
    lng: -87.7209,
    cities: [
      {
        name: "Chicago",
        lat: 41.8622,
        lng: -87.7209,
        address: "939 W. North Avenue, Suite 750, Chicago, IL 60642",
        contacts: ["+1 847 254 7320"],
        email: "info@gglusa.us",
      },
      {
        name: "New York",
        lat: 37.4545,
        lng: -122.1818,
        address:
          "New Jersey Branch, 33 Wood Avenue South Suite 600, Iselin, NJ 08830",
        contacts: ["+1 732 456 6780"],
        email: "info@gglusa.us",
      },
      {
        name: "Los Angeles",
        lat: 40.533,
        lng: -74.3481,
        address: "2250 South Central Avenue Compton, CA 90220",
        contacts: ["+1 310 928 3903"],
        email: "info@gglusa.us",
      },
    ],
  },
  {
    code: "gb",
    name: "United Kingdom (UK)",
    lat: 51.5074,
    lng: -0.1278,
    cities: [
      {
        name: "London",
        lat: 51.5074,
        lng: -0.1278,
        address:
          "167-169 Great Portland Street 5th Floor, London W1W 5PF, United Kingdom",
        contacts: ["+44 (0) 203 393 9508"],
      },
    ],
  },
  {
    code: "au",
    name: "Australia",
    lat: -37.7064,
    lng: 144.8503,
    cities: [
      {
        name: "Melbourne",
        lat: -37.7064,
        lng: 144.8503,
        address:
          "Suite 5, 7-9 Mallet Road, Tullamarine, Victoria, 3043",
        contacts: ["Mob: +61 432254969", "Tel: +61 388205157"],
        email: "info@gglaustralia.com",
      },
    ],
  },
];

const sortedCountries = [...countries].sort((a, b) => a.name.localeCompare(b.name));

const getFlagEmoji = (countryCode: string) =>
  countryCode
    .toUpperCase()
    .replace(/./g, (char) =>
      String.fromCodePoint(127397 + char.charCodeAt(0))
    );

const ContactSidebar = ({ isOpen, onClose }: ContactSidebarProps) => {
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);
  const [selectedCityIndexes, setSelectedCityIndexes] = useState<
    Record<string, number>
  >({});
  const isMobile = useIsMobile();

  useEffect(() => {
    if (sortedCountries.length > 0 && sortedCountries[0].cities.length > 0) {
      const firstCountry = sortedCountries[0];
      setExpandedCountry(firstCountry.name);

      const initialIndexes: Record<string, number> = {};
      sortedCountries.forEach((country) => {
        initialIndexes[country.name] = 0;
      });
      setSelectedCityIndexes(initialIndexes);

      const firstCity = firstCountry.cities[0];
      navigateToLocation(firstCity.lat, firstCity.lng, firstCity);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateToLocation = (lat: number, lng: number, city: City | null = null) => {
    const iframe = document.querySelector(
      'iframe[title="Interactive Map"]'
    ) as HTMLIFrameElement | null;

    if (iframe) {
      try {
        const zoomLevel = city ? 12 : 6;
        const baseUrl =
          "https://www.google.com/maps/d/u/0/embed?mid=1rF5337I7j7xk98at6ZPdMul4aglzrLg";
        const newSrc = `${baseUrl}&z=${zoomLevel}&ll=${lat},${lng}&hl=en&ehbc=2E312F&output=embed`;
        iframe.src = newSrc;
      } catch (error) {
        console.error("Navigation failed:", error);
      }
    }
  };

  const handleCitySelection = (country: Country, cityIndex: number) => {
    setSelectedCityIndexes((prev) => ({
      ...prev,
      [country.name]: cityIndex,
    }));

    const selectedCity = country.cities[cityIndex];
    navigateToLocation(selectedCity.lat, selectedCity.lng, selectedCity);
  };

  const isSelectedCity = (countryName: string, cityIndex: number) =>
    selectedCityIndexes[countryName] === cityIndex;

  return (
    <>
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-deep-navy/40 z-40 backdrop-blur-sm transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <div className={`my-3 w-full ${isMobile ? "max-w-[95%]" : "max-w-[520px]"} mx-auto px-2 md:px-0`}>
        <div className="flex justify-between items-center px-4 py-3 border-b bg-gradient-to-r from-royal-blue to-electric-blue text-white rounded-t-xl shadow-sm">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            <h2 className="font-bold text-lg">Global Locations</h2>
          </div>
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        <ScrollArea className={`h-[calc(100vh-10rem)] md:h-[calc(100vh-8rem)] bg-white rounded-b-xl shadow-md border border-royal-blue/10`}>
          <div className="p-4">
            <div className="mt-4 space-y-3">
              <Accordion
                type="single"
                collapsible
                value={expandedCountry || ""}
                className="w-full space-y-3"
              >
                {sortedCountries.map((country) => (
                  <AccordionItem
                    key={country.name}
                    value={country.name}
                    className="border border-royal-blue/20 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all bg-white"
                  >
                    <AccordionTrigger
                      onClick={() => {
                        setExpandedCountry(
                          expandedCountry === country.name ? null : country.name
                        );
                        navigateToLocation(country.lat, country.lng);
                      }}
                      className="rounded-t-md hover:bg-royal-blue/10 transition-colors px-3 py-2"
                    >
                      <div className="flex items-center gap-3 text-deep-navy">
                        <span className="text-xl" aria-hidden>
                          {getFlagEmoji(country.code)}
                        </span>
                        <span className="font-medium">{country.name}</span>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="bg-gradient-to-b from-royal-blue/5 to-white px-3 py-2">
                      <div className="space-y-2">
                        <div className="space-y-2">
                          {country.cities.map((city, index) => (
                            <div key={index} className="w-full">
                              <Button
                                variant="ghost"
                                className={cn(
                                  "w-full justify-start text-sm p-2 h-auto rounded-md border transition-all shadow-sm",
                                  isSelectedCity(country.name, index)
                                    ? "bg-electric-blue/10 hover:bg-electric-blue/15 border-electric-blue/40 text-deep-navy"
                                    : "bg-white hover:bg-royal-blue/5 border-royal-blue/20 text-deep-navy/80 hover:text-deep-navy"
                                )}
                                onClick={() => {
                                  handleCitySelection(country, index);
                                }}
                              >
                                <MapPin className="w-4 h-4 mr-2 text-royal-blue flex-shrink-0" />
                                <span className="font-medium truncate">{city.name}</span>
                                <ChevronRight className="w-4 h-4 ml-auto text-electric-blue/60" />
                              </Button>

                              {isSelectedCity(country.name, index) && city.address && (
                                <div className="mt-2 p-3 bg-gradient-to-br from-electric-blue/10 to-white rounded-lg border border-electric-blue/30 shadow text-sm animate-in fade-in duration-300 w-full">
                                  <h4 className="font-semibold text-deep-navy mb-2 pb-1 border-b border-electric-blue/20 flex items-center">
                                    <span className="bg-gradient-to-r from-royal-blue to-electric-blue bg-clip-text text-transparent">
                                      {city.name} Office
                                    </span>
                                  </h4>

                                  <div className="flex items-start mb-2 group hover:bg-royal-blue/5 p-2 rounded-md transition-colors w-full">
                                    <Home className="w-4 h-4 mr-2 text-royal-blue mt-1 flex-shrink-0" />
                                    <p className="text-deep-navy/80 group-hover:text-deep-navy transition-colors text-sm break-words w-full overflow-hidden">
                                      {city.address}
                                    </p>
                                  </div>

                                  {city.contacts && city.contacts.length > 0 && (
                                    <div className="flex items-start mb-2 group hover:bg-royal-blue/5 p-2 rounded-md transition-colors w-full">
                                      <Phone className="w-4 h-4 mr-2 text-royal-blue mt-1 flex-shrink-0" />
                                      <div className="space-y-1 w-full overflow-hidden">
                                        {city.contacts.map((contact, idx) => (
                                          <p
                                            key={idx}
                                            className="text-deep-navy/80 group-hover:text-deep-navy transition-colors text-sm break-words"
                                          >
                                            {contact}
                                          </p>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {city.email && (
                                    <div className="flex items-start group hover:bg-royal-blue/5 p-2 rounded-md transition-colors w-full">
                                      <Mail className="w-4 h-4 mr-2 text-royal-blue mt-1 flex-shrink-0" />
                                      <a
                                        href={`mailto:${city.email}`}
                                        className="text-royal-blue hover:text-deep-navy hover:underline flex items-center text-sm break-words w-full overflow-hidden"
                                      >
                                        {city.email}
                                        <ExternalLink className="ml-1 h-3 w-3" />
                                      </a>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default ContactSidebar;
