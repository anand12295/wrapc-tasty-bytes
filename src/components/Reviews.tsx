import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      comment: "Best paneer wrap in the city! The flavors are absolutely amazing and the portion size is perfect. Will definitely order again!",
      location: "Bangalore",
      platform: "Swiggy"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      rating: 5,
      comment: "Ordered the spicy chicken roll and it was incredible! Fresh ingredients, perfect spice level, and delivered hot. Highly recommended!",
      location: "Delhi",
      platform: "Zomato"
    },
    {
      id: 3,
      name: "Anita Gupta",
      rating: 5,
      comment: "The veggie combo is my go-to healthy meal. Love the variety and the taste is always consistent. Great value for money!",
      location: "Mumbai",
      platform: "Swiggy"
    },
    {
      id: 4,
      name: "Vikram Singh",
      rating: 4,
      comment: "Fantastic food quality and quick delivery. The wraps are fresh and flavorful. WrapC has become our family favorite!",
      location: "Pune",
      platform: "Zomato"
    },
    {
      id: 5,
      name: "Sneha Patel",
      rating: 5,
      comment: "Amazing taste and presentation! The mint chutney is to die for. Best Indian fast food I've had in a long time.",
      location: "Hyderabad",
      platform: "Swiggy"
    },
    {
      id: 6,
      name: "Arjun Mehta",
      rating: 5,
      comment: "Love the authentic flavors and quality ingredients. Every bite is a burst of flavor. Keep up the great work!",
      location: "Chennai",
      platform: "Zomato"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-spice-yellow' : 'text-muted'}`}
        fill={i < rating ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers across India
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card 
              key={review.id} 
              className="group border-border hover:shadow-warm transition-all duration-300 hover:scale-105 bg-card relative overflow-hidden"
            >
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-12 w-12 text-primary" />
                </div>

                {/* Platform Badge */}
                <div className="flex justify-between items-start">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    review.platform === 'Swiggy' 
                      ? 'bg-curry-orange/20 text-curry-orange' 
                      : 'bg-primary/20 text-primary'
                  }`}>
                    {review.platform}
                  </div>
                  <div className="flex gap-1">
                    {renderStars(review.rating)}
                  </div>
                </div>

                {/* Review Text */}
                <blockquote className="text-muted-foreground leading-relaxed relative z-10">
                  "{review.comment}"
                </blockquote>

                {/* Customer Info */}
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl">⭐</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-primary">4.8</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-secondary">10K+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-accent">50K+</div>
            <div className="text-sm text-muted-foreground">Orders Delivered</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-spice-yellow">30min</div>
            <div className="text-sm text-muted-foreground">Average Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;