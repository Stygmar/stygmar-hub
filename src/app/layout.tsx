import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stygmar — Studio & Hub de Projets Web",
  description: "Portail officiel de Stygmar. Découvrez nos applications web, calculateurs pratiques d'aménagement et projets numériques.",
  metadataBase: new URL("https://stygmar.com"),
  alternates: {
    canonical: "https://stygmar.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Stygmar — Studio & Hub de Projets Web",
    description: "Portail officiel de Stygmar. Découvrez nos outils en ligne et projets innovants.",
    url: "https://stygmar.com",
    siteName: "Stygmar",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth dark">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3923504098703524"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} bg-[#07090e] text-[#f1f5f9] antialiased selection:bg-[#10b981]/25 selection:text-[#10b981]`}>
        {children}
      </body>
    </html>
  );
}
