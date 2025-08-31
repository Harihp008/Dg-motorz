import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Testimonials />
      <BookingForm />
      
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 primary-gradient rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">CW</span>
                </div>
                <div>
                  <div className="text-xl font-bold">Chennai Wheels</div>
                  <div className="text-sm text-secondary-foreground/80">Professional Bike Service</div>
                </div>
              </div>
              <p className="text-secondary-foreground/80 max-w-md">
                Chennai's trusted bike service center with expert technicians, 
                genuine parts, and convenient pickup & drop services.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="#services" className="hover:text-primary smooth-transition">Services</a></li>
                <li><a href="#pricing" className="hover:text-primary smooth-transition">Pricing</a></li>
                <li><a href="/contact" className="hover:text-primary smooth-transition">Contact</a></li>
                <li><a href="/blog" className="hover:text-primary smooth-transition">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>Phone: +91 98765 43210</li>
                <li>Email: service@chennaiwheels.com</li>
                <li>Address: 123 Anna Salai, T. Nagar</li>
                <li>Chennai, Tamil Nadu - 600017</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/60">
            <p>&copy; 2024 Chennai Wheels. All rights reserved. | Professional bike service in Chennai</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
