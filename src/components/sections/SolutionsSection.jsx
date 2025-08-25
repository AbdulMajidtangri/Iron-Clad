import React from "react"
import { Shield, Radar, Satellite } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function SolutionsSection() {
  const solutions = [
    {
      icon: Shield,
      title: "Border Security",
      description:
        "Comprehensive border monitoring and protection systems with intrusion alerts and command center integration.",
      image:
        "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Radar,
      title: "Airport Security",
      description:
        "Advanced security solutions for aviation infrastructure, including runway monitoring and drone detection.",
      image:
        "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Satellite,
      title: "Maritime Defense",
      description:
        "Naval and coastal defense systems with vessel tracking and underwater surveillance.",
      image:
        "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ]

  return (
    <section
      className="py-16"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-heading)" }}
          >
            Our Solutions
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--color-muted)" }}
          >
            Explore our cutting-edge defense and security technologies
            designed for critical operations worldwide.
          </p>
        </div>

        {/* Solutions Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: "var(--color-surface)" }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className="p-2 rounded-full"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: "var(--color-heading)" }}
                  >
                    {solution.title}
                  </h3>
                </div>
                <p
                  className="text-sm mb-4 line-clamp-3"
                  style={{ color: "var(--color-muted)" }}
                >
                  {solution.description}
                </p>
                <Link
                  to="/solutions"
                  className="text-sm font-medium hover:opacity-70"
                  style={{ color: "var(--color-primary)" }}
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/solutions"
            className="inline-flex items-center px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "white",
            }}
          >
            View All Solutions
          </Link>
        </div>
      </div>
    </section>
  )
}
