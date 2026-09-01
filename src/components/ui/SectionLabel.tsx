type SectionLabelProps = {
  children: string;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
      {children}
    </p>
  );
}
