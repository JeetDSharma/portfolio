import type { Metadata } from "next";
import localFont from "next/font/local";
import { Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jeetsharma.dev"),
  title: {
    default: "Jeet Sharma | Founding Engineer & Product Builder",
    template: "%s | Jeet Sharma",
  },
  description:
    "Founding engineer who builds products from scratch and ships them. AI platforms, enterprise software, and products people actually use.",
  keywords: [
    "Jeet Sharma",
    "Founding Engineer",
    "Product Engineer",
    "Full Stack",
    "Startup Engineer",
    "AI",
    "UMass Amherst",
    "Software Engineer",
  ],
  authors: [{ name: "Jeet Sharma", url: "https://jeetsharma.com" }],
  creator: "Jeet Sharma",
  publisher: "Jeet Sharma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jeetsharma.com",
    title: "Jeet Sharma | Founding Engineer & Product Builder",
    description:
      "Founding engineer shipping products end-to-end. AI platforms, enterprise software, and reliable 0→1 builds.",
    siteName: "Jeet Sharma Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jeet Sharma, Founding Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeet Sharma | Founding Engineer & Product Builder",
    description:
      "Founding engineer shipping products end-to-end. MS CS @ UMass Amherst.",
    creator: "@jeetsharma",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta
          name="theme-color"
          content="#0f0f0f"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="theme-color"
          content="#fcfcfc"
          media="(prefers-color-scheme: light)"
        />
        <link rel="canonical" href="https://jeetsharma.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jeet Sharma",
              url: "https://jeetsharma.dev",
              image: "https://jeetsharma.dev/og-image.png",
              jobTitle: "Founding Engineer",
              worksFor: {
                "@type": "EducationalOrganization",
                name: "University of Massachusetts Amherst",
              },
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "University of Massachusetts Amherst",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "University of Mumbai",
                },
              ],
              sameAs: [
                "https://github.com/JeetDSharma",
                "https://www.linkedin.com/in/jeet-sharma",
              ],
              knowsAbout: [
                "Product Development",
                "Software Engineering",
                "Artificial Intelligence",
                "Full Stack Development",
                "Startups",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
