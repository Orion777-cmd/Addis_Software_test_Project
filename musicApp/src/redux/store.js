import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";


import createSagaMiddleware from "redux-saga";


import rootSaga from "./root.saga";

const persistConfig = {
    key: 'root',
    storage,
}

const sagaMiddleware = createSagaMiddleware();



export const store = configureStore({
    reducer: {

    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
    .concat(sagaMiddleware)
})

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);


export default {store, persistor};