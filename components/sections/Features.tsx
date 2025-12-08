"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import ScrollAnimation from "../ScrollAnimation"

// Feature slide data
const slides = [
  {
    badge: "Real Utility. Real Yield. Powered by Solana.",
    title: "Features",
    description:
      "Frogdiction is more than just a memecoin; it is the native currency for a suite of decentralized applications (dApps) designed to reward accuracy, luck, and loyalty.",
    image: "/images/screenshot-1.png",
    frogImage: "/images/features-frog.png",
    buttonText: "Try it now",
    buttonLink: "https://app.frogdiction.com/",
  },
  {
    badge: "Predict. Win. Repeat.",
    title: "Price Betting",
    description:
      "Try our Price Bet — simply choose High or Low. If you predict the movement right, you win. Pure skill, pure instinct.",
    image: "/images/screenshot-2.png",
    frogImage: "/images/feature_2.png",
    buttonText: "Play Price Bet",
    buttonLink: "https://app.frogdiction.com/",
  },
  {
    badge: "50/50 Fair Odds.",
    title: "Head or Butt",
    description:
      "Experience Head or Butt, our simplest game with a straight 50/50 probability. No rigging, no complicated mechanics — just a fair shot at winning every time.",
    image: "/images/screenshot-3.png",
    frogImage: "/images/feature_3.png",
    buttonText: "Play Head or Butt",
    buttonLink: "https://app.frogdiction.com/",
  },
  {
    badge: "Compete. Climb. Conquer.",
    title: "Leaderboards",
    description: "Track the top player in the leaderboards. Who knows, you might be the first to get it.",
    image: "/images/screenshot-3.png",
    frogImage: "/images/feature_4.png",
    buttonText: "View Leaderboard",
    buttonLink: "https://app.frogdiction.com/",
  },
]

export default function Features() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Auto-advance slides every 5 seconds
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    // Cleanup interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    // Reset auto-advance timer when user manually navigates
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
  }

  return (
    <ScrollAnimation delay={0.15}>
      <section
        id="features"
        className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 mb-16 md:mb-20 lg:mb-24 scroll-mt-[96px] md:scroll-mt-[112px] lg:scroll-mt-[128px]"
      >
      <div className="relative w-full">
        <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-center gap-6 md:gap-8 lg:gap-12 w-full">
          {/* Fixed Text Content */}
          <div className="flex-1 space-y-5 md:space-y-6 lg:space-y-7 relative">
            {/* Badge - Updates with current slide */}
            <div className="relative min-h-[32px] md:min-h-[36px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ease-in-out ${
                    currentSlide === index
                      ? "opacity-100"
                      : "opacity-0 absolute inset-0 pointer-events-none"
                  }`}
                >
                  <div className="bg-[rgba(161,216,52,0.33)] border border-[#96d432] rounded-[12px] md:rounded-[14px] h-[32px] md:h-[36px] inline-flex items-center justify-center px-4 md:px-5">
                    <span className="text-[#96d432] text-[12px] md:text-[13px] font-bold tracking-[-0.6px]">
                      {slide.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Title - Updates with current slide */}
            <div className="relative min-h-[48px] md:min-h-[56px] lg:min-h-[64px]">
              {slides.map((slide, index) => (
                <h2
                  key={index}
                  className={`text-[#fbfbfb] text-[48px] md:text-[56px] lg:text-[64px] font-black tracking-[-2.4px] md:tracking-[-2.8px] lg:tracking-[-3.2px] leading-[0.95] transition-opacity duration-500 ease-in-out ${
                    currentSlide === index
                      ? "opacity-100"
                      : "opacity-0 absolute inset-0 pointer-events-none"
                  }`}
                >
                  {slide.title}
                </h2>
              ))}
            </div>

            {/* Description - Updates with current slide */}
            <div className="relative min-h-[72px] md:min-h-[78px] lg:min-h-[84px]">
              {slides.map((slide, index) => (
                <p
                  key={index}
                  className={`text-white text-[16px] md:text-[17px] lg:text-[18px] font-bold tracking-[-0.8px] md:tracking-[-0.85px] leading-[24px] md:leading-[26px] lg:leading-[28px] max-w-full md:max-w-[480px] lg:max-w-[520px] mx-auto md:mx-0 transition-opacity duration-500 ease-in-out ${
                    currentSlide === index
                      ? "opacity-100"
                      : "opacity-0 absolute inset-0 pointer-events-none"
                  }`}
                >
                  {slide.description}
                </p>
              ))}
            </div>

            {/* Screenshot Image Container - Only this animates */}
            <div className="bg-white border border-[#9dff00] rounded-[10px] md:rounded-[12px] overflow-hidden w-full max-w-full md:max-w-[420px] lg:max-w-[480px] mx-auto md:mx-0 relative min-h-[200px] md:min-h-[240px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    currentSlide === index
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    width={480}
                    height={320}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>

            {/* Button - Updates with current slide */}
            <div className="relative">
              {slides.map((slide, index) => (
                <a
                  key={index}
                  href={slide.buttonLink}
                  className={`bg-[#87be2f] border border-[#a2d046] rounded-[10px] h-[48px] md:h-[52px] px-8 md:px-10 text-white text-[16px] md:text-[17px] font-bold tracking-[-0.8px] hover:bg-[#9dff00] inline-flex items-center justify-center transition-all duration-500 ease-in-out ${
                    currentSlide === index
                      ? "opacity-100 relative"
                      : "opacity-0 absolute top-0 left-0 pointer-events-none"
                  }`}
                >
                  {slide.buttonText}
                </a>
              ))}
            </div>
          </div>

          {/* Frog Image - Updates with current slide */}
          <div className="flex-1 max-w-[320px] md:max-w-[400px] lg:max-w-[500px] relative w-full hidden md:block">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  currentSlide === index
                    ? "opacity-100 relative"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.frogImage || "/images/features-frog.png"}
                  alt={`${slide.title} Frog`}
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-2 md:gap-3 mt-8 md:mt-10 lg:mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? "bg-[#9dff00] w-8 md:w-10 h-2 md:h-2.5"
                  : "bg-[#9dff00]/30 hover:bg-[#9dff00]/50 w-2 md:w-2.5 h-2 md:h-2.5"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      </section>
    </ScrollAnimation>
  )
}
