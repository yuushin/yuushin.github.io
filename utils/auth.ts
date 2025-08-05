interface AuthToken {
  token: string;
  expiresAt: number;
  createdAt: number;
}

interface AuthConfig {
  defaultExpirationHours: number;
  renewalThresholdMinutes: number;
  storageKey: string;
}

class AuthManager {
  private config: AuthConfig = {
    defaultExpirationHours: 24, // 24 hours default
    renewalThresholdMinutes: 60, // Show renewal warning when 1 hour left
    storageKey: 'portfolio_auth_token'
  };

  /**
   * Generate a new authentication token
   */
  generateToken(expirationHours?: number): string {
    const hours = expirationHours || this.config.defaultExpirationHours;
    const tokenData = {
      id: this.generateRandomId(),
      timestamp: Date.now(),
      expiry: hours
    };
    
    // Simple token encoding (in production, use proper JWT or similar)
    return btoa(JSON.stringify(tokenData));
  }

  /**
   * Create and store an authentication token
   */
  authenticate(password: string, expirationHours?: number): boolean {
    // In production, this would validate against a secure backend
    const PROTECTED_PASSWORD = "portfolio2024";
    
    if (password !== PROTECTED_PASSWORD) {
      return false;
    }

    const token = this.generateToken(expirationHours);
    const expiresAt = Date.now() + (expirationHours || this.config.defaultExpirationHours) * 60 * 60 * 1000;
    
    const authToken: AuthToken = {
      token,
      expiresAt,
      createdAt: Date.now()
    };

    localStorage.setItem(this.config.storageKey, JSON.stringify(authToken));
    return true;
  }

  /**
   * Check if current token is valid
   */
  isAuthenticated(): boolean {
    const authData = this.getStoredToken();
    if (!authData) return false;

    return Date.now() < authData.expiresAt;
  }

  /**
   * Get remaining time until token expires
   */
  getTimeUntilExpiry(): number | null {
    const authData = this.getStoredToken();
    if (!authData) return null;

    const remaining = authData.expiresAt - Date.now();
    return remaining > 0 ? remaining : 0;
  }

  /**
   * Get time until expiry in human readable format
   */
  getFormattedTimeRemaining(): string | null {
    const remaining = this.getTimeUntilExpiry();
    if (!remaining) return null;

    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else if (minutes > 0) {
      return `${minutes}m`;
    } else {
      return "< 1m";
    }
  }

  /**
   * Check if token needs renewal warning
   */
  shouldShowRenewalWarning(): boolean {
    const remaining = this.getTimeUntilExpiry();
    if (!remaining) return false;

    const thresholdMs = this.config.renewalThresholdMinutes * 60 * 1000;
    return remaining <= thresholdMs;
  }

  /**
   * Extend current session
   */
  extendSession(additionalHours: number = 24): boolean {
    const authData = this.getStoredToken();
    if (!authData) return false;

    // Only allow extension if current token is still valid
    if (!this.isAuthenticated()) return false;

    const newExpiresAt = Date.now() + (additionalHours * 60 * 60 * 1000);
    const updatedAuthData: AuthToken = {
      ...authData,
      expiresAt: newExpiresAt
    };

    localStorage.setItem(this.config.storageKey, JSON.stringify(updatedAuthData));
    return true;
  }

  /**
   * Logout and clear token
   */
  logout(): void {
    localStorage.removeItem(this.config.storageKey);
  }

  /**
   * Get session information
   */
  getSessionInfo(): {
    isValid: boolean;
    timeRemaining: string | null;
    needsRenewal: boolean;
    createdAt: Date | null;
    expiresAt: Date | null;
  } {
    const authData = this.getStoredToken();
    
    return {
      isValid: this.isAuthenticated(),
      timeRemaining: this.getFormattedTimeRemaining(),
      needsRenewal: this.shouldShowRenewalWarning(),
      createdAt: authData ? new Date(authData.createdAt) : null,
      expiresAt: authData ? new Date(authData.expiresAt) : null
    };
  }

  /**
   * Set custom expiration time for tokens
   */
  setDefaultExpiration(hours: number): void {
    this.config.defaultExpirationHours = hours;
  }

  /**
   * Set renewal warning threshold
   */
  setRenewalThreshold(minutes: number): void {
    this.config.renewalThresholdMinutes = minutes;
  }

  private getStoredToken(): AuthToken | null {
    try {
      const stored = localStorage.getItem(this.config.storageKey);
      if (!stored) return null;
      
      return JSON.parse(stored) as AuthToken;
    } catch {
      // Invalid stored data, clear it
      localStorage.removeItem(this.config.storageKey);
      return null;
    }
  }

  private generateRandomId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
}

// Export singleton instance
export const authManager = new AuthManager();

// Export types for use in components
export type { AuthToken };
export type SessionInfo = ReturnType<typeof AuthManager.prototype.getSessionInfo>;