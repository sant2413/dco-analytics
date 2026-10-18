import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        This is a placeholder privacy policy for the public marketing site.
        Replace this copy with your actual data practices before launch.
      </p>
    </main>
  );
}
