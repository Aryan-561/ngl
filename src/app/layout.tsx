import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from '../context/AuthProvider';
import { Toaster } from "@/components/ui/sonner"
import Navbar from "@/components/customui/Navbar";

export const metadata: Metadata = {
  title: {
    default: "AnonBox - Professional Anonymous Feedback Platform",
    template: "%s | AnonBox"
  },
  description: "AnonBox is the professional platform for anonymous workplace feedback. Share honest feedback without revealing your identity to help improve team dynamics and workplace communication.",
  keywords: [
    "anonbox",
    "anonymous feedback",
    "professional feedback",
    "workplace communication",
    "team feedback",
    "anonymous chat",
    "professional platform",
    "feedback messages",
    "workplace improvement",
    "professional platform"
  ],
  authors: [{ name: "HimanshuTamoli" }],
  creator: "HimanshuTamoli",
  publisher: "AnonBox",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.anonbox.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "AnonBox - Professional Anonymous Feedback Platform",
    description: "AnonBox is the professional platform for anonymous workplace feedback. Share honest feedback without revealing your identity to help improve team dynamics and workplace communication.",
    url: 'https://www.anonbox.tech',
    siteName: 'AnonBox',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AnonBox Platform - Professional Anonymous Feedback',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AnonBox - Professional Anonymous Feedback Platform",
    description: "AnonBox is the professional platform for anonymous workplace feedback. Share honest feedback without revealing your identity to help improve team dynamics and workplace communication.",
    images: ['/twitter-image.jpg'],
    creator: '@imarnav24',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'f77e52de381134a4',
  },
};
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import Footer from "@/components/customui/Footer";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>

        <script defer src="https://cloud.umami.is/script.js" data-website-id="a6f3b334-7717-4e51-a11f-c3ba09c6536b"></script>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "AnonBox",
              "description": "AnonBox is the professional platform for anonymous workplace feedback. Share honest feedback without revealing your identity to help improve team dynamics and workplace communication.",
              "url": "https://www.anonbox.tech",
              "applicationCategory": "SocialNetworkingApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "creator": {
                "@type": "Person",
                "name": "HimanshuTamoli"
              }
            })
          }}
        />
      </head>
      <AuthProvider>
        <body className={`${archivoBlack.variable} ${space.variable}`}>
          <Navbar />

          <main>
            {children}
          </main>
          <Footer />
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}
