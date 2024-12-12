'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "IT Governance Framework Implementation",
    description: "Developed and implemented a comprehensive IT governance framework, aligning IT initiatives with business objectives and improving project success rates by 40%.",
    tags: ["COBIT", "ITIL", "Risk Management"]
  },
  {
    title: "Cybersecurity Strategy Overhaul",
    description: "Led a company-wide cybersecurity strategy overhaul, resulting in a 60% reduction in security incidents and improved compliance with industry regulations.",
    tags: ["Cybersecurity", "Risk Assessment", "Compliance"]
  },
  {
    title: "IT Budget Optimization",
    description: "Implemented a strategic IT budgeting process, optimizing resource allocation and reducing IT spending by 25% while maintaining service quality.",
    tags: ["Financial Management", "Resource Allocation", "TCO Analysis"]
  }
]

const skills = [
  "IT Governance", "Strategic Planning", "Risk Management",
  "Compliance", "ITIL", "COBIT", "Cybersecurity",
  "Budgeting & Forecasting", "Vendor Management", "Policy Development"
]

export default function ITGovernancePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <Link href="/" passHref>
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">IT Governance & Strategy</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Aligning IT with business objectives and managing risks
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Strategic Initiatives</h2>
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
          <h2 className="text-3xl font-semibold mb-8 text-center">Governance Expertise</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline">{skill}</Badge>
            ))}
          </div>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Governance Approach</CardTitle>
              <CardDescription>Ensuring IT delivers value and manages risks effectively</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                My approach to IT governance and strategy focuses on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Aligning IT initiatives with overall business strategy</li>
                <li>Implementing robust risk management and compliance frameworks</li>
                <li>Optimizing IT investments and resource allocation</li>
                <li>Ensuring transparency and accountability in IT decision-making</li>
                <li>Fostering a culture of continuous improvement and innovation</li>
              </ul>
              <div className="flex justify-center mt-6">
                <Shield className="h-24 w-24 text-primary" />
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}