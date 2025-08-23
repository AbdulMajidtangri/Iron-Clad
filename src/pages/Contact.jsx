import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, Upload, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    phone: '',
    country: '',
    inquiryType: '',
    subject: '',
    message: '',
    clearanceLevel: '',
    urgency: 'normal'
  })
  const [files, setFiles] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const offices = [
    {
      region: 'Americas',
      city: 'Washington, DC',
      address: '1234 Defense Boulevard, Suite 500\nWashington, DC 20001',
      phone: '+1 (555) 123-4567',
      email: 'americas@defensetech.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM EST'
    },
    {
      region: 'Europe',
      city: 'London, UK',
      address: '56 Military Road\nLondon SW1A 1AA, United Kingdom',
      phone: '+44 20 7123 4567',
      email: 'europe@defensetech.com',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM GMT'
    },
    {
      region: 'Asia-Pacific',
      city: 'Singapore',
      address: '123 Defense Street, #45-67\nSingapore 018956',
      phone: '+65 6123 4567',
      email: 'apac@defensetech.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM SGT'
    },
    {
      region: 'Middle East',
      city: 'Tel Aviv, Israel',
      address: '789 Technology Park\nTel Aviv 6789012, Israel',
      phone: '+972 3 123 4567',
      email: 'middleeast@defensetech.com',
      hours: 'Sun-Thu: 8:00 AM - 5:00 PM IST'
    }
  ]

  const inquiryTypes = [
    'Product Information',
    'RFP/Tender Response',
    'Technical Support',
    'Partnership Inquiry',
    'Media/Press',
    'Career Opportunities',
    'General Inquiry'
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileUpload = (e) => {
    const newFiles = Array.from(e.target.files)
    setFiles([...files, ...newFiles])
  }

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Thank you for your inquiry. We will respond within 24 hours.')
    setIsSubmitting(false)
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      organization: '',
      phone: '',
      country: '',
      inquiryType: '',
      subject: '',
      message: '',
      clearanceLevel: '',
      urgency: 'normal'
    })
    setFiles([])
  }

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-heading)' }}>
            Contact DefenseTech
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            Get in touch with our team of experts to discuss your defense technology requirements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-lg"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-heading)' }}>
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 outline-none"
                      style={{ 
                        backgroundColor: 'var(--color-bg)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text)'
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 outline-none"
                      style={{ 
                        backgroundColor: 'var(--color-bg)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text)'
                      }}
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 outline-none"
                      style={{ 
                        backgroundColor: 'var(--color-bg)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text)'
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 outline-none"
                      style={{ 
                        backgroundColor: 'var(--color-bg)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text)'
                      }}
                    />
                  </div>
                </div>

                {/* Organization Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                      Organization *
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 outline-none"
                      style={{ 
                        backgroundColor: 'var(--color-bg)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text)'
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                      Country *
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 outline-none"
                      style={{ 
                        backgroundColor: 'var(--color-bg)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text)'
                      }}
                    />
                  </div>
                </div>

                {/* Inquiry Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 outline-none"
                      style={{ 
                        backgroundColor: 'var(--color-bg)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text)'
                      }}
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                      Security Clearance Level
                    </label>
                    <select
                      name="clearanceLevel"
                      value={formData.clearanceLevel}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 outline-none"
                      style={{ 
                        backgroundColor: 'var(--color-bg)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text)'
                      }}
                    >
                      <option value="">Select clearance level</option>
                      <option value="unclassified">Unclassified</option>
                      <option value="confidential">Confidential</option>
                      <option value="secret">Secret</option>
                      <option value="top-secret">Top Secret</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 outline-none"
                    style={{ 
                      backgroundColor: 'var(--color-bg)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text)'
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 outline-none resize-vertical"
                    style={{ 
                      backgroundColor: 'var(--color-bg)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text)'
                    }}
                    placeholder="Please provide details about your requirements, timeline, and any specific questions..."
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                    Attachments (RFP, specifications, etc.)
                  </label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center"
                       style={{ borderColor: 'var(--color-border)' }}>
                    <Upload className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--color-muted)' }} />
                    <p className="text-sm mb-2" style={{ color: 'var(--color-muted)' }}>
                      Drop files here or click to browse
                    </p>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                      accept=".pdf,.doc,.docx,.txt,.zip"
                    />
                    <label
                      htmlFor="file-upload"
                      className="inline-block px-4 py-2 text-sm font-medium rounded-lg cursor-pointer hover:opacity-70 transition-opacity"
                      style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
                    >
                      Choose Files
                    </label>
                  </div>
                  
                  {/* File List */}
                  {files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-2 rounded border"
                             style={{ backgroundColor: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                          <span className="text-sm" style={{ color: 'var(--color-text)' }}>
                            {file.name}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-sm hover:opacity-70 transition-opacity"
                            style={{ color: 'var(--color-error)' }}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Urgency */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                    Urgency Level
                  </label>
                  <div className="flex space-x-4">
                    {['normal', 'urgent', 'critical'].map(level => (
                      <label key={level} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="urgency"
                          value={level}
                          checked={formData.urgency === level}
                          onChange={handleInputChange}
                          className="text-primary focus:ring-primary"
                        />
                        <span className="text-sm capitalize" style={{ color: 'var(--color-text)' }}>
                          {level}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Security Notice */}
                <div className="p-4 rounded-lg border-l-4 flex items-start space-x-3"
                     style={{ 
                       backgroundColor: 'var(--color-warning)' + '10',
                       borderColor: 'var(--color-warning)'
                     }}>
                  <AlertCircle className="w-5 h-5 mt-0.5" style={{ color: 'var(--color-warning)' }} />
                  <div>
                    <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                      Security Notice
                    </p>
                    <p className="text-sm mt-1" style={{ color: 'var(--color-muted)' }}>
                      Do not include classified information in this form. For classified discussions, 
                      please contact us through secure channels.
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90 disabled:opacity-50"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-6 rounded-lg"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-heading)' }}>
                Quick Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                  <span style={{ color: 'var(--color-text)' }}>info@defensetech.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                  <span style={{ color: 'var(--color-text)' }}>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                  <span style={{ color: 'var(--color-text)' }}>24/7 Emergency Support</span>
                </div>
              </div>
            </motion.div>

            {/* Regional Offices */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold" style={{ color: 'var(--color-heading)' }}>
                Regional Offices
              </h3>
              {offices.map((office, index) => (
                <div key={office.region} 
                     className="p-4 rounded-lg border"
                     style={{ 
                       backgroundColor: 'var(--color-surface)', 
                       borderColor: 'var(--color-border)' 
                     }}>
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--color-heading)' }}>
                    {office.region}
                  </h4>
                  <div className="space-y-2 text-sm" style={{ color: 'var(--color-muted)' }}>
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 mt-0.5" />
                      <div>
                        <div className="font-medium" style={{ color: 'var(--color-text)' }}>
                          {office.city}
                        </div>
                        <div className="whitespace-pre-line">{office.address}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>{office.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}