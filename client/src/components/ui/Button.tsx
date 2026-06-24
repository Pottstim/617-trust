import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "dark";
type Size = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

const variants: Record<Variant, string> = {
  // Brass fill — the "human/trust" side
  primary:
    "bg-[var(--color-brass)] text-[var(--color-chalk)] hover:shadow-[var(--shadow-warm)] hover:brightness-110",
  // Drafting blue border — the "technology" side
  ghost:
    "bg-transparent text-[var(--color-drafting-blue)] border border-[var(--color-drafting-blue)] hover:bg-[var(--color-drafting-blue)] hover:text-[var(--color-chalk)]",
  // Ink fill — strong contrast
  dark:
    "bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-graphite)]",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium tracking-tight rounded-[var(--radius-pill)] transition-all duration-[var(--transition-base)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-drafting-blue)]",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";

/** Link styled as a button */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium tracking-tight rounded-[var(--radius-pill)] transition-all duration-[var(--transition-base)] cursor-pointer",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </a>
  );
}
