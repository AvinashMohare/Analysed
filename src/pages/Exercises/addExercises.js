import React, { useState } from "react";
import styles from "./AddExercises.module.scss";
import { db } from "../../firebase"; // Import your Firebase instance from your config file

const AddExercise = () => {
    const [exerciseData, setExerciseData] = useState({
        video: "",
        title: "",
        description: "",
        musclesInvolved: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setExerciseData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        // Handle the file upload, you can implement this part based on your requirements.
        // For example, you can use FileReader API to read the video file and convert it to a data URL.
        // Here, we are just setting the file name for demonstration purposes.
        setExerciseData((prevData) => ({ ...prevData, video: file.name }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Push the exerciseData to Firebase Firestore using the db instance
        db.collection("exercises")
            .add(exerciseData)
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                // Clear the form after successful submission
                setExerciseData({
                    video: "",
                    title: "",
                    description: "",
                    musclesInvolved: "",
                });
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    };

    return (
        <div className={styles.addExercise}>
            <h2>Add New Exercise</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="video">Upload Video:</label>
                    <input
                        type="file"
                        id="video"
                        name="video"
                        accept="video/*"
                        onChange={handleFileChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={exerciseData.title}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={exerciseData.description}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="musclesInvolved">Muscles Involved:</label>
                    <input
                        type="text"
                        id="musclesInvolved"
                        name="musclesInvolved"
                        value={exerciseData.musclesInvolved}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddExercise;
