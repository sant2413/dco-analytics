import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Terms of Service</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        This is a placeholder terms of service page for the public marketing
        site. Replace this copy with your actual terms before launch.
      </p>
    </main>
  );
}
