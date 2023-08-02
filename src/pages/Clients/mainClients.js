import React, { useState } from "react";
import ClientsPage from "./clientsPage";
import ClientDetails from "./clientDetails";

const MainClients = () => {
    const [selectedClient, setSelectedClient] = useState(null);
    const [showClientDetails, setShowClientDetails] = useState(false);

    //To set the selected Client
    const handleClientSelect = (client) => {
        setSelectedClient(client);
        setShowClientDetails(true);
    };

    // Function to go back to client list
    const handleBackToList = () => {
        setSelectedClient(null);
        setShowClientDetails(false);
    };

    return (
        <div>
            {showClientDetails ? (
                <ClientDetails
                    client={selectedClient}
                    onBackToList={handleBackToList} // Pass the function to go back
                />
            ) : (
                <ClientsPage onSelectClient={handleClientSelect} />
            )}
        </div>
    );
};

export default MainClients;
