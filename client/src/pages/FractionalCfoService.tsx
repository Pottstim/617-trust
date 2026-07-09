import { ButtonLink } from "@/components/ui/Button";
import { SITE } from "@/lib/siteData";
import { ArrowRight, Check, Phone } from "lucide-react";

export default function FractionalCfoService() {
  return (
    <article>
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-24">
        <p className="font-mono text-xs tracking-[0.04em] uppercase text-[var(--color-drafting-blue)] mb-6">Services</p>
        <h1 className="text-balance">Fractional CFO Services</h1>
        <p className="mt-6 text-lg leading-relaxed text-[var(--color-graphite)] text-pretty max-w-2xl">
          Strategic financial leadership without the $150K+ full-time salary. Forecasting, KPI dashboards, lender reporting, and board-ready financial analysis—on a part-time basis that fits your budget.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-20 space-y-6 text-lg leading-relaxed text-[var(--color-graphite)]">
        <p>
          Most small businesses hit a point where they need more than a bookkeeper but can't justify a full-time CFO. That's the fractional CFO sweet spot. You're doing $500K–$5M in revenue, you have decisions to make about growth, hiring, equipment purchases, or raising capital—and you need someone who can build the financial models, analyze the scenarios, and present the options in plain English.
        </p>
        <p>
          We don't just send you spreadsheets. We work alongside you as a strategic partner: joining leadership meetings, preparing board presentations, modeling your next hire or equipment purchase, and helping you talk to lenders and investors in their language. Our fractional CFO clients typically engage us for 4–8 hours per week, and we scale up or down as needed.
        </p>

        <h2>What's Included</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Financial forecasting and scenario modeling (hiring, expansion, capital raises)</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">KPI dashboard design and monthly review</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Lender and investor reporting packages</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Cash flow management and working capital optimization</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Budget development and variance analysis</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Pricing and profitability analysis by product/service line</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Quarterly business reviews and strategic planning sessions</span></li>
        </ul>

        <div className="bg-[var(--color-drafting-blue)]/10 border border-[var(--color-drafting-blue)]/30 rounded-[var(--radius-card)] p-6">
          <p className="font-medium mb-2">Case Study: $250K SBA 7(a) Loan Secured in 47 Days</p>
          <p className="text-sm">A cabinetry shop in Southern Pines needed working capital to expand from 4 to 8 employees. Their bank had declined them twice. We rebuilt their financial projections with lender-ready assumptions, prepared a debt service coverage model, and matched them with an SBA-preferred lender who closed in 47 days. They're now at $1.2M annual revenue and 9 employees.</p>
        </div>

        <h2>Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div><p className="font-medium">What's the difference between a bookkeeper, CPA, and fractional CFO?</p><p className="text-base text-[var(--color-smoke)]">A bookkeeper tracks transactions. A CPA handles tax compliance and filing. A fractional CFO looks forward: forecasting, strategy, capital planning, and helping you make big financial decisions with data rather than gut feel.</p></div>
          <div><p className="font-medium">How much does a fractional CFO cost?</p><p className="text-base text-[var(--color-smoke)]">Our fractional CFO engagements start at $1,200/month for 4 hours/week, scaling based on complexity and time commitment. Compare that to a full-time CFO at $150K–$250K/year plus benefits.</p></div>
          <div><p className="font-medium">What size business needs a fractional CFO?</p><p className="text-base text-[var(--color-smoke)]">Typically $500K–$5M in annual revenue. If you're making decisions about hiring, capital investment, pricing, or raising money—and you don't have a financial professional on your leadership team—a fractional CFO fills that gap.</p></div>
          <div><p className="font-medium">Do you work with my existing bookkeeper or CPA?</p><p className="text-base text-[var(--color-smoke)]">Absolutely. We collaborate with your existing financial team. Clean books from your bookkeeper make our analysis better. Coordination with your CPA ensures tax strategy is baked into the plan.</p></div>
        </div>
      </section>

      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Fractional CFO","name":"Fractional CFO Services","provider":{"@type":"ProfessionalService","name":"617 East Trust","url":"https://617east.com"},"areaServed":{"@type":"State","name":"North Carolina"},"url":"https://617east.com/services/fractional-cfo","description":"Strategic fractional CFO services for NC businesses $500K-$5M: forecasting, KPI dashboards, lender reporting, scenario modeling. $1,200/month for 4 hrs/week.","offers":{"@type":"Offer","price":"1200.00","priceCurrency":"USD","description":"Fractional CFO starting at $1,200/month for 4 hours/week. Financial forecasting, KPI dashboards, lender reporting, and strategic planning."},"hasFAQPage":{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What's the difference between a bookkeeper, CPA, and fractional CFO?","acceptedAnswer":{"@type":"Answer","text":"A bookkeeper tracks transactions. A CPA handles tax compliance. A fractional CFO looks forward: forecasting, strategy, and capital planning."}},{"@type":"Question","name":"How much does a fractional CFO cost?","acceptedAnswer":{"@type":"Answer","text":"Our fractional CFO engagements start at $1,200/month for 4 hours/week, scaling based on complexity. Full-time CFOs cost $150K-$250K/year."}},{"@type":"Question","name":"What size business needs a fractional CFO?","acceptedAnswer":{"@type":"Answer","text":"Typically $500K-$5M in annual revenue. If you're making decisions about hiring, capital, or pricing without financial leadership, a fractional CFO fills that gap."}},{"@type":"Question","name":"Do you work with my existing bookkeeper or CPA?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. We collaborate with your existing team. Clean books make our analysis better. Coordination with your CPA ensures tax strategy is integrated."}}]}})}</script>
      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://617east.com"},{"@type":"ListItem","position":2,"name":"Services","item":"https://617east.com/services"},{"@type":"ListItem","position":3,"name":"Fractional CFO","item":"https://617east.com/services/fractional-cfo"}]})}</script>

      <section className="bg-[var(--color-ink)] text-[var(--color-paper)] py-16">
        <div className="mx-auto max-w-2xl text-center px-4">
          <h2 className="text-[var(--color-paper)]">Ready for financial leadership that fits your budget?</h2>
          <p className="mt-4 text-[var(--color-ash)]">Your business has outgrown guesswork. Let's build the models.</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row justify-center">
            <ButtonLink href="/contact" size="lg">Schedule a Discovery Call <ArrowRight size={18} /></ButtonLink>
            <ButtonLink href={SITE.phoneHref} variant="ghost" size="lg"><Phone size={18} className="mr-2" />{SITE.phone}</ButtonLink>
          </div>
        </div>
      </section>
    </article>
  );
}
