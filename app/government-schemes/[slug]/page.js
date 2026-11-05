import { notFound } from "next/navigation";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import HomeCta from "../../components/layout/HomeCta";
import DetailHero from "../../components/detail/DetailHero";
import DetailTrustStrip from "../../components/detail/DetailTrustStrip";
import DetailOverview from "../../components/detail/DetailOverview";
import DetailMatrix from "../../components/detail/DetailMatrix";
import DetailWhatsIncluded from "../../components/detail/DetailWhatsIncluded";
import DetailDocuments from "../../components/detail/DetailDocuments";
import DetailProcess from "../../components/detail/DetailProcess";
import DetailTargetAudience from "../../components/detail/DetailTargetAudience";
import DetailFaq from "../../components/detail/DetailFaq";
import DetailRelated from "../../components/detail/DetailRelated";

import { getSchemeBySlug, getAllSchemes } from "../../data/schemesDetailData";
import { getServiceBySlug, getAllServices } from "../../data/servicesDetailData";

export async function generateStaticParams() {
  const schemeParams = getAllSchemes().map((s) => ({ slug: s.slug }));
  const serviceParams = getAllServices().map((s) => ({ slug: s.slug }));
  return [...schemeParams, ...serviceParams];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getSchemeBySlug(slug) || getServiceBySlug(slug);

  if (!item) {
    return {
      title: "Scheme Not Found | Bharat Startup Ventures",
    };
  }

  return {
    title: item.seo?.title || `${item.title} | Bharat Startup Ventures`,
    description: item.seo?.description || item.tagline || item.subtitle,
    keywords: item.seo?.keywords || [item.title, "Government Scheme", "MSME subsidy", "Bharat Startup Ventures"],
    alternates: {
      canonical: `/government-schemes/${item.slug}`,
    },
  };
}

export default async function SchemeDetailPage({ params }) {
  const { slug } = await params;

  // Search scheme database first, fallback to service database for cross-compatibility
  const item = getSchemeBySlug(slug) || getServiceBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main id="main-content" className="flex-1">
        <DetailHero
          item={item}
          parentLabel="Government Schemes"
          parentHref="/government-schemes"
        />
        <DetailTrustStrip />
        <DetailOverview item={item} />
        {item.subsidyMatrix && <DetailMatrix item={item} />}
        <DetailWhatsIncluded item={item} />
        <DetailDocuments item={item} />
        <DetailProcess item={item} />
        <DetailTargetAudience item={item} />
        <DetailFaq item={item} />
        <DetailRelated item={item} />
        <HomeCta
          badge={item.title.toUpperCase()}
          title={`Looking for subsidy or loan support under ${item.title}?`}
          description="Bharat Startup Ventures helps you prepare bank-compliant DPRs, verify eligibility, file portal applications, and coordinate with financing banks."
        />
      </main>
      <Footer />
    </div>
  );
}
