import React, { useEffect, useState, useRef } from "react";
import {
    collection,
    query,
    where,
    getDocs,
    getDoc,
    updateDoc,
    arrayUnion,
    doc,
    setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import ExerciseFetcher from "../../components/data_fetch/exerciseFetcher";
import classes from "./ClientDetails.module.scss";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import HealthDataComponent from "./healthData";
import ClientData from "./clientData";
import FormCheck from "./formCheck";
import Chart from "../../components/chart";

const ClientDetails = ({ client, onBackToList }) => {
    const [showFormCheck, setShowFormCheck] = useState(false);
    const [assignedExercises, setAssignedExercises] = useState([]);
    const [exercises, setExercises] = useState([]);
    const [showAssignExercise, setShowAssignExercise] = useState(false);
    const [showNutrition, setShowNutrition] = useState(false);
    const [nutritionData, setNutritionData] = useState({
        calories: " ",
        fats: "",
        proteins: "",
        carbohydrates: "",
    });

    // Function to open/close the nutrition input overlay
    const toggleNutritionOverlay = () => {
        console.log("Nutrition");
        console.log(showNutrition);
        setShowNutrition(!showNutrition);
    };

    console.log("fetching the clientId : ", client.userID);
    const [docId, setDocId] = useState("constant");
    const userIdToFind = client.userID; // Actual userID

    useEffect(() => {
        console.log("Fetching DocId :");
        async function fetchDocId() {
            try {
                const usersRef = collection(db, "Users");
                const q = query(usersRef, where("userID", "==", userIdToFind));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    // Assuming you're only interested in the first matching document
                    const doc = querySnapshot.docs[0];
                    setDocId(doc.id);
                } else {
                    console.log("No document found with the specified userID.");
                }
            } catch (error) {
                console.error("Error fetching document ID:", error);
            }
        }

        fetchDocId();
    }, [userIdToFind, docId]);

    console.log("Doc id is : ", docId);

    //Handling the nutrition submit.
    // Fetch client's nutrition data from Firebase and update nutritionData state
    useEffect(() => {
        console.log("Nutritions");
        async function fetchClientNutritionData() {
            try {
                const userDocRef = doc(db, "Users", docId);
                const nutritionDocRef = doc(
                    userDocRef,
                    "Calories",
                    "nutritionData"
                );
                const nutritionSnapshot = await getDoc(nutritionDocRef);

                if (nutritionSnapshot.exists()) {
                    const nutritionDataFromFirebase = nutritionSnapshot.data();
                    setNutritionData({
                        calories: nutritionDataFromFirebase.calories || "",
                        fats: nutritionDataFromFirebase.fats || "",
                        proteins: nutritionDataFromFirebase.proteins || "",
                        carbohydrates:
                            nutritionDataFromFirebase.carbohydrates || "",
                    });
                }
            } catch (error) {
                console.error("Error fetching nutrition data:", error);
            }
        }

        if (docId !== "constant") {
            fetchClientNutritionData();
        }
    }, [docId]);

    const handleNutritionSubmit = () => {
        // Call the function to assign nutrition data using the defined state
        assignNutritionData(docId, nutritionData);
        setShowNutrition(false);
    };

    const assignNutritionData = async (userId, nutritionData) => {
        // Validate that all fields are filled in before submission
        if (
            !nutritionData.calories ||
            !nutritionData.fats ||
            !nutritionData.proteins ||
            !nutritionData.carbohydrates
        ) {
            // You can add error handling here to display a message to the user.
            console.error("Please fill in all nutrition fields.");
            return;
        } else {
            try {
                // Reference to the user's document and the "Calories" subcollection
                const userDocRef = doc(db, "Users", userId);
                const caloriesCollectionRef = doc(
                    userDocRef,
                    "Calories",
                    "nutritionData"
                );

                // Set the nutrition data in the "Calories" subcollection
                await setDoc(caloriesCollectionRef, {
                    calories: nutritionData.calories,
                    fats: nutritionData.fats,
                    proteins: nutritionData.proteins,
                    carbohydrates: nutritionData.carbohydrates,
                });

                console.log("Nutrition data assigned successfully!");
            } catch (error) {
                console.error("Error assigning nutrition data:", error);
            }
        }
    };

    //Fetching the exercises
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

    //Scroll to Assigned Section
    // Create a ref for the "Assigned Exercises" section
    const assignedExercisesRef = useRef(null);

    useEffect(() => {
        console.log("scroll");
        if (showAssignExercise && assignedExercisesRef.current) {
            assignedExercisesRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [showAssignExercise]);

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
                    // Update the exercises state to immediately reflect the change
                    const updatedExercises = exercises.map((exercise) => {
                        if (exercise.id === exerciseId) {
                            return {
                                ...exercise,
                                assignedTo: newAssignedTo,
                            };
                        }
                        return exercise;
                    });

                    setExercises(updatedExercises);
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

            // Update the exercises state to immediately reflect the change
            const updatedExercises = exercises.map((exercise) => {
                if (exercise.id === exerciseId) {
                    return {
                        ...exercise,
                        assignedTo: [...exercise.assignedTo, client.userID],
                    };
                }
                return exercise;
            });

            setExercises(updatedExercises);

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

    //Assign Exercise
    const assignExerciseHandler = () => {
        setShowAssignExercise(!showAssignExercise);
    };

    const handleFormCheck = () => {
        setShowFormCheck(!showFormCheck);
    };

    return (
        <>
            {showFormCheck ? (
                <FormCheck onBackClick={handleFormCheck} />
            ) : (
                <div className={classes.rootClientDetails}>
                    <div className={classes.header}>
                        <div className={classes.headerContainer}>
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

                        <div className={classes.headerButtons}>
                            <div
                                className={classes.buttons}
                                onClick={handleFormCheck}
                            >
                                <div className={classes.button}>Form Check</div>
                            </div>

                            <div
                                className={classes.buttons}
                                onClick={onBackToList}
                            >
                                <div className={classes.button}>Back</div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.dashboard}>
                        <div className={classes.clientInfo}>
                            <div className={classes.data}>
                                <HealthDataComponent docId={docId} />
                            </div>
                        </div>
                        <div className={classes.bottomContainer}>
                            <div className={classes.graph}>
                                <Chart />
                            </div>
                            <div className={classes.buttons}>
                                <div className={classes.buttonsContainer}>
                                    <div className={classes.assign}>
                                        <p>Daily Chart</p>
                                    </div>
                                    <div
                                        className={classes.assign}
                                        onClick={toggleNutritionOverlay}
                                    >
                                        <p>Assign Nutrition</p>
                                    </div>
                                    <div
                                        className={classes.assign}
                                        onClick={assignExerciseHandler}
                                    >
                                        <p>Assign Exercises</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ///////////////////////////////////////////////////////////////? */}
                    {/* Nutrition Input Overlay */}
                    {showNutrition && (
                        <div className={classes.overlay}>
                            <div className={classes.overlayContent}>
                                <div className={classes.inputBox}>
                                    <label>Calories</label>
                                    <input
                                        type="text"
                                        value={nutritionData.calories}
                                        onChange={(e) =>
                                            setNutritionData({
                                                ...nutritionData,
                                                calories: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className={classes.inputBox}>
                                    <label>Fats</label>
                                    <input
                                        type="text"
                                        value={nutritionData.fats}
                                        onChange={(e) =>
                                            setNutritionData({
                                                ...nutritionData,
                                                fats: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className={classes.inputBox}>
                                    <label>Proteins</label>
                                    <input
                                        type="text"
                                        value={nutritionData.proteins}
                                        onChange={(e) =>
                                            setNutritionData({
                                                ...nutritionData,
                                                proteins: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className={classes.inputBox}>
                                    <label>Carbohydrates</label>
                                    <input
                                        type="text"
                                        value={nutritionData.carbohydrates}
                                        onChange={(e) =>
                                            setNutritionData({
                                                ...nutritionData,
                                                carbohydrates: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <button onClick={handleNutritionSubmit}>
                                    Done
                                </button>
                            </div>
                        </div>
                    )}

                    {/* /////////////////////////////////////////////////////// */}

                    <div className={classes.info}>
                        {showAssignExercise ? (
                            <div
                                className={classes.assignedExercises}
                                ref={assignedExercisesRef}
                            >
                                <div className={classes.container}>
                                    <div className={classes.heading}>
                                        <p>Assigned Exercises</p>
                                    </div>

                                    <div className={classes.cards}>
                                        {assignedExercises.map((exercise) => (
                                            <div
                                                className={classes.exercise}
                                                key={exercise.id}
                                            >
                                                <div
                                                    className={
                                                        classes.exerciseName
                                                    }
                                                >
                                                    <p>{exercise.title}</p>
                                                </div>

                                                <div className={classes.delete}>
                                                    <RiDeleteBin6Line
                                                        className={classes.icon}
                                                        onClick={() =>
                                                            handleUnassignExercise(
                                                                exercise.id
                                                            )
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
                                            <IoMdAddCircle
                                                className={classes.icon}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}

                        {/*Conditionally Display all exercises using ExerciseFetcher*/}
                        {showAllExercises ? (
                            <div className={classes.rootExercises}>
                                <div className={classes.header}>
                                    <div className={classes.title}>
                                        <p>All Exercises</p>
                                    </div>
                                </div>

                                <div className={classes.container}>
                                    {/* Render the ExerciseFetcher component to fetch data */}
                                    <ExerciseFetcher
                                        onExercisesFetched={
                                            handleExercisesFetched
                                        }
                                    />

                                    {/* Render the exercises */}
                                    <div className={classes.gridContainer}>
                                        {exercises.map((exercise) => (
                                            <div
                                                key={exercise.id}
                                                className={classes.card}
                                            >
                                                {/* Exercise card content */}
                                                <div
                                                    className={
                                                        classes.imageContainer
                                                    }
                                                >
                                                    <img
                                                        src={
                                                            exercise.thumbnailURL
                                                        }
                                                        alt={exercise.title}
                                                    />
                                                </div>
                                                <div
                                                    className={
                                                        classes.textContainer
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            classes.titleBar
                                                        }
                                                    >
                                                        <h3>
                                                            {exercise.title}
                                                        </h3>
                                                    </div>
                                                    <p>
                                                        {exercise.description}
                                                    </p>
                                                </div>
                                                <div className={classes.footer}>
                                                    {exercise.assignedTo.includes(
                                                        client.userID
                                                    ) ? (
                                                        <IoMdRemoveCircle
                                                            className={
                                                                classes.icon
                                                            }
                                                            onClick={() => {
                                                                handleUnassignExercise(
                                                                    exercise.id
                                                                );
                                                            }}
                                                        />
                                                    ) : (
                                                        <IoMdAddCircle
                                                            className={
                                                                classes.icon
                                                            }
                                                            onClick={() => {
                                                                handleAssignExercise(
                                                                    exercise.id
                                                                );
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default ClientDetails;
