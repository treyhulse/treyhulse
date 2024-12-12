import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'

import ecommercePlatformImage from '@/src/images/Ecommerce.png'
import inventoryManagementImage from '@/src/images/Warehouse.png'
import salesProcessImage from '@/src/images/TotalRevenue.png'
import dataDashboardImage from '@/src/images/TotalRevenue.png'
import predictiveAnalyticsImage from '@/src/images/TotalRevenue.png'

const projects = [
  {
    title: "E-commerce Platform",
    description: "Developed a full-stack e-commerce solution using Next.js and Node.js",
    type: "Active Site",
    link: "https://kc-store-fixtures.com",
    tags: ["Next.js", "Node.js", "MongoDB"],
    image: ecommercePlatformImage
  },
  {
    title: "Inventory Management System",
    description: "Created an internal app for efficient inventory tracking and management",
    type: "Private Internal App",
    tags: ["React", "SVG", "Express"],
    image: inventoryManagementImage
  },
  {
    title: "Sales Process Optimization",
    description: "Streamlined the sales process, resulting in a 30% increase in efficiency",
    type: "Business Process",
    tags: ["Process Mapping", "Automation"],
    image: salesProcessImage
  },
  {
    title: "Real-time Data Dashboard",
    description: "Built a real-time dashboard for monitoring key business metrics",
    type: "Technical Highlight",
    tags: ["Python", "Streamlit.io", "Pandas"],
    image: dataDashboardImage
  },
  {
    title: "Predictive Analytics Model",
    description: "Developed a machine learning model for predicting customer churn",
    type: "Data Project",
    tags: ["Python", "Scikit-learn", "Machine Learning"],
    image: predictiveAnalyticsImage
  }
]

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
  "SQL/NoSQL", "User Auth and Permissions", "RESTful APIs", "Dashboarding", "Caching", "Version Control",
  "Agile Methodologies", "Business Process Modeling", "Data Analysis"
]

const coreCompetencies = [
  { title: "UI/UX Design", href: "/ui-ux", description: "Crafting intuitive and engaging user experiences" },
  { title: "Data & Analytics", href: "/data-analytics", description: "Transforming data into actionable insights" },
  { title: "Enterprise Architecture", href: "/enterprise-architecture", description: "Building scalable and integrated IT ecosystems" },
  { title: "Digital Transformation", href: "/digital-transformation", description: "Driving business growth through technological innovation" },
  { title: "IT Strategy", href: "/it-strategy", description: "Aligning IT with business objectives and managing risks" }
]

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight mb-4">Trey Hulse</h1>
        <h2 className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Web Developer & MBA in Information Systems
        </h2>
        <div className="flex justify-center gap-4">
          <Button asChild variant="outline" size="icon" className="rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <a href="https://github.com/treyhulse" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <a href="https://www.linkedin.com/in/trey-hulse-8a5968241" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <a href="mailto:treyhulse3@gmail.com" aria-label="Email Me">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-zinc-600 dark:text-zinc-400">
                  {project.type}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-zinc-700 dark:text-zinc-300">{project.description}</p>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                {project.link && (
                  <Button asChild variant="outline" className="w-full bg-zinc-900 text-white hover:bg-zinc-700 hover:text-white">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreCompetencies.map((competency, index) => (
            <Card 
              key={index} 
              className="flex flex-col hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              <CardHeader>
                <CardTitle className="text-xl">{competency.title}</CardTitle>
                <CardDescription className="text-zinc-600 dark:text-zinc-400">
                  {competency.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-end">
                <Link href={competency.href} passHref>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <Badge 
              key={index} 
              variant="outline"
              className="px-4 py-2 text-base bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  )
}