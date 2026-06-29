import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, Phone, ArrowRight, MessageSquare } from "lucide-react";
import { SITE } from "@/lib/siteData";

export default function ThankYou() {
  // Fire conversion tracking on mount
  useEffect(() => {
    // GA4 conversion event
    if (typeof window !== "undefined" && "gtag" in window) {
      // @ts-expect-error gtag is injected via script
      window.gtag?.("event", "generate_lead", {
        currency: "USD",
        value: 0,
        source: "contact_form",
      });
    }
    // Facebook Pixel placeholder — add fbq here if pixel is installed
  }, []);

  return (
    <article className="min-h-[100dvh] flex flex-col">
      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.92, 0.26, 1] }}
          className="max-w-2xl w-full text-center"
        >
          {/* Success icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-brass)]/10 mb-8"
          >
            <Check className="text-[var(--color-brass)]" size={40} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-balance"
          >
            You're in. We'll be in touch within one business day.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-5 text-lg text-[var(--semantic-text-secondary)]"
          >
            A real person — not a chatbot — will reach out to start your free consultation. In the meantime, here's what to expect.
          </motion.p>

          {/* Next steps — Goal-Gradient Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-left bg-[var(--semantic-bg-elevated)] rounded-[var(--radius-card)] p-8 border border-[var(--semantic-border-subtle)]"
          >
            <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--color-brass)] mb-4">What happens next</p>
            <ol className="space-y-4">
              {[
                { step: "1", title: "We review your submission", desc: "Usually within a few hours during business days." },
                { step: "2", title: "A real person calls or texts you", desc: "We'll confirm your goals and answer preliminary questions." },
                { step: "3", title: "Free consultation", desc: "30 minutes. No obligation. We tell you exactly how we can help." },
              ].map((s) => (
                <li key={s.step} className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-brass)]/10 flex items-center justify-center text-sm font-medium text-[var(--color-brass)]">
                    {s.step}
                  </span>
                  <div>
                    <p className="font-medium text-sm">{s.title}</p>
                    <p className="text-sm text-[var(--semantic-text-secondary)] mt-0.5">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Omni-channel fallback CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-brass)] text-[var(--color-void)] rounded-[var(--radius-pill)] px-6 py-3.5 font-medium text-sm hover:brightness-110 transition-all min-w-[200px]"
            >
              <Phone size={16} /> Call Now
            </a>
            <a
              href={SITE.smsHref}
              className="inline-flex items-center justify-center gap-2 border border-[var(--semantic-border-strong)] text-[var(--semantic-text-primary)] rounded-[var(--radius-pill)] px-6 py-3.5 font-medium text-sm hover:border-[var(--color-brass)] hover:text-[var(--color-brass)] transition-all min-w-[200px]"
            >
              <MessageSquare size={16} /> Text Us
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-xs text-[var(--semantic-text-tertiary)]"
          >
            Prefer to explore first?{" "}
            <Link href="/" className="text-[var(--color-brass)] hover:underline">
              Back to home
            </Link>
          </motion.p>
        </motion.div>
      </section>
    </article>
  );
}
