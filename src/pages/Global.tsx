export default function Global() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14">
      <h1 className="text-3xl font-semibold text-white/90">Global Presence</h1>
      <p className="mt-3 text-white/70 max-w-3xl">
        Map your offices, warehouses, and partner network. Add a map or country cards below.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {["India", "Singapore", "UAE", "USA", "UK", "SEA"].map((region) => (
          <div key={region} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium text-white/90">{region}</h3>
            <p className="mt-1 text-sm text-white/60">
              Office address, contact details, and key capabilities.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
