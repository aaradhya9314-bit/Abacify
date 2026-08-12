import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/legal-page";
import { getDisplayPhoneNumber, getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Cookie Policy | Abacify",
  description: "Abacify's use of cookies and similar technologies.",
  alternates: { canonical: "/cookies" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" lastUpdated="12 August 2026">
      <LegalSection title="No Tracking Cookies">
        <p>
          abacify.com does not currently use advertising cookies, tracking cookies, analytics tools, or tools like
          Meta Pixel. We are not currently collecting behavioral or advertising data about your visit to this
          website.
        </p>
      </LegalSection>

      <LegalSection title="Strictly Necessary Storage">
        <p>
          Beyond what your browser stores automatically to load and render the site, this website does not set
          any non-essential cookies.
        </p>
      </LegalSection>

      <LegalSection title="If This Changes">
        <p>
          If we introduce analytics, advertising tools, or any tracking technology in the future, we will update
          this page first, before that change takes effect, and disclose exactly what is used and why.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          For questions about this policy, contact us on WhatsApp:{" "}
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
            {getDisplayPhoneNumber()}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
