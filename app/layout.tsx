import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Marcos Frutos - Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer passionate about crafting accessible, pixel-perfect user interfaces. Specializing in Vue.js, React, and Next.js.",
  keywords: [
    "Marcos Frutos",
    "Frontend Engineer",
    "Senior Frontend Developer",
    "Vue.js",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Netherlands",
  ],
  authors: [{ name: "Marcos Frutos", url: "https://marfru.dev" }],
  creator: "Marcos Frutos",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marfru.dev",
    title: "Marcos Frutos - Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer passionate about crafting accessible, pixel-perfect user interfaces. Specializing in Vue.js, React, and Next.js.",
    siteName: "Marcos Frutos Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcos Frutos - Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer passionate about crafting accessible, pixel-perfect user interfaces. Specializing in Vue.js, React, and Next.js.",
    creator: "@m4rfru",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
