import { AGE_RANGE } from "../utils/herWorkouts";
import { WorkoutPlan } from "../types/types";

function generateWorkout(selectedAgeRange: string): WorkoutPlan | null {
  if (!selectedAgeRange) {
    console.error("Age range must be selected.");
    return null;
  }

  const ageRangeData = AGE_RANGE[selectedAgeRange];

  if (!ageRangeData) {
    console.error("Invalid age range selected.");
    return null;
  }

  return ageRangeData.workoutSchedule;
}

export default generateWorkout;
