"use client"

import Image from "next/image";
import { Copy, Send } from "lucide-react";
import ScrollAnimation from "../ScrollAnimation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 pt-[88px] md:pt-[120px] lg:pt-[140px] pb-12 md:pb-16 lg:pb-20 scroll-mt-[96px] md:scroll-mt-[112px] lg:scroll-mt-[128px]"
    >
      {/* Main Content - Separate Animation */}
      <ScrollAnimation>
        <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start md:justify-between gap-6 md:gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-5 md:space-y-6 lg:space-y-7 w-full md:w-auto">
            {/* Badge */}
            <div className="bg-[rgba(161,216,52,0.33)] border border-[#96d432] rounded-[12px] md:rounded-[14px] h-[32px] md:h-[36px] inline-flex items-center justify-center px-4 md:px-5">
              <span className="text-[#96d432] text-[12px] md:text-[13px] font-bold tracking-[-0.6px]">
                Solana Prediction and Lottery
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-[#fbfbfb] text-[54px] md:text-[72px] lg:text-[80px] font-black tracking-[-3.2px] md:tracking-[-3.6px] lg:tracking-[-4px] leading-[0.95]">
              FROGDICTION
            </h1>

            {/* Description */}
            <p className="text-[#fbfbfb] text-[16px] md:text-[17px] lg:text-[18px] font-bold tracking-[-0.8px] md:tracking-[-0.85px] max-w-full md:max-w-[480px] lg:max-w-[520px] mx-auto md:mx-0 leading-relaxed">
              AI-enhanced prediction market ecosystem. Driving the refinement of Solana-powered decentralized finance solutions.
            </p>

            {/* Wallet Address */}
            <div className="bg-[#232229] border border-[#355600] rounded-[16px] h-[52px] md:h-[56px] flex items-center justify-between px-4 md:px-5 max-w-full md:max-w-[420px] lg:max-w-[480px] mx-auto md:mx-0">
              <span className="text-[#7d7d7d] text-[14px] md:text-[15px] lg:text-[16px] font-bold tracking-[-0.7px] truncate">
                8uu3yAY9u.....naxstgW1pump
              </span>
              <button className="bg-[#87be2f] border border-[#a2d046] rounded-[10px] h-[36px] md:h-[40px] w-[90px] md:w-[100px] flex items-center justify-center gap-1.5 hover:bg-[#9dff00] transition-colors shrink-0 cursor-pointer">
                <Copy className="text-white w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="text-white text-[14px] md:text-[15px] font-bold tracking-[-0.7px]">
                  Copy
                </span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 md:gap-4 justify-center md:justify-start">
              {/* Telegram - First */}
              <a
                href="https://t.me/frogdiction"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#87be2f] border border-[#a2d046] rounded-[12px] md:rounded-[14px] w-[44px] h-[44px] md:w-[48px] md:h-[48px] lg:w-[52px] lg:h-[52px] flex items-center justify-center hover:bg-[#9dff00] transition-colors cursor-pointer"
              >
                <Send className="text-white w-5 h-5 md:w-[26px] md:h-[26px] lg:w-[28px] lg:h-[28px]" />
              </a>
              {/* Pump Fun - Second */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#87be2f] border border-[#a2d046] rounded-[12px] md:rounded-[14px] w-[44px] h-[44px] md:w-[48px] md:h-[48px] lg:w-[52px] lg:h-[52px] flex items-center justify-center hover:bg-[#9dff00] transition-colors cursor-pointer"
              >
                <Image
                  src="/icons/pump_icon.PNG"
                  alt="Pump Fun"
                  width={24}
                  height={24}
                  className="md:w-[26px] md:h-[26px] lg:w-[28px] lg:h-[28px]"
                />
              </a>
              {/* X (Twitter) - Third */}
              <a
                href="https://x.com/Frogdiction_"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#87be2f] border border-[#a2d046] rounded-[12px] md:rounded-[14px] w-[44px] h-[44px] md:w-[48px] md:h-[48px] lg:w-[52px] lg:h-[52px] flex items-center justify-center hover:bg-[#9dff00] transition-colors cursor-pointer"
              >
                <Image
                  src="/images/x_icon.png"
                  alt="X (Twitter)"
                  width={24}
                  height={24}
                  className="md:w-[26px] md:h-[26px] lg:w-[28px] lg:h-[28px]"
                />
              </a>
            </div>
          </div>

          {/* Right Content - Hero Frog */}
          <div className="flex-1 max-w-[320px] md:max-w-[380px] lg:max-w-[420px] relative w-full mx-auto md:mx-0">
            <Image
              src="/images/hero-frog.png"
              alt="Frogdiction Mascot"
              width={420}
              height={420}
              className="w-full h-auto"
            />
          </div>
        </div>
      </ScrollAnimation>

      {/* Screenshot Section - Separate Animation with Delay */}
      <ScrollAnimation delay={0.5}>
        <div className="mt-12 md:mt-16 lg:mt-20 relative">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-full md:max-w-[900px] lg:max-w-[1000px]">
              <Image
                src="/images/Frame 7.png"
                alt="Frogdiction Platform"
                width={1000}
                height={667}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
