export default function Blog() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14">
      <h1 className="text-3xl font-semibold text-white/90">Blog</h1>
      <p className="mt-3 text-white/70 max-w-3xl">
        Add your articles, case studies, and press releases. Wire to a CMS later.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1,2,3,4].map((i) => (
          <article key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="h-40 rounded-xl bg-white/10" />
            <h3 className="mt-4 text-lg font-medium text-white/90">
              Post Title {i}
            </h3>
            <p className="mt-1 text-sm text-white/60">
              Short excerpt for the post. Keep it engaging.
            </p>
            <button className="mt-3 text-sm text-blue-200 hover:text-white">
              Read more →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
