{/* ---------- HERO ---------- */}
<section className="relative min-h-[55vh]">
  {/* Background image */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: "url('/images/about-hero.jpg')", // keep or swap
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
  {/* Readability fade */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

  <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
    <div className="relative inline-block max-w-3xl p-4 sm:p-6 md:p-8">
      {/* Corner frame */}
      <span className="pointer-events-none absolute -top-4 -left-4 h-10 w-10 border-t-4 border-l-4 border-white" />
      <span className="pointer-events-none absolute -bottom-4 -right-4 h-10 w-10 border-b-4 border-r-4 border-white" />

      {/* ✅ Dummy image ABOVE the heading */}
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
        alt="Moltech banner"
        className="mb-4 h-16 w-auto rounded-md border border-white/50 shadow-lg"
        draggable={false}
      />

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-wide text-white">
        ABOUT US –<br />
        CHEMICAL SOLUTIONS FOR<br />
        SUSTAINABLE INDUSTRIES
      </h1>
    </div>
  </div>
</section>
