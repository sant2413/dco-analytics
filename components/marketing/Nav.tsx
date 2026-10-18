"use client";

import Link from "next/link";
import { pushEvent } from "@/lib/analytics";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-dco-border/60 bg-dco-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1100px] items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 no-underline"
          aria-label="DCO Analytics Home"
          onClick={() =>
            pushEvent({
              event: "nav_clicked",
              nav_text: "DCO Analytics",
              nav_url: "/",
              nav_location: "header",
            })
          }
        >
          <span className="text-xl font-bold tracking-tight text-white">
            DCO<span className="ml-1 font-normal text-dco-muted">Analytics</span>
          </span>
        </Link>
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link
            href="/contact"
            className="inline-flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full border border-dco-primary/30 bg-dco-primary/10 px-5 py-2.5 text-dco-primary no-underline shadow-[0_0_20px_rgba(14,165,233,0.15)] transition hover:bg-dco-primary hover:text-white hover:shadow-[0_0_30px_rgba(14,165,233,0.25)]"
            onClick={() =>
              pushEvent({
                event: "cta_clicked",
                cta_text: "Speak to a measurement expert",
                cta_url: "/contact",
                cta_section: "header",
              })
            }
          >
            <span className="hidden sm:inline">Speak to a measurement expert</span>
            <span className="sm:hidden">Speak to an expert</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
