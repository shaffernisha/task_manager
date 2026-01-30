import { useEffect, useState } from "react";
import { FiEdit2, FiTrash2, FiLogOut, FiCheck } from "react-icons/fi";
import API from "../services/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const username = localStorage.getItem("username");

  const loadTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data || []);
    } catch (err) {
      console.error("Load tasks error:", err);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;
    try {
      await API.post("/tasks", { title });
      setTitle("");
      loadTasks();
    } catch (err) {
      console.error("Add task error:", err);
    }
  };

  const startEdit = (task) => {
    setEditId(task._id);
    setEditText(task.title);
  };

  const updateTask = async (id) => {
    if (!editText.trim()) return;
    try {
      await API.put(`/tasks/${id}`, { title: editText });
      setEditId(null);
      setEditText("");
      loadTasks();
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      loadTasks();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <h2>Hello, {username || "User"} </h2>
          <p>Ready to be productive?</p>
        </div>
        <button onClick={logout}>
          <FiLogOut /> Logout
        </button>
      </header>

      <div className="add-task">
        <input
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTask}>+</button>
      </div>

      {tasks.length === 0 && <p>No tasks yet.</p>}

      {tasks.map((task) => (
        <div className="task-item" key={task._id}>
          {editId === task._id ? (
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              autoFocus
            />
          ) : (
            <span>{task.title}</span>
          )}

          <div className="task-actions">
            {editId === task._id ? (
              <FiCheck onClick={() => updateTask(task._id)} />
            ) : (
              <FiEdit2 onClick={() => startEdit(task)} />
            )}
            <FiTrash2 onClick={() => deleteTask(task._id)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
