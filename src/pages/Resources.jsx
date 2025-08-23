import React, { useState } from 'react'
import { Search, Filter, Download, FileText, Video, BookOpen, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const resources = [
    {
      id: 1,
      title: 'Advanced Radar Systems: Technical Overview',
      type: 'Whitepaper',
      category: 'Surveillance',
      description: 'Comprehensive technical guide covering next-generation radar technology and implementation strategies.',
      downloadCount: 1250,
      date: '2024-01-15',
      fileSize: '2.4 MB',
      icon: FileText
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Defense Organizations',
      type: 'Guide',
      category: 'Cybersecurity',
      description: 'Essential cybersecurity framework and best practices for protecting critical defense infrastructure.',
      downloadCount: 890,
      date: '2024-01-10',
      fileSize: '1.8 MB',
      icon: BookOpen
    },
    {
      id: 3,
      title: 'Border Security Solutions Demo',
      type: 'Video',
      category: 'Border Security',
      description: 'Live demonstration of integrated border monitoring and threat detection systems.',
      downloadCount: 2100,
      date: '2024-01-05',
      fileSize: '45 MB',
      icon: Video
    },
    {
      id: 4,
      title: 'Counter-UAS Technology Datasheet',
      type: 'Datasheet',
      category: 'Counter-UAS',
      description: 'Technical specifications and performance data for drone detection and neutralization systems.',
      downloadCount: 1680,
      date: '2023-12-20',
      fileSize: '850 KB',
      icon: FileText
    },
    {
      id: 5,
      title: 'Maritime Surveillance Case Study',
      type: 'Case Study',
      category: 'Maritime',
      description: 'Real-world implementation of autonomous maritime monitoring systems in the Mediterranean.',
      downloadCount: 720,
      date: '2023-12-15',
      fileSize: '3.2 MB',
      icon: BookOpen
    },
    {
      id: 6,
      title: 'Electronic Warfare Systems Training',
      type: 'Video',
      category: 'Electronic Warfare',
      description: 'Comprehensive training module for electronic warfare system operation and maintenance.',
      downloadCount: 450,
      date: '2023-12-10',
      fileSize: '120 MB',
      icon: Video
    },
    {
      id: 7,
      title: 'Defense Technology Trends 2024',
      type: 'Report',
      category: 'Industry',
      description: 'Annual report analyzing emerging trends and technologies in the defense sector.',
      downloadCount: 3200,
      date: '2023-12-01',
      fileSize: '5.1 MB',
      icon: FileText
    },
    {
      id: 8,
      title: 'Command & Control Integration Guide',
      type: 'Guide',
      category: 'C4ISR',
      description: 'Step-by-step guide for integrating defense systems with existing command and control infrastructure.',
      downloadCount: 980,
      date: '2023-11-25',
      fileSize: '2.7 MB',
      icon: BookOpen
    }
  ]

  const types = ['All', ...new Set(resources.map(r => r.type))]
  const categories = ['All', ...new Set(resources.map(r => r.category))]

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'All' || resource.type === selectedType
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory
    return matchesSearch && matchesType && matchesCategory
  })

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getTypeColor = (type) => {
    const colors = {
      'Whitepaper': 'var(--color-primary)',
      'Guide': 'var(--color-accent)',
      'Video': 'var(--color-info)',
      'Datasheet': 'var(--color-success)',
      'Case Study': 'var(--color-warning)',
      'Report': 'var(--color-error)'
    }
    return colors[type] || 'var(--color-muted)'
  }

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-heading)' }}>
            Resources & Documentation
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--color-muted)' }}>
            Access technical documentation, whitepapers, case studies, and training materials
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" 
                      style={{ color: 'var(--color-muted)' }} />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-opacity-50 outline-none"
                style={{ 
                  backgroundColor: 'var(--color-bg)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)'
                }}
              />
            </div>

            {/* Type Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5" style={{ color: 'var(--color-muted)' }} />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-opacity-50 outline-none"
                style={{ 
                  backgroundColor: 'var(--color-bg)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)'
                }}
              >
                {types.map(type => (
                  <option key={type} value={type}>Type: {type}</option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-opacity-50 outline-none"
                style={{ 
                  backgroundColor: 'var(--color-bg)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)'
                }}
              >
                {categories.map(category => (
                  <option key={category} value={category}>Category: {category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p style={{ color: 'var(--color-muted)' }}>
            Showing {filteredResources.length} of {resources.length} resources
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-lg border overflow-hidden hover:shadow-lg transition-all duration-300 group"
              style={{ 
                backgroundColor: 'var(--color-surface)', 
                borderColor: 'var(--color-border)',
                boxShadow: '0 1px 3px var(--color-shadow)'
              }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: getTypeColor(resource.type) + '20' }}>
                      <resource.icon className="w-5 h-5" style={{ color: getTypeColor(resource.type) }} />
                    </div>
                    <span className="text-sm font-medium px-2 py-1 rounded-full"
                          style={{ 
                            backgroundColor: getTypeColor(resource.type) + '20',
                            color: getTypeColor(resource.type)
                          }}>
                      {resource.type}
                    </span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full border"
                        style={{ 
                          color: 'var(--color-muted)', 
                          borderColor: 'var(--color-border)' 
                        }}>
                    {resource.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-3 line-clamp-2" style={{ color: 'var(--color-heading)' }}>
                  {resource.title}
                </h3>

                <p className="text-sm mb-4 line-clamp-3" style={{ color: 'var(--color-muted)' }}>
                  {resource.description}
                </p>

                <div className="flex items-center justify-between text-xs mb-4" style={{ color: 'var(--color-muted)' }}>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(resource.date)}</span>
                  </div>
                  <span>{resource.fileSize}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: 'var(--color-muted)' }}>
                    {resource.downloadCount.toLocaleString()} downloads
                  </span>
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-white transition-all duration-300 hover:opacity-90 group-hover:scale-105"
                          style={{ backgroundColor: 'var(--color-primary)' }}>
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-heading)' }}>
              No resources found
            </h3>
            <p style={{ color: 'var(--color-muted)' }}>
              Try adjusting your search terms or filters
            </p>
          </div>
        )}

        {/* Newsletter Signup */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 rounded-lg text-center"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          <h2 className="text-2xl font-bold mb-4 text-white">
            Stay Updated
          </h2>
          <p className="text-lg mb-6 text-gray-200 max-w-2xl mx-auto">
            Subscribe to receive notifications when new resources and documentation are available
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50 outline-none"
              style={{ backgroundColor: 'white', color: 'var(--color-text)' }}
            />
            <button className="px-6 py-3 bg-white rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    style={{ color: 'var(--color-primary)' }}>
              Subscribe
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}