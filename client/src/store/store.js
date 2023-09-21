import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from '../slice/rootReducer'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { combineReducers } from "redux";

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

getDefaultMiddleware({
  serializableCheck: false, // Disable the serializable state invariant middleware
  // Other middleware configurations...
});

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store)