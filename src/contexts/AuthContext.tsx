import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import { 
  hashPassword, 
  verifyPassword, 
  RateLimiter, 
  generateSessionId, 
  isSessionValid, 
  sanitizeInput,
  secureStorage,
  type SessionData,
  type LoginAttempt
} from '../utils/security';

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string; lockoutTime?: number }>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
  changePassword: (currentPassword: string, newPassword: string) => Promise<{ success: boolean; error?: string }>;
  sessionInfo: SessionData | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Initialize rate limiter
const rateLimiter = new RateLimiter();

// Pre-hashed admin credentials (in production, store in database)
const ADMIN_CREDENTIALS = {
  username: 'admin',
  // This is bcrypt hash of 'Admin123!' with salt rounds 12
  passwordHash: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBdXIG/QVygl8S'
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [sessionInfo, setSessionInfo] = useState<SessionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const savedSession = secureStorage.getItem('admin_session');
        if (savedSession && isSessionValid(savedSession)) {
          // Update last activity
          const updatedSession = {
            ...savedSession,
            lastActivity: Date.now()
          };
          setSessionInfo(updatedSession);
          setUser({
            id: savedSession.userId,
            username: savedSession.username,
            role: savedSession.role as 'admin' | 'user'
          });
          secureStorage.setItem('admin_session', updatedSession);
        } else {
          // Clear invalid session
          secureStorage.removeItem('admin_session');
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        secureStorage.removeItem('admin_session');
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();

    // Set up session timeout check
    const sessionCheckInterval = setInterval(() => {
      const savedSession = secureStorage.getItem('admin_session');
      if (savedSession && !isSessionValid(savedSession)) {
        logout();
      }
    }, 60000); // Check every minute

    return () => clearInterval(sessionCheckInterval);
  }, []);

  const login = async (username: string, password: string): Promise<{ success: boolean; error?: string; lockoutTime?: number }> => {
    try {
      // Sanitize inputs
      const sanitizedUsername = sanitizeInput(username);
      const sanitizedPassword = sanitizeInput(password);

      // Check rate limiting
      const identifier = sanitizedUsername.toLowerCase();
      if (rateLimiter.isBlocked(identifier)) {
        const lockoutTime = rateLimiter.getRemainingLockoutTime(identifier);
        return {
          success: false,
          error: `Terlalu banyak percobaan login. Coba lagi dalam ${Math.ceil(lockoutTime / 60000)} menit.`,
          lockoutTime
        };
      }

      // Record login attempt
      const loginAttempt: LoginAttempt = {
        timestamp: Date.now(),
        userAgent: navigator.userAgent
      };

      // Verify credentials
      if (sanitizedUsername === ADMIN_CREDENTIALS.username) {
        const isValidPassword = await verifyPassword(sanitizedPassword, ADMIN_CREDENTIALS.passwordHash);
        
        if (isValidPassword) {
          // Successful login
          rateLimiter.clearAttempts(identifier);
          
          const sessionId = generateSessionId();
          const session: SessionData = {
            userId: '1',
            username: sanitizedUsername,
            role: 'admin',
            createdAt: Date.now(),
            lastActivity: Date.now(),
            sessionId
          };

          const adminUser: User = {
            id: '1',
            username: sanitizedUsername,
            role: 'admin'
          };

          setUser(adminUser);
          setSessionInfo(session);
          secureStorage.setItem('admin_session', session);

          return { success: true };
        }
      }

      // Failed login
      rateLimiter.addAttempt(identifier, loginAttempt);
      
      return {
        success: false,
        error: 'Username atau password salah'
      };

    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: 'Terjadi kesalahan sistem. Silakan coba lagi.'
      };
    }
  };

  const logout = () => {
    setUser(null);
    setSessionInfo(null);
    secureStorage.removeItem('admin_session');
    secureStorage.removeItem('admin_content');
  };

  const changePassword = async (currentPassword: string, newPassword: string): Promise<{ success: boolean; error?: string }> => {
    try {
      if (!user || !sessionInfo) {
        return { success: false, error: 'Tidak ada sesi aktif' };
      }

      // Verify current password
      const isCurrentPasswordValid = await verifyPassword(currentPassword, ADMIN_CREDENTIALS.passwordHash);
      if (!isCurrentPasswordValid) {
        return { success: false, error: 'Password saat ini salah' };
      }

      // Hash new password
      const newPasswordHash = await hashPassword(newPassword);
      
      // In production, save to database
      console.log('New password hash (save to database):', newPasswordHash);
      
      return { success: true };
    } catch (error) {
      console.error('Change password error:', error);
      return { success: false, error: 'Gagal mengubah password' };
    }
  };

  const isAuthenticated = !!user && !!sessionInfo && isSessionValid(sessionInfo);

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      isAuthenticated, 
      isLoading,
      changePassword,
      sessionInfo
    }}>
      {children}
    </AuthContext.Provider>
  );
};