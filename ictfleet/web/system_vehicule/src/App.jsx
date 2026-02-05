import React, { useState, useEffect } from 'react';
import LoginPage from './page/LoginPage';
import AdminDashboard from './page/AdminDashboard';
import DriverDashboard from './page/DriverDashboard';
import TechnicianDashboard from './page/TechnicianDashboard';
import { isAuthenticated, getCurrentUser, authAPI, isAdmin, isDriver, isMechanic } from './service/api';

// Composant principal de l'application
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Feather icons
    if (window.feather) {
      window.feather.replace();
    }

    // Check if user is already authenticated on app start
    const checkAuthStatus = async () => {
      if (isAuthenticated()) {
        const user = getCurrentUser();
        if (user) {
          setCurrentUser(user);
          setIsLoggedIn(true);
        } else {
          // Token exists but no user data, try to get profile
          try {
            const profile = await authAPI.getProfile();
            setCurrentUser(profile);
            setIsLoggedIn(true);
          } catch (error) {
            // Token is invalid, clear it
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user');
          }
        }
      }
      setIsLoading(false);
    };

    checkAuthStatus();
  }, []);

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    try {
      await authAPI.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setCurrentUser(null);
      setIsLoggedIn(false);
    }
  };

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#0f172a',
        color: '#f8fafc',
        fontFamily: 'Inter, sans-serif'
      }}>
        <div>Loading...</div>
      </div>
    );
  }

  const renderDashboard = () => {
    if (isAdmin()) {
      return <AdminDashboard onLogout={handleLogout} currentUser={currentUser} />;
    } else if (isDriver()) {
      return <DriverDashboard onLogout={handleLogout} currentUser={currentUser} />;
    } else if (isMechanic()) {
      return <TechnicianDashboard onLogout={handleLogout} currentUser={currentUser} />;
    } else {
      return <AdminDashboard onLogout={handleLogout} currentUser={currentUser} />; // fallback
    }
  };

  return isLoggedIn ? renderDashboard() : <LoginPage onLogin={handleLogin} />;
}

export default App
