import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import moltechHero from "@/assets/moltech-hero-business.jpg";

type Props = {
  title: string;
  summary: string;
  bullets: string[];
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  heroImage?: string; // optional image path
  backTo?: string;    // e.g., "/products"
  seoTitle?: string;  // SEO title
  seoDescription?: string; // SEO description
};

const ServicePage = ({ 
  title, 
  summary, 
  bullets, 
  Icon, 
  heroImage, 
  backTo = "/products",
  seoTitle,
  seoDescription
}: Props) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section with Background Image */}
        <section className="relative h-80 overflow-hidden">
          <img
            src={heroImage || moltechHero}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-royal-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-2">{title}</h1>
              <p className="text-xl opacity-90 max-w-2xl">{summary}</p>
            </div>
          </div>
        </section>

        <article className="section-padding">
      <Helmet>
        <title>{seoTitle || `${title} | Moltech`}</title>
        <meta name="description" content={seoDescription || summary} />
        <meta property="og:title" content={seoTitle || `${title} | Moltech`} />
        <meta property="og:description" content={seoDescription || summary} />
        <meta property="og:type" content="product" />
        {heroImage && <meta property="og:image" content={heroImage} />}
        <link rel="canonical" href={`https://moltech.com${backTo}/${title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')}`} />
      </Helmet>
      
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-muted-foreground">
          <Link to="/" className="hover:underline">Home</Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          <Link to={backTo} className="hover:underline">Products</Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-royal-blue font-medium">{title}</span>
        </div>


        {/* Details */}
        <Card className="glass-card border-none">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">What we offer</h2>
            <ul className="space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-sustainability-green rounded-full mt-2" />
                  <p className="text-muted-foreground">{b}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="glass-card p-6 rounded-2xl text-center">
          <h3 className="heading-sm text-royal-blue mb-2">Need a custom formulation?</h3>
          <p className="text-muted-foreground mb-4">
            Tell us your specs, region, and volume—our team will tailor a solution.
          </p>
          <Link to="/contact" className="btn-hero inline-block">Contact Our Experts</Link>
        </div>
      </div>
    </article>
    </main>
    <Footer />
    </div>
  );
};

export default ServicePage;
