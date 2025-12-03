import { t, type Dictionary } from "intlayer";

const faqSectionContent = {
  key: "faq-section",
  content: {
    title: t({
      en: "Frequently Asked Questions",
      uk: "Часті запитання",
      pl: "Najczęściej zadawane pytania",
    }),
    subtitle: t({
      en: "Answers to the most common questions",
      uk: "Відповіді на найпоширеніші запитання",
      pl: "Odpowiedzi na najczęstsze pytania",
    }),

    customDesign_question: t({
      en: "Can I create my own patch design?",
      uk: "Чи можу я створити власний дизайн нашивки?",
      pl: "Czy mogę stworzyć własny projekt naszywki?",
    }),
    customDesign_answer: t({
      en: "Yes. Maximum patch size is 240 × 200 mm. For clean embroidery, avoid very small elements — all details must be at least 2 mm thick.",
      uk: "Так. Максимальний розмір нашивки — 240 × 200 мм. Щоб вишивка була якісною, уникайте дуже дрібних елементів — товщина деталей має бути не менше 2 мм.",
      pl: "Tak. Maksymalny rozmiar naszywki to 240 × 200 mm. Aby haft był czysty, unikaj bardzo małych elementów — wszystkie detale muszą mieć co najmniej 2 mm grubości.",
    }),

    productionTime_question: t({
      en: "How long does production take?",
      uk: "Скільки триває виробництво?",
      pl: "Ile trwa produkcja?",
    }),
    productionTime_answer: t({
      en: "Production takes up to 7 days, plus shipping time.",
      uk: "Виробництво займає до 7 днів, плюс час доставки.",
      pl: "Produkcja trwa do 7 dni, plus czas wysyłki.",
    }),

    competition_question: t({
      en: "Is it suitable for competitions?",
      uk: "Чи підходить це для змагань?",
      pl: "Czy GI nadaje się na zawody?",
    }),
    competition_answer: t({
      en: "Yes, all our gis are made according to IBJJF standards.",
      uk: "Так, усі наші GI відповідають стандартам IBJJF.",
      pl: "Tak, wszystkie nasze GI są wykonane zgodnie ze standardami IBJJF.",
    }),

    returns_question: t({
      en: "Can I return the product?",
      uk: "Чи можна повернути товар?",
      pl: "Czy mogę zwrócić produkt?",
    }),
    returns_answer: t({
      en: "Returns are possible only in case of a factory defect. Custom-made items cannot be returned or exchanged.",
      uk: "Повернення можливе лише у випадку заводського браку. Індивідуальні вироби не підлягають поверненню або обміну.",
      pl: "Zwrot jest możliwy tylko w przypadku wady fabrycznej. Produkty wykonane na zamówienie nie podlegają zwrotowi ani wymianie.",
    }),

    restrictedZones_question: t({
      en: "Why can't patches be placed on all zones?",
      uk: "Чому нашивки не можна розміщувати на всіх зонах?",
      pl: "Dlaczego naszywek nie można umieszczać we wszystkich strefach?",
    }),
    restrictedZones_answer: t({
      en: "Our gis follow strict IBJJF rules that define allowed patch zones. Patches outside these zones may cause the gi to be rejected at official tournaments.",
      uk: "Наші GI відповідають строгим правилам IBJJF щодо дозволених зон розміщення нашивок. Нашивки поза цими зонами можуть призвести до недопуску GI на офіційних змаганнях.",
      pl: "Nasze GI spełniają rygorystyczne zasady IBJJF dotyczące dozwolonych stref na naszywki. Naszywki poza tymi strefami mogą sprawić, że GI zostanie odrzucone na oficjalnych zawodach.",
    }),

    care_question: t({
      en: "How should I care for the gi?",
      uk: "Як доглядати за GI?",
      pl: "Jak dbać o GI?",
    }),
    care_answer: t({
      en: "Wash at max 30°C. Do not tumble dry. Do not iron over embroidery. Use mild detergent without bleach.",
      uk: "Прати при температурі не вище 30°C. Не сушити в машинці. Не прасувати поверх вишивки. Використовувати м'який мийний засіб без відбілювача.",
      pl: "Prać maksymalnie w 30°C. Nie suszyć w suszarce. Nie prasować po haftach. Używać łagodnych detergentów bez wybielacza.",
    }),

    international_question: t({
      en: "Is international shipping available?",
      uk: "Чи доступна міжнародна доставка?",
      pl: "Czy dostępna jest wysyłka międzynarodowa?",
    }),
    international_answer: t({
      en: "Yes. We ship across Europe and the USA.",
      uk: "Так. Ми доставляємо по Європі та США.",
      pl: "Tak. Wysyłamy na terenie Europy i USA.",
    }),
  },
} satisfies Dictionary;

export default faqSectionContent;
