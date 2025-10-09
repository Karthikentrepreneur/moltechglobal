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
import {
  sortedCountries,
  type City,
  type Country,
} from "@/data/globalLocations";
import { buildMapSrc } from "@/constants/map";

interface ContactSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

type SelectedLocation = {
  country: Country;
  city: City;
};

const COUNTRY_ZOOM = 8;
const CITY_ZOOM = 14;

const ContactSidebar: React.FC<ContactSidebarProps> = ({ isOpen, onClose }) => {
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<SelectedLocation | null>(
    null
  );
  const [selectedCityIndexes, setSelectedCityIndexes] = useState<Record<string, number>>({});
  const isMobile = useIsMobile();

  const updateMap = (lat: number, lng: number, zoom: number) => {
    const iframe = document.querySelector(
      'iframe[title="Interactive Map"]'
    ) as HTMLIFrameElement | null;

    if (!iframe) {
      return;
    }

    try {
      iframe.src = buildMapSrc(lat, lng, zoom);
    } catch (error) {
      console.error("Navigation failed:", error);
    }
  };

  useEffect(() => {
    if (!sortedCountries.length) {
      return;
    }

    const firstCountry = sortedCountries[0];
    const firstCity = firstCountry.cities[0];

    if (!firstCity) {
      return;
    }

    const initialIndexes: Record<string, number> = {};
    sortedCountries.forEach(country => {
      initialIndexes[country.name] = 0;
    });
    setSelectedCityIndexes(initialIndexes);
    setExpandedCountry(firstCountry.name);
    setSelectedLocation({ country: firstCountry, city: firstCity });

    const iframe = document.querySelector(
      'iframe[title="Interactive Map"]'
    ) as HTMLIFrameElement | null;

    if (!iframe) {
      return;
    }

    try {
      iframe.src = buildMapSrc(firstCity.lat, firstCity.lng, CITY_ZOOM);
    } catch (error) {
      console.error("Navigation failed:", error);
    }
  }, []);

  const focusCountry = (country: Country) => {
    updateMap(country.lat, country.lng, COUNTRY_ZOOM);
  };

  const handleCitySelection = (country: Country, cityIndex: number) => {
    setSelectedCityIndexes(prev => ({
      ...prev,
      [country.name]: cityIndex,
    }));

    const city = country.cities[cityIndex];
    if (!city) {
      return;
    }

    updateMap(city.lat, city.lng, CITY_ZOOM);
    setSelectedLocation({ country, city });
  };

  const isSelectedCity = (countryName: string, cityIndex: number) => {
    return selectedCityIndexes[countryName] === cityIndex;
  };

  return (
    <>
      {/* Backdrop overlay for mobile */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar container */}
      <div className={`my-3 w-full ${isMobile ? "max-w-[95%]" : "max-w-[520px]"} mx-auto px-2 md:px-0`}>
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b bg-gradient-to-r from-royal-blue to-electric-blue text-white rounded-t-xl shadow-sm">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            <div>
              <h2 className="font-bold text-lg">Global Locations</h2>
              <p className="text-xs text-white/80">Tap any office to see the exact map pin</p>
            </div>
          </div>
          {isMobile && (
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-electric-blue/20">
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Content area */}
        <ScrollArea className={`h-[calc(100vh-10rem)] md:h-[calc(100vh-8rem)] bg-white rounded-b-xl shadow-md`}>
          <div className="p-4">
            {selectedLocation && (
              <div className="rounded-xl border border-royal-blue/30 bg-gradient-to-br from-royal-blue/10 via-white to-electric-blue/10 p-4 shadow-sm">
                <p className="text-xs uppercase tracking-widest text-deep-navy/60">Now viewing</p>
                <h3 className="mt-1 text-lg font-semibold text-deep-navy">
                  {selectedLocation.city.name}, {selectedLocation.country.name}
                </h3>
                <div className="mt-3 space-y-2 text-sm text-slate-700">
                  <div className="flex items-start gap-2">
                    <Home className="mt-0.5 h-4 w-4 text-royal-blue" />
                    <p className="leading-relaxed">{selectedLocation.city.address}</p>
                  </div>
                  {selectedLocation.city.contacts && (
                    <div className="flex items-start gap-2">
                      <Phone className="mt-0.5 h-4 w-4 text-royal-blue" />
                      <div className="space-y-1">
                        {selectedLocation.city.contacts.map((contact, idx) => (
                          <p key={idx}>{contact}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  {selectedLocation.city.email && (
                    <div className="flex items-start gap-2">
                      <Mail className="mt-0.5 h-4 w-4 text-royal-blue" />
                      <a
                        href={`mailto:${selectedLocation.city.email}`}
                        className="inline-flex items-center text-royal-blue hover:text-deep-navy hover:underline"
                      >
                        {selectedLocation.city.email}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="mt-4 space-y-3">
              <Accordion type="single" collapsible value={expandedCountry || ""} className="w-full space-y-3">
                {sortedCountries.map(country => {
                  const firstCity = country.cities[0];

                  return (
                    <AccordionItem
                      key={country.name}
                      value={country.name}
                      className="border border-royal-blue/10 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all bg-white"
                    >
                      <AccordionTrigger
                        onClick={() => {
                          setExpandedCountry(expandedCountry === country.name ? null : country.name);
                          focusCountry(country);
                        }}
                        className="rounded-t-md hover:bg-royal-blue/10 transition-colors px-3 py-2"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={`https://flagcdn.com/${country.code}.svg`}
                            alt={`${country.name} flag`}
                            className="h-6 w-6 rounded-sm object-cover shadow-sm"
                            loading="lazy"
                          />
                          <div className="text-left">
                            <p className="font-medium text-deep-navy">{country.name}</p>
                            {firstCity && (
                              <p className="text-xs text-slate-500">
                                {firstCity.name} • {firstCity.address}
                              </p>
                            )}
                          </div>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="bg-gradient-to-b from-royal-blue/5 to-white px-3 py-2">
                        <div className="space-y-2">
                          {country.cities.map((city, index) => (
                            <div key={city.name} className="w-full">
                              <Button
                                variant="ghost"
                                className={cn(
                                  "w-full justify-start text-sm p-2 h-auto rounded-md border transition-all shadow-sm",
                                  isSelectedCity(country.name, index)
                                    ? "bg-royal-blue/10 border-royal-blue/40 text-deep-navy"
                                    : "bg-white hover:bg-royal-blue/5 border-slate-100 hover:border-royal-blue/30"
                                )}
                                onClick={() => {
                                  handleCitySelection(country, index);
                                }}
                              >
                                <MapPin className="w-4 h-4 mr-2 text-royal-blue flex-shrink-0" />
                                <span className="font-medium truncate">{city.name}</span>
                                <ChevronRight className="w-4 h-4 ml-auto text-royal-blue/40" />
                              </Button>

                              {isSelectedCity(country.name, index) && city.address && (
                                <div className="mt-2 p-3 bg-gradient-to-br from-white via-royal-blue/5 to-electric-blue/10 rounded-lg border border-royal-blue/30 shadow text-sm animate-in fade-in duration-300 w-full">
                                  <h4 className="font-semibold text-deep-navy mb-2 pb-1 border-b border-royal-blue/20 flex items-center">
                                    <span>{city.name} Office</span>
                                  </h4>

                                  <div className="flex items-start mb-2">
                                    <Home className="w-4 h-4 mr-2 text-royal-blue mt-1 flex-shrink-0" />
                                    <p className="text-slate-700 text-sm break-words w-full overflow-hidden">{city.address}</p>
                                  </div>

                                  {city.contacts && city.contacts.length > 0 && (
                                    <div className="flex items-start mb-2">
                                      <Phone className="w-4 h-4 mr-2 text-royal-blue mt-1 flex-shrink-0" />
                                      <div className="space-y-1 w-full overflow-hidden">
                                        {city.contacts.map(contact => (
                                          <p key={contact} className="text-slate-700 text-sm break-words">
                                            {contact}
                                          </p>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {city.email && (
                                    <div className="flex items-start">
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
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default ContactSidebar;
