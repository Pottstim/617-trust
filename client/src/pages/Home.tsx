import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { SITE } from "@/lib/siteData";
import Hero3D from "@/components/Hero3D";
import {
  Phone, Check, ShieldCheck, ArrowRight,
  ChevronDown, AlertTriangle, Scale, TrendingUp, Settings,
} from "lucide-react";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <Hero3D />
      <Problem />
      <Phases />
      <MaintainDifference />
      <WhyUs />
      <Story />
      <Testimonials />
      <HowItWorks />
      <CROACompliance />
      <FAQ />
      <FinalCTA />
    </>
  );
}

function Problem() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--color-void)] border-t border-[var(--semantic-border-subtle)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow mb-4">[01] The Problem</p>
          <h2 className="text-balance text-[var(--color-chalk)]">
            Business doesn't fail at launch. It fails in the silence after.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-[var(--color-fog)] leading-relaxed">
            <p>
              Automated platforms form your LLC in twelve minutes and send you on your way. Local consultants
              write your business plan and move to the next client. Nobody mentions that year two is when
              compliance slips, cash flow tightens, tax surprises hit, and the owner starts drowning in
              operational drift.
            </p>
            <p>The formation was easy. The staying alive is hard. And nobody stays with you for it.</p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 font-serif text-2xl text-[var(--color-brass)]">We do.</p>
        </Reveal>
      </div>
    </section>
  );
}

const PHASE_ICONS = [Settings, TrendingUp, ShieldCheck];

