import { t, type Dictionary } from "intlayer";

const headerSectionContent = {
  key: "header",
  content: {
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

export default headerSectionContent;