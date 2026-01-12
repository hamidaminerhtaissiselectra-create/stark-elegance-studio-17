import { useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  serviceImage?: string;
  faqItems?: FAQItem[];
  breadcrumbs: { name: string; url: string }[];
  cityName?: string;
}

const ServiceSchema = ({
  serviceName,
  serviceDescription,
  serviceUrl,
  serviceImage,
  faqItems,
  breadcrumbs,
  cityName,
}: ServiceSchemaProps) => {
  const baseUrl = 'https://hdconnect.fr';

  // Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'HD Connect',
      telephone: '+33 6 27 13 53 04',
      email: 'kamal@hdconnect.fr',
      address: {
        '@type': 'PostalAddress',
        addressLocality: cityName || 'Paris',
        addressCountry: 'FR',
      },
      url: baseUrl,
    },
    areaServed: cityName
      ? {
          '@type': 'City',
          name: cityName,
          '@id': `https://fr.wikipedia.org/wiki/${cityName}`,
        }
      : {
          '@type': 'Country',
          name: 'France',
        },
    url: `${baseUrl}${serviceUrl}`,
    ...(serviceImage && { image: `${baseUrl}${serviceImage}` }),
  };

  // FAQ Schema
  const faqSchema = faqItems?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${baseUrl}${crumb.url}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default ServiceSchema;
