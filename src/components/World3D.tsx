// src/components/World3D.tsx
import React from "react";

const World3D: React.FC = () => {
  return (
    <section
      aria-label="3D World"
      className="relative w-full overflow-hidden"
    >
      {/* Replace /globe-3d.jpg with your actual 3D world image in public/ */}
      <img
        src="/globe-3d.jpg"
        alt="3D globe visualization"
        className="h-[380px] w-full object-cover sm:h-[420px] md:h-[460px] lg:h-[520px]"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-6">
        <h2 className="text-center text-white text-2xl sm:text-3xl font-extrabold tracking-wide drop-shadow">
          Our Global Reach
        </h2>
      </div>
    </section>
  );
};

export default World3D;
