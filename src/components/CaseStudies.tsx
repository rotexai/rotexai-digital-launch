import { TrendingUp, Clock, DollarSign } from "lucide-react";

const CaseStudies = () => {
  const studies = [
    {
      icon: TrendingUp,
      metric: "35%",
      title: "Increased Efficiency",
      description: "Manufacturing company optimized operations using our AI-powered process automation",
      client: "TechCorp Manufacturing"
    },
    {
      icon: DollarSign,
      metric: "$2.4M",
      title: "Cost Savings",
      description: "Financial services firm reduced operational costs through blockchain implementation",
      client: "SecureBank Solutions"
    },
    {
      icon: Clock,
      metric: "60%",
      title: "Faster Processing",
      description: "Healthcare provider accelerated patient data processing with custom AI solutions",
      client: "MediTech Health"
    },
  ];

  return (
    <section className="py-20 bg-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Proven Results for Our Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real businesses achieving extraordinary outcomes with RotexAI solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {studies.map((study, index) => (
            <div 
              key={study.title} 
              className="card-elevated scroll-animate"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-success-green to-primary-cyan rounded-lg flex items-center justify-center">
                  <study.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-success-green">{study.metric}</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {study.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {study.description}
              </p>
              <div className="text-sm text-primary-blue font-medium">
                {study.client}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;