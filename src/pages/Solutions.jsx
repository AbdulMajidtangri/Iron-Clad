import React from 'react'
import { Shield, Radar, Satellite, Lock, Globe, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Solutions() {
  const solutions = [
    {
      icon: Shield,
      title: 'Border Security',
      description: 'Comprehensive border monitoring and protection systems',
      features: ['Perimeter detection', 'Intrusion alerts', 'Multi-sensor fusion', 'Command center integration'],
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Radar,
      title: 'Airport Security',
      description: 'Advanced security solutions for aviation infrastructure',
      features: ['Runway monitoring', 'Drone detection', 'Passenger screening', 'Cargo inspection'],
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Satellite,
      title: 'Maritime Defense',
      description: 'Naval and coastal security systems',
      features: ['Vessel tracking', 'Underwater surveillance', 'Port security', 'Anti-piracy systems'],
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Lock,
      title: 'Critical Infrastructure',
      description: 'Protection for power plants, facilities, and utilities',
      features: ['Cyber defense', 'Physical security', 'Access control', 'Threat monitoring'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Globe,
      title: 'Urban Security',
      description: 'Smart city security and surveillance solutions',
      features: ['Video analytics', 'Traffic monitoring', 'Emergency response', 'Public safety'],
      image: 'https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Users,
      title: 'Military Operations',
      description: 'Tactical systems for defense forces',
      features: ['Command & control', 'Battlefield awareness', 'Secure communications', 'Intelligence gathering'],
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-heading)' }}>
            Defense Solutions
          </h1>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            Comprehensive security solutions tailored for diverse operational environments and threat scenarios
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-heading)' }}>
                    {solution.title}
                  </h2>
                </div>
                
                <p className="text-lg mb-6" style={{ color: 'var(--color-muted)' }}>
                  {solution.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }}></div>
                      <span style={{ color: 'var(--color-text)' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-12 rounded-lg text-center"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-heading)' }}>
            Need a Custom Solution?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            Our team of experts can design and implement tailored defense solutions 
            to meet your specific operational requirements and security challenges.
          </p>
          <button className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-primary)' }}>
            Discuss Your Requirements
          </button>
        </motion.section>
      </div>
    </div>
  )
}