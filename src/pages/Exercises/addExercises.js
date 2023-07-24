import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";

const AddExercises = () => {
    const [video, setVideo] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [musclesInvolved, setMusclesInvolved] = useState("");
    const [caloriesBurnPerMin, setCaloriesBurnPerMin] = useState("");

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
        } catch (error) {
            console.error("Error adding exercise: ", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleVideoChange} />
            <input type="file" onChange={handleThumbnailChange} />
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <input
                type="text"
                value={musclesInvolved}
                onChange={(e) => setMusclesInvolved(e.target.value)}
                placeholder="Muscles Involved"
            />
            <input
                type="text"
                value={caloriesBurnPerMin}
                onChange={(e) => setCaloriesBurnPerMin(e.target.value)}
                placeholder="Calories Burn Per Minute"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddExercises;
