import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Background from "@/components/common/Background";
import TechStack from "@/components/TechStack";
import FeaturedExperience from "@/components/FeaturedExperience";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative flex flex-col bg-white dark:bg-[#020617]">
      <Background />
      {/* Your Content/Components */}
      <div className="relative z-10 flex-1 flex flex-col">
        <Navigation />
        <main className="max-w-4xl mx-auto px-6 py-16 md:py-24 flex-1">
          <Hero />
        </main>
        <FeaturedExperience />
        <TechStack />
        <Footer />
      </div>
    </div>
  );
}
