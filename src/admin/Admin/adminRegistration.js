import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Import your Firebase configuration
import classes from "../Settings/Settings.module.scss";

function AdminRegistration() {
    const [adminInfo, setAdminInfo] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAdminInfo({ ...adminInfo, [name]: value });
    };

    const handleRegistration = async (e) => {
        e.preventDefault();

        try {
            // Check if email and password fields are empty
            if (!adminInfo.email || !adminInfo.password) {
                setError("Email and password must not be empty.");
                return;
            }

            // Add a new document to the "Admins" collection
            const adminRef = collection(db, "Admins");
            const newAdminDoc = await addDoc(adminRef, adminInfo);

            // console.log("Admin registered with ID: ", newAdminDoc.id);
            // Optionally, you can redirect the admin to the login page or admin panel.

            // Clear the form after successful registration
            setAdminInfo({
                email: "",
                password: "",
            });

            // Clear any previous errors
            setError(null);
        } catch (error) {
            // console.error("Error registering admin: ", error);
            setError("Error registering admin. Please try again later.");
        }
    };

    return (
        <div className={classes.settings}>
            <div className={classes.header}>
                <p>Admin Registration</p>
            </div>

            <div className={classes.container}>
                <form onSubmit={handleRegistration}>
                    <div className={classes.field}>
                        <label className={classes.fieldName}>Email</label>
                        <input
                            type="email"
                            className={classes.fieldInput}
                            name="email"
                            value={adminInfo.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={classes.field}>
                        <label className={classes.fieldName}>Password</label>
                        <input
                            className={classes.fieldInput}
                            type="password"
                            name="password"
                            value={adminInfo.password}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default AdminRegistration;
