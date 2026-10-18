import type { Metadata } from "next";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <main className="flex flex-1 flex-col items-start justify-center px-8 py-16">
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
        <Lock className="h-3.5 w-3.5" />
        Auth coming soon
      </span>
      <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
      <p className="mt-3 max-w-lg text-zinc-600 dark:text-zinc-400">
        Placeholder for authenticated SaaS views. Wire this route group to
        session checks, billing, and product pages as you build them.
      </p>
    </main>
  );
}
