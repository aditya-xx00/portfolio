import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2018 - 2022",
      gpa: "3.8/4.0",
      description:
        "Focused on software engineering, algorithms, and data structures. Completed senior project on machine learning applications.",
      achievements: ["Dean's List", "Outstanding Student Award", "Programming Competition Winner"],
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "Tech Academy",
      period: "2022",
      description:
        "Intensive 6-month program covering modern web development technologies including React, Node.js, and database management.",
      achievements: ["Top 5% of cohort", "Best Final Project"],
    },
  ]

  const certifications = [
    "AWS Certified Developer Associate",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer",
    "React Developer Certification",
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>

          <div className="space-y-8 mb-16">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="h-6 w-6 text-primary" />
                      <div>
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <p className="text-muted-foreground">{edu.school}</p>
                      </div>
                    </div>
                    <Badge variant="secondary">{edu.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {edu.gpa && <p className="text-sm text-muted-foreground mb-3">GPA: {edu.gpa}</p>}
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center">
                      <Award className="h-4 w-4 mr-2 text-primary" />
                      Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <Badge key={i} variant="outline">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-6 w-6 mr-3 text-primary" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="justify-start p-3">
                    {cert}
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
