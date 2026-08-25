import type { Metadata } from "next";
import { siteIdentity } from "@/configurations";

export const BASE_URL = siteIdentity.baseUrl;

const title = `${siteIdentity.brandName} | Dermatologist in ${siteIdentity.city}`;
const description =
  `${siteIdentity.brandName} provides dermatologist-led skin, hair, laser, and aesthetic care in ${siteIdentity.city}. Call or WhatsApp ${siteIdentity.phone}.`;
const ogImage = "/assets/og-image.png";

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: title,
    template: `%s | ${siteIdentity.brandName}`,
  },
  description,
  applicationName: siteIdentity.brandName,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Dermatology Clinic",
  keywords: [
    `${siteIdentity.brandName} ${siteIdentity.city}`,
    `dermatologist ${siteIdentity.city}`,
    `skin clinic ${siteIdentity.city}`,
    `acne treatment ${siteIdentity.city}`,
    `pigmentation treatment ${siteIdentity.city}`,
    `laser hair removal ${siteIdentity.city}`,
    `hair PRP ${siteIdentity.city}`,
    `aesthetic clinic ${siteIdentity.city}`,
  ],
  authors: [{ name: siteIdentity.brandName }],
  creator: siteIdentity.brandName,
  publisher: siteIdentity.brandName,
  alternates: {
    canonical: BASE_URL,
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
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
  openGraph: {
    type: "website",
    locale: `en_${siteIdentity.countryCode}`,
    url: BASE_URL,
    siteName: siteIdentity.brandName,
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1536,
        height: 1024,
        alt: `${siteIdentity.brandName}, dermatology clinic in ${siteIdentity.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};
