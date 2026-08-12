import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/legal-page";
import { getDisplayPhoneNumber, getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Terms of Use | Abacify",
  description: "Terms governing your use of the Abacify website and enquiry form.",
  alternates: { canonical: "/terms" },
};

export default function TermsOfUsePage() {
  return (
    <LegalPage title="Terms of Use" lastUpdated="12 August 2026">
      <LegalSection title="Acceptance of Terms">
        <p>
          By using abacify.com, you agree to these Terms of Use. If you do not agree, please do not use this
          website.
        </p>
      </LegalSection>

      <LegalSection title="Description of Service">
        <p>
          abacify.com is an information and enquiry website for Abacify&apos;s learning programs: Abacus, Chess,
          AI & Robotics, and Maths & Science. This website does not provide user accounts, online payments,
          subscriptions, or any admissions/application workflow — its purpose is to inform you about our programs
          and let you send an enquiry.
        </p>
      </LegalSection>

      <LegalSection title="No Guarantees">
        <p>
          We do not guarantee specific learning outcomes, exam results, career outcomes, job placements, or
          certifications through any of our programs. Descriptions of program benefits reflect the intended focus
          of the curriculum, not a promised result.
        </p>
      </LegalSection>

      <LegalSection title="Accurate Information">
        <p>
          When you submit an enquiry, please provide accurate contact details so that we can respond to you
          appropriately.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual Property">
        <p>
          All content on this website — including text, design, and visual identity — belongs to Abacify unless
          stated otherwise, and may not be copied or reproduced without permission.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <p>
          This website is provided on an &quot;as is&quot; basis. To the extent permitted by law, Abacify is not
          liable for any indirect or incidental loss arising from your use of this website.
        </p>
      </LegalSection>

      <LegalSection title="Governing Law">
        <p>
          <em>
            Placeholder: the governing jurisdiction for these terms has not yet been specified and will be
            confirmed before launch.
          </em>
        </p>
      </LegalSection>

      <LegalSection title="Changes to These Terms">
        <p>We may update these Terms of Use from time to time. Continued use of the website after changes are posted constitutes acceptance of the updated terms.</p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          For questions about these terms, contact us on WhatsApp:{" "}
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
            {getDisplayPhoneNumber()}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
