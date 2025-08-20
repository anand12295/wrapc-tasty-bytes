import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import heroWrap from "@/assets/hero-wrap.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-warm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Side */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-primary">Delicious</span>{" "}
                <span className="text-secondary">Indian</span>{" "}
                <span className="text-accent">Wraps</span>
                <br />
                <span className="text-foreground text-4xl lg:text-5xl">
                  Anytime, Anywhere!
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-lg">
                Fresh, flavorful, and made with love. Experience authentic Indian street food 
                delivered straight to your doorstep.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Order on Swiggy
              </Button>
              <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                Order on Zomato
              </Button>
              <Button variant="delivery" size="lg" className="text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Button>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                <span>Open 11 AM - 11 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>30-min delivery</span>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-spice">
              <img 
                src={heroWrap} 
                alt="Delicious WrapC Indian wrap with fresh vegetables and spiced filling"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-spice-yellow text-foreground px-6 py-3 rounded-full font-bold text-lg shadow-warm animate-bounce-gentle">
              100% Fresh!
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold text-lg shadow-warm animate-bounce-gentle">
              ⭐ 4.8 Rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;