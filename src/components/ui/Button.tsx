import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "signal" | "outline" | "navy";

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: Variant;
};

const variants: Record<Variant, string> = {
  signal:
    "bg-signal text-ink hover:bg-signalDark border border-transparent shadow-[0_8px_24px_rgba(244,180,0,0.28)]",
  outline:
    "bg-transparent text-bone border border-white/70 hover:bg-white hover:text-navy",
  navy: "bg-navy text-bone hover:bg-steel border border-transparent",
};

export function Button({
  variant = "signal",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 text-center font-display text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal sm:px-6 sm:text-sm sm:tracking-[0.18em] ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
