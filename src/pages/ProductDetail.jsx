import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Download, Share2, ChevronLeft, ChevronRight, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-heading)' }}>
            Product Not Found
          </h2>
          <Link to="/products" className="text-primary hover:opacity-70">
            Return to Products
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 3)

  const images = [product.image, product.image, product.image] // Mock multiple images

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'features', label: 'Features' },
    { id: 'documentation', label: 'Documentation' }
  ]

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <Link to="/products" className="flex items-center space-x-1 hover:opacity-70 transition-opacity"
                style={{ color: 'var(--color-muted)' }}>
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Image Gallery */}
          <div>
            <div className="relative mb-4">
              <img 
                src={images[currentImageIndex]} 
                alt={product.name}
                className="w-full aspect-video object-cover rounded-lg"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
                    disabled={currentImageIndex === 0}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex(Math.min(images.length - 1, currentImageIndex + 1))}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
                    disabled={currentImageIndex === images.length - 1}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
            
            {/* Thumbnail Navigation */}
            {images.length > 1 && (
              <div className="flex space-x-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      index === currentImageIndex ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 text-sm font-medium rounded-full"
                    style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                {product.category}
              </span>
              <span className="text-sm font-medium px-3 py-1 rounded-full border"
                    style={{ 
                      color: 'var(--color-muted)', 
                      borderColor: 'var(--color-border)' 
                    }}>
                {product.classification}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-heading)' }}>
              {product.name}
            </h1>

            <p className="text-lg mb-8" style={{ color: 'var(--color-muted)' }}>
              {product.description}
            </p>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="p-4 rounded-lg border" 
                     style={{ 
                       backgroundColor: 'var(--color-surface)', 
                       borderColor: 'var(--color-border)' 
                     }}>
                  <div className="text-sm font-medium mb-1" style={{ color: 'var(--color-muted)' }}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </div>
                  <div className="font-semibold" style={{ color: 'var(--color-heading)' }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90"
                      style={{ backgroundColor: 'var(--color-primary)' }}>
                <Download className="w-5 h-5" />
                <span>Download Datasheet</span>
              </button>
              <button className="flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold border transition-all duration-300 hover:bg-opacity-5"
                      style={{ 
                        borderColor: 'var(--color-border)', 
                        color: 'var(--color-text)' 
                      }}>
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b" style={{ borderColor: 'var(--color-border)' }}>
            <nav className="flex space-x-8">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary'
                      : 'border-transparent hover:opacity-70'
                  }`}
                  style={{
                    color: activeTab === tab.id ? 'var(--color-primary)' : 'var(--color-muted)',
                    borderColor: activeTab === tab.id ? 'var(--color-primary)' : 'transparent'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-12">
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="prose max-w-none"
            >
              <p className="text-lg mb-6" style={{ color: 'var(--color-text)' }}>
                {product.description} This advanced system represents the cutting edge of defense technology, 
                designed to meet the most demanding operational requirements in modern security environments.
              </p>
              <p style={{ color: 'var(--color-text)' }}>
                Built with military-grade components and tested under extreme conditions, this solution provides 
                reliable performance when it matters most. The system integrates seamlessly with existing 
                infrastructure while offering advanced capabilities that enhance operational effectiveness.
              </p>
            </motion.div>
          )}

          {activeTab === 'specifications' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-3 border-b"
                     style={{ borderColor: 'var(--color-border)' }}>
                  <span className="font-medium" style={{ color: 'var(--color-heading)' }}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </span>
                  <span style={{ color: 'var(--color-text)' }}>{value}</span>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'features' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="p-1 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span style={{ color: 'var(--color-text)' }}>{feature}</span>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'documentation' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {['Technical Datasheet', 'Installation Guide', 'User Manual', 'Compliance Certificates'].map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border"
                     style={{ 
                       backgroundColor: 'var(--color-surface)', 
                       borderColor: 'var(--color-border)' 
                     }}>
                  <span style={{ color: 'var(--color-text)' }}>{doc}</span>
                  <button className="flex items-center space-x-2 text-sm hover:opacity-70 transition-opacity"
                          style={{ color: 'var(--color-primary)' }}>
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--color-heading)' }}>
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}