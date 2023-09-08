import React, { useState } from "react";
import DataFetcher from "../components/data_fetch/datafetcher";

const AdminDashboard = () => {
    const [exerciseCount, setExerciseCount] = useState(0);
    const [clientCount, setClientCount] = useState(0);
    const [physiotherapistCount, setPhysiotherapistCount] = useState(0);

    const onDataFetched = (data, collectionName) => {
        if (collectionName === "exercises") {
            setExerciseCount(data.length);
        } else if (collectionName === "Users") {
            setClientCount(data.length);
        } else if (collectionName === "physiotherapist") {
            setPhysiotherapistCount(data.length);
        }
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
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

            <div>
                <h2>Total Exercises: {exerciseCount}</h2>
            </div>

            <div>
                <h2>Total Clients: {clientCount}</h2>
            </div>

            <div>
                <h2>Total Therapist: {physiotherapistCount}</h2>
            </div>
        </div>
    );
};

export default AdminDashboard;
