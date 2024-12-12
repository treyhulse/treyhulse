import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-16">
      <header className="text-center pb-8 border-b border-zinc-200 dark:border-zinc-800">
        <h1 className="text-5xl font-bold tracking-tight mb-4">Trey Hulse</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">Web Developer & Entrepreneur</p>
      </header>

      <section>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <span className="text-zinc-900 dark:text-zinc-100">Work Experience</span>
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800 ml-4" />
        </h2>
        
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl mb-1">Web Developer</CardTitle>
                <p className="text-base font-medium text-zinc-700 dark:text-zinc-300">KC Store Fixtures</p>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap">March 2024 - Present</p>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>Serve as an interdepartmental technological linkage to solve business problems, create tools that drive employee efficiency, and define new revenue pathways through innovative technology solutions.</li>
              <li>Built a 77-page enterprise Next.js application with user authentication, role-based access control (RBAC), and cron jobs. Supports internal needs such as transportation management, inventory forecasting, material resource planning (MRP), AI-driven product recommendations, and more.</li>
              <li>Streamlined and resolved workflow bottlenecks by developing SuiteScript customizations and redesigning business processes in the Oracle NetSuite environment.</li>
              <li>Consolidated customer accounts and optimized database management to avoid exceeding limits.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Owner</CardTitle>
            <p className="text-sm text-muted-foreground">Blackout Bluejay | August 2022 - Present</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Founded and scaled a clothing brand to generate 5-figure annual revenue, securing investor capital to support company growth.</li>
              <li>Director of all core business operations including collegiate licensing partnerships, ERP accounting, inventory management, and automated order fulfillment processes.</li>
              <li>Built a clothing customizer and community forum interface enabling custom orders and community engagement.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <span className="text-zinc-900 dark:text-zinc-100">Education</span>
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800 ml-4" />
        </h2>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Emporia State University</CardTitle>
            <p className="text-sm text-muted-foreground">December 2024</p>
          </CardHeader>
          <CardContent>
            <p>Master of Business Administration, Focus on Information Systems</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Creighton University</CardTitle>
            <p className="text-sm text-muted-foreground">August 2019 - May 2023</p>
          </CardHeader>
          <CardContent>
            <p>Bachelor of Science in Exercise Science, Minor: Biology</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <span className="text-zinc-900 dark:text-zinc-100">Technical Skills</span>
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800 ml-4" />
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="font-bold text-lg mb-3 text-zinc-900 dark:text-zinc-100">Front End Frameworks</p>
            <div className="flex flex-wrap gap-2">
              {["React", "NEXTJS", "HTML", "CSS"].map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="px-4 py-1 text-sm bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-lg mb-3">Back End Frameworks</p>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Django", "Flask", "ASP.NET"].map((skill) => (
                <Badge key={skill} variant="secondary" className="px-4 py-1 text-sm">{skill}</Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-lg mb-3">Databases</p>
            <div className="flex flex-wrap gap-2">
              {["Oracle DB", "Mongo DB", "PostgreSQL"].map((skill) => (
                <Badge key={skill} variant="secondary" className="px-4 py-1 text-sm">{skill}</Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-lg mb-3">Platforms</p>
            <div className="flex flex-wrap gap-2">
              {["Heroku", "Vercel", "Azure"].map((skill) => (
                <Badge key={skill} variant="secondary" className="px-4 py-1 text-sm">{skill}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <span className="text-zinc-900 dark:text-zinc-100">Leadership</span>
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800 ml-4" />
        </h2>
        <ul className="grid md:grid-cols-2 gap-4">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            <span className="text-zinc-700 dark:text-zinc-300">VP of Administration, Exercise Science Department (2022-23)</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            <span className="text-zinc-700 dark:text-zinc-300">President, Opus Hall and Davis Square (2020-21)</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            <span className="text-zinc-700 dark:text-zinc-300">Vice President, Swanson Hall (2019-20)</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            <span className="text-zinc-700 dark:text-zinc-300">President of National Honor Society, Lawrence High School (2018-19)</span>
          </li>
        </ul>
      </section>
    </div>
  )
}