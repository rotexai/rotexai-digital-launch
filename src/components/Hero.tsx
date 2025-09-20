import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="bg-hero min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Transforming Business Operations with{" "}
              <span className="bg-gradient-to-r from-primary-blue to-primary-cyan bg-clip-text text-transparent">
                AI & Blockchain
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              RotexAI helps enterprises optimize efficiency, reduce costs, and enhance competitiveness through cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero">
                Get Started
              </Button>
              <Button variant="outline" className="btn-secondary">
                Learn More
              </Button>
            </div>
          </div>
          <div className="animate-scale-in">
            <img 
              src={heroImage} 
              alt="AI and Blockchain Technology Illustration" 
              className="w-full h-auto rounded-2xl shadow-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;