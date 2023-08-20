import React, { useState } from "react";
import ClientFetcher from "../../components/data_fetch/clientFetcher";
import Chats from "./chats";
import { useAuth } from "../../components/data_fetch/authProvider";

const MainChats = () => {
    const user = useAuth();
    const [selectedClient, setSelectedClient] = useState(null);
    const [clients, setClients] = useState([]); // State to hold the list of clients
    const [showChat, setShowChat] = useState(false);

    // console.log(user.uID);

    const handleClientSelected = (client) => {
        setSelectedClient(client);
        setShowChat(true);
    };

    // Function to set the list of clients when fetched by ClientFetcher
    const handleClientsFetched = (fetchedClients) => {
        setClients(fetchedClients);
    };

    const handleBackToClientList = () => {
        setSelectedClient(null); // Clear the selectedClient to go back to the client list
        setShowChat(false);
    };

    return (
        <div>
            {showChat ? (
                <Chats
                    user={user}
                    client={selectedClient}
                    onBack={handleBackToClientList}
                />
            ) : (
                <>
                    <ClientFetcher onClientsFetched={handleClientsFetched} />

                    <h1>Client List</h1>
                    <ul>
                        {clients.map((client, index) => (
                            <li key={index}>
                                {client.userName}
                                <button
                                    onClick={() => handleClientSelected(client)}
                                >
                                    Chat
                                </button>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default MainChats;
