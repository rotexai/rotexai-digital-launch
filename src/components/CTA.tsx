import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-cta">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8 scroll-animate">
          <h2 className="text-5xl font-bold text-white leading-tight">
            Ready to optimize your business with AI?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join hundreds of forward-thinking companies that have transformed their operations with RotexAI. 
            Let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-outline group">
              <Calendar className="w-5 h-5 mr-2" />
              Book a Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;