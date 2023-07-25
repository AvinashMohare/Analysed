// import React, { useState } from "react";
// import styles from "./ExercisesPage.module.scss"; // Replace with your CSS/SCSS module for styling
// import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";
// import ExerciseFetcher from "../../components/data_fetch/exerciseFetcher";

// const ExercisesPage = ({ onAddExercisesClick }) => {
//     const [exercises, setExercises] = useState([]);
//     const [isGrid, setIsGrid] = useState(false);

//     const handleExercisesFetched = (fetchedExercises) => {
//         setExercises(fetchedExercises);
//     };

//     const toggleView = () => {
//         setIsGrid(!isGrid);
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
//                 {/* Render the ExerciseFetcher component to fetch data */}
//                 <ExerciseFetcher onExercisesFetched={handleExercisesFetched} />

//                 {/* Render the exercises */}
//                 <div
//                     className={
//                         isGrid ? styles.gridContainer : styles.listContainer
//                     }
//                 >
//                     {exercises.map((exercise) => (
//                         <div key={exercise.id} className={styles.card}>
//                             {/* Exercise card content */}
//                             <div className={styles.imageContainer}>
//                                 <img
//                                     src={exercise.thumbnailURL}
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

// ExercisesPage.js
import React, { useState, useEffect } from "react";
import styles from "./ExercisesPage.module.scss";
import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../../firebase";

const ExercisesPage = ({ onAddExercisesClick, onExerciseCardClick }) => {
    const [exercises, setExercises] = useState([]);
    const [isGrid, setIsGrid] = useState(false);

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
                        <div
                            key={exercise.id}
                            className={styles.card}
                            onClick={() => onExerciseCardClick(exercise)} // Handle the click event for the card
                        >
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
