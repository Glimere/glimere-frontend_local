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
import ForgotPassword from './auth/ForgotPassword'
import ViewProduct from './components/ViewProduct'
import Orders from './pages/Orders'
import Likes from './pages/Likes'

function App() {

  return (
    <>
    <AuthProvider>
     
      <Routes> 
        {/* Authentication routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>

        <Navbar />

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />

       
        {/* Protected routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/view-product/:id" element={<ViewProduct />} />

        {/* 404 Not Found */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <ToastContainer />
      </AuthProvider>
    </>
  )
}

export default App
