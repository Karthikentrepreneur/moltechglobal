import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, Zap, Award } from "lucide-react";
import teamTrust from "../assets/team-trust.jpg";
const Careers = () => {
  const values = [{
    icon: Users,
    title: "Inclusive Culture",
    description: "Diverse teams working together towards sustainability goals"
  }, {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Healthy workspace that supports your personal growth"
  }, {
    icon: Zap,
    title: "Innovation",
    description: "Cutting-edge technology in renewable energy solutions"
  }, {
    icon: Award,
    title: "Recognition",
    description: "Your contributions to a sustainable future are valued"
  }];
  return <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="heading-lg text-royal-blue">Grow with Moltech</h2>
              <p className="body-lg text-muted-foreground">
                Join our team and discover opportunities to grow your talent in a healthy, innovative workspace. 
                We're building the future of sustainable energy together.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => <div key={index} className="glass-card p-6 group hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-royal-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-royal-blue">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>)}
            </div>

            {/* CTA */}
            
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="glass-card p-8 rounded-3xl overflow-hidden">
              <img src={teamTrust} alt="Diverse professional team working together in modern office environment" className="w-full h-80 object-cover rounded-2xl" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-8 -left-8 glass-card p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-royal-blue">15+</div>
                <div className="text-xs text-muted-foreground">Years</div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 glass-card p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-sustainability-green">200+</div>
                <div className="text-xs text-muted-foreground">Team</div>
              </div>
            </div>
            
            <div className="absolute top-1/2 -right-8 glass-card p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-electric-blue">4</div>
                <div className="text-xs text-muted-foreground">Regions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 glass-card p-12 text-center">
          <h3 className="heading-sm text-royal-blue mb-6">Why Choose Moltech?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-sustainability-gradient rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Innovation First</h4>
              <p className="text-sm text-muted-foreground">
                Work on cutting-edge sustainable technology solutions
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-royal-gradient rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Global Impact</h4>
              <p className="text-sm text-muted-foreground">
                Your work contributes to a sustainable future worldwide
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">People Focused</h4>
              <p className="text-sm text-muted-foreground">
                Family-friendly culture that values work-life balance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Careers;