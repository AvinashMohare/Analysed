import React, { useState, useEffect } from "react";
import DataFetcher from "../components/data_fetch/datafetcher";
import ClientChart from "../charts/clientChart";
import PhysiotherapistChart from "../charts/physiotherapistChart";
import classes from "./AdminDashboard.module.scss";

const AdminDashboard = () => {
    const [exerciseCount, setExerciseCount] = useState(0);
    const [clientCount, setClientCount] = useState(0);
    const [physiotherapistCount, setPhysiotherapistCount] = useState(0);

    // Store fetched data in state
    const [exercisesData, setExercisesData] = useState([]);
    const [usersData, setUsersData] = useState([]);
    const [physiotherapistData, setPhysiotherapistData] = useState([]);

    // Store client creation count by month
    const [clientCreationByMonth, setClientCreationByMonth] = useState(
        new Array(12).fill(0)
    );

    // Store physiotherapist creation count by month
    const [physiotherapistCreationByMonth, setPhysiotherapistCreationByMonth] =
        useState(new Array(12).fill(0));

    const onDataFetched = (data, collectionName) => {
        if (collectionName === "exercises") {
            setExerciseCount(data.length);
            setExercisesData(data);
        } else if (collectionName === "Users") {
            setClientCount(data.length);
            setUsersData(data);

            // Calculate client creation count by month
            const creationCounts = new Array(12).fill(0);
            data.forEach((user) => {
                const createdDate = new Date(user.accCreated);
                const month = createdDate.getMonth();
                creationCounts[month]++;
            });
            setClientCreationByMonth(creationCounts);
        } else if (collectionName === "physiotherapist") {
            setPhysiotherapistCount(data.length);
            setPhysiotherapistData(data);

            // Calculate physiotherapist creation count by month
            const creationCounts = new Array(12).fill(0);
            data.forEach((physiotherapist) => {
                const createdDate = new Date(physiotherapist.accCreated);
                const month = createdDate.getMonth();
                creationCounts[month]++;
            });
            setPhysiotherapistCreationByMonth(creationCounts);
        }
    };

    return (
        <div className={classes.dashboard}>
            <DataFetcher
                collectionName="exercises"
                onDataFetched={(data) => onDataFetched(data, "exercises")}
            />
            <DataFetcher
                collectionName="Users"
                onDataFetched={(data) => onDataFetched(data, "Users")}
            />
            <DataFetcher
                collectionName="physiotherapist"
                onDataFetched={(data) => onDataFetched(data, "physiotherapist")}
            />

            <div className={classes.stats}>
                <div className={classes.statsContainer}>
                    <div className={classes.card}>
                        <div className={classes.circular}>
                            <div className={classes.content}>
                                <p className={classes.count}>{clientCount}</p>
                                <p className={classes.field}>Clients</p>
                            </div>
                        </div>
                    </div>

                    <div className={classes.cardPhysio}>
                        <div className={classes.smallContainer}>
                            <div className={classes.circular}>
                                <div className={classes.content}>
                                    <p className={classes.count}>
                                        {physiotherapistCount}
                                    </p>
                                </div>
                            </div>
                            <p className={classes.fieldPhysio}>
                                Physical Therapists
                            </p>
                        </div>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.circular}>
                            <div className={classes.content}>
                                <p className={classes.count}>{exerciseCount}</p>
                                <p className={classes.field}>Exercises</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.clientChart}>
                <ClientChart
                    months={getMonthNames()}
                    physiotherapistCounts={clientCreationByMonth}
                />
            </div>
            <div className={classes.physioChart}>
                <PhysiotherapistChart
                    months={getMonthNames()}
                    physiotherapistCounts={physiotherapistCreationByMonth}
                />
            </div>
        </div>
    );
};

function getMonthNames() {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return months.map((month) => month.substring(0, 3));
}

export default AdminDashboard;
