import React, { useState } from "react";
import AdminTherapistsPage from "./adminTherapistPage";
import AdminTherapistDetails from "./adminTherapistDetails";

const MainAdminTherapists = () => {
    const [selectedTherapist, setSelectedTherapist] = useState(null);
    const [showTherapistDetails, setShowTherapistDetails] = useState(false);

    //To set the selected Therapist
    const handleTherapistSelect = (Therapist) => {
        setSelectedTherapist(Therapist);
        setShowTherapistDetails(true);
    };

    // Function to go back to Therapist list
    const handleBackToList = () => {
        setSelectedTherapist(null);
        setShowTherapistDetails(false);
    };

    return (
        <div>
            {showTherapistDetails ? (
                <AdminTherapistDetails
                    therapist={selectedTherapist}
                    onBackToList={handleBackToList} // Pass the function to go back
                />
            ) : (
                <AdminTherapistsPage
                    onSelectTherapist={handleTherapistSelect}
                />
            )}
        </div>
    );
};

export default MainAdminTherapists;
