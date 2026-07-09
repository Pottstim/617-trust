import { ButtonLink } from "@/components/ui/Button";
import { SITE } from "@/lib/siteData";
import { ArrowRight, Check, Phone } from "lucide-react";

export default function BookkeepingNorthCarolinaService() {
  return (
    <article>
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-24">
        <p className="font-mono text-xs tracking-[0.04em] uppercase text-[var(--color-drafting-blue)] mb-6">Services</p>
        <h1 className="text-balance">Bookkeeping & Accounting for North Carolina Businesses</h1>
        <p className="mt-6 text-lg leading-relaxed text-[var(--color-graphite)] text-pretty max-w-2xl">
          Monthly bookkeeping that actually gets done. Clean books, monthly financial statements, and tax-ready records—so you stop dreading tax season and start knowing where your money goes.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-20 space-y-6 text-lg leading-relaxed text-[var(--color-graphite)]">
        <p>
          Poor bookkeeping is the silent killer of small businesses. It's not as visible as a bad Yelp review or a missed sales goal—but according to the U.S. Bank study, 82% of small business failures trace back to cash flow problems. And you can't manage cash flow if you don't have clean books.
        </p>
        <p>
          Most small business owners handle their own books for the first year or two. Then tax season hits, and they realize their QuickBooks file is a disaster. Transactions are miscategorized, bank reconciliations haven't been done in months, and the CPA is charging extra just to untangle the mess. That's where we come in.
        </p>

        <h2>What's Included</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Monthly bank and credit card reconciliation</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Income statement, balance sheet, and cash flow statement</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Accounts payable and receivable tracking</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Expense categorization for tax optimization</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">1099 contractor tracking and filing</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Year-end financial package for your CPA</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Sales tax filing support</span></li>
        </ul>

        <p className="italic border-l-4 border-[var(--color-brass)] pl-6 py-2">
          Clean books aren't a luxury. They're the foundation of every smart business decision you'll make this year.
        </p>

        <h2>Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div><p className="font-medium">What does bookkeeping cost for a small business?</p><p className="text-base text-[var(--color-smoke)]">Our monthly bookkeeping starts at $199/month for businesses with under $10K in monthly transactions. Pricing scales with transaction volume and complexity. All plans include monthly financial statements and year-end CPA-ready package.</p></div>
          <div><p className="font-medium">Do I still need a CPA if I have a bookkeeper?</p><p className="text-base text-[var(--color-smoke)]">Yes. We handle day-to-day books and monthly financials. Your CPA handles tax strategy, tax return filing, and high-level tax planning. We coordinate with your CPA so they get clean, organized records at year-end—saving you money on tax prep fees.</p></div>
          <div><p className="font-medium">Can you clean up messy books from previous months?</p><p className="text-base text-[var(--color-smoke)]">Absolutely. We offer a one-time bookkeeping cleanup service starting at $399 for catch-up work. We'll reconcile all prior periods, fix categorization errors, and get you current—so you start fresh going forward.</p></div>
          <div><p className="font-medium">What accounting software do you use?</p><p className="text-base text-[var(--color-smoke)]">We work primarily with QuickBooks Online, but can accommodate Xero and Wave. If you're not using any software yet, we'll help you choose and set up the right platform for your business.</p></div>
        </div>
      </section>

      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Bookkeeping","name":"Bookkeeping & Accounting for North Carolina Businesses","provider":{"@type":"ProfessionalService","name":"617 East Trust","url":"https://617east.com"},"areaServed":{"@type":"State","name":"North Carolina"},"url":"https://617east.com/services/bookkeeping-north-carolina","description":"Monthly bookkeeping for NC small businesses: bank reconciliation, financial statements, AP/AR tracking, expense categorization, and year-end CPA-ready package.","offers":{"@type":"Offer","price":"199.00","priceCurrency":"USD","description":"Monthly bookkeeping starting at $199/month for businesses under $10K monthly transactions"},"hasFAQPage":{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does bookkeeping cost for a small business?","acceptedAnswer":{"@type":"Answer","text":"Our monthly bookkeeping starts at $199/month for businesses with under $10K in monthly transactions. Pricing scales with transaction volume."}},{"@type":"Question","name":"Do I still need a CPA if I have a bookkeeper?","acceptedAnswer":{"@type":"Answer","text":"Yes. We handle day-to-day books and monthly financials. Your CPA handles tax strategy and filing. We coordinate with your CPA to save you money on tax prep."}},{"@type":"Question","name":"Can you clean up messy books from previous months?","acceptedAnswer":{"@type":"Answer","text":"Yes. We offer a one-time cleanup starting at $399. We reconcile all prior periods, fix categorization, and get you current."}},{"@type":"Question","name":"What accounting software do you support?","acceptedAnswer":{"@type":"Answer","text":"We primarily work with QuickBooks Online, and can accommodate Xero and Wave. We help you choose and set up the right platform."}}]}})}</script>
      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://617east.com"},{"@type":"ListItem","position":2,"name":"Services","item":"https://617east.com/services"},{"@type":"ListItem","position":3,"name":"Bookkeeping","item":"https://617east.com/services/bookkeeping-north-carolina"}]})}</script>

      <section className="bg-[var(--color-ink)] text-[var(--color-paper)] py-16">
        <div className="mx-auto max-w-2xl text-center px-4">
          <h2 className="text-[var(--color-paper)]">Ready for books you can actually trust?</h2>
          <p className="mt-4 text-[var(--color-ash)]">Stop dreading tax season. Start knowing your numbers.</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row justify-center">
            <ButtonLink href="/contact" size="lg">Get a Quote <ArrowRight size={18} /></ButtonLink>
            <ButtonLink href={SITE.phoneHref} variant="ghost" size="lg"><Phone size={18} className="mr-2" />{SITE.phone}</ButtonLink>
          </div>
        </div>
      </section>
    </article>
  );
}
