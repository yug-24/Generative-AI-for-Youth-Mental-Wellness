import { Book, Compass, MessageCircle, Scale } from "lucide-react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: <MessageCircle className="text-sky-600" />,
    title: "Empathetic Listener",
    description:
      "Chat anytime with an AI companion that understands and supports you without judgment.",
  },
  {
    icon: <Book className="text-emerald-600" />,
    title: "'My Story' Journal",
    description:
      "Express yourself freely with text and voice notes in a private, encrypted journal.",
  },
  {
    icon: <Scale className="text-orange-600" />,
    title: "'Bridge Builder'",
    description:
      "Practice difficult conversations in a safe space to build real-world communication skills.",
  },
  {
    icon: <Compass className="text-sky-700" />,
    title: "'Pathfinder' Resources",
    description:
      "Discover personalized, culturally relevant articles and exercises to build resilience.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-foreground text-center">What Sahara Offers</h2>
      <p className="text-foreground/70 text-center mt-2 max-w-2xl mx-auto">
        Designed with empathy and privacy at its core—to support India's youth in their everyday journeys.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-md bg-secondary/70 flex items-center justify-center mb-4">
              {f.icon}
            </div>
            <h3 className="font-semibold text-lg text-foreground">{f.title}</h3>
            <p className="text-sm text-foreground/80 mt-2">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
