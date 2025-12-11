// src/components/Footer.jsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  GraduationCap, Facebook, Twitter, Instagram, Youtube, Linkedin, 
  Mail, Phone, MapPin, ArrowRight, Send, ChevronDown 
} from "lucide-react";

const Footer = () => {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [openSection, setOpenSection] = useState("");

  // 1. Footer ko Admin aur Dashboard dono se hatao
  if (pathname?.startsWith("/dashboard") || pathname?.startsWith("/admin")) {
    return null;
  }

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  const FooterLinks = ({ title, links, id }) => (
    <div className="border-b md:border-none border-slate-800 pb-4 md:pb-0">
      <button 
        onClick={() => toggleSection(id)} 
        className="w-full flex justify-between items-center text-white font-bold text-lg md:mb-6 focus:outline-none"
      >
        {title}
        <ChevronDown 
          className={`md:hidden text-slate-500 transition-transform duration-300 ${openSection === id ? "rotate-180" : ""}`} 
          size={20} 
        />
      </button>
      <ul className={`space-y-3 mt-4 text-sm text-slate-400 overflow-hidden transition-all duration-300 md:block ${openSection === id ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-full md:opacity-100"}`}>
        {links.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="hover:text-blue-400 hover:pl-2 transition-all duration-300 flex items-center gap-2 group">
              <span className="w-0 group-hover:w-2 overflow-hidden transition-all text-blue-500">•</span> {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const exploreLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Testimonials', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const courseLinks = [
    { name: 'Class 11 Science', href: '/courses/class-11-science' },
    { name: 'Class 12 Boards', href: '/courses/class-12-boards' },
    { name: 'JEE Mains', href: '/courses/jee-mains' },
    { name: 'NEET Medical', href: '/courses/neet-medical' }
  ];

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden pt-10 md:pt-20">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Newsletter */}
        <div className="mb-10 md:mb-20 flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 bg-slate-900/50 border border-slate-800 rounded-2xl md:rounded-3xl backdrop-blur-sm">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Stay Updated</h3>
            <p className="text-slate-400 text-xs md:text-sm">Get free notes & exam tips directly.</p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row gap-2 md:gap-3">
             {subscribed ? (
               <div className="w-full px-6 py-3 bg-green-500/20 text-green-400 border border-green-500/50 rounded-xl flex items-center justify-center gap-2 font-bold animate-pulse text-sm">
                  <span className="text-lg">✓</span> Subscribed!
               </div>
             ) : (
               <>
                 <div className="relative w-full">
                   <Mail className="absolute left-4 top-3 text-slate-500" size={18} />
                   <input 
                     type="email" 
                     placeholder="Enter email" 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     className="w-full md:w-80 bg-slate-950 border border-slate-700 text-white pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-sm"
                     required
                   />
                 </div>
                 <button className="w-full md:w-auto bg-white text-slate-950 hover:bg-blue-500 hover:text-white font-bold px-6 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 group text-sm">
                   Join <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                 </button>
               </>
             )}
          </form>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-20">
          
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg text-white">
                <GraduationCap size={24} />
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-tight">
                Aditya<span className="text-blue-500">Coaching</span>
              </span>
            </Link>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Empowering students to achieve academic dreams. Foundation for JEE, NEET & Boards.
            </p>
            
            <div className="flex gap-3 justify-center md:justify-start">
              {[
                { Icon: Facebook, color: "hover:bg-blue-600" },
                { Icon: Instagram, color: "hover:bg-pink-600" },
                { Icon: Twitter, color: "hover:bg-sky-500" },
                { Icon: Youtube, color: "hover:bg-red-600" }
              ].map(({ Icon, color }, idx) => (
                <a key={idx} href="#" onClick={(e) => e.preventDefault()} className={`w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 ${color} hover:text-white transition-all`}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <FooterLinks 
            id="explore" 
            title="Explore" 
            links={exploreLinks} 
          />

          <FooterLinks 
            id="courses" 
            title="Popular Courses" 
            links={courseLinks} 
          />

          <div className="pt-4 md:pt-0">
            <h4 className="text-white font-bold text-lg mb-4 md:mb-6 text-center md:text-left">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin size={16} className="text-blue-500 mt-1 shrink-0" />
                <span className="text-center md:text-left">123, Education Hub, New Delhi</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Phone size={16} className="text-green-500 shrink-0" />
                <span>+91 9330680642</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail size={16} className="text-yellow-500 shrink-0" />
                <span>devsamp1st@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden leading-none opacity-[0.03] pointer-events-none select-none absolute bottom-0 left-0">
         <h1 className="text-[18vw] md:text-[15vw] font-black text-center whitespace-nowrap text-white">
            ADITYA COACHING
         </h1>
      </div>

      <div className="border-t border-slate-900 bg-slate-950 relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium text-center">
          <p>© 2025 Aditya Coaching Center.</p>
          
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
          </div>

          <div className="flex items-center gap-1 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
             <span>By</span>
             <Link href="https://devsamp.vercel.app/" target="_blank" className="text-blue-500 font-bold hover:text-blue-400">
               DevSamp
             </Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;