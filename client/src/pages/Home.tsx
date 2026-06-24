import { useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { SITE } from "@/lib/siteData";
import {
  Phone,
  Star,
  Check,
  Zap,
  Users,
  ShieldCheck,
  FileText,
  DollarSign,
  Globe,
  CreditCard,
  ArrowRight,
  Handshake,
  Cpu,
  Heart,
} from "lucide-react";

const trustBarMessages = [
  "Real People. Real Answers. Every time.",
  "We answer the phone.",
  "Analog Heart. Digital Mind.",
];

export default function Home() {
  return (
    <>
      <TrustBar />
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <WhyUs />
      <Story />
      <Testimonials />
      <HowItWorks />
      <FinalCTA />
    </>
  );
}

/* ───────── Section 1: Trust Bar (sticky) ───────── */
function TrustBar() {
  return (
    <div className="sticky top-0 z-30 bg-[var(--color-paper)] border-b border-[var(--semantic-border-subtle)] h-12 flex items-center justify-center">
      <p className="font-sans font-medium text-[13px] tracking-[0.04em] uppercase text-[var(--color-graphite)]">
        {trustBarMessages[0]}
      </p>
    </div>
  );
}

/* ───────── Section 1: Hero ───────── */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pt-24 sm:pb-32">
        {/* Pre-header */}
        <p className="font-mono text-xs tracking-[0.04em] uppercase text-[var(--color-drafting-blue)] mb-6">
          Powered by Technology. Delivered by People.
        </p>

        <div className="max-w-4xl">
          <h1 className="text-balance">
            Technology Builds Fast.
            <br />
            <span className="text-[var(--color-brass)]">People Build Trust.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-graphite)] text-pretty">
            Based in Charlotte, North Carolina — from the banking towers of
            Uptown to the Sandhills where we call home. 617 East Trust combines
            modern technical expertise with old-fashioned human partnership to
            form, fund, and grow your business.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/contact" size="lg">
              Start With a Conversation <ArrowRight size={18} />
            </ButtonLink>
            <div className="flex items-center gap-2 text-[var(--color-graphite)]">
              <Phone size={16} className="text-[var(--color-brass)]" />
              <a href={SITE.phoneHref} className="text-sm font-medium hover:text-[var(--color-ink)]">
                Or call us: {SITE.phone} — We answer.
              </a>
            </div>
          </div>
        </div>

        {/* Trust signals below fold */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          {SITE.testimonials.slice(0, 3).map((t) => (
            <div
              key={t.name}
              className="bg-[var(--color-chalk)] rounded-[var(--radius-human)] p-6 shadow-[var(--shadow-md)] border border-[var(--semantic-border-subtle)]"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[var(--color-brass)] text-[var(--color-brass)]" />
                ))}
              </div>
              <p className="text-sm text-[var(--color-graphite)] italic">"{t.quote}"</p>
              <p className="mt-3 font-mono text-[11px] tracking-[0.04em] text-[var(--color-smoke)]">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative drafting grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-drafting-blue) 1px, transparent 1px), linear-gradient(90deg, var(--color-drafting-blue) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </section>
  );
}

/* ───────── Section 2: The Problem ───────── */
function Problem() {
  return (
    <section className="border-y border-[var(--semantic-border-subtle)] py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.04em] uppercase text-[var(--color-smoke)] mb-4">
          [01] The Gap We Fill
        </p>
        <h2 className="text-balance">
          The Platforms Are Fast. The Consultants Are Personal. Neither Is Both.
        </h2>

        <p className="mt-6 text-lg text-[var(--color-graphite)]">
          You've got two options in the market today — and both leave you stranded.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-[var(--color-chalk)] rounded-[var(--radius-human)] p-8 border border-[var(--semantic-border-subtle)]">
            <p className="font-mono text-xs tracking-[0.04em] uppercase text-[var(--color-drafting-blue)] mb-3">
              Option 1
            </p>
            <h3 className="text-xl font-sans font-semibold">Automated Platforms</h3>
            <p className="mt-3 text-[var(--color-graphite)] leading-relaxed">
              File your LLC in 10 minutes and disappear. When the SBA asks for
              clarification on your cash flow projections, you get a chatbot.
              When your website crashes during your product launch, you get a
              ticket number.
            </p>
          </div>

          <div className="bg-[var(--color-chalk)] rounded-[var(--radius-human)] p-8 border border-[var(--semantic-border-subtle)]">
            <p className="font-mono text-xs tracking-[0.04em] uppercase text-[var(--color-sage)] mb-3">
              Option 2
            </p>
            <h3 className="text-xl font-sans font-semibold">Old Local Consultants</h3>
            <p className="mt-3 text-[var(--color-graphite)] leading-relaxed">
              Remember your kid's name but still fax documents and think "SEO"
              is a typo. They mean well. They just haven't meaningfully updated
              their process since 2003.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg text-[var(--color-ink)]">
            <span className="font-medium">There's a third option.</span> A firm that combines the speed of
            modern technology with the accountability of human partnership.
          </p>
          <p className="mt-2 font-serif text-2xl text-[var(--color-brass)]">That's 617 East Trust.</p>
        </div>
      </div>
    </section>
  );
}

