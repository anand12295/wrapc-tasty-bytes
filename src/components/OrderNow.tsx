import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Smartphone, Clock, MapPin } from "lucide-react";

const OrderNow = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-6xl font-bold text-primary-foreground">
              Ready to Order?
            </h2>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
              Get your favorite wraps delivered in just 30 minutes!
            </p>
          </div>

          {/* Order Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Swiggy */}
            <Card className="bg-background/95 backdrop-blur-sm border-border hover:shadow-spice transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-curry-orange rounded-full flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Order on Swiggy</h3>
                <p className="text-muted-foreground text-sm">
                  Quick delivery with exclusive Swiggy offers
                </p>
                <Button variant="hero" className="w-full">
                  Open Swiggy
                </Button>
              </CardContent>
            </Card>

            {/* Zomato */}
            <Card className="bg-background/95 backdrop-blur-sm border-border hover:shadow-spice transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Order on Zomato</h3>
                <p className="text-muted-foreground text-sm">
                  Fast delivery with Zomato Gold benefits
                </p>
                <Button variant="cta" className="w-full">
                  Open Zomato
                </Button>
              </CardContent>
            </Card>

            {/* Direct Call */}
            <Card className="bg-background/95 backdrop-blur-sm border-border hover:shadow-spice transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center">
                  <Phone className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Call Directly</h3>
                <p className="text-muted-foreground text-sm">
                  Speak to us directly for custom orders
                </p>
                <Button variant="delivery" className="w-full">
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto text-primary-foreground/90">
            <div className="flex items-center justify-center gap-3">
              <Clock className="h-6 w-6 text-spice-yellow" />
              <div className="text-left">
                <div className="font-semibold">30-Minute Delivery</div>
                <div className="text-sm opacity-80">Hot & fresh guaranteed</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="h-6 w-6 text-spice-yellow" />
              <div className="text-left">
                <div className="font-semibold">Wide Coverage</div>
                <div className="text-sm opacity-80">Delivering across the city</div>
              </div>
            </div>
          </div>

          {/* Contact Number */}
          <div className="bg-background/20 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-primary-foreground/80 text-sm mb-1">Call us directly</div>
              <div className="text-2xl font-bold text-primary-foreground">+91 9876543210</div>
              <div className="text-primary-foreground/80 text-sm mt-1">Open 11 AM - 11 PM</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-spice-yellow/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default OrderNow;