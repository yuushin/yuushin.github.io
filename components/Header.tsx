"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Moon, Sun, Menu, X, Shield } from "lucide-react";
import { authManager } from "../utils/auth";

interface HeaderProps {
  onNavigateToProtected?: () => void;
  currentView?: 'home' | 'project' | 'projects' | 'protected';
  onNavigateHome?: () => void;
}

export function Header({ onNavigateToProtected, currentView = 'home', onNavigateHome }: HeaderProps) {
  const [isDark, setIsDark] = useState(true); // Default to dark theme
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if dark mode is already set, if not, set it as default
    const isDarkMode = document.documentElement.classList.contains("dark");
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    }
    setIsDark(true); // Always start with dark theme
    
    // Check authentication status
    setIsAuthenticated(authManager.isAuthenticated());
  }, []);

  // Update auth status when currentView changes
  useEffect(() => {
    setIsAuthenticated(authManager.isAuthenticated());
  }, [currentView]);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate home first
    if (currentView !== 'home' && onNavigateHome) {
      onNavigateHome();
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleProtectedAccess = () => {
    if (onNavigateToProtected) {
      onNavigateToProtected();
    }
    setIsMobileMenuOpen(false);
  };

  const handleHomeNavigation = () => {
    if (onNavigateHome) {
      onNavigateHome();
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button 
              onClick={handleHomeNavigation}
              className="text-xl font-heading font-bold tracking-tight hover:text-primary transition-colors"
            >
              Ian Betts
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {currentView !== 'home' && (
              <button 
                onClick={handleHomeNavigation}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Home
              </button>
            )}
            <button 
              onClick={() => scrollToSection("work")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Contact
            </button>
            <button 
              onClick={handleProtectedAccess}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium flex items-center gap-2"
            >
              <Shield className="w-4 h-4" />
              <span>Protected</span>
              {isAuthenticated && (
                <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                  Active
                </Badge>
              )}
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="h-8 w-8 p-0"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-8 w-8 p-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {currentView !== 'home' && (
                <button 
                  onClick={handleHomeNavigation}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  Home
                </button>
              )}
              <button 
                onClick={() => scrollToSection("work")}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Contact
              </button>
              <button 
                onClick={handleProtectedAccess}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Protected Work
                </div>
                {isAuthenticated && (
                  <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                    Active
                  </Badge>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}