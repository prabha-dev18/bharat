import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/home/Hero";
import ServicesMarquee from "./components/home/ServicesMarquee";
import Introduction from "./components/home/Introduction";
import CoreSolutions from "./components/home/CoreSolutions";
import WhyChooseUs from "./components/home/WhyChooseUs";
import WhoWeSupport from "./components/home/WhoWeSupport";
import OurProcess from "./components/home/OurProcess";
import HomeCta from "./components/layout/HomeCta";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <ServicesMarquee />
        <Introduction />
        <CoreSolutions />
        <WhyChooseUs />
        <WhoWeSupport />
        <OurProcess />
        <HomeCta />
      </main>
      <Footer />
    </div>
  );
}
