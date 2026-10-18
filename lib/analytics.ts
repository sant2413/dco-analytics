export type ConsentValue = "granted" | "denied";

export type ConsentRecord = {
  analytics_storage: ConsentValue;
  ad_storage: ConsentValue;
  timestamp: string;
};

export const CONSENT_STORAGE_KEY = "dco_consent_status";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export function ensureDataLayer() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
}

export function pushEvent(payload: Record<string, unknown>) {
  ensureDataLayer();
  window.dataLayer.push(payload);
}

export function updateConsent(analytics: ConsentValue, ads: ConsentValue) {
  ensureDataLayer();
  window.dataLayer.push({
    event: "consent_update",
    consent_state: {
      analytics_storage: analytics,
      ad_storage: ads,
      ad_user_data: ads,
      ad_personalization: ads,
    },
  });

  const gtag = function gtag(..._args: unknown[]) {
    window.dataLayer.push(arguments);
  };
  gtag("consent", "update", {
    analytics_storage: analytics,
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
  });
}
