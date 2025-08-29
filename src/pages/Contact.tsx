export default function Contact() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14">
      <h1 className="text-3xl font-semibold text-white/90">Contact</h1>
      <p className="mt-3 text-white/70 max-w-3xl">
        Reach out for partnerships, sourcing, and careers.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form */}
        <form className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <div>
            <label className="block text-sm text-white/70">Name</label>
            <input className="mt-1 w-full rounded-lg bg-white/10 text-white placeholder-white/40 px-3 py-2 outline-none border border-white/10" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm text-white/70">Email</label>
            <input type="email" className="mt-1 w-full rounded-lg bg-white/10 text-white placeholder-white/40 px-3 py-2 outline-none border border-white/10" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm text-white/70">Message</label>
            <textarea rows={4} className="mt-1 w-full rounded-lg bg-white/10 text-white placeholder-white/40 px-3 py-2 outline-none border border-white/10" placeholder="How can we help?" />
          </div>
          <button className="rounded-full bg-white text-blue-700 hover:bg-blue-50 h-10 px-5 text-sm font-medium shadow">
            Send
          </button>
        </form>

        {/* Details */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-white/90 font-medium">Head Office</h3>
          <p className="mt-2 text-sm text-white/70">
            Add your address line 1<br />Address line 2<br />City, Country
          </p>
          <p className="mt-3 text-sm text-white/70">
            Phone: +00 0000 0000<br />
            Email: info@example.com
          </p>
          <div className="mt-6 h-48 rounded-xl bg-white/10 grid place-items-center text-white/50 text-sm">
            Map / embed placeholder
          </div>
        </div>
      </div>
    </section>
  );
}
