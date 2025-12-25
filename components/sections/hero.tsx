"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center relative" id="hero">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-6xl">
        <div className="max-w-4xl">
          <div
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 opacity-0 transform translate-y-4 transition-all duration-700",
              mounted && "opacity-100 translate-y-0",
            )}
          >
            <ShoppingCart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">E-commerce Specialist</span>
          </div>

          <h1
            className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] opacity-0 transform translate-y-4 transition-all duration-700 delay-100",
              mounted && "opacity-100 translate-y-0",
            )}
          >
            <span className="text-foreground">Senior Fullstack</span>
            <br />
            <span className="text-foreground">Developer</span>
            <span className="text-primary">.</span>
          </h1>

          <p
            className={cn(
              "mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed opacity-0 transform translate-y-4 transition-all duration-700 delay-200",
              mounted && "opacity-100 translate-y-0",
            )}
          >
            Building high-performance e-commerce solutions and web applications with{" "}
            <span className="text-foreground font-medium">8+ years</span> of experience. Specializing in PHP, React.js,
            and Node.js.
          </p>

          <div
            className={cn(
              "mt-10 flex flex-wrap gap-4 opacity-0 transform translate-y-4 transition-all duration-700 delay-300",
              mounted && "opacity-100 translate-y-0",
            )}
          >
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-300"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://www.upwork.com/freelancers/~017b8bfff119a4418e"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-foreground font-medium px-6 py-3 rounded-full hover:bg-secondary/80 transition-all duration-300 border border-border"
            >
              Hire Me on Upwork
            </a>
          </div>

          <div
            className={cn(
              "mt-16 grid grid-cols-3 gap-8 max-w-lg opacity-0 transform translate-y-4 transition-all duration-700 delay-500",
              mounted && "opacity-100 translate-y-0",
            )}
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">8+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Job Success</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
