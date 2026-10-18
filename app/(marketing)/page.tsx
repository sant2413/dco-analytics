import type { Metadata } from "next";
import LandingContent from "@/components/marketing/LandingContent";

export const metadata: Metadata = {
  title: "Strategic Measurement for Conversion & Growth",
  description:
    "We design and implement tailored measurement strategies utilizing GA4, GTM, BigQuery, and Looker Studio.",
};

export default function Home() {
  return <LandingContent />;
}