/* ───────── Section 3: The Solution ───────── */
function Solution() {
  const pillars = [
    {
      tag: "Pillar 1",
      icon: Cpu,
      title: "Technology Does the Heavy Lifting",
      accent: "tech" as const,
      points: [
        "Business formation filed in 24 hours, not 24 days",
        "SBA lender matching powered by proprietary algorithms",
        "Websites built on modern frameworks that load in milliseconds",
        "Credit reports pulled instantly, disputes tracked automatically",
      ],
    },
    {
      tag: "Pillar 2",
      icon: Heart,
      title: "People Do the Trust Building",
      accent: "human" as const,
      points: [
        "A dedicated consultant who answers their phone",
        "SBA applications reviewed by humans who've sat on the lender side",
        "Website strategy informed by business goals, not just templates",
        "Credit repair handled by experts who explain every step",
      ],
    },
    {
      tag: "Pillar 3",
      icon: Handshake,
      title: "Both Together",
      accent: "both" as const,
      points: [
        "Faster approvals because we know the lenders personally",
        "Better websites because we understand your business model",
        "Higher credit scores because we craft disputes strategically",
        "Stronger businesses because we're still here after the paperwork",
      ],
    },
  ];

  const accentClass = (a: string) =>
    a === "tech"
      ? "text-[var(--color-drafting-blue)]"
      : a === "human"
        ? "text-[var(--color-brass)]"
        : "text-[var(--color-sage)]";

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.04em] uppercase text-[var(--color-smoke)] mb-4">
          [02] How We're Different
        </p>
        <h2 className="text-balance">Modern Technology. Old-School Partnership.</h2>
        <p className="mt-6 max-w-3xl text-lg text-[var(--color-graphite)]">
          After 15 years in Charlotte's banking industry — watching businesses
          struggle to navigate SBA lending, seeing entrepreneurs get lost between
          automated portals and outdated advice — we built something different.
        </p>
        <p className="mt-3 font-serif text-xl text-[var(--color-ink)]">
          We use technology to move fast. We use people to build trust.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.tag}
              className="bg-[var(--color-chalk)] rounded-[var(--radius-human)] p-8 shadow-[var(--shadow-md)] border border-[var(--semantic-border-subtle)]"
            >
              <p.icon size={28} className={accentClass(p.accent)} />
              <p className="mt-4 font-mono text-[11px] tracking-[0.04em] uppercase text-[var(--color-smoke)]">
                {p.tag}
              </p>
              <h3 className="mt-2 font-sans font-semibold text-lg leading-snug">{p.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 text-sm text-[var(--color-graphite)]">
                    <Check size={16} className={`shrink-0 mt-0.5 ${accentClass(p.accent)}`} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Section 4: Services ───────── */
function Services() {
  const icons = [FileText, DollarSign, Globe, CreditCard];
  return (
    <section id="services" className="border-y border-[var(--semantic-border-subtle)] py-20 sm:py-28 bg-[var(--color-chalk)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.04em] uppercase text-[var(--color-smoke)] mb-4">
          [03] What We Do
        </p>
        <h2 className="text-balance">Four Services. One Philosophy.</h2>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {SITE.services.map((s, i) => (
            <div
              key={s.slug}
              className="group bg-[var(--color-paper)] rounded-[var(--radius-human)] p-8 shadow-[var(--shadow-sm)] border border-[var(--semantic-border-subtle)] hover:shadow-[var(--shadow-lg)] transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] tracking-[0.04em] text-[var(--color-drafting-blue)]">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                </div>
                {(() => {
                  const Icon = icons[i];
                  return <Icon size={24} className="text-[var(--color-brass)]" />;
                })()}
              </div>

              <h3 className="mt-4 font-sans font-semibold text-xl">{s.name}</h3>
              <p className="mt-1 font-serif italic text-[var(--color-graphite)]">{s.tagline}</p>
              <p className="mt-4 text-sm text-[var(--color-graphite)] leading-relaxed">{s.description}</p>

              <p className="mt-5 font-mono text-[10px] tracking-[0.04em] uppercase text-[var(--color-smoke)]">
                What's Included
              </p>
              <ul className="mt-2 space-y-1.5">
                {s.included.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm text-[var(--color-graphite)]">
                    <Check size={14} className="shrink-0 mt-1 text-[var(--color-brass)]" />
                    {pt}
                  </li>
                ))}
              </ul>

              <p className="mt-4 font-mono text-[10px] tracking-[0.04em] uppercase text-[var(--color-smoke)]">
                The Difference
              </p>
              <p className="mt-1 text-sm text-[var(--color-graphite)] italic">{s.difference}</p>

              <ButtonLink href="/contact" variant="ghost" size="md" className="mt-6 w-full sm:w-auto">
                {s.cta} <ArrowRight size={16} />
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Section 5: Why Us / Comparison ───────── */
function WhyUs() {
  const rows = [
    { label: "Speed", platform: "⚡⚡⚡⚡⚡", consultant: "⚡⚡", trust: "⚡⚡⚡⚡⚡" },
    { label: "Technology", platform: "Cutting-edge", consultant: "Outdated", trust: "Cutting-edge" },
    { label: "Human Relationship", platform: "❌ None", consultant: "✅ Handshake", trust: "✅ Partnership" },
    { label: "Availability", platform: "24/7 dashboard", consultant: "9–5, maybe", trust: "Direct phone/text" },
    { label: "Industry Knowledge", platform: "Generic", consultant: "Local experience", trust: "Banking + tech" },
    { label: "Pricing Transparency", platform: "Hidden fees", consultant: '"It depends"', trust: "Clear, upfront" },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.04em] uppercase text-[var(--color-smoke)] mb-4">
          [04] Why Us
        </p>
        <h2 className="text-balance">
          More Human Than a Platform. More Modern Than a Handshake.
        </h2>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-[var(--color-ink)]">
                <th className="text-left py-3 font-mono text-[11px] tracking-[0.04em] uppercase text-[var(--color-smoke)]">
                  What Matters
                </th>
                <th className="text-center py-3 font-mono text-[11px] tracking-[0.04em] uppercase text-[var(--color-drafting-blue)]">
                  Automated Platforms
                </th>
                <th className="text-center py-3 font-mono text-[11px] tracking-[0.04em] uppercase text-[var(--color-sage)]">
                  Old Local Consultants
                </th>
                <th className="text-center py-3 font-mono text-[11px] tracking-[0.04em] uppercase text-[var(--color-brass)]">
                  617 East Trust
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b border-[var(--semantic-border-subtle)]">
                  <td className="py-4 font-medium text-[var(--color-ink)]">{r.label}</td>
                  <td className="py-4 text-center text-[var(--color-smoke)]">{r.platform}</td>
                  <td className="py-4 text-center text-[var(--color-smoke)]">{r.consultant}</td>
                  <td className="py-4 text-center font-medium text-[var(--color-ink)] bg-[var(--color-brass)]/5 rounded">
                    {r.trust}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="py-4 font-medium">What You Get</td>
                <td className="py-4 text-center text-[var(--color-smoke)]">A login</td>
                <td className="py-4 text-center text-[var(--color-smoke)]">A handshake</td>
                <td className="py-4 text-center font-serif text-lg text-[var(--color-brass)]">A partner</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-10 max-w-3xl text-[var(--color-graphite)] leading-relaxed">
          The platforms invested millions in software and forgot about people.
          The old consultants invested decades in relationships and forgot about
          technology. We invested in both — because after 15 years watching
          businesses struggle in Charlotte's banking world, we learned that
          technology builds fast, but people build trust.
        </p>
      </div>
    </section>
  );
}

/* ───────── Section 6: Our Story ───────── */
function Story() {
  const credentials = [
    "15+ years in Charlotte commercial banking",
    "UNC Charlotte graduate",
    "Sandhills, NC native and current resident",
    "SBA lending expertise from the lender side",
    "Web development and SEO certification",
    "Credit repair specialist certification",
  ];
  return (
    <section id="story" className="border-y border-[var(--semantic-border-subtle)] py-20 sm:py-28 bg-[var(--color-chalk)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.04em] uppercase text-[var(--color-smoke)] mb-4">
          [05] Our Story
        </p>
        <h2 className="text-balance">From Charlotte Banking to Sandhills Roots</h2>

        <div className="mt-8 space-y-5 text-[var(--color-graphite)] leading-relaxed">
          <p>
            617 East Trust started with a simple observation: businesses were
            getting lost between two broken models.
          </p>
          <p>
            Our founder spent 15 years in Charlotte's banking industry — UNC
            Charlotte grad, climbing the ranks from teller to commercial lending,
            sitting across the desk from entrepreneurs who needed capital but
            couldn't navigate the system. Saw too many good businesses get
            declined because they didn't know how to tell their story to lenders.
            Saw too many settle for predatory loans because the SBA process
            seemed impossible.
          </p>
          <p>
            Meanwhile, watched the rise of automated platforms that made
            business formation instant and support nonexistent. Watched local
            consultants mean well but move at 1997 speeds with 1997 tools.
          </p>
          <p className="font-serif text-xl text-[var(--color-ink)]">
            <span className="text-[var(--color-brass)]">The realization:</span> Technology had solved the speed
            problem. People still solved the trust problem. Nobody was doing both.
          </p>
          <p>
            So we built 617 East Trust — named for the idea that business happens
            at the intersection of thoroughfare and trust. Based in Charlotte
            where the banks are. Rooted in the Sandhills where the values are.
            Serving North Carolina and beyond with a simple philosophy:
          </p>
          <p className="font-serif text-2xl text-[var(--color-ink)] text-center py-4">
            Technology builds fast. People build trust. You need both to build a
            business that lasts.
          </p>
        </div>

        <div className="mt-10">
          <p className="font-mono text-[11px] tracking-[0.04em] uppercase text-[var(--color-smoke)] mb-4">
            Credentials & Background
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {credentials.map((c) => (
              <div key={c} className="flex gap-2.5 items-center text-sm text-[var(--color-graphite)]">
                <ShieldCheck size={16} className="shrink-0 text-[var(--color-drafting-blue)]" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Section 7: Testimonials ───────── */
function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.04em] uppercase text-[var(--color-smoke)] mb-4">
          [06] Social Proof
        </p>
        <h2 className="text-balance">
          They Came for the Technology. They Stayed for the People.
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {SITE.testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[var(--color-chalk)] rounded-[var(--radius-human)] p-8 shadow-[var(--shadow-md)] border border-[var(--semantic-border-subtle)] flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[var(--color-brass)] text-[var(--color-brass)]" />
                ))}
              </div>
              <blockquote className="text-sm text-[var(--color-graphite)] leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <div className="mt-5 pt-5 border-t border-[var(--semantic-border-subtle)]">
                <p className="font-medium text-[var(--color-ink)]">— {t.name}</p>
                <p className="mt-1 text-xs text-[var(--color-smoke)]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {SITE.trustBadges.map((b) => (
            <div key={b} className="flex items-center gap-2 text-sm text-[var(--color-graphite)]">
              <Check size={14} className="text-[var(--color-sage)]" /> {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Section 8: How It Works ───────── */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      icon: Users,
      title: "Conversation",
      body: "We start with a conversation, not a form. Tell us about your business, your goals, your challenges. We'll tell you honestly if we can help and exactly how.",
    },
    {
      n: "02",
      icon: Zap,
      title: "Strategy",
      body: "We build a custom plan using the right mix of technology and human expertise. No templates. No one-size-fits-all. Your business is unique — your solution should be too.",
    },
    {
      n: "03",
      icon: Handshake,
      title: "Partnership",
      body: "We execute fast, communicate clearly, and stick around. This isn't a transaction — it's a relationship. When you need us next month or next year, we're here.",
    },
  ];
  return (
    <section className="border-y border-[var(--semantic-border-subtle)] py-20 sm:py-28 bg-[var(--color-chalk)]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.04em] uppercase text-[var(--color-smoke)] mb-4">
          [07] How It Works
        </p>
        <h2 className="text-balance">Three Steps to a Real Partnership</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <div className="mx-auto w-16 h-16 rounded-[var(--radius-pill)] bg-[var(--color-paper)] border border-[var(--semantic-border-subtle)] flex items-center justify-center">
                <s.icon size={26} className="text-[var(--color-brass)]" />
              </div>
              <p className="mt-4 font-mono text-[11px] tracking-[0.04em] text-[var(--color-drafting-blue)]">
                {s.n}
              </p>
              <h3 className="mt-1 font-sans font-semibold text-lg">{s.title}</h3>
              <p className="mt-3 text-sm text-[var(--color-graphite)] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Section 9: Final CTA ───────── */
function FinalCTA() {
  return (
    <section className="py-20 sm:py-32 bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[var(--color-paper)] text-balance">
          Stop Being Processed. Start Being Partnered With.
        </h2>
        <p className="mt-6 text-white/70 leading-relaxed">
          You can get a login anywhere. You can get a chatbot anywhere. But if
          you want the strongest technology in business — a real relationship
          with people who have the tech to back it up and the banking experience
          to guide you — you're in the right place.
        </p>
        <p className="mt-4 text-sm text-white/50">
          Based in Charlotte. Rooted in the Sandhills. Serving North Carolina and nationwide.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <ButtonLink href="/contact" variant="primary" size="lg">
            Start With a Conversation <ArrowRight size={18} />
          </ButtonLink>
          <a href={SITE.phoneHref} className="text-sm text-white/70 hover:text-white flex items-center gap-2">
            <Phone size={16} className="text-[var(--color-brass)]" /> Or call: {SITE.phone}
          </a>
        </div>
        <p className="mt-6 font-mono text-xs tracking-[0.04em] uppercase text-[var(--color-brass)]">
          First consultation is free. No obligation. Real answers.
        </p>
      </div>
    </section>
  );
}
