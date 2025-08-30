// src/components/GrowWithMoltech.tsx
import React from "react";
import { Users, Heart, Zap, Award } from "lucide-react";

type Item = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};

const items: Item[] = [
  {
    icon: Users,
    title: "Inclusive Culture",
    desc: "Diverse teams working together towards sustainability goals",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    desc: "Healthy workspace that supports your personal growth",
  },
  {
    icon: Zap,
    title: "Innovation",
    desc: "Cutting-edge technology in renewable energy solutions",
  },
  {
    icon: Award,
    title: "Recognition",
    desc: "Your contributions to a sustainable future are valued",
  },
];

const GrowWithMoltech: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Soft blue page background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 500px at 10% -20%, rgba(59,130,246,0.08), transparent 60%), radial-gradient(900px 400px at 90% 0%, rgba(99,102,241,0.08), transparent 60%), linear-gradient(180deg,#ffffff 0%,#f4f8ff 100%)",
        }}
      />

      {/* Subtle glow blobs */}
      <div className="pointer-events-none absolute -left-24 top-1/3 h-64 w-64 -z-10 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-10 h-56 w-56 -z-10 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20 lg:px-8">
        <header className="text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-blue-800">
            Grow with Moltech
          </h2>
          <p className="mt-4 text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
            Join our team and discover opportunities to grow your talent in a healthy,
            innovative workspace. We’re building the future of sustainable energy together.
          </p>
        </header>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-3xl bg-white/90 backdrop-blur-sm p-6 shadow-[0_12px_40px_rgba(23,65,158,0.10)] ring-1 ring-blue-100 hover:shadow-[0_18px_60px_rgba(23,65,158,0.18)] transition-shadow"
            >
              <div className="flex items-start gap-4">
                {/* Icon Tile */}
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20">
                  <Icon className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800">{title}</h3>
                  <p className="mt-1 text-slate-600">{desc}</p>
                </div>
              </div>

              {/* Hover underline accent */}
              <span className="mt-5 block h-1 w-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-300 group-hover:w-24" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowWithMoltech;
export { GrowWithMoltech };
