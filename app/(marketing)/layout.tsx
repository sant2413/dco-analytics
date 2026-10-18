import type { ReactNode } from "react";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/marketing/Footer";
import Nav from "@/components/marketing/Nav";

export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-visible bg-dco-bg text-dco-text">
      <Nav />
      <div className="flex flex-1 flex-col">{children}</div>
      <Footer />
      <CookieBanner />
    </div>
  );
}
