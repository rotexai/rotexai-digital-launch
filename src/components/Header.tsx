import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-blue to-primary-cyan rounded-lg flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">RotexAI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary-blue transition-colors">About</a>
            <a href="#solutions" className="text-foreground hover:text-primary-blue transition-colors">Solutions</a>
            <a href="#case-studies" className="text-foreground hover:text-primary-blue transition-colors">Case Studies</a>
            <a href="#contact" className="text-foreground hover:text-primary-blue transition-colors">Contact</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-foreground hover:text-primary-blue">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-primary-blue to-primary-cyan text-white hover:shadow-card">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary-blue"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <a href="#about" className="text-foreground hover:text-primary-blue transition-colors">About</a>
              <a href="#solutions" className="text-foreground hover:text-primary-blue transition-colors">Solutions</a>
              <a href="#case-studies" className="text-foreground hover:text-primary-blue transition-colors">Case Studies</a>
              <a href="#contact" className="text-foreground hover:text-primary-blue transition-colors">Contact</a>
              <div className="flex flex-col gap-3 mt-4">
                <Button variant="ghost" className="text-foreground hover:text-primary-blue justify-start">
                  Sign In
                </Button>
                <Button className="bg-gradient-to-r from-primary-blue to-primary-cyan text-white">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;