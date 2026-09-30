import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Password Strength
  const getPasswordStrength = () => {
    if (password.length === 0) {
      return "";
    }

    if (password.length < 4) {
      return "Weak";
    }

    if (password.length < 8) {
      return "Medium";
    }

    return "Strong";
  };

  // Login
  const handleLogin = (e) => {
    e.preventDefault();

    // Username validation
    if (username.trim() === "") {
      setError("Username is required");
      return;
    }

    // Password validation
    if (password.trim() === "") {
      setError("Password is required");
      return;
    }

    // JWT Token Simulation
    const token = btoa(
      JSON.stringify({
        username: username,
        loginTime: Date.now()
      })
    );

    // Remember User
    if (remember) {
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
    } else {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("username", username);
    }

    setError("");

    navigate("/dashboard");
  };

  return (
    <div className="login-container">

      <div className="login-box">

        <h1>🔐 Login</h1>

        <form onSubmit={handleLogin}>

          <label>Username</label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />

          {password && (
            <p className="password-strength">
              Password Strength:{" "}
              <b>{getPasswordStrength()}</b>
            </p>
          )}

          <label className="remember">

            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />

            Remember Me

          </label>

          {error && (
            <p className="error">
              {error}
            </p>
          )}

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;