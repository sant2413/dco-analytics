import type { Metadata } from "next";
import ContactForm from "@/components/marketing/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us where you are and what you need to measure. We'll respond with a concrete next-step proposal.",
};

export default function ContactPage() {
  return <ContactForm />;
}
