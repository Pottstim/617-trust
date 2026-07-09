import { ButtonLink } from "@/components/ui/Button";
import { SITE } from "@/lib/siteData";
import { ArrowRight, Check, Phone } from "lucide-react";

export default function CreditRepairNorthCarolinaService() {
  return (
    <article>
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-24">
        <p className="font-mono text-xs tracking-[0.04em] uppercase text-[var(--color-drafting-blue)] mb-6">Services</p>
        <h1 className="text-balance">Credit Repair in North Carolina</h1>
        <p className="mt-6 text-lg leading-relaxed text-[var(--color-graphite)] text-pretty max-w-2xl">
          Legal, FCRA-compliant credit repair services for North Carolina residents. We don't promise miracles—we deliver methodical, documented dispute processes and credit-building strategy.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-20 space-y-6 text-lg leading-relaxed text-[var(--color-graphite)]">
        <p>
          Credit repair is one of the most misunderstood—and most abused—industries in America. Fly-by-night companies charge upfront fees, make impossible promises, and disappear. We do it differently. Our approach is grounded in the Fair Credit Reporting Act (FCRA) and the Credit Repair Organizations Act (CROA): methodical dispute resolution, creditor negotiation, and a long-term credit-building plan.
        </p>
        <p>
          We start with a comprehensive credit report analysis across all three bureaus—Experian, Equifax, and TransUnion. We identify inaccuracies, unverifiable items, and negative marks that are beyond the statutory reporting period. Then we dispute them, one by one, with documentation and persistence. And we teach you how to build credit the right way going forward.
        </p>

        <h2>What's Included</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Tri-bureau credit report pull and analysis (Experian, Equifax, TransUnion)</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Identification of inaccurate, unverifiable, or obsolete negative items</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">FCRA-compliant dispute letters—customized per item, not mass-generated</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Creditor and collections agency direct negotiation</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Debt validation requests under the FDCPA</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Credit-building strategy: secured cards, authorized user, credit mix</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Identity theft recovery assistance (if applicable)</span></li>
        </ul>

        <div className="bg-[var(--color-sage)]/10 border border-[var(--color-sage)]/30 rounded-[var(--radius-card)] p-6">
          <p className="font-medium mb-2">CROA Compliance Notice</p>
          <p className="text-sm">Under the Credit Repair Organizations Act (CROA), no credit repair company may legally guarantee the removal of accurate, timely negative information from your credit report. You have the right to cancel services within 3 business days of signing any agreement. 617 East Trust provides legal dispute services based on your consumer rights under the FCRA. We do not charge upfront fees before services are performed.</p>
        </div>

        <h2>Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div><p className="font-medium">How long does credit repair take?</p><p className="text-base text-[var(--color-smoke)]">Most clients see measurable improvements within 30-90 days. Credit bureaus have 30 days to investigate each dispute under the FCRA. Complex cases with multiple negative items may take 4-6 months for full resolution.</p></div>
          <div><p className="font-medium">Do you guarantee credit repair results?</p><p className="text-base text-[var(--color-smoke)]">No. Under CROA regulations, no credit repair company can legally guarantee results. We guarantee we'll use every legal tool available under the FCRA to dispute inaccuracies and negotiate with creditors on your behalf.</p></div>
          <div><p className="font-medium">Can I repair my own credit?</p><p className="text-base text-[var(--color-smoke)]">Yes. You have the right to dispute inaccuracies directly with the credit bureaus. Many people do this successfully. Our value is experience: we know what documentation moves the needle, how to escalate stalled disputes, and how to negotiate with creditors effectively.</p></div>
          <div><p className="font-medium">What does credit repair cost?</p><p className="text-base text-[var(--color-smoke)]">We charge a flat monthly fee of $79/month with no long-term contract. There is no upfront fee—you pay only after we've performed the work that month. Cancel anytime. Most clients work with us for 3-6 months.</p></div>
        </div>
      </section>

      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Credit Repair","name":"Credit Repair in North Carolina","provider":{"@type":"ProfessionalService","name":"617 East Trust","url":"https://617east.com"},"areaServed":{"@type":"State","name":"North Carolina"},"url":"https://617east.com/services/credit-repair-north-carolina","description":"FCRA-compliant credit repair for North Carolina residents. Tri-bureau analysis, customized dispute letters, creditor negotiation, and credit-building strategy. No upfront fees.","offers":{"@type":"Offer","price":"79.00","priceCurrency":"USD","description":"Monthly credit repair service — tri-bureau analysis, dispute processing, and credit-building strategy. Cancel anytime."},"hasFAQPage":{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How long does credit repair take?","acceptedAnswer":{"@type":"Answer","text":"Most clients see improvements within 30-90 days. Credit bureaus have 30 days to investigate each dispute under the FCRA."}},{"@type":"Question","name":"Do you guarantee credit repair results?","acceptedAnswer":{"@type":"Answer","text":"No. Under CROA, no company can legally guarantee removal of accurate negative information. We use every legal tool under the FCRA."}},{"@type":"Question","name":"Can I repair my own credit?","acceptedAnswer":{"@type":"Answer","text":"Yes. You can dispute inaccuracies directly with credit bureaus. Our value is experience: what documentation matters, how to escalate, and how to negotiate."}},{"@type":"Question","name":"What does credit repair cost?","acceptedAnswer":{"@type":"Answer","text":"$79/month flat fee with no long-term contract. No upfront fees. Cancel anytime. Most clients work with us for 3-6 months."}}]}})}</script>
      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://617east.com"},{"@type":"ListItem","position":2,"name":"Services","item":"https://617east.com/services"},{"@type":"ListItem","position":3,"name":"Credit Repair","item":"https://617east.com/services/credit-repair-north-carolina"}]})}</script>

      <section className="bg-[var(--color-ink)] text-[var(--color-paper)] py-16">
        <div className="mx-auto max-w-2xl text-center px-4">
          <h2 className="text-[var(--color-paper)]">Ready to take control of your credit?</h2>
          <p className="mt-4 text-[var(--color-ash)]">Free consultation. No upfront fees. Real strategy.</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row justify-center">
            <ButtonLink href="/contact" size="lg">Free Credit Review <ArrowRight size={18} /></ButtonLink>
            <ButtonLink href={SITE.phoneHref} variant="ghost" size="lg"><Phone size={18} className="mr-2" />{SITE.phone}</ButtonLink>
          </div>
        </div>
      </section>
    </article>
  );
}
