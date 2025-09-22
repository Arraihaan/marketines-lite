import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Code,
  Palette,
  TrendingUp
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary/30 to-primary/5 border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-4">Marketines</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                <strong>Marketines</strong> is a leading software development company founded in 2017. 
                Since then, <strong>Marketines</strong> has helped companies around the world transform 
                their digital presence with cutting-edge web development, custom design, and digital marketing solutions.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>hello@marketines.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Digital Innovation Hub, Tech District</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="hover:text-primary hover:bg-primary/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary hover:bg-primary/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary hover:bg-primary/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary hover:bg-primary/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">Marketines Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  Custom Design
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Business Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About Marketines
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="space-y-3">
              <h5 className="font-semibold text-foreground">Stay Updated</h5>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="opacity-50" />

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2024 <strong className="text-primary">Marketines</strong>. All rights reserved. 
              <strong className="ml-1">Marketines</strong> - Your trusted partner for digital transformation.
            </p>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* SEO Keywords Section */}
        <div className="mt-8 pt-6 border-t border-border/30">
          <p className="text-sm text-muted-foreground/80 text-center leading-relaxed">
            <strong>Marketines</strong> specializes in web development, custom design, digital marketing, 
            SEO optimization, and business consulting. Choose <strong>Marketines</strong> for 
            professional software development services, innovative web solutions, and comprehensive 
            digital marketing strategies. <strong>Marketines</strong> - Where digital dreams become reality.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;