// src/pages/SoapNoodles.tsx
import ServicePage from "./ServicePage";
import { ShoppingBag } from "lucide-react";

export default function SoapNoodles() {
  return (
    <div className="!mt-0 !pt-0"> 
      <ServicePage
        title="Soap Noodles"
        summary="Cosmetic and detergent grade soap noodles with controlled moisture, TFM, and color for reliable bar manufacturing."
        bullets={[
          "Toilet and cosmetic grade noodles for premium personal care products",
          "Detergent grade formulations for household and industrial cleaning applications",
          "Key specifications: TFM content, moisture control, color grade (Lovibond), and fatty acid profile",
          "Consistent quality with controlled pearlization and uniform noodle structure",
          "Process support: fragrance loading capacity, filler compatibility, and batching recommendations",
          "Packaging and MOQ tailored to production requirements",
        ]}
        Icon={ShoppingBag}
        heroImage="/Soapnoodles.jpg"   // make sure file exists in /public
        backTo="/products"
        seoTitle="Toilet & Detergent Grade Soap Noodles | Moltech"
        seoDescription="Cosmetic and detergent grades with controlled moisture, TFM, and color for reliable bar manufacturing."
        flushTop  // 👈 still keeps hero flush under navbar
        className="!mt-0 !pt-0" // 👈 override: removes white space ONLY here
      />
    </div>
  );
}
