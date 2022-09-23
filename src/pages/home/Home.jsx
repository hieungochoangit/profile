import React from "react";
import styles from "./Home.module.css";
import clsx from "clsx";

const Home = () => {
    const cx = clsx.bind(styles);
    return <div className={cx(styles.home)}>Home</div>;
};

export default Home;
