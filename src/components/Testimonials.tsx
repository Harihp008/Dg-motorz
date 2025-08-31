import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "T. Nagar, Chennai",
      rating: 5,
      text: "Excellent service! They picked up my Royal Enfield and delivered it back in perfect condition. The engine runs smoother than ever before. Highly recommended!",
      bike: "Royal Enfield Classic 350"
    },
    {
      name: "Priya Menon", 
      location: "Anna Nagar, Chennai",
      rating: 5,
      text: "Professional and reliable service. The team is very knowledgeable and explained everything clearly. Fair pricing with no hidden charges. Will definitely return!",
      bike: "Honda Activa 6G"
    },
    {
      name: "Mohammed Ali",
      location: "Velachery, Chennai", 
      rating: 5,
      text: "Quick turnaround and excellent work quality. My Pulsar was making strange noises, but they diagnosed and fixed it perfectly. Great customer service too!",
      bike: "Bajaj Pulsar NS200"
    },
    {
      name: "Kavitha Srinivasan",
      location: "Adyar, Chennai",
      rating: 5,
      text: "The pickup and drop service is very convenient. They keep you updated throughout the process. My bike looks and runs like new after their premium service!",
      bike: "TVS Jupiter"
    },
    {
      name: "Arjun Reddy",
      location: "Porur, Chennai",
      rating: 5,
      text: "Best bike service center in Chennai! They use genuine parts and their technicians are highly skilled. The annual package is great value for money.",
      bike: "KTM Duke 390"
    },
    {
      name: "Lakshmi Narayanan",
      location: "Mylapore, Chennai",
      rating: 5,
      text: "Trustworthy and honest service. They only recommend necessary repairs and don't oversell. The online booking system is also very user-friendly.",
      bike: "Yamaha FZ-S"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our bike service experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg smooth-transition border-border/50 hover:border-primary/20">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-xs text-primary font-medium mt-1">{testimonial.bike}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-4 gap-8 bg-card rounded-2xl p-8 elegant-shadow">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-muted-foreground">Services Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;