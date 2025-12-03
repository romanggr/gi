"use client";

import { useState } from "react";
import Section from "./Section";
import { useIntlayer } from "next-intlayer";

export default function FAQSection() {
  const content = useIntlayer("faq-section");

  const faqItems = [
    { question: content.customDesign_question, answer: content.customDesign_answer },
    { question: content.productionTime_question, answer: content.productionTime_answer },
    { question: content.competition_question, answer: content.competition_answer },
    { question: content.returns_question, answer: content.returns_answer },
    { question: content.restrictedZones_question, answer: content.restrictedZones_answer },
    { question: content.care_question, answer: content.care_answer },
    { question: content.international_question, answer: content.international_answer },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <Section id="faq" title={content.title} subtitle={content.subtitle} className="bg-white border-y border-gray-200">
      <div className="max-w-3xl mx-auto space-y-3">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`
                rounded-xl overflow-hidden border bg-white shadow-sm
 duration-200
                ${isOpen ? "border-[var(--color-gold)] shadow-md" : "border-gray-200"}
              `}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-5 py-4 md:py-5 
                           text-left cursor-pointer hover:bg-gray-50"
                aria-expanded={isOpen}
              >
                <span className="text-slate-900 font-semibold text-sm md:text-base pr-4" style={{ fontFamily: "var(--font-serif)" }}>
                  {item.question}
                </span>

                <svg
                  className={`
                    w-5 h-5 text-slate-600 flex-shrink-0
                    duration-200
                    ${isOpen ? "rotate-180" : "rotate-0"}
                  `}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* плавне відкривання */}
              <div
                className={`
                  px-5 pr-8
                  overflow-hidden
                  duration-200
                  ${isOpen ? "max-h-[300px] opacity-100 pb-4 md:pb-5" : "max-h-0 opacity-0 pb-0"}
                `}
                style={{ willChange: "max-height" }}
              >
                <p className="text-slate-600 leading-relaxed text-sm md:text-[15px] pt-1" style={{ fontFamily: "var(--font-chivo)" }}>
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
