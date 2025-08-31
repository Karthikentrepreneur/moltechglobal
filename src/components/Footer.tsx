// src/components/Footer.tsx

const Footer = () => {
  // Middle column links (2-column list like the reference)
  const quickLinks = [
    "Home",
    "About Us",
    "Our Services",
    "Our Presence",
    "Global Privilege",
    "Contact Us",
    "Careers",
    "Blog",
    "Privacy Policy",
  ];

  return (
    <footer className="bg-[#153a59] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ===== TOP: Newsletter / Schedule Download ===== */}
        <div className="py-8 text-center">
          <h3 className="text-xl md:text-2xl font-semibold">
            Download this month&apos;s Sailing Schedule
          </h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-4 flex max-w-xl items-stretch overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/15 focus-within:ring-white/30"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full bg-transparent px-4 py-3 text-white placeholder:text-white/70 focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap bg-[#F47E2A] px-5 py-3 font-semibold text-white hover:brightness-110"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* ===== MAIN: 2 Columns ===== */}
        <div className="grid grid-cols-1 gap-8 border-t border-white/10 py-12 md:grid-cols-2">
          {/* Left: About */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">About Moltech</h4>
            <p className="text-white/85 leading-relaxed">
              We aim to source and supply products that are environmentally friendly and have a reduced carbon footprint.
              We are dedicated to upholding ethical business practices and creating a
              positive impact on the communities where we operate.
            </p>
          </div>

          {/* Right: Quick Links (2 columns) */}
          <div className="mx-auto w-full max-w-md">
            <h4 className="text-lg text-center font-semibold">Quick Links</h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-center">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-block text-white/85 hover:text-white transition-colors underline-offset-4 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ===== GLOBAL OFFICES SECTION ===== */}
        <div className="border-t border-white/10 py-8">
          <div className="text-center mb-8">
            <h4 className="text-xl md:text-2xl font-semibold">Our Global Presence</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Australia */}
            <div className="border-l-2 border-[#F47E2A] pl-4 bg-white/5 p-4 rounded-r-lg">
              <h5 className="font-semibold text-white mb-2">AUSTRALIA</h5>
              <p className="text-white/85 text-sm mb-1">Suite 5, 7-9 Mallet Road,<br />Tullamarine, Victoria, 3043</p>
              <p className="text-white/85 text-sm mb-1">+61 388205157</p>
              <p className="text-white/85 text-sm">janak@moltechglobal.com</p>
            </div>

            {/* Indonesia */}
            <div className="border-l-2 border-[#F47E2A] pl-4 bg-white/5 p-4 rounded-r-lg">
              <h5 className="font-semibold text-white mb-2">INDONESIA</h5>
              <p className="text-white/85 text-sm mb-1">408, Lina Building, JL.HR Rasuna Said kav B7, Jakarta</p>
              <p className="text-white/85 text-sm mb-1">+62 815 1038 5581</p>
              <p className="text-white/85 text-sm">sourcing@moltechglobal.com</p>
            </div>

            {/* Malaysia - Portlang */}
            <div className="border-l-2 border-[#F47E2A] pl-4 bg-white/5 p-4 rounded-r-lg">
              <h5 className="font-semibold text-white mb-2">MALAYSIA - PORTLANG</h5>
              <p className="text-white/85 text-sm mb-1">18 Jalan Sungai Chandong 12, Bdr Armada Putra<br />Pulau Indah, 42000 Pelabuhan Klang,<br />Selangor Darul Ehsan, Malaysia</p>
              <p className="text-white/85 text-sm mb-1">+60 16-985 4705</p>
              <p className="text-white/85 text-sm">arun@moltechglobal.com</p>
            </div>

            {/* Malaysia - Johor */}
            <div className="border-l-2 border-[#F47E2A] pl-4 bg-white/5 p-4 rounded-r-lg">
              <h5 className="font-semibold text-white mb-2">MALAYSIA - JOHOR</h5>
              <p className="text-white/85 text-sm mb-1">HS(D) 576585 PTD 233430 No.19A, Jalan Sagai 6,<br />Taman Pasir Putih, 81700 Pasir Gudang, Johor</p>
              <p className="text-white/85 text-sm mb-1">+60 16-959 4075</p>
              <p className="text-white/85 text-sm">linda@moltechglobal.com</p>
            </div>

            {/* Saudi Arabia */}
            <div className="border-l-2 border-[#F47E2A] pl-4 bg-white/5 p-4 rounded-r-lg">
              <h5 className="font-semibold text-white mb-2">SAUDI ARABIA - DAMMAM</h5>
              <p className="text-white/85 text-sm mb-1">2817 King Faizal Road, Dammam 9403-32233,<br />Kingdom of Saudi Arabia</p>
              <p className="text-white/85 text-sm mb-1">+966 13 3430003</p>
              <p className="text-white/85 text-sm">james@moltechglobal.com</p>
            </div>

            {/* Singapore */}
            <div className="border-l-2 border-[#F47E2A] pl-4 bg-white/5 p-4 rounded-r-lg">
              <h5 className="font-semibold text-white mb-2">SINGAPORE</h5>
              <p className="text-white/85 text-sm mb-1">Blk 511 Kampong Bahru Road<br />#03-01 Keppel Distripark<br />Singapore 099447</p>
              <p className="text-white/85 text-sm mb-1">+65 65140868</p>
              <p className="text-white/85 text-sm">jenny@moltechglobal.com</p>
            </div>

            {/* Thailand */}
            <div className="border-l-2 border-[#F47E2A] pl-4 bg-white/5 p-4 rounded-r-lg">
              <h5 className="font-semibold text-white mb-2">THAILAND - BANGKOK</h5>
              <p className="text-white/85 text-sm mb-1">109 CCT Building, 3rd Floor, Rm.3,<br />Surawong Road, Suriyawongse, Bangrak,<br />Bangkok 10500</p>
              <p className="text-white/85 text-sm mb-1">+60 16-985 4705</p>
              <p className="text-white/85 text-sm">info@moltechglobal.com</p>
            </div>

            {/* UAE */}
            <div className="border-l-2 border-[#F47E2A] pl-4 bg-white/5 p-4 rounded-r-lg">
              <h5 className="font-semibold text-white mb-2">UAE - DUBAI</h5>
              <p className="text-white/85 text-sm mb-1">Plot #2430152, Al Qusais Industrial Area 2,<br />Dubai, United Arab Emirates</p>
              <p className="text-white/85 text-sm mb-1">+971 509093357</p>
              <p className="text-white/85 text-sm">info@moltechglobal.com</p>
            </div>

            {/* UK */}
            <div className="border-l-2 border-[#F47E2A] pl-4 bg-white/5 p-4 rounded-r-lg">
              <h5 className="font-semibold text-white mb-2">UK - LONDON</h5>
              <p className="text-white/85 text-sm mb-1">167-169 Great Portland Street, 5th Floor,<br />London, W1W 5PF, United Kingdom</p>
              <p className="text-white/85 text-sm mb-1">+44(0) 7305 856612<br />+44(0) 203 393 9508</p>
            </div>

            {/* USA */}
            <div className="border-l-2 border-[#F47E2A] pl-4 bg-white/5 p-4 rounded-r-lg">
              <h5 className="font-semibold text-white mb-2">USA - NEW YORK</h5>
              <p className="text-white/85 text-sm mb-1">New Jersey Branch, 33 Wood Avenue South,<br />Suite 600, Iselin, NJ 08830</p>
              <p className="text-white/85 text-sm mb-1">+1 732 456 6780</p>
              <p className="text-white/85 text-sm">info@moltechglobal.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
