"use client";
import { MessageCircle } from "lucide-react";

const FloatingChat = () => {
  return (
    <a
      href="https://wa.me/919330680642" // Tumhara number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] group"
    >
      <span className="absolute right-full mr-3 top-2 bg-white text-gray-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Chat with Aditya Sir
      </span>
      <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:scale-110 hover:shadow-[0_4px_25px_rgba(34,197,94,0.6)] transition-all duration-300 animate-bounce-slow">
        <MessageCircle size={30} className="text-white fill-white" />
      </div>
    </a>
  );
};

export default FloatingChat;