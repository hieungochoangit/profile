import styles from "./App.module.css";
import clsx from "clsx";
import Home from "./pages/home/Home";
import Background from "./component/Background/Background";
import ControlTheme from "./component/Control/ControlTheme";

function App() {
    const cx = clsx.bind(styles);

    return (
        <div className={cx(styles.app)}>
            <Background />
            <ControlTheme />
            <Home />
        </div>
    );
}

export default App;
