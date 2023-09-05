import classes from "../../pages/Home/Home.module.scss";
import Header from "../../components/header";
import Profile from "../../components/profile";
import AdminSidebar from "../components/adminSidebar";
import { MdLogout } from "react-icons/md";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import AdminExercises from "../Exercises/adminExercises";
import MainAdminExercises from "../Exercises/mainAdminExercises";

function AdminHome(props) {
    //For signout option
    const navigate = useNavigate();

    // const handleLogout = () => {
    //     signOut(auth)
    //         .then(() => {
    //             // Logout successful, navigate to the login page
    //             navigate("/login"); // Assuming your login page route is '/login'
    //         })
    //         .catch((error) => {
    //             // Handle any errors that occurred during logout
    //             console.log("Logout Error:", error);
    //         });
    // };

    //For sidebar
    const [selectedOption, setSelectedOption] = useState(0);
    // Map of options to their corresponding components
    const componentMap = {
        0: <>Dashboard</>,
        1: <>Clients</>,
        2: <MainAdminExercises />,
        3: <>Settings</>,
        4: <>Admin</>,
    };

    const handleOptionClick = (index) => {
        setSelectedOption(index);
    };

    return (
        <div className="App">
            <div className={classes.root}>
                <div className={classes.left}>
                    <div className={classes.profile}>
                        <Profile />
                    </div>

                    <div className={classes.sideBar}>
                        <AdminSidebar handleOptionClick={handleOptionClick} />
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

export default AdminHome;
