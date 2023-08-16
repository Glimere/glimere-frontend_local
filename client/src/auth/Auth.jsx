import React, { createContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { constants } from '../global-components/constants';
import { selectAllUsers } from '../slice/users/userSlice';
import { useSelector } from 'react-redux'


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const users = useSelector(selectAllUsers)


  // const location = useLocation();

  // const hideNavbarRoutes = ['/login'];

  // const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  useEffect(() => {
    const checkAuthentication = () => {
      const jwt = localStorage.getItem('jwt');
      const loggedIn = localStorage.getItem('loggedin');

      if (!(loggedIn && jwt)) {
        navigate('/login');
      }
    };

    checkAuthentication();
  }, [navigate]);




  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };