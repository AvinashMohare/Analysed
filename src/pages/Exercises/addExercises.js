import React, { useState, useCallback } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useDropzone } from "react-dropzone";

import classes from "./AddExercises.module.scss";

const AddExercises = ({ onBackClick }) => {
    const [thumbnail, setThumbnail] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [musclesInvolved, setMusclesInvolved] = useState("");
    const [caloriesBurnPerMin, setCaloriesBurnPerMin] = useState("");
    const [duration, setDuration] = useState("");
    const [reps, setReps] = useState("");
    const [video, setVideo] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        setVideo(file);
    };

    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        setThumbnail(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Step 1: Upload video to Firebase Storage
        const storage = getStorage();
        const videoRef = ref(storage, `exercise/${video.name}`);
        await uploadBytes(videoRef, video);

        // Step 2: Upload thumbnail to Firebase Storage
        const thumbnailRef = ref(
            storage,
            `exercise/thumbnails/${thumbnail.name}`
        );
        await uploadBytes(thumbnailRef, thumbnail);

        // Step 3: Get the download URLs of the uploaded video and thumbnail
        const videoURL = await getDownloadURL(videoRef);
        const thumbnailURL = await getDownloadURL(thumbnailRef);

        // Step 4: Save exercise data to Firebase Firestore
        const exerciseData = {
            videoURL,
            thumbnailURL,
            title,
            description,
            musclesInvolved,
            caloriesBurnPerMin,
            duration,
            reps,
            assignedTo: [],
            userId: auth?.currentUser?.uid,
        };

        try {
            const docRef = await addDoc(
                collection(db, "exercises"),
                exerciseData
            );
            console.log("Exercise added with ID: ", docRef.id);
            // Reset the form fields after successful upload
            setVideo(null);
            setThumbnail(null);
            setTitle("");
            setDescription("");
            setMusclesInvolved("");
            setCaloriesBurnPerMin("");
            setDuration("");
            setReps("");

            setSuccess(true);
        } catch (error) {
            // console.error("Error adding exercise: ", error);
        }
    };

    //Handle Back Click
    const handleBackClick = () => {
        onBackClick();
    };

    const handleSuccess = () => {
        setSuccess(false);
    };

    return (
        <>
            <div className={classes.addExercises}>
                <div className={classes.header}>
                    <p>Add Exercise</p>
                </div>

                <div className={classes.form}>
                    <div className={classes.formElements}>
                        <div className={classes.fieldName}>
                            <p>Exercise Name</p>
                        </div>
                        <div className={classes.inputField}>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={classes.formElements}>
                        <div className={classes.fieldName}>
                            <p>Duration</p>
                        </div>
                        <div className={classes.inputFieldSmall}>
                            <input
                                type="number"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={classes.formElementsBig}>
                        <div className={classes.fieldName}>
                            <p>Exercise Description</p>
                        </div>
                        <div className={classes.inputFieldBig}>
                            <textarea
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={classes.formElements}>
                        <div className={classes.fieldName}>
                            <p>Muscles Involved</p>
                        </div>
                        <div className={classes.inputField}>
                            <input
                                type="text"
                                value={musclesInvolved}
                                onChange={(e) =>
                                    setMusclesInvolved(e.target.value)
                                }
                            />
                        </div>
                    </div>

                    <div className={classes.bottom}>
                        <div className={classes.left}>
                            <div className={classes.formElementsBottom}>
                                <div className={classes.fieldName}>
                                    <p>Calories Burn</p>
                                </div>
                                <div className={classes.inputFieldSmall}>
                                    <input
                                        type="number"
                                        value={caloriesBurnPerMin}
                                        onChange={(e) =>
                                            setCaloriesBurnPerMin(
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            </div>

                            <div className={classes.formElementsBottom}>
                                <div className={classes.fieldName}>
                                    <p>Repetitions</p>
                                </div>
                                <div className={classes.inputFieldSmall}>
                                    <input
                                        type="number"
                                        value={reps}
                                        onChange={(e) =>
                                            setReps(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={classes.right}>
                            <div className={classes.video}>
                                <div className={classes.field}>
                                    <p>Add Video</p>
                                </div>
                                <div className={classes.videoContainer}>
                                    <input
                                        type="file"
                                        onChange={handleVideoChange}
                                    />
                                </div>
                            </div>

                            <div className={classes.image}>
                                <div className={classes.field}>
                                    <p>Add Image</p>
                                </div>
                                <div className={classes.imageContainer}>
                                    <input
                                        type="file"
                                        onChange={handleThumbnailChange}
                                        placeholder="Thumbnail"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.footer}>
                        <div className={classes.button} onClick={handleSubmit}>
                            <span>Submit</span>
                        </div>

                        <div
                            className={classes.button}
                            onClick={handleBackClick}
                        >
                            <span>Back</span>
                        </div>
                    </div>
                </div>
            </div>
            {success ? (
                <div className={classes.successMsg}>
                    <div className={classes.text}>
                        <p>Exercise Added successfully</p>

                        <div className={classes.button} onClick={handleSuccess}>
                            <span>Done</span>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default AddExercises;
