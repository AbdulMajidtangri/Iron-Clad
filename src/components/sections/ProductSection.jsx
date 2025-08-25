import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import ProductCard from "../ProductCard"
import { products } from "../../data/products"

export default function ProductSection({
  title = "Featured Products",
  subtitle = "Advanced solutions for modern defense requirements",
  limit = 3, // show only 3 by default
  showLink = true,
}) {
  const displayedProducts = limit ? products.slice(0, limit) : products

  return (
    <section className="py-20" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "var(--color-heading)" }}
            >
              {title}
            </h2>
            <p className="text-lg" style={{ color: "var(--color-muted)" }}>
              {subtitle}
            </p>
          </div>

          {showLink && (
            <Link
              to="/products"
              className="flex items-center space-x-2 font-medium hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-primary)" }}
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
