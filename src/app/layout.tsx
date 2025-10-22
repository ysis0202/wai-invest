import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
