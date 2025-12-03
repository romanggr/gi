"use client";

import { useIntlayer } from "next-intlayer";
import Section from "./Section";

export default function HowItWorks() {
  const content = useIntlayer("how-it-works-section");

  const steps = [
    {
      number: "01",
      title: content.steps.step1.title,
      description: content.steps.step1.description,
    },
    {
      number: "02",
      title: content.steps.step2.title,
      description: content.steps.step2.description,
    },
    {
      number: "03",
      title: content.steps.step3.title,
      description: content.steps.step3.description,
    },
    {
      number: "04",
      title: content.steps.step4.title,
      description: content.steps.step4.description,
    },
  ];

  return (
    <Section id="how" title={content.title} subtitle={content.subtitle} className="bg-white border-y border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group relative bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg hover:border-[var(--color-gold)] transition-all"
          >
            <div className="absolute top-4 right-4 text-5xl font-bold text-gray-100">{step.number}</div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300 -translate-y-1/2" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
