import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowUpRight, Play } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  accentColor: string;
  hasVideo?: boolean;
  onSelect: () => void;
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  tags, 
  accentColor,
  hasVideo,
  onSelect 
}: ProjectCardProps) {
  return (
    <Card 
      className="group border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-[1.02]"
      onClick={onSelect}
    >
      <div className="relative overflow-hidden">
        {/* Gradient border */}
        <div className={`absolute inset-0 ${accentColor} p-1 rounded-t-xl`}>
          <div className="w-full h-full bg-background rounded-t-lg overflow-hidden">
            <ImageWithFallback
              src={image}
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
        
        {/* Video indicator */}
        {hasVideo && (
          <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <Play className="w-4 h-4 text-primary" />
          </div>
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-background/90 backdrop-blur-sm rounded-full p-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <ArrowUpRight className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="font-heading text-xl group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm font-body leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="text-xs bg-gradient-secondary/50 text-secondary-foreground border-0 font-medium"
            >
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground border-0">
              +{tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}