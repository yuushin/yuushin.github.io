import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Clock, RefreshCw, AlertTriangle, Shield, LogOut } from "lucide-react";
import { authManager, type SessionInfo } from "../utils/auth";

interface SessionStatusProps {
  onLogout: () => void;
  className?: string;
}

export function SessionStatus({ onLogout, className = "" }: SessionStatusProps) {
  const [sessionInfo, setSessionInfo] = useState<SessionInfo | null>(null);
  const [isExtending, setIsExtending] = useState(false);
  const [extensionHours, setExtensionHours] = useState("24");
  const [showExtendDialog, setShowExtendDialog] = useState(false);

  const extensionOptions = [
    { value: "1", label: "1 hour" },
    { value: "4", label: "4 hours" },
    { value: "8", label: "8 hours" },
    { value: "24", label: "24 hours" },
    { value: "168", label: "7 days" }
  ];

  // Update session info every minute
  useEffect(() => {
    const updateSessionInfo = () => {
      const info = authManager.getSessionInfo();
      setSessionInfo(info);
      
      // Auto-logout if session expired
      if (!info.isValid && info.expiresAt) {
        onLogout();
      }
    };

    updateSessionInfo();
    const interval = setInterval(updateSessionInfo, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [onLogout]);

  const handleExtendSession = async () => {
    setIsExtending(true);
    
    const success = authManager.extendSession(parseInt(extensionHours));
    
    if (success) {
      // Update session info immediately
      setSessionInfo(authManager.getSessionInfo());
      setShowExtendDialog(false);
    }
    
    setIsExtending(false);
  };

  if (!sessionInfo || !sessionInfo.isValid) {
    return null;
  }

  const getStatusColor = () => {
    if (sessionInfo.needsRenewal) return "destructive";
    return "secondary";
  };

  const getStatusIcon = () => {
    if (sessionInfo.needsRenewal) return <AlertTriangle className="w-3 h-3" />;
    return <Shield className="w-3 h-3" />;
  };

  return (
    <Card className={`p-3 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <Badge variant={getStatusColor()} className="flex items-center gap-1 text-xs">
            {getStatusIcon()}
            Session Active
          </Badge>
          
          <div className="flex items-center gap-1 text-xs text-muted-foreground min-w-0">
            <Clock className="w-3 h-3 flex-shrink-0" />
            <span className="truncate">
              {sessionInfo.timeRemaining || "Expired"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {sessionInfo.needsRenewal && (
            <Dialog open={showExtendDialog} onOpenChange={setShowExtendDialog}>
              <DialogTrigger asChild>
                <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Extend
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4" />
                    Extend Session
                  </DialogTitle>
                  <DialogDescription>
                    Your session is expiring soon. Extend it to continue accessing protected content.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Extension Duration</label>
                    <Select value={extensionHours} onValueChange={setExtensionHours}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {extensionOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={handleExtendSession}
                      disabled={isExtending}
                      className="flex-1"
                    >
                      {isExtending ? "Extending..." : "Extend Session"}
                    </Button>
                    <Button
                      onClick={() => setShowExtendDialog(false)}
                      variant="outline"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
          
          <Button 
            onClick={onLogout}
            size="sm" 
            variant="ghost" 
            className="h-7 px-2 text-xs"
            title="Logout"
          >
            <LogOut className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {sessionInfo.needsRenewal && (
        <div className="mt-2 p-2 bg-destructive/10 border border-destructive/20 rounded text-xs">
          <div className="flex items-center gap-1 text-destructive">
            <AlertTriangle className="w-3 h-3" />
            <span className="font-medium">Session expiring soon!</span>
          </div>
          <p className="text-destructive/80 mt-1">
            Your session will expire in {sessionInfo.timeRemaining}. Extend it to avoid being logged out.
          </p>
        </div>
      )}
    </Card>
  );
}