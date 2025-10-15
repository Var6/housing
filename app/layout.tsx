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
    default: "CitizenHousing - Find Your Perfect Home",
    template: "%s | CitizenHousing"
  },
  description: "Discover your dream property with CitizenHousing - India's trusted platform for buying, selling, and renting homes. Browse thousands of verified listings from residential apartments to commercial spaces.",
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
  authors: [{ name: "CitizenHousing Team" }],
  creator: "CitizenHousing Private Limited",
  publisher: "CitizenHousing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://citizenhousing.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CitizenHousing - Find Your Perfect Home",
    description: "Discover your dream property with CitizenHousing - India's trusted platform for buying, selling, and renting homes.",
    url: "https://citizenhousing.com", // Replace with your actual domain
    siteName: "CitizenHousing",
    images: [
      {
        url: "/logo/citizenhousing-og-image.png", // Add your Open Graph image here
        width: 1200,
        height: 630,
        alt: "CitizenHousing - Real Estate Platform",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CitizenHousing - Find Your Perfect Home",
    description: "Discover your dream property with CitizenHousing - India's trusted platform for buying, selling, and renting homes.",
    images: ["/logo/citizenhousing-twitter-card.png"], // Add your Twitter card image here
    creator: "@citizenhousing", // Replace with your actual Twitter handle
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
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
      { url: "/logo.jpg", sizes: "32x32", type: "image/jpg" },
    ],
    apple: [
      { url: "/logo/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logo/safari-pinned-tab.svg",
        color: "#2563eb", // Your brand blue color
      },
    ],
  },
  manifest: "/logo/site.webmanifest",
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
              "name": "CitizenHousing",
              "description": "India's trusted platform for buying, selling, and renting homes",
              "url": "https://citizenhousing.com", // Replace with your actual domain
              "logo": "https://citizenhousing.com/logo/citizenhousing-logo.png", // Replace with your actual logo URL
              "sameAs": [
                "https://www.facebook.com/citizenhousing", // Add your social media links
                "https://www.twitter.com/citizenhousing",
                "https://www.linkedin.com/company/citizenhousing",
                "https://www.instagram.com/citizenhousing"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Housing Street",
                "addressLocality": "New Delhi",
                "addressCountry": "IN",
                "postalCode": "110001"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-11-XXXXXXXX", // Add your phone number
                "contactType": "customer service",
                "email": "support@citizenhousing.com"
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