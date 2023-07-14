import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from '../slice/rootReducer'


getDefaultMiddleware({
  serializableCheck: false, // Disable the serializable state invariant middleware
  // Other middleware configurations...
});

const store = configureStore({
  reducer: rootReducer
})

export default store