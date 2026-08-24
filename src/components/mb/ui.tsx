import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./motion";

type Variant = "solid" | "gold" | "outline" | "ghost" | "light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[0.78rem] font-extrabold uppercase tracking-[0.16em] transition-all duration-300 will-change-transform";

const variants: Record<Variant, string> = {
  solid: "bg-chilli text-primary-foreground hover:bg-chilli-deep hover:shadow-lift",
  gold: "bg-gold text-ink hover:brightness-105 hover:shadow-lift",
  outline: "border border-ink/25 text-ink hover:border-chilli hover:text-chilli",
  ghost: "text-ink/70 hover:text-chilli",
  light: "border border-white/45 text-primary-foreground backdrop-blur-[2px] hover:bg-primary-foreground hover:text-ink",
};

export function Cta({
  to,
  href,
  children,
  variant = "solid",
  className,
  arrow = false,
  onClick,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  onClick?: () => void;
}) {
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );
  const cls = cn(base, variants[variant], "group", className);

  return (
    <Magnetic>
      {to ? (
        <Link to={to} className={cls} onClick={onClick}>
          {inner}
        </Link>
      ) : href ? (
        <a href={href} target="_blank" rel="noreferrer" className={cls} onClick={onClick}>
          {inner}
        </a>
      ) : (
        <button type="button" className={cls} onClick={onClick}>
          {inner}
        </button>
      )}
    </Magnetic>
  );
}

export function SectionHead({
  eyebrow,
  title,
  copy,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  copy?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <p className="eyebrow mb-5 flex items-center gap-3 text-chilli">
          <span className="h-px w-8 bg-chilli" />
          {eyebrow}
        </p>
      )}
      <h2 className="display text-[clamp(2.2rem,6vw,4.4rem)]">{title}</h2>
      {copy && <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{copy}</p>}
    </div>
  );
}
