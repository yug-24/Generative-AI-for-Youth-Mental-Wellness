import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  if (isDashboard) return null; // Dashboard has its own sidebar layout
  return (
    <header className="border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">S</span>
          <span className="font-extrabold tracking-tight text-xl text-foreground">Sahara</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">Features</a>
          <a href="#mission" className="text-foreground/80 hover:text-foreground transition-colors">Our Mission</a>
        </nav>
        <div className="flex items-center gap-3">
          <NavLink to="/login" className={({ isActive }) => cn("px-3 py-2 rounded-md text-sm font-medium", isActive ? "text-foreground" : "text-foreground/80 hover:text-foreground")}>Login</NavLink>
          <NavLink to="/signup" className={({ isActive }) => cn("px-4 py-2 rounded-md text-sm font-semibold bg-primary text-primary-foreground shadow hover:shadow-md transition-shadow", isActive ? "ring-2 ring-ring" : "")}>Sign Up Free</NavLink>
        </div>
      </div>
    </header>
  );
}
