import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ServicesHero from "../components/services/ServicesHero";
import ServicesCatalogue from "../components/services/ServicesCatalogue";
import HowWeDeliver from "../components/services/HowWeDeliver";
import ServicesFaq from "../components/services/ServicesFaq";
import ServicesCta from "../components/services/ServicesCta";

export const metadata = {
  title: "Business, Startup, Funding & IT Services | Bharat Startup Ventures",
  description:
    "Explore company registration, GST and tax compliance, startup funding assistance, government schemes, licences, software development, AI automation, SEO and digital marketing services.",
  keywords: [
    "Business and startup services",
    "Company incorporation",
    "startup funding assistance",
    "MSME loan support",
    "GST compliance",
    "website development",
    "AI automation services",
    "digital marketing services",
  ],
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <ServicesHero />
        <ServicesCatalogue />
        <HowWeDeliver />
        <ServicesFaq />
        <ServicesCta />
      </main>
      <Footer />
    </div>
  );
}
