"use client"

import { useEffect, useRef } from "react"

export default function BackgroundBlur() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const scrolled = window.pageYOffset
      const parallaxElements = containerRef.current.querySelectorAll("[data-parallax]")

      parallaxElements.forEach((el) => {
        const element = el as HTMLElement
        const speed = parseFloat(element.getAttribute("data-speed") || "0.5")
        const yPos = -(scrolled * speed)
        // Use CSS variable to apply parallax without conflicting with animation transforms
        element.style.setProperty("--parallax-y", `${yPos}px`)
      })
    }

    // Initial call
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none" style={{ minHeight: '100vh' }}>
      {/* Background blur effects with warping animations and parallax - only at sides */}
      {/* Left side gradient - warping with parallax */}
      <div
        className="absolute left-[-80px] md:left-[-200px] top-[20vh] w-[300px] md:w-[400px] h-[400px] md:h-[500px] bg-[rgba(157,255,0,0.3)] rounded-full pointer-events-none animate-gradient-warp-2"
        data-parallax
        data-speed="0.5"
      />

      {/* Right side gradient - warping variant 3 with parallax */}
      <div
        className="absolute right-[-80px] md:right-[-200px] top-[40vh] w-[300px] md:w-[450px] h-[400px] md:h-[550px] bg-[rgba(157,255,0,0.3)] rounded-full pointer-events-none animate-gradient-warp-3"
        data-parallax
        data-speed="0.4"
      />
    </div>
  );
}
