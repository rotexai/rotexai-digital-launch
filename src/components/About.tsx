import { Bot, Blocks, Code } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Bot,
      title: "Artificial Intelligence",
      description: "Advanced AI solutions that automate processes, analyze data, and drive intelligent decision-making for your business.",
    },
    {
      icon: Blocks,
      title: "Blockchain Technology",
      description: "Secure, transparent, and decentralized solutions that revolutionize how businesses handle transactions and data.",
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies to meet your specific business requirements.",
    },
  ];

  return (
    <section className="py-20 bg-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Pioneering the Future of Business Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At RotexAI, we combine artificial intelligence, blockchain technology, and expert software development 
            to create transformative solutions that drive real business results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="card-elevated scroll-animate" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-cyan rounded-xl flex items-center justify-center mb-6 mx-auto">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;