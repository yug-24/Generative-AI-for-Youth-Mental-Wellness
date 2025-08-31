import { LogOut, Home, MessageCircle, BookOpen, Compass, LineChart, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive ? "bg-secondary text-foreground" : "text-foreground/80 hover:text-foreground hover:bg-secondary/70"}`;

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col border-r min-h-screen p-4 bg-white">
      <div className="flex items-center gap-2 mb-6">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">S</span>
        <div className="leading-tight">
          <p className="font-bold">Hi, Aanya</p>
          <p className="text-xs text-foreground/60">You're doing great</p>
        </div>
      </div>
      <nav className="grid gap-1">
        <NavLink to="/dashboard" className={linkClasses}><Home size={18}/> Home</NavLink>
        <NavLink to="/dashboard/chat" className={linkClasses}><MessageCircle size={18}/> Chat</NavLink>
        <NavLink to="/dashboard/journal" className={linkClasses}><BookOpen size={18}/> Journal</NavLink>
        <NavLink to="/dashboard/resources" className={linkClasses}><Compass size={18}/> Resources</NavLink>
        <NavLink to="/dashboard/journey" className={linkClasses}><LineChart size={18}/> My Journey</NavLink>
        <NavLink to="/dashboard/settings" className={linkClasses}><Settings size={18}/> Settings</NavLink>
      </nav>
      <div className="mt-auto pt-6">
        <button className="w-full inline-flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm font-semibold hover:bg-secondary/70"><LogOut size={16}/> Logout</button>
      </div>
    </aside>
  );
}
