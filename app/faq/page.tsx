'use client'
import React, { useState } from 'react';
import { Home, Search, HelpCircle, ChevronDown, ChevronUp, User, CreditCard, Shield, MessageCircle, Building, MapPin, Phone, Mail, Star, Clock, CheckCircle, AlertTriangle, FileText, Users, Eye, Settings } from 'lucide-react';

type FAQCategory = 'general' | 'account' | 'listings' | 'search' | 'payments' | 'safety' | 'support';

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('general');
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const categories = [
    { id: 'general', title: 'General Questions', icon: <HelpCircle className="w-4 h-4" />, count: 8 },
    { id: 'account', title: 'Account & Profile', icon: <User className="w-4 h-4" />, count: 6 },
    { id: 'listings', title: 'Property Listings', icon: <Building className="w-4 h-4" />, count: 10 },
    { id: 'search', title: 'Search & Browse', icon: <Search className="w-4 h-4" />, count: 5 },
    { id: 'payments', title: 'Payments & Fees', icon: <CreditCard className="w-4 h-4" />, count: 7 },
    { id: 'safety', title: 'Safety & Security', icon: <Shield className="w-4 h-4" />, count: 6 },
    { id: 'support', title: 'Support & Contact', icon: <MessageCircle className="w-4 h-4" />, count: 4 }
  ];

  type FAQ = {
    id: string;
    question: string;
    answer: string;
    tags: string[];
  };
  
  const faqData: Record<FAQCategory, FAQ[]> = {
    general: [
      {
        id: 'g1',
        question: 'What is CitizenHousing?',
        answer: 'CitizenHousing is India\'s leading online platform that connects property owners with potential buyers and renters. We provide a secure, transparent marketplace where you can list, search, and transact properties with confidence.',
        tags: ['platform', 'about']
      },
      {
        id: 'g2',
        question: 'Is CitizenHousing free to use?',
        answer: 'Yes! Basic property searches and browsing are completely free. Property owners can also post basic listings at no cost. We charge fees only for premium features like featured listings, advanced analytics, and successful transaction facilitation.',
        tags: ['free', 'pricing']
      },
      {
        id: 'g3',
        question: 'Which cities does CitizenHousing cover?',
        answer: 'We currently operate in 50+ major cities across India including Delhi NCR, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, and Ahmedabad. We\'re constantly expanding to new cities based on user demand.',
        tags: ['cities', 'coverage']
      },
      {
        id: 'g4',
        question: 'How is CitizenHousing different from other property portals?',
        answer: 'CitizenHousing focuses on verified listings, transparent pricing, and direct owner-buyer connections. We don\'t allow broker spam, provide detailed property insights, and offer end-to-end transaction support with legal assistance.',
        tags: ['difference', 'unique']
      },
      {
        id: 'g5',
        question: 'Do I need to download an app to use CitizenHousing?',
        answer: 'No, our website is fully mobile-responsive and works perfectly on all devices. However, we do offer mobile apps on Android and iOS for enhanced convenience and push notifications about new properties.',
        tags: ['app', 'mobile']
      },
      {
        id: 'g6',
        question: 'Can I use CitizenHousing for commercial properties?',
        answer: 'Yes! We support both residential and commercial properties including offices, retail spaces, warehouses, and land parcels. Our platform is designed to handle all types of real estate transactions.',
        tags: ['commercial', 'types']
      },
      {
        id: 'g7',
        question: 'How do I get started on CitizenHousing?',
        answer: 'Simply create a free account using your email or phone number. Complete your profile, verify your identity, and you\'re ready to start browsing properties or posting listings. The entire process takes less than 5 minutes.',
        tags: ['getting started', 'registration']
      },
      {
        id: 'g8',
        question: 'What documents do I need to transact on CitizenHousing?',
        answer: 'For property seekers: Valid ID proof and income verification. For property owners: Property documents, ID proof, and ownership verification. Our team helps you understand exactly what\'s needed for your specific transaction.',
        tags: ['documents', 'requirements']
      }
    ],
    account: [
      {
        id: 'a1',
        question: 'How do I create an account?',
        answer: 'Click "Sign Up" and register using your email, phone number, or social media accounts. You\'ll receive a verification code to confirm your account. Complete your profile with basic information to get started.',
        tags: ['registration', 'signup']
      },
      {
        id: 'a2',
        question: 'I forgot my password. How do I reset it?',
        answer: 'Click "Forgot Password" on the login page, enter your email or phone number, and we\'ll send you a reset link or OTP. Follow the instructions to create a new password.',
        tags: ['password', 'reset']
      },
      {
        id: 'a3',
        question: 'How do I verify my account?',
        answer: 'Account verification involves confirming your email/phone and uploading valid ID proof. For property owners, additional property document verification may be required. Verified accounts get priority support and higher trust scores.',
        tags: ['verification', 'identity']
      },
      {
        id: 'a4',
        question: 'Can I change my registered email or phone number?',
        answer: 'Yes, go to Account Settings and update your contact information. You\'ll need to verify the new email/phone number. Some changes may require additional security verification.',
        tags: ['update', 'contact']
      },
      {
        id: 'a5',
        question: 'How do I delete my account?',
        answer: 'Go to Account Settings > Privacy & Security > Delete Account. Please note that deletion is permanent and you\'ll lose all saved searches, favorites, and message history. Active listings will be removed.',
        tags: ['delete', 'account']
      },
      {
        id: 'a6',
        question: 'Why should I complete my profile?',
        answer: 'Complete profiles get 3x more responses! It builds trust with other users, enables better property recommendations, and unlocks advanced features like property alerts and investment insights.',
        tags: ['profile', 'benefits']
      }
    ],
    listings: [
      {
        id: 'l1',
        question: 'How do I post a property listing?',
        answer: 'After logging in, click "Post Property" and follow our step-by-step wizard. Add property details, upload photos, set your price, and publish. Basic listings are free, premium listings offer enhanced visibility.',
        tags: ['post', 'listing']
      },
      {
        id: 'l2',
        question: 'How many photos can I upload?',
        answer: 'Basic listings support up to 10 photos, while premium listings allow up to 50 photos plus virtual tours and videos. High-quality images significantly increase inquiry rates.',
        tags: ['photos', 'images']
      },
      {
        id: 'l3',
        question: 'How long do listings stay active?',
        answer: 'Basic listings are active for 30 days and can be renewed for free. Premium listings stay active for 60 days. You can edit, pause, or reactivate listings anytime from your dashboard.',
        tags: ['duration', 'active']
      },
      {
        id: 'l4',
        question: 'Can I edit my listing after posting?',
        answer: 'Absolutely! You can edit all listing details, update photos, change pricing, or modify descriptions anytime. Changes are reflected immediately and don\'t affect your listing\'s visibility.',
        tags: ['edit', 'modify']
      },
      {
        id: 'l5',
        question: 'Why isn\'t my listing getting views?',
        answer: 'Common reasons include incomplete information, poor-quality photos, unrealistic pricing, or incorrect location tagging. Our listing optimization guide in your dashboard provides specific improvement tips.',
        tags: ['views', 'optimization']
      },
      {
        id: 'l6',
        question: 'What is the difference between basic and premium listings?',
        answer: 'Premium listings get 5x more visibility, appear in top search results, support unlimited photos/videos, include virtual tours, and provide detailed analytics. They also get priority customer support.',
        tags: ['premium', 'basic']
      },
      {
        id: 'l7',
        question: 'Can I list the same property on other portals?',
        answer: 'Yes, you can list your property on multiple platforms. However, please ensure all information remains consistent and update availability status promptly to avoid confusion.',
        tags: ['multiple', 'portals']
      },
      {
        id: 'l8',
        question: 'How do I handle inquiries from potential buyers?',
        answer: 'All inquiries come through our secure messaging system. Respond promptly, provide additional details requested, and use our scheduling feature to arrange property visits. Quick responses increase conversion rates.',
        tags: ['inquiries', 'buyers']
      },
      {
        id: 'l9',
        question: 'What if I want to remove my listing?',
        answer: 'Go to "My Listings" in your dashboard and click "Mark as Sold/Rented" or "Delete Listing". Marking as sold helps us improve our algorithms and provides closure to interested buyers.',
        tags: ['remove', 'delete']
      },
      {
        id: 'l10',
        question: 'Do you allow brokers and agents to post listings?',
        answer: 'Yes, registered brokers and agents can post listings, but they must clearly identify themselves and the properties they represent. We maintain strict quality standards for all listings regardless of the poster.',
        tags: ['brokers', 'agents']
      }
    ],
    search: [
      {
        id: 's1',
        question: 'How do I search for properties?',
        answer: 'Use our advanced search with filters for location, price range, property type, size, and amenities. Save your searches to get instant alerts when matching properties are listed.',
        tags: ['search', 'filters']
      },
      {
        id: 's2',
        question: 'Can I save my favorite properties?',
        answer: 'Yes! Click the heart icon on any property to save it to your favorites list. You can access saved properties from your dashboard and get notified of price changes or updates.',
        tags: ['favorites', 'save']
      },
      {
        id: 's3',
        question: 'How do property alerts work?',
        answer: 'Set up custom alerts based on your search criteria. We\'ll email or SMS you immediately when matching properties are posted. You can create multiple alerts for different requirements.',
        tags: ['alerts', 'notifications']
      },
      {
        id: 's4',
        question: 'What does "Verified" mean on property listings?',
        answer: 'Verified properties have been physically inspected by our team or have complete documentation validated. These listings have higher accuracy and authenticity, giving you confidence in the information provided.',
        tags: ['verified', 'authenticity']
      },
      {
        id: 's5',
        question: 'How accurate are the property details and prices?',
        answer: 'We encourage property owners to provide accurate information and have systems to detect and flag inconsistencies. However, we recommend verifying details during property visits. Report any discrepancies to help us maintain quality.',
        tags: ['accuracy', 'pricing']
      }
    ],
    payments: [
      {
        id: 'p1',
        question: 'What fees does CitizenHousing charge?',
        answer: 'Basic services are free. We charge ₹999 for premium listings (60 days), 1% success fee on completed transactions, and optional fees for legal assistance, property valuation, and loan facilitation services.',
        tags: ['fees', 'pricing']
      },
      {
        id: 'p2',
        question: 'What payment methods do you accept?',
        answer: 'We accept all major payment methods including credit/debit cards, UPI, net banking, digital wallets, and EMI options. All payments are processed securely through certified payment gateways.',
        tags: ['payment methods', 'secure']
      },
      {
        id: 'p3',
        question: 'When is the success fee charged?',
        answer: 'The 1% success fee is charged only after a successful property transaction is completed through our platform. No success, no fee - we only earn when you achieve your property goals.',
        tags: ['success fee', 'transaction']
      },
      {
        id: 'p4',
        question: 'Can I get a refund?',
        answer: 'Premium listing fees are refundable within 48 hours if you\'re not satisfied. Success fees are non-refundable as they\'re charged post-transaction. Service fees may be refunded based on our refund policy.',
        tags: ['refund', 'policy']
      },
      {
        id: 'p5',
        question: 'Do you provide invoices and receipts?',
        answer: 'Yes, all payments come with GST invoices and detailed receipts sent to your registered email. You can also download them from your account dashboard for record-keeping and tax purposes.',
        tags: ['invoices', 'receipts']
      },
      {
        id: 'p6',
        question: 'Are there any hidden charges?',
        answer: 'Absolutely not! We believe in complete transparency. All fees are clearly mentioned upfront before any payment. What you see is what you pay - no surprises or hidden charges ever.',
        tags: ['hidden charges', 'transparency']
      },
      {
        id: 'p7',
        question: 'How secure are online payments on your platform?',
        answer: 'We use bank-level security with SSL encryption and PCI DSS compliant payment gateways. Your financial information is never stored on our servers and all transactions are monitored for fraud prevention.',
        tags: ['security', 'payments']
      }
    ],
    safety: [
      {
        id: 'sf1',
        question: 'How do you ensure user safety?',
        answer: 'We verify user identities, monitor all communications, use AI to detect fraudulent listings, provide safety tips, and have a dedicated team to handle reports. Always meet in safe public places for property visits.',
        tags: ['safety', 'verification']
      },
      {
        id: 'sf2',
        question: 'What should I do if I encounter a fraudulent listing?',
        answer: 'Report it immediately using the "Report Listing" button or contact our support team. We investigate all reports within 24 hours and take swift action against fraudulent users.',
        tags: ['fraud', 'report']
      },
      {
        id: 'sf3',
        question: 'How can I verify if a property owner is genuine?',
        answer: 'Check for verification badges, read user reviews, communicate through our platform, ask for property documents, and always visit the property before making any payments. Trust your instincts.',
        tags: ['verification', 'genuine']
      },
      {
        id: 'sf4',
        question: 'Is it safe to share my personal information?',
        answer: 'Share personal information only through our secure messaging system. Never share financial details, passwords, or make advance payments. We encrypt all data and never share your information without consent.',
        tags: ['personal information', 'privacy']
      },
      {
        id: 'sf5',
        question: 'What safety precautions should I take during property visits?',
        answer: 'Visit during daylight hours, inform someone about your visit, meet at the property location, verify the person\'s identity, don\'t carry large amounts of cash, and trust your instincts about the situation.',
        tags: ['property visits', 'precautions']
      },
      {
        id: 'sf6',
        question: 'How do you handle disputes between users?',
        answer: 'We offer free mediation services for disputes. Our team reviews all evidence and communications to provide fair resolution. For legal matters, we can connect you with verified legal professionals.',
        tags: ['disputes', 'resolution']
      }
    ],
    support: [
      {
        id: 'sp1',
        question: 'How can I contact CitizenHousing support?',
        answer: 'Reach us via live chat (9 AM - 9 PM), email (support@citizenhousing.com), phone (+91-11-4567-8900), or submit a support ticket through your dashboard. We aim to respond within 2 hours.',
        tags: ['contact', 'support']
      },
      {
        id: 'sp2',
        question: 'What are your customer support hours?',
        answer: 'Our customer support is available Monday to Saturday, 9 AM to 9 PM IST. For urgent issues outside business hours, use our emergency helpline or submit a priority support ticket.',
        tags: ['hours', 'availability']
      },
      {
        id: 'sp3',
        question: 'Do you provide legal assistance for property transactions?',
        answer: 'Yes! We have partnerships with verified legal professionals who can help with document verification, legal due diligence, contract drafting, and property registration at competitive rates.',
        tags: ['legal', 'assistance']
      },
      {
        id: 'sp4',
        question: 'Can you help me with property valuation?',
        answer: 'Absolutely! Our certified property valuers provide accurate market valuations for buying, selling, loan purposes, or investment decisions. Basic online estimates are free, detailed reports start from ₹2,499.',
        tags: ['valuation', 'pricing']
      }
    ]
  };

  const filteredFAQs = faqData[activeCategory]?.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  ) || [];

  const FAQItem = ({ faq }: { faq: FAQ }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-4 overflow-hidden">
      <button
        onClick={() => toggleQuestion(faq.id)}
        className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
      >
        <div className="flex-1">
          <h3 className="font-medium text-gray-900 text-lg">{faq.question}</h3>
          <div className="flex items-center mt-2 space-x-2">
            {faq.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="ml-4 flex-shrink-0">
          {openQuestions[faq.id] ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </button>
      {openQuestions[faq.id] && (
        <div className="px-6 pb-6">
          <div className="border-t border-gray-100 pt-4">
            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
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
              <p className="text-gray-600">Frequently Asked Questions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <HelpCircle className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How Can We Help You?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find answers to the most common questions about using CitizenHousing platform, property transactions, and our services.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Browse by Category
              </h3>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id as FAQCategory)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-colors text-left ${
                      activeCategory === category.id
                        ? 'bg-blue-100 text-blue-700 border border-blue-200'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={activeCategory === category.id ? 'text-blue-600' : 'text-gray-400'}>
                        {category.icon}
                      </div>
                      <span className="font-medium">{category.title}</span>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      activeCategory === category.id
                        ? 'bg-blue-200 text-blue-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </nav>
              
              {/* Quick Stats */}
              <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Need More Help?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Can't find what you're looking for?
                </p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                  Contact Support
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            {/* Category Header */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                  {categories.find(c => c.id === activeCategory)?.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {categories.find(c => c.id === activeCategory)?.title}
                  </h2>
                  <p className="text-gray-600">
                    {filteredFAQs.length} questions • {searchQuery ? 'Filtered results' : 'All questions'}
                  </p>
                </div>
              </div>
            </div>

            {/* Search Results Notice */}
            {searchQuery && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Search className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-blue-900 font-medium">
                      Search Results for "{searchQuery}"
                    </p>
                    <p className="text-blue-700 text-sm">
                      Found {filteredFAQs.length} matching questions
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map(faq => (
                  <FAQItem key={faq.id} faq={faq} />
                ))
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No Results Found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any questions matching your search.
                  </p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg text-white p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-indigo-100 max-w-2xl mx-auto">
                Our support team is ready to assist you with any questions not covered in our FAQ. 
                We're committed to providing excellent customer service.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-indigo-100 text-sm mb-4">
                  Get instant help from our support team
                </p>
                <button className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm">
                  Start Chat
                </button>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-indigo-100 text-sm mb-4">
                  Send us a detailed message
                </p>
                <button className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm">
                  Send Email
                </button>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Phone Support</h3>
                <p className="text-indigo-100 text-sm mb-4">
                  Speak directly with our experts
                </p>
                <button className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Resources */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">User Guide</h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete step-by-step guide to using CitizenHousing effectively
              </p>
              <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                Read Guide →
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Safety Tips</h3>
              <p className="text-gray-600 text-sm mb-4">
                Essential safety guidelines for property transactions
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Learn More →
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <Building className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Property Listing Tips</h3>
              <p className="text-gray-600 text-sm mb-4">
                Best practices to make your listings stand out
              </p>
              <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                Get Tips →
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                <CreditCard className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Pricing Guide</h3>
              <p className="text-gray-600 text-sm mb-4">
                Understand our pricing structure and payment options
              </p>
              <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                View Pricing →
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mr-3">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">CitizenHousing</h2>
            </div>
            <p className="text-gray-600 mb-6">
              We hope this FAQ section has been helpful. Our goal is to make your property journey as smooth as possible.
            </p>
            
            {/* Quick Links */}
            <div className="flex items-center justify-center space-x-6 mb-6 flex-wrap">
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-2">
                <FileText className="w-4 h-4" />
                <span className="text-sm">Terms of Service</span>
              </button>
              <div className="w-px h-4 bg-gray-300"></div>
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-2">
                <Eye className="w-4 h-4" />
                <span className="text-sm">Privacy Policy</span>
              </button>
              <div className="w-px h-4 bg-gray-300"></div>
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-2">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">Contact Us</span>
              </button>
              <div className="w-px h-4 bg-gray-300"></div>
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-2">
                <Settings className="w-4 h-4" />
                <span className="text-sm">Help Center</span>
              </button>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Get in Touch</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>support@citizenhousing.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>+91-11-4567-8900</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Mon-Sat, 9 AM - 9 PM</span>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-sm text-gray-500">
                  © 2025 CitizenHousing Private Limited. All rights reserved.
                </div>
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <span>FAQ v2.0</span>
                  <div className="w-px h-3 bg-gray-300"></div>
                  <span>Last updated: January 15, 2025</span>
                  <div className="w-px h-3 bg-gray-300"></div>
                  <span>46 Questions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Was this FAQ helpful?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Help us improve our FAQ by sharing your feedback
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                <CheckCircle className="w-4 h-4" />
                <span>Yes, helpful</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                <AlertTriangle className="w-4 h-4" />
                <span>Needs improvement</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;