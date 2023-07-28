import classes from "../styles/Exercises.module.scss";
import { AiOutlineFire } from "react-icons/ai";
import ExerciseFetcher from "../components/data_fetch/exerciseFetcher";
import { useState } from "react";

// const ExercisesArray = [
//     {
//         calories: "120",
//         title: "Sit ups",
//         image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
//     },

//     {
//         calories: "120",
//         title: "Squats",
//         image: "https://img.freepik.com/free-photo/sporty-athletic-woman-squatting-doing-sit-ups-gym-isolated-white-wall_231208-1728.jpg?size=626&ext=jpg&ga=GA1.2.1991124506.1689017917&semt=sph",
//     },

//     {
//         calories: "120",
//         title: "Push ups",
//         image: "https://img.freepik.com/free-photo/side-view-athletic-man-doing-push-ups_23-2148418170.jpg?w=2000",
//     },
//     {
//         calories: "120",
//         title: "Sit ups",
//         image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
//     },
//     {
//         calories: "120",
//         title: "Squats",
//         image: "https://img.freepik.com/free-photo/sporty-athletic-woman-squatting-doing-sit-ups-gym-isolated-white-wall_231208-1728.jpg?size=626&ext=jpg&ga=GA1.2.1991124506.1689017917&semt=sph",
//     },
//     {
//         calories: "120",
//         title: "Push ups",
//         image: "https://img.freepik.com/free-photo/side-view-athletic-man-doing-push-ups_23-2148418170.jpg?w=2000",
//     },
// ];

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
                        <div className={classes.exercises}>
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
