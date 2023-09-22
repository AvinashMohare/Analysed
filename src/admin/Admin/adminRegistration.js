import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Import your Firebase configuration

function AdminRegistration() {
    const [adminInfo, setAdminInfo] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAdminInfo({ ...adminInfo, [name]: value });
    };

    const handleRegistration = async (e) => {
        e.preventDefault();

        try {
            // Add a new document to the "Admins" collection
            const adminRef = collection(db, "Admins");
            const newAdminDoc = await addDoc(adminRef, adminInfo);

            console.log("Admin registered with ID: ", newAdminDoc.id);
            // Optionally, you can redirect the admin to the login page or admin panel.
        } catch (error) {
            console.error("Error registering admin: ", error);
        }
    };

    return (
        <div>
            <h2>Admin Registration</h2>
            <form onSubmit={handleRegistration}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={adminInfo.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={adminInfo.password}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default AdminRegistration;
