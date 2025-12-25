"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="about" className="py-24 relative scroll-mt-20">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-primary font-mono text-sm">01.</span>
        <h2 className="text-2xl font-bold text-foreground">About</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        <div
          className={cn(
            "lg:col-span-3 space-y-6 opacity-0 transform translate-y-8 transition-all duration-700",
            mounted && "opacity-100 translate-y-0",
          )}
        >
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm a senior fullstack developer with a deep focus on{" "}
            <span className="text-foreground font-medium">e-commerce solutions</span>. Over the past 8+ years, I've
            built everything from small business storefronts to complex B2B marketplaces handling thousands of
            transactions daily.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            My expertise lies in creating{" "}
            <span className="text-foreground font-medium">scalable, secure, and high-converting</span> online stores. I
            understand the full e-commerce stack—from payment gateway integrations and inventory management to checkout
            optimization and analytics.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            I take pride in writing clean, maintainable code using OOP and MVC patterns. Whether it's a custom solution
            or working with platforms like Shopify, I deliver results that drive business growth.
          </p>
        </div>

        <div
          className={cn(
            "lg:col-span-2 opacity-0 transform translate-y-8 transition-all duration-700 delay-200",
            mounted && "opacity-100 translate-y-0",
          )}
        >
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              E-commerce Expertise
            </h3>
            <ul className="space-y-3">
              {[
                "Payment Gateway Integration",
                "Inventory Management Systems",
                "Checkout Flow Optimization",
                "Multi-vendor Marketplaces",
                "Subscription & Recurring Billing",
                "Analytics & Conversion Tracking",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
