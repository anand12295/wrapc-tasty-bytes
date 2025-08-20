import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Visit <span className="text-primary">WrapC</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Come experience our delicious wraps in person or get in touch with us
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <Card className="border-border hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-accent p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg text-foreground">Location</h3>
                      <p className="text-muted-foreground">
                        123, Food Street, MG Road<br />
                        Bangalore, Karnataka 560001<br />
                        India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="border-border hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-accent p-3 rounded-full">
                      <Phone className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg text-foreground">Phone</h3>
                      <p className="text-muted-foreground">
                        +91 9876543210<br />
                        +91 9876543211 (WhatsApp)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card className="border-border hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-accent p-3 rounded-full">
                      <Clock className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg text-foreground">Operating Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Sunday: 11:00 AM - 11:00 PM</p>
                        <p className="text-sm text-accent">Open all days of the week!</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-foreground">Follow Us</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="hover:bg-gradient-accent hover:text-accent-foreground">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-gradient-accent hover:text-accent-foreground">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-gradient-accent hover:text-accent-foreground">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                @wrapc_india • Follow for daily updates and special offers!
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-6">
            <Card className="border-border overflow-hidden">
              <div className="relative">
                <div className="h-96 bg-gradient-warm flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="h-16 w-16 text-primary mx-auto" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground">Find Us Here</h3>
                      <p className="text-muted-foreground">
                        Located in the heart of MG Road, Bangalore
                      </p>
                      <Button variant="hero" size="sm">
                        Open in Google Maps
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Contact */}
            <Card className="border-border bg-gradient-accent text-accent-foreground">
              <CardContent className="p-8 text-center space-y-4">
                <h3 className="text-xl font-bold">Quick Order</h3>
                <p className="opacity-90">
                  Need to place an urgent order? Call us directly!
                </p>
                <Button variant="secondary" size="lg" className="w-full">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +91 9876543210
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;