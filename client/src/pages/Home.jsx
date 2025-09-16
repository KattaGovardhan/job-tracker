import { Header } from "@/components/public/Header";
import { Hero } from "@/components/public/Hero";
import { Features } from "@/components/public/Features";
import { HowItWorks } from "@/components/public/HowItWorks";
import { Pricing } from "@/components/public/Pricing";
import { CTA } from "@/components/public/CTA";
import { Footer } from "@/components/public/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
