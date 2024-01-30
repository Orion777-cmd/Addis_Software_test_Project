import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "./theme/theme.reducer"

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },

   
})

export default {store};