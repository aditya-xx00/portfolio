import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Education } from "./components/Education"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Contact } from "./components/Contact"
import { Navigation } from "./components/Navigation"
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white">
      <Navigation />
      <main>
       <ThemeToggle />
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
