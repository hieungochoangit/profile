import React from "react";
import styles from "./AudioEffect.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { THEMES, SOUNDS } from "../../common/constant";

const AudioEffect = () => {
    const cx = clsx.bind(styles);

    const theme = useSelector((state) => state.home.theme.name);

    return (
        <div className={cx(styles.audio)}>
            {theme &&
                theme === THEMES.RAIN &&
                SOUNDS.rain.map((sound, index) => {
                    return <audio key={index} autoPlay loop src={sound}></audio>;
                })}
        </div>
    );
};

export default AudioEffect;
