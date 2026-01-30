import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";

export default function Landing() {
  return (
    <div className="landing">
      <header className="landing-header">
        <h2>
          <FiCheckCircle className="logo-icon" /> TaskFlow
        </h2>
        <Link to="/login" className="login-link">Login</Link>
      </header>
<center>
      <section className="landing-content">
        <h1>
          Master Your Day,<br />One Task at a <span>Time</span>
        </h1>

        <p>
          Organize, track, and complete your tasks with ease.
          Simple. Fast. Reliable.
        </p>

        <Link to="/register" className="cta-btn">
          Create Free Account
        </Link>
      </section>
      </center>
    </div>
  );
}
