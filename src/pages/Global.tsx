import React from "react";

type Location = {
  city: string;          // e.g., "Sydney"
  country?: string;      // e.g., "Australia"
  address?: string;      // full street address
  phone?: string;        // phone with country code
  image?: string;        // optional image URL
};

const Global: React.FC = () => {
  const locations: Location[] = [
    {
      city: "Jakarta",
      country: "Indonesia",
      address: "408, Lina Building, JL.HR Rasuna Said kav B7, Jakarta",
      phone: "+62 815 1038 5581",
      image:
        "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=400&fit=crop",
    },
    {
      city: "Port Klang",
      country: "Malaysia",
      address:
        "18 Jalan Sungai Chandong 12, Pulau Indah, 42000 Pelabuhan Klang",
      phone: "+60 16-985 4705",
      image:
        "https://images.unsplash.com/photo-1586162549366-979c3a7bba3a?w=600&h=400&fit=crop",
    },
    {
      city: "Johor",
      country: "Malaysia",
      address:
        "No.19A, Jalan Sagai 6, Taman Pasir Putih, 81700 Pasir Gudang",
      phone: "+60 16-959 4075",
      image:
        "https://images.unsplash.com/photo-1503264116251-35a269479413?w=600&h=400&fit=crop",
    },
    {
      city: "Dammam",
      country: "Saudi Arabia",
      address: "2817 King Faizal Road, 9403-32233",
      phone: "+966 13 3430003",
      image:
        "https://images.unsplash.com/photo-1588613259608-f9d5dbb5a5a3?w=600&h=400&fit=crop",
    },
    {
      city: "Singapore",
      country: "Singapore",
      address:
        "Blk 511 Kampong Bahru Rd, #03-01 Keppel Distripark, 099447",
      phone: "+65 65140868",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop",
    },
    {
      city: "Bangkok",
      country: "Thailand",
      address: "109 CCT Bldg, Surawong Rd, Bangrak, 10500",
      phone: "+60 16-985 4705",
      image:
        "https://images.unsplash.com/photo-1600072001391-3e18f8e8bcb2?w=600&h=400&fit=crop",
    },
    {
      city: "Dubai",
      country: "UAE",
      address: "Al Qusais Industrial Area 2",
      phone: "+971 509093357",
      image:
        "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=600&h=400&fit=crop",
    },
    {
      city: "London",
      country: "UK",
      address: "167-169 Great Portland Street, W1W 5PF",
      phone: "+44 7305 856612",
      image:
        "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=600&h=400&fit=crop",
    },
    {
      city: "New York",
      country: "USA",
      address: "33 Wood Ave S, Suite 600, Iselin, NJ 08830",
      phone: "+1 732 456 6780",
      image:
        "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=600&h=400&fit=crop",
    },
    // 🇦🇺 AUSTRALIA — added entry (fill in real details)
    {
      city: "Tullamarine",                 // TODO: change city if needed
      country: "Australia",
      address: "Suite 5, 7-9 Mallet Road, Tullamarine, VIC 3043",
      phone: "+61 388205157",
      image:
        "https://images.unsplash.com/photo-1506976785307-8732e854ad05?w=600&h=400&fit=crop",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Our Global Presence</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg overflow-hidden border border-gray-200 bg-white"
          >
            {loc.image && (
              <img
                src={loc.image}
                alt={`${[loc.city, loc.country].filter(Boolean).join(", ")}`}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold">
                {[loc.city, loc.country].filter(Boolean).join(", ")}
              </h2>

              {loc.address && (
                <p className="text-gray-600">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${loc.address} ${loc.city ?? ""} ${loc.country ?? ""}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {loc.address}
                  </a>
                </p>
              )}

              {loc.phone && (
                <p className="text-gray-800 font-medium mt-2">
                  <a
                    href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                    className="text-blue-600 hover:underline"
                  >
                    {loc.phone}
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Global;
