// "use client";

// import Section from "./Section";

// export default function CustomizableZones({ params }: { params?: Promise<{ locale: Locale }> }) {
//   const { t } = useTranslation();

//   return (
//     <Section
//       id="zones"
//       title={t.customizableZones.title}
//       subtitle={t.customizableZones.subtitle}
//       className="bg-white border-y border-gray-200"
//     >
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
//         <ModelPreview3D />
//       </div>
//     </Section>
//   );
// }

//     customizableZones: {
//       title: "What Can Be Customized",
//       subtitle: "5 zones for creating a unique design",
//       zones: {
//         shoulders: "Shoulders",
//         back: "Back",
//         chest: "Chest",
//         pants: "Pants",
//         sidePanels: "Side Panels",
//       },
//       maxSize: "Max. large patch size",
//       maxSizeValue: "30×30 cm",
//       minThickness: "Min. line thickness",
//       minThicknessValue: "2 mm for embroidery",
//     },