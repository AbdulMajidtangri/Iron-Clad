import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Share2, Download } from 'lucide-react'

export default function NewsDetail() {
  const { id } = useParams()
  
  // Mock article data - in real app, this would come from API/CMS
  const article = {
    id: parseInt(id),
    title: 'DefenseTech Unveils Next-Generation Radar System',
    content: `
      <p>DefenseTech today announced the launch of its revolutionary AI-powered radar system, marking a significant breakthrough in threat detection technology for both military and civilian applications.</p>
      
      <p>The new system, designated as the Advanced Threat Detection Radar (ATDR-5000), incorporates cutting-edge artificial intelligence algorithms that can identify and classify threats with unprecedented accuracy and speed.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>AI-powered threat classification with 99.7% accuracy</li>
        <li>Multi-target tracking capability for up to 500 simultaneous objects</li>
        <li>Extended range detection up to 100 kilometers</li>
        <li>Weather-resistant operation in extreme conditions</li>
        <li>Integration with existing command and control systems</li>
      </ul>
      
      <p>"This represents a quantum leap in radar technology," said Dr. James Chen, Chief Technology Officer at DefenseTech. "Our AI algorithms can distinguish between genuine threats and false positives with remarkable precision, significantly reducing operator workload while enhancing security effectiveness."</p>
      
      <h3>Applications</h3>
      <p>The ATDR-5000 is designed for a wide range of applications including:</p>
      <ul>
        <li>Border security and perimeter protection</li>
        <li>Airport and aviation security</li>
        <li>Critical infrastructure protection</li>
        <li>Military base security</li>
        <li>Maritime surveillance</li>
      </ul>
      
      <p>The system has already undergone extensive field testing with several NATO allies and has received preliminary approval for deployment in high-security environments.</p>
      
      <p>DefenseTech expects to begin deliveries of the ATDR-5000 in Q2 2024, with initial orders already secured from government agencies in North America and Europe.</p>
    `,
    category: 'Product Launch',
    date: '2024-01-15',
    author: 'DefenseTech Communications',
    image: 'https://images.pexels.com/photos/73873/rocket-launch-rocket-take-off-nasa-73873.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '5 min read'
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <Link to="/news" className="flex items-center space-x-1 hover:opacity-70 transition-opacity"
                style={{ color: 'var(--color-muted)' }}>
            <ArrowLeft className="w-4 h-4" />
            <span>Back to News</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="px-3 py-1 text-sm font-medium rounded-full"
                  style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
              {article.category}
            </span>
            <span className="text-sm" style={{ color: 'var(--color-muted)' }}>
              {article.readTime}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--color-heading)' }}>
            {article.title}
          </h1>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2" style={{ color: 'var(--color-muted)' }}>
                <Calendar className="w-4 h-4" />
                <span>{formatDate(article.date)}</span>
              </div>
              <span style={{ color: 'var(--color-muted)' }}>By {article.author}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-lg hover:bg-opacity-10 hover:bg-gray-500 transition-colors"
                      style={{ color: 'var(--color-muted)' }}>
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg hover:bg-opacity-10 hover:bg-gray-500 transition-colors"
                      style={{ color: 'var(--color-muted)' }}>
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src={article.image}
            alt={article.title}
            className="w-full aspect-video object-cover rounded-lg"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-12"
                 style={{ color: 'var(--color-text)' }}>
          <div 
            dangerouslySetInnerHTML={{ __html: article.content }}
            className="article-content"
            style={{
              '--prose-headings': 'var(--color-heading)',
              '--prose-body': 'var(--color-text)',
              '--prose-links': 'var(--color-primary)'
            }}
          />
        </article>

        {/* Article Footer */}
        <footer className="border-t pt-8" style={{ borderColor: 'var(--color-border)' }}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--color-heading)' }}>
                Share this article
              </h3>
              <div className="flex space-x-4">
                <button className="text-sm hover:opacity-70 transition-opacity"
                        style={{ color: 'var(--color-primary)' }}>
                  LinkedIn
                </button>
                <button className="text-sm hover:opacity-70 transition-opacity"
                        style={{ color: 'var(--color-primary)' }}>
                  Twitter
                </button>
                <button className="text-sm hover:opacity-70 transition-opacity"
                        style={{ color: 'var(--color-primary)' }}>
                  Email
                </button>
              </div>
            </div>
            
            <div className="text-right">
              <h3 className="font-semibold mb-2" style={{ color: 'var(--color-heading)' }}>
                Media Contact
              </h3>
              <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                press@defensetech.com<br />
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </footer>

        {/* Related Articles CTA */}
        <div className="mt-12 p-8 rounded-lg text-center"
             style={{ backgroundColor: 'var(--color-surface)' }}>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
            Stay Updated
          </h3>
          <p className="mb-6" style={{ color: 'var(--color-muted)' }}>
            Get the latest news and updates from DefenseTech
          </p>
          <Link 
            to="/news"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <span>View All News</span>
          </Link>
        </div>
      </div>
    </div>
  )
}