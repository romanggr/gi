"use client";

import { useIntlayer } from "next-intlayer";

export default function Footer() {

  const content = useIntlayer("footer");

  return (
    <footer className="bg-slate-900 border-t border-gray-800">
      <div className="mx-auto w-[85%] max-w-7xl px-4 sm:px-6 lg:px-8 pt-[64px] pb-[30px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-5">
              <img src="/images/logo-light.png" alt="KASUGI Logo" className="h-11 w-auto object-contain md:h-13" />
              <span className="text-white font-bold text-xl md:text-2xl ml-3 tracking-[0.15em]" style={{ fontFamily: "var(--font-serif)" }}>
                KASUGI
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
              <p className="text-sm text-gray-400 italic leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
                Made with passion for BJJ
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-semibold text-sm uppercase tracking-[0.2em] mb-6 relative inline-block">Navigation</h3>
            <nav className="flex flex-col gap-3.5 items-center md:items-start">
              <a
                href="#how"
                className="text-sm text-gray-400 hover:text-[var(--color-gold)] active:text-[var(--color-gold)] transition-all duration-200 font-medium uppercase tracking-[0.1em]"
              >
                {content.howItWorks}
              </a>

              <a
                href="#gallery"
                className="text-sm text-gray-400 hover:text-[var(--color-gold)] active:text-[var(--color-gold)] transition-all duration-200 font-medium uppercase tracking-[0.1em]"
              >
                {content.gallery}
              </a>

              <a
                href="#faq"
                className="text-sm text-gray-400 hover:text-[var(--color-gold)] active:text-[var(--color-gold)] transition-all duration-200 font-medium uppercase tracking-[0.1em]"
              >
                {content.faq}
              </a>

              <a
                href="#preorder"
                className="text-sm text-gray-400 hover:text-[var(--color-gold)] active:text-[var(--color-gold)] transition-all duration-200 font-medium uppercase tracking-[0.1em]"
              >
                {content.order}
              </a>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-semibold text-sm uppercase tracking-[0.2em] mb-6 relative inline-block">Follow Us</h3>
            <a
              href="https://instagram.com/kasugi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-gray-400 hover:text-[var(--color-gold)] active:text-[var(--color-gold)] transition-all duration-200 group w-fit mx-auto md:mx-0"
            >
              <div className="relative">
                <svg
                  className="w-6 h-6 transition-transform group-hover:scale-110 group-active:scale-95"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  />
                </svg>
                <span className="absolute inset-0 bg-[var(--color-gold)] opacity-0 group-hover:opacity-10 group-active:opacity-20 rounded-full transition-opacity" />
              </div>

              <span className="text-sm font-medium uppercase tracking-[0.1em]">Instagram</span>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 md:pt-8">
          <div className="mx-auto w-[85%] max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs md:text-sm text-gray-500 font-medium text-center" style={{ fontFamily: "var(--font-serif)" }}>
              © {new Date().getFullYear()} KASUGI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
