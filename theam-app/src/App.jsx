import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const divStyle = {
    height: "100vh",
    width: "100%",
    backgroundColor: theme === "light" ? "#FFF" : "#000",
  };

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <div style={divStyle}>
        <div
          className="theme"
          style={{
            textAlign: "center",
            color: theme === "light" ? "#000" : "#FFF",
          }}
        >
          <h2>Theme</h2>

          <br />

          <button
            onClick={changeTheme}
            style={{
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              color: theme === "light" ? "#000" : "#FFF",
            }}
          >
            {theme === "light" && <Moon />}
            {theme !== "light" && <Sun />}
          </button>
        </div>
      </div>
    </>
  );
}