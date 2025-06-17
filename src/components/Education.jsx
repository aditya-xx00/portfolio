import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { GraduationCap } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      school: "G.L. Bajaj Institute of Technology and Management",
      period: "2022 - 2026",
      location: "Greater Noida, Uttar Pradesh",
      description:
        "Focused on software engineering, algorithms, data structures, Operating System, DBMS and Computer Networks. Learning all this through real life implementations and projects.",
    },
    {
      degree: "XII-(CBSE board)",
      school: "Gurunanak Public School",
      period: "2019 - 2020",
      location: "Prayagraj, Uttar Pradesh",
    },
    {
      degree: "X-(CBSE board)",
      school: "Gurunanak Public School",
      period: "2018 - 2019",
      location: "Prayagraj, Uttar Pradesh",
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Education</h2>

          <div className="space-y-8">
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
                  {edu.location && <p className="text-sm text-muted-foreground mb-1">{edu.location}</p>}
                  {edu.description && <p className="text-muted-foreground">{edu.description}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
