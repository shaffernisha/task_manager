import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-wrapper">
      {/* NAVBAR */}
      <nav className="auth-nav">
        <div className="logo">
          <div className="logo-icon">✓</div>
          <span>TaskFlow</span>
        </div>
        <Link to="/register" className="nav-link">
          Join
        </Link>
      </nav>

      {/* CONTENT */}
      <div className="auth-container">
        <h1>
          Master Your Day,<br />
          One Task at a <span>Time</span>
        </h1>

        <p className="subtitle">
          Experience the speed of a MERN-powered task manager.
          Lightweight, efficient, and synced across devices.
        </p>

        <form className="auth-card" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="primary-btn">
            Login
          </button>

          <p className="small-text">
            No account? <Link to="/register">Create Free Account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
