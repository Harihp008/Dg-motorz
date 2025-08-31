import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Basic Service",
      price: "₹599",
      period: "Per Service",
      description: "Essential maintenance for your daily rides",
      features: [
        "Engine Oil Change",
        "Chain Cleaning & Lubrication", 
        "Brake Adjustment",
        "Tire Pressure Check",
        "Basic Inspection",
        "Free Pickup (within 5km)"
      ],
      popular: false,
      cta: "Book Basic Service"
    },
    {
      name: "Premium Service",
      price: "₹1,299",
      period: "Per Service",
      description: "Comprehensive care for optimal performance",
      features: [
        "Everything in Basic Service",
        "Engine Diagnostics",
        "Carburetor Cleaning",
        "Spark Plug Replacement",
        "Battery Check",
        "Headlight Alignment",
        "Free Pickup (within 10km)",
        "3-Month Service Warranty"
      ],
      popular: true,
      cta: "Book Premium Service"
    },
    {
      name: "Annual Package",
      price: "₹4,999",
      period: "Per Year",
      description: "Complete yearly maintenance package",
      features: [
        "4 Premium Services",
        "Emergency Roadside Support",
        "Priority Booking",
        "Free Pickup & Drop",
        "Genuine Parts Guarantee",
        "Insurance Claim Assistance",
        "24/7 Customer Support",
        "1-Year Service Warranty"
      ],
      popular: false,
      cta: "Get Annual Package"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect service package for your bike. No hidden charges, 
            all prices include taxes. Get the best value for professional service.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative ${pkg.popular ? 'border-primary elegant-shadow scale-105' : 'border-border'} hover:shadow-lg smooth-transition`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="primary-gradient px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {pkg.description}
                </CardDescription>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground">/ {pkg.period}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-6 text-lg ${pkg.popular ? 'primary-gradient elegant-shadow' : ''}`}
                  variant={pkg.popular ? "default" : "outline"}
                >
                  {pkg.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-muted rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need Custom Service?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have specific requirements or multiple bikes? Contact us for custom packages 
            and enterprise solutions with additional discounts.
          </p>
          <Button variant="outline" size="lg">
            Contact for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;