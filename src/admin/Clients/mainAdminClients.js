import React, { useState } from "react";
import AdminClientsPage from "./adminClientsPage";
import AdminClientDetails from "./adminClientDetails";

const MainAdminClients = () => {
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
                <AdminClientDetails
                    client={selectedClient}
                    onBackToList={handleBackToList} // Pass the function to go back
                />
            ) : (
                <AdminClientsPage onSelectClient={handleClientSelect} />
            )}
        </div>
    );
};

export default MainAdminClients;
