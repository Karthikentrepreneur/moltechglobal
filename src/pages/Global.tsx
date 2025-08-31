// src/pages/GlobalPresence.tsx
import worldMapBg from "../assets/world-map-bg.jpg";

export default function GlobalPresence() {
  const locations = [
    { city: "Singapore (HQ)", region: "Southeast Asia", note: "Keppel Distripark" },
    { city: "Malaysia", region: "Southeast Asia", note: "Klang / Port operations" },
    { city: "Thailand", region: "Southeast Asia", note: "Bangkok gateway" },
    { city: "Indonesia", region: "Southeast Asia", note: "Jakarta & Surabaya reach" },
    { city: "Saudi Arabia", region: "Middle East", note: "Partnership network" },
    { city: "United Kingdom", region: "Europe", note: "London office" },
    { city: "United States", region: "North America", note: "Houston hub" },
  ];

  const stats = [
    { label: "Countries", value: "15+" },
    { label: "Partners", value: "200+" },
    { label: "Years", value: "15+" },
    { label: "Locations", value: "25+" },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14">
      <h1 className="text-3xl font-semibold text-white/90">Global Presence</h1>
      <p className="mt-3 text-white/70 max-w-3xl">
        We operate across Southeast Asia, the Middle East, Europe, and North America to keep supply chains moving—reliably and sustainably.
      </p>

      {/* Map Banner (visual, like the image block in Products cards) */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur">
        <div className="relative h-48 sm:h-60 md:h-72">
          <img
            src={worldMapBg}
            alt="Global presence world map"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm text-white/80 border border-white/10">
              Worldwide Network
            </span>
          </div>
        </div>
      </div>

      {/* Stats – mirrors the simple, compact style */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur"
          >
            <div className="text-2xl font-semibold text-white/90">{s.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Locations Grid — styled exactly like Products cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((loc) => (
          <div
            key={loc.city}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="h-36 rounded-xl bg-white/10 flex items-center justify-center">
              <span className="text-white/70 text-sm">Photo: {loc.city}</span>
            </div>
            <h3 className="mt-4 text-lg font-medium text-white/90">{loc.city}</h3>
            <p className="mt-1 text-sm text-white/60">{loc.region}</p>
            {loc.note && (
              <p className="mt-1 text-xs text-white/50">{loc.note}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
