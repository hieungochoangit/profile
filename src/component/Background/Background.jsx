import styles from "./Background.module.css";
import clsx from "clsx";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const Background = () => {
    const cx = clsx.bind(styles);

    const theme = useSelector((state) => state.home.theme.name);
    const [mode, setMode] = useState("dark");

    useEffect(() => {
        setMode(theme);
    }, [theme]);

    return (
        <>
            <video className={cx(styles.background, mode === "dark" ? "" : styles.hide)} autoPlay loop muted>
                <source
                    src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/honolulu/Honolulu+Balcony+Night.mp4"
                    type="video/mp4"
                />
            </video>
            <video className={cx(styles.background, mode === "light" ? "" : styles.hide)} autoPlay loop muted>
                <source
                    src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/honolulu/Honolulu+Balcony+Day.mp4"
                    type="video/mp4"
                />
            </video>
            <video className={cx(styles.background, mode === "rain" ? "" : styles.hide)} autoPlay loop muted>
                <source
                    src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/honolulu/Honolulu+Balcony+Rainy+Day.mp4"
                    type="video/mp4"
                />
            </video>
        </>
    );
};

export default Background;
