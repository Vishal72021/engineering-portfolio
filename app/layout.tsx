import type { Metadata } from "next";
import "./globals.css";
import { siteDescription, siteName } from "@/lib/metadata";
import { getSiteUrlString, isProductionDeployment } from "@/lib/site-url";

const siteUrl = getSiteUrlString();
const production = isProductionDeployment();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — AI Software Engineer`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: siteUrl,
  },
  robots: production
    ? { index: true, follow: true }
    : { index: false, follow: false, noarchive: true },
  openGraph: {
    title: `${siteName} — AI Software Engineer`,
    description: siteDescription,
    url: siteUrl,
    type: "website",
    siteName,
    images: [
      {
        url: "/images/profile/vishal-tripathy.png",
        width: 1200,
        height: 1200,
        alt: "Vishal Tripathy — AI Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — AI Software Engineer`,
    description: siteDescription,
    images: ["/images/profile/vishal-tripathy.png"],
  },
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteName,
    url: siteUrl,
    jobTitle: "AI Software Engineer",
    sameAs: [
      "https://github.com/Vishal72021",
      "https://www.linkedin.com/in/vishaltripathy/",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
