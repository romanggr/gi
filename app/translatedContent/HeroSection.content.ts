import { t, type Dictionary } from "intlayer";

const heroSectionContent = {
  key: "hero-section",
  content: {
    title1: t({
      en: "Your GI.",
      uk: "Твій GI.",
      pl: "Twoje GI.",
    }),
    title2: t({
      en: "Your Style.",
      uk: "Твій Стиль.",
      pl: "Twój Styl.",
    }),
    description: t({
      en: "Choose GI color and make it yours with personalized patches.",
      uk: "Обери колір GI і зроби його своїм завдяки персональним нашивкам.",
      pl: "Wybierz kolor GI i nadaj mu własny charakter dzięki personalnym naszywkom.",
    }),
    freeShipping: t({
      en: "Free shipping for pre orders",
      uk: "Безкоштовна доставка для передзамовлень",
      pl: "Darmowa wysyłka dla zamówień przedpremierowych",
    }),
    ctaPrimary: t({
      en: "Submit Order",
      uk: "Замовити",
      pl: "Złóż zamówienie",
    }),
    ctaSecondary: t({
      en: "Our Work",
      uk: "Наші роботи",
      pl: "Nasze realizacje",
    }),
  },
} satisfies Dictionary;

export default heroSectionContent;
