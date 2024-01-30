import {configureStore} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "./theme/theme.reducer"
import profileReducer from "./profile/profile.reducer";
import musicReducer from "./music/music.reducer";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        profile: profileReducer,
        music : musicReducer,
    },

   
})

export default {store};