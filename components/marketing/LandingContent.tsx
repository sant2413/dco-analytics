"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BarChart2,
  CircleCheck,
  Cloud,
  Database,
  LayoutGrid,
  Monitor,
  PieChart,
  ShieldCheck,
  Tag,
} from "lucide-react";
import { pushEvent } from "@/lib/analytics";
import TrackedSection from "@/components/marketing/TrackedSection";
import { glassPanel, gridBg } from "@/components/marketing/styles";

function ContactCta({
  className,
  location,
  children,
}: {
  className: string;
  location: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href="/contact"
      className={className}
      data-cta-location={location}
      onClick={() =>
        pushEvent({
          event: "cta_clicked",
          cta_text: "Speak to a measurement expert",
          cta_url: "/contact",
          cta_section: location,
        })
      }
    >
      {children}
    </Link>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <CircleCheck className="mt-0.5 h-[18px] w-[18px] shrink-0 text-dco-metric" aria-hidden="true" />
      {children}
    </li>
  );
}

export default function LandingContent() {
  return (
    <>
      <TrackedSection
        id="hero"
        name="Hero"
        className={`relative overflow-hidden px-6 pb-20 pt-24 text-center ${gridBg}`}
      >
        <div className="pointer-events-none absolute top-1/4 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-dco-primary/20 blur-[120px]" />
        <div className="relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-dco-primary/30 bg-dco-primary/10 px-3 py-1 font-mono text-xs text-dco-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-dco-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-dco-primary" />
            </span>
            DATA ARCHITECTURE ALIGNED WITH BUSINESS STRATEGY
          </div>
          <h1 className="mb-6 text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] font-bold tracking-tight text-white">
            Strategic Measurement
            <br />
            <span className="bg-linear-to-r from-white to-dco-muted bg-clip-text text-transparent">
              for Conversion & Growth.
            </span>
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-7 text-dco-muted">
            We bridge the gap between technical infrastructure and your core KPIs.
            We design and implement tailored measurement strategies utilizing GA4,
            GTM, BigQuery, and Looker Studio.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ContactCta
              location="hero"
              className="inline-flex min-h-11 w-full max-w-[340px] items-center justify-center gap-2 rounded-full bg-dco-primary px-9 py-3.5 font-medium text-white no-underline shadow-[0_0_20px_rgba(14,165,233,0.15)] transition hover:-translate-y-px hover:bg-dco-primary-hover sm:w-auto"
            >
              Speak to a measurement expert
            </ContactCta>
          </div>
        </div>
      </TrackedSection>

      <TrackedSection
        as="div"
        id="tech-stack"
        name="Tech Stack"
        className="border-y border-dco-border/60 bg-dco-surface/20 backdrop-blur-sm"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 py-8 opacity-70 md:justify-between">
          {[
            { icon: BarChart2, label: "GA4" },
            { icon: Tag, label: "Tag Manager" },
            { icon: Database, label: "BigQuery" },
            { icon: LayoutGrid, label: "Looker Studio" },
            { icon: Cloud, label: "Google Cloud" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 font-mono text-sm tracking-widest uppercase text-dco-text"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              {label}
            </div>
          ))}
        </div>
      </TrackedSection>

      <TrackedSection id="solutions" name="Solutions" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-4 text-center text-4xl font-bold text-white">
          Focus on Strategic Outcomes.
        </h2>
        <p className="mx-auto mb-14 max-w-[45rem] text-center text-lg leading-6.5 text-dco-muted">
          We don&apos;t just write code; we translate your high-level business
          objectives into a precise tracking architecture that delivers answers,
          not just data.
        </p>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <div className={`flex min-w-0 flex-col items-start overflow-hidden rounded-lg p-8 text-left ${glassPanel}`}>
            <div className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded border border-dco-border bg-dco-surface text-dco-primary">
              <BarChart2 className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mb-3 w-full text-[1.35rem] font-semibold text-white">
              GA4 Enterprise Architecture
            </h3>
            <p className="mb-6 w-full text-[0.95rem] leading-6.5 text-dco-muted">
              Custom event schema design, cross-domain tracking, and advanced
              consent mode implementations tailored to complex business models.
            </p>
            <pre className="mt-auto w-full overflow-x-auto rounded-md border border-dco-border bg-[#070D1E] p-5 font-mono text-[0.8rem] leading-[1.55] text-dco-muted">
              <span className="text-dco-primary">dataLayer</span>
              {".push({\n  event: "}
              <span className="text-dco-metric">&apos;purchase&apos;</span>
              {",\n  ecommerce: {\n    transaction_id: "}
              <span className="text-white">&apos;T12345&apos;</span>
              {",\n    value: "}
              <span className="text-white">254.99</span>
              {",\n    currency: "}
              <span className="text-white">&apos;USD&apos;</span>
              {",\n    items: [{ item_id: "}
              <span className="text-white">&apos;SKU_123&apos;</span>
              {"}]\n  }\n});"}
            </pre>
          </div>

          <div className={`flex min-w-0 flex-col items-start overflow-hidden rounded-lg p-8 text-left ${glassPanel}`}>
            <div className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded border border-dco-border bg-dco-surface text-dco-primary">
              <Tag className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mb-3 w-full text-[1.35rem] font-semibold text-white">
              Enterprise Tag Management
            </h3>
            <p className="mb-6 w-full text-[0.95rem] leading-6.5 text-dco-muted">
              Agile, scalable data collection frameworks. We map your specific KPIs
              to structured dataLayer schemas that guarantee accuracy.
            </p>
            <ul className="mt-auto flex w-full list-none flex-col gap-5 p-0 text-[0.95rem] text-dco-muted">
              <CheckItem>Standardized DataLayer Design</CheckItem>
              <CheckItem>E-commerce & Lead Gen Tracking</CheckItem>
              <CheckItem>Third-Party Pixel Governance</CheckItem>
            </ul>
          </div>

          <div className={`flex min-w-0 flex-col items-start overflow-hidden rounded-lg p-8 text-left ${glassPanel}`}>
            <div className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded border border-dco-border bg-dco-surface text-dco-primary">
              <Database className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mb-3 w-full text-[1.35rem] font-semibold text-white">
              BigQuery Data Warehousing
            </h3>
            <p className="mb-6 w-full text-[0.95rem] leading-6.5 text-dco-muted">
              Unsampled, raw event data storage. We build automated SQL pipelines
              to join GA4 data with CRM and ad cost data.
            </p>
            <pre className="mt-auto w-full overflow-x-auto rounded-md border border-dco-border bg-[#070D1E] p-5 font-mono text-[0.8rem] leading-[1.55] text-dco-muted">
              <span className="text-dco-primary">SELECT</span>
              {" user_pseudo_id, "}
              <span className="text-dco-primary">COUNT</span>
              {"(*)\n"}
              <span className="text-dco-primary">FROM</span>
              {" `project.analytics_123.events_*`\n"}
              <span className="text-dco-primary">WHERE</span>
              {" event_name = "}
              <span className="text-dco-metric">&apos;add_to_cart&apos;</span>
              {"\n"}
              <span className="text-dco-primary">GROUP BY</span>
              {" 1;"}
            </pre>
          </div>

          <div className={`flex min-w-0 flex-col items-start overflow-hidden rounded-lg p-8 text-left ${glassPanel}`}>
            <div className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded border border-dco-border bg-dco-surface text-dco-primary">
              <LayoutGrid className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mb-3 w-full text-[1.35rem] font-semibold text-white">
              Looker Studio Intelligence
            </h3>
            <p className="mb-6 w-full text-[0.95rem] leading-6.5 text-dco-muted">
              Executive dashboards that render complex BigQuery models into clear,
              actionable visual insights. Zero lag, high fidelity.
            </p>
            <ul className="mt-auto flex w-full list-none flex-col gap-5 p-0 text-[0.95rem] text-dco-muted">
              <CheckItem>Automated Reporting Cadences</CheckItem>
              <CheckItem>Blended Data Sources</CheckItem>
              <CheckItem>Custom Calculated Metrics</CheckItem>
            </ul>
          </div>
        </div>
      </TrackedSection>

      <TrackedSection
        as="div"
        id="methodology"
        name="Methodology"
        className="border-t border-dco-border/60 bg-dco-surface/10"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">Our Proven Methodology.</h2>
            <p className="mx-auto max-w-[45rem] text-lg leading-6.5 text-dco-muted">
              A strategic, phase-based approach to ensure your analytics
              implementation actually serves your business goals.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Discovery & Strategy",
                desc: "We start by understanding your business model, identifying core conversion actions, and mapping out the KPIs that matter.",
              },
              {
                step: "2",
                title: "Solution Architecture",
                desc: "Translating business goals into a technical blueprint: designing the dataLayer, event schema, and pipeline architecture.",
              },
              {
                step: "3",
                title: "Precision Implementation",
                desc: "Deploying the infrastructure through Google Tag Manager and configuring your analytics platforms with rigorous QA.",
              },
              {
                step: "4",
                title: "Insights & Visualization",
                desc: "Building Looker Studio dashboards that present actionable, blended data to stakeholders for daily decision-making.",
              },
            ].map((item, index) => (
              <div key={item.step} className="relative text-left">
                <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-dco-primary bg-dco-bg text-lg font-bold text-dco-primary shadow-[0_0_20px_rgba(14,165,233,0.15)]">
                  {item.step}
                </div>
                {index < 3 ? (
                  <div className="absolute top-6 left-12 hidden h-px w-full bg-dco-border md:block" />
                ) : null}
                <h4 className="mb-2 text-lg font-semibold text-white">{item.title}</h4>
                <p className="m-0 text-sm leading-6 text-dco-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </TrackedSection>

      <TrackedSection
        id="infrastructure"
        name="Infrastructure"
        className="border-y border-dco-border/60 bg-dco-surface/30"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">A Robust Data Pipeline.</h2>
            <p className="mx-auto max-w-[45rem] text-lg leading-6.5 text-dco-muted">
              Visualize how we capture, route, and transform your customer
              interactions into reliable business intelligence seamlessly.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-5xl">
            <div className="absolute top-10 right-[10%] left-[10%] z-1 hidden h-0.5 bg-dco-border lg:block">
              <div className="absolute inset-0 bg-linear-to-r from-dco-primary via-dco-metric to-dco-primary opacity-50 blur-[2px]" />
              <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
                <line
                  x1="0"
                  y1="1"
                  x2="100%"
                  y2="1"
                  stroke="var(--color-dco-primary)"
                  strokeWidth="2"
                  className="dco-data-flow-line"
                />
              </svg>
            </div>

            <div className="relative z-2 grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-6">
              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-6 flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-dco-border bg-dco-surface shadow-xl">
                  <Monitor className="h-9 w-9 text-white" aria-hidden="true" />
                </div>
                <h4 className="mb-2 text-lg font-bold text-white">1. Data Source</h4>
                <span className="font-mono text-[0.85rem] leading-[1.45] text-dco-muted">
                  Web / Mobile App
                  <br />
                  dataLayer Events
                </span>
                <div className="relative mt-6 block h-12 w-0.5 bg-linear-to-b from-dco-border to-dco-primary/50 lg:hidden">
                  <ArrowDown className="absolute -bottom-3 -left-[11px] h-6 w-6 text-dco-primary/50" aria-hidden="true" />
                </div>
              </div>

              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-6 flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-dco-primary bg-dco-surface shadow-[0_0_20px_rgba(14,165,233,0.2)]">
                  <Tag className="h-10 w-10 text-dco-primary" aria-hidden="true" />
                </div>
                <h4 className="mb-2 text-lg font-bold text-dco-primary">2. Routing Logic</h4>
                <span className="font-mono text-[0.85rem] leading-[1.45] text-dco-muted">
                  Google Tag Manager
                  <br />
                  Data Sanitization
                </span>
                <div className="relative mt-6 block h-12 w-0.5 bg-linear-to-b from-dco-border to-dco-primary/50 lg:hidden">
                  <ArrowDown className="absolute -bottom-3 -left-[11px] h-6 w-6 text-dco-primary/50" aria-hidden="true" />
                </div>
              </div>

              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-6 flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-dco-border bg-dco-surface shadow-xl">
                  <Database className="h-9 w-9 text-white" aria-hidden="true" />
                </div>
                <h4 className="mb-2 text-lg font-bold text-white">3. Raw Storage</h4>
                <span className="font-mono text-[0.85rem] leading-[1.45] text-dco-muted">
                  BigQuery / GCP
                  <br />
                  Unsampled Data
                </span>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-dco-border bg-slate-900/90 px-3.5 py-1.5 font-mono text-[0.725rem] text-dco-muted">
                  <BarChart2 className="h-3.5 w-3.5" aria-hidden="true" />
                  GA4 / Ad APIs
                </div>
                <div className="relative mt-6 block h-12 w-0.5 bg-linear-to-b from-dco-border to-dco-primary/50 lg:hidden">
                  <ArrowDown className="absolute -bottom-3 -left-[11px] h-6 w-6 text-dco-primary/50" aria-hidden="true" />
                </div>
              </div>

              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-6 flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-dco-metric bg-dco-surface shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <PieChart className="h-10 w-10 text-dco-metric" aria-hidden="true" />
                </div>
                <h4 className="mb-2 text-lg font-bold text-dco-metric">4. Visualization</h4>
                <span className="font-mono text-[0.85rem] leading-[1.45] text-dco-muted">
                  Looker Studio
                  <br />
                  Executive Dashboards
                </span>
              </div>
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <p className="m-0 inline-flex items-center gap-3 rounded-full border border-dco-border bg-dco-surface/50 px-6 py-3 font-mono text-sm text-dco-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-dco-metric opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-dco-metric" />
              </span>
              Architecture built on Google Cloud Platform for maximum compliance.
            </p>
          </div>
        </div>
      </TrackedSection>

      <TrackedSection
        id="contact-cta"
        name="Final CTA"
        className={`relative overflow-hidden border-y border-dco-border/60 bg-dco-bg px-6 py-24 text-center ${gridBg}`}
      >
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-dco-primary/10 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <h2 className="mb-6 text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-white">
            Stop Guessing. Start Measuring.
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-7 text-dco-muted">
            Schedule a complimentary 30-minute strategy session. We&apos;ll evaluate
            your current data architecture and outline a roadmap for precision
            tracking and actionable insights.
          </p>
          <ContactCta
            location="bottom_cta"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-dco-primary px-9 py-4 text-lg font-medium text-white no-underline shadow-[0_0_20px_rgba(14,165,233,0.15)] transition hover:-translate-y-px hover:bg-dco-primary-hover hover:shadow-[0_0_30px_rgba(14,165,233,0.25)]"
          >
            Speak to a measurement expert
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </ContactCta>
          <div className="mt-6 flex items-center justify-center gap-2 font-mono text-sm text-dco-muted">
            <ShieldCheck className="h-4 w-4 text-dco-metric" aria-hidden="true" />
            No commitment required. Strictly strategic discussion.
          </div>
        </div>
      </TrackedSection>
    </>
  );
}
