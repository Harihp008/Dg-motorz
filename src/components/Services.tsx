import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Zap, 
  Sparkles, 
  Truck, 
  Settings, 
  Shield,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "General Maintenance",
      description: "Complete bike servicing including oil change, chain lubrication, brake adjustment, and routine inspections.",
      features: ["Oil & Filter Change", "Chain Cleaning & Lubrication", "Brake Inspection", "Tire Pressure Check"],
      price: "₹599"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Engine Repair",
      description: "Expert engine diagnostics and repair services for all bike models with genuine spare parts.",
      features: ["Engine Diagnostics", "Carburetor Cleaning", "Spark Plug Replacement", "Valve Adjustment"],
      price: "₹1,299"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Bike Detailing",
      description: "Professional cleaning and detailing to make your bike look brand new with protective coatings.",
      features: ["Deep Cleaning", "Paint Protection", "Chrome Polishing", "Interior Detailing"],
      price: "₹899"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Pickup & Drop",
      description: "Convenient pickup and delivery service across Chennai. We come to you and deliver back.",
      features: ["Free Pickup", "Same Day Service", "GPS Tracking", "Doorstep Delivery"],
      price: "Free"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Emergency Repair",
      description: "24/7 emergency roadside assistance and quick fixes to get you back on the road.",
      features: ["24/7 Availability", "On-Spot Repairs", "Towing Service", "Emergency Contact"],
      price: "₹399"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Insurance Claims",
      description: "Complete assistance with insurance claim processing and cashless repair services.",
      features: ["Claim Processing", "Cashless Repairs", "Documentation", "Direct Billing"],
      price: "No Extra Cost"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive bike maintenance and repair services with expert technicians 
            and genuine parts. Your bike deserves the best care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg smooth-transition border-border/50 hover:border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 primary-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition">
                  <div className="text-primary-foreground">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary smooth-transition">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="primary-gradient px-8 py-6 text-lg elegant-shadow">
            Get Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;