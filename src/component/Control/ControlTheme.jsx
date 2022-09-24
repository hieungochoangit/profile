import React from "react";
import styles from "./ControlTheme.module.css";
import clsx from "clsx";

import { THEMES } from "../../common/constant";

import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../pages/home/HomeSlice";
import { useState } from "react";
import { useEffect } from "react";

const ControlTheme = () => {
    const cx = clsx.bind(styles);
    const dispatch = useDispatch();

    const [isCheckThemeRain, setIsCheckThemeRain] = useState(false);

    const theme = useSelector((state) => state.home.theme.name);

    const handleChangeTheme = (status) => {
        setIsCheckThemeRain(false);
        dispatch(setTheme(status));
    };

    const handleChangeThemeRain = (status) => {
        if (isCheckThemeRain) {
            setIsCheckThemeRain(false);
            dispatch(setTheme(THEMES.DARK));
        } else {
            setIsCheckThemeRain(!isCheckThemeRain);
            dispatch(setTheme(status));
        }
    };

    return (
        <div className={cx(styles.control)}>
            <>
                <input
                    checked={isCheckThemeRain}
                    onChange={() => handleChangeThemeRain(THEMES.RAIN)}
                    type="checkbox"
                    id="rain"
                    className={cx(styles.radio_input)}
                    name="rain"
                />
                <label htmlFor="rain" className={cx(styles.radio_label)}></label>
            </>

            {theme === "dark" ? (
                <img
                    onClick={() => handleChangeTheme(THEMES.LIGHT)}
                    className={cx(styles.icon)}
                    src="../src/assets/icon/the-sun.png"
                    alt="the sun"
                />
            ) : (
                <img
                    onClick={() => handleChangeTheme(THEMES.DARK)}
                    className={cx(styles.icon)}
                    src="../src/assets/icon/the-moon.png"
                    alt="the moon"
                />
            )}
        </div>
    );
};

export default ControlTheme;
