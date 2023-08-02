// import React, { useEffect, useState } from "react";
// import {
//     collection,
//     query,
//     where,
//     getDocs,
//     getDoc,
//     updateDoc,
//     arrayUnion,
//     arrayRemove,
//     doc,
// } from "firebase/firestore";
// import { db } from "../../firebase";
// import ExerciseFetcher from "../../components/data_fetch/exerciseFetcher"; // Adjust the path

// const ClientDetails = ({ client, onBackToList }) => {
//     const [assignedExercises, setAssignedExercises] = useState([]);
//     const [exercises, setExercises] = useState([]);

//     const handleExercisesFetched = (fetchedExercises) => {
//         setExercises(fetchedExercises);
//     };

//     useEffect(() => {
//         console.log("Inside the Client Details");
//         const fetchAssignedExercises = async () => {
//             try {
//                 const exercisesRef = collection(db, "exercises");
//                 const q = query(
//                     exercisesRef,
//                     where("assignedTo", "array-contains", client.userID)
//                 );
//                 const querySnapshot = await getDocs(q);

//                 const assignedExercisesData = querySnapshot.docs.map((doc) =>
//                     doc.data()
//                 );
//                 setAssignedExercises(assignedExercisesData);
//             } catch (error) {
//                 console.error("Error fetching assigned exercises:", error);
//             }
//         };

//         fetchAssignedExercises();
//     }, [client.userID]);

//     const handleUnassignExercise = async (exerciseId) => {
//         console.log("Exercise ID to unassign:", exerciseId);

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
//         } catch (error) {
//             console.error("Error unassigning exercise:", error);
//         }
//     };

//     const handleAssignExercise = async (exerciseId) => {
//         console.log("Hii", exerciseId);
//         try {
//             const exerciseRef = doc(db, "exercises", exerciseId);
//             await updateDoc(exerciseRef, {
//                 assignedTo: arrayUnion(client.userID),
//             });
//             console.log("Exercise assigned successfully!");
//         } catch (error) {
//             console.error("Error assigning exercise:", error);
//         }
//     };

//     return (
//         <div>
//             <h2>Detailed View for {client.userName}</h2>
//             {/* ... other client details ... */}

//             {/* Display assigned exercises */}
//             <h3>Assigned Exercises</h3>
//             <div>
//                 {assignedExercises.map((exercise) => (
//                     <li key={exercise.id}>
//                         {exercise.title}{" "}
//                         <button
//                             onClick={() => handleUnassignExercise(exercise.id)}
//                         >
//                             Unassign
//                         </button>
//                     </li>
//                 ))}
//             </div>

//             {/* Display all exercises using ExerciseFetcher */}
//             <h3>All Exercises</h3>
//             <ExerciseFetcher onExercisesFetched={handleExercisesFetched} />
//             <div>
//                 {exercises.map((exercise) => (
//                     <div key={exercise.id}>
//                         {exercise.title}{" "}
//                         <button
//                             onClick={() => handleAssignExercise(exercise.id)}
//                         >
//                             Assign
//                         </button>
//                     </div>
//                 ))}
//             </div>

//             {/* Back button */}
//             <button onClick={onBackToList}>Back to Client List</button>
//         </div>
//     );
// };

// export default ClientDetails;

//-------------------

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

const ClientDetails = ({ client, onBackToList }) => {
    const [assignedExercises, setAssignedExercises] = useState([]);
    const [exercises, setExercises] = useState([]);

    const handleExercisesFetched = (fetchedExercises) => {
        setExercises(fetchedExercises);
    };

    useEffect(() => {
        console.log("Inside the Client Details");
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

        fetchAssignedExercises();
    }, [client.userID]);

    const handleUnassignExercise = async (exerciseId) => {
        console.log("Exercise ID to unassign:", exerciseId);

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
        } catch (error) {
            console.error("Error unassigning exercise:", error);
        }
    };

    const handleAssignExercise = async (exerciseId) => {
        try {
            const exerciseRef = doc(db, "exercises", exerciseId);
            await updateDoc(exerciseRef, {
                assignedTo: arrayUnion(client.userID),
            });
            console.log("Exercise assigned successfully!");
        } catch (error) {
            console.error("Error assigning exercise:", error);
        }
    };

    return (
        <div>
            <h2>Detailed View for {client.userName}</h2>
            {/* ... other client details ... */}

            {/* Display assigned exercises */}
            <h3>Assigned Exercises</h3>
            <div>
                {assignedExercises.map((exercise) => (
                    <li key={exercise.id}>
                        {exercise.title}

                        <button
                            onClick={() => handleUnassignExercise(exercise.id)}
                        >
                            Unassign
                        </button>
                    </li>
                ))}
            </div>

            {/* Display all exercises using ExerciseFetcher */}
            <h3>All Exercises</h3>
            <ExerciseFetcher onExercisesFetched={handleExercisesFetched} />
            <div>
                {exercises.map((exercise) => (
                    <div key={exercise.id}>
                        {exercise.title}

                        <button
                            onClick={() => handleAssignExercise(exercise.id)}
                        >
                            Assign
                        </button>
                    </div>
                ))}
            </div>

            {/* Back button */}
            <button onClick={onBackToList}>Back to Client List</button>
        </div>
    );
};

export default ClientDetails;
