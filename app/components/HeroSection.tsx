'use client';

import { useIntlayer } from "next-intlayer";

export default function HeroSection() {
  const content = useIntlayer("hero-section");
  return (
    <section id="hero" className="relative min-h-screen flex items-center border-b border-gray-200">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-section-bg.webp')`,
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-white"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {content.title1}
            <br />
            <span className="text-gray-200">{content.title2}</span>
          </h1>

          <div className="w-20 h-0.5 bg-gray-300 mb-8" />

          <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-2xl leading-relaxed">{content.description}</p>
          <p className="text-lg text-gray-200 mb-10">{content.freeShipping}</p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
            <a
              href="#preorder"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white
                         bg-gray-900 border border-gray-900 rounded-md shadow-sm
                         transition-colors active:duration-75
                         hover:bg-black active:bg-black"
            >
              {content.ctaPrimary}
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white
                         border border-gray-300 rounded-md shadow-sm bg-white/5 backdrop-blur-sm
                         transition-colors active:duration-75
                         hover:bg-white/10 active:bg-white/10"
            >
              {content.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
