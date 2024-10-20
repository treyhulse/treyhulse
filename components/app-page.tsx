'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-commerce Platform",
    description: "Developed a full-stack e-commerce solution using Next.js and Node.js",
    type: "Active Site",
    link: "https://example-ecommerce.com",
    tags: ["Next.js", "Node.js", "MongoDB"]
  },
  {
    title: "Inventory Management System",
    description: "Created an internal app for efficient inventory tracking and management",
    type: "Private Internal App",
    tags: ["React", "Express", "PostgreSQL"]
  },
  {
    title: "Sales Process Optimization",
    description: "Streamlined the sales process, resulting in a 30% increase in efficiency",
    type: "Business Process",
    tags: ["Process Mapping", "Automation"]
  },
  {
    title: "Real-time Data Dashboard",
    description: "Built a real-time dashboard for monitoring key business metrics",
    type: "Technical Highlight",
    tags: ["React", "Socket.io", "D3.js"]
  },
  {
    title: "Predictive Analytics Model",
    description: "Developed a machine learning model for predicting customer churn",
    type: "Data Project",
    tags: ["Python", "Scikit-learn", "Pandas"]
  }
]

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
  "SQL", "NoSQL", "RESTful APIs", "GraphQL", "AWS", "Docker",
  "Agile Methodologies", "Business Process Modeling", "Data Analysis"
]

export function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Your Name</h1>
          <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">Web Developer & MBA in Information Systems</h2>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Projects & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.type}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{project.description}</p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </CardFooter>
                {project.link && (
                  <CardFooter>
                    <Button asChild variant="link" className="px-0">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline">{skill}</Badge>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">Get in Touch</h2>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
              <CardDescription>I'm always open to new opportunities and collaborations.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input type="text" id="name" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" id="email" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full p-2 border rounded"></textarea>
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}