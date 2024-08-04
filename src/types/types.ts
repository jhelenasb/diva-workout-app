export interface Exercise {
  name: string;
  sets?: number;
  reps?: string;
  duration?: string;
  work?: string;
  rest?: string;
}

export interface DailyPlan {
  workoutType: string;
  exercises: Exercise[];
}

export interface WeeklyPlan {
  strengthTraining?: number;
  resistanceTraining?: number;
  highIntensityTraining: number;
}

export interface WorkoutPlan {
  [key: string]: DailyPlan;
}

export interface AgeRange {
  ageGroup: string;
  weeklyPlan: WeeklyPlan;
  workoutSchedule: {
    [key: string]: DailyPlan;
  };
}
