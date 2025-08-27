import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Zap, ShoppingBag, Wheat, Beaker, Package } from "lucide-react";
import { Link } from "react-router-dom";
import biodieselCard from "@/assets/product-biodiesel-feedstocks-card.jpg";
import fattyAcidsCard from "@/assets/product-fatty-acids-card.jpg";
import soapNoodlesCard from "@/assets/product-soap-noodles-card.jpg";
import animalFeedFatsCard from "@/assets/product-animal-feed-fats-card.jpg";
import glycerinCard from "@/assets/product-glycerin-card.jpg";
import feedAdditivesCard from "@/assets/product-feed-additives-card.jpg";

const ProductsServices = () => {
  const products = [
    {
      icon: Droplets,
      title: "Biodiesel Feedstocks",
      subtitle: "ISCC-certified UCO and high-acidity oils for renewable fuel production",
      image: biodieselCard,
      slug: "biodiesel-feedstocks"
    },
    {
      icon: Beaker, 
      title: "Fatty Acids",
      subtitle: "Specialized fatty acids and waxes for rubber, lubricants, and industrial applications",
      image: fattyAcidsCard,
      slug: "fatty-acids"
    },
    {
      icon: ShoppingBag, 
      title: "Soap Noodles", 
      subtitle: "Base materials for cosmetics, detergents, and toilet soap manufacturing",
      image: soapNoodlesCard,
      slug: "soap-noodles"
    },
    {
      icon: Wheat,
      title: "Animal Feed Fats",
      subtitle: "High-absorption liquid fats, dry fats, and high-purity calcium salts",
      image: animalFeedFatsCard,
      slug: "animal-feed-fats"
    },
    {
      icon: Zap,
      title: "Glycerin",
      subtitle: "Crude and refined glycerine for industrial to pharmaceutical-grade applications",
      image: glycerinCard,
      slug: "glycerin"
    },
    {
      icon: Package,
      title: "Feed Additives",
      subtitle: "Functional additives and custom premixes to optimize animal health and performance",
      image: feedAdditivesCard,
      slug: "feed-additives"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="heading-lg text-royal-blue">Products & Services</h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of sustainable bio-based products serving industries worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link 
              key={index} 
              to={`/products/${product.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[16/9] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03]">
                {/* Full-bleed image */}
                <img 
                  src={product.image} 
                  alt={`${product.title} product photography`}
                  className="w-full h-full object-cover"
                />
                
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
                
                {/* Top-left text overlay */}
                <div className="absolute top-6 left-6 text-white max-w-[70%]">
                  <h3 className="text-2xl font-bold mb-1 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-90">
                    {product.subtitle}
                  </p>
                </div>
                
                {/* Icon in bottom-right */}
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <product.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="heading-sm text-royal-blue mb-4">
              Need Custom Solutions?
            </h3>
            <p className="body-md text-muted-foreground mb-6">
              Our team can develop tailored products to meet your specific requirements
            </p>
            <button className="btn-hero">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsServices;
