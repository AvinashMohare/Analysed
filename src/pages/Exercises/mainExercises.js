import React, { useState } from "react";
import ExercisesPage from "./exercisesPage";
// import AddExercises from "./addExercises";
import AddExercises from "./addExercises";

import ExerciseDetails from "./exerciseDetail"; // Import the ExerciseDetails component

const MainExercises = () => {
    const [showAddExercises, setShowAddExercises] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState(null);

    const handleAddExercisesClick = () => {
        setShowAddExercises(true);
    };

    const handleExerciseCardClick = (exercise) => {
        setSelectedExercise(exercise);
    };

    const handleBackClick = () => {
        setShowAddExercises(false);
        setSelectedExercise(null); // Reset selected exercise when going back to ExercisesPage
    };

    return (
        <div>
            {showAddExercises ? (
                <AddExercises onBackClick={handleBackClick} />
            ) : selectedExercise ? (
                // If an exercise is selected, display its details
                <ExerciseDetails
                    exercise={selectedExercise}
                    onClose={() => setSelectedExercise(null)}
                />
            ) : (
                <ExercisesPage
                    onAddExercisesClick={handleAddExercisesClick}
                    onExerciseCardClick={handleExerciseCardClick}
                />
            )}
        </div>
    );
};

export default MainExercises;
