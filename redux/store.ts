import { configureStore } from "@reduxjs/toolkit";
import navReducer from './navSlicer'

export const store = configureStore({
    reducer: {
        nav: navReducer
    }
})

export type RootState = ReturnType<typeof store.getState>