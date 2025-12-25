"use client"

import { useState, useEffect } from "react"
import { MapPin, ExternalLink, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Contact() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="contact" className="py-24 relative scroll-mt-20">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-primary font-mono text-sm">05.</span>
        <h2 className="text-2xl font-bold text-foreground">Get In Touch</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div
        className={cn(
          "max-w-2xl mx-auto text-center opacity-0 transform translate-y-8 transition-all duration-700",
          mounted && "opacity-100 translate-y-0",
        )}
      >
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Looking for a senior developer to build your next e-commerce project? I'm currently available for freelance
          work and always interested in challenging projects that push boundaries.
        </p>

        <a
          href="https://www.upwork.com/freelancers/~017b8bfff119a4418e"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-medium px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300"
        >
          <span>Let's Work Together</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Ukraine (UTC+3)</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
          <div className="flex items-center gap-2">
            <span>English</span>
            <span className="text-primary">Fluent</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
          <a
            href="https://www.upwork.com/freelancers/~017b8bfff119a4418e"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Upwork Profile</span>
          </a>
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-border text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Eugene Reznichenko. Built with Next.js</p>
      </div>
    </section>
  )
}
