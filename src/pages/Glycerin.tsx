import ServicePage from "./ServicePage";
import { Zap } from "lucide-react";
import glycerinHero from "@/assets/glycerin-hero.jpg";

export default function Glycerin() {
  return (
    <ServicePage
      title="Glycerin"
      summary="USP/pharmaceutical and technical grade glycerin with consistent purity and full documentation for diverse applications."
      bullets={[
        "Crude glycerine (65%–85% purity) for industrial applications and further processing",
        "Refined glycerine (99.5%+ purity) meeting USP and pharmaceutical standards",
        "Technical specifications: Purity percentage, moisture content, ash content, and color grade (APHA)",
        "Applications: pharmaceutical formulations, personal care products, tobacco humectant, antifreeze systems",
        "Quality assurance: USP compliance documentation, comprehensive COA and MSDS available",
        "Packaging options: Industrial drums, pharmaceutical-grade containers, and bulk shipments"
      ]}
      Icon={Zap}
      heroImage={glycerinHero}
      backTo="/products"
      seoTitle="Refined Glycerin USP/Pharma & Technical Grades | Moltech"
      seoDescription="Consistent purity with full documentation for pharma, personal care, and industrial applications."
    />
  );
}
