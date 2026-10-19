import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/marketing/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | DCO Analytics",
  description:
    "Terms of Service governing the use of DCO Analytics consulting services, automated tagging spec engines, and web analytics tools.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "October 18, 2026";

  return (
    <LegalPage title="Terms of Service">
      <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">
        Last Updated: {lastUpdated}
      </p>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">1. Agreement to Terms</h2>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you or the entity you represent (&ldquo;Client,&rdquo; &ldquo;Customer,&rdquo; or &ldquo;You&rdquo;) and DCO Analytics (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By accessing our website (<Link href="/" className="text-white underline hover:text-zinc-300">dcoanalytics.com</Link>), engaging our analytics consulting services, or deploying our tagging spec automation tools, you agree to comply with and be bound by these Terms.
        </p>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">2. Scope of Services &amp; Platform Access</h2>
        <p>
          DCO Analytics provides enterprise digital measurement strategy, tracking architecture, tag management configurations, and automated technical analytics engines (collectively, the &ldquo;Services&rdquo;).
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white">Consulting &amp; Advisory:</strong> Custom tracking specifications, measurement architecture roadmaps, and audit deliverables.</li>
          <li><strong className="text-white">Automated Integrations:</strong> Software tools connecting to third-party APIs (including Google Tag Manager API and Google Analytics 4 Admin API) to programmatically generate tags, triggers, custom dimensions, and validation artifacts.</li>
          <li><strong className="text-white">Browser &amp; Telemetry Extensions:</strong> Quality assurance tools designed to intercept client-side <code className="text-zinc-200 bg-zinc-800 px-1 rounded text-xs font-mono">dataLayer</code> events and analytics payloads for validation purposes.</li>
        </ul>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">3. Authorization &amp; Access to Client Properties</h2>
        <p>
          To perform automated tag deployments, audits, or QA verifications, you may grant DCO Analytics authorized OAuth tokens, API keys, or permissions to your third-party accounts (e.g., Google Cloud, Google Tag Manager, Google Analytics 4, Segment).
        </p>
        <p>
          You represent and warrant that you hold all rights and permissions necessary to authorize our access to these accounts and containers. We access and modify containers strictly in accordance with your explicit instructions or approved technical specifications.
        </p>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">4. Intellectual Property Rights</h2>
        <h3 className="text-base font-medium text-zinc-200">4.1 Client Data &amp; Telemetry</h3>
        <p>
          You retain all rights, title, and interest in and to your proprietary data, customer data, digital event schemas, and business telemetry. DCO Analytics claims no ownership rights over your data.
        </p>

        <h3 className="text-base font-medium text-zinc-200 pt-2">4.2 DCO Analytics Platform &amp; Frameworks</h3>
        <p>
          DCO Analytics retains exclusive ownership of all rights, title, and interest in and to our proprietary software, algorithms, code libraries, automation scripts, pre-built GTM templates, extension source code, and design components.
        </p>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">5. Acceptable Use &amp; Restrictions</h2>
        <p>You agree not to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Decompile, reverse engineer, or disassemble any aspect of the DCO Analytics platform, spec engines, or extension binaries.</li>
          <li>Circumvent or attempt to circumvent authentication mechanisms, rate limits, or multi-tenant Row-Level Security (RLS) policies.</li>
          <li>Use the Services to collect, transmit, or process Unencrypted Protected Health Information (PHI) or Primary Account Numbers (payment card numbers) in violation of applicable laws or third-party terms.</li>
          <li>Resell, sublicense, or operate the automated engine as a white-labeled bureau service without prior written agreement.</li>
        </ul>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">6. Warranties &amp; Disclaimer</h2>
        <p>
          We provide our technical automation tools and platforms on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis. Analytics environments depend on third-party APIs (such as Google APIs) and dynamic front-end codebases.
        </p>
        <p>
          DCO Analytics disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that our automated generation scripts will be uninterrupted, entirely error-free, or compatible with future breaking changes in external third-party APIs.
        </p>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, in no event shall DCO Analytics or its officers, employees, or contractors be liable for any indirect, incidental, punitive, special, or consequential damages, including loss of profits, telemetry loss, or business interruption.
        </p>
        <p>
          Our total aggregate liability under these Terms shall not exceed the total fees paid by you to DCO Analytics during the twelve (12) months preceding the incident giving rise to liability.
        </p>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">8. Governing Law &amp; Dispute Resolution</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any dispute arising out of or relating to these Terms shall be resolved through binding arbitration or within the courts located in Delaware.
        </p>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">9. Inquiries</h2>
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 text-sm text-zinc-300 space-y-1">
          <p className="font-medium text-white">DCO Analytics Legal Operations</p>
          <p>
            Email:{" "}
            <a href="mailto:legal@dcoanalytics.com" className="text-white underline hover:text-zinc-300">
              legal@dcoanalytics.com
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
