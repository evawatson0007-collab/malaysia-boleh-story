import { Link, useRouterState } from "@tanstack/react-router";
import { Instagram, Facebook, Menu as MenuIcon, X, UtensilsCrossed, CalendarDays, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Logo, Hibiscus } from "./brand";
import { locations } from "@/lib/mb-data";

const navLinks = [
  { to: "/menu", label: "Menu" },
  { to: "/locations", label: "Locations" },
  { to: "/bakery", label: "Bakery" },
  { to: "/whats-on", label: "What's On" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "bg-paper/92 py-2 shadow-[0_1px_0_0_var(--border)] backdrop-blur-md" : "py-5",
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 md:px-10">
          <Logo compact={scrolled} />

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                data-active={pathname === l.to}
                className="link-underline text-[0.8rem] font-bold uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-chilli"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/order"
              className="rounded-full border border-ink/20 px-6 py-3 text-[0.72rem] font-extrabold uppercase tracking-[0.16em] transition-colors hover:border-chilli hover:text-chilli"
            >
              Order
            </Link>
            <Link
              to="/book"
              className="rounded-full bg-chilli px-6 py-3 text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-chilli-deep"
            >
              Book a Table
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="rounded-full border border-ink/20 p-2.5 lg:hidden"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Full-screen mobile / tablet nav */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-chilli-deep px-6 pb-10 pt-6 text-primary-foreground transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex items-center justify-between">
          <span className="display text-xl text-gold">Malaysia Boleh</span>
          <button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
            <X className="h-7 w-7" />
          </button>
        </div>
        <nav className="mt-14 flex flex-col gap-6">
          {[{ to: "/", label: "Home" }, ...navLinks, { to: "/book", label: "Book a Table" }, { to: "/order", label: "Order Online" }].map(
            (l, i) => (
              <Link
                key={l.to}
                to={l.to}
                className="display text-[2.6rem] leading-none transition-transform duration-300 hover:translate-x-2 hover:text-gold"
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>
        <div className="mt-auto flex items-center gap-4 pt-10 text-primary-foreground/70">
          <Hibiscus className="h-7 w-7" />
          <span className="text-xs uppercase tracking-[0.2em]">Come hungry. Leave Boleh.</span>
        </div>
      </div>
    </>
  );
}

export function MobileBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const items = [
    { to: "/menu", label: "Menu", Icon: UtensilsCrossed },
    { to: "/book", label: "Book", Icon: CalendarDays },
    { to: "/order", label: "Order", Icon: ShoppingBag },
  ];
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-paper/95 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-3">
        {items.map(({ to, label, Icon }) => {
          const active = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={cn(
                "flex flex-col items-center gap-1 py-3 text-[0.62rem] font-extrabold uppercase tracking-[0.2em] transition-colors",
                active ? "text-chilli" : "text-ink/60",
              )}
            >
              <Icon className="h-5 w-5" strokeWidth={active ? 2.4 : 1.8} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink px-5 pb-28 pt-20 text-paper md:px-10 lg:pb-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Hibiscus className="h-10 w-10" />
              <span className="display text-2xl leading-none">
                Malaysia
                <br />
                <span className="text-gold tracking-[0.3em]">Boleh</span>
              </span>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/60">
              Malaysian cooking, made properly, in three British cities. Come hungry. Leave Boleh.
            </p>
            <div className="mt-7 flex gap-3">
              {[
                { href: "https://instagram.com", Icon: Instagram, label: "Instagram" },
                { href: "https://facebook.com", Icon: Facebook, label: "Facebook" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-full border border-paper/25 p-2.5 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="rounded-full border border-paper/25 px-3 py-2.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] transition-colors hover:border-gold hover:text-gold"
              >
                TikTok
              </a>
            </div>
          </div>

          {locations.map((loc) => (
            <div key={loc.slug}>
              <p className="eyebrow text-gold">{loc.city}</p>
              <p className="mt-4 text-sm leading-relaxed text-paper/70">{loc.address}</p>
              <div className="mt-4 space-y-1 text-sm text-paper/55">
                {loc.hours.map((h) => (
                  <p key={h.days}>
                    <span className="text-paper/80">{h.days}</span> · {h.time}
                  </p>
                ))}
              </div>
              <p className="mt-4 text-sm text-paper/70">{loc.phone}</p>
            </div>
          ))}
        </div>

        <div className="batik-rule mt-16 opacity-70" />

        <div className="mt-6 flex flex-col gap-4 text-xs uppercase tracking-[0.16em] text-paper/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Malaysia Boleh · Design concept</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="link-underline hover:text-gold">
              Privacy
            </a>
            <a href="#" className="link-underline hover:text-gold">
              Cookies
            </a>
            <a href="mailto:hello@malaysiaboleh.co.uk" className="link-underline hover:text-gold">
              hello@malaysiaboleh.co.uk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {children}
      <Footer />
      <MobileBar />
    </div>
  );
}
