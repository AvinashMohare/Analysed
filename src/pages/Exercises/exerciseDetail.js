// // ExerciseDetails.js
// import React from "react";

// const ExerciseDetails = ({ exercise, onClose }) => {
//     return (
//         <div>
//             {/* Display detailed information for the exercise */}
//             <h2>{exercise.title}</h2>
//             <p>{exercise.description}</p>
//             {/* <p>{exercise.caloriesBurnPerMin}</p> */}
//             {/* Add other exercise details you want to display */}
//             <button onClick={onClose}>Close</button>
//         </div>
//     );
// };

// export default ExerciseDetails;

// import React, { useState } from "react";
import classes from "./ExerciseDetails.module.scss";

import { FiClock } from "react-icons/fi";
import { ImLoop } from "react-icons/im";
import { AiOutlineFire } from "react-icons/ai";
import { BiSolidPencil } from "react-icons/bi";

// import { ref, doc } from "firebase/storage";
// import { db } from "../../firebase";
// import { updateDoc } from "firebase/firestore";

const ExerciseDetails = ({ exercise, onClose }) => {
    const musclesData = exercise.musclesInvolved;
    // Process the data and split into individual card components
    const cardsArray = musclesData.split(",");

    //Using this I will update the changes
    console.log(exercise.id);

    //Update the exercise using the exercise id

    return (
        <div className={classes.exerciseDetailsContainer}>
            <div className={classes.exerciseTitle}>
                <p>{exercise.title}</p>
            </div>

            <div className={classes.container}>
                <div className={classes.left}>
                    <div className={classes.thumbnailContainer}>
                        <img
                            className={classes.thumbnailImage}
                            src={exercise.thumbnailURL}
                            alt="Exercise Thumbnail"
                        />
                    </div>

                    <div className={classes.aboutContainer}>
                        <div className={classes.aboutTitle}>
                            <p>About</p>
                        </div>
                        <div className={classes.info}>
                            <div className={classes.items}>
                                <div className={classes.logo}>
                                    <FiClock className={classes.icons} />
                                </div>
                                <p>{exercise.duration}</p>
                                <p>Mins</p>
                            </div>
                            <div className={classes.items}>
                                <div className={classes.logo}>
                                    <ImLoop
                                        className={classes.icons}
                                        color="#59B24F"
                                    />
                                </div>
                                <p>{exercise.reps}</p>
                                <p>Reps</p>
                            </div>
                            <div className={classes.items}>
                                <div className={classes.logo}>
                                    <AiOutlineFire
                                        className={classes.icons}
                                        color="#FCBD1B"
                                    />
                                </div>
                                <p>{exercise.caloriesBurnPerMin}</p>
                                <p>Calories</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.right}>
                    <div className={classes.descriptionContainer}>
                        <div className={classes.descriptionTitle}>
                            <p>Description</p>
                            <div>
                                <BiSolidPencil className={classes.icon} />
                            </div>
                        </div>

                        <div className={classes.descriptionContent}>
                            <p>{exercise.description}</p>
                        </div>
                    </div>

                    <div className={classes.musclesInvolvedContainer}>
                        <div className={classes.musclesInvolvedTitle}>
                            <p>Muscles Involved</p>
                        </div>
                        <div className={classes.musclesList}>
                            {cardsArray.map((muscles, index) => (
                                <div
                                    key={index}
                                    className={classes.musclesInvolved}
                                >
                                    <p>{muscles}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={classes.videosContainer}>
                        <div className={classes.videosTitle}>
                            <p>Videos</p>
                        </div>
                        <div className={classes.videoItem}>
                            <video controls>
                                <source
                                    src={exercise.videoURL}
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>

                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default ExerciseDetails;
