import { t, type Dictionary } from "intlayer";

const howItWorksSectionContent = {
  key: "how-it-works-section",
  content: {
    title: t({
      en: "How It Works",
      uk: "Як це працює",
      pl: "Jak to działa",
    }),

    subtitle: t({
      en: "A simple process of creating your unique GI in 4 steps",
      uk: "Простий процес створення твого унікального GI у 4 кроки",
      pl: "Prosty proces tworzenia Twojego unikalnego GI w 4 krokach",
    }),

    steps: {
      step1: {
        title: t({
          en: "Choose Base",
          uk: "Обери основу",
          pl: "Wybierz bazę",
        }),
        description: t({
          en: "White, black or blue GI — your choice",
          uk: "Біле, чорне або синє GI — на твій вибір",
          pl: "Białe, czarne lub niebieskie GI — Twój wybór",
        }),
      },

      step2: {
        title: t({
          en: "Send Design",
          uk: "Надішли дизайн",
          pl: "Prześlij projekt",
        }),
        description: t({
          en: "Your artwork or choose from our collection",
          uk: "Твій ескіз або вибери з нашої колекції",
          pl: "Twój projekt lub wybierz z naszej kolekcji",
        }),
      },

      step3: {
        title: t({
          en: "Define Zones",
          uk: "Вкажи зони",
          pl: "Określ strefy",
        }),
        description: t({
          en: "Shoulders, chest, back, pants — any area you want customized",
          uk: "Плечі, груди, спина, штани — будь-яка зона для кастомізації",
          pl: "Ramiona, klatka piersiowa, plecy, spodnie — dowolna strefa do personalizacji",
        }),
      },

      step4: {
        title: t({
          en: "Get Your GI",
          uk: "Отримай своє GI",
          pl: "Odbierz swoje GI",
        }),
        description: t({
          en: "Production, quality check and shipping",
          uk: "Виробництво, перевірка якості та доставка",
          pl: "Produkcja, kontrola jakości i wysyłka",
        }),
      },
    },
  },
} satisfies Dictionary;

export default howItWorksSectionContent;
