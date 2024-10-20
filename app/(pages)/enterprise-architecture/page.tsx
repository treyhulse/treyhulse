'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Network } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Cloud Migration Strategy",
    description: "Developed and executed a strategy to migrate legacy systems to a cloud-based infrastructure, reducing operational costs by 40%.",
    tags: ["Cloud Architecture", "AWS", "Azure", "Migration Planning"]
  },
  {
    title: "Enterprise API Gateway Implementation",
    description: "Designed and implemented an API gateway to streamline integration between internal and external systems, improving data flow and security.",
    tags: ["API Design", "Microservices", "Security"]
  },
  {
    title: "ERP System Integration",
    description: "Led the integration of a new ERP system with existing business applications, enhancing cross-functional data sharing and reporting capabilities.",
    tags: ["ERP", "System Integration", "Data Mapping"]
  }
]

const skills = [
  "Enterprise Architecture", "Cloud Computing", "System Integration",
  "Microservices", "API Design", "SOA", "TOGAF", "IT Governance",
  "Infrastructure Planning", "Scalability Design"
]

export default function EnterpriseArchitecturePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <Link href="/" passHref>
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Enterprise Architecture & Systems Integration</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Building scalable and integrated IT ecosystems
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Key Projects</h2>
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
          <h2 className="text-3xl font-semibold mb-8 text-center">Expertise & Skills</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline">{skill}</Badge>
            ))}
          </div>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Architectural Approach</CardTitle>
              <CardDescription>Creating robust and flexible IT landscapes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                My approach to enterprise architecture and systems integration focuses on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Aligning IT strategies with overall business objectives</li>
                <li>Designing scalable and adaptable architectures to support future growth</li>
                <li>Implementing best practices in system integration and data management</li>
                <li>Ensuring security and compliance across the IT ecosystem</li>
                <li>Optimizing IT investments through strategic planning and governance</li>
              </ul>
              <div className="flex justify-center mt-6">
                <Network className="h-24 w-24 text-primary" />
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}