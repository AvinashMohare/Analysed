import React, { useEffect, useState } from "react";
import { useAuth } from "../../components/data_fetch/authProvider";
import { onSnapshot, query, collection, where } from "firebase/firestore";
import { updateDoc, doc } from "firebase/firestore";

import { db } from "../../firebase";
import classes from "./Settings.module.css";

const Settings = () => {
    const user = useAuth();
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

    const handleSave = async () => {
        try {
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

    return (
        <div>
            <div className={classes.Settings}>
                <div className={classes.ResetFrame}>
                    <button className={classes.ResetButton}>
                        RESET PASSWORD
                    </button>
                </div>
                <div className={classes.cover}>
                    <div className={classes.referralCode}>
                        <p>{editedUserData.referralCode}</p>
                    </div>
                </div>
                <img
                    className={classes.ProfileImg}
                    src="https://via.placeholder.com/150x150"
                    alt="userName"
                />
                <div className={classes.ProfileName}>Profile</div>
                <div className={classes.UpdateDetails}>
                    Update your photo and personal details
                </div>

                <div className={classes.SaveGroup}>
                    <button
                        className={classes.SaveRectangle}
                        onClick={handleSave}
                    />
                    <div className={classes.Save}>Save</div>
                </div>

                <div className={classes.CancelGroup}>
                    <button className={classes.CancelRectangle} />
                    <div className={classes.Cancel}>Cancel</div>
                </div>

                <div className={classes.InputContainer}>
                    <div className={classes.firstrow}>
                        <div className={classes.InputText1}>User ID:</div>
                        <div>
                            <input
                                className={classes.SmallBox1}
                                value={
                                    userData ? userData.userId : "Loading..."
                                }
                                onChange={(e) => console.log("Dont Touch")}
                            />
                        </div>

                        <div className={classes.InputText1}>User Name:</div>
                        <div>
                            <input
                                className={classes.SmallBox2}
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

                    <div className={classes.secondrow}>
                        <div className={classes.InputText2}>Name:</div>
                        <div>
                            <input
                                className={classes.LargeBox}
                                value={editedUserData.name || ""}
                                onChange={(e) =>
                                    handleFieldChange("name", e.target.value)
                                }
                            />
                        </div>
                    </div>

                    <div className={classes.thirdrow}>
                        <div className={classes.InputText1}>Email:</div>
                        <div>
                            <input
                                className={classes.SmallBox1}
                                value={editedUserData.email || ""}
                                onChange={(e) =>
                                    handleFieldChange("email", e.target.value)
                                }
                            />
                        </div>

                        <div className={classes.InputText1}>Contact No.:</div>
                        <div>
                            <input
                                className={classes.SmallBox2}
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

                    <div className={classes.fourthrow}>
                        <div className={classes.InputText1}>Gender:</div>
                        <div>
                            <input
                                className={classes.SmallBox1}
                                value={editedUserData.gender || ""}
                                onChange={(e) =>
                                    handleFieldChange("gender", e.target.value)
                                }
                            />
                        </div>

                        <div className={classes.InputText1}>Age:</div>
                        <div>
                            <input
                                className={classes.SmallBox2}
                                value={editedUserData.age || ""}
                                onChange={(e) =>
                                    handleFieldChange("age", e.target.value)
                                }
                            />
                        </div>
                    </div>

                    <div className={classes.fifthrow}>
                        <div className={classes.InputText3}>Experience:</div>
                        <div>
                            <input
                                className={classes.LargeBox}
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

                    <div className={classes.Sixthrow}>
                        <div className={classes.InputText4}>Your Bio:</div>

                        <textarea
                            className={classes.TextArea}
                            value={editedUserData.bio || ""}
                            onChange={(e) =>
                                handleFieldChange("bio", e.target.value)
                            }
                        />
                    </div>

                    <div className={classes.LogoutFrame}>
                        <button className={classes.LogoutButton}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
