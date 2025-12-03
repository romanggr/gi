import { IntlayerServerProvider } from "next-intlayer/server";
import HeroSection from "../components/HeroSection";
import { IntlayerClientProvider, NextLayoutIntlayer } from "next-intlayer";
import Header from "../components/Header";
import HowItWorksSection from "../components/HowItWorksSection";
import GallerySection from "../components/GallerySection";
import FAQSection from "../components/FAQSection";
import PreOrderSection from "../components/PreOrderSection";
import Footer from "../components/Footer";
import StructuredData from "../components/StructuredData";

const Page: NextLayoutIntlayer = async ({ params }) => {
  const { locale } = await params;

  return (
    <IntlayerServerProvider locale={locale}>
      <IntlayerClientProvider locale={locale}>
        <StructuredData locale={locale} />
        <Header />
        <main>
          <HeroSection />
          <HowItWorksSection />
          <GallerySection />
          {/* <CustomizableZonesSection /> */}
          <FAQSection />
          <PreOrderSection />
        </main>
        <Footer />
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
};

export default Page;
