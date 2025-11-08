import Navigation from "@/components/Navigation";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Background from "@/components/common/Background";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen w-full relative flex flex-col bg-white dark:bg-[#020617]">
      <Background />
      {/* Your Content/Components */}
      <div className="relative z-10 flex-1 flex flex-col">
        <Navigation />
        <main className="flex-1">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <Experience />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
