import ServicePage from "./ServicePage";
import { Beaker } from "lucide-react";
import fattyAcidsHero from "@/assets/fatty-acids-hero.jpg";

export default function FattyAcids() {
  return (
    <ServicePage
      title="Fatty Acids"
      summary="Specialized fatty acids and waxes for rubber, lubricants, candles, and cosmetics with consistent specifications."
      bullets={[
        "Stearic Acid (rubber grade) specifically formulated for tire industry applications",
        "Hydrogenated Palm Stearine & Palm Waxes for high-performance lubricant systems",
        "Specialized fatty acids (C16–C18 cuts) including Methyl palmitate and oleate",
        "Technical specifications: Controlled acid value, iodine value, melting point, and color grade",
        "Quality documentation: COA, MSDS, and REACH compliance where applicable",
        "Applications: tire manufacturing, candle production, cosmetic formulations, industrial lubricants"
      ]}
      Icon={Beaker}
      heroImage={fattyAcidsHero}
      backTo="/products"
      seoTitle="Stearic, Palmitic & Specialty Fatty Acids | Moltech"
      seoDescription="Rubber-grade stearic, hydrogenated palm stearine, palm waxes, and tailored C16–C18 cuts with consistent specs."
    />
  );
}
