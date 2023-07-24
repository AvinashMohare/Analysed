import React, { useState, useEffect } from "react";
import styles from "./ExercisesPage.module.scss";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";

const ExercisesPage = ({ onAddExercisesClick }) => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        // Define the query to retrieve exercises for a specific user
        const q = query(
            collection(db, "exercises"),
            where("userId", "==", auth?.currentUser?.uid)
        );

        // Fetch the documents that match the query
        const fetchExercises = async () => {
            try {
                const querySnapshot = await getDocs(q);

                // Extract the data from the query snapshot
                const exerciseData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                // Set the exercises state with the retrieved data
                setExercises(exerciseData);
            } catch (error) {
                console.error("Error fetching exercises: ", error);
            }
        };

        // Call the fetchExercises function to retrieve data
        fetchExercises();
    }, []);

    //Toggle View of Exercise

    const [isGrid, setIsGrid] = useState(false);

    const toggleView = () => {
        setIsGrid(!isGrid);
    };

    return (
        <div className={styles.rootExercises}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <p>All Exercises</p>
                </div>

                <div className={styles.buttons}>
                    <div className={styles.addExercise}>
                        <button onClick={onAddExercisesClick}>Add</button>
                    </div>
                    <div className={styles.toggle} onClick={toggleView}>
                        {isGrid ? (
                            <HiOutlineViewList className={styles.icon} />
                        ) : (
                            <HiOutlineViewGrid className={styles.icon} />
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div
                    className={
                        isGrid ? styles.gridContainer : styles.listContainer
                    }
                >
                    {exercises.map((exercise) => (
                        <div key={exercise.id} className={styles.card}>
                            {/* Exercise card content */}
                            <div className={styles.imageContainer}>
                                <img
                                    src={exercise.thumbnailURL}
                                    alt={exercise.title}
                                />
                            </div>
                            <div className={styles.textContainer}>
                                <h3>{exercise.title}</h3>
                                <p>{exercise.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExercisesPage;

// import React, { useEffect, useState } from "react";
// import { collection, query, where, getDocs } from "firebase/firestore";
// import { db } from "../../firebase"; // Replace './firebase' with the path to your Firebase config file
// import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged from Firebase Auth SDK

// const ExercisesPage = () => {
//     const [userExercises, setUserExercises] = useState([]);
//     const [currentUser, setCurrentUser] = useState(null);

//     const auth = getAuth(); // Firebase Auth instance

//     useEffect(() => {
//         // Subscribe to authentication state changes
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setCurrentUser(user);
//             } else {
//                 setCurrentUser(null);
//             }
//         });

//         // Clean up the subscription when the component unmounts
//         return () => unsubscribe();
//     }, [auth]);

//     useEffect(() => {
//         // Fetch user-specific exercises when the component mounts and the user is logged in
//         if (currentUser) {
//             const fetchUserExercises = async () => {
//                 try {
//                     // Query Firestore to get exercises where "uploadedBy" is equal to the current user ID
//                     const q = query(
//                         collection(db, "exercises"),
//                         where("userId", "==", currentUser.uid)
//                     );
//                     const querySnapshot = await getDocs(q);

//                     // Map the documents and store them in the state
//                     const exercises = querySnapshot.docs.map((doc) => ({
//                         id: doc.id,
//                         ...doc.data(),
//                     }));
//                     setUserExercises(exercises);
//                 } catch (error) {
//                     console.error("Error fetching user exercises:", error);
//                 }
//             };

//             fetchUserExercises();
//         }
//     }, [currentUser]);

//     return (
//         <div>
//             <h2>Your Exercises</h2>
//             <ul>
//                 {userExercises.map((exercise) => (
//                     <li key={exercise.id}>
//                         <h3>{exercise.title}</h3>
//                         <p>{exercise.description}</p>
//                         <p>Muscles Involved: {exercise.musclesInvolved}</p>
//                         <p>
//                             Calories Burnt per Minute:{" "}
//                             {exercise.caloriesPerMinute}
//                         </p>
//                         <iframe
//                             width="56"
//                             height="31"
//                             src={exercise.videoURL}
//                             title={exercise.title}
//                         ></iframe>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ExercisesPage;
