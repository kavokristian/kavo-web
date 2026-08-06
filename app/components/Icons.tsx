import type { ReactNode } from "react";

type IconProps = { className?: string };

function iconClass(className?: string) {
  return className ?? "h-4 w-4";
}

export function IconLayout({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 9h18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <rect x="7" y="3" width="10" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 17h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9.5 12l1.8 1.8L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconZap({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <path d="M13 2L4 14h7l-1 8 10-13h-7l0-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSearch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconChart({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 16V10M12 16V7M17 16v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconMapPin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <path d="M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconTag({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <path d="M3.5 12.5V5.8A1.8 1.8 0 015.3 4h6.7l8.5 8.5a1.8 1.8 0 010 2.5l-5.5 5.5a1.8 1.8 0 01-2.5 0L3.5 12.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="8" cy="8" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function IconSitemap({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <rect x="9" y="3" width="6" height="4.5" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="16.5" width="6" height="4.5" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="15" y="16.5" width="6" height="4.5" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7.5V12M12 12H6v4.5M12 12h6v4.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconCode({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <path d="M8 7L3 12l5 5M16 7l5 5-5 5M13 5l-2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconImage({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 16.5l5-4.5 3.5 3 3-2.5 5.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconUser({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <circle cx="12" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.5 19c1.4-3 3.7-4.5 6.5-4.5S17.1 16 18.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconServer({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <rect x="3" y="4" width="18" height="6" rx="1.8" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7" cy="7" r="1" fill="currentColor" />
      <circle cx="7" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

export function IconRefresh({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <path d="M20 12a8 8 0 10-2.3 5.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 5v5h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconWrench({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <path d="M14.5 6.5a4 4 0 00-5.7 5.4L4 16.7 7.3 20l4.8-4.8a4 4 0 005.4-5.7l-2.5 2.5-2.2-2.2 2.7-2.8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconHeadset({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <path d="M4.5 13v-2a7.5 7.5 0 0115 0v2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="12" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="17" y="12" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M19.5 18v1a2.5 2.5 0 01-2.5 2.5h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconLayers({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3 13l9 5 9-5M3 17l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 12.2l2.4 2.4 4.6-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconRocket({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <path d="M14 4c3.5 1 6 4.5 6 8.5 0 .5 0 1-.1 1.5L15.5 19l-2.2-2.2-2.1 2.1-.9-3.3-3.3-.9 2.1-2.1L7 10.1l5-4.4c.5-.1 1-.1 1.5-.1C13 5.5 13.5 4.7 14 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="15" cy="9" r="1.3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconCoin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <ellipse cx="12" cy="6.5" rx="7.5" ry="2.8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 6.5v5c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8v-5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 11.5v5c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8v-5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconHandshake({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass(className)} aria-hidden="true">
      <path d="M8 13l2.2 2.2a2.2 2.2 0 003.1 0l.7-.7M3.5 10.5L8 15l1.8-1.8M20.5 10.5L14 17l-1.5-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 8.5l2-2a2.2 2.2 0 013.1 0L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function FeatureChip({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white px-3.5 py-2 text-[0.8125rem] font-medium text-foreground/80 shadow-[0_1px_2px_rgba(17,17,17,0.04)]">
      <span className="text-accent">{icon}</span>
      {label}
    </span>
  );
}
