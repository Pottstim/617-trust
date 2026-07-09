import { ButtonLink } from "@/components/ui/Button";
import { SITE } from "@/lib/siteData";
import { ArrowRight, Check, Phone } from "lucide-react";

export default function WebDesignSeoService() {
  return (
    <article>
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-24">
        <p className="font-mono text-xs tracking-[0.04em] uppercase text-[var(--color-drafting-blue)] mb-6">Services</p>
        <h1 className="text-balance">Web Design & SEO for North Carolina Businesses</h1>
        <p className="mt-6 text-lg leading-relaxed text-[var(--color-graphite)] text-pretty max-w-2xl">
          Professional websites that bring customers to your door—not just sit there looking pretty. Custom design, SEO built in from day one, and a partner who actually answers the phone.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-20 space-y-6 text-lg leading-relaxed text-[var(--color-graphite)]">
        <p>
          Most web designers build a site, hand it over, and disappear. Most SEO agencies write some blog posts, send a monthly report, and hope for the best. Neither approach works in 2026, when Google's algorithms reward fast-loading, well-structured, genuinely useful content—and customers expect to find you on page one or not at all.
        </p>
        <p>
          We build websites that are fast, mobile-first, SEO-optimized from the ground up, and actually generate leads—not just sit in a portfolio. Every site we build includes on-page SEO, local search optimization, Google Business Profile setup, and a content strategy. And because we understand your business (not just your website), the site we build connects to the services you offer, the customers you serve, and the goals you're chasing.
        </p>

        <h2>What's Included</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Custom website design—no templates, no generic layouts</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Mobile-responsive, fast-loading, accessible</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">On-page SEO: meta tags, schema markup, content structure</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Google Business Profile optimization and setup</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Local keyword research and content strategy</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Analytics and conversion tracking setup</span></li>
          <li className="flex items-start gap-3"><Check size={18} className="text-[var(--color-brass)] mt-0.5 shrink-0" /><span className="text-base">Monthly maintenance and updates (optional retainer)</span></li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div><p className="font-medium">How much does a business website cost?</p><p className="text-base text-[var(--color-smoke)]">Our custom websites start at $1,500 for a 5-page business site with on-page SEO. More complex sites (e-commerce, membership, custom functionality) are quoted by project. Every project includes a discovery call to scope your needs before we quote.</p></div>
          <div><p className="font-medium">How long does it take to rank on Google?</p><p className="text-base text-[var(--color-smoke)]">SEO is a marathon, not a sprint. With proper on-page optimization and local SEO, most businesses see measurable improvements in 3–6 months. We don't promise "page one in 30 days"—that's a red flag from anyone who makes that promise.</p></div>
          <div><p className="font-medium">Do you offer ongoing SEO after the site is live?</p><p className="text-base text-[var(--color-smoke)]">Yes. Our monthly SEO retainer starts at $499/month and includes content creation, link building, GBP posting, and monthly reporting. Many clients bundle this with website maintenance.</p></div>
          <div><p className="font-medium">Can you redesign my existing site?</p><p className="text-base text-[var(--color-smoke)]">Absolutely. We do more redesigns than ground-up builds. We audit your current site's SEO, preserve what's working, and rebuild everything else. No lost rankings during the transition.</p></div>
        </div>
      </section>

      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Web Design","name":"Web Design & SEO for North Carolina Businesses","provider":{"@type":"ProfessionalService","name":"617 East Trust","url":"https://617east.com"},"areaServed":{"@type":"State","name":"North Carolina"},"url":"https://617east.com/services/web-design-seo","description":"Custom web design and SEO for NC businesses. Fast, mobile-responsive websites with on-page SEO, Google Business Profile setup, and content strategy. Starting at $1,500.","offers":{"@type":"Offer","price":"1500.00","priceCurrency":"USD","description":"Custom business websites starting at $1,500 for 5-page site with on-page SEO. Monthly SEO retainer available from $499/month."},"hasFAQPage":{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does a business website cost?","acceptedAnswer":{"@type":"Answer","text":"Our custom websites start at $1,500 for a 5-page business site with on-page SEO. More complex sites are quoted by project."}},{"@type":"Question","name":"How long does it take to rank on Google?","acceptedAnswer":{"@type":"Answer","text":"With proper on-page optimization and local SEO, most businesses see measurable improvements in 3-6 months. We don't make unrealistic promises."}},{"@type":"Question","name":"Do you offer ongoing SEO after the site is live?","acceptedAnswer":{"@type":"Answer","text":"Yes. Our monthly SEO retainer starts at $499/month and includes content creation, link building, GBP posting, and monthly reporting."}},{"@type":"Question","name":"Can you redesign my existing site?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. We audit your current SEO, preserve what's working, and rebuild everything else. No lost rankings during transition."}}]}})}</script>
      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://617east.com"},{"@type":"ListItem","position":2,"name":"Services","item":"https://617east.com/services"},{"@type":"ListItem","position":3,"name":"Web Design & SEO","item":"https://617east.com/services/web-design-seo"}]})}</script>

      <section className="bg-[var(--color-ink)] text-[var(--color-paper)] py-16">
        <div className="mx-auto max-w-2xl text-center px-4">
          <h2 className="text-[var(--color-paper)]">Ready for a website that actually works?</h2>
          <p className="mt-4 text-[var(--color-ash)]">We build sites that bring customers. Not just compliments.</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row justify-center">
            <ButtonLink href="/contact" size="lg">Request a Quote <ArrowRight size={18} /></ButtonLink>
            <ButtonLink href={SITE.phoneHref} variant="ghost" size="lg"><Phone size={18} className="mr-2" />{SITE.phone}</ButtonLink>
          </div>
        </div>
      </section>
    </article>
  );
}
