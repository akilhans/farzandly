import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { T } from "@/components/T";
import MotionProvider from "@/components/MotionProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
  absoluteUrl,
} from "@/lib/site";

const DEFAULT_TITLE = "Farzandly — Farzand tarbiyalash va bolalar psixologiyasi platformasi";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: SITE_KEYWORDS,
  authors: [{ name: "Farzandly Pedagogik Jamoasi", url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "education",
  classification: "Farzand tarbiyalash, Bolalar psixologiyasi, Ota-onalar ta'limi",
  alternates: {
    canonical: "/",
    languages: {
      "uz-UZ": "/",
    },
  },
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    title: DEFAULT_TITLE,
    description: "Farzand tarbiyalash bo‘yicha islomiy qadriyatlar va zamonaviy psixologiyaga asoslangan 5 daqiqalik darslar, ertaklar va amaliy tavsiyalar.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "uz_UZ",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 778, height: 192, alt: `${SITE_NAME} — Farzand tarbiyalash platformasi` }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: "Farzand tarbiyalash bo‘yicha har kuni 5 daqiqalik audio va matnli darslar.",
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
      "@type": ["Organization", "EducationalOrganization"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: ["Farzandly.uz", "Farzandly Tarbiya Platformasi"],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.png"),
        width: 778,
        height: 192,
        caption: `${SITE_NAME} — Farzand tarbiyalash va bolalar psixologiyasi`,
      },
      image: absoluteUrl("/logo.png"),
      description: SITE_DESCRIPTION,
      sameAs: [SOCIAL_LINKS.telegram, SOCIAL_LINKS.telegramBot, SOCIAL_LINKS.instagram].filter(Boolean),
      knowsAbout: [
        "Farzand tarbiyalash",
        "Farzand tarbiyasi",
        "Bola tarbiyasi",
        "Bolalar psixologiyasi",
        "Islomiy tarbiya",
        "Ota-ona va bola munosabatlari",
        "Bolalarda tantrum va injiqlik",
        "Chaqaloq parvarishi",
        "Maktabgacha ta'lim",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: `${SITE_URL}/#contact`,
        availableLanguage: ["uz", "ru"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: "Farzandly — Farzand tarbiyalash platformasi",
      inLanguage: ["uz", "ru"],
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/qidiruv?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebApplication",
      "@id": `${SITE_URL}/#app`,
      name: SITE_NAME,
      url: SITE_URL,
      applicationCategory: "EducationalApplication",
      operatingSystem: "All",
      browserRequirements: "Requires JavaScript. Requires HTML5.",
      description: "Farzand tarbiyalash bo‘yicha o‘zbek tilidagi ilk raqamli mikro-ta'lim platformasi.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "UZS",
        availability: "https://schema.org/InStock",
      },
      author: { "@id": `${SITE_URL}/#organization` },
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
