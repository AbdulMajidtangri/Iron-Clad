import React from 'react'
import { Award, Globe, Users, Shield, Target, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { label: 'Years of Excellence', value: '25+', icon: Award },
    { label: 'Countries Served', value: '45+', icon: Globe },
    { label: 'Expert Team Members', value: '500+', icon: Users },
    { label: 'Active Deployments', value: '1,200+', icon: Shield }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Every solution is designed with security as the primary consideration, ensuring robust protection against evolving threats.'
    },
    {
      icon: Target,
      title: 'Mission Critical',
      description: 'We understand that our technology protects lives and critical assets, driving our commitment to reliability and performance.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuous research and development keeps us at the forefront of defense technology advancement.'
    }
  ]

  const leadership = [
    {
      name: 'General Sarah Mitchell',
      role: 'Chief Executive Officer',
      background: 'Former U.S. Army General with 30 years of military experience',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. James Chen',
      role: 'Chief Technology Officer',
      background: 'PhD in Electrical Engineering, former DARPA program manager',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Colonel Maria Rodriguez',
      role: 'VP of Operations',
      background: 'Former Air Force Colonel, expert in systems integration',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'ISO 27001 Information Security',
    'CMMI Level 5 Certified',
    'ITAR Registered',
    'NATO AQAP Certified',
    'FedRAMP Authorized'
  ]

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--color-heading)' }}>
              Defending Tomorrow, Today
            </h1>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--color-muted)' }}>
              For over two decades, DefenseTech has been at the forefront of military and defense technology, 
              providing cutting-edge solutions that protect nations, secure borders, and safeguard critical infrastructure worldwide.
            </p>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg"
                style={{ backgroundColor: 'var(--color-surface)' }}
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
        </section>

        {/* Company Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: 'var(--color-heading)' }}>
                Our Story
              </h2>
              <p className="mb-4" style={{ color: 'var(--color-text)' }}>
                Founded in 1999 by a team of former military officers and defense engineers, DefenseTech emerged 
                from a simple mission: to bridge the gap between cutting-edge technology and real-world defense needs.
              </p>
              <p className="mb-4" style={{ color: 'var(--color-text)' }}>
                What started as a small research and development company has grown into a global leader in defense 
                technology, serving governments, military organizations, and security agencies across 45 countries.
              </p>
              <p style={{ color: 'var(--color-text)' }}>
                Today, we continue to push the boundaries of what's possible in defense technology, always with 
                the understanding that our innovations protect the people and values that matter most.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/73873/rocket-launch-rocket-take-off-nasa-73873.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Defense Technology"
                className="w-full aspect-video object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-heading)' }}>
              Our Values
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-8 rounded-lg text-center"
                style={{ backgroundColor: 'var(--color-surface)' }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
                  {value.title}
                </h3>
                <p style={{ color: 'var(--color-muted)' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-heading)' }}>
              Leadership Team
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
              Experienced leaders with deep military and technology backgrounds
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg"
                style={{ backgroundColor: 'var(--color-surface)' }}
              >
                <img 
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-heading)' }}>
                  {leader.name}
                </h3>
                <p className="font-medium mb-3" style={{ color: 'var(--color-primary)' }}>
                  {leader.role}
                </p>
                <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                  {leader.background}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-heading)' }}>
              Certifications & Compliance
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
              Maintaining the highest standards of quality, security, and compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-4 rounded-lg border text-center"
                style={{ 
                  backgroundColor: 'var(--color-surface)', 
                  borderColor: 'var(--color-border)' 
                }}
              >
                <span className="font-medium" style={{ color: 'var(--color-text)' }}>
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Global Presence */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-12 rounded-lg text-center"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Global Presence
            </h2>
            <p className="text-lg mb-8 text-gray-200 max-w-3xl mx-auto">
              With offices in Washington DC, London, Singapore, and Tel Aviv, we provide 24/7 support 
              and rapid response capabilities to our clients worldwide.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
              <div>
                <div className="text-2xl font-bold">Americas</div>
                <div className="text-sm opacity-90">HQ: Washington DC</div>
              </div>
              <div>
                <div className="text-2xl font-bold">Europe</div>
                <div className="text-sm opacity-90">London, UK</div>
              </div>
              <div>
                <div className="text-2xl font-bold">Asia-Pacific</div>
                <div className="text-sm opacity-90">Singapore</div>
              </div>
              <div>
                <div className="text-2xl font-bold">Middle East</div>
                <div className="text-sm opacity-90">Tel Aviv, Israel</div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}