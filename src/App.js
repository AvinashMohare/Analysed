import classes from "./styles/App.module.scss";
import Main from "./components/main";
import Header from "./components/header";
import Profile from "./components/profile";
import SideBar from "./components/sideBar";

import { MdLogout } from "react-icons/md";

function App() {
    return (
        <div className="App">
            <div className={classes.root}>
                <div className={classes.left}>
                    <div className={classes.profile}>
                        <Profile />
                    </div>

                    <div className={classes.sideBar}>
                        <SideBar />
                    </div>

                    <div className={classes.logout}>
                        <div className={classes.button}>
                            <div className={classes.icon}>
                                <MdLogout size={35} color="#0D30AC" />
                            </div>
                            <div className={classes.option}>
                                <span>Log Out</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.right}>
                    <div className={classes.top}>
                        <Header />
                    </div>
                    <div className={classes.bottom}>
                        <Main />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
