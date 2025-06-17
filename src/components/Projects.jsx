import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "SkillCheckr - MCQ Practice & Tracker",
      description:
        "A full-stack MERN app that allows users to take categorized quizzes, track performance, and manage accounts through secure authentication.",
      image: "/portfolio/quizz.png",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
      features: [
        "Category-wise MCQ Quizzes",
        "Performance Tracking",
        "JWT Authentication",
        "User Progress Dashboard",
      ],
      liveUrl: "https://skillcheckr.onrender.com/",
      githubUrl: "https://github.com/aditya-xx00/SkillCheckr",
      featured: true,
    },
    {
      title: "Drawly - Real-Time Collaborative Board",
      description:
        "A collaborative whiteboard enabling multiple users to draw live with different tools like pencil, rectangle, circle, rhombus, and arrow. It enables the users to share their strategies and ideas in real-time.",
      image: "/portfolio/drawing.png",
      technologies: ["React", "Node.js", "Express.js", "Socket.IO", "Tailwind CSS"],
      features: [
        "Real-time Canvas Syncing",
        "Multiple Drawing Tools",
        "Room-based Access with IDs",
        "Canvas Persistence",
      ],
      liveUrl: "https://drawly-1.onrender.com/",
      githubUrl: "https://github.com/aditya-xx00/Drawly",
      featured: true,
    },
    {
      title: "Password Generator",
      description:
        "A simple yet powerful password generator that allows users to specify password length, include special characters, numbers, and copy to clipboard functionality.",
      image: "/pawassword.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Customizable Password Length",
        "Include Special Characters and Numbers",
        "Copy to Clipboard",
        "Responsive UI",
      ],
      liveUrl: "https://aditya-xx00.github.io/password-generator/",
      githubUrl: "https://github.com/aditya-xx00/password-generator",
      featured: false,
    },
    {
  title: "Currency Converter",
  description:
    "A real-time currency converter allowing users to select different currencies and view accurate exchange rates using a live API.",
  image: "/currency-converter.jpg", // Ensure this image exists in your public folder or replace it
  technologies: ["HTML", "CSS", "JavaScript", "Exchange Rate API"],
  features: [
    "Real-time Exchange Rate Fetching",
    "Multiple Currency Options",
    "Bidirectional Conversion",
    "Responsive UI",
  ],
  liveUrl: "https://aditya-xx00.github.io/currency-converter/", // Update if needed
  githubUrl: "https://github.com/aditya-xx00/currency-converter", // Replace with actual repo
  featured: false,
 },
 {
  title: "Job Portal",
  description:
    "A comprehensive job portal enabling streamlined interaction between job seekers and employers with features like role-based access, job postings, application tracking, and more.",
  image: "/jobportal.png", // Ensure this image exists in your public folder or replace with actual name
  technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Multer"],
  features: [
    "Role-based Authentication (Admin, Employer, Job Seeker)",
    "Job Posting & Application Tracking",
    "Resume Upload & Profile Management",
    "Advanced Filtering & Search",
    "Employer Dashboards & Messaging",
    "Admin Tools for Moderation",
  ],
  liveUrl: "https://your-job-portal-url.com", // ← Replace with your actual live link
  githubUrl: "https://github.com/aditya-xx00/Job-Portal", // ← Replace with actual repo
  featured: false,
},
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8">Featured Projects</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{project.description}</p>

                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Projects (Simplified) */}
          {otherProjects.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-8">Other Projects</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {otherProjects.map((project, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {project.title}
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                          <Button variant="ghost" size="icon" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
