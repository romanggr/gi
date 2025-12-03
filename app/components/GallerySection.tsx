"use client";

import { useIntlayer } from "next-intlayer";
import Section from "./Section";

export default function GallerySection() {
  const content = useIntlayer("gallery-section");

  const galleryItems = [
    {
      id: 1,
      front: "/images/gi-manto-test.webp",
      back: "/images/gi-manto-test-back.webp",
    },
    {
      id: 2,
      front: "/images/gi-manto-test.webp",
      back: "/images/gi-manto-test-back.webp",
    },
    {
      id: 3,
      front: "/images/gi-manto-test.webp",
      back: "/images/gi-manto-test-back.webp",
    },
    {
      id: 4,
      front: "/images/gi-manto-test.webp",
      back: "/images/gi-manto-test-back.webp",
    },
  ];

  return (
    <Section id="gallery" title={content.title} subtitle={content.subtitle} className="bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-[4/5] overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-300 hover:border-[var(--color-gold)] hover:border-3 hover:shadow-lg"
          >
            <img
              src={item.front}
              alt={`${item.id} back`}
              className="
                w-full h-full object-cover
                absolute inset-0
                opacity-100 group-hover:opacity-0
                transition-opacity duration-500
              "
            />

            <img
              src={item.back}
              alt={`${item.id} gi back`}
              className="
                w-full h-full object-cover
                absolute inset-0
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
            />
          </div>
        ))}
      </div>
    </Section>
  );
}