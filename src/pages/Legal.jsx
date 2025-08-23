import React, { useState } from 'react'
import { Shield, AlertTriangle, FileText, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Legal() {
  const [activeSection, setActiveSection] = useState('export-control')

  const sections = [
    { id: 'export-control', label: 'Export Control', icon: Globe },
    { id: 'privacy', label: 'Privacy Policy', icon: Shield },
    { id: 'terms', label: 'Terms of Service', icon: FileText },
    { id: 'compliance', label: 'Compliance', icon: AlertTriangle }
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'export-control':
        return (
          <div className="space-y-6">
            <div className="p-6 rounded-lg border-l-4"
                 style={{ 
                   backgroundColor: 'var(--color-warning)' + '10',
                   borderColor: 'var(--color-warning)'
                 }}>
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-6 h-6" style={{ color: 'var(--color-warning)' }} />
                <h3 className="text-lg font-semibold" style={{ color: 'var(--color-heading)' }}>
                  Important Export Control Notice
                </h3>
              </div>
              <p style={{ color: 'var(--color-text)' }}>
                DefenseTech products and technologies are subject to U.S. export control laws and regulations, 
                including the International Traffic in Arms Regulations (ITAR) and Export Administration Regulations (EAR).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
                ITAR Compliance
              </h3>
              <p className="mb-4" style={{ color: 'var(--color-text)' }}>
                Many of our defense articles and services are controlled under the ITAR (22 CFR Parts 120-130) 
                and are restricted for export to certain countries and foreign nationals. Access to ITAR-controlled 
                technical data requires:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6" style={{ color: 'var(--color-text)' }}>
                <li>U.S. citizenship or permanent residency status</li>
                <li>Appropriate security clearance (where applicable)</li>
                <li>Valid export license for international transfers</li>
                <li>Compliance with all applicable regulations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
                EAR Controlled Items
              </h3>
              <p className="mb-4" style={{ color: 'var(--color-text)' }}>
                Certain commercial and dual-use technologies are controlled under the EAR (15 CFR Parts 730-774). 
                These items may require export licenses depending on the destination country, end-user, and end-use.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
                Restricted Countries
              </h3>
              <p className="mb-4" style={{ color: 'var(--color-text)' }}>
                DefenseTech does not export to countries subject to U.S. trade sanctions or embargoes. 
                Current restrictions may apply to various countries as designated by the U.S. Department of State, 
                Department of Commerce, and Department of Treasury.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
                Contact Information
              </h3>
              <p style={{ color: 'var(--color-text)' }}>
                For export control questions, please contact our Trade Compliance Office:
              </p>
              <div className="mt-2 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-surface)' }}>
                <p style={{ color: 'var(--color-text)' }}>
                  <strong>Email:</strong> export.control@defensetech.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567 ext. 2100
                </p>
              </div>
            </div>
          </div>
        )

      case 'privacy':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
                Information We Collect
              </h3>
              <p className="mb-4" style={{ color: 'var(--color-text)' }}>
                We collect information you provide directly to us, such as when you create an account, 
                request information, or contact us. This may include:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6" style={{ color: 'var(--color-text)' }}>
                <li>Name, email address, and contact information</li>
                <li>Organization and professional details</li>
                <li>Security clearance level (where applicable)</li>
                <li>Communication preferences</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
                How We Use Your Information
              </h3>
              <p className="mb-4" style={{ color: 'var(--color-text)' }}>
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6" style={{ color: 'var(--color-text)' }}>
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you technical updates and security alerts</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
                Information Security
              </h3>
              <p className="mb-4" style={{ color: 'var(--color-text)' }}>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. Our security 
                measures include encryption, access controls, and regular security assessments.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
                Data Retention
              </h3>
              <p style={{ color: 'var(--color-text)' }}>
                We retain personal information for as long as necessary to fulfill the purposes outlined 
                in this privacy policy, unless a longer retention period is required by law or regulation.
              </p>
            </div>
          </div>
        )

      case 'terms':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
                Acceptance of Terms
              </h3>
              <p className="mb-4" style={{ color: 'var(--color-text)' }}>
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please 
                do not use this service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
                Use License
              </h3>
              <p className="mb-4" style={{ color: 'var(--color-text)' }}>
                Permission is granted to temporarily download one copy of the materials on DefenseTech's 
                website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6" style={{ color: 'var(--color-text)' }}>
                <li>Modify or copy the materials</li>
                <li>Use the materials for commercial purposes or public display</li>
                <li>Attempt to reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
                Disclaimer
              </h3>
              <p className="mb-4" style={{ color: 'var(--color-text)' }}>
                The materials on DefenseTech's website are provided on an 'as is' basis. DefenseTech 
                makes no warranties, expressed or implied, and hereby disclaims and negates all other 
                warranties including without limitation, implied warranties or conditions of merchantability, 
                fitness for a particular purpose, or non-infringement of intellectual property or other 
                violation of rights.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
                Limitations
              </h3>
              <p style={{ color: 'var(--color-text)' }}>
                In no event shall DefenseTech or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use the materials on DefenseTech's website.
              </p>
            </div>
          </div>
        )

      case 'compliance':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
                Quality Management
              </h3>
              <p className="mb-4" style={{ color: 'var(--color-text)' }}>
                DefenseTech maintains ISO 9001:2015 certification for quality management systems, 
                ensuring consistent delivery of products and services that meet customer and regulatory requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
                Information Security
              </h3>
              <p className="mb-4" style={{ color: 'var(--color-text)' }}>
                Our information security management system is certified to ISO 27001 standards, 
                providing a systematic approach to managing sensitive information and ensuring its confidentiality, 
                integrity, and availability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
                Defense Standards
              </h3>
              <p className="mb-4" style={{ color: 'var(--color-text)' }}>
                We comply with various defense and military standards including:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6" style={{ color: 'var(--color-text)' }}>
                <li>NATO AQAP (Allied Quality Assurance Publications)</li>
                <li>MIL-STD (Military Standards)</li>
                <li>CMMI Level 5 for software development</li>
                <li>FedRAMP authorization for cloud services</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
                Environmental Compliance
              </h3>
              <p className="mb-4" style={{ color: 'var(--color-text)' }}>
                DefenseTech is committed to environmental responsibility and complies with all applicable 
                environmental regulations, including RoHS (Restriction of Hazardous Substances) and 
                WEEE (Waste Electrical and Electronic Equipment) directives.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-heading)' }}>
                Audit and Certification
              </h3>
              <p style={{ color: 'var(--color-text)' }}>
                Our facilities and processes undergo regular third-party audits to maintain certifications 
                and ensure continuous compliance with applicable standards and regulations. Audit reports 
                and certificates are available upon request to qualified customers.
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-heading)' }}>
            Legal & Compliance
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            Important legal information, export control notices, and compliance requirements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeSection === section.id
                        ? 'shadow-md'
                        : 'hover:shadow-sm'
                    }`}
                    style={{
                      backgroundColor: activeSection === section.id 
                        ? 'var(--color-primary)' 
                        : 'var(--color-surface)',
                      color: activeSection === section.id 
                        ? 'white' 
                        : 'var(--color-text)'
                    }}
                  >
                    <section.icon className="w-5 h-5" />
                    <span className="font-medium">{section.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-lg"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <div className="flex items-center space-x-3 mb-6">
                {sections.find(s => s.id === activeSection)?.icon && (
                  <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--color-primary)' }}>
                    {React.createElement(sections.find(s => s.id === activeSection).icon, {
                      className: "w-6 h-6 text-white"
                    })}
                  </div>
                )}
                <h2 className="text-2xl font-bold" style={{ color: 'var(--color-heading)' }}>
                  {sections.find(s => s.id === activeSection)?.label}
                </h2>
              </div>
              
              {renderContent()}
              
              <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                  Last updated: January 15, 2024
                </p>
                <p className="text-sm mt-2" style={{ color: 'var(--color-muted)' }}>
                  For questions regarding this information, please contact our Legal Department at 
                  <a href="mailto:legal@defensetech.com" 
                     className="ml-1 hover:opacity-70 transition-opacity"
                     style={{ color: 'var(--color-primary)' }}>
                    legal@defensetech.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}