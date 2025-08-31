export default function DashboardHome() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">Welcome back, Aanya!</h1>
      <p className="text-foreground/70">Ready to take a moment for yourself today?</p>
      <div className="grid gap-3 sm:grid-cols-3">
        <a href="/dashboard/chat" className="rounded-xl border p-5 bg-white hover:shadow-md transition-shadow font-semibold">Start a New Chat</a>
        <a href="/dashboard/journal" className="rounded-xl border p-5 bg-white hover:shadow-md transition-shadow font-semibold">Write in Your Journal</a>
        <a href="/dashboard/resources" className="rounded-xl border p-5 bg-white hover:shadow-md transition-shadow font-semibold">Explore Resources</a>
      </div>
    </div>
  );
}
