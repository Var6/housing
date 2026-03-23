import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CITIZEN LAND PROPERTY & CONSTRUCTION PRIVATE LIMITED - Find Your Perfect Home",
    template: "%s | CITIZEN LAND PROPERTY & CONSTRUCTION PRIVATE LIMITED"
  },
  description: "Discover your dream property with CITIZEN LAND PROPERTY & CONSTRUCTION PRIVATE LIMITED - India's trusted platform for buying, selling, and renting homes. Browse thousands of verified listings from residential apartments to commercial spaces.",
  keywords: [
    "real estate",
    "property",
    "homes for sale",
    "rental properties",
    "apartments",
    "housing",
    "India real estate",
    "buy property",
    "rent house"
  ],
  authors: [{ name: "CITIZEN LAND PROPERTY & CONSTRUCTION PRIVATE LIMITED" }],
  creator: "CITIZEN LAND PROPERTY & CONSTRUCTION PRIVATE LIMITED",
  publisher: "CITIZEN LAND PROPERTY & CONSTRUCTION PRIVATE LIMITED",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://citizenhousing.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CITIZEN LAND PROPERTY & CONSTRUCTION PRIVATE LIMITED - Find Your Perfect Home",
    description: "Discover your dream property with CITIZEN LAND PROPERTY & CONSTRUCTION PRIVATE LIMITED - India's trusted platform for buying, selling, and renting homes.",
    url: "https://citizenhousing.in",
    siteName: "CITIZEN LAND PROPERTY & CONSTRUCTION PRIVATE LIMITED",
    images: [
      {
        url: "/logo/citizenhousing-og-image.png",
        width: 1200,
        height: 630,
        alt: "CITIZEN LAND PROPERTY & CONSTRUCTION PRIVATE LIMITED - Real Estate Platform",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CITIZEN LAND PROPERTY & CONSTRUCTION PRIVATE LIMITED - Find Your Perfect Home",
    description: "Discover your dream property with CITIZEN LAND PROPERTY & CONSTRUCTION PRIVATE LIMITED - India's trusted platform for buying, selling, and renting homes.",
    images: ["/logo/citizenhousing-twitter-card.png"],
    site: "@CitizenHousingg",
    creator: "@CitizenHousingg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
icons: {
  icon: [
    { url: "/favicon.ico" },
  ],
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/logo/browserconfig.xml" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Schema.org structured data for real estate business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "CITIZEN LAND PROPERTY & CONSTRUCTION PRIVATE LIMITED",
              "legalName": "CITIZEN LAND PROPERTY & CONSTRUCTION PRIVATE LIMITED",
              "description": "India's trusted platform for buying, selling, and renting homes",
              "url": "https://citizenhousing.in",
              "logo": "https://citizenhousing.in/logo/citizenhousing-logo2.png",
              "sameAs": [
                "https://www.facebook.com/share/1Fkb85HcL1/",
                "https://x.com/CitizenHousingg",
                "https://www.linkedin.com/company/citizenhousingpatna",
                "https://www.instagram.com/citizenhousingpatna/",
                "https://youtube.com/@citizenhousingpatna"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Santi Devi Nivas Near Sichai Bhawan",
                "addressLocality": "Anishabad, Patna",
                "addressCountry": "IN",
                "postalCode": "800002"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9031007097",
                "contactType": "customer service",
                "email": "sales@citizenhousing.in"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}