import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Wrench, Zap, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Bike Maintenance Tips for Chennai Weather",
      excerpt: "Learn how to protect your bike from Tiruppur's weather conditions with these expert maintenance tips for textile city environments.",
      author: "Rajesh Kumar",
      date: "March 15, 2024",
      category: "Maintenance",
      icon: <Wrench className="w-4 h-4" />,
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Signs Your Bike Engine Needs Immediate Attention",
      excerpt: "Don't ignore these warning signs! Early detection can save you from expensive engine repairs.",
      author: "Priya Menon",
      date: "March 12, 2024", 
      category: "Engine Care",
      icon: <Zap className="w-4 h-4" />,
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "How to Prepare Your Bike for Long Distance Travel",
      excerpt: "Essential checklist and preparations for safe long-distance rides across Tamil Nadu from Tiruppur base.",
      author: "Mohammed Ali",
      date: "March 10, 2024",
      category: "Travel Tips",
      icon: <Shield className="w-4 h-4" />,
      readTime: "6 min read", 
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Understanding Your Bike's Warning Lights",
      excerpt: "Complete guide to dashboard warning lights and what they mean for your bike's health.",
      author: "Kavitha Srinivasan",
      date: "March 8, 2024",
      category: "Safety",
      icon: <Zap className="w-4 h-4" />,
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Chain Maintenance: Keep Your Bike Running Smooth",
      excerpt: "Step-by-step guide to proper chain cleaning, lubrication, and adjustment for optimal performance.",
      author: "Arjun Reddy", 
      date: "March 5, 2024",
      category: "Maintenance",
      icon: <Wrench className="w-4 h-4" />,
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Monsoon Bike Care: Protect Your Ride from Rain",
      excerpt: "Essential tips to protect your bike during monsoon season and prevent water damage in Tiruppur climate.",
      author: "Lakshmi Narayanan",
      date: "March 3, 2024",
      category: "Weather Care",
      icon: <Shield className="w-4 h-4" />,
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = ["All", "Maintenance", "Engine Care", "Safety", "Travel Tips", "Weather Care"];
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="primary-gradient mb-4">
              <Wrench className="w-3 h-3 mr-1" />
              Blog & Tips
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Bike Care <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert tips, maintenance guides, and insights to keep your bike running smoothly. 
              Learn from our experienced technicians and stay updated with the latest in bike care.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Featured Article</h2>
          
          <Card className="elegant-shadow hover:shadow-xl smooth-transition overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge variant="secondary" className="flex items-center">
                    {featuredPost.icon}
                    <span className="ml-2">{featuredPost.category}</span>
                  </Badge>
                  <span className="text-muted-foreground text-sm">{featuredPost.readTime}</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </div>
                  </div>
                </div>
                
                <Button className="primary-gradient">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "primary-gradient" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Recent Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg smooth-transition overflow-hidden border-border/50 hover:border-primary/20">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="flex items-center">
                      {post.icon}
                      <span className="ml-2">{post.category}</span>
                    </Badge>
                    <span className="text-muted-foreground text-xs">{post.readTime}</span>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary smooth-transition line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full text-primary hover:text-primary-foreground hover:bg-primary">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="elegant-shadow">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Stay Updated with <span className="text-primary">Expert Tips</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                Get the latest bike maintenance tips, service updates, and exclusive offers 
                delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button className="primary-gradient px-8">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;