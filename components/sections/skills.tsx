"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function Skills() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js", "Material-UI"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "PHP", "Laravel", "Express", "C# (.NET)", "REST APIs"],
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "MS SQL Server", "Redis", "Oracle"],
    },
    {
      title: "E-commerce",
      skills: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Custom Solutions", "Headless CMS"],
    },
  ]

  return (
    <section id="skills" className="py-24 relative scroll-mt-20">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-primary font-mono text-sm">02.</span>
        <h2 className="text-2xl font-bold text-foreground">Skills</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={cn(
              "group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 opacity-0 transform translate-y-8",
              mounted && "opacity-100 translate-y-0",
            )}
            style={{ transitionDelay: mounted ? `${index * 100}ms` : "0ms" }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1.5 text-sm bg-secondary text-muted-foreground rounded-full hover:text-foreground hover:bg-secondary/80 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
