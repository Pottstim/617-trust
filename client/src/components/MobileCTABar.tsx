import { Phone, MessageSquare, Mail } from "lucide-react";
import { SITE } from "@/lib/siteData";

/** Fixed mobile-only CTA bar — thumb-zone optimized */
export default function MobileCTABar() {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[var(--color-ink)] grid grid-cols-3 border-t border-white/10">
      <a
        href={SITE.phoneHref}
        className="flex flex-col items-center justify-center py-3 text-[var(--color-paper)] active:bg-white/5"
      >
        <Phone size={18} className="text-[var(--color-brass)]" />
        <span className="mt-1 text-[10px] tracking-wide">Call Now</span>
      </a>
      <a
        href={SITE.smsHref}
        className="flex flex-col items-center justify-center py-3 text-[var(--color-paper)] active:bg-white/5 border-x border-white/10"
      >
        <MessageSquare size={18} className="text-[var(--color-sage)]" />
        <span className="mt-1 text-[10px] tracking-wide">Text Us</span>
      </a>
      <a
        href={SITE.emailHref}
        className="flex flex-col items-center justify-center py-3 text-[var(--color-paper)] active:bg-white/5"
      >
        <Mail size={18} className="text-[var(--color-drafting-blue)]" />
        <span className="mt-1 text-[10px] tracking-wide">Email</span>
      </a>
    </div>
  );
}
