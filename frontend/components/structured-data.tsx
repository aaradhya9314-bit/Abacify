const SITE_URL = "https://www.abacify.com";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Abacify",
    url: SITE_URL,
    logo: `${SITE_URL}/abacify_logo.png`,
    description:
      "Abacify offers structured learning programs in Abacus, Chess, AI & Robotics, and Maths & Science, with online and offline formats.",
  };

  return (
    // eslint-disable-next-line react/no-danger
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
