import React, { useState } from "react";
import styles from "../../pages/Exercises/ExercisesPage.module.scss";
import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import DataFetcher from "../components/data_fetch/datafetcher";

const AdminExercises = ({ onAddExercisesClick, onExerciseCardClick }) => {
    const [exercises, setExercises] = useState([]);
    const [isGrid, setIsGrid] = useState(false);

    const handleExercisesFetched = (fetchedExercises) => {
        setExercises(fetchedExercises);
    };

    const toggleView = () => {
        setIsGrid(!isGrid);
    };

    return (
        <div className={styles.rootExercises}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <p>All Exercises</p>
                </div>

                {/* <div className={styles.buttons}>
                    <div className={styles.toggle} onClick={toggleView}>
                        {isGrid ? (
                            <HiOutlineViewList className={styles.icon} />
                        ) : (
                            <HiOutlineViewGrid className={styles.icon} />
                        )}
                    </div>
                </div> */}
            </div>

            <div className={styles.container}>
                {/* Render the ExerciseFetcher component to fetch data */}
                <DataFetcher
                    collectionName="exercises"
                    onDataFetched={handleExercisesFetched}
                />

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
                                <div className={styles.titleBar}>
                                    <h3>{exercise.title}</h3>
                                    <div className={styles.icon}>
                                        <BiDotsVerticalRounded
                                            className={styles.dots}
                                        />
                                    </div>
                                </div>
                                <p>{exercise.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminExercises;
