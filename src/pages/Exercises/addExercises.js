import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const AddExercises = () => {
    const [video, setVideo] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [musclesInvolved, setMusclesInvolved] = useState("");

    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        setVideo(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Step 1: Upload video to Firebase Storage
        const storage = getStorage();
        const videoRef = ref(storage, `exerciseVideos/${video.name}`);
        await uploadBytes(videoRef, video);

        // Step 2: Get the download URL of the uploaded video
        const videoURL = await getDownloadURL(videoRef);

        // Step 3: Save exercise data to Firebase Firestore
        const exerciseData = {
            videoURL,
            title,
            description,
            musclesInvolved,
            uploadedBy: "current_user_id", // Replace 'current_user_id' with the actual user ID
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
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddExercises;
