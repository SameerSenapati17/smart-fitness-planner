import React from "react";
import "./WorkoutPlan.css";

const WorkoutPlan = ({ plan }) => { // ✅ Fix: Accept the correct prop name
  return (
    <div className="workout-plan">
      <h2>Your Workout Plan</h2>
      {plan ? <pre>{plan}</pre> : <p>Enter details to get a plan!</p>}
    </div>
  );
};

export default WorkoutPlan;