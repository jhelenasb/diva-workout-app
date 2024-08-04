import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Header from "./Header";
import Button from "./Button";
import { AGE_RANGE } from "../utils/herWorkouts";
import generateWorkout from "../utils/functions";
import ExerciseCard from "./ExerciseCard";
import { WorkoutPlan } from "../types/types";

export default function Creatrix() {
  const [selectedAgeRange, setSelectedAgeRange] = useState<string>("");
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlan | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  function handleGenerateWorkoutPlan() {
    const plan = generateWorkout(selectedAgeRange);
    if (plan) {
      setWorkoutPlan(plan);
      setIsModalVisible(true);
    }
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <Wrapper
      id={"creatrix"}
      header={"Create Your Perfect Workout"}
      title={["It's Time to Glow Up"]}
    >
      <Header
        title={"Choose Your Age Range"}
        description={
          "Select your age range to unlock the perfect workout tailored to your life's journey."
        }
      />
      <div className="grid grid-cols-3 sm:grid-cols-3 gap-5">
        {Object.keys(AGE_RANGE).map((ageRange, index) => (
          <button
            onClick={() => {
              setSelectedAgeRange(ageRange);
            }}
            className={`px-4 py-3 rounded-lg shadow-md duration-300 ${
              ageRange === selectedAgeRange
                ? "bg-pink-600 border-pink-700 text-white"
                : "bg-white border border-pink-400 hover:border-pink-600 text-pink-500"
            }`}
            key={index}
          >
            <p className={`capitalize`}>{AGE_RANGE[ageRange].ageGroup}</p>
          </button>
        ))}
      </div>

      <Button func={handleGenerateWorkoutPlan} text={"Create My Plan"} />

      <ExerciseCard
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        workoutPlan={workoutPlan || {}}
      />
    </Wrapper>
  );
}
