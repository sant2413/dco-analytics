import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/marketing/LegalPage";
import CookieSettingsButton from "@/components/marketing/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Cookie Policy | DCO Analytics",
  description:
    "Cookie Policy for DCO Analytics. Read how we classify tracking technologies, support Google Consent Mode v2, and provide granular consent management.",
};

export default function CookiePolicyPage() {
  const lastUpdated = "October 18, 2026";

  return (
    <LegalPage title="Cookie Policy">
      <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">
        Last Updated: {lastUpdated}
      </p>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">1. Overview &amp; Consent Framework</h2>
        <p>
          This Cookie Policy explains how DCO Analytics (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) utilizes cookies, local storage, and related tracking scripts when you access <Link href="/" className="text-white underline hover:text-zinc-300">dcoanalytics.com</Link> and our web application.
        </p>
        <p>
          As analytics architects, we adhere strictly to measurement standards. We deploy <strong className="text-white">Google Consent Mode v2</strong> natively. Before non-essential cookies run, our consent manager initializes default signals (<code className="text-zinc-200 bg-zinc-800 px-1 rounded text-xs font-mono">analytics_storage=&apos;denied&apos;</code>, <code className="text-zinc-200 bg-zinc-800 px-1 rounded text-xs font-mono">ad_storage=&apos;denied&apos;</code>, <code className="text-zinc-200 bg-zinc-800 px-1 rounded text-xs font-mono">ad_user_data=&apos;denied&apos;</code>, <code className="text-zinc-200 bg-zinc-800 px-1 rounded text-xs font-mono">ad_personalization=&apos;denied&apos;</code>). Storage is only enabled once explicit opt-in is granted.
        </p>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">2. Cookie Categories We Use</h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-800">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-zinc-800 bg-zinc-900/80 text-zinc-300">
              <tr>
                <th className="py-2.5 px-3 font-semibold">Category</th>
                <th className="py-2.5 px-3 font-semibold">Purpose</th>
                <th className="py-2.5 px-3 font-semibold">Consent Mode v2 Key</th>
                <th className="py-2.5 px-3 font-semibold">Requirement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
              <tr>
                <td className="py-2.5 px-3 font-medium text-white">Strictly Necessary</td>
                <td className="py-2.5 px-3">Session persistence, security headers, CSRF tokens, and consent preference storage.</td>
                <td className="py-2.5 px-3 font-mono text-xs">security_storage</td>
                <td className="py-2.5 px-3 font-semibold text-emerald-400">Always Active</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-medium text-white">Measurement &amp; Analytics</td>
                <td className="py-2.5 px-3">Aggregated performance monitoring, journey completion rates, and error rate telemetry.</td>
                <td className="py-2.5 px-3 font-mono text-xs">analytics_storage</td>
                <td className="py-2.5 px-3 text-zinc-400">Opt-in Required</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-medium text-white">Marketing &amp; Personalization</td>
                <td className="py-2.5 px-3">Conversion modeling, campaign attribution, and audience targeting.</td>
                <td className="py-2.5 px-3 font-mono text-xs">ad_storage, ad_user_data, ad_personalization</td>
                <td className="py-2.5 px-3 text-zinc-400">Opt-in Required</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">3. Specific Cookies Deployed</h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-800">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-zinc-800 bg-zinc-900/80 text-zinc-300">
              <tr>
                <th className="py-2.5 px-3 font-semibold">Identifier</th>
                <th className="py-2.5 px-3 font-semibold">Provider</th>
                <th className="py-2.5 px-3 font-semibold">Function</th>
                <th className="py-2.5 px-3 font-semibold">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
              <tr>
                <td className="py-2.5 px-3 font-mono text-xs text-white">dco_consent_state</td>
                <td className="py-2.5 px-3">DCO Analytics</td>
                <td className="py-2.5 px-3">Stores user cookie preference choices and Consent Mode v2 flags.</td>
                <td className="py-2.5 px-3">12 months</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono text-xs text-white">sb-[project]-auth-token</td>
                <td className="py-2.5 px-3">Supabase</td>
                <td className="py-2.5 px-3">Maintains authenticated session state for customer dashboard access.</td>
                <td className="py-2.5 px-3">Session / Refresh</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono text-xs text-white">_ga, _ga_*</td>
                <td className="py-2.5 px-3">Google Analytics 4</td>
                <td className="py-2.5 px-3">Distinguishes unique users and visits (strictly conditional on analytics consent).</td>
                <td className="py-2.5 px-3">Up to 2 years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">4. Managing and Revoking Preferences</h2>
        <p>
          You retain complete discretion over non-essential tracking technologies. You can modify your stored choices anytime by triggering our settings panel:
        </p>
        <div className="pt-2">
          <CookieSettingsButton />
        </div>
        <p className="pt-2">
          Alternatively, browser-level controls allow you to reject or delete cookies entirely. If your browser emits a <strong className="text-white">Global Privacy Control (GPC)</strong> signal, our banner automatically enforces non-essential categories as denied.
        </p>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="text-xl font-medium text-white">5. Contact &amp; Governance</h2>
        <p>
          For technical verification of our measurement containers or to audit how our platform handles tag boundaries, refer to our <Link href="/privacy" className="text-white underline hover:text-zinc-300">Privacy Policy</Link> or contact{" "}
          <a href="mailto:privacy@dcoanalytics.com" className="text-white underline hover:text-zinc-300">
            privacy@dcoanalytics.com
          </a>.
        </p>
      </section>
    </LegalPage>
  );
}