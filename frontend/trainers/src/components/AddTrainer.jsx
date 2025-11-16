// ---------------------------
// ORIGINAL BACKEND VERSION
// ---------------------------
/*
import React, { useState } from "react";
import { addTrainer } from "../api";
import { useNavigate } from "react-router-dom";

export const AddTrainer = () => {
  const navigate = useNavigate();

  const [trainer, setTrainer] = useState({
    name: "",
    place: "",
    phone: "",
    email: "",
    technology1: "",
    technology2: "",
  });

  const handleChange = (e) => {
    setTrainer({
      ...trainer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTrainer(trainer);
      alert("Trainer added successfully!");
      navigate("/list");
    } catch (err) {
      console.error("Error adding trainer:", err);
      alert("Failed to add trainer. Check console.");
    }
  };

  return (
    ...your JSX...
  );
};
*/

// --------------------------------------------------------
// DEMO MODE VERSION (Fully working without backend)
// --------------------------------------------------------

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addTrainer as demoAddTrainer } from "../utils/demoApi";

export const AddTrainer = () => {
  const navigate = useNavigate();

  const [trainer, setTrainer] = useState({
    name: "",
    place: "",
    phone: "",
    email: "",
    technology1: "",
    technology2: "",
  });

  const handleChange = (e) => {
    setTrainer({
      ...trainer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    demoAddTrainer(trainer); // DEMO MODE ADD
    alert("Trainer added successfully! (Demo Mode)");
    navigate("/list"); // Redirect to trainers page
  };

  return (
    <div className="container mt-4">
      <h2
        className="text-center"
        style={{ color: "#493129", fontWeight: "700" }}
      >
        Add Trainer
      </h2>

      <form
        onSubmit={handleSubmit}
        className="p-4 mt-4 rounded"
        style={{ backgroundColor: "#f1dec7", border: "2px solid #8b597b" }}
      >
        {/* Name */}
        <div className="mb-3">
          <label className="form-label" style={{ fontWeight: "600" }}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={trainer.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Place */}
        <div className="mb-3">
          <label className="form-label" style={{ fontWeight: "600" }}>
            Place
          </label>
          <input
            type="text"
            name="place"
            value={trainer.place}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-3">
          <label className="form-label" style={{ fontWeight: "600" }}>
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={trainer.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label" style={{ fontWeight: "600" }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={trainer.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Technology 1 */}
        <div className="mb-3">
          <label className="form-label" style={{ fontWeight: "600" }}>
            Technology 1
          </label>
          <input
            type="text"
            name="technology1"
            value={trainer.technology1}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Technology 2 */}
        <div className="mb-3">
          <label className="form-label" style={{ fontWeight: "600" }}>
            Technology 2
          </label>
          <input
            type="text"
            name="technology2"
            value={trainer.technology2}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn"
          style={{
            backgroundColor: "#8b597b",
            color: "white",
            fontWeight: "600",
            width: "100%",
          }}
        >
          Add Trainer
        </button>
      </form>
    </div>
  );
};
