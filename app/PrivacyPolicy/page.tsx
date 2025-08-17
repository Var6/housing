'use client';
import React, { useState } from 'react';
import { 
  Home, 
  Shield, 
  Eye, 
  Lock, 
  Users, 
  Database, 
  FileText, 
  Mail, 
  ChevronDown, 
  ChevronUp,
  Clock,
  AlertCircle,
  CheckCircle,
  Globe
} from 'lucide-react';

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const tableOfContents = [
    { id: 'overview', title: 'Privacy Overview', icon: <Eye className="w-4 h-4" /> },
    { id: 'collection', title: 'Information We Collect', icon: <Database className="w-4 h-4" /> },
    { id: 'usage', title: 'How We Use Your Information', icon: <Users className="w-4 h-4" /> },
    { id: 'sharing', title: 'Information Sharing', icon: <Globe className="w-4 h-4" /> },
    { id: 'security', title: 'Data Security', icon: <Lock className="w-4 h-4" /> },
    { id: 'cookies', title: 'Cookies & Tracking', icon: <FileText className="w-4 h-4" /> },
    { id: 'rights', title: 'Your Rights', icon: <Shield className="w-4 h-4" /> },
    { id: 'updates', title: 'Policy Updates', icon: <Clock className="w-4 h-4" /> },
    { id: 'contact', title: 'Contact Us', icon: <Mail className="w-4 h-4" /> }
  ];

  type PolicySectionProps = {
    id: string;
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
  };

  const PolicySection: React.FC<PolicySectionProps> = ({ id, title, icon, children }) => (
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
              <p className="text-gray-600">Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <Shield className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information on CitizenHousing.
          </p>
          
          {/* Last Updated */}
          <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full">
            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-sm text-green-800 font-medium">
              Last updated: January 15, 2025
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Navigation
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
            {/* Key Highlights */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Key Privacy Highlights
                  </h3>
                  <ul className="text-blue-800 space-y-1">
                    <li>• We never sell your personal information to third parties</li>
                    <li>• Your property search history remains private</li>
                    <li>• We use industry-standard encryption for data protection</li>
                    <li>• You can delete your account and data at any time</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Privacy Overview */}
            <PolicySection 
              id="overview" 
              title="Privacy Overview" 
              icon={<Eye className="w-5 h-5" />}
            >
              <p className="mb-4">
                CitizenHousing ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and related services.
              </p>
              <p className="mb-4">
                By using CitizenHousing, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, do not use our services.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Important:</strong> This policy applies to all users of CitizenHousing, including property seekers, property owners, and real estate professionals.
                </p>
              </div>
            </PolicySection>

            {/* Information We Collect */}
            <PolicySection 
              id="collection" 
              title="Information We Collect" 
              icon={<Database className="w-5 h-5" />}
            >
              <h4 className="font-semibold text-gray-900 mb-3">Personal Information You Provide:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Name, email address, and phone number</li>
                <li>Profile information and preferences</li>
                <li>Property listings and descriptions</li>
                <li>Communication records and messages</li>
                <li>Payment and billing information</li>
                <li>Identity verification documents</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mb-3">Information Automatically Collected:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages viewed, time spent, click patterns)</li>
                <li>Location information (with your permission)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mb-3">Information from Third Parties:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Social media profiles (when you connect accounts)</li>
                <li>Property databases and public records</li>
                <li>Background check services (for verified listings)</li>
              </ul>
            </PolicySection>

            {/* How We Use Your Information */}
            <PolicySection 
              id="usage" 
              title="How We Use Your Information" 
              icon={<Users className="w-5 h-5" />}
            >
              <p className="mb-4">We use your information for the following purposes:</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-900 mb-2">Service Delivery:</h5>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Process property listings</li>
                    <li>• Facilitate property searches</li>
                    <li>• Enable communication between users</li>
                    <li>• Process payments</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium text-green-900 mb-2">Platform Improvement:</h5>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Personalize user experience</li>
                    <li>• Analyze usage patterns</li>
                    <li>• Develop new features</li>
                    <li>• Prevent fraud and abuse</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm bg-gray-50 p-4 rounded-lg">
                <strong>Legal Basis:</strong> We process your data based on consent, contract performance, legitimate interests, and legal obligations.
              </p>
            </PolicySection>

            {/* Information Sharing */}
            <PolicySection 
              id="sharing" 
              title="Information Sharing" 
              icon={<Globe className="w-5 h-5" />}
            >
              <h4 className="font-semibold text-gray-900 mb-3">We may share your information with:</h4>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-medium text-gray-900">Other Users</h5>
                  <p className="text-sm">Property listings, contact information (with your consent), and public profile information.</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-medium text-gray-900">Service Providers</h5>
                  <p className="text-sm">Third-party services for payment processing, background checks, and platform maintenance.</p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h5 className="font-medium text-gray-900">Legal Requirements</h5>
                  <p className="text-sm">When required by law, court order, or to protect our rights and safety.</p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 p-4 rounded-lg mt-4">
                <p className="text-red-800 text-sm">
                  <strong>We never sell your personal information to third parties for marketing purposes.</strong>
                </p>
              </div>
            </PolicySection>

            {/* Data Security */}
            <PolicySection 
              id="security" 
              title="Data Security" 
              icon={<Lock className="w-5 h-5" />}
            >
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Lock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h5 className="font-medium text-blue-900">Encryption</h5>
                  <p className="text-sm text-blue-800">SSL/TLS encryption for data transmission</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h5 className="font-medium text-green-900">Access Control</h5>
                  <p className="text-sm text-green-800">Limited employee access to personal data</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Database className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h5 className="font-medium text-purple-900">Secure Storage</h5>
                  <p className="text-sm text-purple-800">Protected servers and regular backups</p>
                </div>
              </div>
            </PolicySection>

            {/* Cookies & Tracking */}
            <PolicySection 
              id="cookies" 
              title="Cookies & Tracking" 
              icon={<FileText className="w-5 h-5" />}
            >
              <p className="mb-4">
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content.
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-medium">Essential Cookies</h5>
                    <p className="text-sm">Required for basic website functionality and security.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-medium">Analytics Cookies</h5>
                    <p className="text-sm">Help us understand how you use our website to improve performance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-medium">Preference Cookies</h5>
                    <p className="text-sm">Remember your settings and provide personalized features.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm bg-gray-50 p-4 rounded-lg mt-4">
                You can manage cookie preferences through your browser settings or our cookie consent tool.
              </p>
            </PolicySection>

            {/* Your Rights */}
            <PolicySection 
              id="rights" 
              title="Your Rights" 
              icon={<Shield className="w-5 h-5" />}
            >
              <p className="mb-4">You have the following rights regarding your personal information:</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-medium">Access Your Data</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-medium">Correct Inaccuracies</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-medium">Delete Your Account</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-medium">Restrict Processing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-medium">Data Portability</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-medium">Withdraw Consent</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <p className="text-blue-800 text-sm">
                  <strong>To exercise your rights:</strong> Contact us at privacy@citizenhousing.com or use the settings in your account dashboard.
                </p>
              </div>
            </PolicySection>

            {/* Policy Updates */}
            <PolicySection 
              id="updates" 
              title="Policy Updates" 
              icon={<Clock className="w-5 h-5" />}
            >
              <p className="mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.
              </p>
              <p className="mb-4">
                We will notify you of any material changes by posting the updated policy on our website and sending an email notification to registered users at least 30 days before the changes take effect.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>Your continued use</strong> of CitizenHousing after policy changes constitutes acceptance of the updated terms.
                </p>
              </div>
            </PolicySection>

            {/* Contact Information */}
            <PolicySection 
              id="contact" 
              title="Contact Us" 
              icon={<Mail className="w-5 h-5" />}
            >
              <p className="mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm">privacy@citizenhousing.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Home className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-sm">123 Housing Street<br />New Delhi, India 110001</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Data Protection Officer</h5>
                  <p className="text-sm text-gray-600 mb-2">
                    For data protection inquiries and exercising your rights:
                  </p>
                  <p className="text-sm font-medium">dpo@citizenhousing.com</p>
                </div>
              </div>
            </PolicySection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;