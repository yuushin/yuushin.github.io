import { ProjectCard } from "./ProjectCard";
import { Palette, Code, Smartphone, BarChart3 } from "lucide-react";
import { getFeaturedProjects } from "../data/projects";

interface WorkSectionProps {
  onProjectSelect: (projectId: string) => void;
  onViewAllProjects: () => void;
}

const categories = [
  { icon: Smartphone, label: "Mobile Apps", count: 12, color: "text-orange-600 dark:text-orange-400" },
  { icon: Code, label: "Web Apps", count: 18, color: "text-red-600 dark:text-red-400" },
  { icon: Palette, label: "Design Systems", count: 8, color: "text-amber-600 dark:text-amber-400" },
  { icon: BarChart3, label: "Dashboards", count: 15, color: "text-yellow-600 dark:text-yellow-400" }
];

export function WorkSection({ onProjectSelect, onViewAllProjects }: WorkSectionProps) {
  const featuredProjects = getFeaturedProjects(3);
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-gradient-accent opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="space-y-16">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary/10 rounded-full border border-primary/20">
              <Palette className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Portfolio</span>
            </div>
            
            <h2 className="font-heading text-4xl sm:text-5xl tracking-tight leading-tight">
              Featured <span className="text-gradient-primary">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-body leading-relaxed">
              A selection of projects that showcase my approach to solving complex design challenges 
              through user-centered design and modern technology.
            </p>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.label} className="text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors">
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${category.color}`} />
                  <div className="text-2xl font-heading text-gradient-primary">{category.count}</div>
                  <div className="text-sm text-muted-foreground font-body">{category.label}</div>
                </div>
              );
            })}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                {...project} 
                hasVideo={!!project.video}
                onSelect={() => onProjectSelect(project.id)}
              />
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center">
            <button 
              onClick={onViewAllProjects}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full border-2 border-primary hover:bg-primary/90 hover:border-primary/80 transition-all font-medium shadow-lg"
            >
              <span>View All Projects</span>
              <div className="w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-xs font-heading">→</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}