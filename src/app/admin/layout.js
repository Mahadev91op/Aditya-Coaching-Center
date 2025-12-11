// src/app/admin/layout.js
"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AdminNav from "@/components/AdminNav";
import { Loader2 } from "lucide-react";

export default function AdminLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (status === "loading") return;

    // Check if user is logged in AND is an admin
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (session?.user?.role !== "admin") {
      // Agar admin nahi hai, to dashboard bhej do
      router.push("/dashboard"); 
    } else {
      setIsAuthorized(true);
    }
  }, [status, session, router]);

  if (status === "loading" || !isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Navigation */}
      <AdminNav />

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 pb-20 md:pb-0 overflow-y-auto h-screen">
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}