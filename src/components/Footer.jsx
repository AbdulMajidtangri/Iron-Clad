import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t" style={{ 
      backgroundColor: 'var(--color-surface)', 
      borderColor: 'var(--color-border)' 
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--color-primary)' }}>
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold" style={{ color: 'var(--color-heading)' }}>
                DefenseTech
              </span>
            </div>
            <p className="mb-4 max-w-md" style={{ color: 'var(--color-muted)' }}>
              Leading provider of advanced defense and military technology solutions for governments, 
              security integrators, and defense contractors worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg hover:bg-opacity-10 hover:bg-gray-500 transition-colors">
                <Linkedin className="w-5 h-5" style={{ color: 'var(--color-muted)' }} />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-opacity-10 hover:bg-gray-500 transition-colors">
                <Twitter className="w-5 h-5" style={{ color: 'var(--color-muted)' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Products', 'Solutions', 'About', 'News', 'Resources'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`}
                    className="hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--color-muted)' }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" style={{ color: 'var(--color-muted)' }} />
                <span style={{ color: 'var(--color-muted)' }}>info@defensetech.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" style={{ color: 'var(--color-muted)' }} />
                <span style={{ color: 'var(--color-muted)' }}>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" style={{ color: 'var(--color-muted)' }} />
                <span style={{ color: 'var(--color-muted)' }}>Washington, DC</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center" 
             style={{ borderColor: 'var(--color-border)' }}>
          <p style={{ color: 'var(--color-muted)' }}>
            © 2024 DefenseTech. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/legal" className="hover:opacity-70 transition-opacity" 
                  style={{ color: 'var(--color-muted)' }}>
              Privacy Policy
            </Link>
            <Link to="/legal" className="hover:opacity-70 transition-opacity" 
                  style={{ color: 'var(--color-muted)' }}>
              Terms of Service
            </Link>
            <Link to="/legal" className="hover:opacity-70 transition-opacity" 
                  style={{ color: 'var(--color-muted)' }}>
              Export Control
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}