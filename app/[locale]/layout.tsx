import "../global.css";
import { Roboto } from "next/font/google";
import { NextLayoutIntlayer } from "next-intlayer";

export { generateStaticParams } from "next-intlayer";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;
  return (
    <html lang={locale} dir="ltr">
      <body className={roboto.variable}>{children}</body>
    </html>
  );
};

export default LocaleLayout;
