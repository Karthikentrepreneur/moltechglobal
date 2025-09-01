import React from "react";

type Location = {
  city: string;
  country: string;
  address: string;
  phone: string;
  image?: string;
};

const Global: React.FC = () => {
  const locations: Location[] = [
    {
      city: "Jakarta",
      country: "Indonesia",
      address: "408, Lina Building, JL.HR Rasuna Said kav B7",
      phone: "+62 815 1038 5581",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=400&fit=crop",
    },
    {
      city: "Johor",
      country: "Malaysia",
      address: "No.19A, Jalan Sagai 6, Taman Pasir Putih, 81700 Pasir Gudang",
      phone: "+60 16-959 4075",
      image: "https://images.unsplash.com/photo-1503264116251-35a269479413?w=600&h=400&fit=crop",
    },
    // ✅ Add more objects here, always with commas
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
            {loc.image && (
              <img
                src={loc.image}
                alt={`${loc.city} office`}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
            )}
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
