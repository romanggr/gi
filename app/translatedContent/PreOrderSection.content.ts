import { t, type Dictionary } from "intlayer";

const preOrderSectionContent = {
  key: "pre-order-section",
  content: {
    title: t({
      en: "Pre-Order",
      uk: "Передзамовлення",
      pl: "Przedsprzedaż",
    }),
    subtitle: t({
      en: "Free shipping for early orders",
      uk: "Безкоштовна доставка для ранніх замовлень",
      pl: "Darmowa dostawa dla wczesnych zamówień",
    }),
    description: t({
      en: "We are launching the first batch of custom GI. Leave your details now and get your custom GI among the first.",
      uk: "Ми запускаємо першу партію кастомних GI. Залиште свої дані зараз і отримайте кастомне GI одним із перших.",
      pl: "Uruchamiamy pierwszą partię personalizowanych GI. Zostaw swoje dane teraz i otrzymaj swoje custom GI jako jeden z pierwszych.",
    }),

    form_firstName: t({
      en: "First Name",
      uk: "Ім’я",
      pl: "Imię",
    }),
    form_firstNamePlaceholder: t({
      en: "Your first name",
      uk: "Ваше ім’я",
      pl: "Twoje imię",
    }),

    form_lastName: t({
      en: "Last Name",
      uk: "Прізвище",
      pl: "Nazwisko",
    }),
    form_lastNamePlaceholder: t({
      en: "Your last name",
      uk: "Ваше прізвище",
      pl: "Twoje nazwisko",
    }),

    form_email: t({
      en: "Email",
      uk: "Email",
      pl: "Email",
    }),
    form_emailPlaceholder: t({
      en: "email@example.com",
      uk: "email@example.com",
      pl: "email@example.com",
    }),

    form_phone: t({
      en: "Phone",
      uk: "Телефон",
      pl: "Telefon",
    }),

    form_phonePlaceholder: t({
      en: "+XX XXX XXX XXXX",
      uk: "+380 XXX XXX XXXX",
      pl: "+48 XXX XXX XXX",
    }),

    form_comment: t({
      en: "Comment / Ideas",
      uk: "Коментар / Ідеї",
      pl: "Komentarz / Pomysły",
    }),
    form_commentPlaceholder: t({
      en: "Leave your comment",
      uk: "Залиште свій коментар",
      pl: "Zostaw swój komentarz",
    }),

    form_submit: t({
      en: "Reserve GI",
      uk: "Зарезервувати GI",
      pl: "Zarezerwuj GI",
    }),
    form_submitted: t({
      en: "Reserved",
      uk: "Зарезервовано",
      pl: "Zarezerwowane",
    }),

    form_freeShipping: t({
      en: "Free shipping for early orders",
      uk: "Безкоштовна доставка для ранніх замовлень",
      pl: "Darmowa dostawa dla wczesnych zamówień",
    }),
  },
} satisfies Dictionary;

export default preOrderSectionContent;
