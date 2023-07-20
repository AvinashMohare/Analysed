import React, { useState } from "react";
import styles from "./ExercisesPage.module.scss";

import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";

import ExerciseDetail from "./exerciseDetail";

const cardData = [
    {
        image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
        title: "Wall angels",
        description:
            "Wall angels are a great way to warm up your shoulders and upper back before a workout, or to help relieve tension and tightness in those areas after a long day at work.",
    },
    {
        image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
        title: "Wall angels",
        description:
            "Wall angels are a great way to warm up your shoulders and upper back before a workout, or to help relieve tension and tightness in those areas after a long day at work.",
    },
    {
        image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
        title: "Wall angels",
        description:
            "Wall angels are a great way to warm up your shoulders and upper back before a workout, or to help relieve tension and tightness in those areas after a long day at work.",
    },
];

const ExercisesPage = ({ onAddExercisesClick }) => {
    const [isGrid, setIsGrid] = useState(false);

    //To display the details of Exercise
    const [selectedExercise, setSelectedExercise] = useState(null);

    const toggleView = () => {
        setIsGrid(!isGrid);
    };

    const handleCardClick = (exercise) => {
        setSelectedExercise(exercise); // Update the state with the clicked exercise
    };

    const handleClearSelection = () => {
        setSelectedExercise(null); // Clear the selection when closing the ExerciseDetail
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
                    {cardData.map((exercise, index) => (
                        <div
                            key={index}
                            className={styles.card}
                            onClick={() => handleCardClick(exercise)} // Handle card click event
                        >
                            {/* Exercise card content */}
                            <div className={styles.imageContainer}>
                                <img
                                    src={exercise.image}
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
