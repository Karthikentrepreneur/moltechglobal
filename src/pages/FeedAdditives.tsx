import ServicePage from "./ServicePage";
import { Package } from "lucide-react";
import feedAdditivesHero from "@/assets/feed-additives-hero.jpg";

export default function FeedAdditives() {
  return (
    <ServicePage
      title="Feed Additives"
      summary="Custom vitamin, mineral, and enzyme blends for targeted animal performance with rigorous quality assurance."
      bullets={[
        "Soya lecithin for improved fat digestion and nutrient absorption",
        "De-oiled rice bran and palm kernel meal as protein and fiber sources",
        "Custom vitamin premixes tailored to species-specific nutritional requirements",
        "Portfolio includes: vitamins, trace minerals, enzymes, and probiotic formulations",
        "Species-specific customization with optimized inclusion rates for different animal categories",
        "Quality control: Homogeneity testing, microbiological analysis, and stability validation"
      ]}
      Icon={Package}
      heroImage={feedAdditivesHero}
      backTo="/products"
      seoTitle="Feed Additives & Premixes | Moltech"
      seoDescription="Custom vitamin, mineral, and enzyme blends for targeted animal performance with rigorous QA."
    />
  );
}
