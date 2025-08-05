import { Badge } from "./ui/badge";
import { Award, Heart, Coffee, Mountain, Lightbulb, Users } from "lucide-react";

const skills = [
  { name: "UI/UX Design", category: "design", level: 95 },
  { name: "Figma", category: "design", level: 98 },
  { name: "Sketch", category: "design", level: 85 },
  { name: "Adobe Creative Suite", category: "design", level: 90 },
  { name: "React", category: "development", level: 88 },
  { name: "Vue.js", category: "development", level: 82 },
  { name: "TypeScript", category: "development", level: 85 },
  { name: "Tailwind CSS", category: "development", level: 92 },
  { name: "Framer Motion", category: "development", level: 78 },
  { name: "Webflow", category: "tools", level: 88 },
  { name: "Principle", category: "tools", level: 85 },
  { name: "After Effects", category: "tools", level: 75 }
];

const experience = [
  {
    company: "Stripe",
    role: "Senior Product Designer",
    period: "2022 - Present",
    description: "Lead design for payment infrastructure products used by millions of businesses worldwide.",
    color: "bg-gradient-to-r from-orange-500 to-red-500"
  },
  {
    company: "Airbnb",
    role: "Product Designer", 
    period: "2020 - 2022",
    description: "Designed booking experiences and host tools that improved conversion rates by 23%.",
    color: "bg-gradient-to-r from-amber-500 to-orange-500"
  },
  {
    company: "Spotify",
    role: "UI Designer",
    period: "2018 - 2020",
    description: "Created interface designs for music discovery features across web and mobile platforms.",
    color: "bg-gradient-to-r from-yellow-500 to-amber-500"
  }
];

const interests = [
  { icon: Coffee, label: "Coffee Culture", color: "text-amber-600 dark:text-amber-400" },
  { icon: Mountain, label: "Hiking", color: "text-orange-600 dark:text-orange-400" },
  { icon: Heart, label: "Design Community", color: "text-red-600 dark:text-red-400" },
  { icon: Award, label: "Mentoring", color: "text-yellow-600 dark:text-yellow-400" }
];

export function AboutSection() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "design":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300";
      case "development":
        return "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300";
      case "tools":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300";
      default:
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300";
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/6 w-96 h-96 bg-gradient-accent opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-accent/20 rounded-full border border-primary/20">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">About Me</span>
              </div>
              
              <h2 className="font-heading text-4xl sm:text-5xl tracking-tight leading-tight">
                Passionate About <span className="text-gradient-primary">Great Design</span>
              </h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  I'm a passionate UI designer and developer with over 6 years of experience 
                  creating digital products that people love to use. My background in both 
                  design and development allows me to bridge the gap between beautiful interfaces 
                  and functional experiences.
                </p>
                <p>
                  I believe great design is invisible – it solves problems so elegantly that 
                  users don't even notice the complexity underneath. My approach combines 
                  user research, iterative design, and close collaboration with development 
                  teams to deliver products that exceed expectations.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-heading text-2xl">Skills &amp; Expertise</h3>
              <div className="space-y-4">
                {['design', 'development', 'tools'].map((category) => (
                  <div key={category} className="space-y-2">
                    <h4 className="text-sm font-semibold capitalize text-muted-foreground font-body">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills
                        .filter(skill => skill.category === category)
                        .map((skill) => (
                          <div key={skill.name} className="group relative">
                            <Badge className={`border-0 hover:scale-105 transition-transform font-medium ${getCategoryColor(skill.category)}`}>
                              {skill.name}
                            </Badge>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-body">
                              {skill.level}% proficiency
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="space-y-4">
              <h3 className="font-heading text-2xl">When I'm Not Designing</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest) => {
                  const Icon = interest.icon;
                  return (
                    <div key={interest.label} className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/50">
                      <Icon className={`w-5 h-5 ${interest.color}`} />
                      <span className="text-sm font-medium font-body">{interest.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Abstract design workspace instead of portrait */}
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-primary p-1 rounded-2xl">
                  <div className="w-full h-full bg-background rounded-xl overflow-hidden relative">
                    {/* Abstract workspace design */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted"></div>
                    
                    {/* Desk surface */}
                    <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-amber-100 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/10"></div>
                    
                    {/* Monitor mockup */}
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-foreground/10 rounded-lg border-2 border-foreground/20">
                      <div className="w-full h-full bg-gradient-primary/20 rounded-md m-0.5 flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    
                    {/* Design tools */}
                    <div className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-orange-400 rounded-lg opacity-80 rotate-12"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-red-400 rounded-full opacity-70"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-4 h-12 bg-amber-400 rounded-full opacity-60"></div>
                    
                    {/* Coffee cup */}
                    <div className="absolute bottom-1/4 left-1/3 w-6 h-8 bg-amber-600 rounded-b-full opacity-80"></div>
                    
                    {/* Floating design elements */}
                    <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-primary/40 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-accent/60 rounded-lg rotate-45"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating stat cards */}
              <div className="absolute -top-4 -right-4 bg-gradient-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-heading">6+</div>
                <div className="text-xs opacity-90 font-body">Years</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-accent text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-heading">50+</div>
                <div className="text-xs opacity-90 font-body">Projects</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-heading text-2xl">Experience</h3>
              {experience.map((exp, index) => (
                <div key={exp.company} className="relative">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${exp.color} flex items-center justify-center text-white font-heading text-lg flex-shrink-0`}>
                      {exp.company[0]}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold font-body">{exp.role}</h4>
                        <span className="text-sm text-muted-foreground font-body">{exp.period}</span>
                      </div>
                      <p className="text-sm text-primary font-semibold font-body">{exp.company}</p>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                  {index < experience.length - 1 && (
                    <div className="ml-6 mt-4 h-8 w-px bg-gradient-to-b from-border to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}