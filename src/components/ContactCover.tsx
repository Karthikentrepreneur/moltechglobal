// src/components/ContactCover.tsx
import React from "react";

type Props = {
  /** Optional custom image path under /public */
  src?: string;
  /** Optional title */
  title?: string;
  /** Optional subtitle */
  subtitle?: string;
};

const ContactCover: React.FC<Props> = ({
  src = "/contact-cover.jpg", // dummy fallback from public/
  title = "Find Us by Location",
  subtitle = "Global offices and regional support hubs",
}) => {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src={src}
        alt="Contact by location cover"
        className="h-[260px] w-full object-cover sm:h-[300px] md:h-[340px]"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="absolute inset-0 grid place-items-center px-6">
        <div className="text-center">
          <h3 className="text-white text-2xl sm:text-3xl font-bold drop-shadow">
            {title}
          </h3>
          <p className="mt-2 text-white/90 text-sm sm:text-base drop-shadow">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCover;
