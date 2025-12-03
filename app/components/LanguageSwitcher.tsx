"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useLocale } from "next-intlayer";
import { getLocaleName, getLocalizedUrl } from "intlayer";

export default function LanguageSwitcher() {
  const { locale, pathWithoutLocale, availableLocales, setLocale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="
          flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1.5
          text-xs font-semibold uppercase tracking-[0.16em] text-gray-800 shadow-sm
          transition-colors hover:border-gray-400 hover:bg-gray-50
          focus:outline-none focus:ring-0 focus:ring-offset-0
        "
      >
        <span>{locale}</span>
        <svg
          className={`h-3 w-3 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`
          absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg
          transform transition-all duration-200 origin-top-right
          ${isOpen ? "opacity-100 scale-100 translate-y-0" : "pointer-events-none opacity-0 scale-95 -translate-y-1"}
          focus:outline-none focus:ring-0 outline-none
        `}
      >
        <ul role="listbox" className="py-1">
          {availableLocales.map((option) => {
            const href = getLocalizedUrl(pathWithoutLocale, option);

            return (
              <li key={option}>
                <Link
                  href={href}
                  replace
                  role="option"
                  aria-selected={locale === option}
                  onClick={() => {
                    setLocale(option);
                    setIsOpen(false);
                  }}
                  className={`
                    flex w-full items-center justify-between px-3 py-2 text-xs font-medium tracking-wide transition-colors
                    ${locale === option ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50"}
                    focus:outline-none focus:ring-0 outline-none
                  `}
                >
                  <span className="uppercase tracking-[0.16em]">{option}</span>
                  <span className="ml-2 text-[11px] text-gray-500">
                    {getLocaleName(option)}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}