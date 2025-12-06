"use client"

import Image from "next/image";
import ScrollAnimation from "../ScrollAnimation";

const partners = [
  { src: "/images/partner-1.png", alt: "Partner 1", widthMobile: 120, heightMobile: 40, widthDesktop: 630, heightDesktop: 200 },
  { src: "/images/partner-2.png", alt: "Partner 2", widthMobile: 150, heightMobile: 50, widthDesktop: 800, heightDesktop: 254 },
  { src: "/images/partner-3.png", alt: "Partner 3", widthMobile: 150, heightMobile: 50, widthDesktop: 815, heightDesktop: 260 },
  { src: "/images/partner-4.png", alt: "Partner 4", widthMobile: 150, heightMobile: 50, widthDesktop: 800, heightDesktop: 256 },
];

export default function Partners() {
  return (
    <ScrollAnimation>
      <section className="relative z-10 w-full py-8 md:py-12 lg:py-16 ">
      <div className="relative overflow-hidden w-full">
        <div className="flex items-center gap-4 md:gap-12 lg:gap-24 animate-marquee w-full">
          {/* First set of partners */}
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="shrink-0 partner-image-wrapper"
              style={{
                '--width-mobile': `${partner.widthMobile}px`,
                '--height-mobile': `${partner.heightMobile}px`,
                '--width-desktop': `${partner.widthDesktop}px`,
                '--height-desktop': `${partner.heightDesktop}px`,
              } as React.CSSProperties}
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.widthDesktop}
                height={partner.heightDesktop}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="shrink-0 partner-image-wrapper"
              style={{
                '--width-mobile': `${partner.widthMobile}px`,
                '--height-mobile': `${partner.heightMobile}px`,
                '--width-desktop': `${partner.widthDesktop}px`,
                '--height-desktop': `${partner.heightDesktop}px`,
              } as React.CSSProperties}
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.widthDesktop}
                height={partner.heightDesktop}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      </section>
    </ScrollAnimation>
  );
}
