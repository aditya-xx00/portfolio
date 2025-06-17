import { Card, CardContent } from "@/components/ui/card"
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
                I'm a passionate full-stack developer with over 3 years of experience creating digital solutions that
                make a difference. My journey in tech started with a curiosity about how things work, and it has evolved
                into a career dedicated to building exceptional user experiences.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                I specialize in modern web technologies including React, Next.js, Node.js, and various databases. I'm
                always eager to learn new technologies and take on challenging projects that push the boundaries of
                what's possible.
              </p>
              <p className="text-lg text-muted-foreground">
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>
            <div>
              <img src="/placeholder.svg?height=400&width=400" alt="About me" className="rounded-lg shadow-lg w-full" />
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
