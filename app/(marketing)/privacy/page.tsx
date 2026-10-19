import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/marketing/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | DCO Analytics",
  description:
    "Privacy Policy for DCO Analytics. Learn how we handle enterprise data, telemetry, and ensure compliance across CCPA/CPRA, GDPR, and global frameworks.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 18, 2026";

  return (
    <LegalPage title="Privacy Policy">
      <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">
        Last Updated: {lastUpdated}
      </p>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">1. Introduction &amp; Entity Information</h2>
        <p>
          DCO Analytics (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) provides technical measurement, tracking architecture, and SaaS analytics automation tools to enterprise organizations. This Privacy Policy details our practices concerning data collection, transmission, and disclosure across our marketing site (<Link href="/" className="text-white underline hover:text-zinc-300">dcoanalytics.com</Link>) and our authenticated measurement platform.
        </p>
        <p>
          For inquiries regarding our data handling or Data Processing Agreements (DPAs), contact our privacy team at{" "}
          <a href="mailto:privacy@dcoanalytics.com" className="text-white underline hover:text-zinc-300">
            privacy@dcoanalytics.com
          </a>.
        </p>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">2. Scope &amp; Roles Under Data Protection Laws</h2>
        <p>Depending on your relationship with DCO Analytics, our legal role varies:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-white">Data Controller:</strong> For marketing inquiries, account registration details, and direct communications, DCO Analytics acts as the Data Controller.
          </li>
          <li>
            <strong className="text-white">Data Processor / Service Provider:</strong> When our platform integrates with client Google Tag Manager (GTM) containers, Google Analytics 4 (GA4) properties, or web environments to generate tagging specifications or audit telemetry, DCO Analytics acts as a Data Processor under GDPR and a Service Provider under the California Consumer Privacy Act (CCPA/CPRA). We process client-side telemetry strictly in accordance with client instructions and documented contracts.
          </li>
        </ul>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">3. Information We Collect</h2>
        <h3 className="text-base font-medium text-zinc-200">3.1 Information You Directly Provide</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-white">Contact &amp; Discovery Data:</strong> Name, work email address, company name, website URL, and current measurement stack specifications provided through our contact forms or onboarding questionnaires.
          </li>
          <li>
            <strong className="text-white">Account &amp; Workspace Credentials:</strong> OAuth tokens, authorized Google account profiles, and API access tokens (e.g., GTM API, GA4 Admin API) required to automate tag deployments on your behalf.
          </li>
        </ul>

        <h3 className="text-base font-medium text-zinc-200 pt-2">3.2 Automatically Collected Data &amp; Telemetry</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-white">Device &amp; Usage Telemetry:</strong> IP addresses (anonymized prior to persistent storage where applicable), browser type, operating system, referral URLs, and interactions with our application.
          </li>
          <li>
            <strong className="text-white">Audit &amp; Testing Artifacts:</strong> When utilizing our QA &amp; Audit Extension, the extension captures client-side <code className="text-zinc-200 bg-zinc-800 px-1.5 py-0.5 rounded text-sm font-mono">dataLayer</code> events, HTTP network payloads sent to analytics endpoints, and optional user-triggered screen evidence for automated QA deck assembly.
          </li>
        </ul>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">4. Legal Bases for Processing (EEA/UK Individuals)</h2>
        <p>We process personal data under the following legal frameworks:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white">Performance of a Contract:</strong> To provision workspace features, run automated GTM/GA4 API integrations, and deliver agreed analytics auditing services.</li>
          <li><strong className="text-white">Legitimate Interests:</strong> To secure our systems, prevent fraud, debug system logs, and refine our core automation engine.</li>
          <li><strong className="text-white">Consent:</strong> For marketing communications and non-essential cookies via Google Consent Mode v2. Consent can be updated or revoked at any time.</li>
        </ul>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">5. Third-Party Disclosures &amp; Subprocessors</h2>
        <p>
          DCO Analytics never sells, rents, or trades business telemetry or client personal data. We disclose information strictly to technical subprocessors bound by confidentiality and data processing standards:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white">Cloud Infrastructure:</strong> Vercel (Edge delivery, serverless hosting), Supabase / AWS (Database storage with Row-Level Security).</li>
          <li><strong className="text-white">Google Cloud Platform &amp; APIs:</strong> Google Tag Manager API, Google Analytics 4 API, and Google OAuth Services (used solely within authorized user scopes).</li>
        </ul>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">6. US State Privacy Rights (CCPA / CPRA &amp; Multi-State)</h2>
        <p>
          Residents of California, Virginia, Colorado, Connecticut, Utah, and other US states with enacted comprehensive privacy laws hold specific statutory rights:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white">Right to Know / Access:</strong> Request disclosure of categories and specific pieces of personal information collected.</li>
          <li><strong className="text-white">Right to Delete:</strong> Request erasure of personal data held, subject to standard legal retention exceptions.</li>
          <li><strong className="text-white">Right to Correct:</strong> Rectify inaccurate personal records.</li>
          <li><strong className="text-white">Opt-Out of Sale or Sharing:</strong> We do not sell personal data or share it for cross-context behavioral advertising. We honor Global Privacy Control (GPC) signals emitted by modern browsers.</li>
        </ul>
        <p>
          To exercise these rights, submit a verified request to{" "}
          <a href="mailto:privacy@dcoanalytics.com" className="text-white underline hover:text-zinc-300">
            privacy@dcoanalytics.com
          </a>{" "}
          with the subject line <em>&ldquo;US Privacy Rights Request.&rdquo;</em>
        </p>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">7. Data Retention &amp; Security Controls</h2>
        <p>
          We implement industry-standard administrative, technical, and physical safeguards, including end-to-end TLS encryption in transit, AES-256 encryption at rest, role-based access controls, and PostgreSQL Row-Level Security (RLS) policies across our multi-tenant schemas. Audit snapshots and extension telemetry logs are retained for 90 days unless an extended retention policy is agreed upon in a client Master Services Agreement (MSA).
        </p>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">8. Updates &amp; Contact</h2>
        <p>
          We periodically review this policy to reflect operational changes or evolving regulations. Significant alterations will be announced via our site or direct client notice.
        </p>
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 text-sm text-zinc-300 space-y-1">
          <p className="font-medium text-white">DCO Analytics Legal &amp; Data Governance</p>
          <p>
            Email:{" "}
            <a href="mailto:privacy@dcoanalytics.com" className="text-white underline hover:text-zinc-300">
              privacy@dcoanalytics.com
            </a>
          </p>
          <p>
            Website:{" "}
            <Link href="/" className="text-white underline hover:text-zinc-300">
              dcoanalytics.com
            </Link>
          </p>
        </div>
      </section>
    </LegalPage>
  );
}
