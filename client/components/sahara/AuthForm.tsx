import { useNavigate, Link } from "react-router-dom";

interface Props {
  mode: "login" | "signup";
}

import Button from "./ui/Button";
import InputField from "./ui/InputField";
import Card from "./ui/Card";

export default function AuthForm({ mode }: Props) {
  const navigate = useNavigate();

  const handleTesterLogin = () => {
    // Save a fake tester account in localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({ name: "Tester", email: "tester@sahara.com" })
    );

    // Redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[70vh] grid place-items-center">
      <div className="w-full max-w-md rounded-xl border bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground">
          {mode === "login" ? "Welcome back" : "Create your account"}
        </h1>
        <p className="text-foreground/70 mt-1">
          {mode === "login"
            ? "Login instantly as a tester without credentials."
            : "Join Sahara—your safe, supportive space."}
        </p>

        {mode === "login" ? (
          <div className="mt-6 space-y-4">
            <button
              onClick={handleTesterLogin}
              className="w-full rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground shadow hover:shadow-md"
            >
              🚀 Login as Tester
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleTesterLogin();
            }}
            className="mt-6 grid gap-4"
          >
            <div>
              <label className="block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                required
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                type="email"
                required
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">
                Password
              </label>
              <input
                type="password"
                required
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="••••••••"
              />
            </div>
            <button className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground shadow hover:shadow-md">
              Create Account (Mock)
            </button>
          </form>
        )}

        <div className="mt-4 text-sm text-foreground/80">
          {mode === "login" ? (
            <span>
              Don’t have an account?{" "}
              <Link to="/signup" className="text-sky-700 hover:underline">
                Sign Up
              </Link>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <Link to="/login" className="text-sky-700 hover:underline">
                Login
              </Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
