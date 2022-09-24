import { createSlice } from "@reduxjs/toolkit";
import { THEMES } from "../../common/constant";

const initialState = {
    theme: {
        name: "dark",
    },
};

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            const theme = action.payload;

            switch (theme) {
                case THEMES.DARK:
                    state.theme.name = THEMES.DARK;
                    break;
                case THEMES.LIGHT:
                    state.theme.name = THEMES.LIGHT;
                    break;
                case THEMES.RAIN:
                    state.theme.name = THEMES.RAIN;
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
