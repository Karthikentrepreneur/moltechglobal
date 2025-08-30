import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Shield, 
  Truck, 
  Award, 
  Users, 
  Clock, 
  CheckCircle, 
  Heart,
  MessageCircle
} from "lucide-react";
import warehouseImg from "@/assets/warehouse.jpg";

const About = () => {
  const stats = [
    { icon: <Clock className="h-6 w-6" />, value: "5+", label: "Years of Excellence" },
    { icon: <Users className="h-6 w-6" />, value: "10,000+", label: "Happy Customers" },
    { icon: <Award className="h-6 w-6" />, value: "500+", label: "Product Varieties" },
    { icon: <Star className="h-6 w-6" />, value: "4.9", label: "Customer Rating" }
  ];

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-festive-gold" />,
      title: "Premium Quality",
      description: "All our crackers are sourced from certified manufacturers in Sivakasi and undergo strict quality testing."
    },
    {
      icon: <Truck className="h-8 w-8 text-festive-gold" />,
      title: "Safe Delivery",
      description: "Specialized packaging and trained delivery partners ensure your crackers reach you safely."
    },
    {
      icon: <Star className="h-8 w-8 text-festive-gold" />,
      title: "Best Prices",
      description: "Direct sourcing from manufacturers allows us to offer competitive prices without compromising quality."
    },
    {
      icon: <Heart className="h-8 w-8 text-festive-gold" />,
      title: "Customer First",
      description: "Your satisfaction is our priority. We provide excellent customer service and support."
    }
  ];

  const values = [
    "Safety and quality in every product",
    "Transparent pricing with no hidden costs",
    "Timely delivery across India",
    "Expert guidance for your celebrations",
    "Eco-friendly cracker options",
    "24/7 customer support"
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Sri Venkateshwara Crackers
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lighting up celebrations across India for 5 years with premium quality crackers 
            from the heart of Sivakasi, Tamil Nadu.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-festive hover-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-3 text-festive-gold">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Story Section */}
          <div className="space-y-6">
            <div>
              <Badge className="bg-festive-gold text-primary mb-4">Our Story</Badge>
              <h2 className="text-3xl font-bold text-primary mb-6">
                From Sivakasi to Your Celebrations
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sri Venkateshwara Crackers was born from a passion to bring joy and sparkle to every celebration. 
                  Founded 5 years ago in Sivakasi, the fireworks capital of India, we started with a simple mission: 
                  to provide high-quality, safe crackers at affordable prices.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  What began as a small family business has grown into a trusted name among customers across India. 
                  Our deep roots in Sivakasi give us direct access to the best manufacturers, ensuring that every 
                  product we sell meets the highest standards of quality and safety.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we're proud to have served over 10,000 happy customers, lighting up Diwali celebrations, 
                  weddings, corporate events, and countless special moments across the country.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={warehouseImg} 
              alt="Our warehouse in Sivakasi"
              className="w-full h-96 object-cover rounded-lg shadow-festive"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg" />
            <div className="absolute bottom-4 left-4 right-4">
              <Badge className="bg-festive-gold text-primary mb-2">Our Facility</Badge>
              <p className="text-white font-semibold">
                State-of-the-art warehouse in Sivakasi ensuring quality storage and distribution
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Us?</h2>
            <p className="text-lg text-muted-foreground">
              We're committed to making your celebrations memorable and safe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-festive hover-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Our Commitment</h2>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-festive-gold flex-shrink-0" />
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-festive p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-200 leading-relaxed mb-6">
              To be India's most trusted cracker retailer by providing premium quality products, 
              exceptional customer service, and making every celebration brighter, safer, and more memorable. 
              We believe in responsible celebrations that bring families together while respecting our environment.
            </p>
            <Badge className="bg-white/20 text-white">
              Celebrating Responsibly Since 2019
            </Badge>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-card rounded-lg shadow-festive">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Ready to Light Up Your Celebration?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Sri Venkateshwara Crackers for their special moments. 
            Experience the difference that quality and care can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = '/products'}
              className="bg-primary hover:bg-primary/90 font-semibold"
            >
              Explore Our Products
            </Button>
            <Button 
              onClick={() => window.open('https://wa.me/919876543210?text=Hi! I would like to know more about your crackers and services.', '_blank')}
              variant="outline"
              className="font-semibold"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
