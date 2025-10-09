import React from "react";
import ScrollAnimation from "./ScrollAnimation";

type CertificationProps = {
  certificateUrl: string;
  isoLogoUrl: string;       // SICCI logo (or override via prop)
  /** Optional additional logos to show in the same row */
  secondLogoUrl?: string;   // SBF logo (or override)
  thirdLogoUrl?: string;    // SLA logo (or override)
};

const CertificationSg: React.FC<CertificationProps> = ({
  certificateUrl,
  isoLogoUrl,
  secondLogoUrl,
  thirdLogoUrl,
}) => {
  // Three partner/association logos (fallback paths -> replace with your actual files)
  const logos = [
    isoLogoUrl || "/logo1.jpeg",
    secondLogoUrl || "/logo2.jpeg",
    thirdLogoUrl || "/logo3.jpeg",
  ];

  // Certificates/flags to show in a 3×3-style grid (3 columns on md+)
  const certFlags = [
    "/cer-sg.jpg",
    "/cer-sg-iscc.jpg",
    "/cer-uk.jpg",
    "/cer-th.jpg",
    "/cer-my.jpg",
    "/cer-dxb-1.jpg",
  ];

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-y-0 lg:gap-x-6 xl:gap-x-10 items-start">
          {/* LEFT: event/certificate photo */}
          <div className="order-1 lg:col-span-5 flex sm:justify-center lg:justify-start">
            <div className="relative w-full">
              <img
                src={certificateUrl || "/certified.jpeg"}
                alt="SICCI Centennial Celebration & Entrepreneur Awards"
                loading="lazy"
                className="w-full h-auto object-contain rounded-xl shadow-lg border border-slate-200
                           max-w-[420px] md:max-w-[460px] lg:max-w-[480px] xl:max-w-[500px]
                           mx-auto lg:mx-0"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="order-2 lg:col-span-7 text-center lg:text-left">
            <ScrollAnimation>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-9">
                SICCI Centennial Celebration & Entrepreneur Awards
              </h2>
              <div className="w-16 h-1 bg-gc-gold mt-3 mb-6 mx-auto lg:mx-0" />

              <p className="text-gray-700 leading-relaxed mb-4 max-w-2xl mx-auto lg:mx-0">
                A century of excellence and a legacy of leadership — celebrating with the Singapore Indian Chamber of Commerce & Industry (SICCI).
                We are proud to share this moment as our <strong>Group&nbsp;Chairman, Mr. Jayaprakash</strong>, receives the award,
                honoring his remarkable leadership and contribution.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
                Guest of Honour: Tharman Shanmugaratnam. Venue: Shangri-La Singapore.
              </p>

              <ul className="list-disc marker:text-gc-gold pl-5 space-y-3 mb-8 max-w-2xl mx-auto lg:mx-0 text-left">
                <li>Recognition at the SICCI Centennial Celebration &amp; Entrepreneur Awards</li>
                <li>Active engagement with the Singapore business community</li>
                <li>Affiliations with SICCI, SBF, and the Singapore Logistics Association</li>
              </ul>

              {/* Three logos — bigger & responsive */}
              <div
                className="
                  mt-8
                  flex flex-wrap md:flex-nowrap
                  justify-center lg:justify-start
                  gap-4 sm:gap-5 md:gap-6
                "
              >
                {logos.map((src, idx) => (
                  <div
                    key={`logo-${idx}`}
                    className="
                      flex items-center justify-center
                      h-20 w-20
                      sm:h-24 sm:w-24
                      md:h-28 md:w-28
                      lg:h-32 lg:w-32
                      xl:h-36 xl:w-36
                      rounded-full bg-white
                      ring-2 md:ring-4 ring-white
                      border border-slate-200
                      shadow-lg
                      p-1.5 sm:p-2 md:p-2.5
                    "
                    aria-label={`Association logo ${idx + 1}`}
                  >
                    <img
                      src={src}
                      alt={`Association logo ${idx + 1}`}
                      loading="lazy"
                      className="h-full w-full rounded-full object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Certificates / Flags grid (3 columns on md+, responsive) */}
              <div className="mt-10">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  Global Certifications
                </h3>
                <div className="
                  grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6
                  max-w-3xl lg:max-w-none
                ">
                  {certFlags.map((src, i) => (
                    <div
                      key={`flag-${i}`}
                      className="relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 shadow-sm bg-white"
                    >
                      <img
                        src={src}
                        alt={`Certification ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                  ))}
                  {/* If you ever add 3 more images, the grid becomes a perfect 3×3 */}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSg;
