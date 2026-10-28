import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SchemesHero from "../components/schemes/SchemesHero";
import SchemeMatcher from "../components/schemes/SchemeMatcher";
import SchemesList from "../components/schemes/SchemesList";
import SchemeProcess from "../components/schemes/SchemeProcess";
import WhyChooseForSchemes from "../components/schemes/WhyChooseForSchemes";
import SchemesFaq from "../components/schemes/SchemesFaq";
import SchemesCta from "../components/schemes/SchemesCta";

export const metadata = {
  title: "Government Schemes for Startups & MSMEs | Bharat Startup Ventures",
  description:
    "Explore government schemes, startup support, MSME incentives, PMEGP, MUDRA, CGTMSE, DPIIT recognition and application guidance with Bharat Startup Ventures Pvt. Ltd.",
  keywords: [
    "Government schemes for startups and MSMEs",
    "Startup funding assistance",
    "MSME government schemes",
    "business loan assistance",
    "government subsidy consultancy",
    "Startup India recognition",
    "PMEGP application assistance",
    "government funding eligibility",
  ],
  alternates: {
    canonical: "/government-schemes",
  },
};

export default function GovernmentSchemesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <SchemesHero />
        <SchemeMatcher />
        <SchemesList />
        <SchemeProcess />
        <WhyChooseForSchemes />
        <SchemesFaq />
        <SchemesCta />
      </main>
      <Footer />
    </div>
  );
}
