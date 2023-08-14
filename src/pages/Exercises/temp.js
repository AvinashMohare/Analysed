import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import classes from "./Temp.module.scss";

import { FiClock } from "react-icons/fi";
import { ImLoop } from "react-icons/im";
import { AiOutlineFire } from "react-icons/ai";
import { BiSolidPencil } from "react-icons/bi";

const AddExercises = ({ onBackClick }) => {
    const [video, setVideo] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [musclesInvolved, setMusclesInvolved] = useState("");
    const [caloriesBurnPerMin, setCaloriesBurnPerMin] = useState("");
    const [duration, setDuration] = useState("");
    const [reps, setReps] = useState("");

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
            // You can get the current user ID using Firebase Auth or any other authentication method you use
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
        } catch (error) {
            console.error("Error adding exercise: ", error);
        }
    };

    //Handle Back Click
    const handleBackClick = () => {
        onBackClick();
    };

    return (
        <div className={classes.exerciseDetailsContainer}>
            <div className={classes.exerciseTitle}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
            </div>

            <div className={classes.container}>
                <div className={classes.left}>
                    <div className={classes.thumbnailContainer}>
                        <input
                            type="file"
                            onChange={handleThumbnailChange}
                            placeholder="Thumbnail"
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
                                {/* <p>{exercise.duration}</p> */}
                                <p>Mins</p>
                            </div>
                            <div className={classes.items}>
                                <div className={classes.logo}>
                                    <ImLoop
                                        className={classes.icons}
                                        color="#59B24F"
                                    />
                                </div>
                                {/* <p>{exercise.reps}</p> */}
                                <p>Reps</p>
                            </div>
                            <div className={classes.items}>
                                <div className={classes.logo}>
                                    <AiOutlineFire
                                        className={classes.icons}
                                        color="#FCBD1B"
                                    />
                                </div>
                                {/* <p>{exercise.caloriesBurnPerMin}</p> */}
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
                            {/* <p>{exercise.description}</p> */}
                        </div>
                    </div>

                    <div className={classes.musclesInvolvedContainer}>
                        <div className={classes.musclesInvolvedTitle}>
                            <p>Muscles Involved</p>
                        </div>
                        <div className={classes.musclesList}>
                            {/* {cardsArray.map((muscles, index) => (
                                <div
                                    key={index}
                                    className={classes.musclesInvolved}
                                >
                                    <p>{muscles}</p>
                                </div>
                            ))} */}
                        </div>
                    </div>

                    <div className={classes.videosContainer}>
                        <div className={classes.videosTitle}>
                            <p>Videos</p>
                        </div>
                        <div className={classes.videoItem}>
                            {/* <video src={exercise.videoURL}></video> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddExercises;
