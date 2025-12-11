import HeroSection from "@/components/HeroSection";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection"; // ✅ Sahi import aisa hona chahiye
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <Stats />
      <Features />
      <Courses />
      <Testimonials />
      <CtaSection />
      <Footer />
      <FloatingChat />
    </div>
  );
}