import "./global.css";

export const metadata = {
  metadataBase: new URL("https://bharatstartupventures.com"),
  title: "Bharat Startup Ventures Pvt. Ltd. | Business & Startup Solutions",
  description:
    "India's premier startup enabler: Company Incorporation (Pvt Ltd, LLP), DPIIT & Startup India Recognition, Seed & Angel Funding Assistance, Legal Compliance, and Digital & Tech Solutions.",
  keywords: [
    "Bharat Startup Ventures",
    "Startup Registration India",
    "Private Limited Company Incorporation",
    "DPIIT Recognition",
    "Startup India Tax Exemption 80-IAC",
    "Seed Funding Support",
    "ROC & GST Compliance",
    "MVP Tech Development",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/images/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Bharat Startup Ventures Pvt. Ltd. | Empowering Indian Startups",
    description:
      "Transforming Visionary Founders into High-Growth Enterprises. Registration, Funding, Compliance & Tech Launchpad.",
    url: "https://bharatstartupventures.com",
    siteName: "Bharat Startup Ventures",
    images: [
      {
        url: "/images/logo1.png",
        width: 1536,
        height: 378,
        alt: "Bharat Startup Ventures Pvt. Ltd.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        {/* Playfair Display — Premium Serif for Hero Headlines */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white text-[#1E293B]">
        {children}
      </body>
    </html>
  );
}
