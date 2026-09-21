import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { T } from "@/components/T";
import MotionProvider from "@/components/MotionProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import { DEFAULT_OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

const DEFAULT_TITLE = "Farzandly — O‘zbek ota-onalari uchun zamonaviy raqamli tarbiya platformasi";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
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
    "bola tarbiyasi darslari",
  ],
  authors: [{ name: "Farzandly Team", url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "education",
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    title: DEFAULT_TITLE,
    description: "Farzandingizni yaxshiroq tushunishni har kuni 5 daqiqada o‘rganing.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "uz_UZ",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 778, height: 192, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: "Farzandingizni yaxshiroq tushunishni har kuni 5 daqiqada o‘rganing.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon.png", type: "image/png", sizes: "256x256" }],
    apple: "/icon.png",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#059669",
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: absoluteUrl("/logo.png"),
      description: SITE_DESCRIPTION,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "uz",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/qidiruv?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

// Telegram's WebApp SDK is only needed inside the Telegram Mini App. Loading it for
// everyone blocked first paint on a third-party origin, so it is now injected
// synchronously only when Telegram's launch parameters are present.
const telegramLoader = `(function(){try{var h=location.hash||'',s=location.search||'';if(window.TelegramWebviewProxy||/tgWebApp/.test(h)||/tgWebApp/.test(s)){document.write('<script src="https://telegram.org/js/telegram-web-app.js"><\/script>');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=chubbo@600,700,800,900&f[]=supreme@400,500,600,700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <Script id="telegram-webapp-loader" strategy="beforeInteractive">
          {telegramLoader}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF7F2] text-slate-800 antialiased selection:bg-emerald-200 selection:text-emerald-900">
        <LanguageProvider>
          <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-emerald-800 focus:font-bold focus:px-4 focus:py-2 focus:rounded-xl focus:shadow-lg"
        >
          <T k="a11y.skip" />
          </a>
          <AuthProvider>
            <MotionProvider>
              <Navbar />
              <main id="main-content" className="flex-1">{children}</main>
              <Footer />
            </MotionProvider>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
