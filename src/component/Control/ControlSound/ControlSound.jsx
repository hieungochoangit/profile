import React, { createElement, useRef } from "react";
import styles from "./ControlSound.module.css";
import clsx from "clsx";
import { useState } from "react";
import { SOUNDS } from "../../../common/constant";
import { useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";

const ControlSound = () => {
    const cx = clsx.bind(clsx);

    const [audioList, setAudioList] = useState(null);
    const [dataSound, setDataSound] = useState(null);
    const inputRef = useRef(null);
    const soundListRef = useRef(null);

    const handleChangeVolumeSound = (value, sound) => {
        const volume = value / 100;
    };

    useEffect(() => {
        const sounds = Object.values(SOUNDS);
        setDataSound(sounds);
    }, []);

    return (
        <div className={cx(styles.control_sound)}>
            <h3 className={cx(styles.control_sound_title)}>Sounds</h3>
            <div>
                <div className={cx(styles.control_sound_item)}>
                    {dataSound &&
                        dataSound.map((sound, index) => {
                            return (
                                <div key={index} className={cx(styles.control_sound_line, index)}>
                                    <div>{sound.name}</div>
                                    <div>
                                        <input
                                            ref={inputRef}
                                            onChange={(e) => handleChangeVolumeSound(e.target.value, sound)}
                                            min={0}
                                            max={100}
                                            type="range"
                                            defaultValue={0}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default ControlSound;
