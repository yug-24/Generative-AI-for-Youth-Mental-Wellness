import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background grid grid-cols-1 md:grid-cols-[260px_1fr]">
      <Sidebar />
      <main className="p-4 md:p-8 max-w-5xl w-full mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
