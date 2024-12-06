import React, { createContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { constants } from '../global-components/constants';
import { selectAllUsers } from '../slice/users/userSlice';
import { useSelector } from 'react-redux'
import { selectLoggedInUser } from '../slice/users/userSlice';
import { auth } from '../config/firebase';

export const isAuthenticated = auth.currentUser != null

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const navigate = useNavigate();
  const users = useSelector(selectAllUsers)
  const isAuthenticated = auth.currentUser != null

  const location = useLocation();

  // const hideNavbarRoutes = ['/login'];

  // const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  useEffect(() => {
    const checkAuthentication = () => {
      // if (isAuthenticated) {
      //   navigate('/shop')
      // } else {
      //   navigate('/login')
      // }
    };

    checkAuthentication();
  }, [isAuthenticated]);


// console.log('isAuthenticated', isAuthenticated)
// console.log('auth.currentUser', auth.currentUser)

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };