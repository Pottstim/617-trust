/**
 * 617 East Trust — centralized brand + content data.
 * Source of truth for the brand strategy master document.
 */

export type Service = {
  id: string;
  slug: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  included: string[];
  difference: string;
  cta: string;
  flagship?: boolean;
  leadGen?: boolean;
};

export const SERVICES: Service[] = [
  {
    id: "business-formation",
    slug: "business-formation",
    index: "01",
    name: "Business Formation",
    tagline: "Filed in Minutes by Tech. Supported for Years by People.",
    description:
      "Start your business the right way. We file your LLC or corporation with the Secretary of State in 24 hours, then stick around to help you navigate EIN applications, operating agreements, and compliance deadlines.",
    included: [
      "Entity selection consultation",
      "Name availability search",
      "Articles of Organization filing",
      "EIN acquisition",
      "Operating agreement templates",
      "Compliance calendar setup",
    ],
    difference:
      "Platforms file and forget. We file and follow up. Six months later, when you get your first compliance notice, you'll still have our number.",
    cta: "Form Your Business",
  },
  {
    id: "sba-funding",
    slug: "sba-funding",
    index: "02",
    name: "SBA Funding & Capital",
    tagline: "Tech Finds the Capital. People Get You Approved.",
    description:
      "SBA loans are the best capital source for small businesses — and the hardest to secure. After 15 years in Charlotte banking, we know what lenders actually want to see. We use technology to match you with the right SBA program and lender, then use relationships to advocate for your approval.",
    included: [
      "Pre-qualification assessment (no credit pull)",
      "SBA program selection (7(a), 504, Microloan)",
      "Lender matching",
      "Application package preparation",
      "Financial projections and cash flow analysis",
      "Lender relationship management",
    ],
    difference:
      "Most consultants fill out forms. We make phone calls. When your application needs clarification, we know exactly who to talk to and what they need to hear.",
    cta: "Get Pre-Qualified",
    flagship: true,
  },
  {
    id: "web-design-seo",
    slug: "web-design-seo",
    index: "03",
    name: "Web Design & SEO",
    tagline: "Algorithms Rank You. People Make You Matter.",
    description:
      "Your website isn't a digital brochure — it's your 24/7 sales representative. We build fast, beautiful, conversion-focused websites that rank in search results and turn visitors into customers.",
    included: [
      "Custom website design (no templates)",
      "Mobile-first responsive development",
      "Technical SEO foundation",
      "Content strategy and copywriting",
      "Local SEO optimization",
      "Google Business Profile setup",
      "Monthly performance reporting",
    ],
    difference:
      "Agencies build websites. We build business tools. Every design decision ties back to your revenue goals.",
    cta: "Get a Free Website Audit",
    leadGen: true,
  },
  {
    id: "consumer-credit",
    slug: "consumer-credit",
    index: "04",
    name: "Consumer Consulting & Credit Repair",
    tagline: "Software Reads the Data. People Fix the Future.",
    description:
      "Bad credit isn't a moral failing — it's a solvable problem. We use technology to analyze your credit profile and human expertise to dispute inaccuracies and build positive history.",
    included: [
      "Comprehensive credit report analysis",
      "Dispute strategy and execution",
      "Creditor negotiation support",
      "Credit building roadmap",
      "Monthly progress tracking",
      "SBA loan preparation (credit-focused)",
    ],
    difference:
      "Automated dispute services send template letters. We craft strategic disputes based on consumer law and creditor psychology.",
    cta: "Fix Your Credit",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  detail: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I used LegalZoom to form my first business. When I needed an SBA loan, they couldn't help. 617 East Trust not only got me approved — they got me approved with a lender I'd never have found on my own. And they answered the phone at 6 PM when I panicked about paperwork.",
    name: "Jennifer K.",
    role: "Restaurant Owner",
    location: "Charlotte, NC",
    detail: "$350K SBA 7(a) Loan",
  },
  {
    quote:
      "Our website was a template disaster. 617 rebuilt it, optimized it, and within 3 months we were ranking #1 for 'custom cabinetry Raleigh.' But the real value? They actually understand our business. Our project manager knows what a dovetail joint is.",
    name: "Robert M.",
    role: "Custom Furniture Business Owner",
    location: "Raleigh, NC",
    detail: "Web Design + SEO Client",
  },
  {
    quote:
      "After a divorce destroyed my credit, I thought I'd never qualify for business funding. They didn't just dispute errors — they taught me how to rebuild. Six months later, I'm pre-approved for my first SBA loan. Changed my life.",
    name: "Amanda T.",
    role: "Small Business Owner",
    location: "Wilmington, NC",
    detail: "Credit Repair + SBA Funding Client",
  },
];

export const HERO_TRUST_SIGNALS: Testimonial[] = [
  { quote: "They treated my business like it mattered.", name: "Sarah M.", role: "", location: "Raleigh, NC", detail: "" },
  { quote: "Finally, someone who answers the phone.", name: "James T.", role: "", location: "Charlotte, NC", detail: "" },
  { quote: "Got my SBA loan approved when the banks said no.", name: "Marcus R.", role: "", location: "Wilmington, NC", detail: "" },
];

export const COMPARISON_ROWS: { label: string; platform: string; consultant: string; trust: string }[] = [
  { label: "Speed", platform: "⚡⚡⚡⚡⚡", consultant: "⚡⚡", trust: "⚡⚡⚡⚡⚡" },
  { label: "Technology", platform: "Cutting-edge", consultant: "Outdated", trust: "Cutting-edge" },
  { label: "Human Relationship", platform: "❌ None", consultant: "✅ Handshake", trust: "✅ Partnership" },
  { label: "Availability", platform: "24/7 dashboard", consultant: "9–5, maybe", trust: "Direct phone/text" },
  { label: "Industry Knowledge", platform: "Generic", consultant: "Local experience", trust: "Banking + tech" },
  { label: "Pricing Transparency", platform: "Hidden fees", consultant: '"It depends"', trust: "Clear, upfront" },
  { label: "What You Get", platform: "A login", consultant: "A handshake", trust: "A partner" },
];

export const STEPS: { num: string; title: string; body: string }[] = [
  {
    num: "01",
    title: "Conversation",
    body: "We start with a conversation, not a form. Tell us about your business, your goals, your challenges. We'll tell you honestly if we can help and exactly how.",
  },
  {
    num: "02",
    title: "Strategy",
    body: "We build a custom plan using the right mix of technology and human expertise. No templates. No one-size-fits-all. Your business is unique — your solution should be too.",
  },
  {
    num: "03",
    title: "Partnership",
    body: "We execute fast, communicate clearly, and stick around. This isn't a transaction — it's a relationship. When you need us next month or next year, we're here.",
  },
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
  "UNC Charlotte graduate",
  "Sandhills, NC native and current resident",
  "SBA lending expertise from the lender side",
  "Web development and SEO certification",
  "Credit repair specialist certification",
];

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Our Story", href: "/about" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
];

export const SITE = {
  name: "617 East Trust",
  domain: "617easttrust.com",
  phone: "(910) 315-1800",
  phoneHref: "tel:+19103151800",
  email: "hello@617easttrust.com",
  emailHref: "mailto:hello@617easttrust.com",
  smsHref: "sms:+19103151800",
  location: "Sandhills, North Carolina",
  servingArea: "Based in North Carolina. Serving businesses nationwide.",
  // Primary thesis line (logo mark / footer)
  thesis: "Technology Builds Fast. People Build Trust.",
  thesisFull: "Technology Builds Everything Faster. People Build the One Thing That Lasts: Trust.",
  preHeader: "Powered by Technology. Delivered by People.",
  trustBar: "Real People. Real Answers. Every time.",
  logoMark: "People First. In a Technology World.",
  // Content collections (attached for SITE.* access in pages)
  services: SERVICES,
  testimonials: TESTIMONIALS,
  trustBadges: TRUST_BADGES,
  credentials: CREDENTIALS,
} as const;
