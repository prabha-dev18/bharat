import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ContactHero from "../components/contact/ContactHero";
import ContactFormSection from "../components/contact/ContactFormSection";
import WhatHappensNext from "../components/contact/WhatHappensNext";
import ContactCta from "../components/contact/ContactCta";

export const metadata = {
  title: "Contact Bharat Startup Ventures Pvt. Ltd. | Business Enquiries",
  description:
    "Contact Bharat Startup Ventures Pvt. Ltd. to discuss startup registration, funding assistance, business compliance, government schemes, software development and digital solutions.",
  keywords: [
    "Contact Bharat Startup Ventures Pvt. Ltd.",
    "Startup business consultation",
    "business services enquiry",
    "funding assistance enquiry",
    "technology solutions consultation",
  ],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <ContactHero />
        <ContactFormSection />
        <WhatHappensNext />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
