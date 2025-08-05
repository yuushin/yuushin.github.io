import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { ArrowLeft, Search, Filter } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { getAllProjects, type ProjectData } from "../data/projects";

interface AllProjectsProps {
  onBack: () => void;
  onProjectSelect: (projectId: string) => void;
}

export function AllProjects({ onBack, onProjectSelect }: AllProjectsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const allProjects = getAllProjects();
  
  // Get all unique categories/tags
  const allCategories = Array.from(
    new Set(allProjects.flatMap(project => project.tags))
  ).sort();

  // Filter projects based on search and category
  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = searchTerm === "" || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === null || 
      project.tags.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-accent opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Back button */}
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="mb-8 p-2 hover:bg-secondary/50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>

            {/* Page header */}
            <div className="space-y-6 text-center mb-12">
              <div className="space-y-4">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                  All Projects
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
                  Explore my complete portfolio of UI/UX design projects, web applications, and digital experiences.
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 pt-6">
                <div className="text-center">
                  <div className="font-heading text-3xl text-primary">{allProjects.length}</div>
                  <div className="text-sm text-muted-foreground font-body">Total Projects</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl text-primary">{allCategories.length}</div>
                  <div className="text-sm text-muted-foreground font-body">Categories</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl text-primary">{filteredProjects.length}</div>
                  <div className="text-sm text-muted-foreground font-body">Showing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border/50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search projects by name, description, or technology..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 h-12 bg-input-background border-0 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Categories */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Filter className="w-4 h-4 text-primary" />
                      <span className="font-body font-medium">Filter by category:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant={selectedCategory === null ? "default" : "outline"}
                        onClick={() => setSelectedCategory(null)}
                        className="h-8 px-4 font-body"
                      >
                        All Projects
                      </Button>
                      {allCategories.map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          onClick={() => setSelectedCategory(category)}
                          className="h-8 px-4 font-body"
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-heading text-2xl mb-4">No projects found</h3>
                <p className="text-muted-foreground font-body max-w-md mx-auto">
                  Try adjusting your search terms or filter criteria to find more projects.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                  }}
                  className="mt-6"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <>
                {/* Results header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="font-heading text-2xl">
                      {selectedCategory ? `${selectedCategory} Projects` : "All Projects"}
                    </h2>
                    <p className="text-muted-foreground font-body">
                      Showing {filteredProjects.length} of {allProjects.length} projects
                    </p>
                  </div>
                  
                  {(searchTerm || selectedCategory) && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory(null);
                      }}
                      className="font-body"
                    >
                      Clear Filters
                    </Button>
                  )}
                </div>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      tags={project.tags}
                      accentColor={project.accentColor}
                      hasVideo={!!project.video}
                      onSelect={() => onProjectSelect(project.id)}
                    />
                  ))}
                </div>

                {/* Load more hint */}
                {filteredProjects.length === allProjects.length && allProjects.length > 6 && (
                  <div className="text-center mt-16 pt-8 border-t border-border/50">
                    <p className="text-muted-foreground font-body">
                      You've seen all {allProjects.length} projects. Interested in working together?
                    </p>
                    <Button
                      onClick={() => {
                        onBack();
                        setTimeout(() => {
                          const contactSection = document.getElementById('contact');
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }}
                      className="mt-4"
                    >
                      Get In Touch
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}