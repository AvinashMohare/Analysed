import { useState, useEffect } from "react";
import { onSnapshot, query, collection, where } from "firebase/firestore";
import { useAuth } from "../components/data_fetch/authProvider"; // Import the AuthProvider
import { db } from "../firebase";
import classes from "../styles/Profile.module.scss";

const Profile = () => {
    const user = useAuth(); // Use the authentication state from the context
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (user) {
            // Ensure the user is signed in before fetching data
            const fetchData = async () => {
                console.log("Profile");
                try {
                    // Get the signed-in user's userID
                    const userId = user.uid;

                    // Create a reference to the Firestore collection 'physiotherapist'
                    const userDataRef = collection(db, "physiotherapist");

                    // Create a query to retrieve data where 'userId' matches the signed-in user's userID
                    const userQuery = query(
                        userDataRef,
                        where("physiotherapistId", "==", userId)
                    );

                    // Set up a real-time listener for the query
                    const unsubscribe = onSnapshot(
                        userQuery,
                        (querySnapshot) => {
                            // 'querySnapshot' contains the data that matches the query
                            const data = querySnapshot.docs.map((doc) =>
                                doc.data()
                            );
                            setUserData(data[0]); // Update the state with the retrieved data (assuming only one document matches the query)
                        }
                    );

                    // Clean up the listener when the component unmounts
                    return () => unsubscribe();
                } catch (error) {
                    console.error("Error fetching user data:", error);
                    // Handle the error here or show an error message to the user
                }
            };

            fetchData();
        }
    }, [user]); // Make sure to run this effect whenever the user changes

    const defaultImage =
        "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=";

    return (
        <div className={classes.rootProfile}>
            <div className={classes.userPicture}>
                <img
                    src={userData ? userData.profileImageURL : defaultImage}
                    alt="profile"
                ></img>
            </div>
            <p className={classes.name}>
                {userData ? userData.username : "Loading..."}
            </p>
        </div>
    );
};

export default Profile;
