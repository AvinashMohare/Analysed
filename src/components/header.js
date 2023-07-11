import classes from "../styles/Header.module.scss";
import { MdNotifications } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
const Header = () => {
    return (
        <div className={classes.rootHeader}>
            <div className={classes.greet}>
                <p className={classes.greeting}>Good Morning!</p>

                <div className={classes.time}>
                    <span>02 May 2023</span>
                    <span>09:23 am</span>
                </div>
            </div>

            <div className={classes.functionalities}>
                <div className={classes.search}>
                    <div className={classes.searchbar}>
                        <RiSearchLine
                            className={classes.searchIcon}
                            color="#4371CB80"
                            size={30}
                        />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>

                <div className={classes.notifications}>
                    <MdNotifications size={40} color="#0d30ac" />
                </div>
            </div>
        </div>
    );
};

export default Header;
