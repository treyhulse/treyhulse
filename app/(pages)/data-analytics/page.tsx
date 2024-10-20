'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BarChart, PieChart, LineChart } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Sales Forecasting Model",
    description: "Developed a machine learning model to forecast sales, improving inventory management by 30%.",
    tags: ["Python", "Scikit-learn", "Time Series Analysis"]
  },
  {
    title: "Customer Segmentation Analysis",
    description: "Conducted cluster analysis to identify key customer segments, leading to targeted marketing campaigns.",
    tags: ["R", "K-means Clustering", "Data Visualization"]
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Built a real-time dashboard for monitoring KPIs, resulting in faster decision-making processes.",
    tags: ["Tableau", "SQL", "ETL"]
  }
]

const skills = [
  "Data Analysis", "Machine Learning", "Statistical Modeling",
  "Data Visualization", "SQL", "Python", "R", "Tableau",
  "Big Data Technologies", "ETL Processes"
]

export default function DataAnalyticsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <Link href="/" passHref>
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Data & Analytics</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Transforming data into actionable insights
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
              <CardTitle>Data-Driven Decision Making</CardTitle>
              <CardDescription>Leveraging analytics to drive business value</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                My approach to data and analytics focuses on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identifying key business questions and relevant data sources</li>
                <li>Applying advanced analytics techniques to extract meaningful insights</li>
                <li>Creating clear and impactful data visualizations</li>
                <li>Translating analytical findings into actionable business strategies</li>
                <li>Implementing data governance and quality assurance practices</li>
              </ul>
              <div className="flex justify-center space-x-4 mt-6">
                <BarChart className="h-12 w-12 text-primary" />
                <PieChart className="h-12 w-12 text-primary" />
                <LineChart className="h-12 w-12 text-primary" />
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}