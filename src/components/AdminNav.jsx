// src/components/AdminNav.jsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, BookOpen, Settings, LogOut, FileText } from "lucide-react";
import { signOut } from "next-auth/react";

const AdminNav = () => {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Courses", href: "/admin/courses", icon: BookOpen },
    { name: "Content", href: "/admin/content", icon: FileText }, // For managing text/images
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  const isActive = (path) => pathname === path;

  return (
    <>
      {/* --- DESKTOP SIDEBAR (Left) --- */}
      <div className="hidden md:flex flex-col w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 p-5">
        <div className="mb-10 px-2">
          <h1 className="text-2xl font-bold tracking-tight">Admin<span className="text-blue-500">Panel</span></h1>
          <p className="text-xs text-slate-400">Manage DevSamp</p>
        </div>
        
        <nav className="flex-1 space-y-2">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive(link.href) 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" 
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <link.icon size={20} />
              <span className="font-medium text-sm">{link.name}</span>
            </Link>
          ))}
        </nav>

        <button 
          onClick={() => signOut({ callbackUrl: '/' })}
          className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-xl transition-all mt-auto"
        >
          <LogOut size={20} />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>

      {/* --- MOBILE BOTTOM NAV (App-Like) --- */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 z-50 px-4 py-2 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <nav className="flex justify-between items-center">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
                isActive(link.href) 
                  ? "text-blue-600" 
                  : "text-slate-400"
              }`}
            >
              <div className={`p-1.5 rounded-full ${isActive(link.href) ? "bg-blue-50" : ""}`}>
                <link.icon size={20} className={isActive(link.href) ? "fill-current" : ""} />
              </div>
              <span className="text-[10px] font-bold">{link.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default AdminNav;