import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { LanguageProvider } from "@/lib/language";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kaya Matsumoto — Designer / Developer",
  description:
    "Designer / Front-end Developer. Founder of WORKFLOW DESIGN. Corporate branding, UI/UX design, web development.",
  openGraph: {
    title: "Kaya Matsumoto — Designer / Developer",
    description:
      "Designer / Front-end Developer. Founder of WORKFLOW DESIGN.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSansJP.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
