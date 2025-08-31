import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import InputField from "./ui/InputField";
import Card from "./ui/Card";

interface Props {
  mode: "login" | "signup";
}

export default function AuthForm({ mode }: Props) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[70vh] grid place-items-center">
      <Card className="w-full max-w-md">
        <form onSubmit={onSubmit}>
          <h1 className="text-2xl font-bold text-foreground">
            {mode === "login" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="text-foreground/70 mt-1">
            {mode === "login"
              ? "We missed you. Let's continue your journey."
              : "Join Sahara—your safe, supportive space."}
          </p>
          <div className="mt-6 grid gap-4">
            {mode === "signup" && (
              <InputField label="Name" required placeholder="Your name" />
            )}
            <InputField
              type="email"
              label="Email"
              required
              placeholder="you@example.com"
            />
            <InputField
              type="password"
              label="Password"
              required
              placeholder="••••••••"
            />
            <Button type="submit" disabled={loading} className="mt-2">
              {loading
                ? "Please wait…"
                : mode === "login"
                  ? "Login"
                  : "Create Account"}
            </Button>
          </div>
          <div className="mt-4 text-sm text-foreground/80">
            {mode === "login" ? (
              <span>
                Don't have an account?{" "}
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
        </form>
      </Card>
    </div>
  );
}
