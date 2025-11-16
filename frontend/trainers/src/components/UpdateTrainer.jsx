/* --------------------------------------------------------
   ORIGINAL BACKEND VERSION 
-----------------------------------------------------------

import React, { useEffect, useState } from "react";
import { updateTrainer } from "../api";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { AuthToken } from "../api";

export const UpdateTrainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [trainer, setTrainer] = useState({
    name: "",
    place: "",
    phone: "",
    email: "",
    technology1: "",
    technology2: "",
  });

  // Fetch trainer data on load
  useEffect(() => {
    const fetchTrainer = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/api/trainer/${id}/`,
          { headers: AuthToken() }
        );
        setTrainer(res.data);
      } catch (err) {
        console.error("Error fetching trainer:", err);
      }
    };

    fetchTrainer();
  }, [id]);

  // Handle Input Changes
  const handleChange = (e) => {
    setTrainer({
      ...trainer,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateTrainer(id, trainer);
      alert("Trainer updated successfully!");
      navigate("/list");
    } catch (err) {
      console.error("Error updating trainer:", err);
      alert("Failed to update trainer!");
    }
  };

  return (
    <div className="container mt-4">
      <h2
        className="text-center"
        style={{ color: "#493129", fontWeight: "700" }}
      >
        Update Trainer
      </h2>

      <form
        onSubmit={handleSubmit}
        className="p-4 mt-4 rounded"
        style={{ backgroundColor: "#f1dec7", border: "2px solid #8b597b" }}
      >
        {/* Name *//*}
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

        {/* Place *//*}
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

        {/* Phone *//*}
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

        {/* Email *//*}
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

        {/* Tech 1 *//*}
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

        {/* Tech 2 *//*}
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

        {/* Submit *//*}
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
          Update Trainer
        </button>
      </form>
    </div>
  );
};

-----------------------------------------------------------
   END BACKEND VERSION
-----------------------------------------------------------*/


// ==========================================================
// DEMO MODE VERSION (WORKING – This code is executed)
// ==========================================================

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getTrainers, updateTrainer as demoUpdateTrainer } from "../utils/demoApi";

export const UpdateTrainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [trainer, setTrainer] = useState({
    name: "",
    place: "",
    phone: "",
    email: "",
    technology1: "",
    technology2: "",
  });

  // Load trainer details from localStorage/sample data
  useEffect(() => {
    const all = getTrainers();
    const found = all.find((t) => t.id === Number(id));
    if (found) setTrainer(found);
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setTrainer({
      ...trainer,
      [e.target.name]: e.target.value,
    });
  };

  // Submit update (Demo Mode)
  const handleSubmit = (e) => {
    e.preventDefault();

    demoUpdateTrainer(trainer);
    alert("Trainer updated successfully (Demo Mode)");
    navigate("/list");
  };

  return (
    <div className="container mt-4">
      <h2
        className="text-center"
        style={{ color: "#493129", fontWeight: "700" }}
      >
        Update Trainer
      </h2>

      <form
        onSubmit={handleSubmit}
        className="p-4 mt-4 rounded"
        style={{ backgroundColor: "#f1dec7", border: "2px solid #8b597b" }}
      >
        {/* Name */}
        <div className="mb-3">
          <label className="form-label" style={{ fontWeight: "600" }}>Name</label>
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
          <label className="form-label" style={{ fontWeight: "600" }}>Place</label>
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
          <label className="form-label" style={{ fontWeight: "600" }}>Phone</label>
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
          <label className="form-label" style={{ fontWeight: "600" }}>Email</label>
          <input
            type="email"
            name="email"
            value={trainer.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Tech 1 */}
        <div className="mb-3">
          <label className="form-label" style={{ fontWeight: "600" }}>Technology 1</label>
          <input
            type="text"
            name="technology1"
            value={trainer.technology1}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Tech 2 */}
        <div className="mb-3">
          <label className="form-label" style={{ fontWeight: "600" }}>Technology 2</label>
          <input
            type="text"
            name="technology2"
            value={trainer.technology2}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Submit */}
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
          Update Trainer
        </button>
      </form>
    </div>
  );
};
