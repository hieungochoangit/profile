import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styles from "./Cart.module.css";
import clsx from "clsx";
import moment from "moment/moment";
import { useSelector } from "react-redux";
import CardLineText from "./CardLineText/CardLineText";

const Cart = () => {
    const cx = clsx.bind(styles);

    const [lastLogin, setLastLogin] = useState("");
    const [isFullscreen, setIsFullscreen] = useState(false);
    const cardRef = useRef(null);

    const socialNetwork = useSelector((state) => state.user.social);
    const { overviewText, database, framework, languageAndscripting, other } = useSelector(
        (state) => state.user.overview
    );
    const skills = useSelector((state) => state.user.skills);

    useEffect(() => {
        const date = new Date();
        setLastLogin(moment(date).format("lll"));

        console.log(socialNetwork);
    }, []);

    const renderData = (data, isLink = false) => {
        if (isLink) {
            return (
                data &&
                data.map((item) => {
                    if (data.type === "text") {
                        return <div key={item.id}>{item.text}</div>;
                    } else {
                        return (
                            <div key={item.id}>
                                <a href={item.url}>{item.text}</a>
                            </div>
                        );
                    }
                })
            );
        } else {
            return (
                data &&
                data.map((item, index) => {
                    return <div key={index}>{item}</div>;
                })
            );
        }
    };

    const handleOnClickButtonClose = () => {
        cardRef.current.remove();
    };

    const handleOnClickButtonFullscreen = () => {
        if (isFullscreen) {
            cardRef.current.style.width = "1000px";
            cardRef.current.style.height = "500px";
        } else {
            cardRef.current.style.width = "100vw";
            cardRef.current.style.height = "100vh";
        }
        setIsFullscreen(!isFullscreen);
    };

    const handleOnClickButtonHideCard = () => {
        console.log(1);
    };

    return (
        <div ref={cardRef} className={cx(styles.card)}>
            <div className={cx(styles.card_header)}>
                <div className={cx(styles.card_control)}>
                    <div onClick={() => handleOnClickButtonClose()} className={cx(styles.card_dot, styles.card_close)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-x"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                    <div
                        onClick={() => handleOnClickButtonHideCard()}
                        className={cx(styles.card_dot, styles.card_hide)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-minus"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </div>
                    <div
                        onClick={() => handleOnClickButtonFullscreen()}
                        className={cx(styles.card_dot, styles.card_fullscreen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-arrows-double-sw-ne"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M14 3l-11 11"></path>
                            <path d="M3 10v4h4"></path>
                            <path d="M17 10h4v4"></path>
                            <path d="M10 21l11 -11"></path>
                        </svg>
                    </div>
                </div>

                <div className={cx(styles.card_author)}>Hieu@hieungochoang-Macbook-Pro</div>
            </div>
            <div className={cx(styles.card_content)}>
                <CardLineText>Last login: {lastLogin} on ttys000</CardLineText>

                <CardLineText>
                    <span className={cx("primary-color")}>Hieu@hieungochoang-Macbook-Pro:~ Hieu$</span> echo CONTACT
                    {renderData(socialNetwork, true)}
                </CardLineText>

                <CardLineText>
                    <span className={cx("primary-color")}>Hieu@hieungochoang-Macbook-Pro:~ Hieu$</span> echo OVERVIEW
                    <div>{overviewText}</div>
                </CardLineText>

                <CardLineText>
                    <span className={cx("primary-color")}>Hieu@hieungochoang-Macbook-Pro:~ Hieu$</span> echo LANGUAGE &&
                    SCRIPTING
                    {renderData(languageAndscripting)}
                </CardLineText>

                <CardLineText>
                    <span className={cx("primary-color")}>Hieu@hieungochoang-Macbook-Pro:~ Hieu$</span> echo FRAMEWORK
                    {renderData(framework)}
                </CardLineText>

                <CardLineText>
                    <span className={cx("primary-color")}>Hieu@hieungochoang-Macbook-Pro:~ Hieu$</span> echo DATABASE
                    {renderData(database)}
                </CardLineText>

                <CardLineText>
                    <span className={cx("primary-color")}>Hieu@hieungochoang-Macbook-Pro:~ Hieu$</span> echo OTHER
                    {renderData(other)}
                </CardLineText>
            </div>
        </div>
    );
};

export default Cart;
