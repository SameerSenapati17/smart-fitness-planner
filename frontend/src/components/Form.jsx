import React, { useState } from "react";

const Form = ({ setWorkoutPlan }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    weight: "",
    height: "",
    fitness_level: "Beginner",
    goal: "Weight Loss",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setWorkoutPlan(null);

    try {
      const response = await fetch("http://127.0.0.1:3000/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `Generate a workout plan for ${formData.name}, a ${formData.age}-year-old ${formData.gender} with a goal of ${formData.goal}.`,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch workout plan");
      }

      const data = await response.json();
      console.log("Backend Response:", data);

      setWorkoutPlan(data.response || "No workout plan received."); // Corrected key
    } catch (error) {
      console.error("🚨 API Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />

        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input type="number" name="weight" placeholder="Weight (kg)" value={formData.weight} onChange={handleChange} required />
        <input type="number" name="height" placeholder="Height (cm)" value={formData.height} onChange={handleChange} required />

        <select name="fitness_level" value={formData.fitness_level} onChange={handleChange}>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <select name="goal" value={formData.goal} onChange={handleChange}>
          <option>Weight Loss</option>
          <option>Muscle Gain</option>
          <option>Overall Fitness</option>
          <option>Stress Reduction</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Generating..." : "Get Workout Plan"}
        </button>
      </form>

      {loading && <p className="loading-message">⏳ Generating workout plan...</p>}
      {error && <p className="error-message">⚠️ {error}</p>}
    </div>
  );
};

export default Form;
