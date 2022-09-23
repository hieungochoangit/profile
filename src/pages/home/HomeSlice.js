import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: {
        name: "dark",
    },
};

export const homeSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            const theme = action.payload;

            switch (theme) {
                case "dark":
                    state.theme.name = "dark";
                    break;
                case "light":
                    state.theme.name = "light";
                    break;
                default:
                    state.theme;
                    break;
            }
        },
    },
});

export const { setTheme } = homeSlice.actions;

export default homeSlice.reducer;
