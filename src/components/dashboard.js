import classes from "../styles/Dashboard.module.scss";
import ClientList from "./clientList";
import Exercises from "./exercises";
import WelcomeCard from "./welcomeCard";

const Dashboard = () => {
    return (
        <div className={classes.rootMain}>
            <div className={classes.left}>
                <div className={classes.welcomeCard}>
                    <WelcomeCard />
                </div>

                <div className={classes.graphs}>
                    <div className={classes.leftGrapg}></div>
                    <div className={classes.rightGraph}></div>
                </div>

                <div className={classes.clientLists}>
                    <ClientList />
                </div>
            </div>

            <div className={classes.right}>
                <div className={classes.exercises}>
                    <Exercises />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
