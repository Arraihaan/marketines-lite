import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, TrendingUp, Search, MessageSquare, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies and best practices.",
  },
  {
    icon: Palette,
    title: "Custom Design",
    description: "Creative designs that you can't ignore, full of creativity and professional skills.",
  },
  {
    icon: TrendingUp,
    title: "Business Solutions",
    description: "We're in the business of helping yours. Accessible, approachable, and accountable.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your online visibility and drive organic traffic with expert SEO strategies.",
  },
  {
    icon: MessageSquare,
    title: "Social Media Marketing",
    description: "Engage your audience and build your brand across all social media platforms.",
  },
  {
    icon: BarChart3,
    title: "Business Consulting",
    description: "Expert advice that goes a long way on complex projects. Let our experts guide you.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            With our experts on board, we provide the best services possible across 
            all aspects of digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-gradient-card border-border/50"
              >
                <CardContent className="p-8">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;