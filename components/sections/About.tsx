"use client"

import Image from "next/image";
import ScrollAnimation from "../ScrollAnimation";

export default function About() {
  return (
    <ScrollAnimation delay={0.1}>
      <section
        id="about"
        className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 mt-16 md:mt-20 lg:mt-24 pb-12 md:pb-16 lg:pb-20 scroll-mt-[96px] md:scroll-mt-[112px] lg:scroll-mt-[128px]"
      >
      <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-6 md:gap-8 lg:gap-12">
        {/* Mobile/Tablet - Content First, Desktop - Content Right */}
        <div className="flex-1 space-y-5 md:space-y-6 lg:space-y-7 order-1 md:order-2">
          {/* Badge */}
          <div className="bg-[rgba(161,216,52,0.33)] border border-[#96d432] rounded-[12px] md:rounded-[14px] h-[32px] md:h-[36px] inline-flex items-center justify-center px-4 md:px-5">
            <span className="text-[#96d432] text-[12px] md:text-[13px] font-bold tracking-[-0.6px]">
              What is it all about?
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[#fbfbfb] text-[48px] md:text-[56px] lg:text-[64px] font-black tracking-[-2.4px] md:tracking-[-2.8px] lg:tracking-[-3.2px] leading-[0.95]">
            About <span className="text-[#a2d046]">FROGDICTION</span>
          </h2>

          {/* Description */}
          <p className="text-white text-[16px] md:text-[17px] lg:text-[18px] font-bold tracking-[-0.8px] md:tracking-[-0.85px] leading-[24px] md:leading-[26px] lg:leading-[28px] max-w-full md:max-w-[480px] lg:max-w-[520px] mx-auto md:mx-0">
            At <span className="font-black italic text-[#a2d046]">Frogdiction</span>, we believe the future shouldn&apos;t just be guessed—it should be calculated. We are building the first AI-enhanced prediction market ecosystem on the Solana blockchain, bridging the gap between viral community energy and sophisticated decentralized finance (DeFi) utility.
          </p>

          {/* Button */}
          <button className="bg-[#87be2f] border border-[#a2d046] rounded-[10px] h-[48px] md:h-[52px] px-8 md:px-10 text-white text-[16px] md:text-[17px] font-bold tracking-[-0.8px] hover:bg-[#9dff00] transition-colors">
            Learn More
          </button>
        </div>

        {/* Desktop - Frog Image Left, Mobile - Below */}
        <div className="flex-1 max-w-[320px] md:max-w-[400px] lg:max-w-[460px] relative order-2 md:order-1 w-full">
          <Image
            src="/images/about-frog.png"
            alt="About Frogdiction"
            width={460}
            height={460}
            className="w-full h-auto"
          />
        </div>
      </div>
      </section>
    </ScrollAnimation>
  );
}
