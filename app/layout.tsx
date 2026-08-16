import type { Metadata } from "next";
import "./globals.css";
import { siteDescription, siteName } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: `${siteName} — Engineer • Builder • AI Innovator`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    title: `${siteName} — Engineer • Builder • AI Innovator`,
    description: siteDescription,
    type: "website",
    siteName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
