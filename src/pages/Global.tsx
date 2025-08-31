// src/pages/Global.tsx
import heroMap from "/Biodieselfeedstocks01.jpg"; // <- use your image (map/gradient)
import imgOverview from "/Biodieselfeedstocks01.jpg";
import imgSingapore from "/Biodieselfeedstocks01.jpg";
import imgMalaysia from "/Biodieselfeedstocks01.jpg";
import imgUK from "/Biodieselfeedstocks01.jpg";
import imgUAE from "/Biodieselfeedstocks01.jpg";
import imgThailand from "/Biodieselfeedstocks01.jpg";
import imgIndonesia from "/Biodieselfeedstocks01.jpg";
import imgUSA from "/Biodieselfeedstocks01.jpg";
import imgSaudi from "/Biodieselfeedstocks01.jpg";

type Tile = {
  title: string;
  img: string;
  size?: "tall" | "wide" | "square";
  align?: "left" | "center" | "right";
  // optional copy (for the first “GLOBAL OVERVIEW” card)
  copy?: string;
};

const tiles: Tile[] = [
  {
    title: "GLOBAL OVERVIEW",
    img: imgOverview,
    size: "tall",
    align: "left",
    copy:
      "With a strong presence in the pacific region and our trusted partners throughout the planet, our services can be experienced around the planet.",
  },
  { title: "SINGAPORE", img: Biodieselfeedstocks01, align: "center" },
  { title: "MALAYSIA", img: Biodieselfeedstocks01, align: "right" },
  { title: "UK", img: Biodieselfeedstocks01, align: "left" },
  { title: "UAE", img: Biodieselfeedstocks01, align: "center" },
  { title: "THAILAND", img: Biodieselfeedstocks01, align: "right" },
  { title: "INDONESIA", img: Biodieselfeedstocks01, align: "left" },
  { title: "USA", img: Biodieselfeedstocks01, align: "center" },
  { title: "SAUDI ARABIA", img: Biodieselfeedstocks01, align: "right" },
];

export default function Global() {
  return (
    <main className="bg-[#e9ebef]"> {/* light grey like your mock */}
      {/* ===== HERO ===== */}
      <section className="relative min-h-[46vh] flex items-center overflow-hidden">
        {/* Background image */}
        <img
          src={heroMap}
          alt="World map"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#202a44]/85 via-[#1b3a66]/70 to-[#0e6b67]/70" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16">
          {/* Framed title like screenshot */}
          <div className="inline-block relative px-6 py-8">
            {/* Corners */}
            <span className="pointer-events-none absolute -top-6 -left-6 w-14 h-14 border-t-8 border-l-8 border-white/90 rounded-sm" />
            <span className="pointer-events-none absolute -bottom-6 -right-6 w-14 h-14 border-b-8 border-r-8 border-white/90 rounded-sm" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white">
              WHERE WE ARE
            </h1>
          </div>

          <p className="mt-8 max-w-2xl text-white/90 text-lg leading-relaxed">
            With a strong presence in the pacific region and our trusted partners
            throughout the planet, our services can be experienced around the planet.
          </p>
        </div>
      </section>

      {/* ===== GRID ===== */}
      <section className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-8 py-10 md:py-14">
        <div className="grid gap-5 md:gap-6 lg:gap-7
                        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t, i) => (
            <LocationTile key={i} {...t} />
          ))}
        </div>
      </section>
    </main>
  );
}

/* === Card Component – matches your blue overlay look === */
function LocationTile({ title, img, copy, align = "center" }: Tile) {
  // blue block alignment classes (left/center/right)
  const alignCls =
    align === "left"
      ? "sm:ml-0 sm:mr-auto"
      : align === "right"
      ? "sm:ml-auto sm:mr-0"
      : "sm:mx-auto";

  return (
    <article className="relative aspect-[4/3] overflow-hidden bg-white shadow
                        ring-1 ring-black/5">
      {/* Background image */}
      <img
        src={img}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Inner padding to create the white gutters like your design */}
      <div className="absolute inset-0 p-[10px]">
        <div className="relative h-full w-full bg-white">
          {/* Photo area again (to keep the thin gutter visible) */}
          <img
            src={img}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Blue overlay block */}
          <div
            className={`absolute ${alignBlockPosition(align)}
                        bg-[#0b63a9] text-white px-8 sm:px-10 py-10
                        max-w-[92%] sm:max-w-[85%]`}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-wide">
              {title}
            </h3>

            {copy && (
              <p className="mt-5 text-white/95 leading-relaxed text-base sm:text-[1.05rem]">
                {copy}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

/** Positioning helper for the blue block to resemble your mockups */
function alignBlockPosition(align: "left" | "center" | "right" = "center") {
  switch (align) {
    case "left":
      // large blue panel starting at left-middle
      return "left-0 top-1/2 -translate-y-1/2 sm:w-[70%] w-[85%]";
    case "right":
      return "right-0 top-1/2 -translate-y-1/2 sm:w-[70%] w-[85%]";
    default:
      return "left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:w-[70%] w-[85%]";
  }
}
