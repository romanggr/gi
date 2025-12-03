import { t, type Dictionary } from "intlayer";

const footerSectionContent = {
  key: "footer",
  content: {
    copyright: t({
      en: "All rights reserved.",
      uk: "Усі права захищені.",
      pl: "Wszelkie prawa zastrzeżone.",
    }),
    madeWithPassion: t({
      en: "Made with passion for BJJ",
      uk: "Створено з любов'ю до BJJ",
      pl: "Stworzone z pasją do BJJ",
    }),
    followUs: t({
      en: "Follow Us",
      uk: "Слідкуйте за нами",
      pl: "Śledź nas",
    }),
    howItWorks: t({
      en: "How It Works",
      uk: "Як це працює",
      pl: "Jak to działa",
    }),
    gallery: t({
      en: "Examples",
      uk: "Приклади",
      pl: "Przykłady",
    }),
    faq: t({
      en: "FAQ",
      uk: "FAQ",
      pl: "FAQ",
    }),
    order: t({
      en: "Order",
      uk: "Замовити",
      pl: "Zamówić",
    }),
  },
} satisfies Dictionary;

export default footerSectionContent;
