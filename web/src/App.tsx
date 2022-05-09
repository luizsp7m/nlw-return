import { Routes } from "./routes";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

AOS.init({
  duration: 1750,
  once: true,
});

export function App() {
  useEffect(() => {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, []);

  return (
    <Routes />
  );
}