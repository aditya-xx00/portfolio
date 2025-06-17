import { Card, CardContent } from "./ui/card"
import { Code, Palette, Zap, Users } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful and intuitive user interfaces",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in team environments",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
              Hey 👋, I'm a Computer Science and Engineering student at G.L. Bajaj Institute of Technology and Management. I'm also a Full Stack Developer passionate about building modern, user-friendly web applications using the MERN stack.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Solving 400+ coding problems solved on platforms like LeetCode and GeeksforGeeks, I thrive on solving challenging problems and continuously improving my skills. I’ve built real-time and full-stack projects like Drawly, a collaborative whiteboard, and SkillCheckr, a quiz and progress tracking app with secure authentication.
              </p>
              <p className="text-lg text-muted-foreground">
               I enjoy working on real-world projects, participating in hackathons, and writing clean, scalable code. My goal is to create impactful digital experiences and continuously grow as a developer.
              </p>
            </div>
            <div>
             <img
          src="/photo.jpeg"
         alt="About me"
          className="rounded-lg shadow-lg h-81 w-auto mx-auto object-cover"
         />

            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
