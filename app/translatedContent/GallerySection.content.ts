import { t, type Dictionary } from "intlayer";

const gallerySectionContent = {
  key: "gallery-section",
  content: {
    title: t({
      en: "Custom Examples",
      uk: "Приклади кастомів",
      pl: "Przykłady customów",
    }),
    subtitle: t({
      en: "Inspiration for creating a unique GI",
      uk: "Натхнення для створення унікального GI",
      pl: "Inspiracje do stworzenia unikalnego GI",
    }),
  },
} satisfies Dictionary;

export default gallerySectionContent;