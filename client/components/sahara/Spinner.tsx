export default function Spinner({ size=20 }: { size?: number }) {
  const s = `${size}px`;
  return (
    <svg viewBox="0 0 50 50" width={s} height={s} className="animate-spin text-foreground/50">
      <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="5" fill="none" opacity="0.2"/>
      <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="5" fill="none" strokeDasharray="100" strokeDashoffset="60"/>
    </svg>
  );
}
