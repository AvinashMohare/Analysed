import classes from "../styles/Dashboard.module.scss";
import Chart from "./chart";
import ClientList from "./clientList";
// import ExerciseFetcher from "./data_fetch/exerciseFetcher";
import Exercises from "./exercises";
import WelcomeCard from "./welcomeCard";

const Dashboard = (props) => {
    return (
        <div className={classes.rootMain}>
            <div className={classes.left}>
                <div className={classes.welcomeCard}>
                    <WelcomeCard />
                </div>

                <div className={classes.graphs}>
                    <div className={classes.leftGraph}></div>
                    <div className={classes.rightGraph}>
                        <Chart />
                    </div>
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
