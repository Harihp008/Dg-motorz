import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Navigation,
  Star,
  Shield
} from "lucide-react";
import Navbar from "@/components/Navbar";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 98765 43210",
      description: "Call us for immediate assistance",
      action: () => window.open("tel:+919876543210")
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      details: "+91 98765 43210",
      description: "Quick chat support available",
      action: () => window.open("https://wa.me/919876543210")
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "service@chennaiwheels.com",
      description: "Send us your queries anytime",
      action: () => window.open("mailto:service@chennaiwheels.com")
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "123 Anna Salai, T. Nagar",
      description: "Chennai, Tamil Nadu - 600017",
      action: () => window.open("https://maps.google.com/?q=Anna+Salai+T+Nagar+Chennai")
    }
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
    { day: "Emergency Service", hours: "24/7 Available" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="primary-gradient mb-4">
              <Star className="w-3 h-3 mr-1" />
              Contact Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Need assistance? Have questions? Our expert team is here to help you 
              with all your bike service needs. Reach out to us anytime!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-lg smooth-transition border-border/50 hover:border-primary/20 cursor-pointer" onClick={info.action}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 primary-gradient rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition">
                    <div className="text-primary-foreground">
                      {info.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary smooth-transition">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-lg font-semibold text-primary mb-2">
                    {info.details}
                  </div>
                  <div className="text-muted-foreground">
                    {info.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Section */}
            <Card className="elegant-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-bold text-foreground">
                  <Navigation className="w-6 h-6 mr-3 text-primary" />
                  Find Us on Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8663894789073!2d80.24439931482186!3d13.043075990813935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526650e0b6c595%3A0x4f74ddbff946af6b!2sAnna%20Salai%2C%20T.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1647875432123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Chennai Wheels Location"
                  ></iframe>
                </div>
                <Button 
                  className="w-full primary-gradient" 
                  onClick={() => window.open("https://maps.google.com/?q=Anna+Salai+T+Nagar+Chennai")}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Working Hours & Info */}
            <div className="space-y-8">
              {/* Working Hours */}
              <Card className="elegant-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold text-foreground">
                    <Clock className="w-6 h-6 mr-3 text-primary" />
                    Working Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {workingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                        <span className="font-medium text-foreground">{schedule.day}</span>
                        <span className="text-primary font-semibold">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="elegant-shadow primary-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold text-primary-foreground">
                    <Shield className="w-6 h-6 mr-3" />
                    Emergency Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/90 mb-6">
                    Need immediate assistance? Our 24/7 emergency service is always ready to help you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="outline" 
                      className="flex-1 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      onClick={() => window.open("tel:+919876543210")}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Emergency Call
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 bg-green-600 text-white border-green-600 hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/919876543210")}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Service <span className="text-primary">Areas</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide pickup and drop services across these Chennai areas:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "T. Nagar", "Anna Nagar", "Adyar", "Velachery", "Porur", "Mylapore",
              "Nungambakkam", "Guindy", "Chromepet", "Tambaram", "Sholinganallur", "OMR"
            ].map((area, index) => (
              <div key={index} className="text-center p-4 bg-card rounded-lg border border-border hover:border-primary/20 smooth-transition">
                <div className="text-foreground font-medium">{area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;