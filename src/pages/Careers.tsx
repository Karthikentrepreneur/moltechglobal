export default function Careers() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14">
      <h1 className="text-3xl font-semibold text-white/90">Careers</h1>
      <p className="mt-3 text-white/70 max-w-3xl">
        Introduce your culture, benefits, and open roles. Connect to your ATS if available.
      </p>

      {/* Example job list */}
      <div className="mt-8 space-y-4">
        {[
          { title: "Supply Chain Analyst", loc: "Chennai, IN", type: "Full-time" },
          { title: "Front-end Developer", loc: "Remote", type: "Contract" },
        ].map((job) => (
          <div key={job.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-white/90 font-medium">{job.title}</h3>
              <span className="text-xs text-white/60">{job.type}</span>
            </div>
            <p className="text-sm text-white/60 mt-1">{job.loc}</p>
            <button className="mt-3 rounded-full bg-white text-blue-700 hover:bg-blue-50 h-9 px-4 text-sm shadow">
              Apply
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
