import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">WrapC</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Delicious Indian wraps and fast food delivered fresh to your doorstep. 
              Made with love, served with passion.
            </p>
            <div className="flex items-center gap-2 text-spice-yellow">
              <Heart className="h-4 w-4 fill-current" />
              <span className="text-sm">Made with Love in India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Order</h4>
            <div className="space-y-2">
              <Button variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground justify-start p-0 h-auto">
                Order on Swiggy
              </Button>
              <Button variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground justify-start p-0 h-auto">
                Order on Zomato
              </Button>
              <Button variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground justify-start p-0 h-auto">
                Call for Takeaway
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-spice-yellow" />
                <span className="text-primary-foreground/80">
                  123, Food Street, MG Road<br />Bangalore, Karnataka 560001
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-spice-yellow" />
                <span className="text-primary-foreground/80">+91 9876543210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-spice-yellow" />
                <span className="text-primary-foreground/80">hello@wrapc.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Operating Hours</h4>
            <div className="text-sm text-primary-foreground/80 space-y-1">
              <p>Monday - Sunday</p>
              <p className="font-semibold text-spice-yellow">11:00 AM - 11:00 PM</p>
              <p className="text-xs">We're open all week!</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Follow Us</p>
              <p className="text-xs text-primary-foreground/70">
                @wrapc_india on Instagram, Facebook & Twitter
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
          <p>© 2024 WrapC. All rights reserved.</p>
          <div className="flex gap-6">
            <Button variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto text-sm">
              Privacy Policy
            </Button>
            <Button variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto text-sm">
              Terms of Service
            </Button>
            <Button variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto text-sm">
              Refund Policy
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;