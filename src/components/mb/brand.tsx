import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/** Malaysia Boleh lockup: hibiscus mark + stacked condensed wordmark. */
export function Logo({
  className,
  tone = "ink",
  compact = false,
}: {
  className?: string;
  tone?: "ink" | "light";
  compact?: boolean;
}) {
  return (
    <Link to="/" className={cn("group flex items-center gap-3", className)} aria-label="Malaysia Boleh home">
      <Hibiscus className="h-9 w-9 shrink-0 transition-transform duration-500 group-hover:rotate-[18deg]" />
      <span className={cn("leading-none", tone === "light" ? "text-primary-foreground" : "text-ink")}>
        <span className="display block text-[1.35rem] tracking-[0.02em]">Malaysia</span>
        <span className="display block text-[1.35rem] tracking-[0.3em] text-chilli">
          {tone === "light" ? <span className="text-gold">Boleh</span> : "Boleh"}
        </span>
        {!compact && (
          <span className="eyebrow mt-1 block text-[0.5rem] opacity-60">Malaysian Kitchen · UK</span>
        )}
      </span>
    </Link>
  );
}

export function Hibiscus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g fill="var(--chilli)">
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse key={deg} cx="24" cy="13" rx="7.5" ry="11.5" transform={`rotate(${deg} 24 24)`} />
        ))}
      </g>
      <circle cx="24" cy="24" r="5" fill="var(--gold)" />
      <path d="M24 24 L34 8" stroke="var(--gold)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("eyebrow flex items-center gap-3 text-chilli", className)}>
      <span className="h-px w-8 bg-chilli" />
      {children}
    </p>
  );
}
