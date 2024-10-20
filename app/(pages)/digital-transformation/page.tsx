'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Lightbulb } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "AI-Powered Customer Service",
    description: "Implemented an AI chatbot system, reducing customer service response times by 60% and improving satisfaction rates.",
    tags: ["AI", "Machine Learning", "Customer Experience"]
  },
  {
    title: "Blockchain for Supply Chain",
    
    description: "Piloted a blockchain solution for supply chain transparency, enhancing traceability and reducing fraud risks.",
    tags: ["Blockchain", "Supply Chain", "Smart Contracts"]
  },
  {
    title: "IoT-Enabled Predictive Maintenance",
    description: "Developed an IoT system for predictive maintenance in manufacturing, reducing downtime by 35% and maintenance costs by 25%.",
    tags: ["IoT", "Predictive Analytics", "Industry 4.0"]
  }
]

const skills = [
  "Digital Strategy", "Change Management", "Agile Methodologies",
  "Emerging Technologies", "Innovation Management", "Design Thinking",
  "Business Process Reengineering", "Technology Adoption", "AI/ML",
  "Blockchain", "IoT"
]

export default function DigitalTransformationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <Link href="/" passHref>
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Digital Transformation & Innovation</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Driving business growth through technological innovation
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Innovative Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Transformation Skills</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline">{skill}</Badge>
            ))}
          </div>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Innovation Philosophy</CardTitle>
              <CardDescription>Embracing change and driving digital evolution</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                My approach to digital transformation and innovation centers on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identifying opportunities for digital disruption and improvement</li>
                <li>Fostering a culture of innovation and continuous learning</li>
                <li>Leveraging emerging technologies to solve business challenges</li>
                <li>Implementing agile methodologies for rapid prototyping and deployment</li>
                <li>Measuring and optimizing the impact of digital initiatives</li>
              </ul>
              <div className="flex justify-center mt-6">
                <Lightbulb className="h-24 w-24 text-primary" />
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}