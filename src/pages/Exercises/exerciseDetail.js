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
import "./ExerciseDetails.module.scss";

const ExerciseDetails = ({ exercise, onClose }) => {
    return (
        <div className="exercise-details-container">
            <div className="exercise-title">{exercise.title}</div>
            <div className="thumbnail-container">
                <img
                    className="thumbnail-image"
                    src={exercise.thumbnailURL}
                    alt="Exercise Thumbnail"
                />
            </div>
            <div className="description-container">
                <div className="description-title">Description</div>
                <div className="description-content">
                    Wall angels are a great way to warm up your shoulders and
                    upper back before a workout, or to help relieve tension and
                    tightness in those areas after a long day at work.
                </div>
            </div>
            <div className="change-cover-btn">Change cover picture</div>
            <div className="upload-btn">
                <img
                    className="upload-icon"
                    src="./upload.svg"
                    alt="Upload Icon"
                />
                Upload new
            </div>
            <div className="videos-container">
                <div className="videos-title">Videos</div>
                <div className="video-item">
                    <img
                        className="video-thumbnail"
                        src="https://via.placeholder.com/266x276"
                        alt="Video Thumbnail"
                    />
                    <div className="play-icon">
                        <div className="inner-circle"></div>
                    </div>
                </div>
            </div>
            <div className="muscles-involved-container">
                <div className="muscles-involved-title">Muscles Involved</div>
                <div className="muscles-list">
                    <div className="muscle-item">Abdominis</div>
                    <div className="muscle-item">Hip Flexors</div>
                    <div className="muscle-item">Obliques</div>
                    <div className="modify-btn">Modify</div>
                </div>
            </div>
            <div className="about-container">
                <div className="about-title">About</div>
                <div className="about-content">
                    Lorem ipsum dolor sit amet consectetur. Tellus consequat dui
                    semper turpis justo egestas. Blandit sit egestas egestas
                    enim amet viverra interdum. Cursus sodales tincidunt diam
                    tortor sem quisque.
                </div>
            </div>
        </div>
    );
};

export default ExerciseDetails;
