// ThemeToggle.jsx
import { Sun, Moon, Laptop } from "lucide-react"
import useTheme from "./useTheme";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = (mode) => {
    setTheme(mode)
  }

  return (
    <div className="flex gap-2 items-center">
      <button onClick={() => toggleTheme("light")}>
        <Sun className={`w-5 h-5 ${theme === "light" ? "text-yellow-500" : ""}`} />
      </button>
      <button onClick={() => toggleTheme("dark")}>
        <Moon className={`w-5 h-5 ${theme === "dark" ? "text-blue-400" : ""}`} />
      </button>
      <button onClick={() => setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      )}>
        <Laptop className="w-5 h-5" />
      </button>
    </div>
  )
}
