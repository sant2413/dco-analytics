import Link from "next/link";
import { Mail } from "lucide-react";
import TrackedSection from "@/components/marketing/TrackedSection";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <TrackedSection
      as="footer"
      id="contact"
      name="Footer"
      className="bg-dco-bg px-6 pb-10 pt-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-6">
            <span className="text-lg font-bold tracking-tight text-white">
              DCO<span className="ml-1 font-normal text-dco-muted">Analytics</span>
            </span>
          </div>
          <p className="mx-auto my-6 max-w-sm text-sm leading-6 text-dco-muted">
            Enterprise data architecture consultancy. We build the measurement
            infrastructure that powers data-driven organizations.
          </p>
          <a
            href="mailto:hello@dcoanalytics.com"
            className="inline-flex items-center gap-2 font-mono text-sm text-dco-primary no-underline transition hover:text-white"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            hello@dcoanalytics.com
          </a>
        </div>

        <div className="flex flex-col items-center justify-center border-t border-dco-border/60 pt-8 text-center font-mono text-xs text-dco-muted">
          <div>&copy; {year} DCO Analytics LLC. All rights reserved.</div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <button
              type="button"
              id="dco-open-consent-footer"
              className="cursor-pointer border-0 bg-transparent p-0 font-sans text-sm text-dco-muted no-underline"
            >
              Cookie Settings
            </button>
            <Link href="/privacy" className="font-sans text-sm text-dco-muted no-underline hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="font-sans text-sm text-dco-muted no-underline hover:text-white">
              Terms
            </Link>
            <Link href="/cookies" className="font-sans text-sm text-dco-muted no-underline hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </TrackedSection>
  );
}
