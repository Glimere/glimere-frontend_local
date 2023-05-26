import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { constants } from './constants';
import { logout } from '../pages/api/logout';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated (e.g., by verifying the token)
    const checkAuthentication = () => {
      const userData = JSON.parse(localStorage.getItem('user'));
      // console.log('userData', userData)
      // if (jwtToken && jwtToken.length > 0) {
      if (userData) {

        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        navigate('/login');
      }

    };
    checkAuthentication();

  }, []);

  const login = (token) => {
    localStorage.setItem('jwt', token);
    setIsAuthenticated(true);
  };


    

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
