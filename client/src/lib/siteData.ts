/**
 * 617 East Trust — centralized brand + content data.
 * Enhanced: marketing psychology, anti-slop, taste-skill compliant.
 */

export type Phase = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  included: string[];
  closingLine: string;
  icon: string;
  color: string;
};

export const PHASES: Phase[] = [
  {
    id: "form",
    index: "01",
    name: "Form",
    tagline: "Stand up straight before you run.",
    description: "Formation is where most businesses get quietly misbuilt — the wrong entity, the missing license, the registered agent nobody monitors. We do it right once, and we tell you when not to incorporate at all.",
    icon: "building",
    included: [
      "Entity Formation (LLC, S-Corp, C-Corp, Nonprofit)",
      "Compliance Calendar Setup",
      "Registered Agent Services",
      "Business Banking & Treasury Setup",
      "Credit Building Strategy",
      "Business Plan Writing",
      "Trademark Filing",
      "Insurance Needs Analysis",
      "Initial HR & Employee Handbook Setup",
    ],
    closingLine: "You don’t just get filed. You get positioned — and warned about the three mistakes that sink most new entities in their first year.",
    color: "var(--color-drafting-blue)",
  },
  {
    id: "grow",
    index: "02",
    name: "Grow",
    tagline: "Spend where it compounds, not where it shines.",
    description: "Most growth money is wasted on the wrong channel or the loan you did not need. We model the math first and tell you which opportunities to walk away from.",
    icon: "trending",
    included: [
      "SBA Loan Consulting & Application Support",
      "Financial Projections & Cash Flow Modeling",
      "Website Design & Development",
      "SEO & Local Search Optimization",
      "Paid Advertising Management (Google & Meta)",
      "Content Marketing & Social Media",
      "Grant Writing & Alternative Funding",
      "Reputation Management & Review Generation",
    ],
    closingLine: "Funding and visibility — built by someone who reads your model before touching a channel, and who tells you when to hold the spend.",
    color: "var(--color-brass)",
  },
  {
    id: "maintain",
    index: "03",
    name: "Maintain",
    tagline: "The quiet after launch is where businesses die.",
    description: "Compliance lapses, cash-flow drift, the annual report nobody filed — this is the unglamorous work nobody else stays for, and the reason most small businesses quietly fail in years 2 through 5.",
    icon: "shield",
    included: [
      "Monthly Bookkeeping & Accounting",
      "Annual Report Filings & Compliance Monitoring",
      "Fractional CFO Services (Forecasting, KPIs, Lender Reporting)",
      "Tax Planning & CPA Coordination",
      "Ongoing Compliance Monitoring",
      "Business Valuation",
      "Succession & Exit Planning",
      "Quarterly Business Reviews",
    ],
    closingLine: "Formation is a Tuesday. Growth is a season. Maintenance is the life of the business — and it is the part almost no one stays for, which is exactly why we do.",
    color: "var(--color-sage)",
  },
];

export type Testimonial = { quote: string; name: string; role: string; location: string; detail: string; };

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "617 East Trust helped me form my LLC, build my first real website, and secure an SBA loan — all in the same quarter. Robert at the cabinetry shop referred me, and I’m referring everyone I know.",
    name: "Sarah M.", role: "Retail Owner", location: "Pinehurst, NC", detail: "Formation + Web + SBA Client",
  },
  {
    quote: "They didn’t just file paperwork and leave. Six months in, they caught a compliance issue I didn’t even know about. That’s the difference.",
    name: "Robert M.", role: "Cabinetry Shop Owner", location: "Sandhills, NC", detail: "Formation + Maintain Client",
  },
  {
    quote: "The fractional CFO service changed how I run my business. I finally have forecasts I trust and someone who actually reads my numbers with me every quarter.",
    name: "James T.", role: "Service Company Owner", location: "Raleigh, NC", detail: "Fractional CFO + Maintain Client",
  },
  {
    quote: "I came for formation. I stayed for the bookkeeping. Best decision I made.",
    name: "Maria L.", role: "Restaurant Owner", location: "Fayetteville, NC", detail: "Formation + Maintain Client",
  },
];

export const HERO_TRUST_SIGNALS: Testimonial[] = [
  { quote: "They treated my business like it mattered.", name: "Sarah M.", role: "", location: "Pinehurst, NC", detail: "" },
  { quote: "Finally, someone who answers the phone.", name: "James T.", role: "", location: "Raleigh, NC", detail: "" },
  { quote: "Caught a compliance issue I didn’t even know about.", name: "Robert M.", role: "", location: "Sandhills, NC", detail: "" },
];

export const COMPARISON_ROWS: { label: string; platform: string; consultant: string; trust: string }[] = [
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
];

export const STEPS: { num: string; title: string; body: string }[] = [
  { num: "01", title: "Conversation", body: "We start with a conversation, not a form. Tell us about your business, your goals, your challenges. We’ll tell you honestly if we can help and exactly how." },
  { num: "02", title: "Strategy", body: "We build a custom plan from your actual situation — the right mix of technology and human judgment. No templates. No one-size-fits-all." },
  { num: "03", title: "Partnership", body: "We execute fast, communicate clearly, and stick around. This isn’t a transaction — it’s a relationship." },
];

