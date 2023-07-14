import classes from "../styles/SideBar.module.scss";

import { MdSpaceDashboard, MdChatBubble } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { BiRun } from "react-icons/bi";
import { FaUserGroup } from "react-icons/fa6";

const SideBar = () => {
    return (
        <div className={classes.rootSidebar}>
            <div className={classes.sidebar}>
                <a href="#home">
                    <div className={classes.icon}>
                        <MdSpaceDashboard size={35} color="#0D30AC" />
                    </div>
                    <div className={classes.option}>
                        <span>Dashboard</span>
                    </div>
                </a>
                <a href="#home">
                    <div className={classes.icon}>
                        <FaUserGroup size={35} color="white" />
                    </div>
                    <div className={classes.option}>
                        <span>Clients</span>
                    </div>
                </a>

                <a href="#home">
                    <div className={classes.icon}>
                        <BiRun size={35} color="white" />
                    </div>
                    <div className={classes.option}>
                        <span>Exercises</span>
                    </div>
                </a>

                <a href="#home">
                    <div className={classes.icon}>
                        <MdChatBubble size={35} color="white" />
                    </div>
                    <div className={classes.option}>
                        <span>Chat</span>
                    </div>
                </a>

                <a href="#home">
                    <div className={classes.icon}>
                        <IoMdSettings size={35} color="white" />
                    </div>
                    <div className={classes.option}>
                        <span>Settings</span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default SideBar;
