// import React, { useState } from "react";
// import styles from "./ExercisesPage.module.scss";

// import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";

// import ExerciseDetail from "./exerciseDetail";

// const cardData = [
//     {
//         image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
//         title: "Wall angels",
//         description:
//             "Wall angels are a great way to warm up your shoulders and upper back before a workout, or to help relieve tension and tightness in those areas after a long day at work.",
//     },
//     {
//         image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
//         title: "Wall angels",
//         description:
//             "Wall angels are a great way to warm up your shoulders and upper back before a workout, or to help relieve tension and tightness in those areas after a long day at work.",
//     },
//     {
//         image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
//         title: "Wall angels",
//         description:
//             "Wall angels are a great way to warm up your shoulders and upper back before a workout, or to help relieve tension and tightness in those areas after a long day at work.",
//     },
// ];

// const ExercisesPage = ({ onAddExercisesClick }) => {
//     const [isGrid, setIsGrid] = useState(false);

//     //To display the details of Exercise
//     const [selectedExercise, setSelectedExercise] = useState(null);

//     const toggleView = () => {
//         setIsGrid(!isGrid);
//     };

//     const handleCardClick = (exercise) => {
//         setSelectedExercise(exercise); // Update the state with the clicked exercise
//     };

//     const handleClearSelection = () => {
//         setSelectedExercise(null); // Clear the selection when closing the ExerciseDetail
//     };

//     return (
//         <div className={styles.rootExercises}>
//             <div className={styles.header}>
//                 <div className={styles.title}>
//                     <p>All Exercises</p>
//                 </div>

//                 <div className={styles.buttons}>
//                     <div className={styles.addExercise}>
//                         <button onClick={onAddExercisesClick}>Add</button>
//                     </div>
//                     <div className={styles.toggle} onClick={toggleView}>
//                         {isGrid ? (
//                             <HiOutlineViewList className={styles.icon} />
//                         ) : (
//                             <HiOutlineViewGrid className={styles.icon} />
//                         )}
//                     </div>
//                 </div>
//             </div>

//             <div className={styles.container}>
//                 <div
//                     className={
//                         isGrid ? styles.gridContainer : styles.listContainer
//                     }
//                 >
//                     {cardData.map((exercise, index) => (
//                         <div
//                             key={index}
//                             className={styles.card}
//                             onClick={() => handleCardClick(exercise)} // Handle card click event
//                         >
//                             {/* Exercise card content */}
//                             <div className={styles.imageContainer}>
//                                 <img
//                                     src={exercise.image}
//                                     alt={exercise.title}
//                                 />
//                             </div>
//                             <div className={styles.textContainer}>
//                                 <h3>{exercise.title}</h3>
//                                 <p>{exercise.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ExercisesPage;

import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase"; // Replace './firebase' with the path to your Firebase config file
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged from Firebase Auth SDK

const ExercisesPage = () => {
    const [userExercises, setUserExercises] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    const auth = getAuth(); // Firebase Auth instance

    useEffect(() => {
        // Subscribe to authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        });

        // Clean up the subscription when the component unmounts
        return () => unsubscribe();
    }, [auth]);

    useEffect(() => {
        // Fetch user-specific exercises when the component mounts and the user is logged in
        if (currentUser) {
            const fetchUserExercises = async () => {
                try {
                    // Query Firestore to get exercises where "uploadedBy" is equal to the current user ID
                    const q = query(
                        collection(db, "exercises"),
                        where("userId", "==", currentUser.uid)
                    );
                    const querySnapshot = await getDocs(q);

                    // Map the documents and store them in the state
                    const exercises = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setUserExercises(exercises);
                } catch (error) {
                    console.error("Error fetching user exercises:", error);
                }
            };

            fetchUserExercises();
        }
    }, [currentUser]);

    // Function to create object URLs for video thumbnails
    const generateThumbnailURL = async (videoFile) => {
        try {
            const blob = new Blob([videoFile], { type: videoFile.type });
            const thumbnailURL = URL.createObjectURL(blob);
            return thumbnailURL;
        } catch (error) {
            console.error("Error generating thumbnail URL:", error);
            return null;
        }
    };

    return (
        <div>
            <h2>Your Exercises</h2>
            <ul>
                {userExercises.map((exercise) => (
                    <li key={exercise.id}>
                        <h3>{exercise.title}</h3>
                        <p>{exercise.description}</p>
                        <p>Muscles Involved: {exercise.musclesInvolved}</p>
                        <p>
                            Calories Burnt per Minute:{" "}
                            {exercise.caloriesPerMinute}
                        </p>
                        <img
                            src={generateThumbnailURL(exercise.videoFile)}
                            alt={exercise.title}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExercisesPage;
