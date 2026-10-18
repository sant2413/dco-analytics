"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CONSENT_STORAGE_KEY,
  type ConsentRecord,
  type ConsentValue,
  updateConsent,
} from "@/lib/analytics";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [analyticsOn, setAnalyticsOn] = useState(false);
  const [adsOn, setAdsOn] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as ConsentRecord;
        updateConsent(parsed.analytics_storage, parsed.ad_storage);
        setAnalyticsOn(parsed.analytics_storage === "granted");
        setAdsOn(parsed.ad_storage === "granted");
      } catch {
        const timer = window.setTimeout(() => setVisible(true), 500);
        return () => window.clearTimeout(timer);
      }
      return;
    }

    const timer = window.setTimeout(() => setVisible(true), 500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    function onReopen(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.id !== "dco-open-consent-footer" && !target.closest("#dco-open-consent-footer")) {
        return;
      }
      event.preventDefault();
      setPrefsOpen(false);
      setVisible(true);
    }

    document.addEventListener("click", onReopen);
    return () => document.removeEventListener("click", onReopen);
  }, []);

  function saveAndClose(analytics: ConsentValue, ads: ConsentValue) {
    const data: ConsentRecord = {
      analytics_storage: analytics,
      ad_storage: ads,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(data));
    updateConsent(analytics, ads);
    setVisible(false);
  }

  return (
    <div
      id="dco-injected-consent"
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-[2147483647] font-sans sm:inset-x-auto sm:bottom-6 sm:left-6 ${
        visible ? "block" : "hidden"
      }`}
    >
      <div className="pointer-events-auto w-full rounded-t-2xl border-t border-dco-border bg-dco-surface p-6 text-left text-dco-text shadow-[0_-10px_40px_rgba(0,0,0,0.5)] sm:w-[420px] sm:rounded-2xl sm:border sm:shadow-2xl">
        <h3 className="m-0 mb-2 text-lg font-semibold leading-tight text-white">
          You decide what we measure
        </h3>
        <p className="mb-5 text-sm leading-6 text-dco-muted">
          We use cookies to measure the use of this website and the performance of
          our advertising. None are activated without your permission.{" "}
          <Link href="/cookies" className="text-dco-primary no-underline hover:underline">
            Cookie Policy
          </Link>
        </p>

        {prefsOpen ? (
          <div className="mt-5 border-t border-dco-border pt-5">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h4 className="m-0 mb-1 text-[0.95rem] font-medium leading-tight text-white">
                  Necessary
                </h4>
                <p className="m-0 text-xs leading-5 text-dco-muted">
                  Only remember your decision about these cookies.
                </p>
              </div>
              <span className="mt-1 shrink-0 text-[0.7rem] uppercase tracking-wider text-dco-muted">
                Always Active
              </span>
            </div>
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h4 className="m-0 mb-1 text-[0.95rem] font-medium leading-tight text-white">
                  Analytics
                </h4>
                <p className="m-0 text-xs leading-5 text-dco-muted">
                  Tell us which pages work and which don&apos;t (Google Analytics 4).
                </p>
              </div>
              <label className="relative mt-1 inline-block h-[22px] w-10 shrink-0">
                <input
                  type="checkbox"
                  className="peer absolute h-0 w-0 opacity-0"
                  checked={analyticsOn}
                  onChange={(event) => setAnalyticsOn(event.target.checked)}
                />
                <span className="absolute inset-0 cursor-pointer rounded-full bg-dco-border transition peer-checked:bg-dco-primary before:absolute before:bottom-[3px] before:left-[3px] before:h-4 before:w-4 before:rounded-full before:bg-dco-muted before:transition peer-checked:before:translate-x-[18px] peer-checked:before:bg-white" />
              </label>
            </div>
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h4 className="m-0 mb-1 text-[0.95rem] font-medium leading-tight text-white">
                  Advertising
                </h4>
                <p className="m-0 text-xs leading-5 text-dco-muted">
                  Measure if our campaigns bring visits that matter (Google Ads).
                </p>
              </div>
              <label className="relative mt-1 inline-block h-[22px] w-10 shrink-0">
                <input
                  type="checkbox"
                  className="peer absolute h-0 w-0 opacity-0"
                  checked={adsOn}
                  onChange={(event) => setAdsOn(event.target.checked)}
                />
                <span className="absolute inset-0 cursor-pointer rounded-full bg-dco-border transition peer-checked:bg-dco-primary before:absolute before:bottom-[3px] before:left-[3px] before:h-4 before:w-4 before:rounded-full before:bg-dco-muted before:transition peer-checked:before:translate-x-[18px] peer-checked:before:bg-white" />
              </label>
            </div>
          </div>
        ) : null}

        {prefsOpen ? (
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-dco-border bg-dco-border px-4 py-2 text-sm font-medium text-white"
              onClick={() =>
                saveAndClose(
                  analyticsOn ? "granted" : "denied",
                  adsOn ? "granted" : "denied",
                )
              }
            >
              Save Selection
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-dco-primary bg-dco-primary px-4 py-2 text-sm font-medium text-white hover:border-dco-primary-hover hover:bg-dco-primary-hover"
              onClick={() => saveAndClose("granted", "granted")}
            >
              Accept All
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-dco-border bg-transparent px-4 py-2 text-sm font-medium text-dco-text hover:border-dco-muted"
              onClick={() => saveAndClose("denied", "denied")}
            >
              Reject All
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center border-0 bg-transparent p-2 text-sm font-medium text-dco-muted hover:text-white"
              onClick={() => setPrefsOpen(true)}
            >
              Configure
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
