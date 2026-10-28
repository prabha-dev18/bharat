"use client";

import { useState } from "react";
import Preloader from "./components/layout/Preloader";
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
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {!loadingComplete && <Preloader onComplete={() => setLoadingComplete(true)} />}
      <div
        className={`min-h-screen flex flex-col bg-[#FFFFFF] transition-opacity duration-700 ${
          loadingComplete ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Header />
        <main className="flex-1">
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
    </>
  );
}
