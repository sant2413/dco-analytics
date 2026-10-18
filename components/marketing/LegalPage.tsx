import type { ReactNode } from "react";

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-white">{title}</h1>
      <div className="mt-6 space-y-4 text-dco-muted">{children}</div>
    </main>
  );
}
