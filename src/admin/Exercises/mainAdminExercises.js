import React, { useState } from "react";
import AdminExercises from "../Exercises/adminExercises";
// import AddExercises from "./addExercises";

import ExerciseDetails from "../../pages/Exercises/exerciseDetail"; // Import the ExerciseDetails component

const MainExercises = () => {
    const [selectedExercise, setSelectedExercise] = useState(null);

    const handleExerciseCardClick = (exercise) => {
        setSelectedExercise(exercise);
    };

    const handleBackClick = () => {
        setSelectedExercise(null); // Reset selected exercise when going back to ExercisesPage
    };

    return (
        <div>
            {selectedExercise ? (
                // If an exercise is selected, display its details
                <ExerciseDetails
                    exercise={selectedExercise}
                    onClose={() => setSelectedExercise(null)}
                />
            ) : (
                <AdminExercises onExerciseCardClick={handleExerciseCardClick} />
            )}
        </div>
    );
};

export default MainExercises;
