import { Routes } from "./routes";

import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "./contexts/ThemeContext";

AOS.init({
  duration: 1750,
  once: true,
});

export function App() {

  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}