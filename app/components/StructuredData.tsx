import structuredDataContent from "../../.intlayer/dictionary/structured-data.json";
import faqSectionContent from "../../.intlayer/dictionary/faq-section.json";

export default async function StructuredData({ locale }: { locale: string }) {
  const baseUrl = process.env.BASE_URL!;
  const contentStructuredData = await getTranslation(structuredDataContent, locale);
  const contentFAQ = await getTranslation(faqSectionContent, locale);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KASUGI",
    url: baseUrl,
    logo: `${baseUrl}/images/logo-dark.png`,
    description: contentStructuredData.organizationSchemaDescription,
    sameAs: ["https://instagram.com/kasugi"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English", "Polish", "Ukrainian"],
    },
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: contentStructuredData.productSchemaProductName,
    description: contentStructuredData.productSchemaDescription,
    brand: { "@type": "Brand", name: "KASUGI" },
    image: [`${baseUrl}/images/gi-manto-test.webp`],
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "140",
      availability: "https://schema.org/PreOrder",
      url: `${baseUrl}/${locale}/#preorder`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: contentFAQ.customDesign_question,
        acceptedAnswer: {
          "@type": "Answer",
          text: contentFAQ.customDesign_answer,
        },
      },
      {
        "@type": "Question",
        name: contentFAQ.productionTime_question,
        acceptedAnswer: {
          "@type": "Answer",
          text: contentFAQ.productionTime_answer,
        },
      },
      {
        "@type": "Question",
        name: contentFAQ.competition_question,
        acceptedAnswer: {
          "@type": "Answer",
          text: contentFAQ.competition_answer,
        },
      },
      {
        "@type": "Question",
        name: contentFAQ.returns_question,
        acceptedAnswer: {
          "@type": "Answer",
          text: contentFAQ.returns_answer,
        },
      },
      {
        "@type": "Question",
        name: contentFAQ.restrictedZones_question,
        acceptedAnswer: {
          "@type": "Answer",
          text: contentFAQ.restrictedZones_answer,
        },
      },
      {
        "@type": "Question",
        name: contentFAQ.care_question,
        acceptedAnswer: {
          "@type": "Answer",
          text: contentFAQ.care_answer,
        },
      },
      {
        "@type": "Question",
        name: contentFAQ.international_question,
        acceptedAnswer: {
          "@type": "Answer",
          text: contentFAQ.international_answer,
        },
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: contentStructuredData.websiteSchemaName,
    url: `${baseUrl}/${locale}`,
    inLanguage: locale === "uk" ? "uk-UA" : locale === "pl" ? "pl-PL" : "en-US",
  };

  const schemas = [organizationSchema, productSchema, faqSchema, websiteSchema];

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  );

  function getTranslation(dictionary, locale) {
    return dictionary.content.translation[locale];
  }
}
