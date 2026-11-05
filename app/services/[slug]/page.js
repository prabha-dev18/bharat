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

import { getServiceBySlug, getAllServices } from "../../data/servicesDetailData";
import { getSchemeBySlug, getAllSchemes } from "../../data/schemesDetailData";

export async function generateStaticParams() {
  const serviceParams = getAllServices().map((s) => ({ slug: s.slug }));
  const schemeParams = getAllSchemes().map((s) => ({ slug: s.slug }));
  return [...serviceParams, ...schemeParams];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getServiceBySlug(slug) || getSchemeBySlug(slug);

  if (!item) {
    return {
      title: "Service Not Found | Bharat Startup Ventures",
    };
  }

  return {
    title: item.seo?.title || `${item.title} | Bharat Startup Ventures`,
    description: item.seo?.description || item.tagline || item.subtitle,
    keywords: item.seo?.keywords || [item.title, "Bharat Startup Ventures", "Business services"],
    alternates: {
      canonical: `/services/${item.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const item = getServiceBySlug(slug) || getSchemeBySlug(slug);

  if (!item) {
    notFound();
  }

  const isScheme = Boolean(item.subsidyMatrix || item.badge?.includes("SCHEME"));

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main id="main-content" className="flex-1">
        <DetailHero
          item={item}
          parentLabel={isScheme ? "Government Schemes" : "Services"}
          parentHref={isScheme ? "/government-schemes" : "/services"}
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
          title={`Need professional assistance with ${item.title}?`}
          description="Speak with our experienced advisors for complete documentation, scheme eligibility vetting, and single-window execution support."
        />
      </main>
      <Footer />
    </div>
  );
}
