import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ProjectCard } from "./ProjectCard";
import { SessionStatus } from "./SessionStatus";
import { getAllProtectedProjects } from "../data/projects";
import { Lock, LogOut, Shield, Clock, Users } from "lucide-react";

interface ProtectedWorkProps {
  onLogout: () => void;
  onProjectSelect: (projectId: string) => void;
}

// Get protected projects from centralized data
const allProtectedProjects = getAllProtectedProjects();

// Transform projects for display with additional UI metadata
const protectedProjects = allProtectedProjects.map(project => {
  // Determine category from tags
  let category = "Other";
  if (project.tags.includes("Banking") || project.tags.includes("Fintech")) category = "Fintech";
  else if (project.tags.includes("Healthcare") || project.tags.includes("AI")) category = "Healthcare";
  else if (project.tags.includes("Government")) category = "Government";
  else if (project.tags.includes("Blockchain") || project.tags.includes("Cybersecurity")) category = "Blockchain";

  // Determine status from tags
  let status = "Completed";
  if (project.tags.includes("Confidential")) status = "Under NDA";
  else if (project.tags.includes("Stealth")) status = "Stealth Mode";
  else if (project.tags.includes("Government")) status = "Completed";

  // Extract year from timeline or use current year
  const year = "2024";

  // Simplify client name
  let client = "Confidential Client";
  if (project.tags.includes("Banking")) client = "Fortune 500 Bank";
  else if (project.tags.includes("Stealth")) client = "Stealth Startup";
  else if (project.tags.includes("Government")) client = "Government Agency";
  else if (project.tags.includes("Blockchain")) client = "Financial Institution";

  return {
    id: project.id,
    title: project.title,
    description: project.description,
    category,
    year,
    status,
    client,
    timeline: project.timeline,
    team: project.team,
    image: project.image,
    tags: project.tags
  };
});

export function ProtectedWork({ onLogout, onProjectSelect }: ProtectedWorkProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "Fintech", "Healthcare", "Government", "Blockchain"];
  
  const filteredProjects = selectedCategory === "all" 
    ? protectedProjects 
    : protectedProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="border-b border-border bg-gradient-to-r from-muted/30 to-secondary/20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-heading">Protected Work</h1>
                <p className="text-muted-foreground">
                  Confidential projects and exclusive content
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <SessionStatus onLogout={onLogout} className="hidden sm:block" />
              <Button 
                onClick={onLogout}
                variant="outline"
                className="gap-2 sm:hidden"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </div>

          {/* Mobile Session Status */}
          <div className="sm:hidden mb-6">
            <SessionStatus onLogout={onLogout} />
          </div>

          {/* Access Info */}
          <div className="bg-card/50 border border-border/50 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <Lock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Confidential Content</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The projects in this section are under NDA, in stealth mode, or contain sensitive information. 
                  Details have been generalized to protect client confidentiality while showcasing design process and outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-card-foreground">{protectedProjects.length}</p>
                  <p className="text-sm text-muted-foreground">Protected Projects</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-card-foreground">36</p>
                  <p className="text-sm text-muted-foreground">Months Combined</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-card-foreground">17</p>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              // Get the original project data to check for video
              const originalProject = allProtectedProjects.find(p => p.id === project.id);
              return (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  accentColor="bg-gradient-primary"
                  hasVideo={!!originalProject?.video}
                  onSelect={() => onProjectSelect(project.id)}
                />
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-muted-foreground mb-2">No projects found</h3>
              <p className="text-sm text-muted-foreground">
                Try selecting a different category or check back later.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}