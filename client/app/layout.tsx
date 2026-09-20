import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Farzandly — O‘zbek ota-onalari uchun zamonaviy raqamli tarbiya platformasi",
  description: "Farzand tarbiyasi — har kuni o‘rganiladigan yo‘l. Islomiy qadriyatlar, zamonaviy bolalar psixologiyasi va amaliy mashqlar asosidagi qisqa 5 daqiqalik darslar.",
  keywords: [
    "Farzandly",
    "farzand tarbiyasi",
    "bolalar psixologiyasi",
    "islomiy tarbiya",
    "ota-onalar uchun",
    "tantrum",
    "injiqlik",
    "ekran vaqti",
    "uzbek parenting",
  ],
  authors: [{ name: "Farzandly Team" }],
  creator: "Farzandly",
  openGraph: {
    title: "Farzandly — O‘zbek ota-onalari uchun raqamli tarbiya platformasi",
    description: "Farzandingizni yaxshiroq tushunishni har kuni 5 daqiqada o‘rganing.",
    url: "https://farzandly.uz",
    siteName: "Farzandly",
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farzandly — O‘zbek ota-onalari uchun raqamli tarbiya platformasi",
    description: "Farzandingizni yaxshiroq tushunishni har kuni 5 daqiqada o‘rganing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { AuthProvider } from "@/context/AuthContext";

import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className="h-full scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF7F2] text-slate-800 antialiased selection:bg-emerald-200 selection:text-emerald-900">
        <AuthProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
