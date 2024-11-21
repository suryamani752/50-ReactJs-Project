import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function handleToggle() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white dark:bg-black transition-all duration-500">
      <div className="flex flex-col items-center gap-6">
        <p className="text-black dark:text-white text-4xl">Hello Everyone</p>
        <button
          onClick={handleToggle}
          className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-md font-semibold border dark:border-white"
        >
          Switch to {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
};

export default LightDarkMode;
