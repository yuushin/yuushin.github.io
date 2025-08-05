import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { AlertTriangle, Clock, X, RefreshCw } from "lucide-react";
import { authManager } from "../utils/auth";

interface SessionNotificationsProps {
  onLogout: () => void;
}

export function SessionNotifications({ onLogout }: SessionNotificationsProps) {
  const [showWarning, setShowWarning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<string | null>(null);

  useEffect(() => {
    const checkSessionStatus = () => {
      const sessionInfo = authManager.getSessionInfo();
      
      if (!sessionInfo.isValid) {
        setShowWarning(false);
        return;
      }

      setTimeRemaining(sessionInfo.timeRemaining);
      
      // Show warning if session needs renewal and warning isn't already shown
      if (sessionInfo.needsRenewal && !showWarning) {
        setShowWarning(true);
      }
      
      // Hide warning if session was extended
      if (!sessionInfo.needsRenewal && showWarning) {
        setShowWarning(false);
      }
    };

    checkSessionStatus();
    const interval = setInterval(checkSessionStatus, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [showWarning]);

  const handleExtendSession = () => {
    const success = authManager.extendSession(24); // Extend by 24 hours
    if (success) {
      setShowWarning(false);
    }
  };

  const handleDismiss = () => {
    setShowWarning(false);
  };

  if (!showWarning || !timeRemaining) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="p-4 border-destructive/50 bg-card shadow-lg">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <AlertTriangle className="w-5 h-5 text-destructive" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-card-foreground">Session Expiring</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Your session will expire in <span className="font-medium text-destructive">{timeRemaining}</span>
            </p>
            
            <div className="flex gap-2 mt-3">
              <Button
                onClick={handleExtendSession}
                size="sm"
                className="btn-primary"
              >
                <RefreshCw className="w-3 h-3 mr-1" />
                Extend
              </Button>
              
              <Button
                onClick={onLogout}
                size="sm"
                variant="outline"
              >
                Logout
              </Button>
            </div>
          </div>
          
          <Button
            onClick={handleDismiss}
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
}