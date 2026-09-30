import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const username =
    localStorage.getItem("username") ||
    sessionStorage.getItem("username");

  // Logout
  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("username");

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");

    navigate("/");
  };

  return (
    <div className="dashboard">

      <nav className="navbar">

        <h2>Task Manager</h2>

        <button onClick={handleLogout}>
          Logout
        </button>

      </nav>

      <div className="dashboard-content">

        <h1>Welcome, {username}! 👋</h1>

        <p>
          You have successfully logged in.
        </p>

        <div className="cards">

          <div className="card">
            <h3>🔐 Authentication</h3>
            <p>Login Successful</p>
          </div>

          <div className="card">
            <h3>🛡️ Protected Dashboard</h3>
            <p>Access Granted</p>
          </div>

          <div className="card">
            <h3>🎫 JWT Token</h3>
            <p>Token Validated</p>
          </div>

          <div className="card">
            <h3>💾 Remember User</h3>
            <p>Session Active</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;