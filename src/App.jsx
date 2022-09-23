import styles from "./App.module.css";
import clsx from "clsx";

function App() {
    const cx = clsx.bind(styles);

    return (
        <div className="app">
            <h1 className={cx(styles.test)}>qweqwe</h1>
        </div>
    );
}

export default App;
