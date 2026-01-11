import type { Metadata } from "next";
import localFont from "next/font/local";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://jeetsharma.dev"),
  title: {
    default: "Jeet Sharma | Backend Engineer & Distributed Systems",
    template: "%s | Jeet Sharma",
  },
  description:
    "Backend Engineer building production-grade distributed systems and AI platforms. Founding engineer with experience scaling from zero to enterprise. MS in Computer Science @ UMass Amherst.",
  keywords: [
    "Jeet Sharma",
    "Backend Engineer",
    "Distributed Systems",
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Python Developer",
    "Node.js Developer",
    "UMass Amherst",
    "System Architecture",
    "Production AI",
    "Digital Forensics",
    "RAG Systems",
    "PostgreSQL",
    "AWS",
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
    title: "Jeet Sharma | Backend Engineer & Distributed Systems",
    description:
      "Backend Engineer building production-grade distributed systems and AI platforms. Founding engineer with experience scaling from zero to enterprise.",
    siteName: "Jeet Sharma Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jeet Sharma - Backend Engineer & Distributed Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeet Sharma | Backend Engineer & Distributed Systems",
    description:
      "Backend Engineer building production-grade distributed systems and AI platforms. MS in Computer Science @ UMass Amherst.",
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
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="theme-color"
          content="#ffffff"
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
              jobTitle: "Backend Engineer",
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
                "Distributed Systems",
                "Backend Engineering",
                "System Architecture",
                "Artificial Intelligence",
                "Python",
                "Node.js",
                "PostgreSQL",
                "AWS",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
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
