import { useState } from "react";
import DivaGlow from "./components/DivaGlow";
import Creatrix from "./components/Creatrix";

function App() {
  const [workout, setWorkout] = useState(null);
  const [workoutType, setWorkoutType] = useState("individual");
  const [selectedMuscles, setSelectedMuscles] = useState([]);
  const [fitnessGoal, setFitnessGoal] = useState("strength_power");

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }
    let newWorkout = generateWorkout({ poison, muscles, goal });
    setWorkout(newWorkout);

    window.location.href = "#workout";
  }
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-900 to-indigo-950 text-white text-sm sm:text-base">
      <DivaGlow />
      <Creatrix
        selectedMuscles={selectedMuscles}
        setSelectedMuscles={setSelectedMuscles}
        workoutType={workoutType}
        setWorkoutType={setWorkoutType}
        fitnessGoal={fitnessGoal}
        setFitnessGoal={setFitnessGoal}
        updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
  );
}

export default App;
