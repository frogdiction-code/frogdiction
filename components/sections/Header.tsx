"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full py-2 md:py-3">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <div className="bg-[#232229] border border-[#383241] rounded-[12px] md:rounded-[14px] h-[52px] md:h-[56px] flex items-center justify-between px-4 md:px-5">
        {/* Logo */}
        <div className="h-[32px] md:h-[36px] w-[130px] md:w-[280px] relative">
          <Image
            src="/images/logo-w1.png"
            alt="Frogdiction Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 lg:gap-6">
          <a
            href="#home"
            className="text-[#fbfbfb] text-[15px] md:text-[16px] font-bold tracking-[-0.75px] md:tracking-[-0.8px] hover:text-[#9dff00] transition-colors cursor-pointer"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-[#fbfbfb] text-[15px] md:text-[16px] font-bold tracking-[-0.75px] md:tracking-[-0.8px] hover:text-[#9dff00] transition-colors cursor-pointer"
          >
            About
          </a>
          <a
            href="#features"
            className="text-[#fbfbfb] text-[15px] md:text-[16px] font-bold tracking-[-0.75px] md:tracking-[-0.8px] hover:text-[#9dff00] transition-colors cursor-pointer"
          >
            Features
          </a>
          <a
            href="#faqs"
            className="text-[#fbfbfb] text-[15px] md:text-[16px] font-bold tracking-[-0.75px] md:tracking-[-0.8px] hover:text-[#9dff00] transition-colors cursor-pointer"
          >
            FAQs
          </a>
        </nav>


    <div className="flex items-center gap-2">
          {/* Buy Button */}
          <a
            href="https://app.frogdiction.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#87be2f] border border-[#9dff00] rounded-[8px] md:rounded-[10px] h-[32px] md:h-[40px] px-4 md:px-6 text-white text-[13px] md:text-[15px] font-black tracking-[-0.65px] md:tracking-[-0.75px] transition-all duration-300 cursor-pointer hover:bg-[#9dff00] hover:shadow-[0_0_20px_rgba(157,255,0,0.4)] inline-flex items-center justify-center"
          >
            Go To App
          </a>

          {/* Mobile Menu Button */}
          <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-[32px] h-[32px] flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

    </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <nav className="lg:hidden bg-[#232229] border border-[#383241] rounded-[12px] md:rounded-[14px] mt-4 p-4 space-y-3">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#fbfbfb] text-[16px] font-bold hover:text-[#9dff00] transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#fbfbfb] text-[16px] font-bold hover:text-[#9dff00] transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#fbfbfb] text-[16px] font-bold hover:text-[#9dff00] transition-colors cursor-pointer"
            >
              Features
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#fbfbfb] text-[16px] font-bold hover:text-[#9dff00] transition-colors cursor-pointer"
            >
              FAQs
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
