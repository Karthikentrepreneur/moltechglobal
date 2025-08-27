import ServicePage from "./ServicePage";
import { Wheat } from "lucide-react";
import animalFeedFatsHero from "@/assets/animal-feed-fats-hero.jpg";

export default function AnimalFeedFats() {
  return (
    <ServicePage
      title="Animal Feed Fats"
      summary="High-energy density formulations and calcium-salt bypass fats for superior animal nutrition and feed conversion efficiency."
      bullets={[
        "Proprietary liquid fat formulation with enhanced absorption rates for improved FCR",
        "Dry fats and rumen bypass technology using 99% purity calcium salts of fatty acids", 
        "Calcium salts designed for dairy applications to support milk yield and fat content",
        "Technical specifications: Purity percentage, calcium content, particle size distribution, and shelf life",
        "Usage guidelines: Optimal inclusion rates and mixing compatibility with feed systems",
        "Value benefits: Energy density optimization, improved feed conversion, and enhanced animal performance"
      ]}
      Icon={Wheat}
      heroImage={animalFeedFatsHero}
      backTo="/products"
      seoTitle="Animal Feed Fats & Rumen Bypass Fats | Moltech"
      seoDescription="Liquid formulations and calcium-salt bypass fats (≈99% purity) for energy density and efficient FCR."
    />
  );
}
