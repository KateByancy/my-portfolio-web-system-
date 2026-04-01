import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/features/HeroSection";
import AboutSection from "@/components/features/AboutSection";
import ProjectSection from "@/components/features/ProjectSection";
import ContactSection from "@/components/features/ContactSection";
import Footer from "@/components/common/Footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <main className="p-4 md:p-8">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}