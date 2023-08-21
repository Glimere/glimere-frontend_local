import { combineReducers } from '@reduxjs/toolkit'
import apparelsReducer from './apparels/apparelSlice'
import adsReducer from './ads/adSlice'
import carouselsReducer from './carousel/carouselSlice'
import usersReducer from './users/userSlice'
import cartSlice from './cart/cartSlice'
import brandSlice from './brand/brandSlice'
import categorySlice from './category/categorySlice'
import subCategorySlice from './subCategory/subCategorySlice'
import wishListSlice from './wishList/wishListSlice'
import sizeSlice from './size/sizeSlice'
import colorSlice from './colors/colorSlice'

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
    color: colorSlice
})

export default rootReducer