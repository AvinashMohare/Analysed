import { useState, useEffect } from "react";
import { onSnapshot, query, collection, where } from "firebase/firestore";
import { auth, db } from "../firebase";
import classes from "../styles/Profile.module.scss";

const Profile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Get the signed-in user's userID
                const userId = auth.currentUser?.uid;

                // If the user is not signed in, do nothing
                if (!userId) return;

                // Create a reference to the Firestore collection 'userdata'
                const userDataRef = collection(db, "userdata");

                // Create a query to retrieve data where 'userId' matches the signed-in user's userID
                const userQuery = query(
                    userDataRef,
                    where("userId", "==", userId)
                );

                // Set up a real-time listener for the query
                const unsubscribe = onSnapshot(userQuery, (querySnapshot) => {
                    // 'querySnapshot' contains the data that matches the query
                    const data = querySnapshot.docs.map((doc) => doc.data());
                    setUserData(data[0]); // Update the state with the retrieved data (assuming only one document matches the query)
                });

                // Clean up the listener when the component unmounts
                return () => unsubscribe();
            } catch (error) {
                console.error("Error fetching user data:", error);
                // Handle the error here or show an error message to the user
            }
        };

        fetchData();
    }, []);

    return (
        <div className={classes.rootProfile}>
            <div className={classes.userPicture}>
                <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="profile"
                ></img>
            </div>
            <p className={classes.name}>
                {userData ? userData.username : "Loading..."}
                <span>Lorem Ipsum Lorem sum</span>
            </p>
        </div>
    );
};

export default Profile;
