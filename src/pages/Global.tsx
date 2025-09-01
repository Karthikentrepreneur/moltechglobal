// src/pages/Global.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const offices = [
  {
    city: "Singapore",
    country: "Singapore",
    type: "Headquarters",
    address: "10 Anson Road, #10-11 International Plaza, Singapore 079903",
    phone: "+65 6909 5705",
    email: "info@moltech.com",
    description:
      "Our global headquarters in Singapore coordinates worldwide operations with cutting-edge technology and sustainability at its core.",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&h=400&fit=crop",
  },
  {
    city: "Dubai",
    country: "UAE",
    type: "Regional Office",
    address: "Office 408, Tower B, Business Central Towers, Dubai, UAE",
    phone: "+971 4 123 4567",
    email: "dubai@moltech.com",
    description:
      "Our Dubai office manages Middle East operations with advanced logistics and energy solutions.",
    image:
      "https://images.unsplash.com/photo-1524492449090-1a065f2d4c57?w=600&h=400&fit=crop",
  },
  {
    city: "India",
    country: "India",
    type: "Regional Office",
    address:
      "No. 22, 1st Floor, Industrial Estate, Ambattur, Chennai - 600058",
    phone: "+91 44 2652 1234",
    email: "india@moltech.com",
    description:
      "India operations focus on technology development, IT services, and regional logistics support.",
    image:
      "https://images.unsplash.com/photo-1589541831132-6814a7f1c3d6?w=600&h=400&fit=crop",
  },
  {
    city: "Malaysia",
    country: "Malaysia",
    type: "Regional Offices",
    addressList: [
      {
        branch: "Port Klang",
        address:
          "18 Jalan Sungai Chandong 12, Pulau Indah, 42000 Pelabuhan Klang",
        phone: "+60 16-985 4705",
        email: "portklang@moltech.com",
      },
      {
        branch: "Johor",
        address:
          "No.19A, Jalan Sagai 6, Taman Pasir Putih, 81700 Pasir Gudang",
        phone: "+60 16-959 4075",
        email: "johor@moltech.com",
      },
    ],
    description:
      "Our Malaysia offices provide logistics, processing and supply chain support across Port Klang and Johor regions.",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=400&fit=crop",
  },
  {
    city: "Australia",
    country: "Australia",
    type: "Regional Office",
    address: "Level 5, 80 Clarence Street, Sydney NSW 2000",
    phone: "+61 2 9876 5432",
    email: "australia@moltech.com",
    description:
      "Our Sydney office oversees operations across Australia and Oceania with a focus on renewable energy and sustainability.",
    image:
      "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=600&h=400&fit=crop",
  },
];

const Global: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Our Global Presence
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            With offices strategically located worldwide, we deliver sustainable
            solutions and services to our partners across key regions.
          </p>
        </div>

        {/* Offices grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {offices.map((office, idx) => (
            <Card
              key={idx}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={office.image}
                  alt={`${office.city} Office`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <CardTitle className="text-xl font-bold">
                    {office.city}
                  </CardTitle>
                  <p className="text-sm opacity-90">{office.type}</p>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <p className="text-slate-600">{office.description}</p>

                {/* Addresses */}
                {office.addressList ? (
                  <div className="space-y-4 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                    {office.addressList.map((branch, i) => (
                      <div
                        key={i}
                        className="border-b pb-3 last:border-0 last:pb-0"
                      >
                        <p className="font-semibold text-slate-800 mb-2">
                          {branch.branch}
                        </p>
                        <div className="flex items-center text-sm text-slate-600 mb-1">
                          <MapPin className="w-4 h-4 mr-3 text-blue-600" />
                          {branch.address}
                        </div>
                        <div className="flex items-center text-sm text-slate-600 mb-1">
                          <Phone className="w-4 h-4 mr-3 text-blue-600" />
                          {branch.phone}
                        </div>
                        <div className="flex items-center text-sm text-slate-600">
                          <Mail className="w-4 h-4 mr-3 text-blue-600" />
                          {branch.email}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-slate-600">
                      <MapPin className="w-4 h-4 mr-3 text-blue-600" />
                      {office.address}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Phone className="w-4 h-4 mr-3 text-blue-600" />
                      {office.phone}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Mail className="w-4 h-4 mr-3 text-blue-600" />
                      {office.email}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Global;
