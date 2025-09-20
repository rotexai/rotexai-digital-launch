import { Lightbulb, Shield, Zap } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push boundaries, exploring new technologies and methodologies to deliver cutting-edge solutions.",
    },
    {
      icon: Shield,
      title: "Trust",
      description: "We build secure, reliable systems and maintain transparent relationships with our clients through every project.",
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "We optimize every process, reducing costs and improving performance to maximize your business potential.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do and drive our commitment to excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title} 
              className="card-value scroll-animate"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-primary-blue to-primary-cyan rounded-full flex items-center justify-center mb-6 mx-auto">
                <value.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;