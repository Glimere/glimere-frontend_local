import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
// import { Home, Dashboard, Login, Signup, NotFound } from './pages'

import AdminDashboard from './auth/AdminDashboard'
import About from './pages/About'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import Navbar from './auth/Navbar'
import Login from './auth/Login'
import Register from './auth/Register'
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import { AuthProvider } from './auth/Auth'

function App() {

  return (
    <>
    <AuthProvider>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />

        {/* Authentication routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />

        {/* 404 Not Found */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <ToastContainer />
      </AuthProvider>
    </>
  )
}

export default App
