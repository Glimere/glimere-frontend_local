import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated (e.g., by verifying the token)
    const checkAuthentication = () => {
      const jwtToken = sessionStorage.getItem('jwt');
      if (jwtToken && jwtToken.length > 0) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }

    };
    checkAuthentication();
   
      if (!isAuthenticated) {
        navigate('/login');
      }

  }, []);

  const login = (token) => {
    sessionStorage.setItem('jwt', token);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    try {
      await axios.get('/api/logout');
      navigate('/login');
    } catch (e) {
      console.log(e);
    }
    sessionStorage.removeItem('jwt');
    setIsAuthenticated(false);
  };


    

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };