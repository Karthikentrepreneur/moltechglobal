// src/pages/Global.tsx
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Branch = {
  branch: string;
  address: string;
  phone?: string;
  email?: string;
};

type Office = {
  city: string;
  country: string;
  type: string;
  description?: string;
  image?: string;
  // either single address fields...
  address?: string;
  phone?: string;
  email?: string;
  // ...or multiple branches
  addressList?: Branch[];
};

const offices: Office[] = [
  {
    city: "Singapore",
    country: "Singapore",
    type: "Headquarters",
    address: "Blk 511 Kampong Bahru Rd, #03-01 Keppel Distripark, 099447",
    phone: "+65 65140868",
    email: "singapore@global.com",
    description: "Global headquarters and Asia-Pacific hub.",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&h=400&fit=crop",
  },
  {
    city: "Malaysia",
    country: "Malaysia",
    type: "Regional Offices",
    addressList: [
      {
        branch: "Port Klang",
        address: "18 Jalan Sungai Chandong 12, Pulau Indah, 42000 Pelabuhan Klang",
        phone: "+60 16-985 4705",
        email: "portklang@global.com",
      },
      {
        branch: "Johor",
        address: "No.19A, Jalan Sagai 6, Taman Pasir Putih, 81700 Pasir Gudang",
        phone: "+60 16-959 4075",
        email: "johor@global.com",
      },
    ],
    description:
      "Our Malaysia offices provide logistics, processing and supply chain support across Port Klang and Johor regions.",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=400&fit=crop",
  },
  {
    city: "Dammam",
    country: "Saudi Arabia",
    type: "Regional Office",
    address: "2817 King Faizal Road, 9403-32233",
    phone: "+966 13 3430003",
    email: "dammam@global.com",
    description: "Serving Middle East operations and logistics.",
    image: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=600&h=400&fit=crop",
  },
  {
    city: "London",
    country: "United Kingdom",
    type: "European Office",
    address: "167-169 Great Portland Street, W1W 5PF",
    phone: "+44 7305 856612",
    email: "london@global.com",
    description: "European business development and client services.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop",
  },
  {
    city: "New York",
    country: "USA",
    type: "Americas Office",
    address: "33 Wood Ave S, Suite 600, Iselin, NJ 08830",
    phone: "+1 732 456 6780",
    email: "usa@global.com",
    description: "North American operations and client services.",
    image: "https://images.unsplash.com/photo-1534353436135-e88f6bd5b6a6?w=600&h=400&fit=crop",
  },
  {
    city: "Sydney",
    country: "Australia",
    type: "Regional Office",
    address: "Level 5, 80 Clarence Street, Sydney NSW 2000",
    phone: "+61 2 9876 5432",
    email: "australia@global.com",
    description:
      "Our Sydney office oversees operations across Australia and Oceania with a focus on renewable energy and sustainability.",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=600&h=400&fit=crop",
  },
];

const AddressScroller: React.FC<{ branches: Branch[]; speed?: number; height?: number }> = ({
  branches,
  speed = 30, // px per second
  height = 160, // px container height
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHover, setIsHover] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const maxScrollRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // We duplicate content for seamless scroll:
    // structure: <div ref=container><div class="inner">items... items...</div></div>
    const inner = container.firstElementChild as HTMLDivElement | null;
    if (!inner) return;

    // compute one-copy height (half of inner.scrollHeight)
    const totalInnerHeight = inner.scrollHeight;
    const oneCopyHeight = totalInnerHeight / 2;
    maxScrollRef.current = oneCopyHeight;

    // If content doesn't overflow (no need to scroll), do nothing.
    if (oneCopyHeight <= container.clientHeight) {
      // ensure top is 0 and no animation
      container.scrollTop = 0;
      return;
    }

    const step = (timestamp: number) => {
      if (isHover) {
        lastTimeRef.current = timestamp;
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      if (lastTimeRef.current == null) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;
      // pixels to move this frame
      const move = (speed * delta) / 1000;
      container.scrollTop = container.scrollTop + move;
      // loop when reached one copy
      if (container.scrollTop >= maxScrollRef.current) {
        container.scrollTop = container.scrollTop - maxScrollRef.current;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimeRef.current = null;
    };
  }, [branches, isHover, speed]);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{ height: `${height}px` }}
      className="overflow-hidden relative"
    >
      {/* inner duplicated list for smooth loop */}
      <div ref={containerRef} className="w-full h-full overflow-hidden">
        <div className="flex flex-col">
          {branches.map((b, i) => (
            <div key={`a-${i}`} className="pb-4">
              <p className="font-semibold text-slate-800 mb-1">{b.branch}</p>
              <div className="flex items-center text-sm text-slate-600 mb-1">
                <MapPin className="w-4 h-4 mr-3 text-blue-600" />
                <span>{b.address}</span>
              </div>
              {b.phone && (
                <div className="flex items-center text-sm text-slate-600 mb-1">
                  <Phone className="w-4 h-4 mr-3 text-blue-600" />
                  <span>{b.phone}</span>
                </div>
              )}
              {b.email && (
                <div className="flex items-center text-sm text-slate-600">
                  <Mail className="w-4 h-4 mr-3 text-blue-600" />
                  <span>{b.email}</span>
                </div>
              )}
            </div>
          ))}
          {/* duplicate */}
          {branches.map((b, i) => (
            <div key={`b-${i}`} className="pb-4">
              <p className="font-semibold text-slate-800 mb-1">{b.branch}</p>
              <div className="flex items-center text-sm text-slate-600 mb-1">
                <MapPin className="w-4 h-4 mr-3 text-blue-600" />
                <span>{b.address}</span>
              </div>
              {b.phone && (
                <div className="flex items-center text-sm text-slate-600 mb-1">
                  <Phone className="w-4 h-4 mr-3 text-blue-600" />
                  <span>{b.phone}</span>
                </div>
              )}
              {b.email && (
                <div className="flex items-center text-sm text-slate-600">
                  <Mail className="w-4 h-4 mr-3 text-blue-600" />
                  <span>{b.email}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Global: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      <main className="pt-24">
        <section className="py-16 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Global Presence</h1>
            <p className="text-slate-600">
              Serving customers worldwide through our strategically located offices and facilities.
            </p>
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offices.map((office, idx) => (
                <Card
                  key={idx}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-44 overflow-hidden">
                    {office.image && (
                      <>
                        <img
                          src={office.image}
                          alt={`${office.city} Office`}
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </>
                    )}
                    <div className="absolute bottom-3 left-4 text-white">
                      <CardTitle className="text-lg md:text-xl font-bold">
                        {office.city}
                      </CardTitle>
                      <p className="text-xs md:text-sm opacity-90">{office.type}</p>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <p className="text-slate-600">{office.description}</p>

                    {office.addressList ? (
                      // use the AddressScroller for multiple branches
                      <div className="max-h-40">
                        <AddressScroller branches={office.addressList} speed={30} height={160} />
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-slate-600">
                          <MapPin className="w-4 h-4 mr-3 text-blue-600" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center text-sm text-slate-600">
                          <Phone className="w-4 h-4 mr-3 text-blue-600" />
                          <span>{office.phone}</span>
                        </div>
                        {office.email && (
                          <div className="flex items-center text-sm text-slate-600">
                            <Mail className="w-4 h-4 mr-3 text-blue-600" />
                            <span>{office.email}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Global;
