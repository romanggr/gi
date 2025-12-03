"use client";

import { useIntlayer } from "next-intlayer";
import Section from "./Section";

import { FormEvent, useState } from "react";

export default function PreOrderSection() {
  const content = useIntlayer("pre-order-section");

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitted(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // honeypot
    if (formData.get("company")) {
      setIsSubmitted(false);
      return;
    }

    const data = Object.fromEntries(formData.entries());

    const payload = {
      firstName: (data.firstName as string) || "",
      lastName: (data.lastName as string) || "",
      email: (data.email as string) || "",
      phone: (data.phone as string) || "",
      comment: (data.comment as string) || "",
    };

    try {
      const res = await fetch("/api/preorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => null);

      if (!res.ok || !json?.ok) {
        const message = json?.error || content.genericError || "Something went wrong. Please try again.";
        setError(message);
        setIsSubmitted(false);
        return;
      }

      form.reset();
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again.");
    }
  };

  return (
    <Section id="preorder" title={content.title} subtitle={content.subtitle}>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
          <p className="text-slate-600 text-center mb-8 leading-relaxed">{content.description}</p>

          <form className="space-y-5" onSubmit={handleForm} aria-label={`${content.title} KASUGI`}>
            {/* Honeypot */}
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm font-bold text-slate-900 mb-1.5">
                  {content.form_firstName} <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  required
                  className="bg-white border border-gray-200 rounded-md px-4 py-2.5 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20 transition-all"
                  placeholder={content.form_firstNamePlaceholder.value}

                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-sm font-bold text-slate-900 mb-1.5">
                  {content.form_lastName}
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  className="bg-white border border-gray-200 rounded-md px-4 py-2.5 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20 transition-all"
                  placeholder={content.form_lastNamePlaceholder.value}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-bold text-slate-900 mb-1.5">
                  {content.form_email} <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-white border border-gray-200 rounded-md px-4 py-2.5 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20 transition-all"
                  placeholder={content.form_emailPlaceholder.value}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm font-bold text-slate-900 mb-1.5">
                  {content.form_phone} <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="bg-white border border-gray-200 rounded-md px-4 py-2.5 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20 transition-all"
                  placeholder={content.form_phonePlaceholder.value}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="comment" className="text-sm font-bold text-slate-900 mb-1.5">
                {content.form_comment}
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={4}
                className="bg-white border border-gray-200 rounded-md px-4 py-2.5 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20 transition-all resize-none"
                placeholder={content.form_commentPlaceholder.value}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className={`
                w-full bg-slate-900 text-white px-6 py-4 border border-slate-900 font-bold text-base
                rounded-lg shadow-sm transition-all duration-200
                ${isSubmitted ? "opacity-80 cursor-not-allowed" : "hover:bg-black"}
              `}
            >
              {isSubmitted ? content.form_submitted : content.form_submit}
            </button>

            {error && <p className="text-center text-xs text-red-500 font-medium">{error}</p>}

            <p className="text-center text-xs text-slate-500 font-medium">{content.form_freeShipping}</p>
          </form>
        </div>
      </div>
    </Section>
  );
}
