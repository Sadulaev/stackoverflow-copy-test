import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "../features/applicationSlice";
import dataSlice from "../features/dataSlice";


const store = configureStore({
    reducer: {
        application: applicationReducer,
        appData: dataSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;