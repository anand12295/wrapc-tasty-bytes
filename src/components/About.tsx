import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users } from "lucide-react";
import foodSpread from "@/assets/food-spread.jpg";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every wrap is crafted with passion using authentic Indian spices and fresh ingredients."
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized as the best Indian fast food outlet in the city with 5-star ratings."
    },
    {
      icon: Users,
      title: "Community Favorite",
      description: "Trusted by thousands of customers who keep coming back for our delicious food."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                About <span className="text-primary">WrapC</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Born from a passion for authentic Indian street food, WrapC brings you the most 
                delicious wraps, rolls, and chaats in the city. Our secret? Fresh ingredients, 
                traditional recipes, and a whole lot of love in every bite.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From our signature Paneer Wraps to spicy Chicken Rolls, every item on our menu 
                is designed to give you that perfect blend of flavor, nutrition, and satisfaction.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-border hover:shadow-warm transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-accent p-3 rounded-full">
                          <Icon className="h-6 w-6 text-accent-foreground" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg text-foreground">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-spice">
              <img 
                src={foodSpread} 
                alt="Variety of WrapC's Indian fast food items including wraps, samosas, and chaats"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-8 left-8 w-72 h-72 bg-spice-yellow/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-8 right-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;