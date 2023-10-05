import './App.css'
import { lazy, Suspense } from 'react'
import { Routes, useLocation } from 'react-router-dom'
import { Route } from 'react-router-dom'
const AdminDashboard = lazy(() => import('./auth/AdminDashboard'));
const About = lazy(() => import('./pages/About'));
const Profile = lazy(() => import('./pages/Profile'));
const Cart = lazy(() => import('./pages/Cart'));
const Navbar = lazy(() => import('./global-components/Navbar'));
const Login = lazy(() => import('./auth/Login'));
const Home = lazy(() => import('./pages/Home'));
const ForgotPassword = lazy(() => import('./auth/ForgotPassword'));
const ViewProduct = lazy(() => import('./pages/ViewProduct'));
const Orders = lazy(() => import('./pages/Orders'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const Search = lazy(() => import('./pages/Search'));
const Footer = lazy(() => import('./components/Footer'));
const Newsletter = lazy(() => import('./components/Newsletter'));
const Checkout = lazy(() => import('./pages/Checkout'));
const ViewCollection = lazy(() => import('./pages/ViewCollection'));
const ViewAll = lazy(() => import('./components/ViewAll'));
const Market = lazy(() => import('./pages/Market'));
const Landing = lazy(() => import('./pages/Landing'));
const Creators = lazy(() => import('./pages/Creators'));
const  Register = lazy(() => import('./pages/Register'));
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './auth/Auth';


function App() {

  const location = useLocation();

  const hideNavbarRoutes = ['/login', "/creators", '/'];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  const hideFooterRoutes = ['login', 'view-product'];
  const showFooter = !hideFooterRoutes.includes(location.pathname.split('/')[1]);

  const hideNewsletterRoutes = ['login', 'view-product', 'profile', "creators", ''];
  const showNewsletter = !hideNewsletterRoutes.includes(location.pathname.split('/')[1]);

  return (
    <>

      <Suspense fallback={<div>Loading...</div>}>
        <AuthProvider>
          {showNavbar && <Navbar />}
        
          <Routes>

            {/* Authentication routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Public routes */}
            <Route path="/shop" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Landing />} />
            <Route path="/creators" element={<Creators />} />
            <Route path="/register" element={<Register />} />

            {/* Protected routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/view-product/:id" element={<ViewProduct />} />
            <Route path="/view-collection/:id" element={<ViewCollection />} />
            <Route path="/view-all/:id" element={<ViewAll />} />
            <Route path="/search" element={<Search />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/market" element={<Market />} />

          </Routes>
          {showNewsletter && <Newsletter />}
          {showFooter && <Footer />}
          <ToastContainer />
        </AuthProvider>
      </Suspense>

    </>
  )
}

export default App
