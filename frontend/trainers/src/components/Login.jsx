import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../api.js";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //const data = await LoginApi(username, password);

      //localStorage.setItem("access", data.access);
      //localStorage.setItem("refresh", data.refresh);

      localStorage.setItem("demo_logged_in", "true");

      navigate("/home");
    } catch (error) {
      console.error("Login failed", error);
      alert("Invalid username or password");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffe5db, #fce3ee)",
        padding: "20px",
      }}
    >
      <div
        className="p-5 shadow-lg rounded"
        style={{
          width: "380px",
          backgroundColor: "white",
          border: "3px solid #8b597b",
          borderRadius: "18px",
        }}
      >
        <h2
          className="text-center"
          style={{ color: "#493129", fontWeight: "700" }}
        >
          Welcome Back!
        </h2>

        <p
          className="text-center mb-4"
          style={{ color: "#8b597b", fontSize: "15px" }}
        >
          Please login to continue
        </p>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-3">
            <input
              name="username"
              type="text"
              placeholder="Enter Username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                border: "2px solid #c68fa4",
                backgroundColor: "#fff7f5",
                borderRadius: "10px",
                padding: "12px",
              }}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                border: "2px solid #c68fa4",
                backgroundColor: "#fff7f5",
                borderRadius: "10px",
                padding: "12px",
              }}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: "#8b597b",
              color: "white",
              fontWeight: "600",
              padding: "12px",
              borderRadius: "10px",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "#6d4560ff")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "#8b597b")
            }
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p
          className="text-center mt-4"
          style={{ fontSize: "13px", color: "#a47c89" }}
        >
          © {new Date().getFullYear()} Trainers Search App
        </p>
      </div>
    </div>
  );
};
