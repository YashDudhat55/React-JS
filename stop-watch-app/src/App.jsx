import { useEffect, useState } from "react";
import {
  Sun,
  Moon,
  Timer,
  Clock3,
  Play,
  Square,
  RotateCcw,
  Plus,
  ClipboardList,
} from "lucide-react";
import "./app.css";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [totalSecond, setTotalSecond] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [activityName, setActivityName] = useState("");
  const [activities, setActivities] = useState([]);
  const [message, setMessage] = useState("");

  const hours = Math.floor(totalSecond / 3600);
  const minutes = Math.floor((totalSecond % 3600) / 60);
  const seconds = totalSecond % 60;

  const formatTime = (time) => {
    const h = Math.floor(time / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = time % 60;

    return `${h < 10 ? "0" : ""}${h}:${
      m < 10 ? "0" : ""
    }${m}:${s < 10 ? "0" : ""}${s}`;
  };

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const timeInterval = setInterval(() => {
      setTotalSecond((state) => state + 1);
    }, 1000);

    return () => clearInterval(timeInterval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
    setMessage("");
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTotalSecond(0);
    setMessage("");
  };

  const addActivity = () => {
    if (isRunning) {
      setMessage("Please stop the stopwatch before adding an activity.");
      return;
    }

    if (activityName.trim() === "") {
      setMessage("Please enter an activity name.");
      return;
    }

    if (totalSecond === 0) {
      setMessage("Start the stopwatch before adding an activity.");
      return;
    }

    const newActivity = {
      name: activityName,
      duration: totalSecond,
    };

    setActivities((previous) => [...previous, newActivity]);
    setActivityName("");
    setTotalSecond(0);
    setMessage("");
  };

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`stopwatch-app ${theme}`}>
      <header className="header">
        <div className="brand">
          <Timer size={35} />
          <h1>Stopwatch & Activity Tracker</h1>
        </div>

        <button className="theme-toggle" onClick={changeTheme}>
          <span className={theme === "light" ? "active" : ""}>
            <Sun size={19} />
          </span>

          <span className={theme === "dark" ? "active" : ""}>
            <Moon size={19} />
          </span>
        </button>
      </header>

      <main className="main-layout">
        <div className="left-section">
          {/* Stopwatch */}
          <section className="timer-panel">
            <div className="timer-circle">
              <div className="timer-content">
                <Timer size={55} className="timer-icon" />

                <h2>
                  {hours < 10 ? "0" : ""}
                  {hours}:{minutes < 10 ? "0" : ""}
                  {minutes}:{seconds < 10 ? "0" : ""}
                  {seconds}
                </h2>

                <div className="time-labels">
                  <span>Hours</span>
                  <span>Minutes</span>
                  <span>Seconds</span>
                </div>
              </div>
            </div>

            <div className="timer-status">
              <span
                className={isRunning ? "status-dot running" : "status-dot"}
              ></span>
              {isRunning ? "Stopwatch Running" : "Stopwatch Paused"}
            </div>

            <div className="timer-controls">
              <button
                className="control-btn start-btn"
                onClick={startTimer}
                disabled={isRunning}
              >
                <Play size={19} fill="currentColor" />
                Start
              </button>

              <button
                className="control-btn stop-btn"
                onClick={stopTimer}
                disabled={!isRunning}
              >
                <Square size={19} fill="currentColor" />
                Stop
              </button>

              <button
                className="control-btn reset-btn"
                onClick={resetTimer}
              >
                <RotateCcw size={19} />
                Reset
              </button>
            </div>
          </section>

          {/* Add Activity */}
          <section className="activity-form">
            <h2>Add Activity</h2>

            <div className="activity-input-row">
              <input
                type="text"
                placeholder="Enter activity name (e.g. Study, Coding...)"
                value={activityName}
                onChange={(e) => setActivityName(e.target.value)}
              />

              <button className="add-btn" onClick={addActivity}>
                <Plus size={22} />
                Add
              </button>
            </div>

            {message && <p className="form-message">{message}</p>}
          </section>
        </div>

        {/* Activity Log */}
        <section className="activity-panel">
          <div className="activity-header">
            <div className="activity-title">
              <ClipboardList size={38} />
              <h2>Activity Log</h2>
            </div>

            <span className="activity-count">
              Total: {activities.length}
            </span>
          </div>

          <div className="activity-list">
            {activities.length === 0 ? (
              <div className="empty-state">
                <Clock3 size={35} />
                <h3>No Activities Yet</h3>
                <p>
                  Start your stopwatch and add your first activity.
                </p>
              </div>
            ) : (
              activities.map((activity, index) => (
                <div
                  className={`activity-card activity-${index % 4}`}
                  key={index}
                >
                  <h3>{activity.name}</h3>

                  <span className="duration">
                    {formatTime(activity.duration)}
                  </span>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}