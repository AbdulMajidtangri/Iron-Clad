import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Download } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <div className="rounded-lg border overflow-hidden hover:shadow-lg transition-all duration-300 group"
         style={{ 
           backgroundColor: 'var(--color-surface)', 
           borderColor: 'var(--color-border)',
           boxShadow: '0 1px 3px var(--color-shadow)'
         }}>
      <div className="aspect-video overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="px-2 py-1 text-xs font-medium rounded-full"
                style={{ 
                  backgroundColor: 'var(--color-primary)', 
                  color: 'white' 
                }}>
            {product.category}
          </span>
          <span className="text-sm" style={{ color: 'var(--color-muted)' }}>
            {product.classification}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-heading)' }}>
          {product.name}
        </h3>
        
        <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--color-muted)' }}>
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <Link 
            to={`/products/${product.id}`}
            className="flex items-center space-x-1 text-sm font-medium hover:opacity-70 transition-opacity"
            style={{ color: 'var(--color-primary)' }}
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <button className="flex items-center space-x-1 text-sm hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--color-muted)' }}>
            <Download className="w-4 h-4" />
            <span>Datasheet</span>
          </button>
        </div>
      </div>
    </div>
  )
}