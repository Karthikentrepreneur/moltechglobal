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
      slug: "biodiesel-feedstocks",
    },
    {
      icon: Beaker,
      title: "Fatty Acids",
      subtitle: "Specialized fatty acids and waxes for rubber, lubricants, and industrial applications",
      image: fattyAcidsCard,
      slug: "fatty-acids",
    },
    {
      icon: ShoppingBag,
      title: "Soap Noodles",
      subtitle: "Base materials for cosmetics, detergents, and toilet soap manufacturing",
      image: soapNoodlesCard,
      slug: "soap-noodles",
    },
    {
      icon: Wheat,
      title: "Animal Feed Fats",
      subtitle: "High-absorption liquid fats, dry fats, and high-purity calcium salts",
      image: animalFeedFatsCard,
      slug: "animal-feed-fats",
    },
    {
      icon: Zap,
      title: "Glycerin",
      subtitle: "Crude and refined glycerine for industrial to pharmaceutical-grade applications",
      image: glycerinCard,
      slug: "glycerin",
    },
    {
      icon: Package,
      title: "Feed Additives",
      subtitle: "Functional additives and custom premixes to optimize animal health and performance",
      image: feedAdditivesCard,
      slug: "feed-additives",
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center space-y-6 mb-12">
          <h2 className="heading-lg text-royal-blue">Products & Services</h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of sustainable bio-based products serving industries worldwide
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <Link
                key={i}
                to={`/products/${product.slug}`}
                className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-2xl"
              >
                <Card className="h-full overflow-hidden rounded-2xl border-slate-200 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-0.5">
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={product.image}
                      alt={`${product.title} product photography`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading={i < 2 ? "eager" : "lazy"}
                    />
                    {/* soft gradient for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
                    {/* corner icon chip */}
                    <div className="absolute bottom-3 right-3 rounded-xl bg-white/25 backdrop-blur-sm w-11 h-11 grid place-items-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-semibold leading-tight">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="sr-only">{product.title}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {product.subtitle}
                    </p>

                    {/* subtle CTA row */}
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-600">
                      <span className="transition-colors group-hover:text-emerald-700">
                        View details
                      </span>
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsServices;
