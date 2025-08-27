import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="heading-lg text-royal-blue">Contact Us</h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
            Let's build a sustainable future together. Get in touch with our team of experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-card p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-royal-gradient rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-sm text-muted-foreground">info@moltech.com</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Send us an email and we'll respond within 24 hours
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-sustainability-gradient rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-sm text-muted-foreground">+65 6123 4567</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Speak directly with our sustainability experts
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Visit Us</h3>
                  <p className="text-sm text-muted-foreground">Singapore HQ</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Meet us at our global headquarters in Singapore
              </p>
            </div>

            {/* Quick Stats */}
            <div className="glass-card p-6">
              <h3 className="font-semibold text-lg mb-4 text-royal-blue">Response Time</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sustainability-green">&lt; 1h</div>
                  <div className="text-xs text-muted-foreground">Phone</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-royal-blue">&lt; 24h</div>
                  <div className="text-xs text-muted-foreground">Email</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-none">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-royal-blue flex items-center">
                  <MessageCircle className="w-8 h-8 mr-3" />
                  Let's Start a Conversation
                </CardTitle>
                <CardDescription className="text-base">
                  Tell us about your sustainability goals and how we can help achieve them
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name *
                    </label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="bg-white/50 backdrop-blur-sm border-white/30 focus:border-royal-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name *
                    </label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="bg-white/50 backdrop-blur-sm border-white/30 focus:border-royal-blue"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@company.com" 
                      className="bg-white/50 backdrop-blur-sm border-white/30 focus:border-royal-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company
                    </label>
                    <Input 
                      id="company" 
                      placeholder="Your Company" 
                      className="bg-white/50 backdrop-blur-sm border-white/30 focus:border-royal-blue"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Partnership Inquiry" 
                    className="bg-white/50 backdrop-blur-sm border-white/30 focus:border-royal-blue"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your sustainability goals and how we can collaborate..."
                    rows={6}
                    className="bg-white/50 backdrop-blur-sm border-white/30 focus:border-royal-blue resize-none"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="newsletter" 
                    className="rounded border-white/30 text-royal-blue focus:ring-royal-blue"
                  />
                  <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                    Subscribe to our newsletter for sustainability insights
                  </label>
                </div>

                <Button className="btn-hero w-full group">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Contact Moltech
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 glass-card p-12 text-center bg-royal-gradient text-white">
          <h3 className="heading-sm mb-4">Ready to Drive Sustainability?</h3>
          <p className="body-md mb-8 max-w-2xl mx-auto opacity-90">
            Partner with Moltech to accelerate your journey towards a circular economy and sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="btn-ghost">
              Download Brochure
            </Button>
            <Button className="bg-white text-royal-blue hover:bg-white/90 px-8 py-4 rounded-full font-semibold">
              Schedule Meeting
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;