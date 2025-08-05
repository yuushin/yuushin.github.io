import { Button } from "./ui/button";
import { ArrowDown, Sparkles, Palette, Code } from "lucide-react";

export function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-accent opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-secondary rounded-full border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Available for new projects</span>
              </div>
              
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none">
                <span className="text-gradient-primary">UI Designer</span> &amp; <br />
                Creative Developer
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg font-body leading-relaxed">
                I craft digital experiences that blend beautiful design with seamless functionality. 
                Based in San Francisco, working with clients worldwide.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToWork} size="lg" className="w-fit bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-primary transition-all font-medium">
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="w-fit border-2 border-primary text-primary hover:bg-secondary hover:border-primary/80 transition-all font-medium">
                Download Resume
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-heading text-gradient-primary">50+</div>
                <div className="text-sm text-muted-foreground font-body">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading text-gradient-primary">6+</div>
                <div className="text-sm text-muted-foreground font-body">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading text-gradient-primary">25+</div>
                <div className="text-sm text-muted-foreground font-body">Clients</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Abstract design element instead of portrait */}
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-primary p-1 rounded-2xl">
                <div className="w-full h-full bg-background rounded-xl overflow-hidden flex items-center justify-center">
                  {/* Abstract geometric design */}
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-secondary opacity-20"></div>
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-accent rounded-full opacity-60"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-primary rounded-lg opacity-80 rotate-45"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Palette className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="absolute top-1/3 right-1/3 w-20 h-20 border-4 border-primary/40 rounded-full"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-accent rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full flex items-center justify-center shadow-lg">
              <ArrowDown className="w-6 h-6 text-white animate-bounce" />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-white font-heading text-lg">UI</span>
            </div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center shadow-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}