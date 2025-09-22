import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Design Something Great Together
          </h2>
          
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            You're running a successful business with great ideas. It's time to reflect 
            those ideas on the internet. That's where we can help with our expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="group text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Meeting
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="ghost"
              className="text-lg px-8 py-6 text-white border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              View Our Portfolio
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80 text-lg">
              Imagine clicking a single button and having <strong>EVERY</strong> aspect 
              of your web presence taken care of... That's where Marketines comes in.
            </p>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
};

export default CTASection;