import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Radar, Satellite, Lock, Globe, Users, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import heroImage from '../assets/pexels-pixabay-73871.jpg'

export default function Home() {
  const featuredProducts = products.slice(0, 3)
  
  const stats = [
    { label: 'Countries Served', value: '45+', icon: Globe },
    { label: 'Active Deployments', value: '1,200+', icon: Shield },
    { label: 'Government Clients', value: '150+', icon: Users },
    { label: 'Years Experience', value: '25+', icon: Award }
  ]

  const capabilities = [
    {
      icon: Radar,
      title: 'Advanced Surveillance',
      description: 'Next-generation radar and sensor systems for comprehensive threat detection and monitoring.'
    },
    {
      icon: Satellite,
      title: 'Secure Communications',
      description: 'Military-grade communication systems with encryption and satellite connectivity.'
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description: 'AI-powered cyber defense platforms protecting critical infrastructure worldwide.'
    }
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
      <section className="py-16" style={{ backgroundColor: 'var(--color-bg)' }}>
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

      {/* Capabilities Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-heading)' }}>
              Core Capabilities
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
              Comprehensive defense solutions designed for modern security challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: 'var(--color-bg)' }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }}>
                    <capability.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
                  {capability.title}
                </h3>
                <p style={{ color: 'var(--color-muted)' }}>
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-heading)' }}>
                Featured Products
              </h2>
              <p className="text-lg" style={{ color: 'var(--color-muted)' }}>
                Advanced solutions for modern defense requirements
              </p>
            </div>
            <Link 
              to="/products"
              className="flex items-center space-x-2 font-medium hover:opacity-70 transition-opacity"
              style={{ color: 'var(--color-primary)' }}
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Enhance Your Defense Capabilities?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Contact our team of experts to discuss your specific requirements and explore 
            customized solutions for your organization.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            style={{ color: 'var(--color-primary)' }}
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}