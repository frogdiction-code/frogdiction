"use client"

import { useState } from "react";
import { ChevronDown } from "lucide-react"
import ScrollAnimation from "../ScrollAnimation"

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is Frogdiction?",
      answer: "Frogdiction is an AI-enhanced prediction market ecosystem built on the Solana blockchain. It combines the viral energy of meme culture with sophisticated decentralized finance (DeFi) utility, allowing users to participate in prediction markets and lottery games while earning rewards through the $FDTN token."
    },
    {
      question: "How do the predictions work?",
      answer: "Frogdiction offers multiple prediction games including Price Betting (predicting if a price will go High or Low) and Head or Butt (a simple 50/50 probability game). Users make predictions using $FDTN tokens, and if their prediction is correct, they win rewards. The platform uses AI to enhance the prediction experience, though outcomes are still based on market dynamics and chance."
    },
    {
      question: "Is Frogdiction a gambling platform?",
      answer: "Frogdiction is a prediction market platform, not a traditional gambling site. It operates as a decentralized application (dApp) on the Solana blockchain, where users participate in prediction markets and games of skill. The platform emphasizes transparency, fairness, and community-driven outcomes through blockchain technology."
    },
    {
      question: "Does the AI guarantee accurate predictions?",
      answer: "No, the AI does not guarantee accurate predictions. The AI enhances the user experience by providing insights and analysis, but all predictions are subject to market dynamics, probability, and chance. Frogdiction maintains fair odds (50/50 where applicable) and does not rig outcomes. Success depends on your skill, instinct, and understanding of the markets."
    },
    {
      question: "What games or predictions can I make?",
      answer: "Frogdiction offers three main features: Price Betting (predict High or Low price movements), Head or Butt (a simple 50/50 probability game), and Leaderboards (compete to climb the rankings). Each game uses $FDTN tokens as the native currency, and winners receive rewards based on their successful predictions."
    },
    {
      question: "What makes Frogdiction unique?",
      answer: "Frogdiction stands out by combining AI-enhanced prediction markets with the Solana blockchain's speed and low fees. Unlike traditional prediction platforms, Frogdiction offers real utility through the $FDTN token, fair 50/50 odds, transparent blockchain-based outcomes, and a community-driven ecosystem that rewards both accuracy and participation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ScrollAnimation delay={0.2}>
      <section
        id="faqs"
        className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 pb-0 mb-0 scroll-mt-[96px] md:scroll-mt-[112px] lg:scroll-mt-[128px]"
      >
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-14">
          <div className="bg-[rgba(161,216,52,0.33)] border border-[#96d432] rounded-[12px] md:rounded-[14px] h-[32px] md:h-[36px] inline-flex items-center justify-center px-4 md:px-5 mb-5 md:mb-6">
            <span className="text-[#96d432] text-[12px] md:text-[13px] font-bold tracking-[-0.6px]">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-[#fbfbfb] text-[48px] md:text-[56px] lg:text-[64px] font-black tracking-[-2.4px] md:tracking-[-2.8px] lg:tracking-[-3.2px] leading-[0.95]">
            FAQs
          </h2>
        </div>

        {/* Questions */}
        <div className="space-y-0 max-w-full mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-[#9dff00]/20">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-4 md:py-5 lg:py-6 text-left group"
                >
                  <span className="text-white text-[16px] md:text-[17px] lg:text-[18px] font-black tracking-[-0.8px] md:tracking-[-0.85px] group-hover:text-[#9dff00] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 md:w-[18px] md:h-[18px] lg:w-5 lg:h-5 transform transition-transform shrink-0 text-[#9dff00] ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-4 md:pb-5 lg:pb-6 pt-0">
                    <p className="text-[#afafaf] text-[14px] md:text-[15px] lg:text-[16px] font-semibold tracking-[-0.7px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </section>
    </ScrollAnimation>
  );
}
