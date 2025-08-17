'use client'
import React, { useState } from 'react';
import { Home, FileText, Shield, Eye, Users, DollarSign, AlertTriangle, Scale, Gavel, CheckCircle, Clock, Mail, ChevronDown, ChevronUp, Building, UserCheck, CreditCard, Ban, Globe, Phone, MapPin } from 'lucide-react';

const TermsOfServicePage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (sectionId:any) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const tableOfContents = [
    { id: 'acceptance', title: 'Acceptance of Terms', icon: <CheckCircle className="w-4 h-4" /> },
    { id: 'definitions', title: 'Definitions', icon: <FileText className="w-4 h-4" /> },
    { id: 'eligibility', title: 'Eligibility & Registration', icon: <UserCheck className="w-4 h-4" /> },
    { id: 'services', title: 'Platform Services', icon: <Building className="w-4 h-4" /> },
    { id: 'user-obligations', title: 'User Obligations', icon: <Users className="w-4 h-4" /> },
    { id: 'listings', title: 'Property Listings', icon: <Home className="w-4 h-4" /> },
    { id: 'payments', title: 'Payments & Fees', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'prohibited', title: 'Prohibited Conduct', icon: <Ban className="w-4 h-4" /> },
    { id: 'intellectual', title: 'Intellectual Property', icon: <Shield className="w-4 h-4" /> },
    { id: 'privacy', title: 'Privacy & Data', icon: <Eye className="w-4 h-4" /> },
    { id: 'liability', title: 'Limitation of Liability', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'disputes', title: 'Dispute Resolution', icon: <Scale className="w-4 h-4" /> },
    { id: 'termination', title: 'Termination', icon: <Gavel className="w-4 h-4" /> },
    { id: 'changes', title: 'Changes to Terms', icon: <Clock className="w-4 h-4" /> },
    { id: 'contact', title: 'Contact Information', icon: <Mail className="w-4 h-4" /> }
  ];

  const TermsSection = ({ id, title, icon, children }:any) => (
    <div className="bg-white rounded-xl shadow-lg mb-6">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors rounded-xl"
      >
        <div className="flex items-center space-x-3">
          <div className="text-blue-600">{icon}</div>
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        </div>
        {activeSection === id ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {activeSection === id && (
        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CitizenHousing</h1>
              <p className="text-gray-600">Terms of Service</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <FileText className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            These terms govern your use of CitizenHousing platform and services. Please read them carefully before using our platform.
          </p>
          {/* Effective Date */}
          <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full">
            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-sm text-green-800 font-medium">
              Effective Date: January 15, 2025
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors text-left ${
                      activeSection === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Important Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                    Important Legal Notice
                  </h3>
                  <p className="text-yellow-800 text-sm">
                    By accessing and using CitizenHousing, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, please discontinue use of our platform immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* Acceptance of Terms */}
            <TermsSection id="acceptance" title="Acceptance of Terms" icon={<CheckCircle className="w-5 h-5" />}>
              <p className="mb-4">
                By accessing or using CitizenHousing ("Platform," "Service," "we," "us," or "our"), you ("User," "you," or "your") agree to be bound by these Terms of Service ("Terms"). These Terms constitute a legally binding agreement between you and CitizenHousing Private Limited.
              </p>
              <p className="mb-4">
                If you are using our services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> These Terms may be updated from time to time. Your continued use of the platform after changes constitutes acceptance of the new Terms.
                </p>
              </div>
            </TermsSection>

            {/* Definitions */}
            <TermsSection id="definitions" title="Definitions" icon={<FileText className="w-5 h-5" />}>
              <div className="space-y-3">
                <div>
                  <strong className="text-gray-900">"Platform"</strong> refers to the CitizenHousing website, mobile applications, and all related services.
                </div>
                <div>
                  <strong className="text-gray-900">"User"</strong> refers to any individual or entity that accesses or uses our Platform.
                </div>
                <div>
                  <strong className="text-gray-900">"Property Owner"</strong> refers to users who list properties for sale or rent on our Platform.
                </div>
                <div>
                  <strong className="text-gray-900">"Property Seeker"</strong> refers to users who search for properties to buy or rent.
                </div>
                <div>
                  <strong className="text-gray-900">"Listing"</strong> refers to property advertisements posted on our Platform.
                </div>
                <div>
                  <strong className="text-gray-900">"Content"</strong> refers to all text, images, videos, and other materials on the Platform.
                </div>
              </div>
            </TermsSection>

            {/* Eligibility & Registration */}
            <TermsSection id="eligibility" title="Eligibility & Registration" icon={<UserCheck className="w-5 h-5" />}>
              <h4 className="font-semibold text-gray-900 mb-3">Eligibility Requirements:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>You must be at least 18 years old</li>
                <li>You must have the legal capacity to enter into contracts</li>
                <li>You must not be prohibited from using our services under applicable law</li>
                <li>You must provide accurate and complete registration information</li>
              </ul>
              <h4 className="font-semibold text-gray-900 mb-3">Account Registration:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You must promptly notify us of any unauthorized use of your account</li>
                <li>You may not share your account with others or maintain multiple accounts</li>
                <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
              </ul>
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <p className="text-red-800 text-sm">
                  <strong>Identity Verification:</strong> We may require identity verification for certain services. Providing false information may result in account termination.
                </p>
              </div>
            </TermsSection>

            {/* Platform Services */}
            <TermsSection id="services" title="Platform Services" icon={<Building className="w-5 h-5" />}>
              <p className="mb-4">
                CitizenHousing provides an online platform that connects property owners with potential buyers and renters. Our services include:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-900 mb-2">For Property Owners:</h5>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Property listing creation and management</li>
                    <li>• Photo and video uploading</li>
                    <li>• Inquiry management</li>
                    <li>• Performance analytics</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium text-green-900 mb-2">For Property Seekers:</h5>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Advanced property search and filters</li>
                    <li>• Saved searches and favorites</li>
                    <li>• Direct communication with owners</li>
                    <li>• Virtual tours and scheduling</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm bg-gray-50 p-4 rounded-lg">
                <strong>Service Availability:</strong> We strive to maintain 99% uptime but do not guarantee uninterrupted service. We may temporarily suspend services for maintenance or updates.
              </p>
            </TermsSection>

            {/* User Obligations */}
            <TermsSection id="user-obligations" title="User Obligations" icon={<Users className="w-5 h-5" />}>
              <h4 className="font-semibold text-gray-900 mb-3">As a User, you agree to:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Use the Platform only for lawful purposes and in accordance with these Terms</li>
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Not interfere with or disrupt the Platform's functionality</li>
                <li>Not attempt to gain unauthorized access to any part of the Platform</li>
                <li>Comply with all applicable local, state, and federal laws</li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>Professional Conduct:</strong> All interactions on the Platform must be professional, respectful, and in good faith. Harassment, discrimination, or abusive behavior is strictly prohibited.
                </p>
              </div>
            </TermsSection>

            {/* Property Listings */}
            <TermsSection id="listings" title="Property Listings" icon={<Home className="w-5 h-5" />}>
              <h4 className="font-semibold text-gray-900 mb-3">Listing Standards:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>All property information must be accurate and up-to-date</li>
                <li>Photos must be current and represent the actual property</li>
                <li>Pricing must be clearly stated and not misleading</li>
                <li>Property descriptions must not contain false or exaggerated claims</li>
                <li>You must have the legal right to list the property</li>
              </ul>
              <h4 className="font-semibold text-gray-900 mb-3">Content Guidelines:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>No discriminatory language or preferences</li>
                <li>No explicit or inappropriate content</li>
                <li>No spam or duplicate listings</li>
                <li>No contact information in listing descriptions (use our messaging system)</li>
              </ul>
              <p className="text-sm bg-blue-50 p-4 rounded-lg">
                <strong>Quality Assurance:</strong> We reserve the right to review, edit, or remove listings that don't meet our standards or violate these Terms.
              </p>
            </TermsSection>

            {/* Payments & Fees */}
            <TermsSection id="payments" title="Payments & Fees" icon={<CreditCard className="w-5 h-5" />}>
              <h4 className="font-semibold text-gray-900 mb-3">Service Fees:</h4>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>Basic Listing (30 days)</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>Premium Listing (30 days)</span>
                  <span className="font-medium">₹999</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>Transaction Success Fee</span>
                  <span className="font-medium">1% of deal value</span>
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-3">Payment Terms:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>All fees are exclusive of applicable taxes</li>
                <li>Payments are processed through secure third-party providers</li>
                <li>Refunds are subject to our refund policy</li>
                <li>Failed payments may result in service suspension</li>
              </ul>
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <p className="text-green-800 text-sm">
                  <strong>Transparent Pricing:</strong> All fees are clearly disclosed before payment. We do not charge hidden fees or commissions.
                </p>
              </div>
            </TermsSection>

            {/* Prohibited Conduct */}
            <TermsSection id="prohibited" title="Prohibited Conduct" icon={<Ban className="w-5 h-5" />}>
              <p className="mb-4">The following activities are strictly prohibited on our Platform:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-red-900 mb-2">Illegal Activities:</h5>
                  <ul className="text-sm text-red-800 space-y-1 list-disc pl-4">
                    <li>Money laundering</li>
                    <li>Fraud or misrepresentation</li>
                    <li>Tax evasion</li>
                    <li>Violating housing laws</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-red-900 mb-2">Platform Abuse:</h5>
                  <ul className="text-sm text-red-800 space-y-1 list-disc pl-4">
                    <li>Creating fake accounts</li>
                    <li>Posting spam or duplicates</li>
                    <li>Scraping or data mining</li>
                    <li>Circumventing security measures</li>
                  </ul>
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg mt-4">
                <p className="text-red-800 text-sm">
                  <strong>Enforcement:</strong> Violations may result in warnings, account suspension, or permanent termination. We cooperate with law enforcement when required.
                </p>
              </div>
            </TermsSection>

            {/* Intellectual Property */}
            <TermsSection id="intellectual" title="Intellectual Property" icon={<Shield className="w-5 h-5" />}>
              <h4 className="font-semibold text-gray-900 mb-3">Our Rights:</h4>
              <p className="mb-4">
                CitizenHousing owns all rights to the Platform, including but not limited to trademarks, copyrights, trade secrets, and other intellectual property. Users may not copy, modify, or distribute our content without written permission.
              </p>
              <h4 className="font-semibold text-gray-900 mb-3">User Content:</h4>
              <p className="mb-4">
                By uploading content to our Platform, you grant CitizenHousing a worldwide, non-exclusive, royalty-free license to use, display, and distribute your content for the purpose of providing our services. You retain ownership of your content.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>DMCA Notice:</strong> If you believe your copyright has been infringed, please contact us at legal@citizenhousing.com with detailed information.
                </p>
              </div>
            </TermsSection>

            {/* Privacy & Data */}
            <TermsSection id="privacy" title="Privacy & Data Protection" icon={<Eye className="w-5 h-5" />}>
              <p className="mb-4">
                Your privacy is important to us. Our collection, use, and sharing of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <h4 className="font-semibold text-gray-900 mb-3">Key Privacy Principles:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>We collect only necessary information to provide our services</li>
                <li>We never sell your personal information to third parties</li>
                <li>We use industry-standard security measures to protect your data</li>
                <li>You have rights to access, correct, and delete your personal information</li>
              </ul>
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <p className="text-green-800 text-sm">
                  For complete details about our data practices, please review our <strong>Privacy Policy</strong>.
                </p>
              </div>
            </TermsSection>

            {/* Limitation of Liability */}
            <TermsSection id="liability" title="Limitation of Liability" icon={<AlertTriangle className="w-5 h-5" />}>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
                <p className="text-yellow-800 text-sm font-medium">
                  IMPORTANT DISCLAIMER: PLEASE READ THIS SECTION CAREFULLY
                </p>
              </div>
              <p className="mb-4">
                CitizenHousing provides a platform to connect property owners and seekers. We are not a party to any transaction between users and do not guarantee the accuracy of listings or the performance of users.
              </p>
              <h4 className="font-semibold text-gray-900 mb-3">Limitations:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>We are not responsible for the quality, safety, or legality of listed properties</li>
                <li>We do not verify the identity or claims of users</li>
                <li>We are not liable for disputes between users</li>
                <li>Our total liability is limited to the fees paid by you in the last 12 months</li>
              </ul>
              <p className="text-sm bg-red-50 border border-red-200 p-4 rounded-lg">
                <strong>Use at Your Own Risk:</strong> You acknowledge that property transactions carry inherent risks and agree to exercise due diligence.
              </p>
            </TermsSection>

            {/* Dispute Resolution */}
            <TermsSection id="disputes" title="Dispute Resolution" icon={<Scale className="w-5 h-5" />}>
              <h4 className="font-semibold text-gray-900 mb-3">Resolution Process:</h4>
              <div className="space-y-3 mb-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <strong>Direct Resolution:</strong> First, attempt to resolve disputes directly with the other party through our messaging system.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <strong>Platform Mediation:</strong> If direct resolution fails, contact our support team for mediation assistance.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <strong>Legal Action:</strong> Disputes that cannot be resolved through our platform are subject to binding arbitration under Indian law.
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Governing Law:</strong> These Terms are governed by the laws of India. Any legal proceedings must be conducted in New Delhi, India.
                </p>
              </div>
            </TermsSection>

            {/* Termination */}
            <TermsSection id="termination" title="Termination" icon={<Gavel className="w-5 h-5" />}>
              <h4 className="font-semibold text-gray-900 mb-3">Account Termination:</h4>
              <p className="mb-4">
                You may terminate your account at any time by contacting us or using the account deletion feature. We may terminate or suspend your account immediately for violations of these Terms.
              </p>
              <h4 className="font-semibold text-gray-900 mb-3">Effects of Termination:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>All active listings will be removed</li>
                <li>Access to account data and messages will be lost</li>
                <li>Outstanding fees remain due and payable</li>
                <li>Certain provisions of these Terms survive termination</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Data Retention:</strong> After termination, we may retain your data for legal compliance and fraud prevention as outlined in our Privacy Policy.
                </p>
              </div>
            </TermsSection>

            {/* Changes to Terms */}
            <TermsSection id="changes" title="Changes to Terms" icon={<Clock className="w-5 h-5" />}>
              <p className="mb-4">
                We may update these Terms from time to time to reflect changes in our services, legal requirements, or business practices. We will provide notice of material changes as follows:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Email notification to registered users</li>
                <li>Prominent notice on our Platform</li>
                <li>At least 30 days advance notice for material changes</li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>Acceptance of Changes:</strong> Your continued use of the Platform after changes take effect constitutes acceptance of the new Terms. If you disagree, you must stop using our services.
                </p>
              </div>
            </TermsSection>

            {/* Contact Information */}
            <TermsSection id="contact" title="Contact Information" icon={<Mail className="w-5 h-5" />}>
              <p className="mb-4">
                If you have questions about these Terms of Service or need legal assistance, please contact us:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">General Inquiries</p>
                      <p className="text-sm">legal@citizenhousing.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Legal Helpline</p>
                      <p className="text-sm">+91-11-4567-8900</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Registered Address</p>
                      <p className="text-sm">
                        CitizenHousing Private Limited<br />
                        123 Housing Street<br />
                        New Delhi, India 110001
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Legal Department</h5>
                  <p className="text-sm text-gray-600 mb-2">
                    For formal legal notices and compliance matters:
                  </p>
                  <p className="text-sm font-medium">compliance@citizenhousing.com</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Response time: 5-7 business days
                  </p>
                </div>
              </div>
            </TermsSection>
          </div>
        </div>

        {/* Complete Footer */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mr-3">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">CitizenHousing</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Thank you for taking the time to read our Terms of Service. We're committed to providing a transparent and trustworthy platform for all your housing needs.
            </p>
            
            {/* Footer Links */}
            <div className="flex items-center justify-center space-x-6 mb-6">
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                <Globe className="w-4 h-4" />
                <span className="text-sm">Privacy Policy</span>
              </button>
              <div className="w-px h-4 bg-gray-300"></div>
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                <FileText className="w-4 h-4" />
                <span className="text-sm">User Agreement</span>
              </button>
              <div className="w-px h-4 bg-gray-300"></div>
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Security</span>
              </button>
              <div className="w-px h-4 bg-gray-300"></div>
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">Support</span>
              </button>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-sm text-gray-500">
                  © 2025 CitizenHousing Private Limited. All rights reserved.
                </div>
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <span>Last updated: January 15, 2025</span>
                  <div className="w-px h-3 bg-gray-300"></div>
                  <span>Version 2.1</span>
                  <div className="w-px h-3 bg-gray-300"></div>
                  <span>Legal ID: CH-TOS-2025-01</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
              <p className="text-sm text-gray-700 mb-3">
                Have questions about these terms? Our legal team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Legal Team
                </button>
                <button className="inline-flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors">
                  <FileText className="w-4 h-4 mr-2" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference Card */}
        <div className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg text-white p-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Quick Reference</h3>
            <p className="text-indigo-100 mb-6">
              Key points to remember about using CitizenHousing
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                <UserCheck className="w-6 h-6" />
              </div>
              <h4 className="font-medium mb-2">Age Requirement</h4>
              <p className="text-sm text-indigo-100">You must be 18+ years old to use our platform</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-medium mb-2">Account Security</h4>
              <p className="text-sm text-indigo-100">Keep your login credentials secure and private</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h4 className="font-medium mb-2">Due Diligence</h4>
              <p className="text-sm text-indigo-100">Always verify properties and exercise caution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;