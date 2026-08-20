import React from "react";
import {
  profileData,
  experienceData,
  projectsData,
} from "@/data/portfolioData";

export const JsonLd: React.FC = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    url: "https://pushkarbuilds.tech",
    email: profileData.email,
    jobTitle: "Software Engineer",
    description: profileData.tagline,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "Organization",
      name: "Agilique Solutions LLP",
      url: "https://agilique.com",
    },
    knowsAbout: [
      "Software Engineering",
      "Full-Stack Development",
      "Mobile App Development",
      "React",
      "TypeScript",
      "Flutter",
      "Python",
      "Node.js",
      "AI Solutions",
    ],
    sameAs: [
      profileData.socials.github,
      profileData.socials.linkedin,
      profileData.socials.instagram,
    ].filter(Boolean),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Agilique Solutions LLP",
    url: "https://agilique.com",
    founder: {
      "@type": "Person",
      name: profileData.name,
      url: "https://pushkarbuilds.tech",
    },
    description:
      "Modern digital software systems, client solutions, and cross-platform mobile ecosystems.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profileData.name} — Portfolio`,
    url: "https://pushkarbuilds.tech",
    description: profileData.tagline,
    author: {
      "@type": "Person",
      name: profileData.name,
    },
  };

  const projectsListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects by Pushkar Gaikwad",
    description: "Software engineering projects and applications",
    numberOfItems: projectsData.length,
    itemListElement: projectsData.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.fullDescription || project.description,
        applicationCategory: "DeveloperApplication",
        url: project.links.live || project.links.github || undefined,
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://pushkarbuilds.tech",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};
