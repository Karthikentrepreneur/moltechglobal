import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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

        {/* Header */}
        <header className="flex items-start gap-4">
          <div className="w-16 h-16 bg-royal-gradient rounded-2xl flex items-center justify-center">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="heading-lg text-royal-blue">{title}</h1>
            <p className="body-md text-muted-foreground mt-2">{summary}</p>
          </div>
        </header>

        {/* Optional hero image */}
        {heroImage && (
          <img
            src={heroImage}
            alt={title}
            className="w-full h-[320px] object-cover rounded-2xl shadow-sm"
            loading="lazy"
            decoding="async"
          />
        )}

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
  );
};

export default ServicePage;
