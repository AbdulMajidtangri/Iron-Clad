import React from "react"
import { motion } from "framer-motion"
import { FileText, Video, BookOpen, Download } from "lucide-react"

export default function ResourcesSection() {
  // Example: pick just a few featured resources
  const featuredResources = [
    {
      id: 1,
      title: "Advanced Radar Systems: Technical Overview",
      type: "Whitepaper",
      description: "Comprehensive guide on next-generation radar technology.",
      icon: FileText,
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Defense",
      type: "Guide",
      description: "Essential framework for protecting critical infrastructure.",
      icon: BookOpen,
    },
    {
      id: 3,
      title: "Border Security Solutions Demo",
      type: "Video",
      description: "Live demonstration of border monitoring & threat detection.",
      icon: Video,
    },
  ]

  const getTypeColor = (type) => {
    const colors = {
      Whitepaper: "var(--color-primary)",
      Guide: "var(--color-accent)",
      Video: "var(--color-info)",
    }
    return colors[type] || "var(--color-muted)"
  }

  return (
    <section className="py-16" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: "var(--color-heading)" }}
        >
          Resources & Documentation
        </h2>
        <p
          className="text-lg mb-12 max-w-2xl mx-auto"
          style={{ color: "var(--color-muted)" }}
        >
          Access whitepapers, case studies, and training materials to stay ahead
          in defense technology.
        </p>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg border hover:shadow-lg transition-all duration-300 text-left"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className="p-2 rounded-lg"
                  style={{
                    backgroundColor: getTypeColor(resource.type) + "20",
                  }}
                >
                  <resource.icon
                    className="w-6 h-6"
                    style={{ color: getTypeColor(resource.type) }}
                  />
                </div>
                <span
                  className="text-sm font-medium px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: getTypeColor(resource.type) + "20",
                    color: getTypeColor(resource.type),
                  }}
                >
                  {resource.type}
                </span>
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--color-heading)" }}
              >
                {resource.title}
              </h3>
              <p className="text-sm" style={{ color: "var(--color-muted)" }}>
                {resource.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href="/resources"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: "var(--color-primary)", color: "white" }}
          >
            <Download className="w-5 h-5" />
            <span>View All Resources</span>
          </a>
        </div>
      </div>
    </section>
  )
}
