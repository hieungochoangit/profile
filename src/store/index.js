import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "../pages/home/HomeSlice";

export const store = configureStore({
    reducer: {
        home: HomeSlice,
    },
});
