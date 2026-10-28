import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AboutHero from "../components/about/AboutHero";
import WhoWeAre from "../components/about/WhoWeAre";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import AreasOfExpertise from "../components/about/AreasOfExpertise";
import OurCommitment from "../components/about/OurCommitment";
import AboutCta from "../components/about/AboutCta";

export const metadata = {
  title: "About Bharat Startup Ventures Pvt. Ltd. | Our Mission & Vision",
  description:
    "Learn about Bharat Startup Ventures Pvt. Ltd. and our approach to startup support, business registration, financial assistance, compliance and technology solutions.",
  keywords: [
    "Bharat Startup Ventures Pvt. Ltd.",
    "Business consulting and support",
    "startup support services",
    "business solutions company",
    "entrepreneurship support",
  ],
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <WhoWeAre />
        <MissionVision />
        <CoreValues />
        <AreasOfExpertise />
        <OurCommitment />
        <AboutCta />
      </main>
      <Footer />
    </div>
  );
}
