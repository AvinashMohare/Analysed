import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../../firebase";

const ExerciseFetcher = ({ onExercisesFetched }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    // Define the query to retrieve exercises for a specific user
    const q = query(
      collection(db, "exercises"),
      where("userId", "==", auth?.currentUser?.uid)
    );

    // Fetch the documents that match the query
    const fetchExercises = async () => {
      try {
        const querySnapshot = await getDocs(q);

        // Extract the data from the query snapshot
        const exerciseData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Set the exercises state with the retrieved data
        setExercises(exerciseData);
        onExercisesFetched(exerciseData); // Pass the fetched data to the parent component
      } catch (error) {
        console.error("Error fetching exercises: ", error);
      }
    };

    // Call the fetchExercises function to retrieve data
    fetchExercises();
  }, [onExercisesFetched]);

  return null; // This component doesn't render anything visible
};

export default ExerciseFetcher;
