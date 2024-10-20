'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "E-commerce Redesign",
    description: "Revamped the user interface of an e-commerce platform, resulting in a 25% increase in conversion rates.",
    tags: ["User Research", "Wireframing", "Prototyping", "A/B Testing"]
  },
  {
    title: "Mobile App UX Optimization",
    description: "Improved the user experience of a mobile banking app, leading to a 40% increase in daily active users.",
    tags: ["Mobile Design", "User Flow Analysis", "Usability Testing"]
  },
  {
    title: "Accessibility Audit & Improvement",
    description: "Conducted an accessibility audit and implemented improvements to meet WCAG 2.1 AA standards.",
    tags: ["Accessibility", "WCAG", "Screen Reader Testing"]
  }
]

const skills = [
  "User-Centered Design", "Wireframing", "Prototyping", "User Research",
  "Usability Testing", "Information Architecture", "Interaction Design",
  "Visual Design", "Responsive Design", "Design Systems"
]

export default function UIUXPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <Link href="/" passHref>
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">UI/UX Design</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Crafting intuitive and engaging user experiences
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Featured Projects</h2>
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
          <h2 className="text-3xl font-semibold mb-8 text-center">Skills & Tools</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline">{skill}</Badge>
            ))}
          </div>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>My Approach to UI/UX</CardTitle>
              <CardDescription>User-centered design principles that drive results</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                My approach to UI/UX design is rooted in understanding user needs and business goals. I believe in:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Conducting thorough user research to inform design decisions</li>
                <li>Creating intuitive information architectures that guide users effortlessly</li>
                <li>Designing visually appealing interfaces that align with brand identities</li>
                <li>Iterating based on user feedback and quantitative data</li>
                <li>Ensuring accessibility and inclusivity in all designs</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}