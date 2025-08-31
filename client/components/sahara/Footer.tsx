import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  if (isDashboard) return null;
  return (
    <footer className="border-t mt-16 bg-background">
      <div className="container mx-auto py-10 grid gap-6 sm:grid-cols-2 items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">S</span>
            <span className="font-extrabold tracking-tight text-xl text-foreground">Sahara</span>
          </div>
          <p className="text-sm text-foreground/70 mt-3 max-w-md">A confidential, non-judgmental companion for Indian youth. This is a supportive space—always.</p>
        </div>
        <div className="flex sm:justify-end items-center gap-6">
          <Link to="/privacy" className="text-sm text-foreground/80 hover:text-foreground">Privacy Policy</Link>
          <Link to="/terms" className="text-sm text-foreground/80 hover:text-foreground">Terms of Service</Link>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="text-foreground/70 hover:text-foreground"><Twitter size={18} /></a>
            <a href="#" aria-label="Facebook" className="text-foreground/70 hover:text-foreground"><Facebook size={18} /></a>
            <a href="#" aria-label="Instagram" className="text-foreground/70 hover:text-foreground"><Instagram size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
