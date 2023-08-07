// import React, { useEffect, useState } from "react";
// import {
//     collection,
//     query,
//     where,
//     getDocs,
//     getDoc,
//     updateDoc,
//     arrayUnion,
//     doc,
// } from "firebase/firestore";
// import { db } from "../../firebase";
// import ExerciseFetcher from "../../components/data_fetch/exerciseFetcher";
// import classes from "./ClientDetails.module.scss";
// import { RiDeleteBin6Line } from "react-icons/ri";

// const ClientDetails = ({ client, onBackToList }) => {
//     const [assignedExercises, setAssignedExercises] = useState([]);
//     const [exercises, setExercises] = useState([]);

//     const handleExercisesFetched = (fetchedExercises) => {
//         setExercises(fetchedExercises);
//     };

//     //Fetching assigned exercises
//     const fetchAssignedExercises = async () => {
//         try {
//             const exercisesRef = collection(db, "exercises");
//             const q = query(
//                 exercisesRef,
//                 where("assignedTo", "array-contains", client.userID)
//             );
//             const querySnapshot = await getDocs(q);

//             const assignedExercisesData = querySnapshot.docs.map((doc) => ({
//                 id: doc.id,
//                 ...doc.data(),
//             }));
//             setAssignedExercises(assignedExercisesData);
//         } catch (error) {
//             console.error("Error fetching assigned exercises:", error);
//         }
//     };

//     useEffect(() => {
//         console.log("Inside the Client Details");

//         fetchAssignedExercises();
//     }, [client.userID]);

//     //To Unassign an exercise
//     const handleUnassignExercise = async (exerciseId) => {
//         // console.log("Exercise ID to unassign:", exerciseId);
//         try {
//             const exerciseRef = doc(db, "exercises", exerciseId);
//             const exerciseSnapshot = await getDoc(exerciseRef);

//             if (exerciseSnapshot.exists()) {
//                 const exerciseData = exerciseSnapshot.data();
//                 if (
//                     exerciseData.assignedTo &&
//                     exerciseData.assignedTo.includes(client.userID)
//                 ) {
//                     const newAssignedTo = exerciseData.assignedTo.filter(
//                         (id) => id !== client.userID
//                     );
//                     await updateDoc(exerciseRef, { assignedTo: newAssignedTo });
//                     console.log("Exercise unassigned successfully!");
//                 } else {
//                     console.log("Exercise is not assigned to the client.");
//                 }
//             } else {
//                 console.log("Exercise does not exist.");
//             }

//             fetchAssignedExercises();
//         } catch (error) {
//             console.error("Error unassigning exercise:", error);
//         }
//     };

//     //To Assign an exercise
//     const handleAssignExercise = async (exerciseId) => {
//         try {
//             const exerciseRef = doc(db, "exercises", exerciseId);
//             await updateDoc(exerciseRef, {
//                 assignedTo: arrayUnion(client.userID),
//             });
//             console.log("Exercise assigned successfully!");
//             fetchAssignedExercises();
//         } catch (error) {
//             console.error("Error assigning exercise:", error);
//         }
//     };

//     return (
//         <div className={classes.rootClientDetails}>
//             <div className={classes.header}>
//                 <div className={classes.userImage}>
//                     <img
//                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTte_W3r44Rc7MYnXPQZLP-z3pfAJCKJuz1GA&usqp=CAU"
//                         alt={client.userName}
//                     />
//                 </div>

//                 <div className={classes.userName}>
//                     <p>{client.userName}</p>
//                 </div>
//             </div>

//             <div className={classes.info}>
//                 <div className={classes.assignedExercises}>
//                     <div className={classes.heading}>
//                         <p>Assign Exercises</p>
//                     </div>

//                     <div className={classes.cards}>
//                         {assignedExercises.map((exercise) => (
//                             <div className={classes.exercise} key={exercise.id}>
//                                 <div className={classes.exerciseName}>
//                                     <p>{exercise.title}</p>
//                                 </div>

//                                 <div className={classes.delete}>
//                                     <RiDeleteBin6Line
//                                         className={classes.icon}
//                                         onClick={() =>
//                                             handleUnassignExercise(exercise.id)
//                                         }
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Display all exercises using ExerciseFetcher */}
//                 <h3>All Exercises</h3>

//                 <ExerciseFetcher onExercisesFetched={handleExercisesFetched} />

//                 <div>
//                     {exercises.map((exercise) => (
//                         <div key={exercise.id}>
//                             {exercise.title}

//                             <button
//                                 onClick={() =>
//                                     handleAssignExercise(exercise.id)
//                                 }
//                             >
//                                 Assign
//                             </button>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Back button */}
//                 <button onClick={onBackToList}>Back to Client List</button>
//             </div>
//         </div>
//     );
// };

// export default ClientDetails;

