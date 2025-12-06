import BackgroundBlur from "@/components/BackgroundBlur";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import FAQs from "@/components/sections/FAQs";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative bg-[#101010] overflow-x-hidden flex-1 flex flex-col w-full">
      {/* Fixed background layer with gradients */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <BackgroundBlur />
      </div>
      <Header />
      <main className="flex-1 w-full relative z-10">
        <Hero />
        <Partners />
        <About />
        <Features />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
}
