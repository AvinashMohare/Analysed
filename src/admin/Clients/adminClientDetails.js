import React, { useState } from "react";
import "../../pages/Clients/ClientData.scss";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

function calculateAge(birthdateString) {
    // Split the birthdate string into components
    const parts = birthdateString.split("/");
    const day = parseInt(parts[0], 10);

    const month = parts[1];

    const year = parseInt(parts[2], 10);

    // Define the months in order for date calculations
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

    // Get the current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed

    // Calculate the age
    let age = currentYear - year;

    // Adjust age if the birthdate for this year has not occurred yet
    if (
        currentMonth < months.indexOf(month) + 1 ||
        (currentMonth === months.indexOf(month) + 1 &&
            day > currentDate.getDate())
    ) {
        age--;
    }

    return age;
}

const AdminClientDetails = ({ client, onBackToList }) => {
    //Calculating age
    var age = calculateAge(client.userDOB);

    //Delete
    const handleDeleteClient = async () => {
        try {
            // Assuming therapist.id is the unique identifier for the therapist
            const clientDocRef = doc(db, "Users", client.id);

            // Delete the document from Firestore
            await deleteDoc(clientDocRef);

            // Handle successful deletion (e.g., show a message or navigate back)
            console.log("Client deleted successfully");
            onBackToList();
        } catch (error) {
            console.error("Error deleting Client: ", error);
            // Handle the error, show an error message, or take appropriate action
        }
    };

    return (
        <div className="container1">
            <div className="client">
                <img className="img" src="https://via.placeholder.com/70x70" />
                <div className="name">{client.userName}</div>
            </div>

            <div className="details">
                <div className="row">
                    <div className="element">
                        <h1>Email</h1>
                        <input
                            value={client.userEmail}
                            contentEditable="false"
                        />
                    </div>
                    <div className="element">
                        <h1>Phone No.</h1>
                        <input value={client.phone} contentEditable="false" />
                    </div>
                </div>
                <div className="row">
                    <div className="element">
                        <h1>Gender</h1>
                        <input
                            value={client.userGender}
                            contentEditable="false"
                        />
                    </div>
                    <div className="element">
                        <h1>Height</h1>
                        <input
                            value={client.userHeightInCm}
                            contentEditable="false"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="element">
                        <h1>Age</h1>
                        <input value={age} contentEditable="false" />
                    </div>
                    <div className="element">
                        <h1>Weight</h1>
                        <input
                            value={client.userWeight}
                            contentEditable="false"
                        />
                    </div>
                </div>
            </div>

            <div className="buttons">
                <div className="btn1">
                    <button onClick={onBackToList}>Go Back</button>
                </div>
                <div className="btn2">
                    <button onClick={handleDeleteClient}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default AdminClientDetails;
