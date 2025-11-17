import React, { useRef, useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  X,
  MapPin,
  Globe,
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

const COMMON_EMAIL = "info@moltechglobal.com";

const countries = [
  {
    code: "sg",
    name: "Singapore (Headquarters)",
    lat: 1.3521,
    lng: 103.8198,
    cities: [
      {
        name: "Singapore",
        lat: 1.3521,
        lng: 103.8198,
        address:
          "Blk 511 Kampong Bahru Road, #03-01 Keppel Distripark, Singapore 099447",
        contacts: ["+65 65140868"],
        email: COMMON_EMAIL,
      },
    ],
  },
  {
    code: "my",
    name: "Malaysia",
    lat: 2.9982,
    lng: 101.3831,
    cities: [
      {
        name: "Port Klang",
        lat: 2.9982,
        lng: 101.3831,
        address:
          "18 Jalan Sungai Chandong 12, Bdr Armada Putra Pulau Indah, 42000 Pelabuhan Klang, Selangor Darul Ehsan, Malaysia",
        contacts: ["+60 16-985 4705"],
        email: COMMON_EMAIL,
      },
      {
        name: "Johor",
        lat: 1.4842,
        lng: 103.7629,
        address:
          "HS(D) 576585 PTD 233430, No.19A, Jalan Sagai 6, Taman Pasir Putih, 81700 Pasir Gudang, Johor",
        contacts: ["+60 16-959 4075"],
        email: COMMON_EMAIL,
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
        address: "408, Lina Building, JL. HR Rasuna Said kav B7, Jakarta",
        contacts: ["+62 815 1038 5581"],
        email: COMMON_EMAIL,
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
          "2817 King Faizal Road, Dammam 9403-32233, Kingdom of Saudi Arabia",
        contacts: ["+966 13 3430003"],
        email: COMMON_EMAIL,
      },
    ],
  },
  {
    code: "th",
    name: "Thailand",
    lat: 13.7563,
    lng: 100.5018,
    cities: [
      {
        name: "Bangkok",
        lat: 13.7563,
        lng: 100.5018,
        address:
          "109 CCT Building, 3rd Floor, Rm.3, Surawong Road, Suriyawongse, Bangrak, Bangkok 10500 109",
        contacts: ["+60 16-985 4705"],
        email: COMMON_EMAIL,
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
        address:
          "Plot #2430152, Al Qusais Industrial Area 2, Dubai, United Arab Emirates",
        contacts: ["+971 509093357"],
        email: COMMON_EMAIL,
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
          "167-169 Great Portland Street, 5th Floor, London, W1W 5PF, United Kingdom",
        contacts: ["+44 (0) 7305 856612"],
        email: COMMON_EMAIL,
      },
    ],
  },
  {
    code: "us",
    name: "United States (USA)",
    lat: 40.7128,
    lng: -74.006,
    cities: [
      {
        name: "New York / New Jersey",
        lat: 40.5576,
        lng: -74.3229,
        address:
          "New Jersey Branch, 33 Wood Avenue South, Suite 600, Iselin, NJ 08830",
        contacts: ["+1 732 456 6780"],
        email: COMMON_EMAIL,
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
        name: "Victoria",
        lat: -37.7064,
        lng: 144.8503,
        address: "Suite 5, 7-9 Mallet Road, Tullamarine, Victoria 3043",
        contacts: ["+61 388205157"],
        email: COMMON_EMAIL,
      },
    ],
  },
];

// Keep Singapore (Headquarters) first, sort the rest alphabetically
const sortedCountries = [
  countries[0],
  ...countries.slice(1).sort((a, b) => a.name.localeCompare(b.name)),
];

const ContactSidebar: React.FC<ContactSidebarProps> = ({ isOpen, onClose }) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<any | null>(null);
  const [selectedCityIndexes, setSelectedCityIndexes] = useState<{
    [countryName: string]: number;
  }>({});
  const isMobile = useIsMobile();

  useEffect(() => {
    iframeRef.current = document.querySelector("iframe");
  }, []);

  useEffect(() => {
    if (sortedCountries.length > 0 && sortedCountries[0].cities.length > 0) {
      const firstCountry = sortedCountries[0];
      const firstCity = firstCountry.cities[0];

      // Default: Singapore (Headquarters) expanded + selected
      setSelectedLocation(firstCity);
      setExpandedCountry(firstCountry.name);

      const initialIndexes: { [countryName: string]: number } = {};
      sortedCountries.forEach((country) => {
        initialIndexes[country.name] = 0;
      });
      setSelectedCityIndexes(initialIndexes);

      navigateToLocation(firstCity.lat, firstCity.lng, firstCity);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateToLocation = (lat: number, lng: number, city: any = null) => {
    const iframe = document.querySelector(
      'iframe[title="Interactive Map"]'
    ) as HTMLIFrameElement;
    if (iframe) {
      try {
        const zoomLevel = city ? 12 : 9;
        const baseUrl =
          "https://www.google.com/maps/d/embed?mid=1G4yw3-VR-EIBj21s8AiMV8WGcJi6cGQ&ehbc=2E312F";
        const newSrc = `${baseUrl}&z=${zoomLevel}&ll=${lat},${lng}&hl=en&ehbc=2E312F&output=embed`;
        iframe.src = newSrc;
        if (city) {
          setSelectedLocation(city);
        }
      } catch (e) {
        console.error("Navigation failed:", e);
      }
    }
  };

  const handleCitySelection = (country: any, cityIndex: number) => {
    setSelectedCityIndexes((prev) => ({
      ...prev,
      [country.name]: cityIndex,
    }));

    const selectedCity = country.cities[cityIndex];
    navigateToLocation(selectedCity.lat, selectedCity.lng, selectedCity);
  };

  const isSelectedCity = (countryName: string, cityIndex: number) => {
    return selectedCityIndexes[countryName] === cityIndex;
  };

  return (
    <>
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <div
        className={`my-3 w-full ${
          isMobile ? "max-w-[95%]" : "max-w-[520px]"
        } mx-auto px-2 md:px-0`}
      >
        {/* Header – violet gradient */}
        <div className="flex justify-between items-center px-4 py-3 border-b bg-gradient-to-r from-violet-600 to-violet-700 text-white rounded-t-xl shadow-sm">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            <h2 className="font-bold text-lg">Global Locations</h2>
          </div>
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-violet-500/20"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        <ScrollArea className="h-[calc(100vh-10rem)] md:h-[calc(100vh-8rem)] bg-white rounded-b-xl shadow-md">
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
                    className="border border-violet-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all bg-white"
                  >
                    <AccordionTrigger
                      onClick={() => {
                        setExpandedCountry(
                          expandedCountry === country.name
                            ? null
                            : country.name
                        );
                        navigateToLocation(country.lat, country.lng);
                      }}
                      className="rounded-t-md hover:bg-violet-50 transition-colors px-3 py-2"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={`/${country.code}.svg`}
                          alt={`${country.name} flag`}
                          className="w-6 h-6 rounded-sm object-cover shadow-sm"
                        />
                        <span className="font-medium">{country.name}</span>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="bg-gradient-to-b from-violet-50/30 to-white px-3 py-2">
                      <div className="space-y-2">
                        <div className="space-y-2">
                          {country.cities.map((city: any, index: number) => (
                            <div key={index} className="w-full">
                              <Button
                                variant="ghost"
                                className={cn(
                                  "w-full justify-start text-sm p-2 h-auto rounded-md border transition-all shadow-sm",
                                  isSelectedCity(country.name, index)
                                    ? "bg-violet-100 hover:bg-violet-200 border-violet-300 text-violet-800"
                                    : "bg-white hover:bg-violet-50 border-gray-100 hover:border-violet-200"
                                )}
                                onClick={() => {
                                  handleCitySelection(country, index);
                                  if (isMobile) {
                                    setTimeout(
                                      () =>
                                        setSelectedLocation({ ...city }),
                                      50
                                    );
                                  }
                                }}
                              >
                                <MapPin className="w-4 h-4 mr-2 text-violet-600 flex-shrink-0" />
                                <span className="font-medium truncate">
                                  {city.name}
                                </span>
                                <ChevronRight className="w-4 h-4 ml-auto text-violet-300" />
                              </Button>

                              {isSelectedCity(country.name, index) &&
                                city.address && (
                                  <div className="mt-2 p-3 bg-white rounded-lg border border-violet-200 shadow text-sm w-full">
                                    <div className="flex items-start mb-2">
                                      <Home className="w-4 h-4 mr-2 text-violet-600 mt-1" />
                                      <p className="text-gray-800 text-sm break-words w-full">
                                        {city.address}
                                      </p>
                                    </div>

                                    {city.contacts &&
                                      city.contacts.length > 0 && (
                                        <div className="flex items-start mb-2">
                                          <Phone className="w-4 h-4 mr-2 text-violet-600 mt-1" />
                                          <div className="space-y-1">
                                            {city.contacts.map(
                                              (
                                                contact: string,
                                                idx: number
                                              ) => (
                                                <p
                                                  key={idx}
                                                  className="text-gray-800 text-sm break-words"
                                                >
                                                  {contact}
                                                </p>
                                              )
                                            )}
                                          </div>
                                        </div>
                                      )}

                                    {city.email && (
                                      <div className="flex items-start">
                                        <Mail className="w-4 h-4 mr-2 text-violet-600 mt-1" />
                                        <a
                                          href={`mailto:${city.email}`}
                                          className="text-violet-700 hover:underline text-sm break-words"
                                        >
                                          {city.email}
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
