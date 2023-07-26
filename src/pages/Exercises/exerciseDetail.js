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

import React from "react";
import classes from "./ExerciseDetails.module.scss";

const ExerciseDetails = ({ exercise, onClose }) => {
    const musclesData = exercise.musclesInvolved;
    // Process the data and split into individual card components
    const cardsArray = musclesData.split(",");

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
                </div>

                <div className={classes.right}>
                    <div className={classes.descriptionContainer}>
                        <div className={classes.descriptionTitle}>
                            <p>Description</p>
                        </div>

                        <div className={classes.descriptionContent}>
                            <p>
                                Wall angels are a great way to warm up your
                                shoulders and upper back before a workout, or to
                                help relieve tension and tightness in those
                                areas after a long day at work.
                            </p>
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
                            <video src={exercise.videoURL}></video>
                        </div>
                    </div>

                    <div className="about-container">
                        <div className="about-title">About</div>
                        <div className="about-content">
                            Lorem ipsum dolor sit amet consectetur. Tellus
                            consequat dui semper turpis justo egestas. Blandit
                            sit egestas egestas enim amet viverra interdum.
                            Cursus sodales tincidunt diam tortor sem quisque.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExerciseDetails;
