import { ButtonLink } from "@/components/ui/Button";
import { SITE } from "@/lib/siteData";
import { ArrowRight, Check, Phone } from "lucide-react";

export default function SbaLoansNorthCarolinaService() {
  return (
    <article>
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-24">
        <p className="font-mono text-xs tracking-[0.04em] uppercase text-[var(--color-drafting-blue)] mb-6">Services</p>
        <h1 className="text-balance">SBA Loans & Funding in North Carolina</h1>
        <p className="mt-6 text-lg leading-relaxed text-[var(--color-graphite)] text-pretty max-w-2xl">
          We help North Carolina small businesses navigate SBA lending—from eligibility assessment through application, packaging, and lender matching. Real expertise from someone who spent 15 years on the lending side.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-20 space-y-6 text-lg leading-relaxed text-[var(--color-graphite)]">
        <p>
          The SBA guarantees over $30 billion in small business loans each year, yet most small business owners never apply—because the process is intimidating, the paperwork is dense, and the rejection rate for first-time applicants is high. That's where we come in.
        </p>
        <p>
          We don't just hand you a checklist and wish you luck. We prepare your application with the same rigor a commercial lender would apply, because we know what lenders are actually looking for. Cash flow projections, debt service coverage ratios, collateral schedules, personal financial statements—we help you build the full package.
        </p>

        <h2>What's Included</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Eligibility assessment for SBA 7(a), 504, Microloan, and SBA Express programs</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Complete loan application preparation and packaging</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Financial projections and cash flow modeling</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Business plan writing tailored to SBA requirements</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Lender matching—we know the SBA-preferred lenders in NC personally</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Post-approval guidance on loan terms, covenants, and draw schedules</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Credit score improvement strategy (if needed before applying)</span></li>
        </ul>

        <p className="italic border-l-4 border-[var(--color-brass)] pl-6 py-2">
          We sat on the lender side for 15 years. We know what gets an application approved—and what gets it declined on page one.
        </p>

        <h2>Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div><p className="font-medium">What credit score is needed for an SBA 7(a) loan?</p><p className="text-base text-[var(--color-smoke)]">Most SBA 7(a) lenders look for a personal credit score of at least 640-680, though requirements vary by lender and loan amount. Business credit history, cash flow, and collateral also factor into approval.</p></div>
          <div><p className="font-medium">How long does the SBA loan process take?</p><p className="text-base text-[var(--color-smoke)]">A standard SBA 7(a) loan takes 60-90 days from application to funding. SBA Express loans can close in 30-45 days. We help compress timelines by submitting complete, lender-ready packages on day one.</p></div>
          <div><p className="font-medium">Can I get an SBA loan as a startup?</p><p className="text-base text-[var(--color-smoke)]">Yes, though it's more challenging. Startups typically need strong personal credit, relevant industry experience, 20-30% owner equity injection, and solid projections. We help assess viability before you invest time in the application.</p></div>
          <div><p className="font-medium">What's the difference between SBA 7(a) and 504 loans?</p><p className="text-base text-[var(--color-smoke)]">SBA 7(a) loans are for general working capital, equipment, and business acquisition—up to $5 million. SBA 504 loans are specifically for real estate and large fixed-asset purchases, with a structure that includes a bank portion, an SBA-backed CDC portion, and a borrower down payment.</p></div>
        </div>
      </section>

      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"SBA Loan Consulting","name":"SBA Loans & Funding in North Carolina","provider":{"@type":"ProfessionalService","name":"617 East Trust","url":"https://617east.com"},"areaServed":{"@type":"State","name":"North Carolina"},"url":"https://617east.com/services/sba-loans-north-carolina","description":"Expert SBA loan consulting for North Carolina businesses. SBA 7(a), 504, Microloan, and Express applications. Lender-side expertise, 15+ years in commercial banking.","offers":{"@type":"Offer","price":"999.00","priceCurrency":"USD","description":"SBA loan consulting package including eligibility assessment, application preparation, and lender matching"},"hasFAQPage":{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What credit score is needed for an SBA 7(a) loan?","acceptedAnswer":{"@type":"Answer","text":"Most SBA 7(a) lenders look for a personal credit score of at least 640-680. Business credit history and cash flow also factor into approval."}},{"@type":"Question","name":"How long does the SBA loan process take?","acceptedAnswer":{"@type":"Answer","text":"A standard SBA 7(a) loan takes 60-90 days from application to funding. SBA Express loans can close in 30-45 days."}},{"@type":"Question","name":"Can I get an SBA loan as a startup?","acceptedAnswer":{"@type":"Answer","text":"Yes, though startups need strong personal credit, relevant industry experience, 20-30% owner equity injection, and solid projections."}},{"@type":"Question","name":"What's the difference between SBA 7(a) and 504 loans?","acceptedAnswer":{"@type":"Answer","text":"7(a) loans are for general working capital up to $5 million. 504 loans are for real estate and large fixed-asset purchases with a CDC-backed structure."}}]}})}</script>
      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://617east.com"},{"@type":"ListItem","position":2,"name":"Services","item":"https://617east.com/services"},{"@type":"ListItem","position":3,"name":"SBA Loans & Funding","item":"https://617east.com/services/sba-loans-north-carolina"}]})}</script>

      <section className="bg-[var(--color-ink)] text-[var(--color-paper)] py-16">
        <div className="mx-auto max-w-2xl text-center px-4">
          <h2 className="text-[var(--color-paper)]">Ready to explore SBA funding?</h2>
          <p className="mt-4 text-[var(--color-ash)]">Free eligibility assessment. Real answers from someone who's been on both sides of the desk.</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row justify-center">
            <ButtonLink href="/contact" size="lg">Get Started <ArrowRight size={18} /></ButtonLink>
            <ButtonLink href={SITE.phoneHref} variant="ghost" size="lg"><Phone size={18} className="mr-2" />{SITE.phone}</ButtonLink>
          </div>
        </div>
      </section>
    </article>
  );
}
