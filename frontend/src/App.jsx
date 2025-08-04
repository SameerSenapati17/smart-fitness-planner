import React, { useState } from "react"; // ✅ Ensure useState is imported
import Form from "./components/Form";
import WorkoutPlan from "./components/WorkoutPlan";
import "./App.css";

function App() {
  const [workoutPlan, setWorkoutPlan] = useState(null);

  return (
    <div className="app-container">
      <header>
        <h1 className="title">
          <span className="purple">AI Workout</span> <span className="blue">Generator</span>
        </h1>
        <header className="welcome-header">
        <h1>Welcome to our Fitness App!</h1>
        <p>
          Get personalized fitness plans tailored to your needs. <br />
          Beginner or experienced, we guide you towards a healthier, fitter you. <br />
          <strong>Start your fitness journey today!</strong>
        </p>
      </header>
      </header>

      <main>
        <Form setWorkoutPlan={setWorkoutPlan} />
        {workoutPlan !== null && <WorkoutPlan plan={workoutPlan} />} {/* ✅ Fix: Ensure `workoutPlan` is checked properly */}
      </main>

      <footer className="footer">
        <p>Created by <strong>Sameer Senapati</strong></p>
        <p>© 2025 Smart Fitness Planner. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

