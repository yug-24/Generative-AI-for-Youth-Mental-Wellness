import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  mode: "login" | "signup";
}

export default function AuthForm({ mode }: Props) {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    alert(`${mode === "login" ? "Logged in" : "Account created"} (mock)`);
  };

  return (
    <div className="min-h-[70vh] grid place-items-center">
      <form onSubmit={onSubmit} className="w-full max-w-md rounded-xl border bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground">
          {mode === "login" ? "Welcome back" : "Create your account"}
        </h1>
        <p className="text-foreground/70 mt-1">
          {mode === "login" ? "We missed you. Let's continue your journey." : "Join Sahara—your safe, supportive space."}
        </p>
        <div className="mt-6 grid gap-4">
          {mode === "signup" && (
            <div>
              <label className="block text-sm font-medium text-foreground">Name</label>
              <input required className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-foreground">Email</label>
            <input type="email" required className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground">Password</label>
            <input type="password" required className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring" placeholder="••••••••" />
          </div>
          <button disabled={loading} className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground shadow hover:shadow-md disabled:opacity-60">
            {loading ? "Please wait…" : mode === "login" ? "Login" : "Create Account"}
          </button>
        </div>
        <div className="mt-4 text-sm text-foreground/80">
          {mode === "login" ? (
            <span>
              Don't have an account? <Link to="/signup" className="text-sky-700 hover:underline">Sign Up</Link>
            </span>
          ) : (
            <span>
              Already have an account? <Link to="/login" className="text-sky-700 hover:underline">Login</Link>
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
