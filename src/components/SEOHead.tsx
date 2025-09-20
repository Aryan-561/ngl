'use client';

import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  noIndex?: boolean;
}

export default function SEOHead({
  title = "AnonBox - Professional Anonymous Feedback Platform",
  description = "AnonBox is the professional platform for anonymous workplace feedback. Share honest feedback without revealing your identity to help improve team dynamics and workplace communication.",
  keywords = "anonbox, anonymous feedback, professional feedback, workplace communication, team feedback, anonymous chat, professional platform, feedback messages, workplace improvement, professional platform",
  ogImage = "/og-image.jpg",
  ogUrl = "https://www.anonbox.tech",
  noIndex = false
}: SEOHeadProps) {
  const fullTitle = title.includes('AnonBox') ? title : `${title} | AnonBox`;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noIndex ? "noindex,follow" : "index,follow"} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="AnonBox" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@HimanshuTamoli" />
      
      {/* Additional SEO */}
      <meta name="author" content="HimanshuTamoli" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={ogUrl} />
      
    
    </Head>
  );
}
