// src/components/sections/AboutPreview.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import aboutimg from '../../assets/army-5672439_1280.jpg'
export default function AboutPreview() {
  return (
    <section className="py-20" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: 'var(--color-heading)' }}
          >
            About Us
          </h2>
          <p 
            className="text-lg mb-6"
            style={{ color: 'var(--color-muted)' }}
          >
            For over two decades, DefenseTech has been at the forefront of defense 
            technology, protecting nations, securing borders, and safeguarding critical 
            infrastructure worldwide.
          </p>
          <Link 
            to="/about"
            className="inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            style={{ 
              backgroundColor: 'var(--color-primary)', 
              color: 'white' 
            }}
          >
            Learn More
          </Link>
        </motion.div>

        {/* Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img 
            src={aboutimg}
            alt="About DefenseTech" 
            className="rounded-xl shadow-lg object-cover w-full h-[300px] md:h-[400px]"
          />
        </motion.div>
      </div>
    </section>
  )
}
