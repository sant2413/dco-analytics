import type { ReactNode } from "react";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-1 flex-col md:flex-row">
      <aside className="border-b border-zinc-200 bg-white p-4 md:w-60 md:border-r md:border-b-0 dark:border-zinc-800 dark:bg-black">
        <Link href="/" className="mb-0 flex items-center gap-2 text-sm font-semibold md:mb-8">
          <LayoutDashboard className="h-4 w-4" />
          SaaS Platform
        </Link>
        <p className="mt-3 hidden text-xs uppercase tracking-wide text-zinc-500 md:block">
          Authenticated area
        </p>
        <nav className="mt-3 flex gap-2 text-sm md:block">
          <Link
            href="/dashboard"
            className="rounded-lg bg-zinc-100 px-3 py-2 font-medium dark:bg-zinc-900"
          >
            Overview
          </Link>
        </nav>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">{children}</div>
    </div>
  );
}
