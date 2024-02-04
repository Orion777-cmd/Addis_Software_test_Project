import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "./theme/theme.reducer"
import profileReducer from "./profile/profile.reducer";
import musicReducer from "./music/music.reducer";
import modalReducer from "./modal/modal.reducer";
import snackbarReducer from "./snackbar/snackbar.reducer";
import rootSaga from "./root.saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        profile: profileReducer,
        music : musicReducer,
        modal : modalReducer,
        snackbar: snackbarReducer,
    },
    middleware: [sagaMiddleware]
   
})

sagaMiddleware.run(rootSaga)

export default {store};