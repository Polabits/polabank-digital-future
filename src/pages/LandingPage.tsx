import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Shield, Smartphone, CreditCard, TrendingUp, Globe, Zap, Eye, EyeOff } from 'lucide-react';

const LandingPage = () => {
  const [showDemo, setShowDemo] = useState(false);

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Bank-Grade Security",
      description: "Multi-layer encryption, biometric authentication, and real-time fraud monitoring"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Design",
      description: "Seamless experience across all devices with instant notifications"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Virtual & Physical Cards",
      description: "Instant virtual cards with full control and physical card delivery"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Smart Analytics",
      description: "AI-powered insights for better financial decisions and budgeting"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Transfers",
      description: "Send money worldwide with competitive rates and instant processing"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Real-time transactions and instant account setup in minutes"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/90 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <span className="text-2xl font-bold text-primary">NovaBank</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#security" className="text-muted-foreground hover:text-primary transition-colors">Security</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#support" className="text-muted-foreground hover:text-primary transition-colors">Support</a>
          </nav>

          <div className="flex space-x-3">
            <Link to="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button className="bank-button-primary">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Banking for the
              <br />Digital Future
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Experience next-generation banking with instant account setup, global transfers, 
              and AI-powered financial insights. All secured with military-grade encryption.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <Link to="/signup">
              <Button size="lg" className="bank-button-primary text-lg px-8 py-4">
                Open Account Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4"
              onClick={() => setShowDemo(!showDemo)}
            >
              {showDemo ? <EyeOff className="mr-2 h-5 w-5" /> : <Eye className="mr-2 h-5 w-5" />}
              {showDemo ? 'Hide Demo' : 'View Demo'}
            </Button>
          </div>

          {/* Demo Dashboard Preview */}
          {showDemo && (
            <div className="bank-card p-8 max-w-4xl mx-auto animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6">Dashboard Preview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="balance-card p-6">
                  <CardContent className="p-0">
                    <p className="text-primary-foreground/80 text-sm">Total Balance</p>
                    <p className="text-3xl font-bold text-primary-foreground">$12,458.90</p>
                    <p className="text-primary-foreground/80 text-sm mt-2">+2.5% this month</p>
                  </CardContent>
                </Card>
                
                <Card className="bank-card p-6">
                  <CardContent className="p-0">
                    <p className="text-muted-foreground text-sm">Active Cards</p>
                    <p className="text-2xl font-bold">3</p>
                    <p className="text-accent text-sm mt-2">2 Virtual, 1 Physical</p>
                  </CardContent>
                </Card>
                
                <Card className="bank-card p-6">
                  <CardContent className="p-0">
                    <p className="text-muted-foreground text-sm">This Month</p>
                    <p className="text-2xl font-bold">47 Transactions</p>
                    <p className="text-success text-sm mt-2">$3,240 spent</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose NovaBank?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built from the ground up for the modern digital economy with cutting-edge technology and user-centric design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bank-card p-6 hover:shadow-glow transition-all duration-300 animate-fade-in">
                <CardContent className="p-0">
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Banking?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join thousands of users who've already made the switch to smarter, faster, more secure banking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bank-button-primary text-lg px-10 py-4">
                  Open Account in 5 Minutes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-10 py-4">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">N</span>
                </div>
                <span className="text-2xl font-bold text-primary">NovaBank</span>
              </div>
              <p className="text-muted-foreground">
                The future of banking, available today.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Personal Banking</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Business Banking</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Crypto Wallet</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Investment Tools</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API Docs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 NovaBank. All rights reserved. | FDIC Insured | Member FDIC</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;