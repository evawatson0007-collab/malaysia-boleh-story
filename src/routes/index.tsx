import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MapPin, Clock, Navigation } from "lucide-react";
import { useState } from "react";
import { Cta, SectionHead } from "@/components/mb/ui";
import { Header, Footer, MobileBar } from "@/components/mb/SiteChrome";
import { Reveal, useParallax } from "@/components/mb/motion";
import { Hibiscus } from "@/components/mb/brand";
import { img, signatureDishes, menuCategories, locations, bakeryItems, campaigns } from "@/lib/mb-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Malaysia Boleh — Malaysian Food. Big Flavours." },
      {
        name: "description",
        content:
          "Come hungry. Leave Boleh. Nasi lemak, char kway teow and 12-hour rendang in Manchester, London and Birmingham.",
      },
      { property: "og:title", content: "Malaysia Boleh — Malaysian Food. Big Flavours." },
      {
        property: "og:description",
        content: "Malaysian cooking made properly in three British cities. Book a table or order for collection.",
      },
      { property: "og:image", content: img("1504674900247-0877df9cc836", 1200, 630) },
      { name: "twitter:image", content: img("1504674900247-0877df9cc836", 1200, 630) },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TasteOfMalaysia />
        <Signatures />
        <Mood />
        <MenuPreview />
        <Experience />
        <Locations />
        <Bakery />
        <Campaigns />
        <FinalCta />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}

/* ---------------- 1. Cinematic hero ---------------- */

