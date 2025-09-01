import React from "react";

type Location = {
  city: string;
  country: string;
  address: string;
  phone: string;
};

const Global: React.FC = () => {
  const locations: Location[] = [
    {
      city: "Jakarta",
      country: "Indonesia",
      address: "408, Lina Building, JL.HR Rasuna Said kav B7",
      phone: "+62 815 1038 5581",
    },
    {
      city: "Port Klang",
      country: "Malaysia",
      address: "18 Jalan Sungai Chandong 12, Pulau Indah, 42000 Pelabuhan Klang",
      phone: "+60 16-985 4705",
    },
    {
      city: "Johor",
      country: "Malaysia",
      address: "No.19A, Jalan Sagai 6, Taman Pasir Putih, 81700 Pasir Gudang",
      phone: "+60 16-959 4075",
    },
    {
      city: "Dammam",
      country: "Saudi Arabia",
      address: "2817 King Faizal Road, 9403-32233",
      phone: "+966 13 3430003",
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "Blk 511 Kampong Bahru Rd, #03-01 Keppel Distripark, 099447",
      phone: "+65 65140868",
    },
    {
      city: "Bangkok",
      country: "Thailand",
      address: "109 CCT Bldg, Surawong Rd, Bangrak, 10500",
      phone: "+60 16-985 4705",
    },
    {
      city: "Dubai",
      country: "UAE",
      address: "Al Qusais Industrial Area 2",
      phone: "+971 509093357",
    },
    {
      city: "London",
      country: "UK",
      address: "167-169 Great Portland Street, W1W 5PF",
      phone: "+44 7305 856612",
    },
    {
      city: "New York",
      country: "USA",
      address: "33 Wood Ave S, Suite 600, Iselin, NJ 08830",
      phone: "+1 732 456 6780",
    },
    // 👉 Add more locations here (just copy the format and don’t forget commas!)
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Global Presence</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">
              {loc.city}, {loc.country}
            </h2>
            <p className="text-gray-700">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  loc.address + " " + loc.city + " " + loc.country
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {loc.address}
              </a>
            </p>
            <p className="mt-2">
              <a
                href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                className="text-blue-600 hover:underline"
              >
                {loc.phone}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Global;
