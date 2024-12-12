import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const projects = [
  {
    title: "E-commerce Platform",
    description: "Developed a full-stack e-commerce solution using Next.js and Node.js",
    type: "Active Site",
    link: "https://example-ecommerce.com",
    tags: ["Next.js", "Node.js", "MongoDB"],
    details: "This project involved creating a scalable e-commerce platform with features such as user authentication, product catalog, shopping cart, and secure payment integration."
  },
  {
    title: "Inventory Management System",
    description: "Created an internal app for efficient inventory tracking and management",
    type: "Private Internal App",
    tags: ["React", "Express", "PostgreSQL"],
    details: "Designed and implemented a comprehensive inventory management system for a large retail chain, resulting in improved stock accuracy and reduced operational costs."
  },
  {
    title: "Sales Process Optimization",
    description: "Streamlined the sales process, resulting in a 30% increase in efficiency",
    type: "Business Process",
    tags: ["Process Mapping", "Automation", "CRM Integration"],
    details: "Analyzed and re-engineered the sales workflow, integrating automation tools and CRM systems to significantly boost team productivity and customer satisfaction."
  },
  {
    title: "Real-time Data Dashboard",
    description: "Built a real-time dashboard for monitoring key business metrics",
    type: "Technical Highlight",
    tags: ["React", "Cache", "Recharts"],
    details: "Developed an interactive, real-time dashboard that visualizes critical business KPIs, enabling data-driven decision making across multiple departments."
  },
  {
    title: "Predictive Analytics Model",
    description: "Developed a machine learning model for predicting customer churn",
    type: "Data Project",
    tags: ["Python", "Scikit-learn", "Pandas"],
    details: "Created and deployed a machine learning model that predicts customer churn with 85% accuracy, allowing the business to proactively engage at-risk customers."
  }
]

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.type}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">{project.description}</p>
              <p className="text-sm text-muted-foreground">{project.details}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                ))}
              </div>
              {project.link && (
                <Button asChild variant="outline">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}