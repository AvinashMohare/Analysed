import classes from "../../styles/SideBar.module.scss";
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { BiRun } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

import { FaUserGroup } from "react-icons/fa6";

import { useState } from "react";

const AdminSidebar = ({ handleOptionClick }) => {
    const [selectedOption, setSelectedOption] = useState(0);

    const handleItemClick = (index) => {
        setSelectedOption(index);
        handleOptionClick(index); // Notify the Home component of the selected option
    };

    //Array of items
    const sidebarItems = [
        {
            icon: (
                <MdSpaceDashboard
                    size={35}
                    color={selectedOption === 0 ? "#0D30AC" : "white"}
                />
            ),
            text: "Dashboard",
        },
        {
            icon: (
                <FaUserGroup
                    size={35}
                    color={selectedOption === 1 ? "#0D30AC" : "white"}
                />
            ),
            text: "Clients",
        },
        {
            icon: (
                <BiRun
                    size={35}
                    color={selectedOption === 2 ? "#0D30AC" : "white"}
                />
            ),
            text: "Exercises",
        },

        {
            icon: (
                <IoMdSettings
                    size={35}
                    color={selectedOption === 3 ? "#0D30AC" : "white"}
                />
            ),
            text: "Settings",
        },
        {
            icon: (
                <BsFillPersonFill
                    size={35}
                    color={selectedOption === 4 ? "#0D30AC" : "white"}
                />
            ),
            text: "Admin",
        },
    ];

    return (
        <div className={classes.rootSidebar}>
            <div className={classes.sidebar}>
                {sidebarItems.map((item, index) => (
                    <a
                        href={item.link}
                        key={index}
                        onClick={() => handleItemClick(index)}
                        className={
                            index === selectedOption
                                ? classes.selectedOption
                                : ""
                        }
                    >
                        <div className={classes.icon}>{item.icon}</div>
                        <div className={classes.option}>
                            <span>{item.text}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default AdminSidebar;
