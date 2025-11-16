/* ---------------------------------------------------------
   ORIGINAL BACKEND VERSION 
-----------------------------------------------------------

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchTrainer = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    name: "",
    place: "",
    technology: "",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = new URLSearchParams(filters).toString();
    navigate(`/list?${query}`);
  };

  return (
    ...form code...
  );
};

-----------------------------------------------------------
 END BACKEND VERSION
-----------------------------------------------------------*/



// ========================================================
// DEMO MODE VERSION (WORKING — NO BACKEND NEEDED)
// ========================================================

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchTrainer = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    name: "",
    place: "",
    technology: "",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // Demo Mode — simply redirect to /list with query parameters
  const handleSearch = (e) => {
    e.preventDefault();
    const query = new URLSearchParams(filters).toString();
    navigate(`/list?${query}`); // TrainersList will filter these
  };

  return (
    <div className="container mt-4">
      <h2
        className="text-center"
        style={{ color: "#493129", fontWeight: "700" }}
      >
        Search Trainers
      </h2>

      <form
        onSubmit={handleSearch}
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
            value={filters.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Search by name"
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
            value={filters.place}
            onChange={handleChange}
            className="form-control"
            placeholder="Search by place"
          />
        </div>

        {/* Technology */}
        <div className="mb-3">
          <label className="form-label" style={{ fontWeight: "600" }}>
            Technology
          </label>
          <input
            type="text"
            name="technology"
            value={filters.technology}
            onChange={handleChange}
            className="form-control"
            placeholder="Search by technology"
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
          Search
        </button>
      </form>
    </div>
  );
};
