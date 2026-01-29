import { useEffect, useState } from "react";
import { FiLogOut, FiEdit2, FiTrash2 } from "react-icons/fi";
import API from "../services/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const loadTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch {
      alert("Failed to load tasks");
    }
  };

  const addTask = async () => {
    if (!title.trim()) return;
    await API.post("/tasks", { title });
    setTitle("");
    loadTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    loadTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const completed = tasks.filter((t) => t.completed).length;
  const pending = tasks.length - completed;

  return (
    <div className="dashboard-wrapper">
      {/* HEADER */}
      <header className="dashboard-header">
        <div>
          <h2>Hello, User!</h2>
          <p>Ready to be productive?</p>
        </div>
        <button className="logout-btn" onClick={logout}>
          <FiLogOut /> Logout
        </button>
      </header>

      {/* STATS */}
      <div className="stats">
        <div className="stat-card">
          <p>Pending</p>
          <h3>{pending}</h3>
        </div>
        <div className="stat-card completed">
          <p>Completed</p>
          <h3>{completed}</h3>
        </div>
        <div className="stat-card">
          <p>Total</p>
          <h3>{tasks.length}</h3>
        </div>
      </div>

      {/* ADD TASK */}
      <div className="add-task">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button onClick={addTask}>+</button>
      </div>

      {/* TASK LIST */}
      <div className="task-list">
        {tasks.map((task) => (
          <div className="task-item" key={task._id}>
            <div>
              <h4>{task.title}</h4>
              <span className={`badge ${task.completed ? "done" : "todo"}`}>
                {task.completed ? "DONE" : "TO DO"}
              </span>
            </div>

            <div className="task-actions">
              <FiEdit2 />
              <FiTrash2 onClick={() => deleteTask(task._id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
