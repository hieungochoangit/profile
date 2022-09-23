import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "../pages/home/HomeSlice";
import CardSlice from "../component/Card/CartSlide";

export const store = configureStore({
    reducer: {
        home: HomeSlice,
        user: CardSlice,
    },
});
