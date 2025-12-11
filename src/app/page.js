import HeroSection from "@/components/HeroSection"; // Import kiya

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Baaki sections future mein yahan aayenge */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
        <p className="text-gray-500">Coming soon...</p>
      </section>
    </div>
  );
}