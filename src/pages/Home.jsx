import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Radar, Satellite, Lock, Globe, Users, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import heroImage from '../assets/pexels-pixabay-73871.jpg'
import AboutPreview from '../components/sections/AboutPreview'
import ResourcesSection from '../components/sections/ResourcesSection'
import NewsSection from '../components/sections/NewsSection'
import SolutionsSection from '../components/sections/SolutionsSection'
import ProductSection from '../components/sections/ProductSection'
import CTASection from '../components/sections/CTASection'
export default function Home() {
  
  const stats = [
    { label: 'Countries Served', value: '45+', icon: Globe },
    { label: 'Active Deployments', value: '1,200+', icon: Shield },
    { label: 'Government Clients', value: '150+', icon: Users },
    { label: 'Years Experience', value: '25+', icon: Award }
  ]


  return (
    <div className='w-full'>
     {/* Hero Section */}
<section className=" w-full min-h-screen relative flex items-center" style={{ backgroundColor: 'var(--color-bg)' }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
    <div className="flex flex-col md:flex-row items-center">
      {/* Image - Top on Mobile, Right on Desktop */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2  order-1 md:order-2 mb-8 md:mb-0 flex justify-center"
      >
        <img 
          src={heroImage}
          alt="Defense Technology"
          className="rounded-lg shadow-xl w-full max-w-md md:max-w-full h-auto max-h-80 md:max-h-96 object-cover"
        />
      </motion.div>
      {/* Text Content - Bottom on Mobile, Left on Desktop */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 order-2 md:order-1 md:pr-10 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--color-heading)' }}>
          Advanced Defense
          <span className="block" style={{ color: 'var(--color-primary)' }}>
            Technology Solutions
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-8" style={{ color: 'var(--color-muted)' }}>
          Protecting nations and critical infrastructure with cutting-edge military technology, 
          surveillance systems, and cybersecurity solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link 
            to="/products"
            className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 text-center"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Explore Products
          </Link>
          <Link 
            to="/contact"
            className="px-8 py-4 rounded-lg font-semibold border-2 transition-all duration-300 text-center"
            style={{ 
              borderColor: 'var(--color-primary)', 
              color: 'var(--color-primary)',
              backgroundColor: 'transparent'
            }}
          >
            Request Information
          </Link>
        </div>
      </motion.div>
    </div>
  </div>
</section>
      {/* Stats Section - Updated */}
      <section style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110" 
                       style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2 transition-all duration-300 group-hover:scale-105" 
                     style={{ color: 'var(--color-primary)' }}>
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-wider font-medium" 
                     style={{ color: 'var(--color-muted)' }}>
                  {stat.label}
                </div>
                <div className="mt-4 mx-auto w-12 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ backgroundColor: 'var(--color-primary)' }}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <AboutPreview />
    <SolutionsSection />  {/* Featured Products */}
      <ProductSection />
      <ResourcesSection />
      <NewsSection />
      {/* CTA Section */}
      <CTASection />
    </div>
  )
}