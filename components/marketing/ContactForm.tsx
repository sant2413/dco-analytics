"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, CircleAlert, Mail } from "lucide-react";
import { pushEvent } from "@/lib/analytics";
import { glassPanel, gridBg } from "@/components/marketing/styles";

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxrfDCyWRNWcKpxigE6L1rRrDmu8zXUtW7J4NeGGaPiH8T7hYOjyGbHs1v5J2ZtP3WGvg/exec";
const FORMSUBMIT_URL = "https://formsubmit.co/ajax/davidcasallas044@gmail.com";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [initiated, setInitiated] = useState(false);

  function markInitiated() {
    if (initiated) return;
    setInitiated(true);
    pushEvent({
      event: "form_initiated",
      form_id: "dco_contact_form",
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const helpTopic = String(data.get("help_topic") ?? "");
    const collabFormat = String(data.get("collaboration_format") ?? "");
    const message = String(data.get("message") ?? "").trim();
    const privacy = data.get("privacy_consent") === "on";

    if (!name || !email || !privacy) {
      const missingFields = [
        !name ? "Name" : null,
        !email ? "Work email" : null,
        !privacy ? "Privacy policy acceptance" : null,
      ].filter(Boolean);
      const errorMsg = `Please fill in missing required fields: ${missingFields.join(", ")}`;
      setError(errorMsg);
      pushEvent({
        event: "form_errored",
        form_id: "dco_contact_form",
        error_message: errorMsg,
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const emailErrorMsg = "Please enter a valid work email address.";
      setError(emailErrorMsg);
      pushEvent({
        event: "form_errored",
        form_id: "dco_contact_form",
        error_message: "Invalid email format",
      });
      return;
    }

    setError("");
    setSending(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("company", company);
    formData.append("email", email);
    formData.append("help_topic", helpTopic);
    formData.append("collaboration_format", collabFormat);
    formData.append("message", message);
    formData.append("_subject", "New Contact Form Submission - DCO Analytics");
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    const sheetData = {
      name,
      company,
      email,
      help_topic: helpTopic,
      collaboration_format: collabFormat,
      message,
    };

    try {
      await Promise.all([
        fetch(FORMSUBMIT_URL, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        }),
        fetch(SHEET_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(sheetData),
        }),
      ]);
    } catch {
      // Match production: still show the success state if a request fails.
    } finally {
      setSubmitted(true);
      setSending(false);
      setInitiated(false);
      pushEvent({
        event: "form_completed",
        form_id: "dco_contact_form",
        help_topic: helpTopic,
        collaboration_format: collabFormat,
        has_company: company !== "",
        has_message: message !== "",
      });
    }
  }

  return (
    <section className={`relative mx-auto max-w-7xl px-6 py-20 ${gridBg}`}>
      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
        <div className="flex flex-col items-start text-left">
          <span className="mb-4 font-mono text-xs font-semibold tracking-widest text-dco-primary uppercase">
            Contact
          </span>
          <h1 className="mb-6 text-[clamp(2.5rem,4vw,3.75rem)] leading-[1.1] font-semibold tracking-tight text-white">
            Ready to get started?
          </h1>
          <p className="mb-12 text-lg leading-7 text-dco-muted">
            Tell us where you are and what you need to measure. We&apos;ll respond
            quickly with a concrete next-step proposal.
          </p>

          <div className="mb-12 flex w-full flex-col gap-8 text-left">
            {[
              {
                num: "1",
                title: "We read it",
                desc: "Our team reviews your message and gets back to you promptly.",
              },
              {
                num: "2",
                title: "We talk",
                desc: "A short call to understand where you are and what you need to measure.",
              },
              {
                num: "3",
                title: "Next step",
                desc: "We propose something concrete, with zero commitment.",
              },
            ].map((step) => (
              <div key={step.num} className="flex w-full items-start gap-5 text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dco-primary bg-dco-primary/10 text-base font-semibold text-dco-primary">
                  {step.num}
                </div>
                <div className="text-left">
                  <h4 className="mb-1 text-lg font-semibold text-white">{step.title}</h4>
                  <p className="m-0 text-[0.95rem] leading-6 text-dco-muted">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-8 h-px w-full bg-dco-border" />

          <a
            href="mailto:hello@dcoanalytics.com"
            className="inline-flex items-center gap-3 font-mono text-[0.95rem] text-dco-primary no-underline transition hover:text-white"
          >
            <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
            hello@dcoanalytics.com
          </a>
        </div>

        <div
          className={`relative rounded-2xl p-10 text-left shadow-2xl ${glassPanel} bg-dco-surface/50 backdrop-blur-lg`}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dco-metric bg-dco-metric/15 text-dco-metric shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <Check className="h-8 w-8" strokeWidth={2.5} aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-[1.75rem] font-semibold text-white">
                Message Sent Successfully!
              </h3>
              <p className="mx-auto mb-8 max-w-md text-[1.05rem] leading-6.5 text-dco-muted">
                Thank you for reaching out. We have received your message and will
                get back to you shortly.
              </p>
              <button
                type="button"
                className="cursor-pointer rounded-full border border-dco-primary bg-dco-primary/15 px-7 py-3 text-sm font-semibold text-dco-primary transition hover:bg-dco-primary hover:text-white"
                onClick={() => {
                  pushEvent({
                    event: "cta_clicked",
                    cta_text: "Send another message",
                    cta_section: "success_banner",
                  });
                  setSubmitted(false);
                  setError("");
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit}>
              {error ? (
                <div className="mb-6 block rounded-lg border border-dco-danger bg-dco-danger/15 px-5 py-4 text-sm text-dco-danger-text">
                  {error}
                </div>
              ) : null}

              <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-dco-text" htmlFor="dco-name">
                    Name <span className="ml-1 text-dco-danger">*</span>
                  </label>
                  <input
                    id="dco-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-dco-border bg-slate-900/60 px-4 py-3 font-sans text-[0.95rem] text-dco-text outline-none transition focus:border-dco-primary focus:shadow-[0_0_0_3px_rgba(14,165,233,0.15)]"
                    onFocus={markInitiated}
                    onInput={() => setError("")}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-dco-text" htmlFor="dco-company">
                    Company
                  </label>
                  <input
                    id="dco-company"
                    name="company"
                    type="text"
                    placeholder="Company"
                    className="w-full rounded-lg border border-dco-border bg-slate-900/60 px-4 py-3 font-sans text-[0.95rem] text-dco-text outline-none transition focus:border-dco-primary focus:shadow-[0_0_0_3px_rgba(14,165,233,0.15)]"
                    onFocus={markInitiated}
                    onInput={() => setError("")}
                  />
                </div>
              </div>

              <div className="mb-6 flex flex-col gap-2">
                <label className="text-sm font-medium text-dco-text" htmlFor="dco-email">
                  Work email <span className="ml-1 text-dco-danger">*</span>
                </label>
                <input
                  id="dco-email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="w-full rounded-lg border border-dco-border bg-slate-900/60 px-4 py-3 font-sans text-[0.95rem] text-dco-text outline-none transition focus:border-dco-primary focus:shadow-[0_0_0_3px_rgba(14,165,233,0.15)]"
                  onFocus={markInitiated}
                  onInput={() => setError("")}
                />
              </div>

              <div className="mb-6 flex flex-col gap-2">
                <label className="text-sm font-medium text-dco-text" htmlFor="dco-help">
                  How can we help you?
                </label>
                <select
                  id="dco-help"
                  name="help_topic"
                  defaultValue="collection"
                  className="w-full appearance-none rounded-lg border border-dco-border bg-slate-900/60 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%2394A3B8%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat px-4 py-3 pr-10 font-sans text-[0.95rem] text-dco-text outline-none transition focus:border-dco-primary focus:shadow-[0_0_0_3px_rgba(14,165,233,0.15)]"
                  onFocus={markInitiated}
                >
                  <option value="collection">Collection — data collection & privacy</option>
                  <option value="storytelling">Storytelling — analysis & dashboarding</option>
                  <option value="activation">Activation — optimization & advanced analytics</option>
                  <option value="not_sure">Not sure yet</option>
                </select>
              </div>

              <div className="mb-6 flex flex-col gap-2">
                <span className="text-sm font-medium text-dco-text">Collaboration format</span>
                <div className="mt-1 flex flex-col gap-3">
                  <label className="relative flex cursor-pointer items-start gap-3 pl-1 text-left text-[0.95rem] text-dco-text">
                    <input
                      type="radio"
                      name="collaboration_format"
                      value="ongoing"
                      defaultChecked
                      className="relative mt-0.5 h-[1.125rem] w-[1.125rem] shrink-0 cursor-pointer appearance-none rounded-full border border-dco-border bg-slate-900/60 checked:border-dco-primary checked:bg-dco-primary checked:shadow-[0_0_10px_rgba(14,165,233,0.3)] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:h-1.5 checked:after:w-1.5 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:rounded-full checked:after:bg-white checked:after:content-['']"
                    />
                    <span className="flex flex-col text-left">
                      <span>Ongoing services</span>
                      <span className="mt-0.5 text-xs text-dco-muted">
                        Continuous projects over time.
                      </span>
                    </span>
                  </label>
                  <label className="relative flex cursor-pointer items-start gap-3 pl-1 text-left text-[0.95rem] text-dco-text">
                    <input
                      type="radio"
                      name="collaboration_format"
                      value="punctual"
                      className="relative mt-0.5 h-[1.125rem] w-[1.125rem] shrink-0 cursor-pointer appearance-none rounded-full border border-dco-border bg-slate-900/60 checked:border-dco-primary checked:bg-dco-primary checked:shadow-[0_0_10px_rgba(14,165,233,0.3)] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:h-1.5 checked:after:w-1.5 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:rounded-full checked:after:bg-white checked:after:content-['']"
                    />
                    <span>One-time project</span>
                  </label>
                  <label className="relative flex cursor-pointer items-start gap-3 pl-1 text-left text-[0.95rem] text-dco-text">
                    <input
                      type="radio"
                      name="collaboration_format"
                      value="implant"
                      className="relative mt-0.5 h-[1.125rem] w-[1.125rem] shrink-0 cursor-pointer appearance-none rounded-full border border-dco-border bg-slate-900/60 checked:border-dco-primary checked:bg-dco-primary checked:shadow-[0_0_10px_rgba(14,165,233,0.3)] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:h-1.5 checked:after:w-1.5 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:rounded-full checked:after:bg-white checked:after:content-['']"
                    />
                    <span>Implant profile</span>
                  </label>
                </div>
              </div>

              <div className="mb-6 flex flex-col gap-2">
                <label className="text-sm font-medium text-dco-text" htmlFor="dco-message">
                  Message
                </label>
                <textarea
                  id="dco-message"
                  name="message"
                  placeholder="Tell us what you need to measure"
                  className="min-h-[120px] w-full resize-y rounded-lg border border-dco-border bg-slate-900/60 px-4 py-3 font-sans text-[0.95rem] text-dco-text outline-none transition focus:border-dco-primary focus:shadow-[0_0_0_3px_rgba(14,165,233,0.15)]"
                  onFocus={markInitiated}
                  onInput={() => setError("")}
                />
              </div>

              <div className="mt-6 mb-8 flex flex-col gap-2">
                <label className="flex cursor-pointer items-start gap-3 text-left text-sm text-dco-muted">
                  <input
                    type="checkbox"
                    id="dco-privacy"
                    name="privacy_consent"
                    required
                    className="relative mt-0.5 h-[1.125rem] w-[1.125rem] shrink-0 cursor-pointer appearance-none rounded border border-dco-border bg-slate-900/60 checked:border-dco-primary checked:bg-dco-primary checked:bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23ffffff%27 stroke-width=%273%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2720 6 9 17 4 12%27%3E%3C/polyline%3E%3C/svg%3E')] checked:bg-center checked:bg-no-repeat"
                    onChange={() => setError("")}
                  />
                  <span>
                    I accept the{" "}
                    <Link href="/privacy" className="text-dco-primary underline">
                      privacy policy
                    </Link>
                    . We process your data solely to respond to this request.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="mt-2 inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-dco-primary px-8 py-4 text-base font-semibold text-white shadow-[0_0_20px_rgba(14,165,233,0.2)] transition hover:-translate-y-px hover:bg-dco-primary-hover hover:shadow-[0_0_30px_rgba(14,165,233,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {sending ? "Sending..." : "Send"}
                {sending ? null : <ArrowRight className="h-5 w-5" aria-hidden="true" />}
              </button>

              {error ? (
                <div className="mt-3.5 flex items-center gap-2 rounded-md border border-dco-danger/40 bg-dco-danger/10 px-4 py-3 text-[0.85rem] text-dco-danger-text">
                  <CircleAlert className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                  <span>{error}</span>
                </div>
              ) : null}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
