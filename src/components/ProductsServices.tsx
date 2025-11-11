// src/components/ProductsServices.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Zap, ShoppingBag, Wheat, Beaker, Package } from "lucide-react";
import { Link } from "react-router-dom";

import biodieselCard from "@/assets/product-biodiesel-feedstocks-card.jpg";
import fattyAcidsCard from "@/assets/product-fatty-acids-card.jpg";
import soapNoodlesCard from "@/assets/soapnoodles.png";
import animalFeedFatsCard from "@/assets/product-animal-feed-fats-card.jpg";
import glycerinCard from "@/assets/product-glycerin-card.jpg";
import feedAdditivesCard from "@/assets/animalfeeds.png";

const ProductsServices = () => {
  const products = [
    {
      icon: Droplets,
      title: "Biodiesel Feedstocks",
      subtitle:
        "ISCC-certified UCO and high-acidity oils for renewable fuel production",
      image: "/Biodieselariel.jpg",
      slug: "biodiesel-feedstocks",
    },
    {
      icon: Beaker,
      title: "Fatty Acids",
      subtitle:
        "Specialized fatty acids and waxes for rubber, lubricants, and industrial applications",
      image: "/biofuel.jpg",
      slug: "fatty-acids",
    },
    {
      icon: ShoppingBag,
      title: "Soap Noodles",
      subtitle:
        "Base materials for cosmetics, detergents, and toilet soap manufacturing",
      image: "/soap.jpg",
      slug: "soap-noodles",
    },
    {
      icon: Wheat,
      title: "Animal Feed Fats",
      subtitle:
        "High-absorption liquid fats, dry fats, and high-purity calcium salts",
      image: "/farmer.jpg",
      slug: "animal-feed-fats",
    },
    {
      icon: Zap,
      title: "Glycerin",
      subtitle:
        "Crude and refined glycerine for industrial to pharmaceutical-grade applications",
      image: "/chemistry.jpg",
      slug: "glycerin",
    },
    {
      icon: Package,
      title: "Feed Additives",
      subtitle:
        "Functional additives and custom premixes to optimize animal health and performance",
      image: "/animalfeed.jpg",
      slug: "feed-additives",
    },
  ];

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 40%, #60A5FA 100%)",
      }}
    >
      {/* Subtle glowing overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(80% 80% at 50% 20%, rgba(255,255,255,0.25), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Products & Services
          </h2>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive range of sustainable bio-based products serving industries worldwide
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <Link
                key={i}
                to={`/products/${product.slug}`}
                className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-2xl"
              >
                <Card className="h-full overflow-hidden rounded-2xl border-white/10 bg-white/10 backdrop-blur-md shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-0.5">
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={product.image}
                      alt={`${product.title} product photography`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      loading={i < 2 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />
                    {/* Icon Chip */}
                    <div className="absolute bottom-3 right-3 rounded-xl bg-white/25 backdrop-blur-sm w-11 h-11 grid place-items-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-semibold leading-tight text-white">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="sr-only">
                      {product.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <p className="text-sm text-gray-100 leading-relaxed">
                      {product.subtitle}
                    </p>

                    {/* CTA Row */}
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-300">
                      <span className="transition-colors group-hover:text-emerald-400">
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
