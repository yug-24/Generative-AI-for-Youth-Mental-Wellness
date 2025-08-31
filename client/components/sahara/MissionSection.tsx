export default function MissionSection() {
  return (
    <section id="mission" className="container mx-auto py-16">
      <div className="rounded-2xl border bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-foreground">Why Sahara?</h2>
        <p className="mt-4 text-foreground/80 leading-relaxed">
          Indian youth often carry the weight of academic pressure, family expectations, and social stigma around mental health. Sahara exists to change that—by offering a safe, confidential, and culturally aware space to pause, reflect, and grow.
        </p>
        <ul className="mt-6 grid gap-3 text-foreground/80">
          <li>• Confidential, judgment-free support available 24/7</li>
          <li>• Private journaling with options for text and voice notes</li>
          <li>• Skill-building tools to practice tough conversations</li>
          <li>• Curated resources tailored to your context and needs</li>
        </ul>
      </div>
    </section>
  );
}
