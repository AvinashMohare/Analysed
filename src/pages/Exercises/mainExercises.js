import React, { useState } from "react";
import ExercisesPage from "./exercisesPage";
import AddExercises from "./addExercises";

const MainExercises = () => {
    const [showAddExercises, setShowAddExercises] = useState(false);

    const handleAddExercisesClick = () => {
        setShowAddExercises(true);
    };

    return (
        <div>
            {showAddExercises ? (
                <AddExercises />
            ) : (
                <ExercisesPage onAddExercisesClick={handleAddExercisesClick} />
            )}
        </div>
    );
};

export default MainExercises;
