import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase"; // Import your Firebase configuration

function DataFetcher({ collectionName, onDataFetched }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("Admin Exercise Fetcher ");
        const fetchData = async () => {
            try {
                const dataRef = collection(db, collectionName);
                const querySnapshot = await getDocs(dataRef);

                const fetchedData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setData(fetchedData);
                onDataFetched(fetchedData);
            } catch (error) {
                console.error(
                    `Error fetching data from "${collectionName}":`,
                    error
                );
            }
        };

        fetchData();
    }, []);

    return null;
}

export default DataFetcher;
