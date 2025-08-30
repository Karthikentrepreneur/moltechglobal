import { Users, Target, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b6b6e2f7?auto=format&fit=crop&w=400&h=400',
      bio: 'Visionary leader with 10+ years in digital strategy'
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400',
      bio: 'Full-stack expert specializing in modern web technologies'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400',
      bio: 'Data-driven marketer with expertise in growth strategies'
    },
    {
      name: 'David Park',
      role: 'Design Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400',
      bio: 'Creative designer focused on user experience and branding'
    }
  ];

  const milestones = [
    { year: '2019', event: 'Company Founded', description: 'Started with a vision to transform digital marketing' },
    { year: '2020', event: 'First 50 Clients', description: 'Reached our first major milestone during challenging times' },
    { year: '2021', event: 'Team Expansion', description: 'Grew our team to 15+ talented professionals' },
    { year: '2022', event: 'Award Recognition', description: 'Won "Best Digital Agency" award from TechCrunch' },
    { year: '2023', event: '100+ Projects', description: 'Successfully completed over 100 client projects' },
    { year: '2024', event: 'Global Reach', description: 'Expanded operations to serve clients worldwide' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            We're a passionate team of digital innovators, strategists, and creators 
            dedicated to building exceptional digital experiences that drive real results.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To empower businesses with innovative digital strategies and cutting-edge web solutions 
                that drive growth, enhance user experiences, and create lasting impact in the digital landscape.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent" />
                  <span>Strategic digital transformation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent" />
                  <span>Data-driven marketing solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent" />
                  <span>Custom web development</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600" 
                alt="Team collaboration"
                className="rounded-2xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The creative minds and strategic thinkers behind our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-accent rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones that shaped our growth and success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-accent"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-md z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? '' : 'md:text-right'
                  }`}>
                    <div className="glass-card p-6">
                      <div className="text-2xl font-bold text-accent mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-primary mb-2">{milestone.event}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-16 w-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Collaboration</h3>
              <p className="text-white/80">
                We believe in the power of teamwork and partnership with our clients to achieve extraordinary results.
              </p>
            </div>
            <div className="text-center">
              <Target className="h-16 w-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-white/80">
                We stay ahead of trends and technologies to deliver cutting-edge solutions that drive success.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-16 w-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-white/80">
                We maintain the highest standards in everything we do, from strategy to execution and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your digital presence and drive your business forward.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
