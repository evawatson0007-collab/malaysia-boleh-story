import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Reveals children once they scroll into view. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "figure";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as any;
  return (
    <Comp
      ref={ref as any}
      className={cn("reveal", shown && "reveal-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}

/** Returns a translateY value driven by scroll position, for gentle parallax. */
export function useParallax(strength = 0.18) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        setOffset(progress * strength * 100);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [strength]);

  return { ref, offset };
}

/** Button-sized magnetic hover: content leans toward the cursor. */
export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  return (
    <span
      ref={ref}
      className={cn("inline-block", className)}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el || e.pointerType !== "mouse") return;
        const r = el.getBoundingClientRect();
        setT({
          x: ((e.clientX - (r.left + r.width / 2)) / r.width) * 12,
          y: ((e.clientY - (r.top + r.height / 2)) / r.height) * 8,
        });
      }}
      onPointerLeave={() => setT({ x: 0, y: 0 })}
      style={{
        transform: `translate3d(${t.x}px, ${t.y}px, 0)`,
        transition: "transform 400ms cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {children}
    </span>
  );
}
