import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Lock, Eye, EyeOff, Clock, Shield } from "lucide-react";
import { authManager } from "../utils/auth";

interface PasswordProtectionProps {
  onAuthenticate: (success: boolean) => void;
}

export function PasswordProtection({ onAuthenticate }: PasswordProtectionProps) {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [sessionDuration, setSessionDuration] = useState("24"); // hours

  const sessionOptions = [
    { value: "1", label: "1 hour" },
    { value: "4", label: "4 hours" },
    { value: "8", label: "8 hours" },
    { value: "24", label: "24 hours" },
    { value: "168", label: "7 days" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));

    const success = authManager.authenticate(password, parseInt(sessionDuration));
    
    if (success) {
      onAuthenticate(true);
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-secondary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="p-8 border-gradient shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
              <Lock className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-heading">Protected Work</h1>
            <p className="text-muted-foreground mt-2">
              This section contains exclusive projects and confidential work. 
              Please enter the password to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="pr-10"
                  disabled={isLoading}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Session Duration</Label>
              <Select value={sessionDuration} onValueChange={setSessionDuration} disabled={isLoading}>
                <SelectTrigger id="duration">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <SelectValue placeholder="Select session duration" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {sessionOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Your session will automatically expire after this duration for security.
              </p>
            </div>

            {error && (
              <div className="text-destructive text-sm bg-destructive/10 border border-destructive/20 rounded-md p-3">
                {error}
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full btn-primary"
              disabled={isLoading || !password}
            >
              {isLoading ? "Verifying..." : "Access Protected Work"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Need access? Contact me for the password.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}