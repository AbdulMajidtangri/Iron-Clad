import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Search, Filter } from 'lucide-react'
import { motion } from 'framer-motion'

export default function News() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const newsArticles = [
    {
      id: 1,
      title: 'DefenseTech Unveils Next-Generation Radar System',
      excerpt: 'Revolutionary AI-powered radar technology provides unprecedented threat detection capabilities for military and civilian applications.',
      category: 'Product Launch',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/73873/rocket-launch-rocket-take-off-nasa-73873.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 2,
      title: 'Partnership with NATO for Advanced Cybersecurity Initiative',
      excerpt: 'DefenseTech selected to lead multinational cybersecurity project protecting critical infrastructure across member nations.',
      category: 'Partnership',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 3,
      title: 'Record-Breaking Contract for Border Security Systems',
      excerpt: 'Multi-billion dollar contract awarded for comprehensive border monitoring solution spanning 2,000 kilometers.',
      category: 'Contract',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 4,
      title: 'Innovation Award for Drone Detection Technology',
      excerpt: 'DefenseTech receives prestigious technology innovation award for breakthrough in counter-UAS systems.',
      category: 'Award',
      date: '2023-12-20',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 5,
      title: 'Expansion into Asia-Pacific Market',
      excerpt: 'New regional headquarters in Singapore to serve growing demand for defense technology in Asia-Pacific region.',
      category: 'Company News',
      date: '2023-12-15',
      image: 'https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 6,
      title: 'Successful Field Testing of Maritime Surveillance System',
      excerpt: 'Comprehensive sea trials demonstrate superior performance of new autonomous maritime monitoring platform.',
      category: 'Testing',
      date: '2023-12-10',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ]

  const categories = ['All', ...new Set(newsArticles.map(article => article.category))]

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredArticle = filteredArticles.find(article => article.featured)
  const regularArticles = filteredArticles.filter(article => !article.featured)

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-heading)' }}>
            News & Updates
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--color-muted)' }}>
            Stay informed about the latest developments in defense technology and company news
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" 
                      style={{ color: 'var(--color-muted)' }} />
              <input
                type="text"
                placeholder="Search news..."
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

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5" style={{ color: 'var(--color-muted)' }} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-opacity-50 outline-none"
                style={{ 
                  backgroundColor: 'var(--color-bg)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)'
                }}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="rounded-lg overflow-hidden" style={{ backgroundColor: 'var(--color-surface)' }}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img 
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 text-sm font-medium rounded-full"
                          style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                      Featured
                    </span>
                    <span className="px-3 py-1 text-sm font-medium rounded-full border"
                          style={{ 
                            color: 'var(--color-muted)', 
                            borderColor: 'var(--color-border)' 
                          }}>
                      {featuredArticle.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-heading)' }}>
                    {featuredArticle.title}
                  </h2>
                  <p className="text-lg mb-6" style={{ color: 'var(--color-muted)' }}>
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2" style={{ color: 'var(--color-muted)' }}>
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{formatDate(featuredArticle.date)}</span>
                    </div>
                    <Link 
                      to={`/news/${featuredArticle.id}`}
                      className="flex items-center space-x-2 font-medium hover:opacity-70 transition-opacity"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Regular Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              style={{ 
                backgroundColor: 'var(--color-surface)',
                boxShadow: '0 1px 3px var(--color-shadow)'
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
                  <span className="px-2 py-1 text-xs font-medium rounded-full"
                        style={{ 
                          backgroundColor: 'var(--color-accent)', 
                          color: 'var(--color-text)' 
                        }}>
                    {article.category}
                  </span>
                  <div className="flex items-center space-x-1 text-sm" style={{ color: 'var(--color-muted)' }}>
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 line-clamp-2" style={{ color: 'var(--color-heading)' }}>
                  {article.title}
                </h3>
                <p className="text-sm mb-4 line-clamp-3" style={{ color: 'var(--color-muted)' }}>
                  {article.excerpt}
                </p>
                <Link 
                  to={`/news/${article.id}`}
                  className="flex items-center space-x-1 text-sm font-medium hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--color-primary)' }}
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📰</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-heading)' }}>
              No articles found
            </h3>
            <p style={{ color: 'var(--color-muted)' }}>
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </div>
    </div>
  )
}