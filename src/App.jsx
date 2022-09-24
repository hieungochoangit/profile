import styles from "./App.module.css";
import clsx from "clsx";
import Home from "./pages/home/Home";
import Background from "./component/Background/Background";
import ControlTheme from "./component/Control/ControlTheme";
import AudioEffect from "./component/AudioEffect/AudioEffect";

function App() {
    const cx = clsx.bind(styles);

    return (
        <div className={cx(styles.app)}>
            <Background />
            <ControlTheme />
            <AudioEffect />
            <Home />
        </div>
    );
}

export default App;
