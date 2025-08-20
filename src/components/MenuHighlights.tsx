import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Flame, Leaf } from "lucide-react";
import paneerWrap from "@/assets/paneer-wrap.jpg";
import chickenRoll from "@/assets/chicken-roll.jpg";
import veggieCombo from "@/assets/veggie-combo.jpg";

const MenuHighlights = () => {
  const menuItems = [
    {
      id: 1,
      name: "Paneer Tikka Wrap",
      description: "Grilled paneer with fresh vegetables, mint chutney, and aromatic spices wrapped in soft tortilla",
      price: "₹149",
      image: paneerWrap,
      rating: 4.8,
      tags: ["Vegetarian", "Popular"],
      icon: Leaf,
      spiceLevel: 2
    },
    {
      id: 2,
      name: "Spicy Chicken Roll",
      description: "Tender chicken pieces with spicy marinade, onions, and signature sauces in a golden wrap",
      price: "₹169",
      image: chickenRoll,
      rating: 4.9,
      tags: ["Bestseller", "Spicy"],
      icon: Flame,
      spiceLevel: 4
    },
    {
      id: 3,
      name: "Veggie Wrap Combo",
      description: "Fresh mixed vegetables with hummus, served with crispy fries and refreshing drink",
      price: "₹199",
      image: veggieCombo,
      rating: 4.7,
      tags: ["Combo", "Healthy"],
      icon: Leaf,
      spiceLevel: 1
    }
  ];

  const renderSpiceLevel = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Flame 
        key={i} 
        className={`h-3 w-3 ${i < level ? 'text-primary' : 'text-muted'}`}
        fill={i < level ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Our <span className="text-primary">Bestselling</span> Wraps
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved items that keep customers coming back for more
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card 
                key={item.id} 
                className="group overflow-hidden border-border hover:shadow-spice transition-all duration-500 hover:scale-105 bg-card"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="h-4 w-4 text-spice-yellow fill-current" />
                    <span className="font-semibold text-sm">{item.rating}</span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold">
                    {item.price}
                  </div>

                  {/* Tags */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {item.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="bg-background/90 text-foreground backdrop-blur-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Spice Level */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">Spice Level:</span>
                    <div className="flex gap-1">
                      {renderSpiceLevel(item.spiceLevel)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Want to see our complete menu?
          </p>
          <div className="text-accent font-semibold text-lg">
            📞 Call us or check our profiles on Swiggy & Zomato!
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;