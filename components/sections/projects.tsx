"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Projects() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
    {
      title: "B2B Marketplace Platform",
      description:
        "Full-featured B2B marketplace for wholesale services with vendor management, bulk ordering, RFQ system, and integrated payment processing. Handles 1000+ daily transactions.",
      techStack: ["Node.js", "React", "PostgreSQL", "Stripe", "Redis"],
      type: "E-commerce",
      featured: true,
      image: "/b2b-marketplace-dashboard-with-analytics-and-vendo.jpg",
      highlights: ["1000+ Daily Transactions", "Multi-vendor System", "Real-time Inventory"],
    },
    {
      title: "Natural Cosmetics E-commerce",
      description:
        "Custom headless e-commerce solution for premium cosmetics brand with Shopify backend, subscription boxes, loyalty program, and advanced product recommendations.",
      techStack: ["Shopify", "Next.js", "Node.js", "Klaviyo"],
      type: "E-commerce",
      featured: true,
      image: "/luxury-cosmetics-ecommerce-website-with-elegant-pr.jpg",
      highlights: ["Headless Architecture", "Subscription System", "AI Recommendations"],
    },
    {
      title: "Your Days Out",
      description:
        "Event discovery platform with map integration, real-time availability, ticket booking system, and venue management dashboard.",
      techStack: ["Laravel", "MS SQL Server", "Vue.js", "Maps API"],
      type: "Web App",
      image: "/event-discovery-app-with-interactive-map-and-event.jpg",
      highlights: ["Interactive Maps", "Real-time Booking", "Venue Dashboard"],
    },
    {
      title: "EmailMeForm Builder",
      description:
        "Enterprise form builder with advanced validation, conditional logic, payment collection, and GDPR-compliant data handling.",
      techStack: ["Laravel", "React", "MySQL", "REST API"],
      type: "SaaS",
      image: "/modern-form-builder-interface-with-drag-and-drop-c.jpg",
      highlights: ["Drag & Drop Builder", "Payment Integration", "GDPR Compliant"],
    },
  ]

  return (
    <section id="projects" className="py-24 relative scroll-mt-20">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-primary font-mono text-sm">03.</span>
        <h2 className="text-2xl font-bold text-foreground">Selected Work</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={cn(
              "group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 opacity-0 transform translate-y-8",
              mounted && "opacity-100 translate-y-0",
            )}
            style={{ transitionDelay: mounted ? `${index * 150}ms` : "0ms" }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 md:h-80 overflow-hidden bg-secondary">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:bg-gradient-to-r" />

                {/* Floating badges on image */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1.5 text-xs font-semibold bg-primary text-primary-foreground rounded-full shadow-lg">
                    {project.type}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1.5 text-xs font-semibold bg-background/90 text-foreground rounded-full shadow-lg backdrop-blur-sm">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{project.description}</p>

                {/* Highlights */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.highlights.map((highlight, hIndex) => (
                    <span
                      key={hIndex}
                      className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mt-6 pt-5 border-t border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
