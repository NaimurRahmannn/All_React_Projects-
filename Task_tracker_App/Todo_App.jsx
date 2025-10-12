import styles from "./Todo_App.module.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CalendarClock from "./CalendarClock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock as farClock } from "@fortawesome/free-regular-svg-icons";

export default function Todo_App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  let username = location.state?.username;
  if (!username) {
    try {
      username = sessionStorage.getItem("username") || "";
    } catch {
      username = "";
    }
  }

  const handleAddTask = () => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text: "", completed: false },
    ]);
  };

  const handleTaskTextChange = (id, value) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: value } : t))
    );
  };

  const handleToggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleLogout = () => {
    try {
      sessionStorage.removeItem("auth");
      sessionStorage.removeItem("username");
    } catch {
      // ignore storage errors
    }
    navigate("/", { replace: true });
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const percentComplete = totalTasks
    ? Math.round((completedTasks / totalTasks) * 100)
    : 0;

  const handleRemoveTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className={styles["login-body"]}>
      <div className={styles["login-container"]}>
        <div className={styles["heading-styles"]}>
          <div>
            <h4 className={styles["login-title"]}>Hey, {username || "User"}</h4>
            <CalendarClock
              className={styles["login-meta"]}
              dateClassName={"date"}
              timeClassName={"time"}
              showTime={false}
            />
          </div>
          <button
            className={styles["logout-circle"]}
            onClick={handleLogout}
            style={{ marginTop: "1rem" }}
            title="Logout"
            aria-label="Logout"
          >
            ⎋
          </button>
        </div>
        <div className={styles["today-task"]}>
          <h4 className={styles["today-tasktitle"]}>Today Task</h4>
          <div className={styles["today-progress"]}>
            <div
              className={styles["progress-circle"]}
              style={{ "--progress": `${percentComplete}%` }}
              aria-label={`Completed ${percentComplete}%`}
              title={`${completedTasks}/${totalTasks} completed`}
            >
              <span className={styles["progress-text"]}>
                {percentComplete}%
              </span>
            </div>
          </div>
        </div>

        <div className={styles["tasks-list"]}>
          {tasks.map((task) => (
            <div key={task.id} className={styles["New-task"]}>
              <button
                type="button"
                className={styles["task-remove"]}
                onClick={() => handleRemoveTask(task.id)}
                aria-label="Remove task"
                title="Remove"
              >
                —
              </button>
              <div className={styles["task-left"]}>
                <div className={styles["task-label"]}></div>
                <input
                  type="text"
                  className={styles["task-input"]}
                  value={task.text}
                  onChange={(e) =>
                    handleTaskTextChange(task.id, e.target.value)
                  }
                  autoFocus={task.text === ""}
                />
                <div className={styles["task-time-row"]}>
                  <FontAwesomeIcon
                    icon={farClock}
                    className={styles["task-time-icon"]}
                  />
                  <input type="time" className={styles["task-time-input"]} />
                </div>
              </div>
              <input
                type="checkbox"
                className={styles["task-checkbox"]}
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
                aria-label="Mark task done"
              />
            </div>
          ))}
        </div>

        <div className={styles["add-button"]}>
          <button
            type="button"
            className={`${styles["add-button-font"]} ${styles["new-task-button"]}`}
            onClick={handleAddTask}
          >
            <i className="fa-solid fa-plus">+</i>
          </button>
        </div>
      </div>
    </div>
  );
}
