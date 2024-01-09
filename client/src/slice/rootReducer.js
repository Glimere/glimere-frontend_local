import { combineReducers } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import apparelsReducer from './apparels/apparelSlice'
import adsReducer from './ads/adSlice'
import carouselsReducer from './carousel/carouselSlice'
import usersReducer from './users/userSlice'
import cartSlice from './cart/cartSlice'
import brandSlice from './brand/brandSlice'
import categorySlice from './main-category/mainCategorySlice'
import subCategorySlice from './sub-category/subCategorySlice'
import wishListSlice from './wishList/wishListSlice'
import sizeSlice from './size/sizeSlice'
import colorSlice from './colors/colorSlice'
import apparelTypeSlice from './apparel-type/apparelTypeSlice'


// const authPersistConfig = {
//     key: 'auth',
//     storage,
//     stateReconciler: autoMergeLevel2,
//   };
  
//   const apparelPersistConfig = {
//     key: 'apparel',
//     storage,
//     stateReconciler: autoMergeLevel2,
//   };

const rootReducer = combineReducers({
    apparels: apparelsReducer,
    ads: adsReducer,
    carousels: carouselsReducer,
    users: usersReducer,
    cart: cartSlice,
    brands: brandSlice,
    category: categorySlice,
    subcategory: subCategorySlice,
    wishlist: wishListSlice,
    size: sizeSlice,
    color: colorSlice,
    apparelType: apparelTypeSlice
})

export default rootReducer