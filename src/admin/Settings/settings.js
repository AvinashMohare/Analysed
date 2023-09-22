import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";

function Settings() {
    const [adminInfo, setAdminInfo] = useState({
        email: "", // Add an email field
        currentPassword: "",
        newPassword: "",
    });

    const [errorMessage, setErrorMessage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAdminInfo({ ...adminInfo, [name]: value });
    };

    const handleUpdatePassword = async (e) => {
        e.preventDefault();
    
        try {
            // Check if the authenticated admin exists in the "Admins" collection
            const adminsRef = collection(db, "Admins");
            const q = query(adminsRef, where("email", "==", adminInfo.email));
            const querySnapshot = await getDocs(q);
    
            if (querySnapshot.empty) {
                setErrorMessage("Admin not found.");
            } else {
                const adminData = querySnapshot.docs[0].data();
                const passwordInFirebase = adminData.password;
    
                // Compare the current password with the one stored in Firebase
                if (adminInfo.currentPassword === passwordInFirebase) {
                    // Update the password
                    const adminDocRef = doc(db, "Admins", querySnapshot.docs[0].id);
                    await setDoc(adminDocRef, { password: adminInfo.newPassword }, { merge: true });
    
                    console.log("Password updated successfully!");
                    // Redirect to admin panel or dashboard
                } else {
                    setErrorMessage("Invalid email or password.");
                }
            }
        } catch (error) {
            console.error("Error updating password: ", error);
            setErrorMessage("Invalid email or password.");
        }
    };
    

    return (
        <div>
            <h2>Update Password</h2>
            <form onSubmit={handleUpdatePassword}>
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
                    <label>Current Password:</label>
                    <input
                        type="password"
                        name="currentPassword"
                        value={adminInfo.currentPassword}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>New Password:</label>
                    <input
                        type="password"
                        name="newPassword"
                        value={adminInfo.newPassword}
                        onChange={handleInputChange}
                    />
                </div>
                {errorMessage && <p className="error">{errorMessage}</p>}
                <button type="submit">Update Password</button>
            </form>
        </div>
    );
}

export default Settings;
