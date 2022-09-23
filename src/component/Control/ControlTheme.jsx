import React from "react";
import styles from "./ControlTheme.module.css";
import clsx from "clsx";

import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../pages/home/HomeSlice";

const ControlTheme = () => {
    const cx = clsx.bind(styles);
    const dispatch = useDispatch();

    const theme = useSelector((state) => state.home.theme.name);

    const handleChangeTheme = (status) => {
        dispatch(setTheme(status));
    };

    return (
        <div className={cx(styles.control)}>
            {theme === "dark" ? (
                <img
                    onClick={() => handleChangeTheme("light")}
                    className={cx(styles.icon)}
                    src="../src/assets/icon/the-sun.png"
                    alt="the sun"
                />
            ) : (
                <img
                    onClick={() => handleChangeTheme("dark")}
                    className={cx(styles.icon)}
                    src="../src/assets/icon/the-moon.png"
                    alt="the moon"
                />
            )}
        </div>
    );
};

export default ControlTheme;