export const PROBLEM_STATS: { value: string; label: string; source?: string }[] = [
  { value: "20%", label: "of small businesses fail within the first two years", source: "BLS 2024" },
  { value: "50%", label: "fail by year five — most from operational drift, not bad ideas", source: "BLS 2024" },
  { value: "82%", label: "of small business failures trace back to cash flow problems", source: "U.S. Bank study" },
];

export const TRUST_BADGES: string[] = [
  "North Carolina Small Business Association Member",
  "Charlotte Chamber of Commerce",
  "Sandhills Business Network",
  "BBB A+ Rating",
  "Google 5-Star Rating",
];

export const CREDENTIALS: string[] = [
  "15+ years in Charlotte commercial banking",
  "UNC Charlotte graduate — Sandhills native, Charlotte banking veteran",
  "Sandhills, NC native and current resident",
  "SBA lending expertise from the lender side",
  "Web development and SEO certification",
  "Credit repair specialist certification",
];

export const FAQ_ITEMS: { q: string; a: string }[] = [
  { q: "How do I qualify for an SBA loan in North Carolina?", a: "To qualify for an SBA loan in North Carolina, your business must be for-profit, operate in the US, have reasonable owner equity to invest, and have exhausted other financing options. 617 East Trust helps you assess eligibility and navigate the application process for SBA 7(a), 504, and Microloan programs." },
  { q: "How long does credit repair take?", a: "Credit repair timelines vary based on the nature of the negative items on your report. Most clients see measurable improvements within 30–90 days. Under the Fair Credit Reporting Act, credit bureaus have 30 days to investigate disputes." },
  { q: "Does 617 East Trust guarantee credit repair results?", a: "No. Under the Credit Repair Organizations Act (CROA), no credit repair company may legally guarantee removal of accurate negative information. 617 East Trust provides legal dispute services under the Fair Credit Reporting Act." },
  { q: "What credit score is needed for an SBA 7(a) loan?", a: "Most SBA 7(a) lenders look for a personal credit score of at least 640–680, though requirements vary by lender and loan amount. Business credit history, cash flow, and collateral also factor into approval." },
  { q: "How is 617 East Trust different from LegalZoom?", a: "Unlike national platforms, 617 East Trust provides personalized, hands-on support from a team with 15+ years of Charlotte commercial banking experience. We answer the phone, know the local SBA lenders personally, and stay with you after the paperwork is done." },
  { q: "Will you tell me not to do something?", a: "Yes — often. The most valuable thing we do is tell you what not to do: the entity you don’t need, the loan that doesn’t pencil out, the ad spend that won’t return. We’re paid to protect your downside, not just to sell the next step." },
];

export const CASE_STUDIES = [
  { outcome: '(K SBA 7(a) loan secured in 47 days', client: 'Cabinetry manufacturer', location: 'Southern Pines, NC', detail: 'Transferred from a denied application at a national bank. Restructured financials, prepared lender-ready package, secured approval with a preferred SBA lender.' },
  { outcome: 'Credit score improved 132 points in 90 days', client: 'Restaurant owner', location: 'Fayetteville, NC', detail: 'Identified 11 inaccurate items across three bureaus. Filed disputes under FCRA. Removed 9 of 11, resulting in qualification for an SBA Microloan.' },
  { outcome: 'LLC formed, website launched, first $15K booked in 60 days', client: 'Consulting startup', location: 'Raleigh, NC', detail: 'Same-day LLC filing, custom website with SEO, Google Business Profile setup, and foundational marketing launched in under two months.' },
  { outcome: 'Saved $4,200/year in compliance penalties', client: 'Property management firm', location: 'Charlotte, NC', detail: 'Caught missed annual reports across three entities during onboarding. Brought all into good standing, built automated compliance calendar, and transitioned to monthly bookkeeping.' }
];
export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Our Story", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SITE = {
  name: "617 East Trust",
  domain: "617east.com",
  phone: "(910) 315-1800",
  phoneHref: "tel:+19103151800",
  email: "hello@617east.com",
  emailHref: "mailto:hello@617east.com",
  smsHref: "sms:+19103151800",
  location: "Sandhills, North Carolina",
  servingArea: "Based in the Sandhills. Serving the Sandhills, Raleigh, Fayetteville, and Charlotte regions.",
  thesis: "Technology builds fast. People build trust.",
  thesisFull: "Technology builds fast. People build trust. We’re the people who stay.",
  preHeader: "617 East Trust — Business consulting, credit repair & entity formation",
  trustBar: "The steward of the quiet after.",
  logoMark: "Form. Grow. Maintain.",
  founder: {
    name: "Lamont Legrand",
    photo: "/images/founder.jpg",
    linkedin: "",
    bio: "15+ years in Charlotte commercial banking. UNC Charlotte graduate — Sandhills native who came home to build something that lasts."
  },
  address: {
    street: "Sandhills",
    locality: "Sandhills",
    region: "NC",
    postalCode: "",
    country: "US",
    full: "Sandhills, North Carolina"
  },
  phases: PHASES,
  testimonials: TESTIMONIALS,
  trustBadges: TRUST_BADGES,
  heroTrustSignals: HERO_TRUST_SIGNALS,
  howItWorks: STEPS,
  services: PHASES.map((p) => ({ slug: p.id, name: p.name })),
  ogImage: "https://617east.com/og-image.jpg",
} as const;
