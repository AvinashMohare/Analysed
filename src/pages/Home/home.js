import classes from "./Home.module.scss";
import Dashboard from "../../components/dashboard";
import Header from "../../components/header";
import Profile from "../../components/profile";
import SideBar from "../../components/sideBar";
import { MdLogout } from "react-icons/md";

import { useState } from "react";

import MainExercises from "../Exercises/mainExercises";

function Home(props) {
    const [selectedOption, setSelectedOption] = useState(0);

    //Map of options to their corresponding components
    const componentMap = {
        0: <Dashboard />,
        1: <>Clients</>,
        2: <MainExercises />,
        3: <>Chat</>,
        4: <>Settings</>,
    };

    const handleOptionClick = (index) => {
        setSelectedOption(index);
    };

    return (
        <div className="App">
            <div className={classes.root}>
                <div className={classes.left}>
                    <div className={classes.profile}>
                        <Profile name={props.name} />
                    </div>

                    <div className={classes.sideBar}>
                        <SideBar handleOptionClick={handleOptionClick} />
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
                        {selectedOption !== null &&
                            componentMap[selectedOption]}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
