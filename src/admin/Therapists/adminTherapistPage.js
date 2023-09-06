import React, { useState } from "react";
import styles from "../../pages/Clients/ClientsPage.module.scss";
import DataFetcher from "../components/data_fetch/datafetcher";

const AdminTherapistsPage = ({ onSelectTherapist }) => {
    const [therapists, setTherapists] = useState([]);

    const handleTherapistFetched = (fetchedTherapists) => {
        setTherapists(fetchedTherapists);
    };

    return (
        <div className={styles.rootClients}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <p>Therapists</p>
                </div>
            </div>

            <div className={styles.container}>
                {/* Render the ClientFetcher component to fetch data */}
                <DataFetcher
                    collectionName="physiotherapist"
                    onDataFetched={handleTherapistFetched}
                />

                {/* Render the clients */}
                <div className={styles.listContainer}>
                    {therapists.map((therapist) => (
                        <div className={styles.card} key={therapist.userID}>
                            <div className={styles.imageContainer}>
                                <img
                                    className={styles.profilePicture}
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=8"
                                    alt={therapist.name}
                                />
                            </div>

                            <div className={styles.textContainer}>
                                <div className={styles.username}>
                                    <p>{therapist.name}</p>
                                </div>

                                <div
                                    className={styles.buttons}
                                    onClick={() => onSelectTherapist(therapist)}
                                >
                                    <p>View</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminTherapistsPage;
