import { Leaf, Globe, Award, Users, Eye, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">

        {/* About Us */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="heading-lg text-royal-blue">About Us</h2>
            <p className="body-md text-muted-foreground leading-relaxed">
              Moltech strides in the bio space by developing clean initiatives and sustainable products that fuel the circular economy. With a strong presence across Asia, the Middle East, the United Kingdom, and the United States, we are uniquely positioned to harness cross-continental opportunities in renewable and sustainable solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="glass-card p-6 text-center">
              <Globe className="w-12 h-12 text-royal-blue mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Global Reach</h3>
              <p className="text-sm text-muted-foreground">Cross-continental operations</p>
            </div>
            <div className="glass-card p-6 text-center">
              <Leaf className="w-12 h-12 text-sustainability-green mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Sustainable</h3>
              <p className="text-sm text-muted-foreground">Clean initiatives</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Vision Image */}
          <div className="relative">
            <img
              src="/vision.jpg"
              alt="Vision"
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl" />
          </div>

          {/* Right - Vision Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Eye className="w-8 h-8 text-royal-blue" />
                <h2 className="heading-lg text-royal-blue">Our Vision</h2>
              </div>
              <p className="body-md text-muted-foreground leading-relaxed">
                To be a global leader in sustainable energy and circular economy solutions, 
                driving innovation and promoting a greener planet through renewable technologies.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Target className="w-8 h-8 text-sustainability-green" />
                <h2 className="heading-lg text-royal-blue">Our Mission</h2>
              </div>
              <p className="body-md text-muted-foreground leading-relaxed">
                Our mission is to transform waste into valuable resources by harnessing technology, 
                sustainability, and innovation — enabling cleaner fuel alternatives and sustainable growth worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Driving Sustainability */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="lg:order-2 space-y-6">
            <h2 className="heading-lg text-royal-blue">Driving Sustainability</h2>
            <p className="body-md text-muted-foreground leading-relaxed">
              We are committed to reducing carbon footprints and greenhouse gas emissions through products that support a balanced ecosystem. Leveraging advanced technology, we ensure full traceability of materials in compliance with EU Sustainability Directives.
            </p>
          </div>
          <div className="lg:order-1 grid grid-cols-2 gap-6">
            <div className="glass-card p-6 text-center">
              <Award className="w-12 h-12 text-royal-blue mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">EU Compliant</h3>
              <p className="text-sm text-muted-foreground">Full traceability</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-sustainability-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Low Carbon</h3>
              <p className="text-sm text-muted-foreground">Reduced emissions</p>
            </div>
          </div>
        </div>

        {/* Biodiesel Feedstock */}
        <div className="glass-card p-12 mb-20">
          <div className="text-center space-y-6">
            <h2 className="heading-lg text-royal-blue">Biodiesel Feedstock</h2>
            <p className="body-md text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our expertise lies in sourcing sustainable feedstocks using technology, skilled manpower, and an in-house global logistics platform. Used cooking oil (UCO) collected from our network is processed and supplied to bio refineries worldwide, where it is converted into clean, renewable biofuels.
            </p>
          </div>
        </div>

        {/* Trust */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="heading-lg text-royal-blue">Trust</h2>
            <p className="body-md text-muted-foreground leading-relaxed">
              At Moltech, our partnerships are built on communication, transparency, strong work ethics, and strict quality control. We treat our trading partners as part of our team, making us one of the most trusted names in the global trade of bio-based products.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="glass-card p-6 text-center">
              <Users className="w-12 h-12 text-royal-blue mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Partnership</h3>
              <p className="text-sm text-muted-foreground">Strong work ethics</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-royal-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality</h3>
              <p className="text-sm text-muted-foreground">Strict control</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
