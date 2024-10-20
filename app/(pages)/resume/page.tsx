import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ResumePage() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-center mb-8">Resume</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Senior Web Developer</CardTitle>
            <p className="text-sm text-muted-foreground">TechCorp Inc. | 2018 - Present</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Led development of enterprise-level web applications using React and Node.js</li>
              <li>Implemented CI/CD pipelines, reducing deployment time by 40%</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Full Stack Developer</CardTitle>
            <p className="text-sm text-muted-foreground">WebSolutions Co. | 2015 - 2018</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Developed and maintained multiple client websites using various technologies</li>
              <li>Optimized database queries, improving application performance by 30%</li>
              <li>Collaborated with design team to implement responsive UI/UX designs</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <Card>
          <CardHeader>
            <CardTitle>MBA in Information Systems</CardTitle>
            <p className="text-sm text-muted-foreground">University of Technology | 2020 - 2022</p>
          </CardHeader>
          <CardContent>
            <p>Focused on aligning IT strategies with business objectives and data-driven decision making</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["JavaScript", "TypeScript", "React", "Node.js", "Python", "SQL", "NoSQL", "AWS", "Docker", "CI/CD", "Agile Methodologies", "UI/UX Design", "Data Analysis"].map((skill, index) => (
            <Badge key={index} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>AWS Certified Solutions Architect</li>
          <li>Certified Scrum Master (CSM)</li>
          <li>Google Analytics Individual Qualification</li>
        </ul>
      </section>
    </div>
  )
}