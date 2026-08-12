import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/legal-page";
import { getDisplayPhoneNumber, getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Privacy Policy | Abacify",
  description: "How Abacify collects, uses, and protects information submitted through the enquiry form.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="12 August 2026">
      <LegalSection title="Overview">
        <p>
          This Privacy Policy explains how Abacify (&quot;Abacify&quot;, &quot;we&quot;, &quot;us&quot;) collects,
          uses, and protects information when you use abacify.com and its enquiry form. This policy reflects the
          actual data handling implemented on this website — it does not describe features that are not in use.
        </p>
      </LegalSection>

      <LegalSection title="Information We Collect">
        <p>We collect information only when you voluntarily submit our enquiry form. The fields collected are:</p>
        <ul className="list-disc pl-5">
          <li>Parent/Guardian name</li>
          <li>Phone number</li>
          <li>Email address (optional)</li>
          <li>Student name (optional)</li>
          <li>Student age or class</li>
          <li>Selected program and learning mode (online/offline)</li>
          <li>Your message or requirements</li>
        </ul>
        <p>
          We do not use cookies, analytics, or advertising tools to collect information about your visit, and we
          do not ask for payment information anywhere on this site.
        </p>
      </LegalSection>

      <LegalSection title="Why We Collect It">
        <p>
          We collect this information solely to respond to your enquiry about Abacify&apos;s programs — to
          understand what you&apos;re asking about, contact you back, and prepare relevant information for your
          child&apos;s age or class.
        </p>
      </LegalSection>

      <LegalSection title="How It Is Used">
        <p>
          When you submit the enquiry form, your information is saved to our database. If the submission is
          successful, your device also opens a pre-filled WhatsApp message addressed to Abacify&apos;s WhatsApp
          number, which you choose whether to send. WhatsApp is operated by WhatsApp/Meta, and any message you
          send through it is subject to WhatsApp&apos;s own privacy policy and terms, which are outside our
          control.
        </p>
      </LegalSection>

      <LegalSection title="Where It Is Processed">
        <p>Our website and enquiry system rely on the following infrastructure providers to operate:</p>
        <ul className="list-disc pl-5">
          <li>Vercel — hosts the website itself</li>
          <li>Render or Railway — hosts the backend service that receives enquiry submissions</li>
          <li>MongoDB Atlas — stores enquiry records in a database</li>
        </ul>
        <p>
          These providers process data on our behalf to operate the site and do not use your information for
          their own independent purposes.
        </p>
      </LegalSection>

      <LegalSection title="Sharing">
        <p>
          We do not sell your information, and we do not share it with advertisers or marketing platforms. Your
          information is only accessible to Abacify, the infrastructure providers listed above, and — only when
          you choose to send the WhatsApp message — WhatsApp/Meta.
        </p>
      </LegalSection>

      <LegalSection title="Retention">
        <p>
          We do not currently operate an automated data-retention schedule. Enquiry records are kept for as long
          as needed to respond to and follow up on your enquiry. You can request deletion at any time using the
          contact method below.
        </p>
      </LegalSection>

      <LegalSection title="Your Rights & Deletion Requests">
        <p>
          You can request access to, correction of, or deletion of your information at any time. Since we do not
          currently offer an email contact channel, please reach out via WhatsApp and we will action your request.
        </p>
      </LegalSection>

      <LegalSection title="Security Measures">
        <p>Our backend applies standard security practices appropriate to a simple enquiry system, including:</p>
        <ul className="list-disc pl-5">
          <li>HTTPS encryption in transit (provided by our hosting platforms)</li>
          <li>Security-focused HTTP headers (via Helmet)</li>
          <li>Rate limiting on the enquiry endpoint to reduce abuse and spam</li>
          <li>Restricted cross-origin access (CORS) to our own frontend domain</li>
          <li>No secrets or credentials stored in frontend code</li>
        </ul>
      </LegalSection>

      <LegalSection title="Children's Privacy">
        <p>
          Our programs are intended for children, but our enquiry form is designed to be completed by a
          parent or guardian, not the child directly. Student name is optional, and no other information
          about the child is required to submit an enquiry. We do not knowingly collect personal information
          directly from children through this website.
        </p>
      </LegalSection>

      <LegalSection title="Changes to This Policy">
        <p>
          If our data practices change — for example, if we add analytics or a new third-party tool — we will
          update this page first, before that change takes effect.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          For any privacy questions or requests, contact us on WhatsApp:{" "}
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
            {getDisplayPhoneNumber()}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
