export type City = {
  name: string;
  lat: number;
  lng: number;
  address: string;
  contacts?: string[];
  email?: string;
};

export type Country = {
  code: string;
  name: string;
  lat: number;
  lng: number;
  cities: City[];
};

export const countries: Country[] = [
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
        address: "Office No: 48, 2nd Floor, Al Matar Centre, Old Airport Road Doha",
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
          "Al-Madinah Al-Munawarah Road, Al Sharafeyah, Jeddah 4542-22234, Kingdom of Saudi Arabia",
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
        address: "Blk 511 Kampong Bahru Road, #03-01 Keppel Distripark, Singapore - 099447",
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
        address: "408, Lina Building, JL.HR Rasuna Said kav B7, Jakarta",
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
        address: "New Jersey Branch, 33 Wood Avenue South Suite 600, Iselin, NJ 08830",
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
        address: "Suite 5, 7-9 Mallet Road, Tullamarine, Victoria, 3043",
        contacts: ["Mob: +61 432254969", "Tel: +61 388205157"],
        email: "info@gglaustralia.com",
      },
    ],
  },
];

export const sortedCountries: Country[] = [...countries].sort((a, b) =>
  a.name.localeCompare(b.name)
);

export const getInitialLocation = () => {
  const firstCountry = sortedCountries[0];
  const firstCity = firstCountry?.cities[0];

  if (!firstCountry || !firstCity) {
    return null;
  }

  return {
    country: firstCountry,
    city: firstCity,
  };
};
