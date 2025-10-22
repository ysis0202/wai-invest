import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AdBanner from "@/components/AdBanner";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WAI-Invest | 스마트 리스크 관리 플랫폼",
  description: "오늘 위험한가? 왜 위험한가? 나에겐 무엇을 의미하나? 투자자를 위한 스마트 리스크 관리 플랫폼",
  keywords: ["투자", "리스크관리", "주식", "경제지표", "마켓분석"],
  openGraph: {
    title: "WAI-Invest",
    description: "투자자를 위한 스마트 리스크 관리 플랫폼",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="flex min-h-screen pt-16">
          {/* 왼쪽 광고 영역 - 데스크톱에서만 표시 */}
          <aside className="hidden xl:block xl:w-40 2xl:w-48 flex-shrink-0 bg-slate-800/40">
            <div className="sticky top-4 p-4 flex items-center justify-center min-h-screen">
              <AdBanner
                adFormat="vertical"
                showPlaceholder={true}
                // adClient="ca-pub-XXXXXXXXXXXXXXXX" // 실제 AdSense ID로 교체
                // adSlot="1234567890" // 실제 광고 슬롯 ID로 교체
              />
            </div>
          </aside>

          {/* 메인 콘텐츠 영역 - 항상 표시 */}
          <main className="flex-1 min-w-0">
            {children}
          </main>

          {/* 오른쪽 광고 영역 - 데스크톱에서만 표시 */}
          <aside className="hidden xl:block xl:w-40 2xl:w-48 flex-shrink-0 bg-slate-800/40">
            <div className="sticky top-4 p-4 flex items-center justify-center min-h-screen">
              <AdBanner
                adFormat="vertical"
                showPlaceholder={true}
                // adClient="ca-pub-XXXXXXXXXXXXXXXX" // 실제 AdSense ID로 교체
                // adSlot="0987654321" // 실제 광고 슬롯 ID로 교체 (왼쪽과 다른 ID)
              />
            </div>
          </aside>
        </div>
      </body>
    </html>
  );
}
