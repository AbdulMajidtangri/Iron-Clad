import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Radar, Satellite, Lock, Globe, Users, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import heroimg from '../assets/pexels-pixabay-73871.jpg'
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
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroimg}
            alt="Defense Technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'var(--color-overlay)' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Advanced Defense
              <span className="block" style={{ color: 'var(--color-primary)' }}>
                Technology Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Protecting nations and critical infrastructure with cutting-edge military technology, 
              surveillance systems, and cybersecurity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/products"
                className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Explore Products
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 rounded-lg font-semibold border-2 text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                Request Information
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--color-heading)' }}>
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: 'var(--color-muted)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg)' }}>
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
                style={{ backgroundColor: 'var(--color-surface)' }}
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
      <section className="py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
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