function Hero() {
  const { ref, offset } = useParallax(0.5);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-ink">
      <img
        src={img("1504674900247-0877df9cc836", 1900)}
        alt="A table of Malaysian dishes shot from above under warm restaurant light"
        className="absolute inset-0 h-[125%] w-full object-cover object-center"
        style={{ transform: `translate3d(0, ${-12 + offset * 0.5}%, 0) scale(1.04)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/55" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-24 md:px-10 md:pb-20 lg:pb-24">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span className="h-px w-10 bg-gold" />
            Manchester · London · Birmingham
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="display mt-6 max-w-5xl text-[clamp(2.9rem,10.5vw,8.5rem)] text-paper">
            Malaysian food.
            <br />
            <span className="text-gold">Big flavours.</span>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-6 text-[clamp(1.1rem,2.4vw,1.6rem)] font-medium text-paper/85">
            Come hungry. Leave <span className="italic text-gold">Boleh</span>.
          </p>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Cta to="/menu" variant="gold" arrow>
              Explore the Menu
            </Cta>
            <Cta to="/book" variant="light">
              Book a Table
            </Cta>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <Link
            to="/order"
            className="link-underline mt-7 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-paper/70 hover:text-gold"
          >
            Order for collection <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </div>

      <div className="absolute bottom-6 right-5 z-10 hidden items-center gap-3 text-paper/50 md:flex md:right-10">
        <span className="text-[0.62rem] uppercase tracking-[0.28em]">Scroll</span>
        <span className="h-10 w-px bg-paper/40" />
      </div>
    </section>
  );
}

/* ---------------- 2. A little taste of Malaysia ---------------- */

function TasteOfMalaysia() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <Link
        to="/menu"
        className="group grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20"
      >
        <Reveal className="relative overflow-hidden">
          <div className="aspect-[4/5] w-full overflow-hidden bg-muted sm:aspect-[5/4] lg:aspect-[4/5]">
            <img
              src={img("1596797038530-2c107229654b", 1200)}
              alt="A steaming bowl of curry laksa with noodles, tofu puffs and lime"
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
            />
          </div>
          <span className="absolute bottom-0 left-0 bg-paper px-5 py-3 font-script text-xl text-chilli">
            Kuala Lumpur, 1pm
          </span>
        </Reveal>

        <div className="lg:pr-6">
          <Reveal>
            <SectionHead
              eyebrow="Discover"
              title={
                <>
                  A little taste
                  <br />
                  of Malaysia
                </>
              }
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground transition-transform duration-700 group-hover:translate-x-1.5">
              <p>
                Malaysian food is what happens when Malay, Chinese and Indian kitchens spend three hundred
                years borrowing from each other. Pounded chilli. Toasted coconut. Tamarind. Pandan. Charcoal.
              </p>
              <p>
                We cook it the way it's cooked at home and on the street — sambal made fresh every morning,
                rendang left alone for twelve hours, noodles fired hard enough to catch the smoke.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <span className="mt-9 inline-flex items-center gap-3 text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-chilli">
              Read our story
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-chilli/40 transition-all duration-500 group-hover:bg-chilli group-hover:text-primary-foreground">
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" />
              </span>
            </span>
          </Reveal>
        </div>
      </Link>
    </section>
  );
}

/* ---------------- 3. Signature dishes ---------------- */

function Signatures() {
  return (
    <section className="overflow-hidden bg-ink py-24 text-paper md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span className="h-px w-8 bg-gold" />
                Crave
              </p>
              <h2 className="display mt-5 text-[clamp(2.2rem,6vw,4.4rem)]">Signature dishes</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-paper/60">
              Six plates we'd put our name on. Drag sideways — there's more.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:px-10">
          {signatureDishes.map((d) => (
            <article
              key={d.name}
              className="group relative h-[68vh] max-h-[560px] min-h-[420px] w-[78vw] shrink-0 snap-center overflow-hidden sm:w-[46vw] lg:w-[27vw]"
            >
              <img
                src={d.photo}
                alt={d.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent transition-opacity duration-500 group-hover:from-ink/95" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="eyebrow text-gold">{d.category}</span>
                <h3 className="display mt-3 text-[1.9rem] leading-none">{d.name}</h3>
                <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-paper/75 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                  {d.blurb}
                </p>
                <Link
                  to="/menu"
                  className="mt-4 inline-flex translate-y-2 items-center gap-2 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-gold opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  Explore dish <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- 4. What are you in the mood for? ---------------- */

const moods = [
  {
    key: "eat-in",
    label: "Eat In",
    desc: "Long tables, loud kitchen, cold Tiger. Book your spot in Manchester, London or Birmingham.",
    to: "/book",
    photo: img("1552566626-52f8b828add9", 1400),
  },
  {
    key: "order",
    label: "Order",
    desc: "Collection from your nearest kitchen, packed to travel without going soggy.",
    to: "/order",
    photo: img("1563245372-f21724e3856d", 1400),
  },
  {
    key: "explore",
    label: "Explore",
    desc: "Not sure yet? Walk the whole menu, from satay to cendol, and pick your way in.",
    to: "/menu",
    photo: img("1585032226651-759b368d7246", 1400),
  },
];

function Mood() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      {moods.map((m, i) => (
        <img
          key={m.key}
          src={m.photo}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ opacity: active === i ? 1 : 0, transform: `scale(${active === i ? 1.02 : 1.09})` }}
        />
      ))}
      <div className="absolute inset-0 bg-ink/72" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <h2 className="display max-w-xl text-[clamp(2rem,5.5vw,3.8rem)]">
            What are you in the mood for?
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-paper/15 border-y border-paper/15">
          {moods.map((m, i) => (
            <Reveal key={m.key} delay={i * 90}>
              <Link
                to={m.to}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group flex flex-col gap-3 py-8 md:flex-row md:items-center md:gap-10"
              >
                <span className="eyebrow w-10 shrink-0 text-gold">0{i + 1}</span>
                <span className="display text-[clamp(2.4rem,8vw,5.5rem)] leading-none transition-transform duration-500 group-hover:translate-x-3 group-hover:text-gold">
                  {m.label}
                </span>
                <span className="max-w-sm text-sm leading-relaxed text-paper/60 transition-opacity duration-500 md:ml-auto md:opacity-40 md:group-hover:opacity-100">
                  {m.desc}
                </span>
                <ArrowRight className="hidden h-6 w-6 shrink-0 -translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 md:block" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 5. Menu experience ---------------- */

function MenuPreview() {
  const [active, setActive] = useState(menuCategories[2]!.slug);
  const cat = menuCategories.find((c) => c.slug === active)!;

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <SectionHead
          eyebrow="Explore"
          title="The menu"
          copy="Seven sections, cooked to order. Pick a course and have a look before you arrive."
        />
      </Reveal>

      <Reveal delay={100}>
        <div className="no-scrollbar mt-12 flex gap-2 overflow-x-auto pb-2">
          {menuCategories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setActive(c.slug)}
              className={`shrink-0 rounded-full border px-6 py-3 text-[0.72rem] font-extrabold uppercase tracking-[0.16em] transition-all duration-300 ${
                active === c.slug
                  ? "border-chilli bg-chilli text-primary-foreground"
                  : "border-ink/15 text-ink/70 hover:border-chilli hover:text-chilli"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal delay={140}>
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden bg-muted lg:aspect-[3/4]">
            <img key={cat.photo} src={cat.photo} alt={cat.name} className="h-full w-full object-cover" />
            <span className="absolute left-0 top-0 bg-paper px-5 py-3 font-script text-xl text-chilli">
              {cat.note}
            </span>
          </div>

          <div>
            <h3 className="display text-[clamp(1.8rem,4vw,2.8rem)]">{cat.name}</h3>
            <ul className="mt-6 divide-y divide-border">
              {cat.items.map((item) => (
                <li key={item.name} className="group flex items-baseline gap-4 py-5">
                  <div className="min-w-0">
                    <p className="text-lg font-extrabold transition-colors group-hover:text-chilli">{item.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <span className="ml-auto shrink-0 font-display text-lg text-chilli">{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Cta to="/menu" arrow>
                View full menu
              </Cta>
              <Cta to="/order" variant="outline">
                Order for collection
              </Cta>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- 6. The experience ---------------- */

function Experience() {
  const { ref, offset } = useParallax(0.18);

  return (
    <section ref={ref} className="bg-secondary px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <div className="relative">
            <Reveal className="relative z-10 w-[82%] overflow-hidden">
              <img
                src={img("1517244683847-7456b63c5969", 1100)}
                alt="Friends sharing plates across a busy restaurant table"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </Reveal>
            <Reveal delay={160} className="absolute -bottom-10 right-0 z-20 w-[52%] overflow-hidden shadow-lift">
              <img
                src={img("1541544741938-0af808871cc0", 800)}
                alt="Close-up of chicken satay skewers over charcoal"
                loading="lazy"
                className="aspect-square w-full object-cover"
                style={{ transform: `translate3d(0, ${offset * 0.6}px, 0)` }}
              />
            </Reveal>
          </div>

          <div className="mt-16 lg:mt-0">
            <Reveal>
              <SectionHead eyebrow="The Malaysia Boleh experience" title="More than a meal." />
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                Good food brings people together. Malaysian food brings a whole lot more to the table.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { id: "1552566626-52f8b828add9", alt: "Warm restaurant interior with rattan and timber" },
                  { id: "1414235077428-338989a2e8c0", alt: "Dining room filling up in the early evening" },
                ].map((p) => (
                  <div key={p.id} className="overflow-hidden">
                    <img
                      src={img(p.id, 700)}
                      alt={p.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] hover:scale-[1.06]"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 7. Locations ---------------- */

function Locations() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <SectionHead eyebrow="Visit" title="Three kitchens" copy="Pick a city. We'll keep a table warm." />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {locations.map((loc, i) => (
          <Reveal key={loc.slug} delay={i * 100}>
            <article className="group flex h-full flex-col overflow-hidden border border-border bg-card transition-shadow duration-500 hover:shadow-card">
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src={loc.photo}
                  alt={loc.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="display text-[1.9rem]">{loc.city}</h3>
                <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-chilli" />
                  {loc.address}
                </p>
                <div className="mt-5 space-y-1 border-t border-border pt-5 text-sm">
                  {loc.hours.map((h) => (
                    <p key={h.days} className="flex items-center justify-between gap-3 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-gold" />
                        {h.days}
                      </span>
                      <span className="font-semibold text-foreground">{h.time}</span>
                    </p>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-2 pt-1">
                  <Link
                    to="/book"
                    search={{ location: loc.slug }}
                    className="rounded-full bg-chilli px-5 py-2.5 text-[0.66rem] font-extrabold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-chilli-deep"
                  >
                    Book a table
                  </Link>
                  <Link
                    to="/order"
                    className="rounded-full border border-ink/20 px-5 py-2.5 text-[0.66rem] font-extrabold uppercase tracking-[0.14em] transition-colors hover:border-chilli hover:text-chilli"
                  >
                    Order now
                  </Link>
                  <a
                    href={loc.maps}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-2.5 text-[0.66rem] font-extrabold uppercase tracking-[0.14em] text-ink/60 transition-colors hover:text-chilli"
                  >
                    <Navigation className="h-3.5 w-3.5" /> Directions
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- 8. Bakery ---------------- */

function Bakery() {
  return (
    <section className="relative overflow-hidden bg-gold/25 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <Hibiscus className="h-8 w-8" />
              <p className="eyebrow text-chilli">Malaysia Boleh Bakery</p>
            </div>
            <h2 className="display mt-6 text-[clamp(2.2rem,6vw,4.4rem)]">
              Pandan, kaya
              <br />
              and palm sugar.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
              Our bakery opens at seven. Soft milk breads, sticky gula melaka buns and a rotating tray of kuih —
              baked in the same kitchen, sold until they're gone.
            </p>
            <div className="mt-9">
              <Cta to="/bakery" variant="solid" arrow>
                Discover the bakery
              </Cta>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {bakeryItems.map((b, i) => (
            <Reveal
              key={b.name}
              delay={i * 110}
              className={i === 0 ? "col-span-2" : ""}
            >
              <div className="group overflow-hidden bg-card">
                <div className={i === 0 ? "aspect-[16/9] overflow-hidden" : "aspect-square overflow-hidden"}>
                  <img
                    src={b.photo}
                    alt={b.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]"
                  />
                </div>
                <div className="p-5">
                  <p className="font-extrabold">{b.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 9. Campaigns ---------------- */

function Campaigns() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead eyebrow="What's on" title="Coming up" />
          <Link
            to="/whats-on"
            className="link-underline text-[0.75rem] font-extrabold uppercase tracking-[0.18em] text-chilli"
          >
            All campaigns
          </Link>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {campaigns.map((c, i) => (
          <Reveal key={c.title} delay={i * 100}>
            <Link to="/whats-on" className="group block h-full">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={c.photo}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 bg-chilli px-3 py-1.5 text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-primary-foreground">
                  {c.tag}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6 text-paper">
                  <p className="eyebrow text-gold">{c.when}</p>
                  <h3 className="display mt-2 text-[1.6rem] leading-tight">{c.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
              <span className="mt-3 inline-flex items-center gap-2 text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-chilli">
                Find out more
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- 10. Final CTA ---------------- */

function FinalCta() {
  const { ref, offset } = useParallax(0.3);

  return (
    <section ref={ref} className="relative h-[85svh] min-h-[520px] overflow-hidden bg-ink">
      <img
        src={img("1600891964092-4316c288032e", 1900)}
        alt="A spread of Malaysian dishes ready to be shared"
        loading="lazy"
        className="absolute inset-0 h-[120%] w-full object-cover"
        style={{ transform: `translate3d(0, ${-8 + offset * 0.4}%, 0)` }}
      />
      <div className="absolute inset-0 bg-ink/62" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col items-center justify-center px-5 text-center text-paper">
        <Reveal>
          <h2 className="display text-[clamp(3rem,12vw,9rem)]">Ready to eat?</h2>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Cta to="/book" variant="gold">
              Book a Table
            </Cta>
            <Cta to="/order" variant="light">
              Order Now
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
