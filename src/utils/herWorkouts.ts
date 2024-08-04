import { AgeRange } from "../types/types";

export const AGE_RANGE: Record<string, AgeRange> = {
  "20s to 30s": {
    ageGroup: "20s to 30s",
    weeklyPlan: {
      resistanceTraining: 3 - 4,
      highIntensityTraining: 1 - 2,
    },
    workoutSchedule: {
      Monday: {
        workoutType: "Full-Body Resistance Training",
        exercises: [
          { name: "Squats", sets: 4, reps: "8-12" },
          { name: "Deadlifts", sets: 4, reps: "8-12" },
          { name: "Bench Press", sets: 4, reps: "8-12" },
          { name: "Bent-over Rows", sets: 4, reps: "8-12" },
          { name: "Plank", sets: 3, duration: "1 minute" },
        ],
      },
      Tuesday: {
        workoutType: "High-Intensity Interval Training (HIIT)",
        exercises: [
          { name: "Sprints", sets: 10, duration: "30 seconds" },
          { name: "Rest", sets: 10, duration: "30 seconds" },
          { name: "Core Exercises", duration: "5 minutes" },
        ],
      },
      Wednesday: {
        workoutType: "Active Recovery",
        exercises: [
          { name: "Yoga", duration: "30 minutes" },
          { name: "Pilates", duration: "30 minutes" },
        ],
      },
      Thursday: {
        workoutType: "Lower Body Resistance Training",
        exercises: [
          { name: "Lunges", sets: 4, reps: "10 per leg" },
          { name: "Leg Press", sets: 4, reps: "10-12" },
          { name: "Romanian Deadlift", sets: 4, reps: "10-12" },
          { name: "Calf Raises", sets: 3, reps: "12-15" },
          { name: "Leg Raises", sets: 3, reps: "12-15" },
        ],
      },
      Friday: {
        workoutType: "Upper Body Resistance Training",
        exercises: [
          { name: "Shoulder Press", sets: 4, reps: "8-12" },
          { name: "Pull-Ups or Lat Pulldowns", sets: 4, reps: "8-12" },
          { name: "Dumbbell Chest Press", sets: 4, reps: "8-12" },
          { name: "Bicep Curls", sets: 3, reps: "12-15" },
          { name: "Tricep Dips", sets: 3, reps: "12-15" },
        ],
      },
      Saturday: {
        workoutType: "HIIT Circuit",
        exercises: [
          { name: "Jumping Jacks", work: "30 seconds", rest: "30 seconds" },
          { name: "Mountain Climbers", work: "30 seconds", rest: "30 seconds" },
          { name: "Kettlebell Swings", work: "30 seconds", rest: "30 seconds" },
          { name: "Box Jumps", work: "30 seconds", rest: "30 seconds" },
          {
            name: "HIIT Circuit",
            sets: 3,
            work: "30 seconds",
            rest: "30 seconds",
          },
        ],
      },
      Sunday: {
        workoutType: "Active Recovery",
        exercises: [
          { name: "Yoga", duration: "30 minutes" },
          { name: "Pilates", duration: "30 minutes" },
        ],
      },
    },
  },

  "30s to 40s": {
    ageGroup: "30s to 40s",
    weeklyPlan: {
      resistanceTraining: 3 - 4,
      highIntensityTraining: 1 - 2,
    },
    workoutSchedule: {
      Monday: {
        workoutType: "Full-Body Strength Training",
        exercises: [
          { name: "Back Squats", sets: 4, reps: "6-8" },
          { name: "Deadlifts", sets: 4, reps: "6-8" },
          { name: "Bench Press", sets: 4, reps: "6-8" },
          { name: "Bent-over Rows", sets: 4, reps: "6-8" },
          { name: "Russian Twists", sets: 3, reps: "15-20" },
        ],
      },
      Tuesday: {
        workoutType: "HIIT Session",
        exercises: [
          {
            name: "Sprint Intervals",
            sets: 12,
            work: "30 seconds",
            rest: "60 seconds",
          },
          { name: "Battle Ropes", sets: 3, duration: "30 seconds" },
        ],
      },
      Wednesday: {
        workoutType: "Active Recovery",
        exercises: [
          { name: "Yoga", duration: "30 minutes" },
          { name: "Pilates", duration: "30 minutes" },
        ],
      },
      Thursday: {
        workoutType: "Lower Body Strength Training",
        exercises: [
          { name: "Front Squats", sets: 4, reps: "6-8" },
          { name: "Bulgarian Split Squats", sets: 4, reps: "8 per leg" },
          { name: "Romanian Deadlift", sets: 4, reps: "8" },
          { name: "Calf Raises", sets: 4, reps: "12-15" },
          { name: "Hanging Leg Raises", sets: 3, reps: "12-15" },
        ],
      },
      Friday: {
        workoutType: "Upper Body Strength Training",
        exercises: [
          { name: "Military Press", sets: 4, reps: "6-8" },
          { name: "Pull-Ups or Lat Pulldowns", sets: 4, reps: "6-8" },
          { name: "Incline Dumbbell Press", sets: 4, reps: "6-8" },
          { name: "Barbell Curls", sets: 3, reps: "10" },
          { name: "Tricep Pushdowns", sets: 3, reps: "10" },
        ],
      },
      Saturday: {
        workoutType: "High-Intensity Session",
        exercises: [
          {
            name: "Jump Squats",
            sets: 4,
            work: "45 seconds",
            rest: "15 seconds",
          },
          { name: "Push-Ups", sets: 4, work: "45 seconds", rest: "15 seconds" },
          {
            name: "Kettlebell Swings",
            sets: 4,
            work: "45 seconds",
            rest: "15 seconds",
          },
          {
            name: "Plank with Shoulder Taps",
            sets: 4,
            work: "45 seconds",
            rest: "15 seconds",
          },
        ],
      },
      Sunday: {
        workoutType: "Active Recovery",
        exercises: [
          { name: "Yoga", duration: "30 minutes" },
          { name: "Pilates", duration: "30 minutes" },
        ],
      },
    },
  },

  "40+": {
    ageGroup: "40+",
    weeklyPlan: {
      strengthTraining: 3,
      highIntensityTraining: 1 - 2,
    },
    workoutSchedule: {
      Monday: {
        workoutType: "Full-Body Strength Training",
        exercises: [
          { name: "Deadlifts", sets: 4, reps: "6-8" },
          { name: "Squats", sets: 4, reps: "6-8" },
          { name: "Push-Ups", sets: 3, reps: "10-12" },
          { name: "Bent-over Rows", sets: 4, reps: "6-8" },
          { name: "Side Planks", sets: 3, duration: "30 seconds per side" },
        ],
      },
      Tuesday: {
        workoutType: "High-Intensity Session",
        exercises: [
          {
            name: "Interval Training",
            sets: 8,
            work: "1 minute",
            rest: "2 minutes",
          },
          { name: "Medicine Ball Slams", sets: 3, reps: 15 },
        ],
      },
      Wednesday: {
        workoutType: "Active Recovery",
        exercises: [
          { name: "Yoga", duration: "30 minutes" },
          { name: "Pilates", duration: "30 minutes" },
        ],
      },
      Thursday: {
        workoutType: "Lower Body Strength Training",
        exercises: [
          { name: "Leg Press", sets: 4, reps: "6-8" },
          { name: "Step-Ups", sets: 4, reps: "8 per leg" },
          { name: "Hamstring Curls", sets: 4, reps: "10" },
          { name: "Standing Calf Raises", sets: 4, reps: "15" },
          { name: "Bicycle Crunches", sets: 3, reps: "20" },
        ],
      },
      Friday: {
        workoutType: "Upper Body Strength Training",
        exercises: [
          { name: "Dumbbell Shoulder Press", sets: 4, reps: "6-8" },
          { name: "Seated Row", sets: 4, reps: "6-8" },
          { name: "Chest Press Machine", sets: 4, reps: "6-8" },
          { name: "Hammer Curls", sets: 3, reps: "10" },
          { name: "Tricep Extensions", sets: 3, reps: "10" },
        ],
      },
      Saturday: {
        workoutType: "HIIT Session",
        exercises: [
          {
            name: "High Knees",
            sets: 4,
            work: "40 seconds",
            rest: "20 seconds",
          },
          {
            name: "Jumping Lunges",
            sets: 4,
            work: "40 seconds",
            rest: "20 seconds",
          },
          {
            name: "Burpees",
            sets: 4,
            work: "40 seconds",
            rest: "20 seconds",
          },
          {
            name: "Plank to Push-Up",
            sets: 4,
            work: "40 seconds",
            rest: "20 seconds",
          },
        ],
      },
      Sunday: {
        workoutType: "Active Recovery",
        exercises: [
          { name: "Yoga", duration: "30 minutes" },
          { name: "Pilates", duration: "30 minutes" },
        ],
      },
    },

    "All ages": {
      weeklyPlan: {
        strengthTraining: 3,
        cardiovascularTraining: 2,
        flexibilityTraining: 2,
      },
      workoutSchedule: {
        Monday: {
          workoutType: "Full-Body Strength Training",
          exercises: [
            { name: "Squats", sets: 3, reps: "10-12" },
            { name: "Push-Ups", sets: 3, reps: "10-12" },
            { name: "Bent-over Rows", sets: 3, reps: "10-12" },
            { name: "Lunges", sets: 3, reps: "10 per leg" },
            { name: "Plank", sets: 3, duration: "1 minute" },
          ],
        },
        Tuesday: {
          workoutType: "Cardiovascular Training",
          exercises: [
            { name: "Brisk Walking or Jogging", duration: "30 minutes" },
            { name: "Cycling", duration: "30 minutes" },
          ],
        },
        Wednesday: {
          workoutType: "Flexibility Training",
          exercises: [
            { name: "Yoga", duration: "45 minutes" },
            { name: "Stretching Routine", duration: "15 minutes" },
          ],
        },
        Thursday: {
          workoutType: "Lower Body Strength Training",
          exercises: [
            { name: "Deadlifts", sets: 3, reps: "10-12" },
            { name: "Leg Press", sets: 3, reps: "10-12" },
            { name: "Calf Raises", sets: 3, reps: 15 },
            { name: "Glute Bridges", sets: 3, reps: "10-12" },
            { name: "Leg Raises", sets: 3, reps: 15 },
          ],
        },
        Friday: {
          workoutType: "Upper Body Strength Training",
          exercises: [
            { name: "Dumbbell Shoulder Press", sets: 3, reps: "10-12" },
            { name: "Lat Pulldowns", sets: 3, reps: "10-12" },
            { name: "Dumbbell Chest Press", sets: 3, reps: "10-12" },
            { name: "Bicep Curls", sets: 3, reps: 12 },
            { name: "Tricep Dips", sets: 3, reps: 12 },
          ],
        },
        Saturday: {
          workoutType: "Cardiovascular Training",
          exercises: [
            {
              name: "HIIT Circuit",
              sets: 4,
              work: "30 seconds",
              rest: "30 seconds",
            },
            "Jumping Jacks",
            "Mountain Climbers",
            "Kettlebell Swings",
            "Box Jumps",
          ],
        },
        Sunday: {
          workoutType: "Flexibility Training",
          exercises: [
            { name: "Yoga", duration: "45 minutes" },
            { name: "Stretching Routine", duration: "15 minutes" },
          ],
        },
      },
    },
  },
};

export const GENERAL_TIPS = {
  warmUp:
    "Always include a 5-10 minute warm-up with dynamic stretches and light cardio.",
  coolDown:
    "Finish each session with a 5-10 minute cool-down and static stretching.",
  progression:
    "Gradually increase weights and intensity to continue making progress.",
  hydrationAndNutrition:
    "Ensure proper hydration and a balanced diet to support",
  trainingAndRecovery: "training and recovery.",
};
