import Image from "next/image";
import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-linear-to-b from-[#26252b] to-[#1b1921] py-10 md:py-12 lg:py-14 mt-36 mb-0 pb-0">
      <div className="mb-10 max-w-[1280px] mx-auto px-4 py-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-5 md:space-y-6 lg:space-y-7">
          {/* Logo */}
          <div className="h-[36px] md:h-[44px] lg:h-[52px] w-[180px] md:w-[240px] lg:w-[280px] relative">
            <Image
              src="/images/logo-w1.png"
              alt="Frogdiction Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 md:gap-4">
            {/* Telegram - First */}
            <a
              href="https://t.me/frogdiction"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3d3d3d] border border-[#4c4c4c] rounded-[10px] w-[44px] h-[44px] md:w-[48px] md:h-[48px] lg:w-[52px] lg:h-[52px] flex items-center justify-center hover:bg-[#4c4c4c] transition-colors cursor-pointer"
            >
              <Send className="text-white w-5 h-5 md:w-6 md:h-6 lg:w-[26px] lg:h-[26px]" />
            </a>
            {/* Pump Fun - Second */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3d3d3d] border border-[#4c4c4c] rounded-[10px] w-[44px] h-[44px] md:w-[48px] md:h-[48px] lg:w-[52px] lg:h-[52px] flex items-center justify-center hover:bg-[#4c4c4c] transition-colors cursor-pointer"
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
              className="bg-[#3d3d3d] border border-[#4c4c4c] rounded-[10px] w-[44px] h-[44px] md:w-[48px] md:h-[48px] lg:w-[52px] lg:h-[52px] flex items-center justify-center hover:bg-[#4c4c4c] transition-colors cursor-pointer"
            >
              <Image
                src="/images/x_icon.png"
                alt="X (Twitter)"
                width={22}
                height={22}
                className="md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px]"
              />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-[#afafaf] text-[14px] md:text-[15px] lg:text-[16px] font-bold tracking-[-0.7px]">
              © 2025 Frogdiction. All rights reserved.
            </p>
            <p className="text-[#7b7b7b] text-[12px] md:text-[13px] lg:text-[14px] font-semibold tracking-[-0.6px]">
              Prediction markets and lottery on Solana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
