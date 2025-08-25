import React from "react"
import { Link } from "react-router-dom"
import { Calendar, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function NewsSection() {
  const newsArticles = [
    {
      id: 1,
      title: 'DefenseTech Unveils Next-Generation Radar System',
      excerpt: 'Revolutionary AI-powered radar technology provides unprecedented threat detection capabilities...',
      category: 'Product Launch',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/73873/rocket-launch-rocket-take-off-nasa-73873.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Partnership with NATO for Advanced Cybersecurity Initiative',
      excerpt: 'DefenseTech selected to lead multinational cybersecurity project protecting critical infrastructure...',
      category: 'Partnership',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Record-Breaking Contract for Border Security Systems',
      excerpt: 'Multi-billion dollar contract awarded for comprehensive border monitoring solution...',
      category: 'Contract',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Innovation Award for Drone Detection Technology',
      excerpt: 'DefenseTech receives prestigious technology innovation award for breakthrough in counter-UAS systems...',
      category: 'Award',
      date: '2023-12-20',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <section className="py-16" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-heading)" }}
          >
            Latest News
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--color-muted)" }}
          >
            Discover the latest updates, innovations, and milestones from our
            defense technology solutions.
          </p>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.slice(0, 3).map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              style={{
                backgroundColor: "var(--color-surface)",
                boxShadow: "0 1px 3px var(--color-shadow)",
              }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="px-2 py-1 text-xs font-medium rounded-full"
                    style={{
                      backgroundColor: "var(--color-accent)",
                      color: "var(--color-text)",
                    }}
                  >
                    {article.category}
                  </span>
                  <div
                    className="flex items-center space-x-1 text-sm"
                    style={{ color: "var(--color-muted)" }}
                  >
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                </div>
                <h3
                  className="text-lg font-semibold mb-3 line-clamp-2"
                  style={{ color: "var(--color-heading)" }}
                >
                  {article.title}
                </h3>
                <p
                  className="text-sm mb-4 line-clamp-3"
                  style={{ color: "var(--color-muted)" }}
                >
                  {article.excerpt}
                </p>
                <Link
                  to={`/news/${article.id}`}
                  className="flex items-center space-x-1 text-sm font-medium hover:opacity-70 transition-opacity"
                  style={{ color: "var(--color-primary)" }}
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/news"
            className="inline-flex items-center px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "white",
            }}
          >
            View All News
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
