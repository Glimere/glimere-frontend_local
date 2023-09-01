import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FontLoad from './global-components/FontLoad.jsx'
import { persistor, store } from './store/store.js'
import { Provider } from 'react-redux';
import { fetchApparels } from './slice/apparels/apparelSlice.js'
import { fetchAds } from './slice/ads/adSlice.js'
import { fetchCarousels } from './slice/carousel/carouselSlice.js'
import { fetchUsers } from './slice/users/userSlice.js'
import { fetchBrands } from './slice/brand/brandSlice.js'
import { fetchCategory } from './slice/category/categorySlice.js'
import { fetchSubcategory } from './slice/subCategory/subCategorySlice.js'
import { fetchSize } from './slice/size/sizeSlice.js'
import { fetchColor } from './slice/colors/colorSlice.js'
import { PersistGate } from 'redux-persist/integration/react';


const fetchData = async () => {
  try {
    await Promise.all([
      store.dispatch(fetchApparels()),
      store.dispatch(fetchAds()),
      store.dispatch(fetchCarousels()),
      store.dispatch(fetchBrands()),
      store.dispatch(fetchCategory()),
      store.dispatch(fetchSubcategory()),
      store.dispatch(fetchSize()),
      store.dispatch(fetchColor()),
    ]);

    if (localStorage.getItem("loggedin") === "true") {
      const jwt = JSON.parse(localStorage.getItem('jwt'));
      // console.log('jwt', jwt)
      await store.dispatch(fetchUsers(jwt));
    }
  } catch (error) {
    // Handle any error that occurred during fetching data
    console.error('Error fetching data:', error);
  }
};

fetchData();



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
