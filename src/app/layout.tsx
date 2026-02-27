import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
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
    "松本夏弥 — デザイナー / フロントエンド開発。WORKFLOW DESIGN 代表。企業ブランディング、UI/UXデザイン、ウェブ開発。",
  openGraph: {
    title: "Kaya Matsumoto — Designer / Developer",
    description:
      "松本夏弥 — デザイナー / フロントエンド開発。WORKFLOW DESIGN 代表。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSansJP.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
