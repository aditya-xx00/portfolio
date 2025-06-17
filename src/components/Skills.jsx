import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"
import { Badge } from "./ui/badge"
import { Code, Database, Palette, Server } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Web Development",
      icon: Code,
      skills: [
        { name: "React/Vite", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 },
         { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
      ],
    },
    {
      title: "Design & Tools",
      icon: Palette,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Photoshop", level: 70 },
        { name: "Responsive Design", level: 90 },
         { name: "Socket.IO", level: 75 },
      ],
    },
      {
      title: "Database",
      icon: Database,
      skills: [
         { name: "MongoDB", level: 85 },
          { name: "SQL", level: 85 }
      ],
    },
  ]

  const additionalSkills = [
    "Test-Driven Development",,
    "Performance Optimization",
    "RESTful APIs",
    "Code Review",
    "Technical Writing",
    "Team Leadership",
    "Problem Solving",
    "Communication",
    "Project Management",
    "Agile/Scrum",
  ]

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Expertise</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <category.icon className="h-6 w-6 text-primary" />
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Additional Skills & Competencies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {additionalSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
