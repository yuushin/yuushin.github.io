import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WorkSection } from "./components/WorkSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ProjectDetail } from "./components/ProjectDetail";
import { AllProjects } from "./components/AllProjects";
import { PasswordProtection } from "./components/PasswordProtection";
import { ProtectedWork } from "./components/ProtectedWork";
import { SessionNotifications } from "./components/SessionNotifications";
import {
  getAnyProjectById,
  type ProjectData,
} from "./data/projects";
import { authManager } from "./utils/auth";

// Initialize dark theme immediately to prevent flash
if (typeof document !== "undefined") {
  document.documentElement.classList.add("dark");
}

export default function App() {
  const [currentView, setCurrentView] = useState<
    | "home"
    | "project"
    | "projects"
    | "protected"
    | "protected-auth"
  >("home");
  const [selectedProject, setSelectedProject] =
    useState<ProjectData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Initialize dark theme immediately
  useEffect(() => {
    if (!document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Check authentication status on app load and set up periodic checks
  useEffect(() => {
    const checkAuthStatus = () => {
      const isValid = authManager.isAuthenticated();
      setIsAuthenticated(isValid);

      // If user was on protected view but token expired, redirect to auth
      if (!isValid && currentView === "protected") {
        setCurrentView("protected-auth");
      }
    };

    // Initial check
    checkAuthStatus();

    // Check every minute for token expiration
    const interval = setInterval(checkAuthStatus, 60000);

    return () => clearInterval(interval);
  }, [currentView]);

  const handleProjectSelect = (projectId: string) => {
    const project = getAnyProjectById(projectId);
    if (project) {
      setSelectedProject(project);
      setCurrentView("project");
      // Scroll to top when navigating to project detail
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedProject(null);
    // Scroll to top when returning home
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewAllProjects = () => {
    setCurrentView("projects");
    // Scroll to top when navigating to all projects
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateToProtected = () => {
    if (isAuthenticated) {
      setCurrentView("protected");
    } else {
      setCurrentView("protected-auth");
    }
    // Scroll to top when navigating to protected section
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAuthenticate = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true);
      setCurrentView("protected");
    }
  };

  const handleProtectedLogout = () => {
    authManager.logout();
    setIsAuthenticated(false);
    setCurrentView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Password protection screen
  if (currentView === "protected-auth") {
    return (
      <PasswordProtection onAuthenticate={handleAuthenticate} />
    );
  }

  // Protected work section
  if (currentView === "protected") {
    return (
      <div className="min-h-screen">
        <Header
          currentView={currentView}
          onNavigateHome={handleBackToHome}
          onNavigateToProtected={handleNavigateToProtected}
        />
        <main className="pt-16">
          <ProtectedWork
            onLogout={handleProtectedLogout}
            onProjectSelect={handleProjectSelect}
          />
        </main>
        <Footer
          onNavigateToProtected={handleNavigateToProtected}
        />
        <SessionNotifications
          onLogout={handleProtectedLogout}
        />
      </div>
    );
  }

  if (currentView === "project" && selectedProject) {
    // Check if this is a protected project
    const isProtectedProject =
      selectedProject.tags?.includes("Confidential") ||
      selectedProject.tags?.includes("Stealth") ||
      selectedProject.tags?.includes("Government");

    return (
      <div className="min-h-screen">
        <Header
          currentView={currentView}
          onNavigateHome={handleBackToHome}
          onNavigateToProtected={handleNavigateToProtected}
        />
        <main className="pt-16">
          <ProjectDetail
            project={selectedProject}
            onBack={handleBackToHome}
          />
        </main>
        <Footer
          onNavigateToProtected={handleNavigateToProtected}
        />
        {isProtectedProject && isAuthenticated && (
          <SessionNotifications
            onLogout={handleProtectedLogout}
          />
        )}
      </div>
    );
  }

  if (currentView === "projects") {
    return (
      <div className="min-h-screen">
        <Header
          currentView={currentView}
          onNavigateHome={handleBackToHome}
          onNavigateToProtected={handleNavigateToProtected}
        />
        <main className="pt-16">
          <AllProjects
            onBack={handleBackToHome}
            onProjectSelect={handleProjectSelect}
          />
        </main>
        <Footer
          onNavigateToProtected={handleNavigateToProtected}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header
        currentView={currentView}
        onNavigateHome={handleBackToHome}
        onNavigateToProtected={handleNavigateToProtected}
      />
      <main>
        <Hero />
        <WorkSection
          onProjectSelect={handleProjectSelect}
          onViewAllProjects={handleViewAllProjects}
        />
        <ContactSection />
      </main>
      <Footer
        onNavigateToProtected={handleNavigateToProtected}
      />
    </div>
  );
}