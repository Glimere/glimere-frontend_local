import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FontLoad from './global-components/FontLoad.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
          <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
