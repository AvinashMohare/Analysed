import React, { useState } from "react";
import styles from "./ExercisesPage.module.scss"; // Replace with your CSS/SCSS module for styling
import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";
import ExerciseFetcher from "../../components/data_fetch/exerciseFetcher";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const ExercisesPage = ({ onAddExercisesClick, onExerciseCardClick }) => {
    const [exercises, setExercises] = useState([]);
    const [isGrid, setIsGrid] = useState(false);

    const handleExercisesFetched = (fetchedExercises) => {
        setExercises(fetchedExercises);
    };

    const toggleView = () => {
        setIsGrid(!isGrid);
    };

    const handleDeleteExercise = async (exerciseId) => {
        try {
            // Construct the full reference to the exercise document
            const exerciseRef = doc(db, "exercises", exerciseId);

            // Delete the exercise document from Firebase Firestore
            await deleteDoc(exerciseRef);

            // Update the local state to remove the deleted exercise
            setExercises((prevExercises) =>
                prevExercises.filter((exercise) => exercise.id !== exerciseId)
            );
        } catch (error) {
            console.error("Error deleting exercise: ", error);
        }
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
                {/* Render the ExerciseFetcher component to fetch data */}
                <ExerciseFetcher onExercisesFetched={handleExercisesFetched} />

                {/* Render the exercises */}
                <div
                    className={
                        isGrid ? styles.gridContainer : styles.listContainer
                    }
                >
                    {exercises.map((exercise) => (
                        <div
                            key={exercise.id}
                            className={styles.card}
                            onClick={() => onExerciseCardClick(exercise)}
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
                            <button
                                className={styles.deleteButton}
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent card click event from firing
                                    handleDeleteExercise(exercise.id);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExercisesPage;
