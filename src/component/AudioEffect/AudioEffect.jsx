import React from "react";
import styles from "./AudioEffect.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { THEMES, SOUNDS } from "../../common/constant";
import { useEffect, useState } from "react";

const AudioEffect = () => {
    const cx = clsx.bind(styles);

    const theme = useSelector((state) => state.home.theme.name);
    const [dataSound, setDataSound] = useState(null);

    useEffect(() => {
        const sounds = Object.values(SOUNDS);
        setDataSound(sounds);
    }, []);

    return (
        <div className={cx(styles.audio)}>
            <>
                {dataSound &&
                    dataSound.map((sound, index) => {
                        return <audio key={index} autoPlay loop src={sound.url} className={sound.type}></audio>;
                    })}
            </>
        </div>
    );
};

export default AudioEffect;
