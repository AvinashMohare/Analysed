import classes from "../styles/Exercises.module.scss";
import { AiOutlineFire } from "react-icons/ai";
import ExerciseFetcher from "../components/data_fetch/exerciseFetcher";
import { useState } from "react";

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    const handleExercisesFetched = (fetchedExercises) => {
        setExercises(fetchedExercises);
    };

    return (
        <div className={classes.rootExercises}>
            <ExerciseFetcher onExercisesFetched={handleExercisesFetched} />
            <div className={classes.heading}>
                <span>All Exercises</span>
            </div>

            <div className={classes.cardsContainer}>
                {exercises.map((Exercise) => {
                    return (
                        <div className={classes.exercises} key={Exercise.id}>
                            <img
                                src={Exercise.thumbnailURL}
                                alt={Exercise.title}
                            ></img>

                            <div className={classes.calories}>
                                <div className={classes.icon}>
                                    <AiOutlineFire size={25} color="orange" />
                                </div>

                                <div className={classes.count}>
                                    <span>{Exercise.caloriesBurnPerMin}</span>
                                </div>
                            </div>

                            <div className={classes.title}>
                                <span>{Exercise.title}</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={classes.button}>
                <div className={classes.mainbutton}>
                    <span>View All</span>
                </div>
            </div>
        </div>
    );
};

export default Exercises;
