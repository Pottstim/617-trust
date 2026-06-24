import { SITE } from "@/lib/siteData";

export default function Privacy() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 prose-headings:font-serif">
      <p className="font-mono text-xs tracking-[0.04em] uppercase text-[var(--color-drafting-blue)] mb-6">
        Legal
      </p>
      <h1 className="text-balance">Privacy Policy</h1>
      <p className="mt-4 text-sm text-[var(--color-smoke)]">Last updated: June 23, 2026</p>

      <div className="mt-10 space-y-8 text-[var(--color-graphite)] leading-relaxed">
        <Section title="Information We Collect">
          <p>
            {SITE.name} collects information you provide directly — including
            your name, email address, phone number, and any details you share
            about your business when you contact us or submit a consultation
            request. For credit repair clients, we may collect sensitive
            financial information necessary to provide our services.
          </p>
        </Section>

        <Section title="How We Use Your Information">
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to your inquiries and provide consulting services</li>
            <li>To prepare SBA loan applications, business formation filings, and credit disputes</li>
            <li>To communicate with you about your matter and our services</li>
            <li>To comply with legal and regulatory obligations</li>
          </ul>
        </Section>

        <Section title="Information Sharing">
          <p>
            We do not sell your personal information. We may share your
            information with lenders, credit bureaus, and government agencies
            (such as the Secretary of State or SBA) only as necessary to
            provide the services you request. We may also disclose information
            when required by law.
          </p>
        </Section>

        <Section title="FCRA Notice (Credit Repair Clients)">
          <p>
            Pursuant to the Fair Credit Reporting Act (FCRA), you have the
            right to obtain a copy of your credit report from each of the three
            major credit bureaus (Equifax, Experian, TransUnion) once every 12
            months at no cost by visiting{" "}
            <a href="https://www.annualcreditreport.com" className="text-[var(--color-drafting-blue)] underline">
              annualcreditreport.com
            </a>
            . You have the right to dispute inaccurate information on your
            credit report directly with the credit bureaus, free of charge.
          </p>
          <p className="mt-3">
            {SITE.name} does not charge upfront fees for credit repair services
            before any services are fully performed, in compliance with the
            Credit Repair Organizations Act (CROA).
          </p>
        </Section>

        <Section title="Data Security">
          <p>
            We implement reasonable technical and organizational measures to
            protect your information. However, no method of transmission or
            storage is completely secure.
          </p>
        </Section>

        <Section title="Your Rights">
          <p>
            You may request access to, correction of, or deletion of your
            personal information by contacting us at{" "}
            <a href={SITE.emailHref} className="text-[var(--color-drafting-blue)] underline">
              {SITE.email}
            </a>
            .
          </p>
        </Section>

        <Section title="Contact Us">
          <p>
            Questions about this policy? Call us at{" "}
            <a href={SITE.phoneHref} className="text-[var(--color-drafting-blue)] underline">
              {SITE.phone}
            </a>
            . We answer.
          </p>
        </Section>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-sans font-semibold text-[var(--color-ink)] mb-3">{title}</h2>
      <div className="space-y-3 text-base">{children}</div>
    </section>
  );
}
