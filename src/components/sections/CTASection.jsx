import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function CTASection({
  title = "Ready to Enhance Your Defense Capabilities?",
  description = "Contact our team of experts to discuss your specific requirements and explore customized solutions for your organization.",
  buttonText = "Get Started",
  buttonLink = "/contact",
  bgColor = "var(--color-primary)",
}) {
  return (
    <section className="py-20" style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          {title}
        </h2>
        <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
          {description}
        </p>
        <Link
          to={buttonLink}
          className="inline-flex items-center space-x-2 px-8 py-4 bg-white rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          style={{ color: "var(--color-primary)" }}
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
