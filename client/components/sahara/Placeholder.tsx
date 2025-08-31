export default function Placeholder({ title }: { title: string }) {
  return (
    <div className="rounded-xl border bg-white p-8 text-center text-foreground/80">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <p className="mt-2">This section is coming next. Tell me to fill it out when you're ready.</p>
    </div>
  );
}
