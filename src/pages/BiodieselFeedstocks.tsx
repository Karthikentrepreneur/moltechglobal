import ServicePage from "./ServicePage";
import { Droplets } from "lucide-react";
import biodieselHero from "@/assets/biodiesel-feedstocks-hero.jpg";

export default function BiodieselFeedstocks() {
  return (
    <ServicePage
      title="Biodiesel Feedstocks (UCO)"
      summary="ISCC-compliant UCO feedstocks with global logistics, traceability, and stable quality for renewable diesel and SAF production."
      bullets={[
        "ISCC Certified Used Cooking Oil (UCO) with full traceability documentation",
        "High-acidity vegetable oil wastes processed to refinery-ready specifications", 
        "Applications: transportation biodiesel, sustainable aviation fuel (SAF), heating, and power generation",
        "FFA range: 0.5-15% with moisture content <0.1% and minimal impurities",
        "Packaging options: IBC totes, steel drums, and bulk tanker shipments",
        "Global pickup network with export documentation and flexible Incoterms"
      ]}
      Icon={Droplets}
      heroImage={biodieselHero}
      seoTitle="Biodiesel Feedstocks (UCO) – Certified Supply for Bio-Refineries | Moltech"
      seoDescription="ISCC-compliant UCO feedstocks with global logistics, traceability, and stable quality for renewable diesel and SAF."
    />
  );
}
