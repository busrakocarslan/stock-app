import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import firmReducer from "../features/firmSlice";
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


 
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, authReducer)
const store = configureStore({
  reducer: {
    auth: persistedReducer,
    firms:firmReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});
// export const persistor
export default store;
