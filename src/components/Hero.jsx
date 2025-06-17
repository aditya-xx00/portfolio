import { Button } from "./ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { useTypewriter } from "./useTypewriter"

export function Hero() {

  const typedText = useTypewriter([
    "Student",
    "Programmer",
    "Problem Solver",
    "Coder",
    "MERN Stack Developer"
  ])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="/profile.jpeg?height=200&width=200"
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-primary/20"
            />
          </div>

          <h1 className="text-6xl md:text-4xl font-bold mb-2">
            Hey 👋 <br/>I'm Aditya Kushwaha</h1>
         <p className="text-4xl text-primary font-semibold h-10 mt-0 mb-20">{typedText}<span className="animate-pulse">|</span></p>

          {/* <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Passionate about creating beautiful, functional, and user-centered digital experiences. I specialize in
            modern web technologies and love bringing ideas to life through code.
          </p> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#contact">
  <Button size="lg" className="w-full sm:w-auto">
    <Mail className="mr-2 h-4 w-4" />
    Get In Touch
  </Button>
</a>
           <a href="/resume.pdf" download>
  <Button variant="outline" size="lg" className="w-full sm:w-auto">
    <Download className="mr-2 h-4 w-4" />
    Download Resume
  </Button>
</a>
          </div>

          <div className="flex justify-center space-x-6">
  <a href="https://github.com/aditya-xx00" target="_blank" rel="noopener noreferrer">
    <Button variant="ghost" size="icon">
      <Github className="h-5 w-5" />
    </Button>
  </a>
  <a href="https://www.linkedin.com/in/aditya-xx00/" target="_blank" rel="noopener noreferrer">
    <Button variant="ghost" size="icon">
      <Linkedin className="h-5 w-5" />
    </Button>
  </a>
 <a href="mailto:imadityakushwaha22@gmail.com">
  <Button variant="ghost" size="icon">
    <Mail className="h-5 w-5" />
  </Button>
</a>
</div>
        </div>
      </div>
    </section>
  )
}
