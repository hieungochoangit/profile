import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Cart.module.css";
import clsx from "clsx";
import moment from "moment/moment";
import { useSelector } from "react-redux";

const Cart = () => {
    const cx = clsx.bind(styles);

    const [lastLogin, setLastLogin] = useState("");

    const data = useSelector((state) => state.user.social);

    useEffect(() => {
        const date = new Date();
        setLastLogin(moment(date).format("lll"));
    }, []);

    const renderData = () => {
        return (
            data &&
            data.map((item) => {
                if (item.type === "text") {
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
    };

    return (
        <div className={cx(styles.card)}>
            <div className={cx(styles.card_header)}>
                <div className={cx(styles.card_control)}>
                    <div className={cx(styles.card_dot, styles.card_close)}>
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
                    <div className={cx(styles.card_dot, styles.card_hide)}>
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
                    <div className={cx(styles.card_dot, styles.card_fullscreen)}>
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

                <div className={cx(styles.card_author)}>Hieu@Hieuhn-Macbook-Pro</div>
            </div>
            <div className={cx(styles.card_content)}>
                <div>Last login: {lastLogin} on banhCuon</div>
                <div>Hieu-Macbook-Pro:~ Hieu$ echo CONTACT</div>
                {renderData()}
            </div>
        </div>
    );
};

export default Cart;