import React, { useEffect, useState } from "react";
import {
    collection,
    query,
    where,
    getDocs,
    getDoc,
    updateDoc,
    arrayUnion,
    doc,
} from "firebase/firestore";
import { db } from "../../firebase";
import ExerciseFetcher from "../../components/data_fetch/exerciseFetcher";
import classes from "./ClientDetails.module.scss";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdAddCircle } from "react-icons/io";

const ClientDetails = ({ client, onBackToList }) => {
    const [assignedExercises, setAssignedExercises] = useState([]);
    const [exercises, setExercises] = useState([]);

    const handleExercisesFetched = (fetchedExercises) => {
        setExercises(fetchedExercises);
    };

    //Fetching assigned exercises
    const fetchAssignedExercises = async () => {
        try {
            const exercisesRef = collection(db, "exercises");
            const q = query(
                exercisesRef,
                where("assignedTo", "array-contains", client.userID)
            );
            const querySnapshot = await getDocs(q);

            const assignedExercisesData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setAssignedExercises(assignedExercisesData);
        } catch (error) {
            console.error("Error fetching assigned exercises:", error);
        }
    };

    useEffect(() => {
        console.log("Inside the Client Details");

        fetchAssignedExercises();
    }, [client.userID]);

    //To Unassign an exercise
    const handleUnassignExercise = async (exerciseId) => {
        // console.log("Exercise ID to unassign:", exerciseId);
        try {
            const exerciseRef = doc(db, "exercises", exerciseId);
            const exerciseSnapshot = await getDoc(exerciseRef);

            if (exerciseSnapshot.exists()) {
                const exerciseData = exerciseSnapshot.data();
                if (
                    exerciseData.assignedTo &&
                    exerciseData.assignedTo.includes(client.userID)
                ) {
                    const newAssignedTo = exerciseData.assignedTo.filter(
                        (id) => id !== client.userID
                    );
                    await updateDoc(exerciseRef, { assignedTo: newAssignedTo });
                    console.log("Exercise unassigned successfully!");
                } else {
                    console.log("Exercise is not assigned to the client.");
                }
            } else {
                console.log("Exercise does not exist.");
            }

            fetchAssignedExercises();
        } catch (error) {
            console.error("Error unassigning exercise:", error);
        }
    };

    //To Assign an exercise
    const handleAssignExercise = async (exerciseId) => {
        try {
            const exerciseRef = doc(db, "exercises", exerciseId);
            await updateDoc(exerciseRef, {
                assignedTo: arrayUnion(client.userID),
            });
            console.log("Exercise assigned successfully!");
            fetchAssignedExercises();
        } catch (error) {
            console.error("Error assigning exercise:", error);
        }
    };

    //Show All exercises
    const [showAllExercises, setShowAllExercises] = useState(false);
    const allExercisesHandler = () => {
        setShowAllExercises(!showAllExercises);
    };

    return (
        <div className={classes.rootClientDetails}>
            <div className={classes.header}>
                <div className={classes.userImage}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTte_W3r44Rc7MYnXPQZLP-z3pfAJCKJuz1GA&usqp=CAU"
                        alt={client.userName}
                    />
                </div>

                <div className={classes.userName}>
                    <p>{client.userName}</p>
                </div>
            </div>

            <div className={classes.info}>
                <div className={classes.assignedExercises}>
                    <div className={classes.heading}>
                        <p>Assign Exercises</p>
                    </div>

                    <div className={classes.cards}>
                        {assignedExercises.map((exercise) => (
                            <div className={classes.exercise} key={exercise.id}>
                                <div className={classes.exerciseName}>
                                    <p>{exercise.title}</p>
                                </div>

                                <div className={classes.delete}>
                                    <RiDeleteBin6Line
                                        className={classes.icon}
                                        onClick={() =>
                                            handleUnassignExercise(exercise.id)
                                        }
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={classes.footer}>
                        <div
                            className={classes.buttons}
                            onClick={allExercisesHandler}
                        >
                            <IoMdAddCircle className={classes.icon} />
                        </div>
                    </div>
                </div>

                {/*Conditionally Display all exercises using ExerciseFetcher*/}
                {showAllExercises ? (
                    <>
                        <h3>All Exercises</h3>
                        <div>
                            <button onClick={allExercisesHandler}>Done</button>
                        </div>
                        <ExerciseFetcher
                            onExercisesFetched={handleExercisesFetched}
                        />

                        <div>
                            {exercises.map((exercise) => (
                                <div key={exercise.id}>
                                    {exercise.title}

                                    <button
                                        onClick={() =>
                                            handleAssignExercise(exercise.id)
                                        }
                                    >
                                        Assign
                                    </button>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <></>
                )}

                {/* Back button */}
                <button onClick={onBackToList}>Back to Client List</button>
            </div>
        </div>
    );
};

export default ClientDetails;
