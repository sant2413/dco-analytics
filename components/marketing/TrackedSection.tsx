"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { pushEvent } from "@/lib/analytics";

const observedIds = new Set<string>();

type TrackedSectionProps = {
  id: string;
  name: string;
  className?: string;
  as?: "section" | "div" | "footer";
  children: ReactNode;
};

export default function TrackedSection({
  id,
  name,
  className,
  as = "section",
  children,
}: TrackedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const Tag = as as ElementType;

  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) return;
    if (observedIds.has(id)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || observedIds.has(id)) return;
          observedIds.add(id);
          pushEvent({
            event: "section_viewed",
            section_id: id,
            section_name: name,
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [id, name]);

  return (
    <Tag id={id} ref={ref} className={className} data-section-name={name}>
      {children}
    </Tag>
  );
}
