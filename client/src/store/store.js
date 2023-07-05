import { configureStore } from '@reduxjs/toolkit'
import apparelsReducer from '../slice/apparelSlice'
import adsReducer from '../slice/adSlice'
import carouselsReducer from '../slice/carouselSlice'
import usersReducer from '../slice/userSlice'
import likeSlice from '../slice/likeSlice'
import cartSlice from '../slice/cartSlice'


const store = configureStore({
  reducer: {
    apparels: apparelsReducer,
    ads: adsReducer,
    carousels: carouselsReducer,
    users: usersReducer,
    likes: likeSlice,
    carts: cartSlice,
  },
})

export default store