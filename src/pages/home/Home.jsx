import React from "react";
import styles from "./Home.module.css";
import clsx from "clsx";
import Cart from "../../component/Card/Cart";

const Home = () => {
    const cx = clsx.bind(styles);
    return (
        <div className={cx(styles.home)}>
            <Cart />
        </div>
    );
};

export default Home;
