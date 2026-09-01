type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  tone = "light",
}: SectionHeaderProps) {
  const titleColor = tone === "dark" ? "text-bone" : "text-navy";
  const eyeColor = tone === "dark" ? "text-signal" : "text-steel";
  const descColor = tone === "dark" ? "text-bone/80" : "text-ink/70";

  return (
    <div className="max-w-3xl">
      <p className={`font-mono text-[11px] tracking-[0.28em] ${eyeColor}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-semibold uppercase leading-[1.1] tracking-tight sm:text-5xl ${titleColor}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed ${descColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
