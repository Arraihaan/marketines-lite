import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg}
          alt="Digital agency background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Digital Solutions That
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Drive Results
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            We are Marketines - a leading software development company helping businesses 
            worldwide transform their digital presence since 2017.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="secondary" className="group text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-glow">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button size="lg" variant="ghost" className="text-lg px-8 py-6 text-white border-white/20 hover:bg-white/10 transition-all duration-300">
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">7+</div>
              <div className="text-white/80">Years of Excellence</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">100+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">99%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-40 left-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse" />
    </section>
  );
};

export default HeroSection;