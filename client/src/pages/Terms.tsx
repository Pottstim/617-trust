import { SITE } from "@/lib/siteData";

export default function Terms() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <p className="font-mono text-xs tracking-[0.04em] uppercase text-[var(--color-drafting-blue)] mb-6">
        Legal
      </p>
      <h1 className="text-balance">Terms of Service</h1>
      <p className="mt-4 text-sm text-[var(--color-smoke)]">Last updated: June 23, 2026</p>

      <div className="mt-10 space-y-8 text-[var(--color-graphite)] leading-relaxed">
        <section>
          <h2 className="text-xl font-sans font-semibold text-[var(--color-ink)] mb-3">Acceptance of Terms</h2>
          <p>
            By engaging the services of {SITE.name}, you agree to these Terms
            of Service. If you do not agree, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-sans font-semibold text-[var(--color-ink)] mb-3">Services</h2>
          <p>
            {SITE.name} provides business formation assistance, SBA funding
            consulting, web design and SEO services, and consumer credit repair
            consulting. We do not provide legal advice and are not a law firm.
            For legal matters, consult a licensed attorney.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-sans font-semibold text-[var(--color-ink)] mb-3">No Guarantee of Results</h2>
          <p>
            While we leverage our expertise to achieve the best possible
            outcomes, we cannot guarantee specific results. SBA loan approvals,
            credit score improvements, and search engine rankings depend on
            factors outside our control.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-sans font-semibold text-[var(--color-ink)] mb-3">Credit Repair Disclosure</h2>
          <p>
            Under the Credit Repair Organizations Act (CROA), we cannot charge
            for credit repair services before they are fully performed. You have
            the right to cancel within 3 business days of signing a contract
            with us. We do not guarantee the removal of accurate, verifiable, or
            timely information from your credit report.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-sans font-semibold text-[var(--color-ink)] mb-3">Payment</h2>
          <p>
            Fees for services will be disclosed and agreed upon before work
            begins. We maintain pricing transparency — no hidden fees.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-sans font-semibold text-[var(--color-ink)] mb-3">Limitation of Liability</h2>
          <p>
            {SITE.name} shall not be liable for indirect, incidental, or
            consequential damages arising from the use of our services. Our
            total liability shall not exceed the fees paid for the specific
            service giving rise to the claim.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-sans font-semibold text-[var(--color-ink)] mb-3">Contact</h2>
          <p>
            Questions about these terms? Call{" "}
            <a href={SITE.phoneHref} className="text-[var(--color-drafting-blue)] underline">
              {SITE.phone}
            </a>{" "}
            or email{" "}
            <a href={SITE.emailHref} className="text-[var(--color-drafting-blue)] underline">
              {SITE.email}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
