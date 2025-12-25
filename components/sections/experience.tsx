"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function Experience() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const experiences = [
    {
      title: "Freelance Senior Developer",
      company: "Upwork",
      period: "2015 — Present",
      badge: "Top Rated",
      description:
        "Delivering end-to-end e-commerce solutions for international clients. Specialized in custom marketplaces, Shopify development, and payment integrations.",
    },
    {
      title: "Senior Software Engineer",
      company: "Municipal Utility ITMC",
      period: "2016 — 2019",
      description:
        "Led development of enterprise web applications. Architected database systems and implemented client-server solutions for municipal services.",
    },
    {
      title: "Software Engineer",
      company: "Municipal Utility MKS",
      period: "2013 — 2015",
      description:
        "Developed and maintained web applications using PHP and JavaScript. Designed database architectures and collaborated with cross-functional teams.",
    },
  ]

  return (
    <section id="experience" className="py-24 relative scroll-mt-20">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-primary font-mono text-sm">04.</span>
        <h2 className="text-2xl font-bold text-foreground">Experience</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={cn(
                "relative pl-8 md:pl-0 opacity-0 transform translate-y-8 transition-all duration-700",
                mounted && "opacity-100 translate-y-0",
                index % 2 === 0 ? "md:pr-[calc(50%+2rem)] md:text-right" : "md:pl-[calc(50%+2rem)]",
              )}
              style={{ transitionDelay: mounted ? `${index * 150}ms` : "0ms" }}
            >
              {/* Timeline dot */}
              <div
                className={cn(
                  "absolute left-0 md:left-1/2 top-2 w-3 h-3 rounded-full bg-primary border-4 border-background md:-translate-x-1/2",
                )}
              />

              <div
                className={cn(
                  "bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300",
                  index % 2 === 0 ? "md:mr-4" : "md:ml-4",
                )}
              >
                <div className={cn("flex items-center gap-3 mb-2", index % 2 === 0 ? "md:justify-end" : "")}>
                  <span className="text-sm font-mono text-muted-foreground">{exp.period}</span>
                  {exp.badge && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {exp.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
