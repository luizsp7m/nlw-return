import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  console.log(theme);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === 'dark' ? (
        <FaSun
          onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      ) : (
        <FaMoon
          onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      )}
    </div>
  );
}