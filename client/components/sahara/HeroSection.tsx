import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="container mx-auto grid lg:grid-cols-2 items-center gap-10 pt-12 pb-16">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">Your Confidential Wellness Companion</h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-xl">A safe, non-judgmental space for Indian youth to navigate life's pressures. Powered by empathetic AI.</p>
        <div className="mt-8 flex items-center gap-3">
          <Link to="/signup" className="px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold shadow hover:shadow-md transition-shadow">Get Started for Free</Link>
          <a href="#features" className="px-5 py-3 rounded-md bg-secondary text-secondary-foreground font-semibold">See Features</a>
        </div>
      </div>
      <div className="relative">
        <svg viewBox="0 0 400 400" className="w-full h-auto" aria-hidden>
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="160" fill="url(#g1)" opacity="0.35" />
          <circle cx="120" cy="140" r="80" fill="url(#g1)" opacity="0.35" />
          <circle cx="275" cy="260" r="100" fill="url(#g1)" opacity="0.25" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-2xl bg-white/60 backdrop-blur p-6 shadow-sm border text-center max-w-xs">
            <p className="text-sm font-medium text-foreground">“You are not alone. Let's take this one small step at a time.”</p>
          </div>
        </div>
      </div>
    </section>
  );
}
