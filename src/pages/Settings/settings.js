import "./Settings.scss";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/data_fetch/authProvider";
import { onSnapshot, query, collection, where } from "firebase/firestore";
import { updateDoc, doc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { signOut } from "firebase/auth";
import ResetPassword from "./resetPassword";

const Settings = () => {
    const user = useAuth();

    const [showResetPassword, setShowResetPassword] = useState(false);
    const [userData, setUserData] = useState(null);
    const [editedUserData, setEditedUserData] = useState({});

    const [userDocId, setUserDocId] = useState(null);

    useEffect(() => {
        console.log("Settings using");
        const fetchUserData = async () => {
            if (!user) return; // Exit if user is not authenticated

            const userId = user.uid;
            const userDataRef = collection(db, "physiotherapist");
            const userQuery = query(
                userDataRef,
                where("physiotherapistId", "==", userId)
            );

            const unsubscribe = onSnapshot(userQuery, (querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => doc.data());
                const userDocData = data[0];
                setUserData(userDocData);
                setEditedUserData(userDocData);
                setUserDocId(querySnapshot.docs[0].id);
            });

            return () => unsubscribe();
        };

        fetchUserData();
    }, [user]);

    const handleCancel = () => {
        console.log("Cancel");
        setEditedUserData(userData);
    };

    const handleSave = async () => {
        try {
            console.log("here");
            if (!userDocId) return; // No user doc id available

            const userDocRef = doc(db, "physiotherapist", userDocId);

            await updateDoc(userDocRef, editedUserData);
            console.log("Profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    const handleFieldChange = (fieldName, value) => {
        setEditedUserData({
            ...editedUserData,
            [fieldName]: value,
        });
    };

    //Logout handler
    const navigate = useNavigate();
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // Logout successful, navigate to the login page
                navigate("/login"); // Assuming your login page route is '/login'
            })
            .catch((error) => {
                // Handle any errors that occurred during logout
                console.log("Logout Error:", error);
            });
    };

    //Reset Password
    const handleResetPasswordClick = () => {
        setShowResetPassword(!showResetPassword);
    };

    return (
        <div className="cont">
            {showResetPassword ? (
                <ResetPassword onSubmit={handleResetPasswordClick} />
            ) : (
                <>
                    <div className="Reset">
                        <button onClick={handleResetPasswordClick}>
                            RESET PASSWORD
                        </button>
                    </div>

                    <div className="box">
                        <div className="banner">
                            <div class="rectangle">
                                <div className="referral">
                                    <p>{editedUserData.referralCode}</p>
                                </div>
                            </div>
                            <div className="profile">
                                <div>
                                    <img
                                        className="profileimage"
                                        src={editedUserData.profileImageURL}
                                    />
                                </div>

                                <div className="profiletxt">
                                    <h1 className="profilename">Profile</h1>
                                    <h2 className="profilesubtext">
                                        Update your photo and personal details
                                    </h2>
                                </div>
                            </div>
                            <div className="profilebtns">
                                <div className="cnclbtn">
                                    <button onClick={handleCancel}>
                                        Cancel
                                    </button>
                                </div>
                                <div className="sbmtbtn">
                                    <button onClick={handleSave}>Save</button>
                                </div>
                            </div>
                        </div>

                        <div className="details">
                            <div className="row2">
                                <div className="label1">User ID:</div>
                                <div className="input1">
                                    <input
                                        value={
                                            editedUserData.username ||
                                            "Loading..."
                                        }
                                        onChange={(e) =>
                                            console.log("Dont Touch")
                                        }
                                    />
                                </div>
                                <div className="label2">User Name:</div>
                                <div className="input2">
                                    <input
                                        value={editedUserData.username || ""}
                                        onChange={(e) =>
                                            handleFieldChange(
                                                "username",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            </div>
                            <div className="row1">
                                <div className="label3">Name:</div>
                                <div className="input3">
                                    <input
                                        value={editedUserData.name || ""}
                                        onChange={(e) =>
                                            handleFieldChange(
                                                "name",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            </div>
                            <div className="row2">
                                <div className="label1">Email:</div>
                                <div className="input1">
                                    <input
                                        value={editedUserData.email || ""}
                                        onChange={(e) =>
                                            handleFieldChange(
                                                "email",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div className="label2">Contact.No:</div>
                                <div className="input2">
                                    <input
                                        value={editedUserData.contactNo || ""}
                                        onChange={(e) =>
                                            handleFieldChange(
                                                "contactNo",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            </div>
                            <div className="row2">
                                <div className="label1">Gender:</div>
                                <div className="input1">
                                    <input
                                        value={editedUserData.gender || ""}
                                        onChange={(e) =>
                                            handleFieldChange(
                                                "gender",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div className="label2">Age:</div>
                                <div className="ageinput">
                                    <input
                                        value={editedUserData.age || ""}
                                        onChange={(e) =>
                                            handleFieldChange(
                                                "age",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            </div>
                            <div className="row1">
                                <div className="label3">Experience:</div>
                                <div className="input3">
                                    <input
                                        value={editedUserData.experience || ""}
                                        onChange={(e) =>
                                            handleFieldChange(
                                                "experience",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            </div>
                            <div className="rowlarge">
                                <div className="label4">Your bio:</div>
                                <div className="inputlarge">
                                    <textarea
                                        value={editedUserData.bio || ""}
                                        onChange={(e) =>
                                            handleFieldChange(
                                                "bio",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="logout">
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Settings;