function Phases() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[var(--color-carbon)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow mb-4">[02] Three Phases. One Partner.</p>
          <h2 className="text-balance text-[var(--color-chalk)]">Form. Grow. Maintain.</h2>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-fog)]">
            One philosophy. Three phases. A partner for the life of your business.
          </p>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {SITE.phases.map((phase, i) => {
            const Icon = PHASE_ICONS[i];
            return (
              <Reveal key={phase.id} delay={i * 0.12}>
                <div className="card-cinematic p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] tracking-[0.06em]" style={{ color: phase.color }}>
                      [{phase.index}]
                    </span>
                    <Icon size={22} style={{ color: phase.color }} aria-hidden="true" />
                  </div>
                  <h3 className="font-sans font-bold text-2xl text-[var(--color-chalk)]">{phase.name}</h3>
                  <p className="mt-1 font-serif italic text-[var(--color-fog)]">{phase.tagline}</p>
                  <p className="mt-4 text-sm text-[var(--color-fog)] leading-relaxed">{phase.description}</p>
                  <ul className="mt-5 space-y-2 flex-1">
                    {phase.included.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-[var(--color-fog)]">
                        <Check size={13} className="shrink-0 mt-1" style={{ color: phase.color }} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-[var(--color-linen)] italic leading-relaxed border-t border-[var(--semantic-border-subtle)] pt-5">
                    {phase.closingLine}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.4}>
          <p className="mt-10 text-center text-sm text-[var(--color-ash)]">
            Don't need all three phases?{" "}
            <a href="/contact" className="text-[var(--color-drafting-blue)] hover:underline">
              Start with one — we'll grow with you.
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function MaintainDifference() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--color-void)] border-t border-[var(--semantic-border-subtle)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow mb-4">[03] The Maintain Difference</p>
          <h2 className="text-balance text-[var(--color-chalk)]">This is where we're different.</h2>
        </Reveal>
        <div className="mt-10 space-y-5 text-lg text-[var(--color-fog)] leading-relaxed">
          <Reveal delay={0.1}>
            <p>
              Every consultant in the country will help you form a business. Most will help you grow one.
              Nearly none will help you keep one standing.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              The Maintain phase is where cash flow gets managed before it breaks. Where compliance gets
              handled before it costs you. Where a quarterly review catches a margin problem in March instead
              of a crisis in November.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              It's also where trust actually matters. Anyone can file a form once. Staying in the boat with
              you — knowing your numbers, watching your calendar, catching what you miss — that's a
              relationship. That's the philosophy.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <blockquote className="border-l-2 border-[var(--color-sage)] pl-6 py-2 my-8">
              <p className="font-serif text-2xl text-[var(--color-linen)] leading-snug">
                Most consultants leave after the paperwork. We stay for the business.
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[var(--color-carbon)]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow mb-4">[04] How We Compare</p>
          <h2 className="text-balance text-[var(--color-chalk)]">More Than a Platform. More Than a Handshake.</h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--semantic-border-strong)]">
                  <th className="text-left py-3 font-mono text-[11px] tracking-[0.06em] uppercase text-[var(--color-ash)]"></th>
                  <th className="text-center py-3 font-mono text-[11px] tracking-[0.06em] uppercase text-[var(--color-drafting-blue)]">Automated Platforms</th>
                  <th className="text-center py-3 font-mono text-[11px] tracking-[0.06em] uppercase text-[var(--color-sage)]">Local Consultants</th>
                  <th className="text-center py-3 font-mono text-[11px] tracking-[0.06em] uppercase text-[var(--color-brass)]">617 East Trust</th>
                </tr>
              </thead>
              <tbody>
                {SITE.phases[0] && SITE.phases.length > 0 && (
                  <>
                    {[
                      { label: "Formation", platform: "✓", consultant: "✓", trust: "✓" },
                      { label: "Compliance Setup", platform: "Partial", consultant: "✓", trust: "✓" },
                      { label: "SBA Consulting", platform: "✗", consultant: "Sometimes", trust: "✓" },
                      { label: "Web & SEO", platform: "✗", consultant: "Sometimes", trust: "✓" },
                      { label: "Credit Building", platform: "✗", consultant: "Rarely", trust: "✓" },
                      { label: "Bookkeeping", platform: "✗", consultant: "Sometimes", trust: "✓" },
                      { label: "Fractional CFO", platform: "✗", consultant: "✗", trust: "✓" },
                      { label: "Ongoing Compliance", platform: "✗", consultant: "✗", trust: "✓" },
                      { label: "Tax Coordination", platform: "✗", consultant: "Sometimes", trust: "✓" },
                      { label: "Valuation & Succession", platform: "✗", consultant: "✗", trust: "✓" },
                      { label: "Stays After Paperwork", platform: "✗", consultant: "Rarely", trust: "✓" },
                      { label: "Clear, Upfront Pricing", platform: "✓", consultant: "Rarely", trust: "✓" },
                      { label: "Charlotte Banking Experience", platform: "✗", consultant: "Rarely", trust: "✓" },
                      { label: "Sandhills Roots", platform: "✗", consultant: "Sometimes", trust: "✓" },
                    ].map((r) => (
                      <tr key={r.label} className="border-b border-[var(--semantic-border-subtle)]">
                        <td className="py-3 font-medium text-[var(--color-chalk)] text-sm">{r.label}</td>
                        <td className="py-3 text-center text-[var(--color-ash)]">{r.platform}</td>
                        <td className="py-3 text-center text-[var(--color-ash)]">{r.consultant}</td>
                        <td className="py-3 text-center font-semibold text-[var(--color-brass)]">{r.trust}</td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[var(--color-void)] border-t border-[var(--semantic-border-subtle)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow mb-4">[05] Who We Are</p>
          <h2 className="text-balance text-[var(--color-chalk)]">Built on a Simple Frustration.</h2>
        </Reveal>
        <div className="mt-10 space-y-6 text-[var(--color-fog)] leading-relaxed text-lg">
          <Reveal delay={0.1}>
            <p>
              617 East Trust was built on a simple frustration: small business owners deserve better than a
              twelve-minute formation and a goodbye.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              Our founder spent 15 years in Charlotte banking — watching good businesses fail not because
              their idea was wrong, but because nobody helped them past the launch. The formation was handled.
              The growth was attempted. The maintenance was ignored.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              We're based in the Sandhills. We understand North Carolina businesses — the contractors, the
              retailers, the service providers, the family operations that power this region. We're not a
              national platform. We're not a one-person shop. We're a team that forms, grows, and maintains
              businesses like yours.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <blockquote className="border-l-2 border-[var(--color-brass)] pl-6 py-2 my-8">
              <p className="font-serif text-2xl text-[var(--color-linen)] leading-snug">
                Technology builds fast. People build trust. We're the people.
              </p>
            </blockquote>
          </Reveal>
        </div>
        <Reveal delay={0.3}>
          <div className="mt-12">
            <p className="font-mono text-[11px] tracking-[0.06em] uppercase text-[var(--color-ash)] mb-5">Credentials & Background</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {SITE.credentials.map((c) => (
                <div key={c} className="flex gap-2.5 items-center text-sm text-[var(--color-fog)]">
                  <ShieldCheck size={15} className="shrink-0 text-[var(--color-brass)]" aria-hidden="true" />{c}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[var(--color-carbon)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow mb-4">[06] What Clients Say</p>
          <h2 className="text-balance text-[var(--color-chalk)]">Real People. Real Results.</h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {SITE.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="card-cinematic p-8 h-full">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <svg key={si} width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z" fill="#c8853a" />
                    </svg>
                  ))}
                </div>
                <p className="text-[var(--color-fog)] italic leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-[var(--semantic-border-subtle)]">
                  <p className="font-medium text-[var(--color-chalk)] text-sm">{t.name}</p>
                  <p className="mt-0.5 text-xs text-[var(--color-fog)]">{t.role} &mdash; {t.location}</p>
                  <p className="mt-1 font-mono text-[10px] tracking-[0.06em] uppercase text-[var(--color-ash)]">{t.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: "01", title: "Conversation", body: "We start with a conversation, not a form. Tell us about your business, your goals, your challenges. We'll tell you honestly if we can help and exactly how." },
    { num: "02", title: "Strategy", body: "We build a custom plan using the right mix of technology and human expertise. No templates. No one-size-fits-all. Your business is unique — your solution should be too." },
    { num: "03", title: "Partnership", body: "We execute fast, communicate clearly, and stick around. This isn't a transaction — it's a relationship. When you need us next month or next year, we're here." },
  ];
  return (
    <section className="py-24 sm:py-32 bg-[var(--color-void)] border-t border-[var(--semantic-border-subtle)]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow mb-4">[07] How It Works</p>
          <h2 className="text-balance text-[var(--color-chalk)]">Three Steps to a Business That Lasts.</h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.12}>
              <div className="relative">
                <p className="font-mono text-[80px] font-bold leading-none text-[var(--color-graphite)] select-none">{s.num}</p>
                <h3 className="mt-2 font-sans font-semibold text-xl text-[var(--color-chalk)]">{s.title}</h3>
                <p className="mt-3 text-[var(--color-fog)] leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CROACompliance() {
  return (
    <section
      id="compliance"
      className="py-16 sm:py-20 bg-[var(--color-obsidian)] border-t border-[var(--semantic-border-subtle)]"
      aria-label="Legal compliance disclosures"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <Scale size={22} className="text-[var(--color-brass)] shrink-0" aria-hidden="true" />
            <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--color-brass)]">Legal Disclosures</p>
          </div>
          <h2 className="text-xl font-sans font-semibold text-[var(--color-chalk)] mb-6">
            Consumer Rights &amp; Compliance Disclosures
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          <Reveal delay={0.1}>
            <div className="border border-[var(--semantic-border-subtle)] rounded-lg p-6 bg-[var(--color-carbon)]">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle size={16} className="text-[var(--color-brass)] shrink-0 mt-0.5" aria-hidden="true" />
                <h3 className="font-sans font-semibold text-[var(--color-chalk)] text-sm">Credit Repair — CROA Disclosure</h3>
              </div>
              <p className="text-[var(--color-fog)] text-sm leading-relaxed">
                617 East Trust is a credit repair organization as defined under federal law (15 U.S.C. §1679).
                We do not charge fees before services are fully performed. You have the right to cancel any
                contract within <strong className="text-[var(--color-linen)]">3 business days</strong> of signing.
                We cannot guarantee the removal of accurate, current, or verifiable information from your credit
                report. You have the right to dispute inaccurate information directly with the credit bureaus at no charge.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="border border-[var(--semantic-border-subtle)] rounded-lg p-6 bg-[var(--color-carbon)]">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle size={16} className="text-[var(--color-drafting-blue)] shrink-0 mt-0.5" aria-hidden="true" />
                <h3 className="font-sans font-semibold text-[var(--color-chalk)] text-sm">SBA Consulting — Not a Lender</h3>
              </div>
              <p className="text-[var(--color-fog)] text-sm leading-relaxed">
                617 East Trust is a consulting firm, not a bank, lender, or financial institution. We do not make
                lending decisions or issue loans. SBA loan consulting is advisory only — we help prepare applications
                and connect you with SBA-approved lenders. We are not a law firm and do not provide legal advice.
                Loan approval is determined solely by the lender.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <p className="mt-6 text-xs text-[var(--color-ash)] text-center">
            Questions about your rights?{" "}
            <a href="/terms" className="text-[var(--color-drafting-blue)] hover:underline">Terms of Service</a>
            {" "}&middot;{" "}
            <a href="/privacy" className="text-[var(--color-drafting-blue)] hover:underline">Privacy Policy</a>
            {" "}&middot;{" "}
            <a href={SITE.phoneHref} className="text-[var(--color-drafting-blue)] hover:underline">{SITE.phone}</a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  {
    q: "Do I have to use all three phases?",
    a: "No. You can engage us for formation only, growth only, or maintenance only. Most clients start with one phase and expand as they see the value. The three-phase model exists so you know we're equipped to stay with you — not because you're required to use everything.",
  },
  {
    q: "How does pricing work?",
    a: "Formation services are flat-fee. Growth services are project-based or monthly retainer depending on scope. Maintain services are monthly subscriptions based on the level of support you need. We provide clear quotes before any work begins. No surprise invoices.",
  },
  {
    q: "Do you replace my CPA or attorney?",
    a: "No. We coordinate with them. For tax preparation, we partner with licensed CPAs. For legal matters beyond our scope, we refer to trusted attorneys. We handle the operational and strategic work that falls between what your CPA does once a year and what your attorney does when something goes wrong.",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in the Sandhills and actively serve the Sandhills, Raleigh, and Fayetteville regions. For Maintain services and certain Growth services, we work with clients throughout North Carolina remotely.",
  },
  {
    q: "What makes you different from LegalZoom or similar platforms?",
    a: "Platforms file forms. We build businesses. They can't advise you on which entity structure fits your tax situation. They won't review your cash flow before an SBA application. They don't call you when your annual report is due. We do.",
  },
  {
    q: "Do you work with existing businesses or only startups?",
    a: "Both. If you're already operating but don't have proper bookkeeping, compliance systems, or growth strategy, you're exactly who we help. Many of our clients come to us in year two or three — when the cracks start showing.",
  },
  {
    q: "What's a quarterly business review?",
    a: "We sit down with you every ninety days to review your financials, compliance status, growth metrics, and upcoming needs. It's the core of the Maintain phase — and it's the thing most businesses never do until something breaks.",
  },
  {
    q: "Does 617 East Trust guarantee credit repair results?",
    a: "No — and by law, no credit repair company can. Under the Credit Repair Organizations Act (CROA), we cannot guarantee the removal of accurate, timely negative information from your credit report. What we do guarantee: legal, ethical dispute services, full transparency, and no fees charged before services are performed.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section
      id="faq"
      className="py-24 sm:py-32 bg-[var(--color-void)] border-t border-[var(--semantic-border-subtle)]"
      aria-label="Frequently asked questions"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow mb-4">[08] FAQ</p>
          <h2 className="text-balance text-[var(--color-chalk)]">Questions We Hear Every Day.</h2>
          <p className="mt-4 text-[var(--color-fog)] leading-relaxed">Straight answers. No jargon. No runaround.</p>
        </Reveal>
        <div className="mt-12 space-y-3" role="list">
          {FAQ_ITEMS.map((item, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="border border-[var(--semantic-border-subtle)] rounded-lg overflow-hidden" role="listitem">
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-[var(--color-carbon)] hover:bg-[var(--color-graphite)] transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-sans font-medium text-[var(--color-chalk)] text-sm leading-snug">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[var(--color-brass)] transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {openIndex === i && (
                  <div
                    id={`faq-answer-${i}`}
                    className="px-6 py-5 bg-[var(--color-obsidian)] text-[var(--color-fog)] text-sm leading-relaxed"
                    role="region"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--color-obsidian)] border-t border-[var(--semantic-border-subtle)]">
      <div className="mx-auto max-w-3xl text-center px-4">
        <Reveal>
          <p className="eyebrow mb-4">Form. Grow. Maintain.</p>
          <h2 className="text-balance text-[var(--color-chalk)]">Wherever You Are in the Journey, We're Ready to Join It.</h2>
          <p className="mt-6 text-lg text-[var(--color-fog)]">
            Start with a conversation — no forms, no bots, no ticket numbers.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href="/contact" size="lg">Book a Free Consultation <ArrowRight size={18} /></ButtonLink>
            <ButtonLink href="/#services" variant="ghost" size="lg">View Service Packages <ArrowRight size={18} /></ButtonLink>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-[var(--color-fog)]">
            <Phone size={16} className="text-[var(--color-brass)]" aria-hidden="true" />
            <a href={SITE.phoneHref} className="text-sm font-medium hover:text-[var(--color-chalk)] transition-colors">{SITE.phone} — We answer.</a>
          </div>
          <p className="mt-4 text-xs text-[var(--color-ash)]">617 East Trust — Sandhills, NC &middot; Serving the Sandhills, Raleigh, and Fayetteville regions</p>
          <p className="mt-6 font-serif text-xl text-[var(--color-brass)] italic">Analog Heart. Digital Mind.</p>
        </Reveal>
      </div>
    </section>
  );
}
