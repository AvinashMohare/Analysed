import classes from "../../pages/Home/Home.module.scss";
import Header from "../../components/header";
import Profile from "../components/adminProfile";
import AdminSidebar from "../components/adminSidebar";
import { MdLogout } from "react-icons/md";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import MainAdminExercises from "../Exercises/mainAdminExercises";
import MainAdminClients from "../Clients/mainAdminClients";
import MainAdminTherapists from "../Therapists/mainAdminTherapists";
import AdminDashboard from "./adminDashboard";
import AdminRegistration from "../Admin/adminRegistration";
import Settings from "../Settings/settings";

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
        0: <AdminDashboard />,
        1: <MainAdminClients />,
        2: <MainAdminTherapists />,
        3: <MainAdminExercises />,
        4: <Settings />,
        5: <AdminRegistration />,
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
