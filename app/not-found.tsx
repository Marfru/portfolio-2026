import Button from "@/components/common/Button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Background from "@/components/common/Background";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full relative flex flex-col bg-white dark:bg-[#020617]">
      <Background />
      <div className="relative z-10 flex-1 flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-md w-full text-center">
            <h1 className="text-9xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              404
            </h1>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
            <Button href="/" variant="primary">
              Go back home
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
