"use client"

import { useInView } from "framer-motion"
import { useRef, ReactNode, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function ScrollAnimation({ children, className = "", delay = 0 }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isAboveFold, setIsAboveFold] = useState(false)

  useEffect(() => {
    // Check if element is above the fold (in viewport on initial load)
    const checkIfAboveFold = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        // Element is above fold if it's within the viewport
        const aboveFold = rect.top < window.innerHeight && rect.bottom > 0
        setIsAboveFold(aboveFold)
      }
    }

    // Check on mount and after a brief delay to account for any layout shifts
    checkIfAboveFold()
    const timeout = setTimeout(checkIfAboveFold, 50)

    return () => clearTimeout(timeout)
  }, [])

  // If above fold, show immediately; otherwise wait for scroll into view
  const shouldAnimate = isAboveFold || isInView

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: isAboveFold ? 1 : 0, y: isAboveFold ? 0 : 30 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: isAboveFold ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
