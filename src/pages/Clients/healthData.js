import React, { useEffect, useState } from "react";
import { db } from "../../firebase"; // Import your Firebase Firestore configuration
import { collection, getDocs } from "firebase/firestore";
import PropTypes from "prop-types";

import classes from "./HealthData.module.scss";

const HealthDataComponent = ({ docId }) => {
    const [latestHeartRate, setLatestHeartRate] = useState(null);
    const [latestUserWeight, setLatestUserWeight] = useState(null);
    const [latestSuprior, setLatestSuprior] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("health Data");
        async function fetchLatestData() {
            try {
                const heartRateRef = collection(
                    db,
                    "Users",
                    docId,
                    "HeartRateTracker"
                );
                const heartRateSnapshot = await getDocs(heartRateRef);

                if (!heartRateSnapshot.empty) {
                    const heartRateData = heartRateSnapshot.docs.map((doc) =>
                        doc.data()
                    );
                    const sortedHeartRateData = sortData(heartRateData);

                    const weightRef = collection(
                        db,
                        "Users",
                        docId,
                        "WeightTracker"
                    );
                    const weightSnapshot = await getDocs(weightRef);
                    const weightData = weightSnapshot.docs.map((doc) =>
                        doc.data()
                    );
                    const sortedWeightData = sortData(weightData);

                    const vo2Ref = collection(db, "Users", docId, "VO2Tracker");
                    const vo2Snapshot = await getDocs(vo2Ref);
                    const vo2Data = vo2Snapshot.docs.map((doc) => doc.data());
                    const sortedVO2Data = sortData(vo2Data);

                    setLatestHeartRate(sortedHeartRateData[0]?.avgHeartRate);
                    setLatestUserWeight(sortedWeightData[0]?.userWeight);
                    setLatestSuprior(sortedVO2Data[0]?.suprior);
                } else {
                    setError("No health data found.");
                }
            } catch (error) {
                setError("Error fetching latest health data.");
                console.error("Error fetching latest health data:", error);
            }
        }

        fetchLatestData();
    }, [docId]);

    const sortData = (data) => {
        return data.sort(
            (a, b) => new Date(b.dateSubmitted) - new Date(a.dateSubmitted)
        );
    };

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }

    return (
        <div className={classes.rootHealthData}>
            <div className={classes.heading}>
                <p>Activity Reports</p>
            </div>

            <div className={classes.graphs}>
                <div className={classes.heartBeat}>
                    <div className={classes.head}>
                        <p>Heartbeat</p>
                    </div>
                    <div className={classes.pieChart}>
                        <div className={classes.inner}>
                            <p className={classes.data}>
                                {latestHeartRate ?? "N/A"}
                            </p>
                            <p className={classes.tag}>bpm</p>
                        </div>
                    </div>
                </div>

                <div className={classes.weight}>
                    <div className={classes.head}>
                        <p>Weight</p>
                    </div>
                    <div className={classes.pieChart}>
                        <div className={classes.inner}>
                            <p className={classes.data}>
                                {latestUserWeight
                                    ? parseFloat(latestUserWeight).toFixed(0)
                                    : "N/A"}
                            </p>
                            <p className={classes.tag}>Kg</p>
                        </div>
                    </div>
                </div>

                <div className={classes.weight}>
                    <div className={classes.head}>
                        <p>VO2</p>
                    </div>
                    <div className={classes.pieChart}>
                        <div className={classes.inner}>
                            <p className={classes.data}>
                                <p>{latestSuprior ?? "N/A"}</p>
                            </p>
                            <p className={classes.tag}>Superior</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

HealthDataComponent.propTypes = {
    docId: PropTypes.string.isRequired,
};

export default HealthDataComponent;
