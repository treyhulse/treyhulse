"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Home, Briefcase, FileText, Mail, Code, Brain, Wrench, ChartNoAxesCombined, Component, Sun, Building2, SendHorizontal } from "lucide-react"

const components: { title: string; href: string; description: string; icon: React.ReactNode }[] = [
  {
    title: "UI/UX Design",
    href: "/ui-ux",
    description: "Crafting intuitive and engaging user experiences.",
    icon: <Component className="w-4 h-4 mr-2" />,
  },
  {
    title: "Data & Analytics",
    href: "/data-analytics",
    description: "Transforming data into actionable insights.",
    icon: <ChartNoAxesCombined className="w-4 h-4 mr-2" />,
  },
  {
    title: "Enterprise Architecture",
    href: "/enterprise-architecture",
    description: "Building scalable and integrated IT ecosystems.",
    icon: <Building2 className="w-4 h-4 mr-2" />,
  },
  {
    title: "Digital Transformation",
    href: "/digital-transformation",
    description: "Driving business growth through technological innovation.",
    icon: <Brain className="w-4 h-4 mr-2" />,
  },
  {
    title: "IT Governance & Strategy",
    href: "/it-governance",
    description: "Aligning IT with business objectives and managing risks.",
    icon: <Code className="w-4 h-4 mr-2" />,
  },
]

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Home className="w-4 h-4 mr-2" />
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Wrench className="w-4 h-4 mr-2" />
            Skills & Experience
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={component.icon}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/projects" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Sun className="w-4 h-4 mr-2" />
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/resume" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <SendHorizontal className="w-4 h-4 mr-2" />
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none flex items-center">
            {icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"