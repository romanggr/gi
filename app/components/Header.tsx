"use client";

import { useIntlayer } from "next-intlayer";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const content = useIntlayer("header");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <img src="/images/logo-dark.png" alt="KASUGI Logo" className="h-12 w-auto object-contain" />

            <span
              className="text-xl sm:text-2xl font-semibold tracking-[0.18em] uppercase leading-none text-slate-900"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              KASUGI
            </span>
          </a>

          <div className="flex items-center gap-6 lg:gap-10">
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              <NavLink href="#how">{content.howItWorks}</NavLink>
              <NavLink href="#gallery">{content.gallery}</NavLink>
              <NavLink href="#faq">{content.faq}</NavLink>
              <NavLink href="#preorder">{content.order}</NavLink>
            </div>

            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-sm font-medium uppercase tracking-[0.16em] text-slate-900 transition-colors hover:text-slate-600">
      {children}
    </a>
  );
}
