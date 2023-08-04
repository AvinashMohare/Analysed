import React, { useState } from "react";
import styles from "./ClientsRequest.module.scss";
import ClientRequestFetcher from "../../components/data_fetch/clientRequestFetcher"; // Adjust the path
import {
    collection,
    query,
    where,
    getDocs,
    updateDoc,
    doc,
} from "firebase/firestore";
import { db } from "../../firebase";

const ClientsRequest = () => {
    const [clients, setClients] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);

    const handleClientsFetched = (fetchedClients) => {
        setClients(fetchedClients);
    };

    const findDocumentId = async (userID) => {
        try {
            const usersRef = collection(db, "Users");
            const q = query(usersRef, where("userID", "==", userID));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const userDocRef = querySnapshot.docs[0].ref;
                return userDocRef.id; // Get the document ID
            } else {
                console.log("Client document not found for userID", userID);
                return null;
            }
        } catch (error) {
            console.error("Error finding document ID:", error);
            return null;
        }
    };

    const handleAcceptClient = async (userID) => {
        const documentId = await findDocumentId(userID);
        if (documentId) {
            try {
                const userDocRef = doc(db, "Users", documentId);
                await updateDoc(userDocRef, { verified: true });
                console.log("Client accepted successfully!");
                setRefreshKey((prevKey) => prevKey + 1);
            } catch (error) {
                console.error("Error accepting client:", error);
            }
        }
    };

    const handleDeclineClient = async (userID) => {
        const documentId = await findDocumentId(userID);
        if (documentId) {
            try {
                const userDocRef = doc(db, "Users", documentId);
                await updateDoc(userDocRef, { referralCode: "" });
                console.log("Client declined successfully!");
                setRefreshKey((prevKey) => prevKey + 1);
            } catch (error) {
                console.error("Error declining client:", error);
            }
        }
    };

    return (
        <div className={styles.rootExercises}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <p>Requests</p>
                </div>

                <div className={styles.buttons}>Add New</div>
            </div>

            <div className={styles.container}>
                {/* Render the ClientFetcher component to fetch data */}
                <ClientRequestFetcher
                    key={refreshKey}
                    onClientsFetched={handleClientsFetched}
                />

                {/* Render the clients */}
                <div className={styles.listContainer}>
                    {clients.map((client) => (
                        <div className={styles.card} key={client.userID}>
                            <div className={styles.imageContainer}>
                                <img
                                    className={styles.profilePicture}
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=8"
                                    alt={client.userName}
                                />
                            </div>

                            <div className={styles.textContainer}>
                                <div className={styles.username}>
                                    <p>{client.userName}</p>
                                </div>

                                <div className={styles.buttons}>
                                    <button
                                        onClick={() =>
                                            handleAcceptClient(client.userID)
                                        }
                                    >
                                        Accept
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDeclineClient(client.userID)
                                        }
                                    >
                                        Decline
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientsRequest;
