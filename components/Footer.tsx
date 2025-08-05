import { useState, useEffect } from "react";
import { Heart, Github, Linkedin, Twitter, Mail, Shield } from "lucide-react";
import { Badge } from "./ui/badge";
import { authManager } from "../utils/auth";

interface FooterProps {
  onNavigateToProtected?: () => void;
}

export function Footer({ onNavigateToProtected }: FooterProps = {}) {
  const currentYear = new Date().getFullYear();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status
    setIsAuthenticated(authManager.isAuthenticated());
  }, []);

  return (
    <footer className="bg-gradient-to-br from-muted/50 to-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl">Alex Chen</h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              UI Designer &amp; Creative Developer crafting beautiful digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold font-body">Navigation</h4>
            <div className="space-y-2">
              <a href="#work" className="block text-muted-foreground hover:text-primary transition-colors font-body">Work</a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors font-body">Contact</a>
              {onNavigateToProtected && (
                <button
                  onClick={onNavigateToProtected}
                  className="block text-left text-muted-foreground hover:text-primary transition-colors font-body flex items-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  <span>Protected Work</span>
                  {isAuthenticated && (
                    <Badge variant="secondary" className="text-xs px-1.5 py-0.5 ml-1">
                      Active
                    </Badge>
                  )}
                </button>
              )}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold font-body">Services</h4>
            <div className="space-y-2">
              <span className="block text-muted-foreground font-body">UI/UX Design</span>
              <span className="block text-muted-foreground font-body">Web Development</span>
              <span className="block text-muted-foreground font-body">Design Systems</span>
              <span className="block text-muted-foreground font-body">Consulting</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold font-body">Contact</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground font-body">alex@alexchen.design</p>
              <p className="text-muted-foreground font-body">+1 (555) 123-4567</p>
              <p className="text-muted-foreground font-body">San Francisco, CA</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground font-body">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>© {currentYear} Alex Chen. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground font-body">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}