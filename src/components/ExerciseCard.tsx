// ExerciseCard.tsx

import React from "react";
import ReactDOM from "react-dom";
import { WorkoutPlan } from "../types/types"; // Adjust the import path as necessary

interface ExerciseCardProps {
  isVisible: boolean;
  onClose: () => void;
  workoutPlan: WorkoutPlan;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  isVisible,
  onClose,
  workoutPlan,
}) => {
  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-indigo-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-indigo-600 hover:text-indigo-800 focus:outline-none"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-700">
          Your Workout Plan
        </h2>
        <div className="overflow-y-auto max-h-[70vh]">
          {Object.entries(workoutPlan).map(([day, plan]) => (
            <div key={day} className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-pink-600">{day}</h3>
              <p className="text-lg font-medium mb-2 text-indigo-500">
                {plan.workoutType}
              </p>
              <ul className="list-disc pl-5">
                {plan.exercises.map((exercise, index) => (
                  <li key={index} className="mb-1">
                    <span className="font-medium text-indigo-700">
                      {exercise.name}:
                    </span>{" "}
                    {exercise.sets && exercise.reps ? (
                      <>
                        {exercise.sets} sets of {exercise.reps}
                      </>
                    ) : (
                      <>
                        {exercise.duration && `Duration: ${exercise.duration}`}
                        {exercise.work && exercise.rest ? (
                          <>
                            {" "}
                            (Work: {exercise.work}, Rest: {exercise.rest})
                          </>
                        ) : null}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2 text-pink-500">
              General Tips
            </h4>
            <ul className="list-disc pl-5">
              <li className="text-indigo-600">
                Warm up before starting your workout.
              </li>
              <li className="text-indigo-600">
                Stay hydrated throughout your workout.
              </li>
              <li className="text-indigo-600">
                Focus on proper form to prevent injuries.
              </li>
              <li className="text-indigo-600">
                Cool down and stretch after your workout.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ExerciseCard;
