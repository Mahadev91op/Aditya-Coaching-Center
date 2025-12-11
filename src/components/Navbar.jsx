"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { 
  Menu, X, ChevronDown, GraduationCap, 
  LayoutDashboard, User, BookOpen, LogOut, Sparkles, 
  Code, Laptop, Database, Globe
} from "lucide-react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => window.scrollY > 20 ? setScrolled(true) : setScrolled(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Courses Data for Dropdown
  const courseCategories = [
    { title: "Web Development", href: "/courses/web-dev", icon: <Globe size={18} />, desc: "MERN, Next.js & More" },
    { title: "App Development", href: "/courses/app-dev", icon: <Laptop size={18} />, desc: "Flutter & React Native" },
    { title: "Data Science", href: "/courses/data-science", icon: <Database size={18} />, desc: "Python, AI & ML" },
    { title: "Programming", href: "/courses/programming", icon: <Code size={18} />, desc: "C++, Java, DSA" },
  ];

  // Helper for Simple Links (Home, About, Contact)
  const NavLink = ({ href, children }) => {
    const isActive = pathname === href;
    return (
      <Link 
        href={href} 
        className={`relative group px-2 py-2 text-sm font-semibold transition-colors duration-300 ${isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}
      >
        {children}
        <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 ease-out ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
      </Link>
    );
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
        scrolled 
          ? "bg-white/80 backdrop-blur-xl border-gray-100 shadow-sm py-3" 
          : "bg-white/0 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          
          {/* 1. Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl text-white shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
              <GraduationCap size={22} />
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-gray-800"}`}>
              Aditya<span className="text-blue-600">Coaching</span>
            </span>
          </Link>

          {/* 2. Center Navigation (Desktop) */}
          <div className="hidden md:flex items-center gap-6 bg-white/60 px-6 py-2 rounded-full backdrop-blur-md border border-gray-100/50 shadow-sm">
            <NavLink href="/">Home</NavLink>
            
            {/* --- COURSES DROPDOWN START --- */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-2 py-2 text-sm font-semibold text-gray-600 group-hover:text-blue-600 transition-colors outline-none">
                Courses <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Dropdown Content */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                <div className="p-2">
                  <p className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Categories</p>
                  {courseCategories.map((cat, idx) => (
                    <Link key={idx} href={cat.href} className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition group/item">
                      <div className="mt-1 text-gray-400 group-hover/item:text-blue-600 transition-colors">{cat.icon}</div>
                      <div>
                        <p className="text-sm font-bold text-gray-800 group-hover/item:text-blue-700">{cat.title}</p>
                        <p className="text-xs text-gray-500">{cat.desc}</p>
                      </div>
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 my-2"></div>
                  <Link href="/courses" className="block text-center py-2 text-sm font-bold text-blue-600 hover:bg-gray-50 rounded-xl transition">
                    View All Courses
                  </Link>
                </div>
              </div>
              
              {/* Invisible Bridge (Hover fix) */}
              <div className="absolute top-full left-0 w-full h-4 bg-transparent"></div>
            </div>
            {/* --- COURSES DROPDOWN END --- */}

            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* 3. Auth Section (Right Side) */}
          <div className="hidden md:flex items-center gap-4">
            {status === "loading" ? (
              <div className="w-24 h-10 bg-gray-100 animate-pulse rounded-full"></div>
            ) : session ? (
              
              /* User Dropdown */
              <div className="relative group">
                <button className="flex items-center gap-3 pl-1 pr-3 py-1 bg-white border border-gray-200 rounded-full hover:shadow-md hover:border-blue-200 transition-all duration-300">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md">
                    {session.user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-gray-700 leading-tight">
                        {session.user?.name?.split(" ")[0]}
                    </p>
                    <p className="text-[10px] text-gray-400 font-medium">Student</p>
                  </div>
                  <ChevronDown size={14} className="text-gray-400 group-hover:text-blue-500 transition-transform duration-300 group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute top-full right-0 mt-4 w-60 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50 origin-top-right">
                  <div className="px-5 py-4 bg-gray-50 border-b border-gray-100">
                    <p className="text-sm font-bold text-gray-900 truncate">{session.user?.name}</p>
                    <p className="text-xs text-gray-500 truncate">{session.user?.email}</p>
                  </div>
                  <div className="p-2 space-y-1">
                    <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      <LayoutDashboard size={18} /> Dashboard
                    </Link>
                    <Link href="/profile" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      <User size={18} /> My Profile
                    </Link>
                    <Link href="/my-courses" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      <BookOpen size={18} /> My Learning
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <button 
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50 transition-colors"
                    >
                      <LogOut size={18} /> Sign Out
                    </button>
                  </div>
                </div>
                <div className="absolute top-full left-0 w-full h-4 bg-transparent"></div>
              </div>

            ) : (
              /* Logged Out Buttons */
              <div className="flex items-center gap-3">
                <Link href="/login" className="px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">
                  Log in
                </Link>
                <Link href="/signup" className="group relative px-6 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    Get Started <Sparkles size={14} />
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* 4. Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Menu (Same as before + Courses list) */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 space-y-6">
          <div className="space-y-3">
            <Link href="/" onClick={() => setIsOpen(false)} className="block text-lg font-semibold text-gray-800 hover:text-blue-600">Home</Link>
            
            {/* Mobile Courses Section */}
            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-400 uppercase">Courses</p>
              {courseCategories.map((cat, idx) => (
                <Link key={idx} href={cat.href} onClick={() => setIsOpen(false)} className="flex items-center gap-2 pl-2 text-gray-600 hover:text-blue-600">
                   {cat.icon} {cat.title}
                </Link>
              ))}
            </div>

            <Link href="/about" onClick={() => setIsOpen(false)} className="block text-lg font-semibold text-gray-800 hover:text-blue-600">About Us</Link>
          </div>

          <div className="pt-6 border-t border-gray-100">
            {session ? (
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-4 bg-blue-50 p-4 rounded-2xl">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                        {session.user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <p className="font-bold text-gray-900">{session.user?.name}</p>
                        <p className="text-sm text-gray-500">{session.user?.email}</p>
                    </div>
                </div>
                <Link href="/dashboard" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-gray-700 font-medium">
                    <LayoutDashboard size={20} /> Dashboard
                </Link>
                <button 
                  onClick={() => { signOut(); setIsOpen(false); }}
                  className="flex items-center gap-3 text-red-600 font-medium w-full"
                >
                    <LogOut size={20} /> Sign Out
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Link href="/login" onClick={() => setIsOpen(false)} className="w-full py-3 text-center text-gray-700 font-bold bg-gray-100 rounded-xl">
                    Log In
                </Link>
                <Link href="/signup" onClick={() => setIsOpen(false)} className="w-full py-3 text-center text-white font-bold bg-blue-600 rounded-xl shadow-lg">
                    Get Started Free
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;