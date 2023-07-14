import './App.css'
import { Routes, useLocation } from 'react-router-dom'
import { Route } from 'react-router-dom'
import AdminDashboard from './auth/AdminDashboard'
import About from './pages/About'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import Navbar from './global-components/Navbar'
import Login from './auth/Login'
import Register from './auth/Register'
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import { AuthProvider } from './auth/Auth'
import ForgotPassword from './auth/ForgotPassword'
import ViewProduct from './components/ViewProduct'
import Orders from './pages/Orders'
import Likes from './pages/Likes'
import Search from './components/Search'

function App() {

  const location = useLocation();
  
  const hideNavbarRoutes = ['/login'];

  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
    <AuthProvider>
     {showNavbar && <Navbar />}
      <Routes> 
        {/* Authentication routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Protected routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/view-product/:id" element={<ViewProduct />} />
        <Route path="/search" element={<Search />} />

        {/* 404 Not Found */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <ToastContainer />
      </AuthProvider>
    </>
  )
}

export default App
