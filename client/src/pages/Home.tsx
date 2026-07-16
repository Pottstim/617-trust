import { useState, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import {
  SITE, PHASES, COMPARISON_ROWS,
  PROBLEM_STATS, FAQ_ITEMS,
} from "@/lib/siteData";
import { Hero3D } from "@/components/Hero3D";
import CountUp from "@/components/CountUp";
import {
  Phone, Check, ArrowRight, ChevronDown,
  TrendingUp, Building2, Shield, MessageSquare,
} from "lucide-react";

const PhaseIcon = ({ type }: { type: string }) => {
  const cls = "w-6 h-6";
  if (type === "building") return <Building2 className={cls} />;
  if (type === "trending") return <TrendingUp className={cls} />;
  return <Shield className={cls} />;
};

// Animation variants for staggered children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Problem Section — Loss Aversion + Social Proof (stats)
const Problem = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();
  return (
    <section id="problem" className="relative py-20 md:py-28 border-t border-white/[0.06]" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="section-heading">The Problem</p>
          <h2 className="text-balance mt-3">Business doesn't fail at launch.<br />It fails in the silence after.</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-10 grid gap-6 md:grid-cols-3"
        >
          {PROBLEM_STATS.map((s, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="card-cinematic p-6"
            >
              <p className="mt-2 text-5xl font-serif text-[var(--color-brass)]">
                <CountUp value={s.value} />
              </p>
              <p className="mt-2 text-sm text-[var(--semantic-text-secondary)] leading-relaxed">{s.label}</p>
              {s.source && <p className="mt-2 text-[10px] font-mono uppercase tracking-wider text-[var(--semantic-text-tertiary)]">{s.source}</p>}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 max-w-2xl text-lg text-[var(--semantic-text-secondary)]"
        >
          Automated platforms form your LLC in twelve minutes and send you on your way. Local consultants write their business plan and move to the next client. Nobody mentions that year two is when compliance slips, cash flow tightens, and the owner starts drowning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-[var(--semantic-text-secondary)]"
        >
          <span>Want to talk to a human first?</span>
          <a href={SITE.phoneHref} className="inline-flex items-center gap-1.5 text-[var(--color-brass)] hover:underline"><Phone size={14} /> Call {SITE.phone}</a>
          <span className="text-white/20">or</span>
          <a href={SITE.smsHref} className="inline-flex items-center gap-1.5 text-[var(--color-brass)] hover:underline"><MessageSquare size={14} /> text us</a>
        </motion.div>
      </div>
    </section>
  );
};

// Phases Section — Three service tiers (Decoy Effect + Commitment/Consistency)
const Phases = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <section id="services" className="relative py-20 md:py-28 border-t border-white/[0.06]" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="section-heading">What We Do</p>
          <h2 className="text-balance mt-3">Three phases. One partner. No handoffs.</h2>
          <p className="mt-4 max-w-2xl text-[var(--semantic-text-secondary)]">
            Most businesses get abandoned after formation. We stay through every phase — because the work that matters most happens after the paperwork.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {PHASES.map((phase, i) => (
            <motion.div
              key={phase.id}
              variants={itemVariants}
              className={`card-cinematic p-8 flex flex-col ${i === 1 ? "lg:-translate-y-2 border-[var(--color-brass)]/40" : ""}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-[var(--color-brass)]">{phase.index}</span>
                <h3 className="text-2xl">{phase.name}</h3>
              </div>
              <p className="text-sm text-[var(--color-brass)] mb-3">{phase.tagline}</p>
              <p className="text-sm text-[var(--semantic-text-secondary)] mb-5">{phase.description}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {phase.included.slice(0, 5).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--semantic-text-secondary)]">
                    <Check size={14} className="text-[var(--color-brass)] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
                {phase.included.length > 5 && (
                  <li className="text-xs text-[var(--semantic-text-tertiary)]">+ {phase.included.length - 5} more</li>
                )}
              </ul>
              <p className="text-sm italic text-[var(--semantic-text-secondary)] border-t border-white/[0.06] pt-4">
                {phase.closingLine}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Why Us Section — Contrast Effect + Authority Bias (comparison table)
const WhyUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <section id="why-us" className="relative py-20 md:py-28 border-t border-white/[0.06] bg-white/[0.02]" ref={ref}>
      <div className="mx-auto max-w-4xl px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="section-heading">Why Us</p>
          <h2 className="text-balance mt-3">You have three options. Only one stays.</h2>
          <p className="mt-4 text-[var(--semantic-text-secondary)]">Compare what you get from automated platforms, typical consultants, and 617 East Trust.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 overflow-hidden rounded-[var(--radius-card)] border border-white/[0.08]"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.08] text-left bg-white/[0.02]">
                <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-[var(--semantic-text-tertiary)]">Feature</th>
                <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-[var(--semantic-text-tertiary)] text-center">DIY Platform</th>
                <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-[var(--semantic-text-tertiary)] text-center">Consultant</th>
                <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-center text-[#0a0908] bg-[var(--color-brass)]/20">617 East Trust</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.25 + 0.03 * i }}
                  className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="px-4 py-2.5 text-[var(--semantic-text-secondary)]">{row.label}</td>
                  <td className="px-4 py-2.5 text-center text-[var(--semantic-text-tertiary)]">{row.platform}</td>
                  <td className="px-4 py-2.5 text-center text-[var(--semantic-text-tertiary)]">{row.consultant}</td>
                  <td className="px-4 py-2.5 text-center text-[var(--color-brass)] bg-[var(--color-brass)]/5 font-medium">{row.trust}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

// FAQ Section — Zeigarnik Effect (open loops) + Trust (transparency)
const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <section id="faq" className="relative py-20 md:py-28 border-t border-white/[0.06]" ref={ref}>
      <div className="mx-auto max-w-3xl px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="section-heading">Questions</p>
          <h2 className="text-balance mt-3">Honest answers. No runaround.</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-10 space-y-3"
        >
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="border border-white/[0.06] rounded-[var(--radius-functional)] overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/[0.02] transition-colors"
                aria-expanded={open === i}
              >
                <span className="font-medium text-sm pr-4">{item.q}</span>
                <ChevronDown size={18} className={`shrink-0 text-[var(--color-brass)] transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-96" : "max-h-0"}`}>
                <p className="px-6 pb-4 text-sm text-[var(--semantic-text-secondary)] leading-relaxed">{item.a}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Final CTA — Loss Aversion + Scarcity (genuine) + Commitment (small ask)
const FinalCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section className="relative py-24 md:py-32 border-t border-white/[0.06]" ref={ref}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-balance">Your business deserves more than a filing confirmation.</h2>
          <p className="mt-5 text-lg text-[var(--semantic-text-secondary)]">
            The launch is the easy part. The years after \u2014 the compliance you forgot, the loan you should not have taken, the quarter that quietly bled \u2014 are where businesses die. We stay for that part, and we tell you what not to do before it costs you.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="/contact" size="lg" className="min-w-[240px]">
              Book a Free Consultation <ArrowRight size={18} className="ml-2" />
            </ButtonLink>
            <ButtonLink href={SITE.phoneHref} variant="ghost" size="lg" className="min-w-[220px]">
              <Phone size={18} className="mr-2" /> {SITE.phone}
            </ButtonLink>
            <a href={SITE.smsHref} className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] px-6 py-4 text-[var(--color-brass)] border border-[var(--color-brass)]/30 hover:bg-[var(--color-brass)]/10 transition-colors font-medium text-base">
              <MessageSquare size={18} /> Text us
            </a>
          </div>
          <p className="mt-6 text-xs text-[var(--semantic-text-tertiary)]">Free consultation. No obligation. Real answers within one business day.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero3D />
      <Problem />
      <Phases />
      <WhyUs />
      <FAQ />
      <FinalCTA />
    </>
  );
}
