// src/components/Navbar.jsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. Import hook
import { useSession, signOut } from "next-auth/react";
import { 
  Menu, X, ChevronDown, GraduationCap, 
  LayoutDashboard, LogOut, Atom, 
  Calculator, Microscope, Library, ChevronRight 
} from "lucide-react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname(); // 2. Get current path
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileCourseOpen, setIsMobileCourseOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 3. Admin Panel par Navbar mat dikhao
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const courseCategories = [
    { title: "Class 11 & 12 (Science)", href: "/courses/science-11-12", icon: <Atom size={18} />, desc: "Physics, Chem, Maths" },
    { title: "Class 9 & 10 (Foundation)", href: "/courses/foundation-9-10", icon: <Calculator size={18} />, desc: "Olympiad Prep" },
    { title: "Competitive Exams", href: "/courses/competitive", icon: <Microscope size={18} />, desc: "JEE / NEET" },
    { title: "Arts & Commerce", href: "/courses/arts-commerce", icon: <Library size={18} />, desc: "Economics, Accounts" },
  ];

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
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
          scrolled || isOpen 
            ? "bg-white/95 backdrop-blur-md border-gray-100 shadow-sm py-2" 
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            
            <Link href="/" className="flex items-center gap-2 z-50">
              <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl text-white shadow-lg shadow-blue-500/30">
                <GraduationCap size={22} />
              </div>
              <span className={`text-xl font-bold tracking-tight ${scrolled || isOpen ? "text-gray-900" : "text-gray-800"}`}>
                Aditya<span className="text-blue-600">Coaching</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 bg-white/60 px-6 py-2 rounded-full backdrop-blur-md border border-gray-100/50 shadow-sm">
              <NavLink href="/">Home</NavLink>
              <div className="relative group">
                <button className="flex items-center gap-1 px-2 py-2 text-sm font-semibold text-gray-600 group-hover:text-blue-600 transition-colors outline-none">
                  Classes <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-2">
                    <p className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Academics</p>
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
                      View All Classes
                    </Link>
                  </div>
                </div>
                <div className="absolute top-full left-0 w-full h-4 bg-transparent"></div>
              </div>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>

            {/* Auth Section */}
            <div className="hidden md:flex items-center gap-4">
              {status === "loading" ? (
                <div className="w-24 h-10 bg-gray-100 animate-pulse rounded-full"></div>
              ) : session ? (
                <div className="relative group">
                  <button className="flex items-center gap-3 pl-1 pr-3 py-1 bg-white border border-gray-200 rounded-full hover:shadow-md hover:border-blue-200 transition-all">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md">
                      {session.user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-gray-700 leading-tight">{session.user?.name?.split(" ")[0]}</p>
                      <p className="text-[10px] text-gray-400 font-medium">Student</p>
                    </div>
                    <ChevronDown size={14} className="text-gray-400 group-hover:text-blue-500 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full right-0 mt-4 w-60 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-2 space-y-1">
                      <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:bg-blue-50 transition-colors">
                        <LayoutDashboard size={18} /> Dashboard
                      </Link>
                      <button onClick={() => signOut({ callbackUrl: '/' })} className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50 transition-colors">
                        <LogOut size={18} /> Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link href="/login" className="px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">Log in</Link>
                  <Link href="/signup" className="px-6 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">Get Started</Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center z-50">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-2 text-gray-600 hover:text-blue-600 bg-gray-100/50 rounded-xl transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ paddingTop: '80px' }} 
      >
        <div className="flex flex-col h-full px-6 pb-6 overflow-y-auto">
          
          <div className="flex flex-col space-y-1">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)} 
              className={`text-lg font-bold py-4 border-b border-gray-100 flex justify-between items-center ${pathname === "/" ? "text-blue-600" : "text-gray-800"}`}
            >
              Home <ChevronRight size={18} className="text-gray-400" />
            </Link>

            <div>
              <button 
                onClick={() => setIsMobileCourseOpen(!isMobileCourseOpen)}
                className="w-full text-lg font-bold py-4 border-b border-gray-100 flex justify-between items-center text-gray-800"
              >
                All Classes 
                <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${isMobileCourseOpen ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileCourseOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col gap-2 pl-2 bg-gray-50 rounded-xl p-3">
                  {courseCategories.map((cat, idx) => (
                    <Link 
                      key={idx} 
                      href={cat.href} 
                      onClick={() => setIsOpen(false)} 
                      className="flex items-center gap-3 p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-100"
                    >
                      <div className="text-blue-500 bg-white p-1.5 rounded-lg shadow-sm">{cat.icon}</div>
                      <span className="text-sm font-semibold">{cat.title}</span>
                    </Link>
                  ))}
                  <Link href="/courses" onClick={() => setIsOpen(false)} className="text-center text-xs font-bold text-blue-600 py-2 mt-1">View All</Link>
                </div>
              </div>
            </div>

            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)} 
              className={`text-lg font-bold py-4 border-b border-gray-100 flex justify-between items-center ${pathname === "/about" ? "text-blue-600" : "text-gray-800"}`}
            >
              About Us <ChevronRight size={18} className="text-gray-400" />
            </Link>
            
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)} 
              className={`text-lg font-bold py-4 border-b border-gray-100 flex justify-between items-center ${pathname === "/contact" ? "text-blue-600" : "text-gray-800"}`}
            >
              Contact <ChevronRight size={18} className="text-gray-400" />
            </Link>
          </div>

          <div className="flex-grow"></div>

          <div className="mt-8 mb-10">
            {session ? (
              <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                    {session.user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{session.user?.name}</p>
                    <p className="text-sm text-gray-500">{session.user?.email}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                   <Link href="/dashboard" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 py-3 bg-white text-gray-700 font-bold rounded-xl shadow-sm hover:bg-gray-50 border border-gray-200">
                     <LayoutDashboard size={18} /> Dashboard
                   </Link>
                   <button 
                     onClick={() => { signOut(); setIsOpen(false); }}
                     className="flex items-center justify-center gap-2 py-3 bg-red-50 text-red-600 font-bold rounded-xl shadow-sm hover:bg-red-100 border border-red-100"
                   >
                     <LogOut size={18} /> Sign Out
                   </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <Link 
                  href="/login" 
                  onClick={() => setIsOpen(false)} 
                  className="w-full py-4 text-center text-gray-700 font-bold bg-gray-100 rounded-xl text-lg hover:bg-gray-200 transition"
                >
                  Log In
                </Link>
                <Link 
                  href="/signup" 
                  onClick={() => setIsOpen(false)} 
                  className="w-full py-4 text-center text-white font-bold bg-gray-900 rounded-xl shadow-lg text-lg hover:bg-gray-800 transition"
                >
                  Get Started Free
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;