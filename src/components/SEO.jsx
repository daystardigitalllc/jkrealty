import React, { useEffect } from 'react';

export default function SEO({ 
  title, 
  description, 
  canonicalUrl = "https://daystardigitalllc.github.io/jkrealty/", 
  ogImage = "https://daystardigitalllc.github.io/jkrealty/images/110850.jpg",
  jsonLd = null 
}) {
  const fullTitle = title ? `${title} | Jeff Kralovec Realty Group` : 'Jeff Kralovec Realty Group | Luxury Real Estate in DE, PA & FL';
  const defaultDesc = description || "Jeff Kralovec Realty Group - Premier luxury real estate team serving Delaware, Pennsylvania, and Florida. Specializing in luxury homes, coastal properties, and record-setting sales.";

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', defaultDesc);

    // Update OpenGraph Meta Tags
    const ogTags = [
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: defaultDesc },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: ogImage },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Jeff Kralovec Realty Group' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: defaultDesc },
      { name: 'twitter:image', content: ogImage },
    ];

    ogTags.forEach((tag) => {
      let el = tag.property 
        ? document.querySelector(`meta[property="${tag.property}"]`)
        : document.querySelector(`meta[name="${tag.name}"]`);

      if (!el) {
        el = document.createElement('meta');
        if (tag.property) el.setAttribute('property', tag.property);
        if (tag.name) el.setAttribute('name', tag.name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', tag.content);
    });

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Dynamic JSON-LD Schema Injection
    let scriptTag = document.querySelector('#json-ld-schema');
    if (jsonLd) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'json-ld-schema';
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLd);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [fullTitle, defaultDesc, canonicalUrl, ogImage, jsonLd]);

  return null;
}

// Master Schema.org Generator for Jeff Kralovec Realty Group
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": "https://daystardigitalllc.github.io/jkrealty/#organization",
  "name": "Jeff Kralovec Realty Group",
  "alternateName": "JKRG",
  "url": "https://daystardigitalllc.github.io/jkrealty/",
  "logo": "https://daystardigitalllc.github.io/jkrealty/logo.svg",
  "image": "https://daystardigitalllc.github.io/jkrealty/images/jkrg-group-photo.jpg",
  "description": "Premier luxury real estate agency serving Delaware, Pennsylvania, and Florida. Specializing in luxury homes, coastal properties, and record-setting sales.",
  "telephone": "+1-267-858-0914",
  "email": "jeff.kralovec@compass.com",
  "priceRange": "$$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3701 Kennett Pike",
    "addressLocality": "Greenville",
    "addressRegion": "DE",
    "postalCode": "19807",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.7758,
    "longitude": -75.6027
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "08:00",
    "closes": "20:00"
  },
  "areaServed": [
    { "@type": "State", "name": "Delaware" },
    { "@type": "State", "name": "Pennsylvania" },
    { "@type": "State", "name": "Florida" },
    { "@type": "City", "name": "Greenville, DE" },
    { "@type": "City", "name": "Wilmington, DE" },
    { "@type": "City", "name": "Rehoboth Beach, DE" },
    { "@type": "City", "name": "Philadelphia, PA" },
    { "@type": "City", "name": "Palm Beach, FL" },
    { "@type": "City", "name": "Naples, FL" }
  ],
  "sameAs": [
    "https://facebook.com",
    "https://tiktok.com",
    "https://instagram.com"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "3",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Kimberlya Sutherland" },
      "datePublished": "2022-06-15",
      "reviewBody": "Whether you are buying or selling, Jeff has the skills, capabilities, and local knowledge – in Pennsylvania, Delaware, and Florida – to get the job done! My house sold literally overnight at a price over asking.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Todd Sassaman" },
      "datePublished": "2023-04-10",
      "reviewBody": "Jeff helped me buy my house in 2020 and then sell it in 2023. He is very motivated and responsive. I am grateful for his help preparing my home for sale.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Sean Brenner" },
      "datePublished": "2022-09-20",
      "reviewBody": "We worked with Jeff to sell our home in Delaware... Jeff got us listed in a matter of days and an over ask offer on the first weekend.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
    }
  ],
  "member": [
    {
      "@type": "Person",
      "name": "Jeff Kralovec",
      "jobTitle": "Owner & Lead REALTOR®",
      "telephone": "+1-267-858-0914",
      "email": "jeff.kralovec@compass.com"
    },
    {
      "@type": "Person",
      "name": "Charon Harris",
      "jobTitle": "REALTOR®",
      "telephone": "+1-267-858-0914",
      "email": "charon.harris@compass.com"
    },
    {
      "@type": "Person",
      "name": "Austin Zebrook",
      "jobTitle": "REALTOR®",
      "telephone": "+1-267-858-0914",
      "email": "austin.zebrook@compass.com"
    },
    {
      "@type": "Person",
      "name": "Penny Zebrook",
      "jobTitle": "REALTOR®",
      "telephone": "+1-267-858-0914",
      "email": "penny.zebrook@compass.com"
    },
    {
      "@type": "Person",
      "name": "Beth Ann Kralovec",
      "jobTitle": "REALTOR®",
      "telephone": "+1-267-858-0914",
      "email": "bethann.kralovec@compass.com"
    }
  ]
};
