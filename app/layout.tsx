import './globals.css'
import { Inter } from 'next/font/google'
import { MainNav } from '@/components/main-nav'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Trey Hulse - Web Developer & MBA',
  description: 'Portfolio of Trey Hulse, a web developer with an MBA in information systems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-full bg-background text-foreground`}>
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 flex justify-start h-14 items-center">
            <MainNav />
          </div>
        </header>
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 max-w-6xl">
            {children}
          </div>
        </main>
        <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-6 text-center text-sm">
            © {new Date().getFullYear()} Trey Hulse. All rights reserved.
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  )
}