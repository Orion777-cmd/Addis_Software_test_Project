import {configureStore} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "./theme/theme.reducer"
import profileReducer from "./profile/profile.reducer";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        profile: profileReducer,
    },

   
})

export default {store};