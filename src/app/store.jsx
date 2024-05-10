import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import firmReducer from "../features/firmSlice";
// import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'



import storage from 'redux-persist/lib/storage' //? defaults to localStorage
// import storage from "redux-persist/lib/storage/session" //? session storage


 
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


export const persistor = persistStore(store)//! bu şekilde yazıp export etmiş App de sarmalayacsın bununla
// export const persistor
export default store;
// işlemler 
//1- importlatı yap
//2- sesion hali de yukarıda yorum halinde var 
// persisterreducer diye bir elemenaı var onun içerisine yukarıda tanımladığı config dosyatı ile rootreduse varmiş bizim rroreducerimiz yok hafızada tutmak istediğimiz auth reducerimiz var autun karşısında o yuzden onu yazdık. sonrasında da persistedreducer i auth a atadık
//* eğer reducerlerimiz birden fazla olursa o zaman birleştirip yazacağız. combine edeceksin.
// sonra en aşağıda export edip app.js de dasarmalayacaksın.