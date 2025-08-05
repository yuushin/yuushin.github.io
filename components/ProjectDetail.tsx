import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target, Lightbulb, Play } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { VideoPlayer } from './VideoPlayer';

interface ProjectDetailProps {
  project: {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    images: string[];
    video?: string;
    tags: string[];
    link: string;
    githubLink?: string;
    accentColor: string;
    timeline: string;
    team: string;
    role: string;
    challenge: string;
    solution: string;
    results: string[];
    technologies: string[];
  };
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
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
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="mb-8 p-2 hover:bg-secondary/50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>

            {/* Project header */}
            <div className="space-y-6 text-center mb-12">
              <div className="space-y-4">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-gradient-secondary text-secondary-foreground border-0">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-primary transition-all font-medium">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </a>
                </Button>
                {project.githubLink && (
                  <Button variant="outline" asChild className="border-2 border-primary text-primary hover:bg-secondary transition-all font-medium">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Main project image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16">
              <div className={`absolute inset-0 ${project.accentColor} p-1 rounded-2xl`}>
                <div className="w-full h-full bg-background rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Project Overview */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    <h2 className="font-heading text-3xl">Project Overview</h2>
                  </div>
                  <p className="text-muted-foreground font-body text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Challenge */}
                <div className="space-y-6">
                  <h3 className="font-heading text-2xl">The Challenge</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <h3 className="font-heading text-2xl">The Solution</h3>
                  </div>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Demo Video */}
                {project.video && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-2">
                      <Play className="w-5 h-5 text-primary" />
                      <h3 className="font-heading text-2xl">Demo Video</h3>
                    </div>
                    <VideoPlayer 
                      src={project.video}
                      poster={project.image}
                      title={`${project.title} Demo`}
                    />
                    <p className="text-sm text-muted-foreground italic">
                      Interactive demo showcasing key features and user experience
                    </p>
                  </div>
                )}

                {/* Additional Images */}
                {project.images && project.images.length > 0 && (
                  <div className="space-y-6">
                    <h3 className="font-heading text-2xl">Project Gallery</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {project.images.map((image, index) => (
                        <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                          <ImageWithFallback
                            src={image}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="w-full h-64 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Results */}
                <div className="space-y-6">
                  <h3 className="font-heading text-2xl">Results &amp; Impact</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.results.map((result, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gradient-secondary/20 border border-primary/10">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground font-body">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Project Info */}
                <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 space-y-6">
                    <h4 className="font-heading text-xl">Project Info</h4>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground font-body">Timeline</div>
                          <div className="font-medium font-body">{project.timeline}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Users className="w-4 h-4 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground font-body">Team</div>
                          <div className="font-medium font-body">{project.team}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Target className="w-4 h-4 text-primary mt-1" />
                        <div>
                          <div className="text-sm text-muted-foreground font-body">My Role</div>
                          <div className="font-medium font-body">{project.role}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Technologies */}
                <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 space-y-6">
                    <h4 className="font-heading text-xl">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="border-0 shadow-lg bg-gradient-primary/10 backdrop-blur-sm">
                  <CardContent className="p-6 space-y-4 text-center">
                    <h4 className="font-heading text-xl">Interested in similar work?</h4>
                    <p className="text-sm text-muted-foreground font-body">
                      Let's discuss how I can help bring your project to life.
                    </p>
                    <Button 
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          onBack();
                          setTimeout(() => {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                          }, 100);
                        }
                      }}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-primary transition-all font-medium"
                    >
                      Get In Touch
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}