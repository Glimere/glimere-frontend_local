import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { constants } from '../global-components/constants';
import { selectAllUsers } from '../slice/users/userSlice';
import { useSelector } from 'react-redux'


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const users = useSelector(selectAllUsers)



  useEffect(() => {
    // Check if the user is authenticated (e.g., by verifying the token)
    // const checkAuthentication = () => {
      const loggedIn = localStorage.getItem('loggedin')

      console.log('loggedIn', loggedIn)
      
      if (loggedIn) {

        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        navigate('/login');
      }

    // };
    // checkAuthentication();

  }, []);

  

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };